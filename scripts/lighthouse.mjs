import { chromium } from "playwright";
import lighthouse from "lighthouse";
import { writeFileSync, mkdirSync } from "node:fs";

const BASE = process.env.BASE ?? "http://localhost:3000";
const ROUTES = (process.env.ROUTES ?? "/,/work/medsys,/lab/why-voice-beats-forms,/contact").split(",");
const OUT = "/private/tmp/claude-501/-Users-nokio-GitRepos-kodedit/664af432-a466-4d33-bcab-e54115e3e0a6/scratchpad/lh";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ args: ["--remote-debugging-port=9222"] });
const port = 9222;

const rows = [];
for (const route of ROUTES) {
  const res = await lighthouse(
    BASE + route,
    { port, output: "json", logLevel: "error", screenEmulation: { disabled: false } },
    undefined
  );
  const c = res.lhr.categories;
  const row = {
    route,
    performance: Math.round(c.performance.score * 100),
    accessibility: Math.round(c.accessibility.score * 100),
    "best-practices": Math.round(c["best-practices"].score * 100),
    seo: Math.round(c.seo.score * 100),
  };
  rows.push(row);

  // surface anything that cost points
  const failed = Object.values(res.lhr.audits).filter(
    (a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative"
  );
  writeFileSync(
    `${OUT}/${route === "/" ? "home" : route.slice(1).replace(/\//g, "-")}.txt`,
    failed.map((a) => `${a.score} ${a.id} — ${a.title}\n   ${a.displayValue ?? ""}`).join("\n")
  );
}

console.table(rows);
const min = Math.min(...rows.flatMap((r) => [r.performance, r.accessibility, r["best-practices"], r.seo]));
console.log(min >= 95 ? `\nAll categories >= 95 (lowest ${min})` : `\nLOWEST: ${min}`);
await browser.close();
