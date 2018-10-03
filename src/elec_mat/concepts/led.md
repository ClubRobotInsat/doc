# La LED 
La diode est le composant le plus simple parmi ceux qui désobéissent complètement à la loi d'Ohm (composant non linéaire).
Une LED est une diode qui émet de la lumière et qui consomme plus d'énergie (pour rester simple).

La meilleure analogie pour expliquer le fonctionnement d'une diode est de s'imaginer une valve pour un fluide : il passe dans un sens et est bloqué dans l'autre. 

## Modélisation 
Nous, ce qui nous intéresse, c'est comment choisir telle ou telle diode ou LED dans un montage a réaliser. Pour cela, il faut pouvoir prédire le comportement du composant que l'on a entre les mains ou que l'on souhaite trouver. Pour cela, il existe trois manières de caractériser une diode. Dans tous les cas, on s'intéresse à l'allure et à certains points de la courbe I (courant qui traverse la diode) en fonction de V (tension a ses bornes).

1. **Le modèle trop simple** : la diode parfaite
	Ici, la caractéristique est un échelon infini en 0. Il résume bien le comportement d'une valve parfaite : aucune résistance dans un sens et aucun passage dans l'autre. Il n'y a pas grand chose d'autre a dire que ce modèle est trop simple pour être utile : aucune diode ne fonctionne vraiment comme ca !

2. **Le bon modèle**
	Maintenant, l'échelon ne démarre plus en 0 mais à une tension Vd, ou Vseuil. De plus, la droite monte linéairement (coefficient directeur fini). Ce modèle est très convenable : dans un sens la diode résiste jusqu'à une petite tension (0.7V en général) puis se comporte comme une très petite résistance, en série avec une pile de Vd volts en opposition au courant. Dans l'autre elle est toujours bloquante. 
	On peut la modéliser (uniquement quand on lui applique une tension à Vd) comme étant une diode parfaite, une petite résistance, et un générateur de tension Vd en série. 

3. **Le modèle fidèle**, mais a peine trop complexe
	Le dernier modèle est complexe, et ne nous sert que rarement, comme le premier. Ici la caractéristique est donnée par une équation un peu moche : '''I = I0 x exp(V/n x V0 - 1)'''. L'intérêt de ce modèle est de mettre en évidence les défauts d'une diode : elle laisse toujours passer au moins un **très** faible courant, peu importe le sens dans lequel on l'utilise. De plus, I augmente exponentiellement avec V, donc la "très petite résistance" dont on a parlé en **2.** devient exponentiellement plus petite quand on augmente V ! 

Je te recommande **fortement** de jouer un peu avec une diode sur [falstad](http://www.falstad.com/circuit/) pour bien observer les phénomènes décrits dans les trois modèles ci-dessus

## Intérêt
Les diodes nous servent peu en général. On les utilise dans des montages particuliers ou le fabriquant d'un composant indique qu'il faut utiliser telle diode à tel endroit pour que tout marche. D'autres types de diodes existent et nous sont très utiles : les LED ! La led se comporte comme une diode, mais émet en plus de la lumière quand elle est traversée par du courant. Nous nous en servons d'ampoule un peu partout dans le robot.

## Compléments
Si tu veux en savoir plus, je te recommande de 
	1. Bien suivre tes cours d'électronique
	2. Encore une fois, aller faire un tour sur [OpenClassrooms](https://openclassrooms.com/fr/courses/724810-lelectronique-de-zero/724552-la-diode). 