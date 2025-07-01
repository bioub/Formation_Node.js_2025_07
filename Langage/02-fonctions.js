// Syntaxe : function declaration
function greet(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
}

["Alice", "Bob", "Charlie"].forEach(greet);

// Syntaxe : anonymous function expression (legacy)
const greet2 = function(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
};

greet2("Diana");

["Alice", "Bob", "Charlie"].forEach(function(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
});

// Syntaxe : named function expression (legacy)
const greet3 = function greet(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
};

greet3("Diana");

["Alice", "Bob", "Charlie"].forEach(function greet(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
});

// Syntaxe : arrow function (ES2015)
const greet4 = (name) => {
  console.log(`Hello, ${name.toUpperCase()}!`);
};

greet4("Diana");

["Alice", "Bob", "Charlie"].forEach((name) => {
  console.log(`Hello, ${name.toUpperCase()}!`);
});
