// Captures d'écran du site en local, sur ordinateur et sur mobile (émulation iPhone).
// Usage : node scripts/screenshot.mjs [chemin] [dossier-de-sortie]
// Exemple : node scripts/screenshot.mjs /appartements/appartement-1 ./captures
import { chromium, devices } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const route = process.argv[2] ?? "/";
const outDir = process.argv[3] ?? "captures";
const base = process.env.BASE_URL ?? "http://localhost:3000";
const name = route === "/" ? "accueil" : route.replace(/^\/|\/$/g, "").replace(/\//g, "-");

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });

const targets = [
  { label: "mobile", options: devices["iPhone 13"] },
  { label: "desktop", options: { viewport: { width: 1440, height: 900 } } },
];

for (const { label, options } of targets) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  await page.goto(base + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500); // laisse l'animation d'entrée se terminer
  await page.screenshot({ path: path.join(outDir, `${name}-${label}.png`) });

  // Page complète : on fait défiler pour déclencher les animations au scroll.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, `${name}-${label}-full.png`), fullPage: true });
  await context.close();
}

await browser.close();
console.log(`Captures enregistrées dans ${outDir}/`);
