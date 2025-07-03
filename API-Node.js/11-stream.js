// Un stream est une suite d'octets qui va être manipulée en lecture ou écriture.
// Cette suite d'octets peut provenir d'un fichier, d'une requête HTTP, d'une base de données, etc.
// Elle est asynchrone par nature, en lecture on reçoit les octets dans le temps.

import fs from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';

const bigFilePath = path.resolve(import.meta.dirname, 'bigfile.html');
const bigFileCopyPath = path.resolve(import.meta.dirname, 'bigfile.copy.html.zip');

// Lire un fichier en stream
const readStream = fs.createReadStream(bigFilePath);
const writeStream = fs.createWriteStream(bigFileCopyPath);
const transformStream = createGzip(); // Exemple de stream de transformation pour compresser le fichier

readStream.on('open', () => {
  console.log('Stream de lecture ouvert');
});

readStream.on('data', (chunk) => {
  console.log('Octets reçus :', chunk.length);
});

readStream.on('end', () => {
  console.log('Stream de lecture terminé');
});

readStream.on('error', (err) => {
  console.error('Erreur lors de la lecture du stream :', err);
});


// Schématiquement c'est la même qu'un programme dans le terminal
// cat bigfile.html | gzip > bigfile.copy.html.zip
readStream.pipe(transformStream).pipe(writeStream);

// Stream de lecture : Readable
// Stream d'écriture : Writable
// Stream de lecture et écriture : Duplex (par exemple pour une connexion réseau)
// Stream de transformation : Transform (par exemple pour compresser ou décompresser un fichier)
