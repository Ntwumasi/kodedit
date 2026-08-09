import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "/private/tmp/claude-501/-Users-nokio-GitRepos-kodedit/664af432-a466-4d33-bcab-e54115e3e0a6/scratchpad/shots";
mkdirSync(OUT, { recursive: true });

const route = process.env.ROUTE ?? "/work/medsys";
const sel = process.env.SEL ?? "figure";
const width = Number(process.env.W ?? 390);
const nth = Number(process.env.N ?? 0);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width, height: 900 },
  deviceScaleFactor: 3,
});
await page.goto(BASE + route, { waitUntil: "networkidle" });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);

const el = page.locator(sel).nth(nth);
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
await el.screenshot({ path: `${OUT}/inspect-${width}.png` });
console.log("captured", sel, "#", nth, "at", width);
await browser.close();
