const Jeu = require("./jeu.js");

// Importer la classe Jeu depuis le fichier jeu.js
const game = new Jeu({ min: 20, max: 50 });
game.jouer();
