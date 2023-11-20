# Organisation

## Organisation des dossiers

Voici une arborescence typique d'un dossier de travail en cours d'année :

```
hardware
├── boards
│   ├── pump_2019_f103
│   └── servo_2019_f103
├── digikey-kicad-library
│   ├── digikey-footprints.pretty
│   ├── digikey-symbols
│   └── src
└── libkicad-robot
    ├── @Robot_symbols 
    ├── @Robot.3D
    ├── @Robot.pretty
    ├── datasheets
    ├── projets communs
    └── libeagle-robot

```

On y retrouve 3 dossiers :
* les cartes en cours de travail (le dossier `boards`)
* la librairie du club (le dossier `kicad`)
* la librairie de digikey (le dossier `digikey-kicad-library`)

### Dossier `boards`

Dans ce dossier, il y a pour chaque carte un dossier avec comme nom `<fonction>_<année de la coupe>_<µc>` écrit en [snake_case](https://fr.wikipedia.org/wiki/Snake_case). Dans le dossier de la carte on retrouve :
* le projet kicad, un fichier `.pro`
* le schematic de la carte, un fichier `.sch`
* le routage de la carte, un fichier `.pcb`
NB : la liste des cartes est accessible dans les references de ce chapitre.

### Dossier `libkicad-robot`

On retrouve 6 dossiers importants dans celui-ci :
* Trois dossiers `@Robot` : les librairies de composants propres au Club 
* `datasheets` : les datasheets des composants du club et autres documents importants 
* `projets communs` :  des cartes et des blocs élémentaires qui servent de base aux projets 
* `libeagle-robot` : les anciennes librairies du Club

## Organisation des projets git

Chaque carte a un projet git unique afin de découpler totalement les cartes du la librairie de symbole.

On peut ainsi utiliser l'onglet **release** pour uploader les typons, le plan d'implantation et le *bill of materials* afin de pouvoir retrouver toutes ces informations un jour.

L'onglet **issue** du repo sers à suivre les problèmes et les choses à faire sur la carte.

L'onglet **projet** permet de suivre l'avancement de la carte.

Par exemple pour la carte [deplacement_2019_f103](https://github.com/ClubRobotInsat/deplacement_2019_f103) dans l'onglet [issues](https://github.com/ClubRobotInsat/deplacement_2019_f103/issues) on retrouve les tâches à faire (si elles n'ont pas été toutes faîtes).
