function greet(name) {
  return `Hello, ${name}!`;
}

// Pour exporter autre chose qu'un objet (ici la fonction greet), on utilise module.exports
module.exports = greet;
