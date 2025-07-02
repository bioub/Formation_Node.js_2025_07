import fs from 'node:fs/promises';
import path from "node:path";

const packageJsonPath = path.resolve(import.meta.dirname, "package.json");
const packageJsonCopyPath = path.resolve(import.meta.dirname, "package.copy.json");

// Async / await nouvelle syntaxe pour gérer les promesses apparue dans ES2017

async function copyFile() {
  try {
    const buffer = await fs.readFile(packageJsonPath);
    await fs.writeFile(packageJsonCopyPath, buffer);
    console.log("Fichier copié (asynchrone)");
  } catch (err) {
    console.error("Erreur lors de la copie du fichier (asynchrone) :", err);
  }
}

copyFile();
