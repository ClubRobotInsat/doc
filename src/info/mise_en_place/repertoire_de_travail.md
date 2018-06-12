# Répertoire de travail

On utilise `git` pour gérer plus efficacement le code. Si le nom de ce logiciel ne te dis rien, je te conseille de revenir un peu en arrière pour aller lire [cette page](outils_communs/git.html).

## Clonage du dépôt

Si ce n'est pas déjà fait, je te conseille de te créer un dossier spécifique à tout le Club Robot, par exemple comme ceci :

```bash
mkdir -p ~/ClubRobot
cd ~/ClubRobot
```

Ensuite, on a besoin de deux dossiers en informatique, un premier qui contient tout le code info et un second qui permets de créer des tables de simulation facilement.

En t'inspirant de ce que tu as appris pour [cloner des dépôts](outils_communs/git.html#a2-méthodes-pour-cloner-les-dépôts), je t'invite à récupérer les deux dossiers :

* ```bash
  git clone https://github.com/ClubRobotInsat/pytable.git
  git clone https://github.com/ClubRobotInsat/info.git
  cd info
  ```
* ```bash
  git clone git@github.com:ClubRobotInsat/pytable.git
  git clone git@github.com:ClubRobotInsat/info.git
  cd info
  ```

Félicitations, te voilà possesseur de tout le savoir informatique du Club !
