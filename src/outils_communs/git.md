# Git

*Cette page s'adresse à tous les membres du Club.*

On utilise un [gestionnaire de versions](https://fr.wikipedia.org/wiki/Logiciel_de_gestion_de_versions) pour manager l'ensemble du code : [git](https://git-scm.com/).

Ce choix a de très nombreux avantages :
- L'évolution de tout le code est sauvegardée donc on peut rappeler une version antérieure d'un fichier à tout moment
- Si on perd des fichiers ou que l'on se trompe, on peut facilement revenir à un état stable
- `git` permets de collaborer sur un même code, c'est à dire que plusieurs développeurs peuvent participer au code et le logiciel s'occupe de rassembler l'ensemble des modifications
- On peut profiter de tous ces avantages avec très peu de travail supplémentaire

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

## Apprendre à utiliser cet outil

`git` est un logiciel extrêmement pratique une fois qu'on l'a pris en main, alors voici ton premier travail à la maison : [apprendre à utiliser `git` en ligne en 15 minutes](https://try.github.io/levels/1/challenges/1).

Vu qu'il sait faire de très nombreuses choses, ce n'est bien sûr pas la peine d'apprendre toutes ses commandes par coeur. Voici des *Cheat Sheets* qui vont te faire gagner du temps :

* [Cheat sheet de GitHub (en)](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
* [Chear sheet de GitHub (fr)](https://services.github.com/on-demand/downloads/fr/github-git-cheat-sheet.pdf)
* [Cheat sheet de Tow)er](https://www.git-tower.com/blog/git-cheat-sheet/)

## Création d'un compte [GitHub](https://github.com)

Afin de partager notre travail, on utilise les serveurs de GitHub. Il s'agit d'un service web qui offre une interface graphique à `git` tout en permettant de récupérer les projets du Club n'importe où.

Il faut donc que tu te crées un compte sur le site : [github.com](https://github.com/).

Une fois que c'est fait, demande à un membre du Club de t'ajouter dans l'organisation [ClubRobotINSAT](https://github.com/orgs/ClubRobotInsat/).

## Configuration de `git`

Il faut configurer ton ordinateur pour qu'il te connaisse, voici comment :

1. Ton nom associé aux `commit`
    `git config --global user.name "[ton nom]"`
2. Ton adresse mail associée aux `commit` (de préférence celle utilisée lors de la création de ton compte GitHub)
    `git config --global user.email "[ton adresse mail]"`
3. Colorisation des lignes (pas obligatoire mais pratique)
    `git config --global color.ui auto`

## 2 méthodes pour `clone`r les dépôts

### Méthode simple avec HTTPS

Le clonage en HTTPS est le plus simple et le plus couramment utilisé. Il ne demande que le lien vers le dépôt pour le cloner, et lorsqu'une authentification est requise (clone d'un dépôt privé, push, ...) il faut entrer son identifiant du serveur git (dans notre cas, [github.com](https://github.com)) ainsi que son mot de passe.

Voici comment récupérer le code de la partie `info` :

```bash
git clone https://<ton_login_github>@github.com/ClubRobotInsat/info.git
cd info
```

### Méthode alternative avec SSH

[github.com](https://github.com) propose une autre fonctionnalité accéder au serveur par [SSH](https://fr.wikipedia.org/wiki/Secure_Shell). La mise en place de cette méthode est un peu plus longue que le simple protocole HTTPS, mais ça te permettra de t'affranchir de devoir entrer ton mot de passe et ton identifiant à chaque intéraction avec le serveur.

Je te laisse suivre les [instructions détaillées](https://help.github.com/articles/connecting-to-github-with-ssh/) pour ajouter la clef SSH sur github.

Enfin, voici comment récupérer un dépôt :

```bash
git clone git@github.com:ClubRobotInsat/info.git
cd info
```
