# Module de déplacement

## Objectif

La partie électronique doit être capable de recvoir des commandes de déplacement pour les exécuter, et également de mettre en oeuvre l'odométrie pour connaître en permanence le triplé `[X, Y, Thêta]`.

## Informations partagées entre info et élec

Les variables partagées peuvent se distinguer en deux grands groupes : les constantes 'simples', et les informations propres à la commande de déplacement.

### Constantes du module

|      Nom      | Type | Droits élec |  Droits info  | Commentaires                               |
|:-------------:|:----:|:-----------:|:-------------:|--------------------------------------------|
|       x       |  u16 |      W      | R, W si reset | en dixième de millimètre                   |
|       y       |  u16 |      W      | R, W si reset | en dixième de millimètre                   |
|     angle     |  u16 |      W      | R, W si reset | en centaine de µradians                    |
|    blocked    | bool |      W      |       R       | vrai si le robot ne peut pas avancer       |
| asserv_on_off | bool |      R      |       W       | vrai si l'asservissement est opérationnel  |
|      led      |  u2  |      R      |       W       | éclairage des LEDs du module (si présents) |
|     reset     | bool |      R      |       W       | si vrai : l'info peut fixer [X, Y, angle]  |

### Commandes informatiques

* Les `command`es peuvent être de différents types possibles. En C, elles sont définies dans une enum :

```c
typedef enum CmdType {
	GO_FORWARD,
	GO_BACKWARD,
	TURN_RELATIVE,
	TURN_ABSOLUTE,
	DO_NOTHING,
	STOP,
} command;
```

* `moving_done: bool` permets d'anoncer à l'informatique que le mouvement demandé est finit. ***TODO: bool pour spécifier que tout est OK ?***
* `counter: u16` permets de compter le nombre les commandes envoyées par l'info. Ça permets d'éviter des ambiguités lors de la perte d'une trame *(stateless communication)* ; l'informatique incrémente cette valeur à chaque nouvelle commande, tandis que l'électronique doit stopper toute commande en cours `N` si elle reçoit une commande `M > N`.
* `args_cmd: u16 / u16` : arguments supplémentaires à la `command`. ***TODO:*** *Leur usage doit être spécifié par type de commande.*

---

## Format condensé d'une trame