# Architecture du simulateur

Le simulateur est fait pour être modulaire, c'est à dire que l'on peut passer d'une solution graphique à une autre et on peut rajouter des modules pour le robot facilement.

Il y a 5 composantes principales :
* La  [```physique/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/physique/) permet de simuler le comportement de tous les objets physiquement
  en prenant en compte les collisions, les déplacements etc. Pour ce faire, on utilise la librairie [Box2D](http://box2d.org/), un moteur physique.
* Le  [```graphique/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/graphique/) permet d'afficher tous les objets de la table dans un environnement
  3D avec la possibilité de s'y déplacer, de zoomer ... Ici encore, on utilise une librairie, [Irrlicht](http://irrlicht.sourceforge.net/), en tant que moteur graphique.
* La [```gui/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/gui/) gère l'interface utilisateur, affiche des informations utiles (telles que l'état
  du robot par exemple) et permet de piloter le simulateur.
* La [```communication/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/communication/) permets de simuler le comportement des cartes électroniques.
  On peut donc utiliser la même stratégie en réel et sur le simulateur qui demande au robot d'`avancer` de 10 cm par exemple, et l'application va simuler les actions.
* Le [```core/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/core/) permets enfin de tout coordonner pour avoir un simulateur fonctionnel.


## Coeur

Le simulateur est entièrement controllé par la classe [```Simulateur```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/core/Simulateur.h").
Cette classe est instanciée directement dans le `main` et contrôle les différents modules. Elle contient des méthodes pour initialiser le simulateur, 
reset la table, ajouter des robots à la simulation, et terminer proprement une session.

La classe `Simulateur` contient une instance de `World`.

## Communication

La communication du simulateur fonctionne en mirroir de celle de l'IA. Le code a donc plus ou moins la même structure : plusieurs modules, rassemblés dans un `ModuleManager`,
et un communicator pour gérer l'envoi des trames.

Le simulateur implémente ses propres modules spécifiques, qui jouent le rôle des cartes dans le robot réel. Ces modules fonctionnent exactement sur le même principe que les
modules côté IA : ils reçoivent des trames, les lisent, effectuent des actions et envoient de nouvelles trames en réponse.

Le simulateur jouant le rôle des cartes du robot, il envoit une trame seulement en réponse à une trame de la partie informatique. Ce comportement est implémenté dans la méthode
`communicationThread()` du [```SimuCommunicator```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/communication/SimuCommunicator.cpp").

## Partie physique

L'API de la partie physique est constituées de deux interfaces :
[```IPhysicalContext```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/physique/IPhysicalContext.h"), qui permet de créer des objets dans le moteur physique
et [```IPhysicalInstance```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/physique/IPhysicalInstance.h"), qui permet de gérer un objet physique en
particulier.

Le coeur du simulateur ne manipule que ces interfaces, et n'a pas besoin de savoir comment c'est implémenté derrière. L'utilisation d'interfaces de cette manière permet le
**découplage** des différentes parties du simulateur. Pour plus d'information sur le couplage des composants logiciels d'une application, voici un lien vers
[la page Wikipedia]("https://fr.wikipedia.org/wiki/Couplage_(informatique)")

### Implémentation

L'implementation du moteur physique du simulateur est réalisée à l'aide du moteur physique [Box2D]("https://box2d.org/"). Elle se situe dans le dossier
[```physique/box2D/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/physique/box2D/).

Il y a quelques années, le simulateur utilisait un moteur physique en 3D. Même si les simulations étaient plus réalistes, il était difficile de configurer l'environnement
pour que le robot se comporte comme en vrai. C'est pourquoi nous sommes passés à un moteur en 2D.

## Partie graphique

De même que la partie physique, la partie graphique du simulateur est manipulée via deux interfaces, 
[```IGraphicalContext```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/graphique/IGraphicalContext.h") pour créer les objets 3D de l'affichage
et [```IGraphicalInstance```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/graphique/IGraphicalInstance.h") pour modifier les propriétés d'un
objet en particulier.

### Implémentation

Nous utilisons [Irrlicht](http://irrlicht.sourceforge.net/) pour l'implémentation de l'affichage graphique de la simulation. Celle-ci se trouve dans le dossier
[```graphique/irrlicht/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/graphique/irrlicht/).

## Interface utilisateur (GUI)

Pour pouvoir interagir avec le simulateur, il faut des boutons, des champs de texte, etc. Ces fonctionnalités sont assez différentes de l'affichage 3D du simulateur.
De plus, Irrlicht ne nous permet pas de rajouter facilement des éléments d'UI (User Interface) à l'affichage 3D. La GUI est donc un module séparé de l'affichage 3D.
Le coeur du simulateur interagit avec ce module à travers l'interface [```IGuiContext```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/gui/IGuiContext.h").

Le module doit aussi transmettre les ordres de l'utilisateur au simulateur. Pour se faire, il reçoit lors de son initialisation un objet de type 
[```IGuiClient```]("https://github.com/ClubRobotInsat/info/blob/develop/src/simulateur/gui/IGuiClient.h"), qui possède des méthodes permettant d'éxecuter des actions
sur le simulateur.

### Implémentation

La librarie utilisée pour la GUI se nomme [Gtkmm](https://www.gtkmm.org/en/). C'est un port C++ de la librairie C *Gtk* utilisée dans de nombreuses programmes comportant
une interface graphique. Vous pourrez trouver une doc très détaillée de Gtkmm
[ici](https://developer.gnome.org/gtkmm-tutorial/unstable/gtkmm-tutorial.html).

La GUI se compose actuellement d'une fenêtre comportant plusieurs panneaux. Les panneaux sont créés avec [Glade](https://glade.gnome.org/). Ils sont sauvegardés dans
le dossier `gui/gtk/glade/` sous forme de fichiers `.glade`. A la création de la fenêtre, le simulateur charge ces différents panneaux et les ajoute à la fenêtre
principale. Comme ça le placement des composants est déjà fait, il ne reste plus qu'à écrire le code qui exécute l'action demandée par l'utilisateur.

Les différentes classes qui gèrent les panneaux ont toutes un nom de la forme `Panel[Nom du panneau].h/.cpp`. Le `PanelConnect` est un bon exemple si vous voulez implémenter
votre propre panneau !

## Complément sur le couplage :)

```
Section à rédiger
```
