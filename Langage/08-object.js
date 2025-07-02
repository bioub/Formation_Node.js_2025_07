// En JavaScript on manipule très souvent des objets prédéfinis, comme les objets `Date`, `Math`, ou encore `Array`.
// Standard Built-in Objects :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Exemple :
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(1, 2, 3)); // 3
console.log(Date.now()); // 1616161616161 (la date actuelle en millisecondes depuis le 1er janvier 1970)
console.log(Array.from("abc")); // ['a', 'b', 'c']

// En plus de ces objets prédéfinis, on peut créer ses propres objets en utilisant des littéraux d'objet ou des constructeurs.

// Exemple de syntaxe littérale (tableau, objet, string) :
const names = ["Alice", "Bob", "Charlie"];
console.log(names.length); // 3

// Un object est une collection de paires clé-valeur, la valeur peut etre n'importe quel type de donnée (dont les fonctions).
// Dans le jargon objet, les "valeurs" sont appelées "propriétés" et les "fonctions" sont appelées "méthodes".
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(1, 2, 3)); // 3

// Cette collection de clés et de valeurs est extensible
// On peut ajouter de nouvelles propriétés et méthodes à un objet existant.
console.log(Math.customValue); // undefined
Math.customValue = 42;
console.log(Math.customValue); // 42

console.log(Math.sum); // undefined
Math.sum = function (a, b) {
  return a + b;
};
console.log(Math.sum(1, 2)); // 3
Math.sum = function (a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum(1, 2)); // 3
delete Math.customValue;
console.log(Math.customValue); // undefined
delete Math.sum;
console.log(Math.sum); // undefined

// ATTENTION, c'est une mauvaise pratique de modifier les objets prédéfinis.
// Il est préférable de créer ses propres objets pour
// ajouter des fonctionnalités supplémentaires.

// Pour créer un objet il existe 2 façons principales :
// 1. En utilisant la syntaxe littérale d'objet
// 2. En utilisant un constructeur d'objet

// 1 - Syntaxe littérale d'objet
// Cas d'utilisations :
// - Les objets qui ne sont créées qu'une seule fois (de la config, des namespaces objects, etc.)
// - Des objets créés plusieurs fois mais sans méthodes (par exemple, des objets qui représentent des données)
const person1 = {
  name: "Alice",
  age: 30,
  // greet: function () {
  //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  // },
};

const person2 = {
  name: "Bob",
  age: 25,
  // greet: function () {
  //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  // },
};

// Mauvaise pratique ici, on a créé 2 méthodes greet identiques pour 2 objets différents.

// Exemple de config
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.close();

function createInterface(options) {
  // ?? Nullish coalescing operator (utilisé pour donner une valeur par défaut si la valeur est null ou undefined)
  const input = options.input ?? process.stdin;
  const output = options.output ?? process.stdout;
  const terminal = options.terminal ?? false;
  const completer = options.completer ?? (() => []);
  const prompt = options.prompt ?? '> ';
  // ....
}

// Namespaces objects
const MyMath = {
  sum: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

// Utilisation de l'objet MyMath
console.log(MyMath.sum(1, 2)); // 3
console.log(MyMath.multiply(2, 3)); // 6


// 2 - Constructeur d'objet
// Cas d'utilisations :
// - Les objets qui sont créés plusieurs fois avec des méthodes
// - Pouvoir identifier le type d'objet

// function Person(name, age) {
//   // une pseudo-variable est une variable qui est créé automatiquement à l'appel
//   // d'une fonction.
//   // En JavaScript il en existe 4 : arguments, this, super et new.target
//   // console.log(arguments); // [Arguments] { '0': 'Charlie', '1': 35 }
//   // console.log(this); // Person { }
//   // console.log(new.target); // [Function: Person]
//   this.name = name;
//   this.age = age;
//   // Si greet est ajouté ici, on aura autant de fonction greet que d'instances de Person créées.
//   // this.greet = function () {
//   //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   // };
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// Depuis ES2015, le mot-clé `class` permet de masquer la complexité de la création d'objets en utilisant des constructeurs et le prototype.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person3 = new Person("Charlie", 35);

console.log(typeof Person); // "function"
console.log(typeof person3); // "object"

console.log(person3.name); // "Charlie"
console.log(person3.age); // 35

console.log(person3 instanceof Person); // true

// Person.prototype.greet = function () {
//   console.log(`HELLO, my name is ${this.name} and I am ${this.age} years old.`);
// };

// delete Person.prototype.greet; // Supprimer la méthode greet du prototype
person3.greet(); // "Hello, my name is Charlie and I am 35 years old."
