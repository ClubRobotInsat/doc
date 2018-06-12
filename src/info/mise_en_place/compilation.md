# Compilation

Dans cette section, nous allons t'installer tous les outils qui te permettront de compiler le projet informatique.

## Logiciels nécessaires

On utilise les outils suivants :
- `git` : gestionnaire de versions pour le code, que tu as déjà dû installer
- `cmake` : grâce aux différents `CMakeLists.txt`, le projet se compile très facilement en invoquant `cmake` puis `make` (nous verrons plus tard comment utiliser cet outil)
- `clang-format` : cet utilitaire permets d'homogéniser tout le code pour qu'il respecte la même norme d'écriture
- `libbox2d-dev`, `libirrlicht1.8` : ces librairies permettent d'utiliser le simulateur du club

Heureusement, un script s'occupe d'installer tous ces outils et d'autres encore pour assurer la compilation sans erreur du projet. Voici comment l'appeler (en considérant que vous êtes dans le dossier `info`):

```bash
scripts/install.sh tools
```

## Applications recommandées
### Formattage du code

Un *hook* permets de lancer un script à chaque commit pour formater le code comme il faut :
```bash
scripts/install.sh format
```

### _gcc_ recent en tant que compilateur
#### version 6
```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-6 g++-6
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-6 60 --slave /usr/bin/g++ g++ /usr/bin/g++-6
```

#### version 7
Si vous êtes sur Ubuntu 17.04 (ou plus récent) :
```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
```
Sinon :
```bash
sudo add-apt-repository ppa:jonathonf/gcc-7.1
```

Puis :
```bash
sudo apt-get update
sudo apt-get install gcc-7 g++-7
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 60 --slave /usr/bin/g++ g++ /usr/bin/g++-7
```

## Autres installations
### Lib Wiimote

Si tu veux pouvoir contrôler le robot à l'aide d'une WiiMote, il faut installer la librairie `WiiC` nécessaire aux démos :
```bash
scripts/install.sh wii
```

### *Clang* en tant que compilateur

Si tu veux utiliser un autre compilateur par défaut (`[clang](https://clang.llvm.org/)`), voici les commandes à utiliser :
```bash
sudo apt-get install clang-3.8
sudo update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang++-3.8 100
```

Cependant, tous les membres actuels utilisent `gcc` par défaut.

### Petrilab

Ce logiciel permets d'éditer des [réseaux de Petri](https://fr.wikipedia.org/wiki/R%C3%A9seau_de_Petri). Il a été développé en interne par [rems4e](https://github.com/rems4e) et il nous permets de créer graphiquement des stratégies.

Son installation actuelle est vouée à évoluer prochainement pour le plus avoir les fichiers binaires directement dans le dépôt git, et les systèmes d'exploitation pris en charge pour le moment sont les suivants :

- Ubuntu 14.04 `Trusty`
- Ubuntu 16.04 `Xenial`
- Ubuntu 17.04 `Zesty`

Pour avoir des informations sur ton OS, utilise la commande `lsb_release --all` ; s'il correspond à ceux disponibles, alors tu peux simplement appeler le script d'installation :
```bash
scripts/install.sh petri
```

## Problèmes de compilation connus

- Problème de *clock skew* ? Il suffit de lancer `find -exec touch \{\} \;` dans le dossier `info`. Attention, cela peut être un petit peu long.

## Test de l'environnement de travail

A présent que ton ordinateur est totalement configuré, il est temps de compiler le code !

L'interface de CLion peut paraître compliquée de prime abord, c'est pourquoi il ne faut pas hésiter à demander de l'aide à un membre du Club.

Une des fonctionnalités les plus utilisées est celle de la compilation intégrée. Pour cela, en haut à droite de la fenêtre, choisis la target `BuildAll`. Comme tu peux le voir, de nombreuses applications peuvent être compilées, et on veut actuellement s'assurer que tout compile chez toi. Ensuite, appuie sur le bouton à gauche de la liste déroulante pour compiler. Attention, ça va prendre un peu de temps.

<p align="center">
<img src="assets/ide/BuildAll.png" alt="CLion et sa fonctionnalité BuildAll">
</p>

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès tout l'environnement de travail !

Sinon, je te conseille de te rapprocher d'un membre du pôle informatique.

