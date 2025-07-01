// Exercice : Jeu du plus ou moins
// 1 - Ecrire une fonction qui génère un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2 - Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre
// est plus grand, plus petit ou trouvé
// 3 - Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
// 4 - Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5 - Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)
// Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin.
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log(`Vos essais précédents : ${essais.join(", ")}`);
  }

  rl.question("Devinez un nombre entre 0 et 100 : ", (answer) => {
    console.log(`Vous avez saisi : ${answer}`);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.error("Erreur : Ce n'est pas un nombre valide !");
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log("C'est plus grand !");
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log("C'est plus petit !");
      jouer();
    } else {
      console.log("Bravo, vous avez trouvé le nombre !");
      rl.close(); // Fermer l'interface readline
    }
  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// Pile d'appels
// ^
// |                                [question]           [question]
// |[question]                       [jouer  ]           [jouer  ]
// |[jouer   ] ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ ⟳ [=>      ] ⟳ ⟳ ⟳ ⟳  [=>      ] ⟳ ⟳ ⟳ ⟳  
// +--------------------------------12{ENTREE}-----------50{ENTREE}----> temps
// Sortie :
