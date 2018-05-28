# Répertoire de travail

La première étape consiste à récupérer l'ensemble du projet informatique du Club.

On utilise un [gestionnaire de versions](https://fr.wikipedia.org/wiki/Logiciel_de_gestion_de_versions) pour manager l'ensemble du code : [git](https://git-scm.com/).

Ce choix a de très nombreux avantages :
- L'évolution de tout le code est sauvegardée donc on peut rappeler une version antérieure d'un fichier à tout moment
- Si on perd des fichiers ou que l'on se trompe, on peut facilement revenir à un état stable
- `git` permets de collaborer sur un même code, c'est à dire que plusieurs développeurs peuvent participer au code et le logiciel s'occupe de rassembler l'ensemble des modifications
- On peut profiter de tous ces avantages avec très peu de travail supplémentaire

# Clonage du dépôt

## Installation de `git`

Afin de bénéficier de tous les avantages de `git`, il n'y a rien de plus simple : il suffit d'exécuter la commande suivante.

```bash
sudo apt update
sudo apt install git
```

***Astuce :*** pour vérifier que l'installation d'une application a bien marché, tu peux appeler la commande `which` qui te retourne le chemin vers l'exécutable, ou encore l'exécuter avec le flag `--version` :

```bash
$ which git
/usr/bin/git

$ git version
git version 2.11.0
```

`git` est un logiciel extrêmement pratique une fois qu'on l'a pris en main, alors voici ton premier travail à la maison : [apprendre à utiliser `git` en ligne en 15 minutes](https://try.github.io/levels/1/challenges/1).

## Téléchargement du dépôt

A présent, on va `clone`r le repo info du Club. Il est actuellement privé, donc pense à demander à un membre son accès !

Je te conseille de te créer un dossier qui va regrouper tous les dépôts du Club, par exemple :

```bash
mkdir -p ~/Programs/ClubRobot
cd ~/Programs/ClubRobot
```

### Méthode simple avec HTTPS

Le clonage en HTTPS est le plus simple et le plus couramment utilisé. Il ne demande que le lien vers le dépôt pour le cloner, et lorsqu'une authentification est requise (clone d'un dépôt privé, push, ...) il faut entrer son identifiant du serveur git (dans notre cas, [github.com](https://github.com)) ainsi que son mot de passe.

Voici comment récupérer le code :

```bash
git clone https://<ton_login_github>@github.com/ClubRobotInsat/info.git
cd info
```

### Méthode alternative avec SSH

[github.com](https://github.com) propose une autre fonctionnalité accéder au serveur par [SSH](https://fr.wikipedia.org/wiki/Secure_Shell). La mise en place de cette méthode est un peu plus longue que le simple protocole HTTPS, mais ça te permettra de t'affranchir de devoir entrer ton mot de passe et ton identifiant à chaque intéraction avec le serveur.

Je te laisse suivre les [instructions détaillées](https://help.github.com/articles/connecting-to-github-with-ssh/) pour ajouter la clef SSH sur github.

Enfin, voici comment récupérer le code :

```bash
git clone git@github.com:ClubRobotInsat/info.git
cd info
```

-----

Félicitations, te voilà possesseur de tout le savoir informatique du Club !
