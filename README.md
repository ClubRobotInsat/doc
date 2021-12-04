<!--
<p align="center">
<img src="assets/logo.png">
</p>
-->

<p align="center"><a href="https://clubrobotinsat.github.io/doc/">
  <img src="assets/documentation.png" alt="La documentation du Club Robot" width="700">
</a></p>

[![Travis](https://api.travis-ci.org/ClubRobotInsat/doc.svg?branch=master)](https://travis-ci.org/ClubRobotInsat/doc)
# [La documentation du club robot](https://clubrobotinsat.github.io/doc/)

# Contribution

Ce répertoire est ouvert à ***TOUTES*** les contributions, alors si tu vois des erreurs, des fautes ou des choses à
corriger n'hésite surtout pas et fais un commit.

Si jamais tu ne sais pas utiliser `git` ce n'est pas grave, tu peut toujours utiliser l'interface en ligne de github ! 
:smile:

Pour rajouter un article il faut le rajouter dans el fichier ```src/SUMMARY.MD``` pour qu'il apparaisse dans la table 
de matières. Et puis rajouter un fichier de même nom et extension .md dans le path décrit dans SUMMARY.md.

Maintenant on peut y écrire la bible dessus pour essayer que tout le monde comprenne ce qu'on a fait pour le club. Oui,
l'objectif de cette page c'est de faire comprendre aux autres les choses le plus rapidement possible.

Ce livre s'écrit avec du markdown ( d'où l'extension .md ) c'est juste une façon d'écrire du texte formaté. Vous pouvez
trouver tous les characters clés dans cette page : [markdown chat sheet](https://www.markdownguide.org/cheat-sheet)

Une fois vous avez écrit votre document il faut le commit sur cette repo et GH va automatiquement le publier sur le site
de doc automatiquement !

Pour toutes les questions n'hésitez pas !


<!--Un robot s'occupera de mettre à jour la documentation à chaque commit sur la branche master. 
Non, maintenant, c'est une action de GH><-->


# Comment utiliser le site en locale 
### (pas nécessaire)

Pour prévisualiser ses changements il faut commencer par installer `mdbook`.

Il faut commencer par installer Rust si tu ne l'as pas déjà. Je te laisse suivre les instructions sur la page de
[rustup](https://rustup.rs/).

Ensuite, on peut installer `mdbook`. La compilation va prendre du temps, pas d'inquiétude, c'est normal.

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
# à remplacer par 'mdbook serve -o&' pour ouvir automatiquement la documentation dans ton navigateur par défaut
```

Et voilà, tu peux te rendre sur [127.0.0.1:3000](http://127.0.0.1:3000) pour voir la documentation en local !

## [Guide pour se servir de mdbook](https://rust-lang-nursery.github.io/mdBook/)

Il est recommandé de lire le [guide de l'utilisateur](https://rust-lang-nursery.github.io/mdBook/) de mdbook avant de faire des changements pour bien comprendre ce que l'on fait.

