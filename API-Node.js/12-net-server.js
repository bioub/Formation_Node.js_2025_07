import { createServer } from "node:net";
import { Duplex, Readable, Writable } from "node:stream";

const server = createServer((socket) => {
  console.log("Nouvelle connexion établie");
  console.log(socket instanceof Readable); // true
  console.log(socket instanceof Writable); // true
  console.log(socket instanceof Duplex); // true
  socket.pipe(process.stdout); // Redirige les données reçues vers la sortie standard
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-Type: text/plain\r\n');
  socket.write('Connection: close\r\n');
  socket.write('\r\n');
  socket.end('Bienvenue sur le serveur !\n');
});

// ou passer le connectionListener directement à createServer
// server.on('connection', (socket) => {
//   console.log('Nouvelle connexion établie');
// });

server.on("error", (err) => {
  console.error("Erreur du serveur :", err);
});

// si on appelle server.close()
// server.on("close", () => {
//   console.log("Le serveur est fermé");
// });

// ou passer le listeningListener directement à listen
// server.on('listening', () => {
//   console.log('Le serveur écoute sur le port 3000');
// });

console.log("Démarrage du serveur...");
server.listen(3000, () => {
  console.log("Le serveur écoute sur le port 3000");
});
