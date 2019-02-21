# Pour flasher une carte

Il faut d'abord lancer dans un terminal (en tâche de fond) openocd :

```bash
sudo openocd -f stlink-v2-1.cfg -f stm32.cfg
```

Une fois openocd en tâche de fond, il suffit de lancer dans un terminal le script `debug.sh` dans le dossier du projet.

## Precautions pour le deboggage

- Ne pas poser de cartes non vernies directement sur l'armature métallique du robot, cela peut créer des court-circuits dans la carte et l'endommager !
