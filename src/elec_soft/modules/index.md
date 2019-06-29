# Communication des modules avec l'informatique

L'informatique et l'électronique doivent se mettre d'accord sur les trames envoyées pour communiquer.

Un réseau RJ45 est déployé dans le robot et chaque carte possède sa propre IP en `192.168.0.ID_CARTE` si il s'agit du robot primaire ou en `192.168.1.ID_CARTE` si il s'agit du robot secondaire.

Le PC embarqué possède une adresse au même format (192.168.X.254).

L'informatique s’attend à recevoir les informations de la carte `ID_CARTE` sur le port 5000 + ID_CARTE. Cette même carte écoute sur le port 50 + ID_CARTE.
