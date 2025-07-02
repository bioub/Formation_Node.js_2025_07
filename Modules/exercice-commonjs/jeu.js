// importer la fonction getRandomInt depuis le fichier random.js
// exporter la classe Jeu
const readline = require("readline");
const Random = require("./random.js");

class Jeu {
  constructor(options = {}) {
    this.min = options.min ?? 0;
    this.max = options.max ?? 100;

    this.entierAlea = Random.getRandomInt(this.min, this.max);
    this.essais = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vos essais précédents : ${this.essais.join(", ")}`);
    }

    this.rl.question(`Devinez un nombre entre ${this.min} et ${this.max} : `, (answer) => {
      console.log(`Vous avez saisi : ${answer}`);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.error("Erreur : Ce n'est pas un nombre valide !");
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log("C'est plus grand !");
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log("C'est plus petit !");
        this.jouer();
      } else {
        console.log("Bravo, vous avez trouvé le nombre !");
        this.rl.close(); // Fermer l'interface readline
      }
    });
  }
}

module.exports = Jeu;
