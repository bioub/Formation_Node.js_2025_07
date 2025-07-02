import path from "node:path";

// Opérations sur les chemins de fichiers
// Combiner avec le CWD
console.log('Chemin absolu :', path.resolve('src', 'js', 'index.js'));
console.log('Chemin relatif :', path.join('src', 'js', 'index.js'));

// Obtenir le nom du fichier
console.log('Nom du fichier :', path.basename('/Users/romain/Desktop/Formation/API-Node.js/src/js/index.js')); // 'index.js'
// Obtenir le nom du répertoire
console.log('Nom du répertoire :', path.dirname('/Users/romain/Desktop/Formation/API-Node.js/src/js/index.js')); // '/Users/romain/Desktop/Formation/API-
// Obtention de l'extension du fichier
console.log('Extension du fichier :', path.extname('/Users/romain/Desktop/Formation/API-Node.js/src/js/index.js')); // '.js'
// Parser un chemin de fichier
const parsedPath = path.parse('/Users/romain/Desktop/Formation/API-Node.js/src/js/index.js');
console.log('Chemin parsé :', parsedPath);


// Pour la suite, quand on va faire référence à un fichier, on va utiliser `path.resolve` combiné avec `__dirname` ou `import.meta.dirname`
// Pour que le fichier soit toujours trouvé, peu importe le répertoire de travail courant (cwd) du programme

// Exemple de chemin absolu (resolve ou join)
const absolutePath = path.resolve(import.meta.dirname, 'src', 'js', 'index.js');
console.log('Chemin absolu avec import.meta.dirname :', absolutePath);
