# Pour flasher une carte

Commences par câbles un ST-LINK sur la carte. Sur l'image c'est une blue-pill, mais l'ordre des pins et le câblage est le même !

![test](../../images/elec_soft/F103C8T6_w_ST-Link.jpg)
Une fois câblé, lances OpenOCD à la racine du projet :

```
sudo openocd -f black_pill.cfg
```

Si le ST-LINK a été bien câblé, alors OpenOCD devrait rester ouvert en tache de fond.

Une fois openocd en tâche de fond, il suffit de lancer dans un terminal le script `debug.sh` qui se trouve dans le dossier du projet pour flasher la carte.

## Precautions pour le deboggage

- Ne pas poser de cartes non vernies directement sur l'armature métallique du robot, cela peut créer des court-circuits dans la carte et l'endommager !
