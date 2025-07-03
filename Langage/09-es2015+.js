// REST
// Conversion de syntaxe ou :
// - une liste de valeur (ici 1, 2, 3, 4, 5)
// devient
// - un tableau de valeur (ici [1, 2, 3, 4, 5])
function afficherNombres(...nombres) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

afficherNombres(1, 2, 3, 4, 5);

// SPREAD
// Conversion de syntaxe ou :
// - un tableau de valeur (ici [1, 2, 3, 4, 5])
// devient
// - une liste de valeur (ici 1, 2, 3, 4, 5)
const nombres = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(...nombres)); // 15

// Destructuration
// const premier = nombres[0];
// const second = nombres[1];
// const troisieme = nombres[2];

//    [1      , 2     , 3        , 4     , 5     ]
const [premier, second = 2, troisieme, ...autres] = nombres;
console.log(premier); // 1
console.log(second); // 2
console.log(troisieme); // 3
console.log(autres); // [4, 5]

// Cloner un tableau
const original = [1, 2, 3];
const clone = [...original];

// Tout ce qu'on a fait jusqu'ici peut être fait avec des objets aussi depuis ES2018
const personne = {
  nom: "Alice",
  age: 30,
  ville: "Paris",
  codePostal: "75000",
  pays: "France",
};

//       { nom: "Alice", age: 30  }
// const { nom: prenom , age: age = 0 } = personne;

// Si la clé et la variable sont les mêmes, on peut faire :
// const { nom: prenom, age = 0 } = personne;

// console.log(prenom); // Alice
// console.log(age); // 30

const { nom, age, ...adresse } = personne;
console.log(nom); // Alice
console.log(age); // 30
console.log(adresse); // { ville: 'Paris', codePostal: '75000', pays: 'France' }

// Cloner un objet
const originalPersonne = { ...personne };
console.log(originalPersonne);
