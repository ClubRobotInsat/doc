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

### Apprendre en ligne

`git` est un logiciel extrêmement pratique une fois qu'on l'a pris en main, alors voici ton premier travail à la maison : [apprendre visuellement git](https://learngitbranching.js.org/). Le tutoriel est multilangue, et si tu préfères suivre un tuto en français en voici un d'[OpenClassrooms](https://openclassrooms.com/courses/gerez-vos-codes-source-avec-git).

Vu qu'il sait faire de très nombreuses choses, ce n'est bien sûr pas la peine d'apprendre toutes ses commandes par coeur. Voici des *Cheat Sheets* qui vont te faire gagner du temps :

* [Cheat sheet de GitHub (en)](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
* [Chear sheet de GitHub (fr)](https://services.github.com/on-demand/downloads/fr/github-git-cheat-sheet.pdf)
* [Cheat sheet de Tow)er](https://www.git-tower.com/blog/git-cheat-sheet/)

### B.A.-BA des commandes

Si tu as besoin d'aide pour utiliser `git`, les forums de [StackOverflow](http://stackoverflow.com/) te permettent de répondre à tes questions les plus complexes.

Ensuite, voici une [documentation d'API](https://git-scm.com/docs) des différentes fonctions.

En général cependant, tu vas devoir utiliser le même socle de commandes et le but de ce paragraphe est de te lister le ***template*** de commandes à utiliser ; je t'invite néanmoins à aller lire la documentation de chacune de ces commandes pour voir à quel point elles peuvent être puissantes.

1. Avant de commencer à travailler, il faut récupérer le travail réaliser par les autres développeurs. Si tu as déjà des `commit`s en local, tu peux spécifier le flag `--rebase` pour avoir une architecture linéaire ; sinon `git` va `merge`r la branche locale et celle distante même pour des intégrations triviales.

    - ```git pull [--rebase]```

2. À présent, à toi de faire des modifications pour contribuer au dépôt. Une fois que tu as fini et que tu veux créer un paquet qui contient ta nouveauté, il faut demander à `git` de rajouter toutes tes modifications intéressantes. Tu peux également connaître les modfications que tu as faites soit fichier par fichier, soit ligne par ligne. Bien sûr, tu peux restreindre la recherche à un document ou à des fichiers en particulier en les rajoutant à la fin.

    - ```git status``` te liste tous les fichiers qui ont été modifiés / supprimés / créés
    - ```git diff``` te montre toutes les additions et délétions dans le code pour l'ensemble de ces fichiers

3. Il est temps de choisir les modifications que tu veux sauvegarder dans l'arborescence de `git`. Il y a plusieurs moyens d'y arriver en utilisant `git add` et `git reset` :

    - ```git add *``` te permets d'ajouter TOUTES les modifications, il ne faut donc pas l'utiliser si tu travailles sur plusieurs projets en même temps
    - ```git add <file 1> [file 2] [...]``` ajoute les modifications de chaque fichier / dossier dans leur ensemble. Si tu crées un nouveau fichier, il faut utiliser cette méthode pour l'ajouter et non pas la suivante.
    - ```git add -p``` permets de mixer `add` et `diff` ; il s'agit d'une méthode particulièrement efficace si tu as besoin de sauvegarder seulement quelques lignes et non pas l'ensemble des modifications sur un fichier. Une interface s'ouvre et tu peux choisir d'accepter avec `y` ou de refuser les modifications avec `n` ; d'autres commandes sont possibles notamment `q` pour quitter.
    - `git reset` te permets d'annuler l'insertion des modifications dans la sauvegarde de `git` (mais il ne reset pas les modifications du fichier, rassure-toi). Tu peux également lui donner l'argument `-p` pour accéder à l'interface intéractive.

4. Tu peux vérifier que tu as ajouter les bonnes modifications en appelant de nouveau
    - `git status` pour voir les fichiers
    - `git diff --staged` pour voir les modifications dans le code

5. Il est enfin temps de créer le 'paquet' de modifications, appelé `commit`. Afin de pouvoir s'y retrouver plus facilement, les `commit`s ont chacun un numéro unique (appelé hash ; il a cette tête : `44bf09d0a2c36585aed1c34ba2e5d958a9379718` et est généré automatiquement) et également un message que tu dois choisir pour expliquer ce à quoi il sert. C'est très intéressant de créer un `commit` par fonctionnalité, et donc qui modifie éventuellement plusieurs fichiers, afin de pouvoir relire l'historique ensuite. Pense donc à en réaliser plusieurs au cours de ton travail, tu pourras facilement revenir à des versions précédentes ce qui est très bénéfique !
    - `git commit -m <message>`
    - `git commit --amend` te permets de juste rajouter des modifications au dernier commit pour ne faire qu'un seul paquet avec les anciennes et nouvelles modifs.

6. Maintenant que tu as créé plusieurs `commit`s, tu peux vérifier que tout s'est bien passé en faisant appel à l'historique. Tu pourras y observer le numéro de chaque commit, leur auteur, leur date de création ainsi que leur message d'accompagnement.
    - `git log`

7. Enfin, les modifications que tu viens de faire ont pour but d'être partagées aux autres développeurs et donc envoyés sur le dépôt distant de [github.com](https://github.com/orgs/ClubRobotInsat/). Normalement, si tu as bien suivi les étapes de clonage présentées un peu plus bas, tout devrait être déjà configuré pour n'avoir qu'à taper ceci :
    - `git push -u origin <branch>` la première fois pour demander à envoyer les `commit`s sur le flux `origin`, c'est à dire github, correspondant à la branche actuelle (par exemple `master`)
    - `git push` les fois suivantes ; tout va marcher ensuite à condition d'avoir une connexion internet :wink:

Je n'ai pas parlé d'un certain nombre de commandes car tu ne devrais pas les utiliser quotidiennement. Voici une liste de fonctione néanmoins intéressantes dont tu peux aller voir la documentation :
* `git branch` - notion que je n'ai que très peu abordée, `git` travaille avec des branches pour faciliter le travail sur plusieurs projets en parallèle
* `git checkout` - permets de se ballader d'une branche à une autre branche ou à un commit en particulier
* `git reset` - idél pour enlever les modifs d'un `git add` et pour supprimer des `commit`s foireux présents localement
* `git revert` - applique les modifications complémentaires à un commit, idéal pour annuler un commit foireux déjà envoyé sur le serveur
* `git merge` - permets à deux branches de fusionner ; fonctionnalité sympa pour travailler indépendamment sur un projet puis l'intégrer dans la branche principale une fois qu'il est fonctionnel
* `git rebase` - permets de copier des commits pour avoir une arborescence plus linéaire
* `git rebase -i` - fenêtre intéractive pour réorganiser les commits comme tu veux
* `cherry-pick` - copie un ensemble de commits à l'endroit actuel, ce qui simplifie l'utilisation d'un `git rebase`
* `git stash` - mémorise des modifications dans un endroit à part ; ça te permets de sauvegarder un travail qui ne compile pas par exemple. Options intéressantes : `drop`, `pop`, `list`, `show`, `save <NAME>`, `-p`.
* `git tag` - marque permannante sur un commit pour y accéder n'importe quand (à sa création, il faut appeler `git push --follow-tags` pour le partager avec tout le monde).
* `git fetch` - télécharge les infos sur le dépôt distant ; contrairement à `git pull`, aucun `merge` n'est réalisé entre le dépôt localement et celui à distance, donc cette commande est très peu utilisée

## Création d'un compte [GitHub](https://github.com)

Afin de partager notre travail, on utilise les serveurs de GitHub. Il s'agit d'un service web qui offre une interface graphique à `git` tout en permettant de récupérer les projets du Club n'importe où.

Il faut donc que tu te crées un compte sur le site : [github.com](https://github.com/).

Une fois que c'est fait, demande à un membre du Club de t'ajouter dans l'organisation [ClubRobotINSAT](https://github.com/orgs/ClubRobotInsat/).

## Configuration de `git`

Il faut configurer ton ordinateur pour qu'il te connaisse, voici comment :

1. Ton nom associé aux `commit`
    - `git config --global user.name "[ton nom]"`
2. Ton adresse mail associée aux `commit` (de préférence celle utilisée lors de la création de ton compte GitHub)
    - `git config --global user.email "[ton adresse mail]"`
3. Colorisation des lignes (pas obligatoire mais pratique)
    - `git config --global color.ui auto`

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
