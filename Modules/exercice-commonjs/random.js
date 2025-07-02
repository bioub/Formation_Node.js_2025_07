// Exporter les 4 fonctions :

exports.getRandom = function getRandom() {
  return Math.random();
}

exports.getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

exports.getRandomInt = function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

exports.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
