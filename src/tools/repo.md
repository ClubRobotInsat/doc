# Répertoire de travail

Nous allons maintenant ouvrir le projet du club robot avec CLion et vérifier que tout fonctionne.

# Récuperer le code de la librairie

Pour récuperer le code, je te suggère de commencer par te créer un dossier qui contiendra tous les répertoires du club robot (si ce n'est pas déjà fait).
Une fois placée dans ce dossier, tu peut exécuter la commande :

```bash
git clone https://github.com/ClubRobotInsat/librobot
```

Cette commande va venir demander à `git` d'aller récupérer la dernière version du code disponible sur [github](https://github.com/ClubRobotInsat/librobot) pour la librairie du club robot.

Un nouveau dossier `librobot` a du apparaître.

C'est le moment de lancer CLion ! Une fois lancé, dans `File > Open` choisi le dossier de `librobot`.

Si tout se passe bien, tu devrais pouvoir compiler, tester et formatter le code. Pour cela il faut choisir la configuration adéquate, en haut à droite de ton interface et appuyer sur le bouton run.

Si la compilation fonctionne, tu peut passer à la suite !

***TODO : screenshot***

# Récuperer le code de la carte electronique

De même il faut cloner un répertoire sur github pour avoir le code de la carte electronique :

```bash
git clone https://github.com/ClubRobotInsat/elec
```

Il y a quelques étapes de configuration à faire avant de compiler :

1. Il faut rajouter la cible `thumbv7m-none-eabihf` avec rustup
	```bash
	cd elec
	rustup target add thumbv7m-none-eabihf	
	```

2. Il faut vérifier que le projet compile bien :
	```bash
	cargo build
	```
Explication :

- `thumbv7m` : jeu d'instruction ARMv7, il s'agit du jeu d'instruction du Cortex M4

- `none` : pas de système d'exploitation sur la carte electronique

- `eabihf` : `hf` veut dire "hard float", c'est à dire que le compilateur va emettre des instructions spécials pour les calculs sur les nombres flottants au lieu de les calculer avec des entiers. En effet, le microcontrolleur `stm32f446` embarque un Floating Point Unit (FPU) qui permet de faire des calculs flottants rapidement.

Si la compilation a marché alors tout a été installé correctement !

# Arborescence du code et fichiers remarquables

Il y a quelques fichiers remarquables dans le dossier `librobot` :
* `.travis.yml` :  ce fichier décris les étapes que doit faire le serveur d'intégration continue pour tester les commits et déployer la documentation.
* `Cargo.toml` : ce fichier décris les dépendances du projet.
* `README.md` : il s'agit du README qui s'affiche sur [github](https://github.com/ClubRobotInsat/librobot) quand on regarde le projet.
* `.idea/` : le dossier contenant les fichiers de configuration de l'IDE.
* `.git/` : le dossier contenant les fichiers de configuration de git.
* `.gitignore` : un fichier qui décris tout ce que git doit ignoré.
