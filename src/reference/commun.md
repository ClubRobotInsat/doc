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

Le quartz a également besoin de composants externes pour fonctionner correctement : il faut ajouter 2 condensateurs de même valeur et éventuellement une résistance, selon le schéma suivant :

![Schema_quartz](../images/components/Schema_quartz.png)

Le condensateur <a href="https://www.codecogs.com/eqnedit.php?latex=C_S" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_S" title="C_S" /></a> correspond à la capacité parasite due aux fils. On peut l'approximer à 5 pF dans les calculs.

**1. La marge de gain**

Pour faire naitre les oscillations dans le cristal, il faut s'assurer que la transconductance interne du microcontroleur (<a href="https://www.codecogs.com/eqnedit.php?latex=g_m" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_m" title="g_m" /></a>) est au moins 5 fois supérieure à celle du quartz choisi.
La marge de gain se calcule grâce a la formule suivante :

<a href="https://www.codecogs.com/eqnedit.php?latex=Gain_{margin}=\frac{g_m}{g_{mcrit}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Gain_{margin}=\frac{g_m}{g_{mcrit}}" title="Gain_{margin}=\frac{g_m}{g_{mcrit}}" /></a>

Avec <a href="https://www.codecogs.com/eqnedit.php?latex=g_{mcrit}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_{mcrit}" title="g_{mcrit}" /></a> donné par la formule :

<a href="https://www.codecogs.com/eqnedit.php?latex=g_{mcrit}&space;=&space;4*ESR*(2\pi&space;F)^2*(C_0&space;&plus;&space;C_L)^2" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_{mcrit}&space;=&space;4*ESR*(2\pi&space;F)^2*(C_0&space;&plus;&space;C_L)^2" title="g_{mcrit} = 4*ESR*(2\pi F)^2*(C_0 + C_L)^2" /></a>

Où :

- <a href="https://www.codecogs.com/eqnedit.php?latex=\textrm{ESR}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\textrm{ESR}" title="\textrm{ESR}" /></a> = *Equivalent Series Resistor* : la résistance série équivalente du quartz (donnée par le fabriquant, elle dépend de la fréquence de fonctionnement).
- <a href="https://www.codecogs.com/eqnedit.php?latex=\textrm{F}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\textrm{F}" title="\textrm{F}" /></a> = Fréquence de fonctionnement du quartz (donnée par le fabriquant).
- <a href="https://www.codecogs.com/eqnedit.php?latex=C_0" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_0" title="C_0" /></a> = *Shunt capacitance* : c'est la valeur de la capacité résultante des électrodes du quartz (donnée par le fabriquant).
- <a href="https://www.codecogs.com/eqnedit.php?latex=C_L" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_L" title="C_L" /></a> = *Load capacitance* (donnée par le fabriquant)

La valeur de <a href="https://www.codecogs.com/eqnedit.php?latex=g_m" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_m" title="g_m" /></a> se trouve dans la datasheet du microcontrôleur.

Si la marge de gain calculée est bien supérieure à 5, on peut passer à l'étape suivante. Sinon, il faut choisir un autre quartz avec un <a href="https://www.codecogs.com/eqnedit.php?latex=g_m" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_m" title="g_m" /></a> plus petit.

**2. Choix des condensateurs externes <a href="https://www.codecogs.com/eqnedit.php?latex=C_{L1}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L1}" title="C_{L1}" /></a> et <a href="https://www.codecogs.com/eqnedit.php?latex=C_{L2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L2}" title="C_{L2}" /></a>**

On choisit les condensateurs de manière à respecter la relation :

<a href="https://www.codecogs.com/eqnedit.php?latex=C_L-C_S&space;=&space;\frac{C_{L1}*C_{L2}}{C_{L1}&plus;C_{L2}]}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_L-C_S&space;=&space;\frac{C_{L1}*C_{L2}}{C_{L1}&plus;C_{L2}]}" title="C_L-C_S = \frac{C_{L1}*C_{L2}}{C_{L1}+C_{L2}]}" /></a>

Si on prend <a href="https://www.codecogs.com/eqnedit.php?latex=C_{L1}=C_{L2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L1}=C_{L2}" title="C_{L1}=C_{L2}" /></a>, on peut choisir <a href="https://www.codecogs.com/eqnedit.php?latex=C_{L1}=C_{L2}=2(C_L-C_S)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L1}=C_{L2}=2(C_L-C_S)" title="C_{L1}=C_{L2}=2(C_L-C_S)" /></a>.

**3. Choix d'une résistance externe <a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}" title="R_{Ext}" /></a>**

Le quartz ne peut dissiper qu'une certaine puissance maximale donnée par le fabriquant : c'est le *Drive Level* du cristal. Si jamais la puissance dissipée par le quartz dépasse cette valeur, celui-ci peut être endommagé et griller.

Pour éviter cela, on peut choisir d'ajouter une résistance externe qui va dissiper la puissance en trop. pour savoir si on a besoin de cette résistance, il y a 2 manières de procéder :

- **Méthode 1 :** Mesurer le courant <a href="https://www.codecogs.com/eqnedit.php?latex=I_Q" target="_blank"><img src="https://latex.codecogs.com/gif.latex?I_Q" title="I_Q" /></a> qui traverse le quartz pendant son fonctionnement à l'aide d'une sonde et d'un oscilloscope. On obtient ensuite le courant maximal admissible (en valeur pic-à-pic) par la formule :

	<a href="https://www.codecogs.com/eqnedit.php?latex=I_{Qmax_{pp}}&space;=&space;2\sqrt{\frac{2D_L}{ESR}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?I_{Qmax_{pp}}&space;=&space;2\sqrt{\frac{2D_L}{ESR}}" title="I_{Qmax_{pp}} = 2\sqrt{\frac{2D_L}{ESR}}" /></a>

	Si le courant mesuré est plus important, il faut ajouter <a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}" title="R_{Ext}" /></a>. Sinon, on a trouvé un quartz qui convient bravo !

- **Méthode 2 :** Mesurer la tension aux bornes de <a href="https://www.codecogs.com/eqnedit.php?latex=C_{L1}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L1}" title="C_{L1}" /></a> et en déduire le courant qui travers le quartz. Attention pour cette méthode il faut utiliser une sonde qui a une capacité en entrée inférieure à 1 pF. Le *Drive Level* est alors donné par la formule :

	<a href="https://www.codecogs.com/eqnedit.php?latex=D_L&space;=&space;\frac{ESR*(\pi*F*C_{tot})^2)*V_{pp}^2}{2}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?D_L&space;=&space;\frac{ESR*(\pi*F*C_{tot})^2)*V_{pp}^2}{2}" title="D_L = \frac{ESR*(\pi*F*C_{tot})^2)*V_{pp}^2}{2}" /></a>

	Où <a href="https://www.codecogs.com/eqnedit.php?latex=C_{tot}&space;=&space;C_{L1}&plus;\frac{{C_S}}{2}&plus;C_{sonde}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{tot}&space;=&space;C_{L1}&plus;\frac{{C_S}}{2}&plus;C_{sonde}" title="C_{tot} = C_{L1}+\frac{{C_S}}{2}+C_{sonde}" /></a> et <a href="https://www.codecogs.com/eqnedit.php?latex=V_{pp}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?V_{pp}" title="V_{pp}" /></a> est la valeur de tension pic-à-pic mesurée à l'oscilloscope.

	Si le *Drive Level* calculé est supérieure à celui donné par le fabriquant, il faut ajouter <a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}" title="R_{Ext}" /></a>. Sinon, on a trouvé un quartz qui convient bravo !

Calcul de <a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}" title="R_{Ext}" /></a> : 

<a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}&space;=&space;\frac{1}{2\pi&space;FC_{L2}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}&space;=&space;\frac{1}{2\pi&space;FC_{L2}}" title="R_{Ext} = \frac{1}{2\pi FC_{L2}}" /></a>

**ATTENTION :** si on a ajouté <a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}" title="R_{Ext}" /></a> il faut recalculer les valeurs de marges de gain en la prenant en compte :

<a href="https://www.codecogs.com/eqnedit.php?latex=g_{mcrit}&space;=&space;4*(ESR&plus;R_{Ext})*(2\pi&space;F)^2*(C_0&plus;C_L)^2" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_{mcrit}&space;=&space;4*(ESR&plus;R_{Ext})*(2\pi&space;F)^2*(C_0&plus;C_L)^2" title="g_{mcrit} = 4*(ESR+R_{Ext})*(2\pi F)^2*(C_0+C_L)^2" /></a>

Vérifier que la marge de gain est toujours supérieure à 5. Si ce n'est pas le cas, il faut choisir un autre quartz. Sinon, on a trouvé un quartz qui convient bravo !

**Exemple de calcul :** Si on veut associer un quartz à 8 MHZ au microcontrôleur [STM32F103C8T6](/datasheets/stm32f103/STM32F103x8.pdf). On trouve un quartz qui a la fréquence de travaille demandée sur un site de confiance : [celui-ci](https://fr.farnell.com/fox-electronics/foxsdlf-080-20/crystal-8-0mhz-20pf-smd/dp/2063972) par exemple ([datasheet](datasheets/quartz/Quartz_8Mhz.pdf )).

D'après les 2 datasheets, les valeurs dont on a besoin pour les calculs sont les suivantes :

<a href="https://www.codecogs.com/eqnedit.php?latex=g_m&space;=&space;25\,mA/V\\&space;\indent&space;F&space;=&space;8\,&space;MHz\\&space;\indent&space;C_0&space;=&space;7\,&space;pF\\&space;\indent&space;ESR&space;=&space;80&space;\,\Omega&space;\\&space;\indent&space;C_L&space;=&space;20&space;pF\\" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_m&space;=&space;25\,mA/V\\&space;\indent&space;F&space;=&space;8\,&space;MHz\\&space;\indent&space;C_0&space;=&space;7\,&space;pF\\&space;\indent&space;ESR&space;=&space;80&space;\,\Omega&space;\\&space;\indent&space;C_L&space;=&space;20&space;pF\\" title="g_m = 25\,mA/V\\ \indent F = 8\, MHz\\ \indent C_0 = 7\, pF\\ \indent ESR = 80 \,\Omega \\ \indent C_L = 20 pF\\" /></a>

On peut donc calculer notre marge de gain : 

<a href="https://www.codecogs.com/eqnedit.php?latex=g_{mcrit}&space;=&space;5.894.10^{-4}&space;\,A/V" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_{mcrit}&space;=&space;5.894.10^{-4}&space;\,A/V" title="g_{mcrit} = 5.894.10^{-4} \,A/V" /></a> donc <a href="https://www.codecogs.com/eqnedit.php?latex=Gain_{margin}&space;=&space;\frac{25}{0.5894}&space;=&space;42.4&space;>>&space;5" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Gain_{margin}&space;=&space;\frac{25}{0.5894}&space;=&space;42.4&space;>>&space;5" title="Gain_{margin} = \frac{25}{0.5894} = 42.4 >> 5" /></a>

Cette valeur de marge de gain étant largement suffisante, on peut calculer les valeurs de nos condensateurs :

<a href="https://www.codecogs.com/eqnedit.php?latex=C_{L1}=C_{L2}=2(20-5)=30\,&space;pF" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_{L1}=C_{L2}=2(20-5)=30\,&space;pF" title="C_{L1}=C_{L2}=2(20-5)=30\, pF" /></a>

Si jamais on devait ajouter une résistance externe, il faudrait que sa valeur soit de :

<a href="https://www.codecogs.com/eqnedit.php?latex=R_{Ext}&space;=&space;\frac{1}{2\pi&space;*8.10^6*30.10^{-12}}=663&space;\,\Omega" target="_blank"><img src="https://latex.codecogs.com/gif.latex?R_{Ext}&space;=&space;\frac{1}{2\pi&space;*8.10^6*30.10^{-12}}=663&space;\,\Omega" title="R_{Ext} = \frac{1}{2\pi *8.10^6*30.10^{-12}}=663 \,\Omega" /></a>

On aurait alors une marge de gain de 5 : il faudrait donc choisir un autre quartz ayant un ESR plus faible ou bien un <a href="https://www.codecogs.com/eqnedit.php?latex=C_L" target="_blank"><img src="https://latex.codecogs.com/gif.latex?C_L" title="C_L" /></a> plus petit.


Pour plus de précision, voir le [guide du choix d'un quartz fourni par ST](/datasheets/quartz/Oscillator_choice_guide).

