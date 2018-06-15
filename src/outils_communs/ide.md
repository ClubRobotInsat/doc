# IDE

*Cette page s'adresse à la fois aux infos et aux élecs soft.*

Comme tu as pu le constater, l'arborescence du code est assez complexe et il y a beaucoup de fichiers. Pour coder facilement, il existe des outils qui nous facilitent la vie : les [environnements de dévelopement](https://fr.wikipedia.org/wiki/Environnement_de_d%C3%A9veloppement), ou encore des IDE.

Dans ce guide, nous installerons un IDE pour le langage [C++](https://isocpp.org/) qui est le langage utilisé pour la partie informatique du robot. Notre choix se porte sur CLion qui est développé par JetBrains. Il s'agit d'un IDE à la fois flexible, simple d'utilisation, multiplateforme et qui a la particularité d'utiliser nativement [CMake](https://cmake.org/), le système de build utilisé par notre code.

Cet IDE est normalement payant, mais une version d'éducation (licence valide 1 an, renouvelable tant que l'on est étudiant) est disponible.

## Téléchargement de l'IDE

Pour commencer, il faut :

1. Se rendre sur la page de [CLion](https://www.jetbrains.com/clion/download/) et télécharger la dernière version.
2. Pendant le téléchargement, aller sur la page de [jetbrains.com](https://www.jetbrains.com/shop/eform/students) pour demander une licence éducation. L'adresse mail à fournir est celle de l'INSA (*\<nom>@etud.insa-toulouse.fr*) pour que JetBrains accepte de délivrer la licence.
3. Va voir ta boîte mail, un message contenant un lien de confirmation est arrivé : confirme ton adresse mail
4. Tu reçois enfin un autre mail avec les infos de la licence, qu'il faudra saisir dans CLion

## Lancement

Une fois le téléchargement terminé, il ne reste plus qu'à configurer ton ordinateur pour exécuter l'IDE :

1. Il faut extraire l'archive téléchargée sur le site de CLion et copier le dossier `<clion-version>` dans `/opt/clion`:
	```bash
	cd ~/Downloads
	tar -xvf <nom de l'archive d'installation>
	sudo cp <nom du dossier extrait> /opt/clion -R
	```
2. On renomme le script de lancement `clion.sh` en `clion` parce que c'est plus joli (selon mes goûts, j'aime aussi le orange si jamais).
	```bash
	sudo mv /opt/clion/bin/clion.sh /opt/clion/bin/clion
	```
3. Il faut maintenant ajouter le script de lancement de Clion à ta [variable d'environnement](https://fr.wikipedia.org/wiki/Variable_d%27environnement) `$PATH`:
	```bash
	echo "export PATH=/opt/clion/bin:$PATH" >> ~/.bashrc
	```
	Le `PATH` est une variable d'environnement qui contient une suite de chemins séparés par des deux points `:`.
	La ligne ci-dessus concatène lors de l'ouverture d'un terminal **bash** à la variable `PATH` le chemin de lancement de CLion.
4. Tu peux maintenant ouvrir un terminal et taper :
	```bash
	clion
	```
	Ou, si jamais tu n'a pas suivi l'étape de renommage :
	```bash
	clion.sh
	```

***Pour les utilisateurs d'un Ubuntu standard :*** Lorsque CLion est en cours d'exécution, son icône est affiché dans la barre des tâches à gauche. Pour le lancer plus rapidement, il te suffit de faire un click droit sur l'icône -> 'Lock to Launcher'

Si jamais l'IDE se lance, tu viens d'installer avec succès CLion ! Sinon je t'encourage à venir montrer le message d'erreur aux gens du club.

## Test de l'environnement de travail

A présent que ton ordinateur est totalement configuré, il est temps de compiler le code !

L'interface de CLion peut paraître compliquée de prime abord, c'est pourquoi il ne faut pas hésiter à demander de l'aide à un membre du Club.

Une des fonctionnalités les plus utilisées est celle de la compilation intégrée. Pour cela, en haut à droite de la fenêtre, choisis la target `BuildAll`. Comme tu peux le voir, de nombreuses applications peuvent être compilées, et on veut actuellement s'assurer que tout compile chez toi. Ensuite, appuie sur le bouton à gauche de la liste déroulante pour compiler. Attention, ça va prendre un peu de temps.

<p align="center">
<img src="assets/ide/BuildAll.png" alt="CLion et sa fonctionnalité BuildAll">
</p>

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès tout l'environnement de travail !

Sinon, je te conseille de te rapprocher d'un membre du pôle informatique.
