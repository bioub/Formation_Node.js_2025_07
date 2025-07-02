// si le fichier est local, il faut utiliser ./ ou ../ pour indiquer le chemin relatif
// l'extension .js est obligatoire pour les modules ESM
// const { sum, multiply } = require('./my-maths.js');
import { sum, multiply } from './my-maths.js';
import greet from './greet.js';

console.log(sum(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(greet('Alice')); // Hello, Alice!
