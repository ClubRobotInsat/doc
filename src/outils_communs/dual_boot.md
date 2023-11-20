# Dual Boot

Tu as probablement un ordinateur sous Windows. Cependant, développer sous ce système d'exploitation est parfois compliqué donc on utilise principalement des systèmes Linux au club.

Tu as différentes manières d'utiliser Linux :
* Utiliser [WSL](https://docs.microsoft.com/fr-fr/windows/wsl/install-win10), un sous-système Linux pour Windows (cependant, il n'est pas possible d'utiliser l'interface graphique)
* Utiliser [VirtualBox](https://www.virtualbox.org/), une machine virtuelle pour exécuter Linux à l'intérieur de Windows (cependant, ton ordinateur va devoir exécuter deux systèmes d'exploitation en même temps donc il y aura des pertes de performance)
* Installer un dual boot, c'est à dire qu'au démarrage de ton ordinateur, soit Windows soit Linux va être lancé, donc les performances de chaque OS vont être maximales mais ton disque dur aura une partie attribuée à Windows et une autre à Linux.

## Préliminaires sous Windows

Avant tout, il faut faire quelques réglages sous Windows pour permettre l'installation d'un nouveau système d'expoitation (Windows n'aime pas trop partager un ordinateur). Pense aussi à sauvegarder toutes les données importantes ailleurs que sur ton PC. Je n'ai jamais eu de problème avec une installation de Linux, mais comme d'habitude, quand on joue avec les partitions de son disque dur, on prend des précautions (panne de courant/batterie pendant une étape critique par exemple).

* **Désactiver la mise en veille prolongée :** par défaut, Windows ne s'éteint pas quand on le lui dit mais rentre en veille prolongée. Ceci est totalement inutile depuis qu'il y a des disques SSD, et ça empèche de démarrer sous un autre OS
  - ouvrir un terminal avec les droits administrateur (clic droit sur le logo windows, shell)
  - entrer la commande `powercfg -h off`
* **Partitionner le disque dur :** afin d'éviter tout problème de partionnement à cause de la fragmentation Windows, il vaut mieux utiliser directement les outils de Windows :
  - appuyer sur `Windows + R`
  - saisir `diskmgmt.msc`
  - clic droit sur le volume à partitionner (_Disque 0_) et sélectionner `Réduire le volume`
  - choisir la taille de la partition désirée (Ubuntu demande 15Go minimum et recommande 25Go ; si tu as de la place tu peux faire une nouvelle partition à `40Go` pour être large)

Ton disque dur a maintenant un espace inutilisé, il est temps de l'utiliser !

##  Choix du système Linux

Il te faut à présent choisir quel nouveau système d'exploitation utiliser. **Linux** est un [univers très vaste](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg), que l'on peut sommairement classer :
* les systèmes basés sur les fichiers `.rpm`
  - CentOS
  - Fedora
  - openSUSE
* les systèmes dérivant de `Debian`
  - **Ubuntu**
  - Kali Linux
* les systèmes basés sur le _packet manager_ `pacman`
  - Arch Linux
  - **Manjaro**

Tu peux demander des conseils aux membres si tu ne sais pas quel OS prendre, ils pourront même t'en faire essayer plusieurs !


### Ubuntu 22.04

Si tu n'as aucune idée de quel système choisir, je te conseille [Ubuntu 22](https://www.ubuntu.com/download/desktop), un système communautaire LTS (_Long Term Supported_) qui est très simple à prendre en main et pour laquelle les nombreux forums répondent à toutes tes questions.

Pour l'installer, il te suffit de [télécharger l'ISO](https://www.ubuntu.com/download/desktop/thank-you?country=US&version=22.04.1&architecture=amd64) et la mettre sur une clef USB.

__! Attention !__
Sauvegarde toutes les données sur ta clé USB avant de continuer ! Ta clef sera effacée par la suite (mais tu pourras la réinitialiser après avoir installé Linux, puis remettre tes données dessus ensuite).

Par "mettre sur une clef USB", on entend "flasher une image disque", mais c'est un terme barbare. Ici il ne te sera expliqué que comment faire.
Le moyen le plus simple est d'utiliser [Etcher](https://etcher.io/). C'est un logiciel open source et compatible sur Windows, Mac et Linux. Sa grande qualité est d'être __tres__ simple à utiliser.

Une fois installé et lancé, il n'y a littéralement que quatre clics à faire : 
  - "Select Image" t'invite a choisir l'ISO que tu as déjà téléchargé.
  - "Select Drive" te demande de choisir le disque (clef USB dans notre cas) à flasher. C'est a dire qu'il sera __formatté__ ( ! toutes les données dessus seront perdues !) puis que l'ISO y sera correctement installé. Cette étape requiert de savoir ce que l'on fait : il faut être __absolument__ certain que le nom et la capacité du disque choisi correspondent à ta clef USB, et __surtout pas à ton disque dur__. Normalement Etcher est bien fait, et refuse de continuer si choisit un disque à ne pas toucher, mais il vaut mieux être trop prudent.
  - "Flash!" lance l'opération et raconte ce qu'il fait à ta clef au fur et à mesure.
  
Si tout c'est bien passé, ta "Live-USB" est prête à l'emploi. La suite dépend de ton ordinateur et de la distribution que tu veux installer. 

## Installation sur ton ordinateur d'un dual boot

À présent que tu es muni.e d'une clef bootable, tu peux la brancher sur ton ordinateur, appuyer sur la touche pour aller dans le BIOS (ça dépend du constructeur mais tu as de bonnes chances d'y parvenir en spammant `Échap`, `F2`, `F9` ou `F11`) puis modifier quelques paramètres :
* Désactive le `UEFI Secure Boot`
* Désactive le `Fast Start-Up`
* Change l'ordre de priorité pour booter afin de lancer ta clef USB en première

Si tu as le moindre problème je te conseille d'aller voir un membre du club, mais si ton écran affiche des choses en relation avec Linux et non pas l'écran de démarrage de Windows c'est gagné !

Tu peux choisir de tester l'OS ou alors de l'installer directement. L'interface devrait être assez explicite ; il va juste te falloir réaliser une dernière manip sur la page des disques.

Pour être sûr.e que tout se passe bien, choisis `Something else` lorsqu'on te demande où installer le système Linux. Ensuite, dans l'espace libre, tu peux attribuer 2Go à une mémoire de type `swap` (ce qui permets de soulager la RAM si tu lances des applications qui consomment trop). Tu peux attribuer le reste de l'espace libre pour Linux avec `type: ext4` et `mount point: /` en formatant l'espace pour éviter tout problème ultérieur.

Finalise l'installation et redémarre ; si tu arrives sur une interface pour choisir entre Linux et Windows (c'est le `Grub 2`) tout marche comme il faut !!

## Setup de Linux

La première chose à faire est de mettre à jour ton système.
* **ArchLinux :** `sudo pacman -Suy`
* **Debian :** `sudo apt update && sudo apt upgrade`

### Installation basique

Installons les paquets de base nécéssaire pour faire fonctionner les différents outils du club. Ouvre un terminal, et entres :
```bash
sudo apt install git curl wget ntfs-3g python3 gcc gdb jetbrains-toolbox
```

Les paquets installés sont les suivants:
* `git` : un gestionnaire de version, qui permet de gérer les différentes versions d'un projet
* `curl` : un outil pour télécharger des fichiers depuis un terminal
* `wget` : un outil pour télécharger des fichiers depuis un terminal
* `ntfs-3g` : un outil pour lire et écrire sur des partitions NTFS (celles de Windows)
* `python3` : un langage de programmation
* `gcc` : un compilateur pour le langage C
* `gdb` : un débugger pour le langage C
* `jetbrains-toolbox` : un outil pour installer les IDE de JetBrains

Pour installer Rust:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```