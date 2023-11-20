# Électronique Logicielle

L’électronique logicielle (ou *elec soft* pour les intimes) consiste à concevoir le fonctionnement logiciel d'un microcontrôleur et de ses périphériques.

Le but des cartes électroniques est de fournir à la partie informatique du robot un moyen simple d'envoyer des commandes aux différents actionneurs et de lire les différents capteurs. Pour certains types de composants c'est assez simple (les composants binaires comme les LEDs ou les vannes) et pour d'autres cela implique plus de travail (servomoteurs numériques, moteurs à courant continu).

La carte électronique va donc avoir un rôle d’intermédiaire entre l'ordinateur embarqué et le monde physique du robot. Normalement, si tout va bien durant l'année, un circuit imprimé a été réalisé afin que le microcontrôleur puisse parler avec les actionneurs/capteurs.

Il suffit donc de programmer le microcontrôleur pour qu'il envoie les bons signaux quand on lui demande !

# Plus de documentation

Tu veux encore plus de documentation ? Ta soif de savoir ne s'étanche pas ? Tu cherches le détail du fonctionnement du module UART du microcontrôleur stm32f103 ? Tu n'arrive pas à savoir si l’adresse `0x4000400C` est un Timer ou un I2C ? Tu cherches le layout du W5500 ? Tu veut comprendre les arcanes de l'elec ? Toutes ces informations se trouvent dans l'archive compilée par mes soins, [ici](../images/elec_soft/DOC.tar.gz)

Inclu notamment :

* ref du stm32f103
* ref du stm32f446
* ref du tcs3200
* ref des drs0101
* ref des ponts h
* ref du w5500

(liste non contractuelle)

[Archive](../images/elec_soft/DOC.tar.gz)