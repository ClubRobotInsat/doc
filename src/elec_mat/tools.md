# Mise en place

Installons les logiciels pour router des cartes éléctroniques ! Au club robot nous utilisons [KiCad](https://en.wikipedia.org/wiki/KiCad). Certains d'entre vous connaissent peut être Eagle mais la version Linux de ce dernier n'est pas au point du tout. De plus c'est un logiciel payant (on peut certes avoir des licenses étudiantes) alors que KiCad est un logiciel libre.

# Installation de Kicad

Tu peux installer KiCad sur les trois principaux OS : Ubuntu, Windows et OSX. Il faut faire attention à bien installer la version 5 !

Pour les autres distributions Linux demande directement aux gens du club !

## Linux

### Ubuntu

Il suffit de rentrer les trois commandes suivantes pour obtenir la dernière version de kicad (kicad 5) :

** A Verifier **

```bash
sudo add-apt-repository --yes ppa:js-reynaud/kicad-5
sudo apt update
sudo apt install kicad
```

Ces commandes sont nécessaires car on utilise la version 5 de kicad qui est encore en beta.

Tu peux vérifier que l'installation a bien fonctionné en lançant kicad. Normalement KiCad est livré avec des librairies de composants. Si elles ne sont pas installées chez toi, rapproche-toi d'un membre du club !

### OSX

Avant tout, il faut installer un gestionnaire de paquets, car par défaut OSX n'en a pas vraiment : l'App Store et télécharger des .app n'est pas la solution ici.
L'outil en question est Homebrew et fonctionne à peu près comme aptitude sur Linux.
Pour l'installer, il suffit d'executer cette ligne dans un terminal : 
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Cette ligne télécharge et éxécute l'installeur pour Brew. Laisse-toi guider, il décrit ce qu'il fait et de demande régulièrement confirmation.

Une fois l'install terminée, il faut installer une extension de Brew appellée 'cask'. Elle permet d'installer proprement des applicaitons en passant par le téléchargement et la vérification d'un .app. 

```bash
brew install cask
```

Tout est prêt ! Il ne reste plus qu'à installer la dernière version de Kicad (nightly pour avoir la 5.X). Attention le téléchargement est lourd (3GB environ).

```bash
brew cask install kicad-nightly
```

kicad est désormais correctement installé sur ton ordinateur et peut s'utiliser comme n'importe quelle autre application.
Il est recommandé d'installer ses apps avec Homebrew autant que possible. Pour savoir si une app est disponible sur leurs dépôts, utilise 
```bash
brew search [nom à rechercher]
```
Si brew trouve des résultats, un simple brew install [nom trouvé] se chargera de l'installation.



### Windows

Il suffit de récupérer et lancer l'installeur le plus récent parmis tout ceux proposés sur [cette](http://downloads.kicad-pcb.org/windows/nightly/) page.

# Installation de la librairie et des projets du Club Robot

Pour obtenir les composants du club afin de pouvoir ouvrir correctement les cartes que nous avons réalisée par le passé, il suffit de cloner le repo [kicad](https://github.com/ClubRobotInsat/kicad) du club. Si tu n'as pas `git` sur ton ordinateur je te renvoie à la section [correspondante](git.html).

Il faut ensuite rajouter ces librairies avec l'interface de kicad.

## Ajout de la librairie de symboles

1. Commence par ouvrir l'éditeur de symbole, pour cela clique sur le petit composant (deuxième carré en partant de la gauche)

	![Cliques sur le bouton rouge pour ouvrir l'éditeur de symbole](assets/kicad/open_symbol_editor.png "")
2. Ensuite, il faut rajouter la librairie contenant les *symboles* du club : `Preferences > Manage Symbol Libraries`.
	Dans le menu qui va s'ouvrir, clique sur `Browse Libraries` et navigue jusqu'au dossier `<rep_cloner>/libkicad/robot_symbols` et séléctionne `robot.lib`
	Normalement tu as le résultat suivant à la fin de cette opération.
	![La librairie de symboles après ajout des symboles du club robot](assets/kicad/symbol_added.png "")
	Si tu observes la même chose alors tu as réussi ton installation ! Tu peux maintenant ouvrir les *schematic* du club robot sans problème !
3. Tu peux fermer l'éditeur de symbole et passer sur l'éditeur de *footprint*, c'est le quatrième bouton en partant de la gauche.
	![Cliques sur le bouton rouge pour ouvrir l'éditeur de footprint](assets/kicad/open_footprint_editor.png)
4. Ouvre le gestionnaire de librairie `Preferences > Manage footprint libraries` et cliques sur `Browse Libraries` dans la fenêtre qui s'ouvre.
5. Navigue jusqu'à arriver au répertoire `libkicad/robot.pretty` et clique sur Ok.
6. Normalement tu devrais obtenir le résultat suivant :
	![La librairie de footprints aprés ajout de celle du club](assets/kicad/footprint_added.png "")
7. Si c'est le cas **BRAVO** tu peux maintenant ouvrir et modifier toutes les cartes du club robot et créer les tiennes !

