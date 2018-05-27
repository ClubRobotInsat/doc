# IDE

Pour coder facilement, le plus simple est d'installer un IDE (ou encore [environnement de dévelopement](https://fr.wikipedia.org/wiki/Environnement_de_d%C3%A9veloppement)).

Dans ce guide nous installera un IDE pour le langage [Rust](https://www.rust-lang.org/fr-FR/) qui est le langage utilisé pour la partie électronique du robot.
Nous allons installer une IDE Intellij pour un autre langage comme Java ou C++ et nous rajouterons par dessus un plugin pour le support de Rust.
Un bon résumé du support du langage pour la plupart des éditeurs de texte est disponible [ici](https://areweideyet.com/), n'hésites pas à te faire ton setup personnalisé !

## Installation de CLion

Nous allons installer [CLion] un IDE pour C++. Tu pourras donc aussi utiliser CLion pour jeter un oeil à la partie informatique du robot !

Pour cela il faut :

1. Se créer un compte sur [jetbrains.com](https://www.jetbrains.com) avec ton addresse mail de l'INSA (*<mail>@etud.insa-toulouse.fr*) afin d'avoir une license étudiante.
2. Se rendre sur la page de [CLion](https://www.jetbrains.com/clion/) et télécharger la dernière version.

### Installation pour les utilisateurs d'un Ubuntu standard

***TODO : à faire car je ne sais plus la démarche***

### Installation pour les power-users

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
	Le `PATH` est une variable d'environnement qui contiens une suite de chemin séparé par des deux points.
	La ligne ci-dessus concaténe lors de l'ouverture d'un terminal **bash** à la variable `PATH` le chemin de lancement de CLion.
4. Tu peut maintenant ouvrir un terminal et taper :
	```bash
	clion
	```
	Ou, si jamais tu n'a pas suivi l'étape de renommage :
	```bash
	clion.sh
	```



Si jamais l'IDE se lance, tu viens d'installer avec succès CLion ! Sinon je t'encourage à venir montrer le message d'erreur aux gens du club.

## Installation du plugin pour Rust

Il faut commencer par ouvrir les options de CLion `File>Settings` ou encore `ctrl+alt+s`.
Dans le menu `Plugins` tu cliques sur `Install Jetbrains Plugins` et tu cherchers `Rust` dans la fenêtre qui s'est ouverte. Pour lancer l'installation, il suffit de cliquer sur `Install`.

## Verification de l'installation

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès CLion !
