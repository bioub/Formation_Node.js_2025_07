// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('ABC');
//     }, ms);
//   });
// }

// const result = await timeout(1000);
// console.log("1 seconde s'est écoulée");

// timeout(2000).then(() => {
//   console.log("2 secondes se sont écoulées");
// });

// import { promisify } from "node:util";

// const timeout = promisify(setTimeout);

// await timeout(1000);
// console.log("1 seconde s'est écoulée");

import { setTimeout } from "node:timers/promises";
import { readFile } from "node:fs/promises";
import { read } from "node:fs";

await setTimeout(1000);
console.log("1 seconde s'est écoulée");

// Combiner plusieurs promesses en une seule
// Promise.all
const buffers = await Promise.all([readFile(".editorconfig"), readFile("package.json")]);
// .editorconfig :
console.log(buffers[0].toString());
// package.json :
console.log(buffers[1].toString());

// Promise.allSettled
const results = await Promise.allSettled([readFile(".editorconfi"), readFile("package.json")]);
console.log(results[0]); // { status: 'rejected', reason: [Error: ENOENT: no such file or directory, open '.editorconfi'] }
console.log(results[1]); // { status: 'fulfilled', value: <Buffer ...>

// Promise.race
const first = await Promise.race([readFile(".editorconfig", 'utf-8'), setTimeout(1000)]);
console.log(first);

// Promise.any
// const any = await Promise.any([ping("https://www.google.com"), ping("https://www.example.com")]);
// console.log(any.toString());
