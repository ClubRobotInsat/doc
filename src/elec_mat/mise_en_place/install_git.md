# Installation de la librairie et des projets du Club Robot

Pour obtenir les composants du club afin de pouvoir ouvrir correctement les cartes que nous avons réalisée par le passé, il suffit de te préparer un dossier conforme à l'arborescence décrite dans la page précédente. Pour cela, il faut ouvrir un terminal, te placer là ou tu souhaites tout installer, et entrer ces commandes : 

```bash
# On construit l'arborescence
mkdir -pv hardware/boards
cd hardware
# On y clone les librairies du Club et de DigiKey
git clone https://github.com/ClubRobotInsat/kicad.git
git clone https://github.com/digikey/digikey-kicad-library.git
```
Ne ferme pas le terminal, on n'en a pas fini :)

Si tu n'as pas `git` sur ton ordinateur je te renvoie à la section [correspondante](git.html).

Il faut maintenant ouvrir un terminal et configurer `git` pour qu'il s'interface bien avec Kicad. Pour cela tu dois lancer le script `setup_git.sh` :

```bash
# On se place dans le dossier où tu as clone le repo du club
cd kicad
# On lance le script
./setup_git.sh
```

Il faut ensuite rajouter ces librairies avec l'interface de Kicad.

## Ajout des la librairies de symboles

1. Une fois Kicad ouvert, commence par ouvrir l'éditeur de symbole, pour cela clique sur le petit composant (deuxième carré en partant de la gauche)

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
7. Répète les opérations 1 à 6 pour ajouter à KiCAD n'importe quelle source externe de composants. Nous utilisons aussi ponctuellement les librairies offertes par DigiKey (distributeur de composants élec en ligne). Clone leur [répertoire](https://github.com/digikey/digikey-kicad-library) et importe leurs libs de symboles (dans digikey-symbols) avec un *ctrl-a*, puis importe leurs footprints. 
8. Si tout s'est bien passé **BRAVO** tu peux maintenant ouvrir et modifier toutes les cartes du club robot et créer les tiennes !