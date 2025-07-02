import fs from 'node:fs/promises';
import path from "node:path";

const packageJsonPath = path.resolve(import.meta.dirname, "package.json");
const packageJsonCopyPath = path.resolve(import.meta.dirname, "package.copy.json");


fs.readFile(packageJsonPath)
  .then((buffer) => {
    // Copier le contenu dans package.copy.json
    return fs.writeFile(packageJsonCopyPath, buffer);
  })
  .then(() => {
    console.log("Fichier copié (asynchrone)");
  })
  .catch((err) => {
    console.error("Erreur lors de la copie du fichier (asynchrone) :", err);
  });
