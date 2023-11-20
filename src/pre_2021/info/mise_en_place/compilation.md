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

Cette section ne s'applique que si tu as eu un problème lors de l'exécution du script d'installation, pour `gcc-7` et `g++-7`.

Pour pouvoir compiler l'ensemble du code, il te faut un compilateur supportant `C++ 17`, donc au minimum `g++-7`.

#### version 7
Si tu es sur un ancien Ubuntu (avant 17.04) :
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
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 70 --slave /usr/bin/g++ g++ /usr/bin/g++-7
```

Si tu es sur Ubuntu 18, tu peux même installer `g++-8` :
```bash
sudo apt-get update
sudo apt-get install gcc-8 g++-8
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 80 --slave /usr/bin/g++ g++ /usr/bin/g++-8
```

#### Cross-compilation

Pour pouvoir compiler du code qui sera compris par la raspberry (et pas que par ton ordinateur), tu vas avoir besoin d'autres versions de gcc. Pour les installer, tape simplement :
```sudo apt install g++-8-arm-linux-gnueabihf gcc-8-arm-linux-gnueabihf```

## Autres installations
### Lib Wiimote

Si tu veux pouvoir contrôler le robot à l'aide d'une WiiMote, il faut installer la librairie `WiiC` nécessaire aux démos :
```bash
scripts/install.sh wii
```

### *Clang* en tant que compilateur

Si tu veux utiliser un autre compilateur par défaut ([`clang`](https://clang.llvm.org/)), voici les commandes à utiliser :
```bash
sudo apt-get install clang-3.8
sudo update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang++-3.8 100
```

Cependant, tous les membres actuels utilisent `gcc` par défaut.

### Petrilab

Ce logiciel permets d'éditer des [réseaux de Petri](https://fr.wikipedia.org/wiki/R%C3%A9seau_de_Petri). Il a été développé en interne par [rems4e](https://github.com/rems4e) et il nous permets de créer graphiquement des stratégies.

Son installation actuelle est vouée à évoluer prochainement pour le plus avoir les fichiers binaires directement dans le dépôt git, et les systèmes d'exploitation pris en charge pour le moment sont les suivants :

- Ubuntu 14.04 `Trusty`
- Ubuntu 17.04 `Zesty`
- Ubuntu 18.04 `Bionic`

Pour avoir des informations sur ton OS, utilise la commande `lsb_release --all` ; s'il correspond à ceux disponibles, alors tu peux simplement appeler le script d'installation :
```bash
scripts/install.sh petri
```

## Problèmes de compilation connus

- Problème de *clock skew* ? Il suffit de lancer `find -exec touch \{\} \;` dans le dossier `info`. Attention, cela peut être un petit peu long.
- Problème lors d'un appel à `cmake` ? Commence par *clean* tous les fichiers générés : `Tools > CMake > Reset Cache and Reload Project`.

## Test de l'environnement de travail

A présent que ton ordinateur est totalement configuré, il est temps de compiler le code !

L'interface de CLion peut paraître compliquée de prime abord, c'est pourquoi il ne faut pas hésiter à demander de l'aide à un membre du Club.

Une des fonctionnalités les plus utilisées est celle de la compilation intégrée. Pour cela, en haut à droite de la fenêtre, choisis la target `BuildAll`. Comme tu peux le voir, de nombreuses applications peuvent être compilées, et on veut actuellement s'assurer que tout compile chez toi. Ensuite, appuie sur le bouton à gauche de la liste déroulante pour compiler. Attention, ça va prendre un peu de temps.

![CLion et sa fonctionnalité `BuildAll`](/images/ide/BuildAll.png)

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès tout l'environnement de travail !

Sinon, je te conseille de te rapprocher d'un membre du pôle informatique.
