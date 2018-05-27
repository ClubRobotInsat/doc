# Compilation

Dans cette section nous allons te guider pour l'installation de tous les outils qui te permettront de compiler le projet pour le microcontrolleur.

# Outils génériques

Nous allons tout d'abord installer les outils suivantes :

* `git` : gestionnaire de versions pour le code
* `gdb-arm-none-eabi` : `gdb` est un débuggeur, on installe ici la version pour l'architecture `arm` sans os (`none`). Tu trouveras plus d'informations sur gdb par [ici](https://fr.wikipedia.org/wiki/GNU_Debugger). Pour les notions d'architecture, tu peut toujours lire la page sur l'[architecture matérielle](https://fr.wikipedia.org/wiki/Architecture_de_processeur) sur wikipédia.
* `gcc-arm-none-eabi` : `gcc` est un compilateur pour le langage C. Le paquet du compilateur viens avec aussi un linker (ou [éditeur de lien](https://fr.wikipedia.org/wiki/%C3%89dition_de_liens)) qui est nécessaire pour obtenir un exécutable final. On installe là le paquet qui nous fourni un éditeur de lien pour l'architecture du microcontrolleur (*arm*).
* `gcc-6-multilib` ou `gcc-7-multilib` : on a aussi besoin de l'éditeur de lien pour notre architecture d'ordinateur.
* `openocd` : cet outil permet de communiquer avec le microcontrolleur.

Pour cela, il te suffit d'exécuter dans un terminal :

```bash
sudo apt update
sudo apt install git gdb-arm-none-eabi gcc-arm-none-eabi gcc-6-multilib openocd
```

La première commande mets à jour les paquets disponibles, la deuxième les installes.

## Customisation de gdb

Bien que très puissant gdb propose une interface d'un autre siècle. On va rendre cette interface plus agréable.
1. On récupère un fichier tout fait qui rends l'interface de gdb supportable :
	```bash
	wget -P ~ git.io/.gdbinit
	```
2. On autorise le chargement de ce fichier par gdb :
	```bash
	echo "set auto-load safe-path /" >> ~/.gdbinit
	```

# Rust

Pour installer rust, tu peut te référer aux instructions sur [rustup.rs](https://rustup.rs). Les paramètres par défaut sont très bien.
Si tu as bien installé Rust, quand tu ouvres un nouveau terminal et que tu tapes :

```bash
rustc --version
```

Il devrait s'afficher un texte qui ressemble à ça :

```
rustc 1.25.0-nightly (b5392f545 2018-01-08)
```

# Utilitaires

Pour travailler plus efficacement, nous allons aussi installer quelques outils.

## Obligatoire : rustfmt

Dans un projet informatique, plusieurs personnes ont des conventions d'alignement du texte différent, différentes manières d'aller à la ligne dans les déclarations, etc.
Dans le but d'uniformiser le code produit par tout le monde, on utilise un outil [rustfmt](https://github.com/rust-lang-nursery/rustfmt) qui va venir formatter le code. Plus besoin de se prendre la tête avec l'indentation ou les retours à la ligne dans les gros appels de fonctions : on lance `rustfmt` et le code est formatté.
Cet outil est **obligatoire**, autrement ton installation ne fonctionnera pas. Pour l'installer il suffit de taper dans un terminal :

```bash
rustup component add rustfmt-preview
```

## Optionnel : cargo-edit

L'outil `cargo-edit` permet d'ajouter facilement des librairies depuis la ligne de commande dans un projet. Pour plus d'informations tu peut aller lire la description de l'outil par [ici](https://crates.io/crates/cargo-edit).
```
cargo install cargo-edit
```

## Optionnel cargo-clone

L'outil `cargo-clone` permet de récuperer le code source de n'importe quelle librairie disponible sur [crates.io](https://crates.io) en une ligne de commande.

```
cargo install cargo-clone
```
