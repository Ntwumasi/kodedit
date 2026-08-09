import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const ROUTES = (
  process.env.ROUTES ??
  "/,/work,/work/medsys,/lab,/lab/why-voice-beats-forms,/studio,/contact,/privacy,/terms"
).split(",");
const WIDTHS = (process.env.WIDTHS ?? "390,1440").split(",").map(Number);

const browser = await chromium.launch();
let total = 0;

for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();

  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    // let entrance animations finish so nothing is mid-fade during the scan
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    for (const v of violations) {
      total++;
      console.log(
        `\n[${width}] ${route}\n  ${v.id} (${v.impact}) — ${v.help}`
      );
      for (const node of v.nodes.slice(0, 4)) {
        console.log(`    ${node.target.join(" ")}`);
        const msg = node.any?.[0]?.message ?? node.all?.[0]?.message;
        if (msg) console.log(`      ${msg.split("\n")[0]}`);
      }
      if (v.nodes.length > 4) console.log(`    …${v.nodes.length - 4} more`);
    }
  }
  await ctx.close();
}

await browser.close();
console.log(total === 0 ? "\naxe: 0 violations" : `\naxe: ${total} violation types`);
