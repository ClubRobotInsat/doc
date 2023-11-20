# Organisation & Architecture

Le code est séparée en deux : les fonctionnalités partagées entre les cartes sont dans [librobot](https://github.com/ClubRobotInsat/librobot) et chaque carte est implémentée dans le repo git `firmware-<fonctionnalité>`.

Il y a actuellement (après la coupe de 2019), 4 cartes:

* [`firmware-navigation`](https://github.com/ClubRobotInsat/firmware-navigation)
* [`firmware-servos`](https://github.com/ClubRobotInsat/firmware-servos)
* [`firmware-io`](https://github.com/ClubRobotInsat/firmware-io/)
* [`firmware-io-secondary`](https://github.com/ClubRobotInsat/firmware-io-secondary)

## Librobot

Cette librairie a été introduite afin de réutiliser du code entre les cartes.
Un effet sympathique de cette librairie c'est qu'il possible d'y écrire des [tests unitaires](https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html).

La documentation de la librairie est regénérée par [Travis](https://fr.wikipedia.org/wiki/Travis_CI) (script [ici](https://github.com/ClubRobotInsat/librobot/blob/master/.travis.yml)) à chaque commit et se trouve [ici](https://clubrobotinsat.github.io/librobot/librobot/).

## Cartes

Chaque carte est structurée de la même façon. Voici le contenu de `firmware-navigation` pour le commit `c86b1a0cd1d5da5030a1fac55fae41ac4cf591d7` :

```
├── black_pill.cfg
├── Cargo.lock
├── Cargo.toml
├── debug.sh
├── interfaces
│  ├── stlink-v2-1.cfg
│  └── stm32f1x.cfg
├── memory.x
├── README.md
├── src
│  ├── main.rs
│  ├── robot.rs
│  └── variables.rs
└── target
   ├── debug
   │  ├── build
   │  ├── deps
   │  ├── examples
   │  ├── incremental
   │  └── native
   ├── release
   │  ├── build
   │  ├── deps
   │  ├── examples
   │  ├── incremental
   │  └── native
   └── thumbv7m-none-eabi
      ├── debug
      └── release

```

Les fichiers `Cargo.toml` et `Cargo.lock` listent les dépendances du projet. Il faut noter que `Cargo.lock` est suivi par git, comme ça tout le monde compile les mêmes versions des librairies (c'est très important pour tout le monde ai le même code !).

Le fichier `black_pill.cg` et ceux présents dans `interfaces` sont les fichiers de configuration de OpenOCD afin de flasher la carte.

Le fichier `debug.sh` invoque `gdb` aves les bons arguments pour se connecter à OpenOCD et flasher la carte.

Le fichiers `memory.x` décrit l'organisation de la mémoire du microcontrolleur.

Le fichier `README.md` sers de documentation minimale pour la carte.

Dans le dossier `src` on trouve :
	* `main.rs` : contiens la logique de la fonction main
	* `robot.rs` : contiens l'initialisation du microcontrolleur et de ses périphériques

Enfin, le dernier dossier qui nous intérresse est le dossier `target/thumbv7m-none-eabi` qui contiens le résultat de la compilation.