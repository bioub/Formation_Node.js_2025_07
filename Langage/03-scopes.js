// function() {

globalThis.globalVar = 'globalVar'; // Déclaration d'une variable globale

// La portée d'un variable declarée dans le script dépend de la plateforme (Node.js, navigateur, etc.)
// et de la configuration de l'environnement
// A ce stade dans Node.js, la variable scriptVar est local à une fonction générée par Node.js
const scriptVar = 'scriptVar';

function externe() {
  // La closure pourrait également être définie via un block (par exemple if, for, etc.)
  const closureVar = 'closureVar'; // Variable locale à une fonction parente

  function interne() {
    const localVar = 'localVar';

    if (true) {
      // Depuis ES2015, les variables déclarées avec let et const sont limitées à leur bloc
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(globalVar);
      console.log(scriptVar);
      console.log(closureVar);
      console.log(localVar);
    }
  }

  interne();
}

externe();

console.log(scriptVar);
// console.log(localVar); // ReferenceError: localVar is not defined


// }
