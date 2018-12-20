# Erreurs possibles à la compilation

## Dépendance dupliquée
```
warning: Linking globals named '__INTERRUPTS': symbol multiply defined!
error: failed to load bc of "stm32f103xx.5vzwop8v-cgu.0":
error: aborting due to previous error
error: Could not compile `stm32-black-pill-rust`.
```
Le linker indique qu'il y a des symboles définis plusieurs fois. Ici, il s'agit d'une dépendance présente dans le projet dans plusieurs versions différentes.

Certaines dépendances sont récupérées sur des dépots github qui sont mis à jour régulièrement. Dans ce cas un des dépôts avait mis à jour sa version de `stm32f103xx`, et pas nous.
A la compilation le compilateur linkait avec deux versions de `stm32f103xx` différentes, ce qui provoquait des conflits

Pour résoudre ce genre de problème, il faut vérifier quelles sont les dépendances compilées en plusieurs fois dans `target/thumbv7m-eabi-none/build/`, puis identifier dans le Cargo.lock quelles librairies provoquent le conflit.
