import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

// Écouteur d'événement
const messageListener = (message) => {
  console.log(`Message reçu : ${message}`);
};
eventEmitter.on("message", messageListener);

eventEmitter.once("message", (message) => {
  console.log(`Message reçu (une seule fois) : ${message}`);
});

// Émission d'un événement
eventEmitter.emit("message", "Bonjour, monde !");
eventEmitter.emit("message", "Bonjour, utilisateur !");

// Suppression de l'écouteur
eventEmitter.off("message", messageListener);
// Tentative d'émission après suppression de l'écouteur
eventEmitter.emit("message", "Ce message ne sera pas reçu.");


class AuthService extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }

  register(user) {
    this.users.push(user);
    this.emit("userRegistered", user);
  }
}

const authService = new AuthService();
authService.on("userRegistered", (user) => {
  console.log(`Nouvel utilisateur enregistré : ${user.name}`);
});
authService.register({ name: "Alice" });
authService.register({ name: "Bob" });
