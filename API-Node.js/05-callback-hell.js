import fs from "node:fs";
import path from "node:path";

// Chemins vers les fichiers package.json et package.copy.json
const packageJsonPath = path.resolve(import.meta.dirname, "package.json");
const packageJsonCopyPath = path.resolve(import.meta.dirname, "package.copy.json");

// Copier le fichier package.json dans package.copy.json (en synchrone)
try {
  const buffer = fs.readFileSync(packageJsonPath);
  fs.writeFileSync(packageJsonCopyPath, buffer);
  console.log("Fichier copié (synchrone)");
} catch (err) {
  console.error("Erreur lors de la copie du fichier (synchrone) :", err);
}

// Copier le fichier package.json dans package.copy.json (en asynchrone)
// La version asynchrone est recommandée pour ne pas bloquer l'exécution du programme
// Par contre elle moins lisible pour 2 raisons :
// - il y a effet de pyramide de callback (callback hell)
// - on ne peut pas centraliser les erreurs dans un bloc try/catch
fs.readFile(packageJsonPath, (err, buffer) => {
  if (err) {
    console.error("Erreur lors de la copie du fichier (synchrone) :", err);
    return;
  }
  fs.writeFile(packageJsonCopyPath, buffer, (err) => {
    if (err) {
      console.error("Erreur lors de la copie du fichier (synchrone) :", err);
      return;
    }
    console.log("Fichier copié (asynchrone)");
  });
});
