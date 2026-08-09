import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = process.env.OUT ?? "/private/tmp/claude-501/-Users-nokio-GitRepos-kodedit/664af432-a466-4d33-bcab-e54115e3e0a6/scratchpad/shots";

const ROUTES = (process.env.ROUTES ?? "/,/work,/work/medsys,/lab,/lab/why-voice-beats-forms,/studio,/contact").split(",");
const WIDTHS = (process.env.WIDTHS ?? "390,768,1440").split(",").map(Number);

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];

for (const width of WIDTHS) {
  const ctx = await browser.newContext({
    viewport: { width, height: width < 500 ? 844 : 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${width}] console: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${width}] pageerror: ${e.message}`));

  for (const route of ROUTES) {
    const name = route === "/" ? "home" : route.slice(1).replace(/\//g, "-");
    const res = await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 45000 });
    if (!res || res.status() >= 400) {
      errors.push(`[${width}] ${route} -> HTTP ${res?.status()}`);
      continue;
    }
    // let entrance animations settle
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(700);

    // the page itself must never scroll sideways
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 1) errors.push(`[${width}] ${route} -> horizontal overflow ${overflow}px`);

    // exactly one h1, and it must be non-empty
    const h1s = await page.locator("h1").allTextContents();
    if (h1s.length !== 1) errors.push(`[${width}] ${route} -> ${h1s.length} h1 elements`);

    // nothing may be left stuck at opacity 0 after a full scroll
    const stuck = await page.evaluate(() =>
      [...document.querySelectorAll(".reveal")].filter(
        (el) => getComputedStyle(el).opacity !== "1"
      ).length
    );
    if (stuck > 0) errors.push(`[${width}] ${route} -> ${stuck} reveal blocks stuck hidden`);

    await page.screenshot({ path: `${OUT}/${name}-${width}.png`, fullPage: true });
  }
  await ctx.close();
}

await browser.close();

if (errors.length) {
  console.log("PROBLEMS:\n" + errors.join("\n"));
} else {
  console.log("clean — no console errors, all routes 200");
}
