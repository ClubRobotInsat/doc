# IDE

Normalement tu as suivi les instructions de la section [Outils Communs - IDE](/outils_communs/ide.html), tu as donc une installation de CLion fonctionnelle.

Si ce n'est pas le cas, reviens un petit peu en arrière et installe CLion !

## Installation du plugin pour Rust

En électronique logicielle, nous utilisons le langage **Rust**. Tu en entendras parler un peu plus loin dans la documentation. En attendant il faut installer un plugin pour supporter le langage dans CLion.

Il faut commencer par ouvrir les options de CLion `File>Settings` ou encore `ctrl+alt+s`.

Dans le menu `Plugins` tu cliques sur `Install Jetbrains Plugins` et tu cherches `Rust` dans la fenêtre qui s'est ouverte. Pour lancer l'installation, il suffit de cliquer sur `Install`.

Normalement il devrait être possible de compiler, sinon tu peut aller voir dans `Settings > Languages & Frameworks > Rust` si tout a été bien detecté et cliqué sur `download stdlib with rustup` si cela t'es proposé.

![Installation du plugin pour Rust](/images/ide/plugin_install.png "Plugin pour Rust")

## Vérification de l'installation

Si il n'y a pas de messages d'erreur, ***BRAVO*** tu viens d'installer avec succès le plugin Rust pour CLion !

# Compilation d'un projet

Maintenant c'est la dernière étape, le grand moment : nous allons compiler un projet.

C'est le moment de lancer CLion ! Une fois lancé, dans `File > Open` choisi le dossier de `black-pill`.

Si tout se passe bien, tu devrais pouvoir compiler, tester et formater le code. Pour cela, il faut choisir la configuration adéquate, en haut à droite de ton interface et appuyer sur le bouton `run`.

Si la compilation fonctionne, tu peux passer à la suite c'est tout bon tu as tout installé avec succès !
