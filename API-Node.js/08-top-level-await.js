import fs from 'node:fs/promises';
import path from "node:path";

const packageJsonPath = path.resolve(import.meta.dirname, "package.json");
const packageJsonCopyPath = path.resolve(import.meta.dirname, "package.copy.json");

// Top level await apparue en ES2022
// une condition utiliser les modules ESM (ne fonctionne pas avec les modules CommonJS)
try {
  const buffer = await fs.readFile(packageJsonPath);
  await fs.writeFile(packageJsonCopyPath, buffer);
  console.log("Fichier copié (asynchrone)");
} catch (err) {
  console.error("Erreur lors de la copie du fichier (asynchrone) :", err);
}
