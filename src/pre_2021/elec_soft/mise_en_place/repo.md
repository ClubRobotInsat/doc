# Répertoire de travail

Maintenant ouvrons le projet du club robot avec CLion et vérifions que tout fonctionne.

Pour commencer, si tu n'as jamais entendu parler de `git` ou que tu ne te sens pas très à l'aide avec, tu peux revenir un peu en arrière et lire [ceci](outils_communs/git.html).

On va compiler le code de la carte servomoteurs.

# Récupérer le code de la librairie

Pour récupérer le code, je te suggère de commencer par te créer un dossier qui contiendra tous les répertoires du club robot (si ce n'est pas déjà fait).
Une fois placé dans ce dossier, tu peux exécuter la commande :

```bash
git clone https://github.com/ClubRobotInsat/librobot
```

Cette commande va venir demander à `git` d'aller récupérer la dernière version du code disponible sur [github](https://github.com/ClubRobotInsat/librobot) pour la librairie du club robot.

Un nouveau dossier `librobot` a du apparaître.


# Récupérer le code de la carte électronique

De même, il faut cloner un répertoire sur github pour avoir le code de la carte électronique :

```bash
git clone https://github.com/ClubRobotINSAT/firmware-servos
```

Il y a quelques étapes de configuration à faire avant de compiler :

1. Il faut rajouter la cible `thumbv7m-none-eabi` avec rustup
	```bash
	cd firmware-servos
	rustup target add thumbv7m-none-eabi
	```

2. Il faut vérifier que le projet compile bien :
	```bash
	cargo build --release
	```
Explication :

- `thumbv7m` : jeu d'instruction ARMv7, il s'agit du jeu d'instruction du Cortex M4

- `none` : pas de système d'exploitation sur la carte électronique

- `eabi` : on aurait pu avoir l'option `hf` qui signifie "hard float", c'est à dire que le compilateur va émettre des instructions spéciales pour les calculs sur les nombres flottants au lieu de les calculer avec des entiers. En effet, certains microcontrôleurs embarquent un Floating Point Unit (FPU) qui permet de faire des calculs flottants rapidement. Cependant sur la black-pill il y a un `stm32f103` qui n'a pas de FPU on ne met donc pas cette option.

Si la compilation a marché alors tout a été installé correctement !

# Arborescence du code et fichiers remarquables

Pour comprendre les différents fichiers présents dans le dossier du projet, tu peux revenir en arrière et lire [Organisation du code](../organisation/index.html).