# Module des servos

## Objectif

L'électronique doit pouvoir interprêter des ordres de mouvement des servomoteurs lancés par l'info.
Le servomoteur doit pouvoir être controllé en vitesse et position.
On veut également pouvoir changer la couleur affichée par le servo, et avoir un retour sur la réussite
du mouvement demandé.

## Informations partagées entre info et élec

***<!> Attention, les champs ci-dessous sont susceptibles d'être modifiés***

|      Nom      | Type | Droits élec |  Droits info  | Commentaires                               |
|:-------------:|:----:|:-----------:|:-------------:|--------------------------------------------|
|      id       |  u8  |      -      |       -       | id du servo concerné                       |
|   position    |  u16 |      R      |       W       | position du servo                          |
|    command    |  u16 |      R      |       W       | position / vitesse demandée (dépend de command_type) |
| command_type  | bool |      R      |       W       | 0 pour position, 1 pour vitesse            |
| blocking_mode | bool |      R      |       W       | ?                                          |
|     color     |  str |      R      |       W       | couleur que doit afficher le servo         |
|    blocked    | bool |      W      |       R       | vrai si servo bloqué mécaniquement         |

---

## Format condensé d'une trame
