import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel, StatusDot } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { BrowserFrame } from "@/components/primitives/BrowserFrame";
import { Button } from "@/components/primitives/Button";
import { DepartmentGraph } from "@/components/diagrams/medsys";
import { VENTURES } from "@/content/work";
import { CTA, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ventures built and operated by the Kodedit studio. MedSys, an EMR platform running in clinics today, is venture 001.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — Kodedit", url: "/work" },
};

export default function WorkPage() {
  const [medsys, teaser] = VENTURES;

  return (
    <>
      <header className="relative overflow-hidden border-b border-hairline">
        <ColumnGuides />
        <Shell className="relative py-16 md:py-24">
          <MonoLabel as="p" className="mb-8">
            01 — Work
          </MonoLabel>
          <h1 className="t-display max-w-[14ch] text-ink">
            We operate what we build.
          </h1>
          <p className="t-lead measure mt-7">
            The studio runs a small number of ventures rather than a long client
            list. Each one is a complete system in production, supported by us.
          </p>
        </Shell>
      </header>

      {/* Venture 001 */}
      <Shell className="py-16 md:py-24">
        <Reveal>
          <article>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <MonoLabel as="p" className="mb-4 flex items-center gap-2.5">
                  <StatusDot />
                  {medsys.index} · {medsys.status}
                </MonoLabel>
                <h2 className="t-section text-ink">
                  <Link href="/work/medsys" className="link-underline">
                    {medsys.name}
                  </Link>
                </h2>
                <p className="t-lead measure mt-4">{medsys.tagline}</p>
              </div>
              <dl className="flex gap-10 md:shrink-0">
                <div>
                  <dt className="t-mono-label mb-2">Sector</dt>
                  <dd className="text-[14px] text-ink">{medsys.sector}</dd>
                </div>
                <div>
                  <dt className="t-mono-label mb-2">Live since</dt>
                  <dd className="text-[14px] text-ink">{medsys.year}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-12">
              <BrowserFrame
                url={medsys.domain ?? ""}
                caption="fig. 01 — seven departments resolving to one patient record"
              >
                <div className="px-4 py-6 md:px-8 md:py-10">
                  <DepartmentGraph />
                </div>
              </BrowserFrame>
            </div>

            <ul className="mt-12 grid gap-8 border-t border-hairline pt-10 md:grid-cols-3 md:gap-10">
              {medsys.summary.map((line, i) => (
                <li key={line}>
                  <MonoLabel as="p" className="mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </MonoLabel>
                  <p className="t-body">{line}</p>
                </li>
              ))}
            </ul>

            <p className="mt-10">
              <Link href="/work/medsys" className="link-underline text-[14px] text-ink">
                Read the case study →
              </Link>
            </p>
          </article>
        </Reveal>

        {/* Venture 002 */}
        <Reveal index={1} className="mt-20 md:mt-28">
          <article className="rounded-[10px] border border-dashed border-hairline p-8 md:p-12">
            <MonoLabel as="p" className="mb-5 flex items-center gap-2.5">
              <StatusDot />
              {teaser.index} · {teaser.status}
            </MonoLabel>
            <h2 className="t-sub max-w-[30ch] text-ink">{teaser.tagline}</h2>
            <ul className="measure mt-5 space-y-2.5">
              {teaser.summary.map((s) => (
                <li key={s} className="t-body">
                  {s}
                </li>
              ))}
            </ul>
            <dl className="mt-8 flex gap-10 border-t border-hairline pt-6">
              <div>
                <dt className="t-mono-label mb-2">Sector</dt>
                <dd className="text-[14px] text-ink">{teaser.sector}</dd>
              </div>
              <div>
                <dt className="t-mono-label mb-2">Started</dt>
                <dd className="text-[14px] text-ink">{teaser.year}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      </Shell>

      <div className="relative overflow-hidden border-t border-hairline">
        <ColumnGuides />
        <Shell className="relative py-20 md:py-28">
          <Reveal>
            <h2 className="t-section max-w-[22ch] text-ink">
              {CTA.headline}
              <span className="block text-ink-3">{CTA.sub}</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Start a project
              </Button>
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline text-[13.5px] text-ink"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </Shell>
      </div>
    </>
  );
}
