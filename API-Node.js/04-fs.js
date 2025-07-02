import fs from 'node:fs';
import path from 'node:path';

// Opérations de base sur les fichiers, répertoires et liens symboliques, des droits

const packageJsonPath = path.resolve(import.meta.dirname, 'package.json');
const packageJsonCopyPath = path.resolve(import.meta.dirname, 'package.copy.json');

// Dans fs, chaque fonction existe en version synchrone et asynchrone
// La version asynchrone est recommandée pour ne pas bloquer l'exécution du programme

// Lire un fichier de façon synchrone
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
console.log('Contenu du package.json (synchrone) :', packageJsonContent);

// Ecrire un fichier de façon synchrone
fs.writeFileSync(packageJsonCopyPath, packageJsonContent);
console.log('Fichier copié (synchrone) :', packageJsonCopyPath);

// Lire un fichier de façon asynchrone
fs.readFile(packageJsonPath, 'utf-8', (err, packageJsonContent) => {
  console.log('Contenu du package.json (asynchrone) :', packageJsonContent);
});

// Ecrire un fichier de façon asynchrone
fs.writeFile(packageJsonCopyPath, packageJsonContent, (err) => {
  console.log('Fichier copié (asynchrone) :', packageJsonCopyPath);
});

// Quelques options de readFile :
fs.readFile(packageJsonPath, { encoding: 'utf-8', flag: 'r' }, (err, packageJsonContent) => {
  console.log('Contenu du package.json avec options (asynchrone) :', packageJsonContent);
});

// Sans options, readFile returne un Buffer (tableau d'octets)
fs.readFile(packageJsonPath, (err, packageJsonBuffer) => {
  console.log('Contenu du package.json en Buffer (asynchrone) :', packageJsonBuffer.toString('utf-8'));
});

// Quelques autres fonctions utiles
// fs.appendFile pour ajouter du contenu à la fin d'un fichier
// fs.unlink pour supprimer un fichier
// fs.rename pour renommer un fichier
// fs.copyFile pour copier un fichier
// fs.stat pour obtenir des informations sur un fichier (taille, date de modification, etc
// fs.access pour vérifier si un fichier existe et si on a les droits d'accès
// fs.rm pour supprimer un fichier ou un répertoire (avec l'option recursive pour les répertoires)
// fs.mkdir pour créer un répertoire
// fs.readdir pour lister les fichiers d'un répertoire
// fs.watch pour surveiller les changements dans un fichier ou un répertoire
// fs.symlink pour créer un lien symbolique
// fs.chmod pour changer les droits d'accès d'un fichier
