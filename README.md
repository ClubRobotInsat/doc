[![Travis](https://api.travis-ci.org/ClubRobotInsat/librobot.svg?branch=master)](https://travis-ci.org/ClubRobotInsat/doc)
# [La documentation du club robot](https://clubrobotinsat.github.io/doc/)

# Contribution 

Ce repertoire est ouvert à ***TOUTES*** les contributions, alors si tu vois des erreurs, des fautes ou des choses à corriger n'hésite surtout pas et fais un commit. 

Si jamais tu ne sais pas utiliser `git` ce n'est pas grave, tu peut toujours utiliser l'interface en ligne de github ! :smile:

Un robot s'occupera de mettre à jour la documentation à chaque commit sur la branche master.

Pour prévisualiser ses changements il faut commencer par installer `mdbook`.

Si tu n'as pas Rust d'installé, il faut commencer par installe Rust. Je te laisse suivre les instructions sur la page de [rustup](https://rustup.rs/).

Ensuite on peut installer `mdbook`, la compilation va prendre du temps, pas d'inquiétude, c'est normal.

```bash
cargo install mdbook
```

On peut maintenant clone le repo :

```bash
git clone https://github.com/ClubRobotInsat/doc
```

Une fois cloné, il faut lancer mdbook :

```bash
cd doc
mdbook serve
```

Et voilà, tu peut te rendre sur [127.0.0.1:3000](http://127.0.0.1:3000) pour voir la documentation en local !

## [Guide pour se servir de mdbook](https://rust-lang-nursery.github.io/mdBook/)

Il est recommandé de lire le [guide de l'utilisateur](https://rust-lang-nursery.github.io/mdBook/) de mdbook avant de faire des changements pour bien comprendre ce que l'on fait.
