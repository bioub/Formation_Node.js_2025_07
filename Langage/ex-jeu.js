// Exercice : Jeu du plus ou moins
// 1 - Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2 - Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre
// est plus grand, plus petit ou trouvé
// 3 - Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4 - Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5 - Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question("Devinez un nombre entre 0 et 100 : ", (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    // Trouvé, quitter :
    rl.close();

    // Pas trouvé, reposer la question, c'est à dire revenir à la ligne 17
    jouer();
  });
}

jouer();

// Pile d'appels
// ^
// |                                [question]           [question]
// |[question]                       [jouer  ]           [jouer  ]
// |[jouer   ] ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ [=>      ] ⟳ ⟳ ⟳ ⟳  [=>      ] ⟳ ⟳ ⟳ ⟳  
// +--------------------------------12{ENTREE}-----------50{ENTREE}----> temps
// Sortie :
