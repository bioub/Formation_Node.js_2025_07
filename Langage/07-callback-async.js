setTimeout(() => console.log('A'), 1000);
setTimeout(() => console.log('B'), 500);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);

console.log('E');


// Pile d'appels
// ^
// |
// |
// |                          [lg]                      [lg][lg]               [lg]
// |[st][st][st][st][lg] ⟳    [=>] ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ [=>][=>]⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ [=>]
// +--------0-----------------3ms------------------------500ms-------------------> temps
// Sortie :          E        C                          B   D                 A

// File d'attente (0ms) : taskC
// File d'attente (3ms) :
// File d'attente (499ms) : taskB
// File d'attente (500ms) : taskD
// File d'attente (501ms) :
// File d'attente (999ms) : taskA
// File d'attente (1000ms) :

// Boucle d'événements
// coté Navigateur/Node.js (C++)
// do {
//   traite la pile d'appels
// } while (callbacks.length > 0);
