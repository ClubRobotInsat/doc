# Communication avec le hardware

En robotique, il est crucial de pouvoir communiquer entre l'ordinateur décisionnaire et avec l'ensemble des capteurs / moteurs qui animent le robot.

## Histoire de la communication dans le Club

Historiquement, le robot du Club était composé d'une multitude de cartes décentralisées et chacune avait une fonction spéficique (s'occuper de tous les servos moteurs par exemple). Ces cartes étaient reliées par un [bus CAN](https://fr.wikipedia.org/wiki/Bus_de_donn%C3%A9es_CAN) avec l'ordinateur et de nombreuses trames transitaient de manière asynchrone.

Cependant, le savoir de l'utilisation des technologies utilisées (des microcontrôleurs à PIC) s'est perdue et entre 2017 et 2019, on a décidé de changer l'architecture pour
* maîtriser l'ensemble de la chaîne entre le hard et le soft
* réaliser une documentation et un code propre pour faciliter le maintien et la passation du savoir
* avoir une solution rapide pour remplacer de l'électronique en cas de dysfonctionnement
* augmenter les capacités des cartes électrniques

Ainsi, on a à présent une architecture centralisée. Toute l'électronique est regroupée en une seule carte industrielle [STM32 Nucleo](https://eu.mouser.com/new/stmicroelectronics/stm-nucleo-development-boards/). La communication avec le soft reste par une communication UART mais le format de communication a lui aussi évolué.

---

Il est maintenant temps de rentrer dans les détails techniques de la communication centralisée

## Trames de communication

Le but est d'utiliser les bénéfices d'une communication entre deux 'cartes mères', et donc de partager le maximum d'informations entre l'informatique et l'électronique. Ainsi, les trames ne correspondent plus à un ordre sporadique addressé au hardware, mais elles regroupent l'ensemble de l'état du robot.

L'ordinateur envoie l'état du robot tel qu'il souhaite l'être, et la carte électronique travaille pour atteindre l'état voulu. Cet état général est envoyé par l'info puis renvoyé par l'élec et ce en permanence, avec une fréquence de **FIXER LA FREQUENCE**.

Le format de l'état se veut modulaire, afin de pouvoir être utilisé quel que soit le robot. Concrètement, la carte électronique est considérée comme un ensemble de modules indépendants (déplacement, évitement, moteurs, servos, capteurs...) qui possèdent chacun un ID, avec un **maximum de 16** modules connectés.

La tableau suivant regroupe les IDs des modules 'génériquement', mais il n'est bien sûr pas figé.

|  ID  |    Module   |
|:----:|:-----------:|
| 0x01 | Déplacement |
| 0x02 |    Servos   |
| 0x03 |      IO     |
| 0x04 |  Évitement  |
| 0x05 |   Moteurs   |
| 0x06 |   Capteurs  |

---

## Format général d'une trame

Lorsque la partie informatique communique avec la carte appropriée à propos d'un module, les informations partagées sont encapsulées suivant plusieurs blocs :

* Chaque module sait parser _(ie lire et écrire)_ un flux d'octets arrangés selon sa norme. La taille de la trame qui est partagée est dépendante du module, et la spécification des trames de chaque module peut se trouver [à la fin de ce fichier](https://github.com/ClubRobotInsat/librobot/blob/master/c_src/SharedWithRust.h). Elle est également spécifiée plus loin dans ce fichier.
* Pour savoir à quel module est addressé la trame, on rajoute son **`ID`** devant la trame.
* Enfin, la trame est envoyée sur le support physique :
  * dans le cas d'une liaison UDP, la taille de la trame se retrouve grâce aux informations du protocole de transport, donc il suffit d'envoyer un message contenant les données `{ID, trame}`
  * pour toutes les autres communications série, on encapsule `{ID, trame}` dans un header qui contient :
    * 4 octets qui permettent de distinguer le début d'une trame intéressante ; c'est nécessaire car on est dans une communication asynchrone. Dans le cas du club, elles commencent par le pattern `0xAC DC AB BA` pour spécifier leur début
    * 1 octet pour contenir la taille du message intéressant, c'est à dire la taille de `{ID, trame}`

## Création d'une liaison de communication

La classe [`Communicator`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Communication/Communicator.h) s'occupe se gérer la communication élec-info. Il suffit de faire appel à la méthode `connect` avec les bons arguments et la bonne liaison série est instanciée puis est capable de lire et écrire des trames.

Cet objet est capable de parler sur n'importe quel médium de communication, en faisait appel à un [`Protocol`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Communication/Protocol.h). La première méthode appelable est `send_frame`, qui envoie une trame ; la seconde doit être lancée dans un thread spécifique et permets de recevoir des données pour les traiter avec un handler à fournir : `recv_frame(const atomic_bool& b, function<void(GlobalFrame)>)`. Le premier argument permets d'interrompre la fonction, qui est bloquée dans un `while(b)`.

Voici les protocoles  possibles avec leurs arguments :
* **Liaisons séries**
  * `protocol_null` : ` `, toutes les trames sont perdues
  * `protocol_tcpip` : `string address, uint16_t port` connexion TCP client vers le serveur `address:port`
  * `protocol_local` : ` `, les trames sont envoyées en TCP vers un le serveur `localhost:4321`
  * `protocol_pipes` : `string rx, string tx`, lecture et écriture sur des pipes nommées ; par défaut : `rx: "/tmp/read.pipe"`, `tx: "/tmp/write.pipe"`
  * `protocol_udp` : `string address, uint16_t local_port, uint16_t remote_port`, liaison UDP depuis le port local vers le serveur UDP `address:remote_port`. Ce protocole peut être utilisé dans les deux sens de communication, contrairement à l'implémentation actuelle de `protocol_tcpip`.
* **Communications sur plusieurs liaisons séries**
  * `protocol_ethernet` : `initializer_list<UDPConnection>`, permets de centraliser `N` connections UDP en un unique appel à un thread de réception bloquant. Ce protocole gère aussi l'association `id_module <-> UDP communication thread`.

![UML de la communication](../../images/info/communication.png)

---

## Modules spécialisés

Chaque module a un rôle particulier (gérer les servos, se déplacer, détecter l'adversaire, capter des infos dans ce monde de sauvage, ...). Pour faciliter la maintenabilité du code, des parties sont mises en commun entre l'info et l'élec.

Les deux parties utilisent un langage de programmation différent donc le seul moyen de partager des bouts de code est de passer par le langage [`C`](https://en.wikipedia.org/wiki/C_%28programming_language%29) (ne t'inquiète pas, tu n'auras pas à l'utiliser beaucoup dans ce Club).

`C++` sait directement utiliser les fonctions `C`, mais ce n'est pas le cas pour `Rust` ; il faut passer par une *[Foreign Function Interface](https://doc.rust-lang.org/book/first-edition/ffi.html)*, ou **FFI** pour les intimes.
Il faut écrire les structures à l'identique en `C` et en `Rust` *(TODO : générer les structs Rust à partir des structs C)*, mais le code de lecture/écriture de trames n'est écrit qu'une seule fois en `C`. Ensuite, des interfaces plus haut niveau wrappent le `C` pour aboutir à du code safe et utilisable.

### Format du module `Servos2019`

[Cette classe](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Modules/Servos2019.h) permets de gérer un ensemble de [servos-moteurs](https://www.robotshop.com/media/files/pdf/manual-drs-0101.pdf) en connaissant l'ensemble des informations qui leur sont propres et dont l'état est partagé avec les élecs.

Pour avoir une idée technique de son API, je te conseille d'aller voir directement le code source.
L'interface permets de rajouter des servos (ID > 0) puis de contrôler chaque partie avec des fonctions thread-safe.

La sûreté par rapport au partage des données se fait grâce à une [variable mutex](http://www.cplusplus.com/reference/mutex/) partagée et qui est bloquée à chaque accès sur des variables : si la trame des servos est en cours de génération, l'écriture du nouvel angle doit attendre pour que le mutex soit libéré.

Actuellement, cette classe gère 8 servos (la valeur est constante dans le code) et la trame associée est définie ainsi :

```
<nb_servo: u8>
<[<id: u8> <position: u16> <wanted_position: u16> <speed: u8> <blocking data, color: u8>] ...>
```

### Format du module `Motors2019`

Cette classe fournit une interface pour travailler avec 8 moteurs asservis, 8 moteurs non-asservis et 8 brushless, dont les fonctions associées sont spécifiques. Voici la trame qui spéficie les informations de tout ce beau monde :

```
<nb_controlled: u8>
<nb_uncontrolled: u8>
<nb_brushless: u8>
<[<id: u8> <wanted_angle: u8> <wanted_nb_turns: u8> <finished, new_command: u8>] ...>
<[<id: u8> <on_off: u8>] ...>
<[<id: u8> <on_off: u8>] ...>
```

### Format du module `IO2019`

Cette classe est un vestige d'une ancienne façade avec plein de boutons *(pour choisir la couleur, le type de connexion...)*. Elle ne sert actuellement qu'à détecter si la tirette est enclenchée ou non et ne relaye donc qu'un Booléen par l'intermédiaire de cette structure de trame :

```
<tirette: uint8_t>
```

### Format du module `Moving2019`

***TODO***

### Format du module `Avoidance2019`

***TODO***

---

## Interface de communication

Comme tu l'as vu dans les parties précédentes, on possède à présent plein de modules qui gèrent des aspects différents du robot, et le `ModuleManager` offre un interfaçage facile pour connaître l'état du robot.

On peut générer l'état global du robot dans une trame, et mettre à jour le robot depuis une trame globale ; il ne reste plus qu'à gérer la communication entre l'info et l'élec !

Pour cela, tu peux aller voir [du côté du communicateur](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Communication/ElecCommunicator.h). Son but est d'avoir en paramètre une classe qui lit et écrit des `GlobalFrame`s, ainsi qu'un médium de communication et il gère automagiquement la communication pour se connecter, exécuter le protocole de transmission de trames et arrêter à sa destruction la communication.

Afin d'être aussi général que possible, le communicateur peut prendre en paramètre n'importe quel objet qui donne accès aux fonctions de parsing :

* `void read_frame(const GlobalFrame&);`
* `GlobalFrame write_frame() const;`

Si l'objet fourni ne possède pas ces deux définitions, la méthode `communicate_with_elecs` *(sencée être exécutée dans un thread pour recevoir et envoyer les trames)* devient inaccessible ; si la méta-programmation ne te fait pas peur tu peux aller voir [comment vérifier l'existance des fonctions de parsing](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Communication/ParsingClassChecker.hpp).

---

## Conclusion

Voici un récapitulatif des couches d'abstraction que l'on vient d'aborder dans ce document :

* [Couche descriptive en `C`](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Modules/SharedWithRust.h)
    - la description de chaque module est entreposée dans des structs
    - les fonctions de lecture/écriture des trames associées sont définies en `C`

* Wrapping de ces structures brutes *[lien](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Modules/)*
    - du code `C++` et `Rust` (respectivement pour les infos et les élecs) englobe ces C-structs
    - nombreux avantages : rajout de sécurité, tests et interface fonctionnelle

* le [`ModuleManager`](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Modules/ModuleManager.h) regroupe tous ces modules
    - manipulation facilitée
    - tout l'état du robot est centralisé
    - parsing des trames globales

* [communication avec les élecs](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Communication/ElecCommunicator.h) depuis les fonctions de parsing du `ModuleManager`
