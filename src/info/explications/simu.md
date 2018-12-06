# Architecture du simulateur

Le simulateur est fait pour être modulaire, , c'est à dire que l'on peut passer d'une solution graphique à une autre et on peut rajouter des cartes pour le robot facilement.

Il y a 4 composantes principales :
* La  [```physique/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/physique/) permets de simuler le comportement de tous les objets physiquement en prenant en compte les collisions, les déplacements etc. Pour ce faire, on utilise la librairie [Box2D](http://box2d.org/), on moteur physique.
* Le  [```graphique/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/graphique/) permets d'afficher tous les objets de la table dans un environnement 3D avec la possibilité de s'y déplacer, de zoomer ... Ici encore, on utilise la librairie [Irrlicht](http://irrlicht.sourceforge.net/) en tant que moteur graphique.
* La [```communication/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/communication/) permets de simuler le comportement des cartes électroniques. On peut donc utiliser la même stratégie en réel et sur le simulateur qui demande au robot d'`avancer` de 10 cm par exemple, et l'application va simuler les actions.
* Le [```core/```](https://github.com/ClubRobotInsat/info/tree/develop/src/simulateur/core/) permets enfin de tout coordonner pour avoir un simulateur fonctionnel.
