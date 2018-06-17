# IDE

Normalement, tu as déjà suivi les instructions de la section [Outils Communs - IDE](outils_communs/ide.html), tu as donc l'IDE CLion déjà fonctionnel.

Si ce n'est pas le cas, reviens un peu en arrière et installe CLion !

## Configuration spécifiques au Club Robot

Il ne reste plus qu'une étape et la configuration de ton IDE sera totalement fonctionnelle pour la partie `info`.

Dans le menu `File -> Settings`, dérouler l'item `Build, Execution, Deployment` et sélectionner `CMake`. Il faut ensuite remplir certains champs :

- dans `CMake options`, mettre le texte `-DDEBUG=on` : on spécifie à `CMake` des flags supplémentaires qui sont utilisés par le projet
- dans `Generation path`, mettre le texte `build`
- dans `Build options`, mettre le texte `-j 4` : on compile avec 4 coeurs (ou 8 si ton processeur en a 8)

Enfin, pour pouvoir tester les IA via la liaison série ([RS232](https://fr.wikipedia.org/wiki/RS-232)) en utilisant CLion, et sans nécessiter les droits `root`, il faut ajouter ton utilisateur au groupe ayant accès à la liaison série `dialout` :

```bash
sudo usermod -a -G dialout <NOM_UTILISATEUR>
```

## Test de l'environnement de travail

A présent que ton ordinateur est totalement configuré, il est temps de compiler le code !

L'interface de CLion peut paraître compliquée de prime abord, c'est pourquoi il ne faut pas hésiter à demander de l'aide à un membre du Club.

Une des fonctionnalités les plus utilisées est celle de la compilation intégrée. Pour cela, en haut à droite de la fenêtre, choisis la target `BuildAll`. Comme tu peux le voir, de nombreuses applications peuvent être compilées, et on veut actuellement s'assurer que tout compile chez toi. Ensuite, appuie sur le bouton à gauche de la liste déroulante pour compiler. Attention, ça va prendre un peu de temps.

<p align="center">
<img src="assets/ide/BuildAll.png" alt="CLion et sa fonctionnalité BuildAll">
</p>

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès tout l'environnement de travail !

Sinon, je te conseille de te rapprocher d'un membre du pôle informatique.
