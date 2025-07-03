import { resolve } from "node:path";
import fs from "node:fs/promises";
import crypto from "node:crypto";
import { minify } from "terser";
import minimist from "minimist";

function md5(bufferOrString) {
  const hash = crypto.createHash("md5");
  hash.update(bufferOrString);
  return hash.digest("hex");
}

const argv = minimist(process.argv.slice(2), {
  boolean: ["minify", "hash"],
  default: { minify: false, hash: false }
});

const distPath = resolve(import.meta.dirname, "dist");
const srcPath = resolve(import.meta.dirname, "src");
const horlogeJsPath = resolve(srcPath, "js", "horloge.js");
const indexJsPath = resolve(srcPath, "js", "index.js");
const indexHtmlPath = resolve(srcPath, "index.html");
const indexHtmlDistPath = resolve(distPath, "index.html");
let appJsDistPath = resolve(distPath, "app.js");

async function cleanDir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath, { recursive: true });
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);
  let appJsBufferOrString = Buffer.concat(buffers);
  let hash = null;

  if (argv.minify) {
    const { code } = await minify(appJsBufferOrString.toString('utf-8'));
    appJsBufferOrString = code;
  }

  if (argv.hash) {
    hash = md5(appJsBufferOrString);
    appJsDistPath = resolve(distPath, `app.${hash}.js`);
  }

  await fs.writeFile(appJsDistPath, appJsBufferOrString);
  return hash;
}

async function buildHtml(hash) {
  let htmlContent = await fs.readFile(indexHtmlPath, "utf-8");

  htmlContent = htmlContent
    .replace(
      '<script src="./js/horloge.js"></script>',
      (hash) ? `<script src="./app.${hash}.js"></script>` : '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, htmlContent);
}

try {
  await cleanDir(distPath);
  const hash = await buildJs();
  await buildHtml(hash);
} catch (err) {
  console.error(`Error building project ${distPath}:`, err);
}
