import type { Metadata } from "next";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel, StatusDot } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { Button } from "@/components/primitives/Button";
import { PRINCIPLES, STUDIO_MODEL } from "@/content/capabilities";
import { CTA, ETHOS, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How the Kodedit studio works: research in the field, build the whole system, then operate it in production. Five principles and the people behind them.",
  alternates: { canonical: "/studio" },
  openGraph: { title: "Studio — Kodedit", url: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-hairline">
        <ColumnGuides />
        <Shell className="relative py-16 md:py-24">
          <MonoLabel as="p" className="mb-8 flex items-center gap-2.5">
            <StatusDot />
            The studio
          </MonoLabel>
          <h1 className="t-display max-w-[15ch] text-ink">
            A studio, not an agency.
          </h1>
          <p className="t-lead measure mt-7">
            Kodedit researches how intelligent systems behave in real workflows,
            builds the software those workflows actually need, and then runs it.
            We take equity and ownership in what we make rather than invoicing
            for it and leaving.
          </p>
        </Shell>
      </header>

      {/* ------------------------------------------------ Studio model */}
      <section className="border-b border-hairline">
        <Shell className="py-16 md:py-24">
          <MonoLabel as="p" className="mb-10 md:mb-14">
            01 — How it works
          </MonoLabel>

          <div className="grid gap-px md:grid-cols-3">
            {STUDIO_MODEL.map((step, i) => (
              <Reveal
                key={step.index}
                index={i}
                className={`border-hairline py-8 first:pt-0 md:border-l md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0 ${
                  i < STUDIO_MODEL.length - 1 ? "border-b md:border-b-0" : ""
                }`}
              >
                <MonoLabel as="p" className="mb-5">
                  {step.index}
                </MonoLabel>
                <h2 className="t-sub mb-3 text-ink">{step.title}</h2>
                <p className="t-body">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="t-body measure border-t border-hairline pt-8">
              The three stages are not a pipeline we hand between teams. The
              people who sat in the clinic corridor are the people who wrote the
              dispensing queue and the people who answer when it breaks. That is
              the entire reason the model works.
            </p>
          </Reveal>
        </Shell>
      </section>

      {/* -------------------------------------------------- Principles */}
      <section className="border-b border-hairline">
        <Shell className="py-16 md:py-24">
          <MonoLabel as="p" className="mb-10 md:mb-14">
            02 — Principles
          </MonoLabel>

          <ol className="border-t border-hairline">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p} index={i}>
                <div className="grid gap-2 border-b border-hairline py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                  <MonoLabel as="span" className="md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </MonoLabel>
                  <p className="text-[1.0625rem] leading-snug tracking-[-0.015em] text-ink md:col-span-11">
                    {p}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Shell>
      </section>

      {/* ----------------------------------------------------- Founder */}
      <section className="border-b border-hairline">
        <Shell className="py-16 md:py-24">
          <MonoLabel as="p" className="mb-10 md:mb-14">
            03 — Who
          </MonoLabel>

          <Reveal>
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              {/* Typographic portrait block */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-[10px] border border-hairline bg-surface">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grid grid-cols-4 opacity-40"
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="border-l border-hairline" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[2.5rem] font-medium tracking-[-0.04em] text-ink-3">
                      NT
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pulse-dot absolute bottom-3 left-3 size-[5px] rounded-full bg-accent"
                  />
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-7">
                <h2 className="t-sub text-ink">{ETHOS.founderName}</h2>
                <MonoLabel as="p" className="mt-2.5">
                  {ETHOS.founderRole} · {SITE.location}
                </MonoLabel>
                <div className="measure mt-6 space-y-5">
                  <p className="t-body">{ETHOS.founderNote}</p>
                  <p className="t-body">
                    The studio is deliberately small. One team that can research a
                    problem, design the system, ship it, and stay on the hook for
                    it — because the alternative is a document handed to somebody
                    who was not in the room.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Shell>
      </section>

      {/* --------------------------------------------------------- CTA */}
      <div className="relative overflow-hidden">
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
