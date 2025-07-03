import { setInterval } from "node:timers/promises";
import { createInterface } from "node:readline/promises";
import { createReadStream } from "node:fs";

try {
  for await (const _ of setInterval(1000, "", { signal: AbortSignal.timeout(5000) })) {
    console.log(`1 seconde s'est écoulée`);
  }
} catch (err) {
  if (err.name === "AbortError") {
    console.log("L'itération a été annulée après 5 secondes");
  } else {
    console.error("Erreur lors de l'itération :", err);
  }
}

const rs = createReadStream(".editorconfig", { encoding: "utf-8" });
const rl = createInterface({
  input: rs,
  crlfDelay: Infinity
});

try {
  for await (const line of rl) {
    console.log(`Ligne lue : ${line}`);
  }
} catch (err) {
  console.error("Erreur lors de la lecture du fichier :", err);
} finally {
  rl.close();
  rs.destroy();
}
