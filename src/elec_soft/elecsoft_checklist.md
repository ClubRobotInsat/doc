# Elecsoft Checklist 1o1 😢

Liste des choses à vérifier si ton circuit ne fonctionne pas et/ou il fait des choses incompréhensibles:

- T’as une alim à coté de toi ?
- Cette alim est branché au circuit ?
- Ton microcontrôleur ou autres sont bien alimentées par la ligne d’alim ?
- Toutes les masses sont reliées entre elles et communes dans tout le circuit ( oscilo inclus ) ?
- Ton alim est au bon voltage?
- Ton alim est allumée ( btn on ) et il y a du courant ( 0.0A veut dire que elle alimente rien )?
- La multiprise à laquelle l’alim est branché est allumée?
- Ton oscilo est en DC ?
- TOUS les câbles de ton circuit sont connectées correctement ?
- Si tu touches un câble sans le déconnecter ça fait qqch ? T’as un faux contact
- Ton microcontrôleur est assez chaud pour l’utiliser comme poêle ?  Il est grille change-le
- Teste ta breadboard, si'il ya beaucoup de résistance entre les deux extremités elle est pas bonne et ça peut-être la 
cause de ton problèmme. Teste aussi si toutes les lignes de la breadboard sont bien connectés i.e que la breadboard fait son boulout.
- Si t’est arrivée jusqu’à ici c’est peut-être pas ( on en est jamais sûrs ) un problème d’élec, tu peux soit revenir au début de cette liste soit passer à debug des problèmes de code mais commence à réfléchir que c’est peut-être toi le problème.
- si ton can marche pas vérifie qu’il y a bien au moins 2 dispositfis sur le bus à l’écoute