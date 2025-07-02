// function (exports, require, module, __filename, __dirname) {

// si le fichier est local, il faut utiliser ./ ou ../ pour indiquer le chemin relatif
// l'extension .js est optionnelle, mais recommandée pour la clarté (peu répandu)
// const { sum, multiply } = require('./my-maths.js');
const MyMath = require("./my-maths.js");
const greet = require("./greet.js");
const chalk = require("chalk");

console.log(MyMath.sum(2, 3)); // 5
console.log(MyMath.multiply(2, 3)); // 6
console.log(chalk.blue.bold.underline(greet("Alice"))); // Hello, Alice!

// }
