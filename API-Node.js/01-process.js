import process from 'node:process';

// argv, les arguments passés en ligne de commande
// si on existe ce programme avec la commande `node 01-process.js --name=Romain --age=30`
/*
[
  '/Users/romain/Library/Application Support/fnm/node-versions/v20.14.0/installation/bin/node',
  '/Users/romain/Desktop/Formation/API-Node.js/01-process.js',
  '--name=Romain',
  '--age=30'
]
*/
// Argv est rarement utilisé directement, on utilise plutôt un module open source comme `yargs`, `commander`, `minimist`, etc.
console.log(process.argv);

// env, les variables d'environnement
// tout à l'heure on vu NODE_ENV=production
// qui permet à npm de savoir si on est en mode production ou développement (et donc de charger les bonnes dépendances)
// dot-env
console.log(process.env.NODE_ENV ?? 'development'); // 'production' ou 'development'

// cwd, le répertoire de travail courant
// c'est le répertoire dans lequel on a lancé le programme
console.log(process.cwd()); // '/Users/romain/Desktop/Formation/API-Node.js'

// IMPORTANT : quand on charge en fichier en relatif, c'est par rapport au cwd et pas au fichier courant
// une première astuce serait de modifier le cwd pour qu'il soit le même que le fichier courant
// si on est en CommonJS :
// process.chdir(__dirname);
// si on est en ESM :
process.chdir(import.meta.dirname); // revient à faire un `cd /Users/romain/Desktop/Formation/API-Node.js` dans le terminal

// stats
console.log(process.memoryUsage()); // { rss: 12345678, heapTotal: 12345678, heapUsed: 12345678, external: 12345678 }
console.log(process.uptime()); // le temps d'exécution du programme en secondes
console.log(process.cpuUsage()); // { user: 12345678, system: 12345678 } le temps CPU utilisé par le programme en microsecondes

// info sur la plateforme
console.log(process.platform); // 'darwin', 'linux', 'win32', etc.
console.log(process.arch); // 'x64', 'arm64', etc.
// version de Node.js
console.log(process.version); // 'v20.14.0'
// version de V8 (le moteur JavaScript de Node.js)
console.log(process.versions.v8); // '10.4.0' (par exemple

// exit (kill le programme)
// process.exit(0); // 0 pour indiquer que tout s'est bien passé
// process.exit(1); // 1 pour indiquer qu'il y a eu une erreur

// IO
// process.stdin, process.stdout, process.stderr

// Events :
process.on('uncaughtException', (error) => {
  console.error('Une erreur non gérée est survenue :', error);
  process.exit(1); // on quitte le programme avec un code d'erreur
});
