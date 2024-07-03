# Guide d'utilisation Creo
## Etape 1 : Téléchargement 
On travaille avec **Creo Parametric 9**, pour le télécharger, il faut suivre le lien : [Installer Creo](https://www.ptc.com/en/products/education/free-software/creo-college-download).
Il faut s'inscrire avec **son mel INSA** et suivre les étapes qui sont démontrés dans le video : [How to download creo 7.0 student version for free](https://www.youtube.com/watch?v=LYNOAizD2eE). Mais bien évidement au lieu de Creo 7 dans toutes les instances il faut choisir le **Creo 9**.
Si le video n'est pas disponible, veuillez vous addresser à votre responsable de pôle Mécanique.

## Etape 2 : Configuration 
Il faut télécharger le ficher [config.pro](https://github.com/ClubRobotInsat/doc/blob/master/src/mecanique/config.pro) et remplacer sur votre ordinateur dans la destination suivante : *C:\Program Files\PTC\Creo 9.0.0.0\Common Files\text\* (si vous l'avez installé ailleurs, il faut trouver où ils sont vos *Program Files* et le reste suivre comme dans le lien.
Cette config a pour but de faire 2 choses:
1) Utilisation d'unités métriques par défaut (sinon c'est en inch et pas cohérente avec la raison parce que les unités imperiales ne servent à rien)
2) Faire un sort que Creo ne garde pas les anciennes versions de vos fichers pour ne pas créer des erreurs sur github (voire le tutoriel de git pour les mécas)
