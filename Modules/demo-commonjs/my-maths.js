// function (exports, require, module, __filename, __dirname) {

// console.log(exports); // {}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

exports.sum = sum;
exports.multiply = multiply;

// console.log(exports); // { sum: [Function: sum], multiply: [Function: multiply] }

// }
