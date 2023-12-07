# Moteur pas à pas (MPP)
**Que-ce que c'est un moteur pas à pas? Et pour quoi est-t-il utile?** 

- Un MPP est un moteur électrique, sans balais et à courant continu, qui permet un contrôle précis en [boucle ouverte](https://fr.wikipedia.org/wiki/Circuit_en_boucle_ouverte). Au contraire des moteurs à courant continu, les MPP tournent de manière *discrète* (d'où le nom "pas à pas"), normalement à 200 pas par rotation, donc un rotation de 1.8 degrés par pas. 

- Le principale avantage d'un MPP est la précision

Pour le robot de 2023, on a décidé d'utiliser des moteurs à courant continu pour la base roulante, parce que d'après nos essais, les MPP ne fournissent pas suffisamment de force.  
Néanmoins, les MPP peuvent être utiles dans des futurs applications, d'où le nécessité de ce doc.

## Fonctionnement générale du moteur pas à pas.
[Vous trouvez ici](https://www.tme.eu/fr/news/library-articles/page/41861/Moteur-pas-a-pas-types-et-exemples-dapplications-des-moteurs-pas-a-pas/) un explication détaillé de la fonctionnement d'un MPP.

### Comment contrôler un MPP?
On utilise des microcontrôleurs (STM32) pour contrôler les MPP. Les STM32 permettent d'envoyer un signal précis, mais pas à la puissance requise. Pour résoudre cette problème, un utilise un STM32 pour "gérer" la connexion entre les moteurs et un alimentation à puissance suffisante. Un manière pour faire cela est avec des transistors montées en [pont H](https://www.a-m-c.com/fr/experience/technologies/power-devices/pont-en-h/#).

Pour simplifier l'implémentation de la circuit de contrôle, on a acheté des cartes électroniques qui intègrent un montage en pont H, avec des protections et option de "microstepping".

Le carte que l'on a acheté est: [Pololu MP6500 Stepper Motor Driver Carrier, Digital Current Control](https://www.pololu.com/product/2968). Sur le site vous trouvez toute l'information dont vous avez besoin pour utiliser le driver, et un schéma électronique pour l'implémenter.

Au moment que l'on écrit cette doc (7/12/23), on a 5 cartes dans le club.


