# Guide de l'installation et de configuration de Creo 9
## Etape 1 : Téléchargement 
On travaille avec **Creo Parametric 9**, pour le télécharger, il faut suivre le lien : [Installer Creo](https://www.ptc.com/en/products/education/free-software/creo-college-download).
Il faut s'inscrire avec **votre mail INSA** et suivre les étapes qui sont démontrées dans la vidéo.: [How to download creo 7.0 student version for free](https://www.youtube.com/watch?v=LYNOAizD2eE). Mais bien évidemment, au lieu de Creo 7, dans toutes les instances, il faut choisir le **Creo 9**. Si la vidéo n'est pas disponible, adressez-vous à votre responsable de pôle Mécanique.
## Etape 2 : Configuration 
Il faut télécharger le ficher [config.pro](https://github.com/ClubRobotInsat/doc/blob/master/src/mecanique/config.pro) et le remplacer sur votre ordinateur dans la destination suivante : "C:\Program Files\PTC\Creo 9.0.0.0\Common Files\text". Si vous l'avez installé ailleurs, il faut trouver où se trouvent vos Program Files et suivre le reste comme dans le lien. Cette configuration a pour but de faire deux choses :

1) Utilisation d'unités métriques par défaut (sinon c'est en pouces et pas cohérent avec la logique parce que les unités impériales ne servent à rien)
2) Faire en sorte que Creo ne garde pas les anciennes versions de vos fichiers pour ne pas créer des erreurs sur GitHub (voir le tutoriel de Git pour les mécas)
