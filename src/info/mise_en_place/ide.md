# IDE

Normalement, tu as déjà suivi les instructions de la section [Outils Communs - IDE](outils_communs/ide.html), tu as donc l'IDE CLion déjà fonctionnel.

Si ce n'est pas le cas, reviens un peu en arrière et installe CLion !

## Configuration spécifiques au Club Robot

Il ne reste plus qu'une étape et la configuration de ton IDE sera finalisée pour la partie `info`.

Dans le menu `File -> Settings`, dérouler l'item `Build, Execution, Deployment` et sélectionner `CMake`. Il faut ensuite remplir certains champs :

- dans `CMake options`, mettre le texte `-DDEBUG=on -DBITS=64` : on spécifie à `CMake` des flags supplémentaires qui sont utilisés par le projet
- dans `Generation path`, mettre le texte `build`
- dans `Build options`, mettre le texte `-j 4` : on compile avec 4 coeurs (ou 8 si ton processeur en a 8)

Enfin, pour pouvoir tester les IA via la liaison série ([RS232](https://fr.wikipedia.org/wiki/RS-232)) en utilisant CLion, et sans nécessiter les droits `root`, il faut ajouter ton utilisateur au groupe ayant accès à la liaison série `dialout` :

```bash
sudo usermod -a -G dialout <NOM_UTILISATEUR>
```
