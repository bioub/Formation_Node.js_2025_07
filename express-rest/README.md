# Exercices

## Mongoose

Modifier `models/user.js` en créant un Schema mongoose avec `username` et `password` (les 2 obligatoires et de type `string`)

Insérer avec `mongosh` ou `Compass` des nouveaux utilisateurs (le mot de passe est en clair à ce stade).

Modifier la fonction `login` dans `models/user.js` de sorte à ce qu'elle utilise le `findOne` de Mongoose

Créer ensuite une nouvelle route `POST /api/users` pour créer de nouveaux utilisateurs.

## Tests

Dans le projet `Modules/demos-esm` tester la fonction `greet`

Dans le projet `express-rest` :

- Vérifier que authenticate appelle `next` si le token est valide.
- Vérifier que la route `GET /api/todos/1` fonctionne

## Pour finir sur eval.orsys.fr

- vérifier les feuilles de présence
- remplir la 2nde partie de l'auto-positionnement
- remplir le questionnaire de satisfaction (Evaluer cette session)
