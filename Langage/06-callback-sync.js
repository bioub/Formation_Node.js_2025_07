const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// Paradigme impératif :
// Algorithmique, séquentiel, itératif (boucles, conditions, etc.)
// for (const n of names) {
//   if (n.length > 3) {
//     greet(n);
//   }
// }

// Paradigme fonctionnel :
// Fonctions remplacent les boucles et les conditions
// Les fonctions passées en paramètres sont appelées "callbacks"
// Un callback est une fonction déclarée qu'on appelle pas directement
names
  .filter((name) => name.length > 3)
  .forEach((name) => {
    console.log(`Hello, ${name.toUpperCase()}!`);
  });

console.log('FIN');

// Un callback synchrone est appelée immédiatement
// par la fonction qui l'a reçue en paramètre

// En terme de pile d'appels :


// Pile d'appels
// ^
// |
// |
// |                    [lg][lg][lg]
// |[=>][=>][=>][=>][=>][=>][=>][=>]
// |[filter            ][forEach   ][lg]
// +--------------------------------------------------> temps
// Sortie :            Alice, Charlie, Diana, FIN
