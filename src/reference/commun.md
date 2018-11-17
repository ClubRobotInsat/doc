# Communs

# Sommaire

1. [Communication](#communication)
2. [Microcontrôleur](#microcontroleur)
3. [Black-Pill](#black-pill)
4. [Quartz](#quartz)



## Communication

Pour la communication on utilise sur nos cartes un composants tout fait : le w5500.

[Datasheet du w5500](/datasheets/w5500/w5500.pdf).


Ce composant est monté sur une minicarte toute faîte que l'on achète chez [makerfabs](https://www.makerfabs.com/Mini-Ethernet-Board-W5500.html). (si le lien meurs, cherchez "mini ethernet board w5500").

![Image de la mini carte](/images/components/w5500.jpg)

[Dimension de la carte](/datasheets/w5500/w5500_board_sizes.pdf)

[Schematic de la carte](/datasheets/w5500/w5500_board_schem.pdf)

![PCB de la carte](/datasheets/w5500/w5500_board_pcb.png)

Coté logiciel, il existe une librairie sur [crates.io](https://crates.io/crates/w5500).

----
## Microcontroleur

On utilise en ce moment le [stm32f103](https://www.st.com/en/microcontrollers/stm32f103.html?querycriteria=productId=LN1565).

Il viens en plusieurs déclinaisons (ce sont les lettres qui viennent derrière le nom du microcontrôleur). Les principales différences entre ces déclinaisons sont :
* Taille de la RAM
* Taille de la flash
* Nombre de timers

[Manuel de référence de la famille des cortex M1](/datasheets/stm32f103/f103_ref_manual.pdf)


[Datasheet de la puce](/datasheets/stm32f103/cortex_m1_ref_manual.pdf)

----
## Black-Pill

Pour le prototypage on utilise un [stm32f103](#microcontroleur) monté sur un PCB déjà routé.
La carte s'appelle [black-pill](https://robotdyn.com/stm32-arm-arduino-mini-system-dev-board-blue-pill-with-arduino-bootloader.html).

[Pinout de la carte](/datasheets/black-pill/black-pill-pinout.pdf)

[Schematic de la carte](/datasheets/black-pill/black-pill-schematic.pdf)

[Plus d'informations sur la carte](https://wiki.stm32duino.com/index.php?title=Black_Pill)

----
## Quartz

Le microcontroleur a besoin d'un signal d'horloge fixé pour pouvoir fonctionner correctement. Ce signal est généré par un [quartz](https://fr.wikipedia.org/wiki/Quartz_(%C3%A9lectronique)) qu'il faut choisir selon plusieurs critères.

1. La marge de gain

Pour faire naitre les oscillations dans le cristal, il faut s'assurer que la transconductance interne du microcontroleur (<a href="https://www.codecogs.com/eqnedit.php?latex=g_m" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_m" title="g_m" /></a>) est au moins 5 fois supérieure à celle du quartz choisi.
La marge de gain se calcule grâce a la formule suivante :

<a href="https://www.codecogs.com/eqnedit.php?latex=Gain_{margin}=\frac{g_m}{g_{mcrit}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Gain_{margin}=\frac{g_m}{g_{mcrit}}" title="Gain_{margin}=\frac{g_m}{g_{mcrit}}" /></a>
