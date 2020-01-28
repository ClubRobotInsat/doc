# Compilation

Dans cette section, tu vas faire le grand pas et mettre en place tous les outils pour bidouiller sur les cartes du club robot !

Attention, les instructions sont valables uniquement pour Linux, et sont à adaptées pour ceux qui ont des distributions Linux différentes de Ubuntu.

# Outils génériques

Tout d'abord il te faut installer les outils suivants :

* `gdb-arm-none-eabi` : `gdb` est un débuggeur, tu installes ici la version pour l'architecture `arm` sans os (`none`). Tu trouveras plus d'informations sur gdb par [ici](https://fr.wikipedia.org/wiki/GNU_Debugger). Pour les notions d'architecture, tu peux toujours lire la page sur l'[architecture matérielle](https://fr.wikipedia.org/wiki/Architecture_de_processeur) sur wikipédia.
* `gcc-arm-none-eabi` : `gcc` est un compilateur pour le langage C. Tu installes la version pour compiler vers l'architecture `arm` ici.
* `openocd` : cet outil permet de communiquer avec le microcontrôleur : c'est grâce à lui que l'on peut envoyer des exécutables dessus et les déboguer.

Sur Ubuntu, cela se fait en exécutant les commandes suivantes dans un terminal :

```bash
sudo apt update
sudo apt install git gdb-multiarch gdb-arm-none-eabi gcc-arm-none-eabi openocd
```

La première commande mets à jour les paquets disponibles, la deuxième les installe.

## Customisation de gdb

Bien que très puissant, gdb propose une interface d'un autre siècle. Je te propose de rendre cette interface plus agréable !

1. On récupère un fichier tout fait qui rend l'interface de gdb supportable :
	```bash
	wget -P ~ git.io/.gdbinit
	```
2. On autorise le chargement de ce fichier par gdb :
	```bash
	echo "set auto-load safe-path /" >> ~/.gdbinit
	```

# Rust

Pour installer Rust, tu peux te référer aux instructions sur [rustup.rs](https://rustup.rs). Les paramètres par défaut sont très bien.
Si tu as bien installé Rust, quand tu ouvres un nouveau terminal et que tu tapes :

```bash
rustc --version
```

Il devrait s'afficher un texte qui ressemble à ça (tu auras certainement une version plus récente, là il s'agit de la version du 20 Mai 2019) :

```bash
rustc 1.35.0 (3c235d560 2019-05-20)
```

# Utilitaires

Pour bidouiller plus efficacement, tu peux aussi installer quelques outils plutôt pratiques.

## Obligatoire : rustfmt

Dans un projet informatique, plusieurs personnes ont des conventions d'alignement du texte différent, différentes manières d'aller à la ligne dans les déclarations, etc. Si jamais tu t'ennuies, tu peux demander à un barbu si il préfère les tabulations ou les espaces pour indenter le code, flame ware garantie !
Dans le but d'uniformiser le code produit par tout le monde, on utilise un outil [rustfmt](https://github.com/rust-lang-nursery/rustfmt) qui va venir formater le code. Plus besoin de se prendre la tête avec l'indentation ou les retours à la ligne dans les gros appels de fonctions : on lance `rustfmt` et le code est formaté.

Cet outil est **obligatoire**, autrement ton installation ne fonctionnera pas. Pour l'installer il suffit de taper dans un terminal :

```bash
rustup component add rustfmt-preview
```

## Optionnel : cargo-edit

L'outil `cargo-edit` permet d'ajouter facilement des librairies depuis la ligne de commande dans un projet. Pour plus d'informations tu peux aller lire la description de l'outil par [ici](https://crates.io/crates/cargo-edit).

```bash
cargo install cargo-edit
```

## Optionnel cargo-clone

L'outil `cargo-clone` permet de récupérer le code source de n'importe quelle librairie disponible sur [crates.io](https://crates.io) en une ligne de commande.

```bash
cargo install cargo-clone
```

# Erreurs courantes
Quelques erreurs arrivent régulièrement et sont dû à une mauvaise configuration du compilateur. En particulier l'erreur : ```error: linking with `cc` failed: exit code: 1``` peut être résolue ainsi :
On installe gdb-multilib : ```sudo apt install gcc-multilib```.
Si l'erreur n'est pas résolue, on vérifie que l'on a choisi le bon compilateur : ```sudo update-alternatives --config gcc``` et choisir gcc-8.
