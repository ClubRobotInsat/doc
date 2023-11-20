# Détection de l'adversaire : LIDAR

Jusqu'à présent, la détection de l'adversaire venait d'un projet *home-made* du club : un laser monté sur tourelle envoyait un rayon laser autour de la base. Une pièce réfléchissante était posée sur les robots adverses et le système était capable de connaître une valeur booléenne sur la présence d'un adversaire. Mécaniquement, le rayon passait soit au-dessus soit en-dessous de l'adversaire s'il n'était pas dans un rayon de 30 à 50 centimètres de notre robot. Les électroniques étaient enfin capables de nous donner l'angle auquel le robot a été détecté.

## Explications

Cette solution s'est inclinée face à l'utilisation de [LIDAR]()s depuis 2019. Il s'agit d'un capteur beaucoup plus précis que notre ancienne tourelle, qui map en 2D son environnement avec des lasers. En sortie, on a une liste de distances qui représentent N points détectés à une certaine distance de notre robot.

Le code développé en interne au club permets d'utiliser deux LIDARs différents : **[Hokuyo](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/Doc/Doc\ Hokuyo.pdf)** et **[SICK TiM55x](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/Doc/doc_SICK.pdf)**, le plus précis.

Dans un premier temps, un [code driver](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/Driver) est capable de communiquer avec chacun de ces LIDARs. Pour avoir une interface d'acquisition, il suffit d'utiliser ce code :

```cpp
#include "Lidar/Driver/lidar.h"
std::unique_ptr<Lidar> my_lidar = Lidar::open_lidar(Lidar::Any);
```

### SICK TiM55x

Pour utiliser ce capteur, il faut exécuter le code en tant que `root`. De plus, il faut actuellement brancher l'électronique sur une alimentation à `16V / 0.2 A` pour brancher le câble circulaire à 5 broches sur le LIDAR. Il faut utiliser un autre câble USB que celui soudé entre le LIDAR et l'ordinateur.

## Capacités actuelles

Le code est capable de [filtrer](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/filtre.h) les trames d'acquisition. Ces points sont [entreposés dans un plan 2D](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/lidarsToGrid.h) en fonction des [coordonnées](https://github.com/ClubRobotInsat/info/blob/develop/src/commun/MathToolbox/Repere.h) du lidar ce qui permets de connaître la position absolue de chaque point dans un repère quelconque, quelque soit la position initiale du robot.

Grâce à la grande précision des LIDARs, la cartographie de toute la table est possible. Vu que le LIDAR est placé tout en haut de notre robot, les seuls points observés par le LIDAR représentent des points sur la table *(les arbitres n'influent pas sur les acquisitions)* en-dehors des objets à manipuler. Ainsi, seuls les robots adverses sont vus par le LIDAR, et donc les objets détectés par le LIDAR [sont considérés comme des robots adverses](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/FindRobots.h).

## Intégration dans le code

Ce capteur est externe au travail dans électroniciens donc la classe [Robot](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Robot.h) contient directement une instance d'un [LIDAR](https://github.com/ClubRobotInsat/info/blob/develop/src/Lidar/lidar.h) en plus du [ModuleManager](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Modules/ModuleManager.h). Il donne à disposition l'accès à `optional<FrameLidar> get_lidar_frame() const`, qui est ensuite utilisée [dans la stratégie](https://github.com/ClubRobotInsat/info/blob/develop/src/robot/Strategy/AbstractStrategy.h) pour détecter les adversaires en fonction de la position du robot.
