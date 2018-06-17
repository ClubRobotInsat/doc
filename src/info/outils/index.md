# Outils informatiques

Si ce n'est pas déjà fait, je te conseille dans un premier temps d'installer `git` et `CLion` en allant  dans la section des [outils communs](outils_communs/index.html).

Le code informatique a une certaine taille (700 fichiers pour 200.000 lignes de code) et l'ensemble des fichiers sont répartis dans une arborescence relativement dense.

De plus, n'oublie pas cette devise :

> Un bon informaticien est un informaticien fénéant.

Ainsi, on proscrit au maximum les copiés/collés donc certaines parties de code sont empaquetés dans des `librairies` et sont réutilisées dans de très nombreux endroits du projet.

Enfin, il faut toujours se rappeler qu'un ordinateur est bête et qu'il n'exécute que ce qu'on lui dit de faire, donc pour compiler ton Intelligence Artificielle révolutionnaire qui va nous envoyer directement en finale, il ne suffit pas d'appeler le compilateur avec `g++ IA.cpp` mais il faut donner les liens vers les librairies qui s'occupent des cartes électroniques, celles vers les outils mathématiques, spécifier quels répertoires sont utilisés pour compiler, éventuellement créer les librairies dynamiques associées et bien d'autres choses encore.

Afin d'éviter de t'infliger de telles soufrances, on utilise un utilitaire qui permets de gérer efficacement un tel projet grâce à `cmake`. On va ensuite détailler les librairies développées en interne au club pour faciliter la programmation.
