# Exercices

## Mongoose

Modifier `models/user.js` en créant un Schema mongoose avec `username` et `password` (les 2 obligatoires et de type `string`)

Insérer avec `mongosh` ou `Compass` des nouveaux utilisateurs (le mot de passe est en clair à ce stade).

Modifier la fonction `login` dans `models/user.js` de sorte à ce qu'elle utilise le `findOne` de Mongoose

Créer ensuite une nouvelle route `POST /api/users` pour créer de nouveaux utilisateurs.

