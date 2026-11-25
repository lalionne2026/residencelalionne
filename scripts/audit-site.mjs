import { chromium } from "playwright-core";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const routes = [
  "/",
  "/appartements",
  "/appartements/appartement-1",
  "/appartements/appartement-2",
  "/appartements/appartement-3",
  "/appartements/appartement-4",
  "/infos-pratiques",
  "/contact",
];
const forbiddenText = ["06 562 46 70", "+1 802 391 7806", "05 506 56 14"];

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
const failures = [];

for (const route of routes) {
  const consoleErrors = [];
  const pageErrors = [];
  const consoleHandler = (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  };
  const pageErrorHandler = (error) => pageErrors.push(error.message);
  page.on("console", consoleHandler);
  page.on("pageerror", pageErrorHandler);

  const response = await page.goto(base + route, { waitUntil: "networkidle" });
  if (!response?.ok()) failures.push(`${route}: HTTP ${response?.status() ?? "aucune réponse"}`);

  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 180));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(
    () => [...document.images].every((image) => image.complete),
    null,
    { timeout: 10000 },
  );

  const text = await page.locator("body").innerText();
  for (const value of forbiddenText) {
    if (text.includes(value)) failures.push(`${route}: ancien numéro visible (${value})`);
  }

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.getAttribute("src") ?? "(source inconnue)"),
  );
  if (brokenImages.length) failures.push(`${route}: images non chargées (${[...new Set(brokenImages)].join(", ")})`);
  if (consoleErrors.length) failures.push(`${route}: erreurs console (${consoleErrors.join(" | ")})`);
  if (pageErrors.length) failures.push(`${route}: erreurs page (${pageErrors.join(" | ")})`);

  page.off("console", consoleHandler);
  page.off("pageerror", pageErrorHandler);
}

await context.close();
await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`${routes.length} routes vérifiées: HTTP, contenu, images et console OK`);
