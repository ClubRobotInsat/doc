# Communication avec le hardware

En robotique, il est crucial de pouvoir communiquer entre l'ordinateur décisionnaire et avec l'ensemble des capteurs / moteurs qui animent le robot.

## Histoire de la communication dans le Club

Historiquement, le robot du Club était composé d'une multitude de cartes décentralisées et chacune avait une fonction spéficique (s'occuper de tous les servos moteurs par exemple). Ces cartes étaient reliées par un [bus CAN](https://fr.wikipedia.org/wiki/Bus_de_donn%C3%A9es_CAN) avec l'ordinateur et de nombreuses trames transitaient de manière asynchrone.

Cependant, le savoir de l'utilisation des technologies utilisées (des microcontrôleurs à PIC) s'est perdue et entre 2017 et 2019, on a décidé de changer l'architecture pour
* maîtriser l'ensemble de la chaîne entre le hard et le soft
* réaliser une documentation et un code propre pour faciliter le maintien et la passation du savoir
* avoir une solution rapide pour remplacer de l'électronique en cas de dysfonctionnement
* augmenter les capacités des cartes électroniques

Ainsi, on a à présent une architecture décentralisée sur plusieurs cartes industrielles [STM32 Nucleo](https://eu.mouser.com/new/stmicroelectronics/stm-nucleo-development-boards/). La communication avec le soft se fait par ethernet, ce qui augmente la facilité de maintenance, la fiabilité et la puissance de communication.

---

Il est maintenant temps de rentrer dans les détails techniques de cette communication décentralisée.

## Trames de communication

Le but est d'utiliser les bénéfices d'une communication entre deux 'cartes mères', et donc de partager le maximum d'informations entre l'informatique et l'électronique. Ainsi, les trames ne correspondent plus à un ordre sporadique addressé au hardware, mais elles regroupent l'ensemble de l'état du robot.

L'ordinateur envoie l'état du robot tel qu'il souhaite l'être, et la carte électronique travaille pour atteindre l'état voulu. Cet état général est envoyé par l'info puis renvoyé par l'élec et ce en permanence, avec une fréquence de **FIXER LA FREQUENCE**.

Le format de l'état se veut modulaire en JSON, afin de pouvoir être utilisé quel que soit le robot. Concrètement, la carte électronique est considérée comme un ensemble de modules indépendants (déplacement, évitement, moteurs, servos, capteurs...) qui possèdent chacun un ID, avec un **maximum de 16** modules connectés.

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

* Chaque module sait parser _(ie lire et écrire)_ un flux d'octets qui correspond à un format texte JSON, qui est très simple à lire. La spécification de la structure de données échangées dépend de chaque module et peut se trouver [dans ce dossier](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules). Elle est également spécifiée plus loin dans ce document.
* Pour savoir à quel module est addressé la trame, on rajoute son **`ID`** devant la trame sur un `u8`.
* Enfin, la trame est envoyée sur le support physique :
  * dans le cas d'une liaison UDP, la taille de la trame se retrouve grâce aux informations du protocole de transport, donc il suffit d'envoyer un message contenant les données `{ID, trame}`. Les addresses IP utilisées sont les suivantes : `192.168.<ID robot>.<ID module>`, avec `<ID robot>` valant respectivement `0` et `1` pour les robots primaire et secondaire.
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

![UML de la communication](/images/info/communication.png "Diagramme UML de la communication")

---

## Modules spécialisés

Chaque module a un rôle particulier (gérer les servos, se déplacer, détecter l'adversaire, capter des infos dans ce monde de sauvage, ...). Pour faciliter la maintenabilité du code, des parties sont mises en commun entre l'info et l'élec.

Les deux parties utilisent un langage de programmation différent donc les deux parties doivent utiliser le même protocole pour communiquer. La solution retenue est d'envoyer des messages en format JSON encapsulés dans de l'UDP via une liaison ethernet.

Les formats de JSON sont appropriés pour le debug car les messages sont lisibles avec [wireshark](www.wireshark.org). De plus, ils sont bien plus maintenables car le code est bien plus simple (on utilise des librairies pour parser le JSON).

LQ seule prérogative pour la partie en `Rust` est de déclarer des structures de données qui correspondent aux formats transités en JSON.

### Format du module [`Servos`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/Servos.h)

[Cette classe](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/Servos.h) permets de gérer un ensemble de [servos-moteurs](https://www.robotshop.com/media/files/pdf/manual-drs-0101.pdf) en connaissant l'ensemble des informations qui leur sont propres et dont l'état est partagé avec les élecs.

Pour avoir une idée technique de son API, je te conseille d'aller voir directement le code source.
L'interface permets de rajouter des servos (ID > 0) puis de contrôler chaque partie avec des fonctions thread-safe.

La sûreté par rapport au partage des données se fait grâce à une [variable mutex](http://www.cplusplus.com/reference/mutex/) partagée et qui est bloquée à chaque accès sur des variables : si la trame des servos est en cours de génération, l'écriture du nouvel angle doit attendre pour que le mutex soit libéré.

Actuellement, cette classe gère 8 servos (la valeur est constante dans le code) et la trame associée est définie ainsi :

```
<id>
{
  "id": <u8>,
  "known_position": <u16>,
  "control": "[Position|Speed]",
  "data": <u16>,
  "rotation": "[Clockwise|CounterClockwise]",
  "blocked": <bool>,
  "mode": "[Unblocking|HoldOnBlock]",
  "color": "[Block|Red|Green|Yellow|Blue|Magenta|Cyan|White]"
}
```

Les états de chaque servomoteur est envoyé individuellement par le module pour limiter l'impact d'une perte de paquet ainsi que pour faciliter la lecture des trames.

### Format du module [`Motors`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/Motors.h)

[Cette classe](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/Motors.h) fournit une interface pour travailler avec 8 moteurs asservis, 8 moteurs non-asservis et 8 brushless, dont les fonctions associées sont spécifiques. Voici la trame qui spéficie les informations de tout ce beau monde :

```
<id>
{
  ## TODO
}
```

### Format du module [`IO`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/IO.h)

[Cette classe](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/IO.h) est un vestige d'une ancienne façade avec plein de boutons *(pour choisir la couleur, le type de connexion...)*. Elle ne sert actuellement qu'à détecter si la tirette est enclenchée ou non et ne relaye donc qu'un Booléen par l'intermédiaire de cette structure de trame :

```
<id>
{
  "tirette": <bool>
}
```

### Format du module [`Navigation`](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/Navigation.h)

***TODO***

---

## Interface de communication

Comme tu l'as vu dans les parties précédentes, on possède à présent plein de modules qui gèrent des aspects différents du robot, et le `ModuleManager` offre un interfaçage facile pour connaître l'état du robot.

On peut générer l'état global du robot dans une trame, et mettre à jour le robot depuis une trame globale ; il ne reste plus qu'à gérer la communication entre l'info et l'élec !

Pour cela, tu peux aller voir [du côté du communicateur](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Commun/Communication/ElecCommunicator.h). Son but est d'avoir en paramètre une classe qui lit et écrit des `GlobalFrame`s, ainsi qu'un médium de communication et il gère automagiquement la communication pour se connecter, exécuter le protocole de transmission de trames et arrêter à sa destruction la communication.

Afin d'être aussi général que possible, le communicateur peut prendre en paramètre n'importe quel objet qui donne accès aux fonctions de parsing :

* `void read_frame(const GlobalFrame&);`
* `std::vector<GlobalFrame> write_frame() const;`

Si l'objet fourni ne possède pas ces deux définitions, la méthode `communicate_with_elecs` *(sencée être exécutée dans un thread pour recevoir et envoyer les trames)* devient inaccessible ; si la méta-programmation ne te fait pas peur tu peux aller voir [comment vérifier l'existance des fonctions de parsing](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Communication/ParsingClassChecker.hpp).

---

## Conclusion

Voici un récapitulatif des couches d'abstraction que l'on vient d'aborder dans ce document :

* Wrapping de structures brutes en JSON pour connaître l'état de chaque module : *[lien](https://github.com/ClubRobotInsat/info/tree/develop/src/robot/Modules/)*
    - du code `C++` et `Rust` (respectivement pour les infos et les élecs) englobe ces C-structs
    - nombreux avantages : rajout de sécurité, tests et interface fonctionnelle

* le [`ModuleManager`](https://github.com/ClubRobotInsat/info/tree/develop/src/robot/Modules/ModuleManager.h) regroupe tous ces modules
    - manipulation facilitée
    - tout l'état du robot est centralisé
    - parsing des trames globales

* [communication avec les élecs](https://github.com/ClubRobotInsat/info/tree/master/src/robot/Communication/Communicator.h) depuis les fonctions de parsing du `ModuleManager`
