// Exercice 1
// Créer un namespace object Random
// qui contient les 4 fonctions suivantes,
// de façon à pouvoir les appeler comme ceci :
// Random.getRandomInt(0, 100);
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require("readline");

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

// Exercice 2
// Modifier le code ci-dessus de sorte à pouvoir créer la partie
// en version objet :
// Dans le constructeur Jeu, on va créer les propriétés suivantes :
// - entierAlea : le nombre aléatoire à deviner
// - essais : un tableau vide pour stocker les essais de l'utilisateur
// - rl : l'interface readline
const game = new Jeu({ min: 20, max: 50 });
game.jouer();

// Exercice 3
// Passer un objet options au constructeur Jeu
// (comme readline.createInterface)
// de sorte à pouvoir faire les appels suivants :
// const game = new Jeu({ min: 0, max: 100 });
// const game = new Jeu({ min: 10 });
// const game = new Jeu({ max: 10 });
// const game = new Jeu({ });
// const game = new Jeu();
// (Prévoir des valeurs par défaut pour min et max si elles ne sont pas fournies dans l'objet options)
