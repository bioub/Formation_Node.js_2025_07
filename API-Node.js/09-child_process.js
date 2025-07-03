import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execPromise = promisify(exec);

try {
  const { stdout, stderr } = await execPromise('git --version');
  console.log(`Résultat de la commande :\n${stdout}`);
  if (stderr) {
    console.error(`Erreur standard : ${stderr}`);
  }
} catch (error) {
  console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
}
// Alternative using exec directly
// exec('git --version', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Erreur standard : ${stderr}`);
//     return;
//   }
//   console.log(`Résultat de la commande :\n${stdout}`);
// });
