// Optimise les photos de public/images et génère leurs métadonnées (taille + aperçu flou).
// À relancer après chaque ajout de photo : npm run images
//
// - redimensionne à 2000 px max et recompresse en JPEG progressif (les PNG photo deviennent .jpg)
// - écrit src/content/images.generated.json : { "/images/x.jpg": { width, height, blurDataURL } }
import sharp from "sharp";
import { readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = "public/images";
const OUT = "src/content/images.generated.json";
const MAX = 2000;
const SKIP = new Set(["logo.jpg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield full;
  }
}

const meta = {};
let saved = 0;

for await (const file of walk(ROOT)) {
  let target = file;
  if (!SKIP.has(path.basename(file))) {
    const input = sharp(file).rotate();
    const { width } = await input.metadata();
    const buffer = await input
      .resize({ width: Math.min(width, MAX), withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toBuffer();
    target = file.replace(/\.(png|jpeg)$/i, ".jpg");
    const before = (await stat(file)).size;
    if (target !== file || buffer.length < before) {
      await writeFile(target + ".tmp", buffer);
      if (target !== file) await rm(file);
      await rename(target + ".tmp", target);
      saved += Math.max(0, before - buffer.length);
    }
  }

  const img = sharp(target);
  const { width, height } = await img.metadata();
  const blur = await img.resize(16).webp({ quality: 40 }).toBuffer();
  const key = "/" + path.relative("public", target).split(path.sep).join("/");
  meta[key] = { width, height, blurDataURL: `data:image/webp;base64,${blur.toString("base64")}` };
}

const sorted = Object.fromEntries(Object.entries(meta).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(OUT, JSON.stringify(sorted, null, 2) + "\n");
console.log(`${Object.keys(meta).length} images traitées, ${(saved / 1024 / 1024).toFixed(1)} Mo économisés → ${OUT}`);
