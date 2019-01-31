# Conseils & Astuces pour réussir sa carte

## Organisation et clarté su schematic
La règle d'or lors du dessin d'un schematic est la **lisibilité** ! Comme il ne représente rien en réalité, il faut qu'il soir le plus lisible possible, et le plus facile à modifier !
Deux outils sont indispensables à maitriser (pas de vraie difficulté) : 

### "Place graphic lines or polygons"
Il te permet d'encadrer chaque partie de ton circuit. On cherche en général à l'organiser (donc diviser) en fonctions élémentaires. Par exemple, tous les connecteurs de puissance seront à un endroit, toutes les led dans un autre, le microcontroleur sera au centre etc... Chaqun de ces bloc-fonction doit être encadré et nommé avec l'outil "Place text".

### "Place net label"
Il est l'heure de te présenter ton nouvel outil favori. Petit retour théorique : le potentiel électrique (tension par rapport à la masse, ou 'altitude electrique') est le même le long d'un fil. C'est toujours valable si deux fils sont connectés ! Ils forment alors un **noeud** (de fils), ou **net** en anglais. On comprend alors que le potentiel electrique est le même partout sur un noeud donné ! L'équivalent **noeud <=> potentiel** nous permet de nommer une connexion entre plusieurs parties du circuit : c'est le **net label**. L'opportunité est fantasique : tu n'as plus besoin de connecter des composants avec des fils (ce sera brouillon rapidement), mais tu peux placer un **net label** (appelé label par abus de language) sur chaque pin à connecter, et ce peu importe leur nombre ! Cet outil nous permet de rendre invisible les fils entre les différents blocs : le schematic devient beaucoup plus clair ! 


## Ordre des priorités pendant le routage
Pour commencer, il faut savoir ce que tu es en train de faire. Si tu est en train de créer une carte pas très compliquée, ce sera une *'simple face'*, sinon nous travaillerons en *'double face'*. La différence est qu'en double face tu pourras placer beaucoup plus de pistes qu'en simple face. Les faces sur lesquelles nous travailleront sont judicieusement nommées Top et Bottom, donc recto et verso. 

Deux rappels avant de commencer à dessiner : 
- Deux pistes sur une même face ne peuvent pas se croiser
- Les composants traversants ne sont jamais du même côté que les pistes auxquelles ils sont connectés, sinon ils seront impossibles à souder !

Par défaut, place les **composants traversants** au **TOP** et les **pistes et cms** au **BOTTOM**. 

## Placement des composants
Avant de connecter les composants, il faut les placer (*duh*). Il n'y a pas de règle générale pour t'aider. Ca se fait très empiriquement. On commence au moins par placer les connecteurs et les led sur les bords de la carte. Dans la mesure du possible, il vaut mieux n'utiliser que deux arrêtes opposées : les entrées à gauche du microcontroleur et les sorties à droite. Tout sera plus simple pendant le câblage. Fais comme tu l'entends, mais pense au futur utilisateur de ta carte : n'hésite pas à abuser du rendu 3D de ta carte pour de demander *comment tu peux rendre cette carte facile à utiliser*.


