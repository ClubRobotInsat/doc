# Le processus de design.

Au club, quand on fait un PCB, le processus est plus ou moins toujours le même. On peut alors mettre en place une sorte de processus "standard" de design que l'on peut suivre. On peut diviser le processus dans les étapes suivants, qui seront expliqué plus en détail dans la suite. 

1. Idée/tache spécifique à faire.
2. Conception du circuit électronique
3. Passage sur logiciel de CAO (KiCad)
	1. Schéma électronique sur KiCad
	2. Routage du PCB sur KiCad
	3. Exportation des fichiers de fabrication
4. Fabrication (commande chez un fabricateur en ligne)
5. Assemblage du PCB (mettre les composantes, soudure, tests, etc.)

## 1: Idée/tache à faire

Le travail fait en élec-hard est toujours lié à un but spécifique (alimenter le robot, faire bouger les roues, etc.).
Alors, avant de commencer à travailler sur un PCB, on doit savoir ce qu'il doit faire!
Ceci revient à connaitre quels composants à mettre dans le circuit, quels connecteurs (entrées/sorties) il doit posséder, et quels pins des microcontrôleurs on va utiliser. 
De plus, il faut absolument connaitre quels sont les contraintes physiques du PCB, c.a.d. son taille, comment le carte sera monté au robot, etc.

Dans l'étape 1, c'est **obligatoire** de communiquer avec les autres équipes (notamment elec-soft et méca) pour savoir les contraintes du PCB.

## 2: Conception du circuit
Toute PCB est basé sur un circuit électronique. Avant de faire le PCB on doit alors concevoir le circuit!

La plupart du temps, on fait des circuits basé autour d'un circuit intégrée déjà fait.
Souvent, les constructeurs donnent un schéma conseillé pour leurs circuits intégrées. Sinon, on doit le faire nous mêmes.
En toute cas, on devrait faire des tests de fonctionnement sur plaque d'essais, ou sur carte de prototypage.  
Un fois le circuit fait, et validé (plus ou moins), on passe à la prochaine étape:

## 3: KiCad 

**NB:** L'utilisation de KiCad a son propre article dans ce doc, alors on ne rentre pas trop dans les détails ici.  
KiCad est un outil numérique qui nous permet de faire des PCB. Dans toute rigueur, KiCad n'est pas un outil, mais un rassemblement des plusieurs, chacun utilisé dans différents étapes. Les deux étapes/outils majeurs sont les suivants:

### 3.1: Schéma électronique (outil dans KiCad: eeschema)

Dans l'éditeur des schéma électroniques (eeschema), on trace le circuit dont le PCB sera basé. On met des _symboles_ pour représenter les composants du circuit, et des fils qui les interconnectent. On note que le schéma décrite *uniquement* quels composantes sont sur le PCB, et comment ils sont connectés, et pas du tout leur positions physiques sur la carte, ceci est fait à la prochaine étape!  
Souvent, le symbole dont on a besoin n'existe pas dans la librairie standard de KiCad. Dans ce cas, on peut le chercher dans le librairie du club, ou en ligne. 
Si on ne le trouve toujours pas, on peut utiliser l'éditeur des symboles de KiCad pour faire notre propre symbole.
Dans toute cas, si c'est un symbole dont on aura probablement besoin au futur, on le rajoute à la libraire du club!

Une fois le schéma fini, on lance le ERC (Electrical Rules Checker), qui vérifie qu'on n'a pas fait des erreurs électroniques simples.  
Attention: le ERC **ne vérifie pas** le fonctionnement du circuit, uniquement les erreurs électroniques (court circuit, oublié de connecter un composant, etc.). Un verification du circuit selon les [règles du club/checklist](design-rules.md) est alors indispensable!

### 3.2: Routage (outil dans KiCad: PCBNew)

À chaque symbole est associé un _empreinte_, ou _footprint_ en anglais. Le footprint décrit les dimensions physique du composant, les position de ces pins, etc.
Autrement dit, le footprint d'un composant contient toute l'information dont on a besoin pour la mise en place physique sur un PCB.  
Comme avec les symboles, on peut chercher les footprints dans le librairie standard, en ligne, dans le librairie du club, ou les faire nous mêmes.
De plus, la plupart de temps on doit nous mêmes définir quel footprint est associé au quel symbole (on fait cela à l'étape dans eeschema!).

Avec toutes les footprints définis, et liés aux symboles, on peut directement importer le circuit en PCBNew.
KiCad va alors mettre toutes les footprints dans le "fenêtre" du PCB, avec des lignes qui nous indiquent quels composants sont connectés.  
Après c'est a nous de placer les composants tel que ca soit facile de les connecter, et en respectant les contraintes physiques du PCB (taille!!). De plus, on doit respecter certains "règles" électroniques (design rules en KiCad), par example la taille des traces de cuivre,
la distance entre les composantes, etc.  
La dernière étape est de mettre du texte sur le PCB qui sert à faciliter l'utilisation du PCB (+ et - pour de connecteurs de puissance, direction des condensateurs et diodes, etc.). 

Comme pour le schéma électronique, on peut lancer le DRC (design rules checker) qui vérifie qu'on a respecté les design rules définis en KiCad, et encore un fois, les erreurs électroniques simples.

Avant d'exporter les fichiers de fabrication, et de commander le PCB, un verification du PCB selon les [regles du club](design-rules.md) avec un _autre_ membre de l'équipe élec-hard est **obligatoire**.

### 3.3: Exportation des fichiers de fabrication

Une fois le PCB fini, on peut demander au KiCad de nous sortir les fichiers qu'on fournit à un fabricateur. Cette étape est décrit dans un propre article dans le doc.

## 4: Fabrication

Avec les fichiers de fabrication, on peut les envoyer à un fabricateur tel qu'ils puissent nous fabriquer un beau PCB.
Au club on utilise JCLPCB comme fabricateur. Dans la commande il y a beaucoup des options à verifier, un explication est fourni dans
un [article dans ce doc](Fabrication.md). 

## 5: Assemblage

Quand on reçoit le(s) PCB au club, on peut l'assembler. Ceci est un travail que vous apprendrez à faire en le faisant au club, pas en lisant 
un document:).

