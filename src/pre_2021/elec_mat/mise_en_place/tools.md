# Mise en place

Installons les logiciels pour router des cartes éléctroniques ! Au club robot nous utilisons [KiCad](https://en.wikipedia.org/wiki/KiCad). Certains d'entre vous connaissent peut être Eagle mais la version Linux de ce dernier n'est pas au point du tout. De plus c'est un logiciel payant (on peut certes avoir des licenses étudiantes) alors que KiCad est un logiciel libre.

# Installation de Kicad

Tu peux installer KiCad sur les trois principaux OS : Ubuntu, Windows et OSX. Il faut faire attention à bien installer la version 5 !

Pour les autres distributions Linux demande directement aux gens du club !

## Linux

### Ubuntu

Il suffit de rentrer les trois commandes suivantes pour obtenir la dernière version de Kicad (Kicad 5) :

** A Verifier **

```bash
sudo add-apt-repository --yes ppa:js-reynaud/kicad-5
sudo apt update
sudo apt install kicad
```

Ces commandes sont nécessaires car on utilise la version 5 de Kicad qui est encore en beta.

Tu peux vérifier que l'installation a bien fonctionné en lançant Kicad. Normalement KiCad est livré avec des librairies de composants. Si elles ne sont pas installées chez toi, rapproche-toi d'un membre du club !

### OSX
Il existe deux méthodes pour installer Kicad sur un Mac. La classique en allant sur http://kicad-pcb.org/download/osx/, puis en telechargeant la dernière version stable, ou avec Homebrew.

Homebrew et fonctionne à peu près comme aptitude sur Linux. C'est un très bon outil qui permet d'installer facilement beaucoup d'applications disponibles sur Linux mais pas nativement sur mac (comme wget par exemple). Je profite juste de l'installation de Kicad pour présenter cet outil très utile.
N'hésite pas à faire un tour sur leur site pour en savoir plus, je ne parlerai ici que du nécéssaire pour installer Kicad. 

https://brew.sh/index_fr

Pour installer homebrew, il suffit d'executer cette ligne dans un terminal :
 
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Cette ligne télécharge et éxécute l'installeur pour Brew. Laisse-toi guider, il décrit ce qu'il fait au fur et a mesure de l'installation.

Une fois l'install terminée, il faut installer une extension de Brew appellée 'cask'. Elle permet d'installer proprement des applicaitons en passant par le téléchargement et la vérification du .app. 

```bash
brew install cask
```

Tout est prêt ! Il ne reste plus qu'à installer la dernière version de Kicad. Attention le téléchargement est lourd (3GB environ).

```bash
brew cask install kicad
```

Kicad est désormais correctement installé sur ton ordinateur et peut s'utiliser comme n'importe quelle autre application.
Il est recommandé d'installer ses apps avec Homebrew autant que possible. Pour savoir si une app est disponible sur leurs dépôts, utilise 
```bash
brew search [nom à rechercher]
```
Si brew trouve des résultats, un simple  `brew install [nom trouvé]` se chargera de l'installation.



### Windows

Il suffit de récupérer et lancer l'installeur le plus récent parmis tout ceux proposés sur [cette](http://downloads.kicad-pcb.org/windows/nightly/) page.



