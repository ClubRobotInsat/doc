# Création d'un robot

Dans la [partie précédente](info/explications/communication.md), tu as vu comment sont gérées la communication et la représentation électronique des différents modules.

À présent, il est temps de voir comment le code informatique gère l'abstraction d'un robot !

## Le regroupement des constantes

Le choix a été fait de définir toutes les constantes dans un même [fichier d'initialisation](https://github.com/ClubRobotInsat/info/blob/simu-elec/src/robot.ini).

Ça permets notamment d'avpor un moyen de changer une constante (la durée d'un match, la composition modulaire des robots...) sans avoir à recompiler tout le projet, et donc de gagner du temps.

On utilise le [format INI](https://en.wikipedia.org/wiki/INI_file), comoposé de sections, de clefs et de valeurs ; le fichier est lisible et facilement maintenable.

## Accès aux constantes dans le code

Toutes les constantes sont initialisées en C++ dans [ce fichier](https://github.com/ClubRobotInsat/info/blob/simu-elec/src/commun/Constants.h). Une instance des constantes est définie globalement et il suffit de ce code pour récupérer des informations :

```cpp
#include <Constants.h>

int main() {
  Duration match = GLOBAL_CONSTANTS.get_match_duration();
}
```

Bien entendu, ces constantes servent à définir globalement un match (temps de jeu, taille de la table...) mais elles permettent également de définir les robots présents sur la table, comme nous allons le voir.

## L'objet `Robot`

Conceptuellement, un robot a besoin de répondre à différents critères :
1. il possède une architecture électronique et donc mécanique
2. sa partie informatique _(décisionnelle)_ est capable de communiquer avec sa partie électronique _(applicative)_
3. il peut prendre des décisions pour évoluer dans son environnement

Ça tombe bien, parce qu'on a à notre disposition le `ModuleManager` qui résoud le problème **1**, et l'`ElecCommunicator` qui correspond au **2**. Enfin, la partie **3** est une fonction réalisée à un niveau d'abstraction supérieur, et on va l'aborder dans la section ***Stratégie***.

Un `Robot` a donc deux rôle sprincipaux : il gère le `ModuleManager` et s'occupe de la communication en lançant dans un [thread](https://en.cppreference.com/w/cpp/thread/thread) la communication.

Afin de simplifier son utilisation à la fois dans le contexte de la Coupe et afin de débuguer les modules électroniques.

* On peut construire l'électronique 'à la main' en créant un `ModuleManager` puis en le donnant au constructeur du `Robot` :

```cpp
auto m = std::make_shared<Commun::ModuleManager>();

auto& servos = m->add_module<Commun::Servos2019>(2);
servos.add_servo(5, 120_deg);
servos.add_servo(6, 50_deg, Commun::Servos2019::BlockingMode::HOLD_ON_BLOCKING);

Commun::Robot robot(m, {"prog", "PIPES"});
```

* Utilisation du fichier `src/robot.ini` dans lequel on peut définir en dehors du programme les variables d'initialisation pour n'importe quel robot (`primary`, `secondary`, `adversary`, `best_robot_of_the_world`...). Un robot initialisé à partir d'un `ModuleManager` se nomme `guest`, donc le nom est réservé :smile:

```ini
[robot.primary]
position_x=250        ; mm
position_y=1500       ; mm
size_x=300            ; mm
size_y=300            ; mm
size_z=420            ; mm
angle=-90             ; deg

[robot.primary.modules]
moving=1
servos=2
motors=3
avoidance=4
io=5
```

---

Il est donc très facile de créer une instance qui possède à la fois l'architecture électronique et qui s'occupe de la communication.

Je te laisse te reporter aux différents tests pour avoir des exemples de comment l'utiliser (pour tester les servos par exemple) ; les robots complets utilisés pendant les matches sont utilisés dans la `Strategy`.
