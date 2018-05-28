# IDE

Pour coder facilement, le plus simple est d'installer un IDE (ou encore [environnement de dévelopement](https://fr.wikipedia.org/wiki/Environnement_de_d%C3%A9veloppement)).

Dans ce guide nous installerons un IDE pour le langage [Rust](https://www.rust-lang.org/fr-FR/) qui est le langage utilisé pour la partie électronique du robot.
Nous allons installer un IDE Intellij pour un autre langage comme Java ou C++ et nous rajouterons par dessus un plugin pour le support de Rust.

Un bon résumé du support du langage pour la plupart des éditeurs de texte est disponible [ici](https://areweideyet.com/), n'hésites pas à te faire ton setup personnalisé !

## Installation de CLion

Nous allons installer [CLion](https://www.jetbrains.com/clion/), un IDE développé par JetBrains pour C++. Tu pourras donc aussi utiliser CLion pour jeter un oeil à la partie informatique du robot !

Il est normalement payant, mais une version d'éducation (licence valide 1 an, renouvelable tant que l'on est étudiant) est disponible.

### Téléchargement de l'IDE

Pour commencer, il faut :

1. Se rendre sur la page de [CLion](https://www.jetbrains.com/clion/download/) et télécharger la dernière version.
2. Pendant le téléchargement, aller sur la page de [jetbrains.com](https://www.jetbrains.com/shop/eform/students) pour demander une licence éducation. L'adresse mail à fournir est celle de l'INSA (*<mail>@etud.insa-toulouse.fr*) pour que JetBrains accepte de délivrer la licence.
3. Va voir ta boîte mail, un message contenant un lien de confirmation est arrivé : confirme ton adresse mail
4. Tu reçois enfin un autre mail avec les infos de la licence, qu'il faudra saisir dans CLion

### Lancement

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
	echo "export PATH=/opt/clion/bin:$PATH" > ~/.bashrc
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

## Installation du plugin pour Rust

Il faut commencer par ouvrir les options de CLion `File>Settings` ou encore `ctrl+alt+s`.

Dans le menu `Plugins` tu cliques sur `Install Jetbrains Plugins` et tu cherchers `Rust` dans la fenêtre qui s'est ouverte. Pour lancer l'installation, il suffit de cliquer sur `Install`.

## Verification de l'installation

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès CLion !
