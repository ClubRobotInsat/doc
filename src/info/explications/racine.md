# Architecture de la racine du projet info

Si tu as déjà regardé des projets C++, tu as certainement dû te rendre compte d'une certaine similaritude entre les dossiers tout en haut de l'architecture.
Cette 'normalisation' permets de passer d'un projet à un autre sans être perdu, et bien sûr une architecture bien structurée permets de gagner beaucoup de temps.

Je te propose un listing des items qui valent un coup d'oeil. Pour rappel, tu peux regarder le code durant ta lecture sur [github](https://github.com/ClubRobotInsat/info) et tu peux cliquer sur les liens de chaque fichier.

## Fonctionnement de `git`

Afin de proposer tous ses services, `git` a besoin d'un certain nombre de fichiers de configuration. Voici ses principaux ainsi que leur rôle :

* **`.git/`** - Ce dossier contient toutes les informations utiles à `git` pour gérer le répertoire de travail. Je te conseille grandement de voir ce dossier comme une boîte noire et de ne pas y bidouiller des fichiers au risque de tout casser !

* **[`.gitignore`](https://github.com/ClubRobotInsat/info/blob/develop/.gitignore)** - Cette fonctionnalité de `git` est très intéressante : elle permets de demander au logiciel d'ignorer les fichiers spécifiés. Par exemple, on demande à `git` de ne pas `commit` les exécutables à chaque fois car ça n'a aucun intérêt et ça prendrait bien trop de place.

* [`.gitmodules`](https://github.com/ClubRobotInsat/info/blob/develop/.gitmodules) - On travaille avec d'autres projets open source et `git` propose des sous-modules qui correspondent à des dossiers dont l'origine vient d'un autre projet. On peut donc utiliser des librairies développées par d'autres personnes sans devoir passer du temps nous-mêmes à les créer. Attention cependant, si tu veux rajouter un sous-module au projet, il vaut mieux utiliser la commande `git submodule add <lien> [chemin local]` pour être sûr de bien tout configurer, puis il faut faire appel à `git submodule update --init --recursive --remote` pour mettre à jour tous les submodules (mais cette commande est automatisée à chaque appel à `cmake`).

* [`.gitattributes`](https://github.com/ClubRobotInsat/info/blob/develop/.gitattributes) - On demande explicitement à `git` de considérer certains fichiers d'une certaine manière, par exemple tous les `.petri` comme des fichiers binaires (dans notre cas, ça évite de polluer l'affichage des commits sur github).

## Fichiers
* **[`LICENSE`](https://github.com/ClubRobotInsat/info/blob/develop/LICENSE)** - Ce fichier permets de spécifier la license utilisée pour la mise en open source du code ; on utilise la [license MIT](https://opensource.org/licenses/MIT) et je t'invite à te renseigner sur les [licenses d'open source](https://opensource.org/licenses) si le domaine de l'open source t'intéresse.

* **[`README.md`](https://github.com/ClubRobotInsat/info/blob/develop/README.md)** - Ce fichier est présent dans tous les répertoires hébergés sur [github.com](https://github.com). Il permets de savoir ce qu'il y a dans le dépôt, donner des explications sur le code, faire de la documentation ou encore donner des références vers d'autres projets ; la rédaction de ce fichier est très libre.

* **[`CMakeLists.txt`](https://github.com/ClubRobotInsat/info/blob/develop/CMakeLists.txt)** - Il s'agit du fichier de configuration de [cmake](https://cmake.org/) global à tout le projet. Si ce n'est déjà fait, je t'invite à aller lire [la documentation sur CMake](info/outils/cmake.html) pour avoir une idée de ce que fait le logiciel.

* [`.clang-format`](https://github.com/ClubRobotInsat/info/blob/develop/.clang-format) - Tu ne vas pas forcément trouver ce fichier dans tous les projets, mais il est très pratique et permets d'appliquer des règles d'indentation à chaque `commit` pour s'assurer une homogénisation du code entre les développeurs.

* [`doxyconfig`](https://github.com/ClubRobotInsat/info/blob/develop/doxyconfig) - [Doxygen](https://www.stack.nl/~dimitri/doxygen/) est un utilitaire qui permets de créer de la documentation à partir du code en utilisant ce fichier de configuration. Malheureusement, la documentation actuelle ne permets pas d'utiliser cet outil et un gros travail est à réaliser pour avoir une documentation fiable.

* [`TODO.txt`](https://github.com/ClubRobotInsat/info/blob/develop/TODO.txt) - Comme son nom l'indique, ce fichier permets de recenser les projets sur lesquels travailler pour l'année en cours.

## Dossiers

* **[`src/`](https://github.com/ClubRobotInsat/info/tree/develop/src/)** - Ce dossier regroupe tout le code source du projet informatique.

* **`build/`**, `build_arm/` - Ces dossiers sont le résultat de la (cross-)compilation du code et ils contiennent les exécutables. Bien entendu, ils ne sont présents que localement et `git` les ignore lors du processus de création des `commit`s.

* **[`third_parties/`](https://github.com/ClubRobotInsat/info/tree/develop/third_parties/)** - Sous-modules (librairies) utilisés par le projet sous la forme de clones. Tout est automatisé dès lors que tu exécutes `cmake ..` depuis un dossier `build`.

* **[`doc/`](https://github.com/ClubRobotInsat/info/tree/develop/doc/)** - Dossier qui reprends les documentation jusqu'à présent du projet. Ce dossier a pour vocation de disparaître pour laisser la place à la documentation que tu lis actuellement.

* **[`scripts/`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/)** - Ce dossier est très intéressant dans le sens où il propose de nombreux scripts qui vont te faciliter la vie. Si tu veux des exemples concrets de l'utilisation des commandes [bash](https://www.gnu.org/software/bash/) va vite lire ces scripts !

  - [`build_arm.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/build_arm.sh) : Cross-compilation de `[all|principal|wii|test]` pour une archi ARM (la cible à compiler est à donner en paramètre).

  - [`install.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/install.sh) : Utilitaire pour t'aider à configurer ton ordinateur. Il est capable d'installer `[all|tools|petri|format|wii|raspi]` (paramètre à donner en argument) ; tu as déjà utilisé ce script pour la mise en place du dépôt normalement.

  - [`pre-commit`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/pre-commit) : script copié et automatiquement appelé à chaque commit dès lors que tu lances `scripts/install.sh format`, pour bien indenter ton code

  - [`send_file_to_rpi.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/send_file_to_rpi.sh) : se connecte au raspi et y envoie le fichier souhaité

  - [`send_ia_principale.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/send_ia_principale.sh) : cross-compile la target principale et envoi l'exécutable grâce au script précédent (script magique qui te mets bien 5 minutes avant un match !)

  - [`ssh_into_rpi.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/ssh_into_rpi.sh) : se connecte au raspi en SSH ; il faut préalablement configurer la connexion et brancher un câble RJ45 pour que ça marche

  - [`simu_launcher.sh`](https://github.com/ClubRobotInsat/info/tree/develop/scripts/simu_launcher.sh) : Utilitaire pour exécuter automatiquement le simulateur

* [`precompiled-libraries/`](https://github.com/ClubRobotInsat/info/tree/develop/precompiled-libraries/) - On utilise des librairies, notamment pour l'utilisation de la wii-mote. Pour plus de simplicité, on a cross-compilé ces librairies une fois pour toutes et on les stock ici afin de compiler plus facilement pour l'architecture ARM.

* [`cmake_modules/`](https://github.com/ClubRobotInsat/info/tree/develop/cmake_modules) - Répertorie des fonctions `cmake` pour aller chercher facilement des librairies sur ton ordinateur (les scripts restent très peu lisibles mais ils sont fonctionnels).

## Conclusion

J'espère que cette énumération te permets d'y voir un peu plus clair et que ça ne te donne pas envie d'oublier à jamais l'architecture info !

Les parties suivantes vont entrer dans les détails de ce qu'il y a dans le dossier [`src/`](https://github.com/ClubRobotInsat/info/tree/develop/src/), n'hésite pas à demander à un informaticien du club plus d'explications sur tout ce qu'il y a en 'annexe' du code source.
