# Guide d'utilisation de Kicad

## Intro
On parlera ici de l'utilisation de KiCAD spécifique au club. Pour l'utilisation générale, consulte la doc inclue dans KiCAD, dans le menu aide/help. Elle est claire, et très bien complétée sur internet par une série de vidéos produites par [DigiKey](https://www.youtube.com/watch?v=vaCVh2SAZY4&index=9&list=PLEBQazB0HUyR24ckSZ5u05TZHV9khgA1O&t=0s). 

La réalisation d'une carte suit le ![workflow](/assets/kicad/kicad_flowchart.png) indiqué dans la doc de kicad. 

## Ouverture d'une carte
Quand tu souhaites visualiser ou modifier une carte, ouvre (double clic) son fichier projet (.pro) ou ouvre directement son schematic avec kicad. Il se peut que des symboles soient 'cassés' : ils sont remplacés par les points d'interrogation. Dans ce cas, édite les : clic droit -> properties -> edit properties et choisis 'change' sous le champ 'Library Symbol'. Remplace alors le symbole par sa version à jour. Si tu ne le trouve nulle part, vérifie si tu as bien importé les librairies du club, et celles offertes par DigiKey.

## Création d'une carte
Pour créer une carte, il faut suivre *méticuleusement* le protocole suivant pour être certain de ne pas imprimer de carte inutilisable, ou juste trop difficile à imprimer.

**1) Pose toi la question de quel template utiliser.**

Pour le moment le club n'en a qu'un seul pour une carte classique avec une blackpill et un USR-US1 (le connecteur ethernet) dessus. Copie donc le template `libkicad-robot/templates/carte_generique_2019_stm32f103` dans ton dossier `boards`. et renomme le dossier et les fichiers en suivant cette convention : 

```
boards
├── {fonction}_{année}_{microcontrôleur}
│   ├── {fonction}_{année}_{microcontrôleur}.pro
│   ├── {fonction}_{année}_{microcontrôleur}.sch
│   └── {fonction}_{année}_{microcontrôleur}.kicad_pcb
```
Dans la mesure du possible, tous les noms *sont_en_minuscules_séparés_par_des_underscores* (convention snake_case).

**2) Préparaion du schematic**

Dans un premier temps, il faut remplir l'encadré en bas à droite avec l'insertion de texte, c'est à dire remplir les champs en gras (nom, prénom, date, titre de la carte). La date sera actualisée à chaque grosse mise à jour.
Chaque fichier et chaque carte doit être tracable en cas de besoin. Ceux qui reprendront ta carte quand tu auras quitté le club doivent avoir quelqu'un à qui poser les questions !

**3) Préparation du routage**

Ouvre maintenant le pcb de ta nouvelle carte et **VERIFIE LES DESIGN RULES**. Il va falloir bien suivre, la suite est très importante et te fera gagner *beaucoup* de temps. \n Un peu de contexte : plus une piste est large, plus elle peut conduire du courant sans chauffer. Une piste qui chauffe, ca veut dire des soudures qui fondent ou des composants qui grillent. Mais plus une piste est large, plus le routage sera difficile. Le nouveau jeu est donc de dimensionner chaque piste en fonction de son utilisation : pistes fines pour du signal, pistes larges pour la puissance.

Pour cela, la solution idéale serait justement de pouvoir indiquer à KiCAD quelles connexions seront utilisées pour de la logique, et quelles connexions feront passer des gros courants. Ca tombe bien ! *Setup -> Design rules...* à été inventé pour ca. C'est un processus en deux étapes. 


* D'abord on remplit le tableau 'Net classes'. On indique à KiCAD la liste des différents types de connexion.
La plupart du temps nous n'aurons que des pistes logiques. Tant qu'il n'y a pas de puissance, change la classe `default`en y entrant 0.381 dans `Clearance` et 0.381 dans `Track Width`. 

* Ouvre ensuite l'onglet `Global Design Rules` et remplis le tableau (en bas à droite) : 

|         | Width |
|---------|-------|
| Track 1 | 0.254 |
| Track 2 | 0.381 |
| Track 3 | 0.762 |

Ce sont les trois épaisseurs *standard* qu'utilise le club. Quand tu choisiras ton épaisseur de piste (en haut à gauche de l'interface de pcbnew), tu devras utiliser la 3 quand c'est possible, puis la 2 si nécéssaire, puis la 1 **sur une distance très courte** dans le pire des cas.

Pour finir, il faut remplir compléter le texte à l'envers (nom, prénom, date, titre de la carte). Il sert à rendre ta carte encore mieux tracable, et à aider à l'imprimer à l'endroit.


En principe, tout est prêt pour que tu commences à ajuster le schematic puis à dessiner le PCB toi-même. Le chapitre suivant donne des indications et explique le fonctionnement de certains outils usuels.