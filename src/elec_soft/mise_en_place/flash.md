# Pour flasher une carte

Il faut d'abord lancer dans un terminal (en tâche de fond) openocd :

```bash
sudo openocd -f stlink-v2-1.cfg -f stm32.cfg
```

Une fois openocd en tâche de fond, il suffit de lancer dans un terminal le script `debug.sh` dans le dossier du projet.
