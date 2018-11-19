# Communication des modules avec l'informatique

L'informatique et l'électronique doivent se mettre d'accord sur les trames envoyées pour communiquer.

Les documents de ce dossier ressencent les spécifications des trames parsées par chaque module.

Ces trames d'information sont encapsulées dans des headers de transport, construites selon :
* **communication UDP :** Un octet représente l'ID du module, puis l'ensemble de la trame est rajouté à la suite. Cet ensemble est enfin envoyé dans un datagramme UDP sur la bonne @IP.
* **communication série :** Un header est envoyée avant la trame pour savoir quand commence le message et à qui on s'adresse. Il est définit par : `0xAC.DC.AB.BA <size> <ID> <data...>` avec
	* `<size> : u8 := 1 + sizeof(data)` (taille de l'`ID` et de la trame véhiculée)
	* `<ID> : u8 := idof(module_sender_of(data))`
	* `<data...> : u8* := frame sent`.

## Spécifications des modules

|                       Module                       | ID |
|:--------------------------------------------------:|:--:|
| [Déplacement](/elec_soft/modules/deplacement.html) |  ? |
|      [Servos](/elec_soft/modules/servos.html)      |  ? |
