# Répertoire de travail

On utilise `git` pour gérer plus efficacement le code. Si le nom de ce logiciel ne te dis rien, je te conseille de revenir un peu en arrière pour aller lire [cette page](/outils_communs/git.html).

## Clonage du dépôt

Si ce n'est pas déjà fait, je te conseille de te créer un dossier spécifique à tout le Club Robot, par exemple comme ceci :

```bash
mkdir -p ~/ClubRobot
cd ~/ClubRobot
```

Ensuite, on a besoin de deux dossiers en informatique, un premier qui contient tout le code info et un second qui permets de créer des tables de simulation facilement.

En t'inspirant de ce que tu as appris pour [cloner des dépôts](/outils_communs/git.html#a2-méthodes-pour-cloner-les-dépôts), je t'invite à récupérer les deux dossiers :

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

## Fonctionnement des branches

Comme tu peux le voir [sur la page GitHub](https://github.com/ClubRobotInsat/info/branches), on utilise plusieurs `branch`es en même temps. Cette fonctionnalité de `git` nous permets de travailler en parallèle sur plusieurs projets.

La branche `master` est protégée : on n'y mets que des versions totalement fonctionnelles *(cette branche ne nous sert par beaucoup)*.

Tout le code que nous écrivons passe par la branche `develop` donc je t'invite dès maintenant à te rendre dessus :
```bash
git checkout develop
git pull
```

Il s'agit de notre branche principale de développement. Afin d'avoir une architecture propre pour s'y retrouver, on utilise des branches pour chaque fonctionnalité en cours de développement. L'objectif est de partir de `develop` qui est propre, basculer sur une branche temporaire pour développer la fonctionnalité puis `merge` ce nouveau code lorsqu'il est fonctionnel dans `develop`.

Prenons l'exemple d'un développement sur le simulateur :
```bash
git checkout develop     # On se mets sur la branche mère `develop`
git checkout -b dev-simu # Création d'une nouvelle branche spécialement pour le simulateur à partir de `develop`
# MAKE YOUR CODE
git add -p               # Ajout des fonctionnalités
git commit               # Autant de commits que tu veux jusqu'à ce que ça marche
```

Une fois que tu es satisfait de ton code, tu as deux possibilités :
* `git checkout develop && git merge dev-simu` pour intégrer directement le code dans la branche principale ; il faut que tu sois sur de toi :wink:
* Depuis [la page **Pull requests**](https://github.com/clubrobotinsat/info/pulls), crée une nouvelle requête pour `merge` ta nouvelle branche `dev-simu` dans `develop`. Ça permets d'avoir une *review* d'autres personnes sur ton travail, ce qui ne fait jamais de mal. Le retour des autres membres te permets de perfectionner ton code, te faire penser à certaines choses qui n'apparaissent pas dans les tests unitaires par exemple ou encode de valider ton travail pour l'intégrer dans le code. Bien évidemment, cette manière de faire est très fortement recommandée !
