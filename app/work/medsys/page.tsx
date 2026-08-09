import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel, StatusDot } from "@/components/primitives/MonoLabel";
import { Button, TextLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { BrowserFrame } from "@/components/primitives/BrowserFrame";
import { StickyToc, type TocItem } from "@/components/site/StickyToc";
import {
  AlertChannels,
  ConsultationDiagram,
  DepartmentGraph,
  PharmacyQueue,
  SyncDiagram,
} from "@/components/diagrams/medsys";
import { DEPARTMENTS, INTELLIGENCE, MEDSYS, VENTURES } from "@/content/work";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "MedSys — an EMR platform for clinics that run on paper",
  description:
    "How Kodedit researched, built, and now operates MedSys: seven clinic departments on one patient record, voice-structured SOAP notes, and an offline-first architecture built for unstable power.",
  alternates: { canonical: "/work/medsys" },
  openGraph: {
    title: "MedSys — an EMR platform for clinics that run on paper",
    description:
      "Seven departments on one record. Voice-structured notes. Offline-first by design.",
    url: "/work/medsys",
  },
};

const TOC: TocItem[] = [
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "system", label: "System" },
  { id: "intelligence", label: "Intelligence" },
  { id: "outcome", label: "Outcome" },
];

function H2({ id, n, children }: { id: string; n: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 scroll-mt-24" id={id}>
      <MonoLabel as="p" className="mb-4">
        {n}
      </MonoLabel>
      <h2 className="t-section text-ink">{children}</h2>
    </div>
  );
}

export default function MedSysPage() {
  // The in-development slot, not the other shipped venture.
  const teaser = VENTURES.find((v) => v.status === "in development") ?? VENTURES[2];

  return (
    <>
      {/* ------------------------------------------------------ Header */}
      <header className="relative overflow-hidden border-b border-hairline">
        <ColumnGuides />
        <Shell className="relative py-16 md:py-24">
          <MonoLabel as="p" className="mb-8 flex flex-wrap items-center gap-2.5">
            <StatusDot />
            {MEDSYS.index} · {MEDSYS.status}
          </MonoLabel>

          <h1 className="t-display max-w-[13ch] text-ink">{MEDSYS.name}</h1>
          <p className="t-lead measure mt-7">{MEDSYS.tagline}</p>

          <dl className="mt-12 grid grid-cols-2 gap-y-7 border-t border-hairline pt-8 md:grid-cols-3">
            {[
              { k: "Sector", v: MEDSYS.sector },
              { k: "Engagement", v: "Studio venture" },
              { k: "Live since", v: MEDSYS.year },
            ].map((row) => (
              <div key={row.k}>
                <dt className="t-mono-label mb-2.5">{row.k}</dt>
                <dd className="text-[14px] text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10">
            <TextLink href={`https://${MEDSYS.domain}`} className="t-mono">
              {MEDSYS.domain} ↗
            </TextLink>
          </p>
        </Shell>
      </header>

      {/* -------------------------------------------- Body + sticky TOC */}
      <Shell className="py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <StickyToc items={TOC} />
          </aside>

          {/* min-w-0: without it the grid item sizes to the widest figure
              and the whole page scrolls sideways instead of the figure. */}
          <div className="min-w-0 lg:col-span-9">
            {/* -------------------------------------------- Challenge */}
            <section className="scroll-mt-24">
              <Reveal>
                <H2 id="challenge" n="01 — Challenge">
                  A folder is only in one room at a time.
                </H2>
                <div className="measure space-y-5">
                  <p className="t-body">
                    A busy clinic runs on paper folders. The folder holds the
                    history, the last prescription, and the laboratory slips
                    stapled inside the back cover. It works, in the narrow sense
                    that it has always worked, right up to the moment two
                    departments need it simultaneously.
                  </p>
                  <p className="t-body">
                    Then the failures start, and they are always the same
                    failures. A laboratory result comes back and cannot find the
                    order that generated it. A pharmacy dispenses against a
                    prescription it cannot read. Billing reconstructs a visit at
                    the end of the day from memory and a stack of slips. Nobody
                    is negligent; the medium simply cannot be in two places at
                    once.
                  </p>
                  <p className="t-body">
                    Clinics that had bought software mostly were not using it. The
                    systems on offer assumed reliable power, reliable bandwidth,
                    and a clinician willing to type during a consultation. For
                    these clinics all three assumptions are wrong, so the
                    software became a data-entry chore performed after hours — or
                    abandoned.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* --------------------------------------------- Approach */}
            <section className="mt-24 scroll-mt-24 md:mt-32">
              <Reveal>
                <H2 id="approach" n="02 — Approach">
                  Research in the corridor, not the conference room.
                </H2>
                <div className="measure space-y-5">
                  <p className="t-body">
                    We started by following the folder. Not interviewing
                    administrators about the folder — following it, through
                    registration, triage, consultation, the laboratory, the
                    dispensary, and billing, watching where it stalled and who
                    went looking for it.
                  </p>
                  <p className="t-body">
                    Three findings shaped everything after. The queue, not the
                    record, is what the clinic actually runs on. Clinicians will
                    accept a screen in the room only if it does not take their
                    eyes off the patient. And any system that stops working during
                    an outage will be abandoned within a month, because the clinic
                    cannot stop working during an outage.
                  </p>
                </div>
              </Reveal>

              <Reveal index={1} className="mt-12">
                <BrowserFrame
                  url={`${MEDSYS.domain}/records`}
                  caption="fig. 01 — seven departments resolving to one record"
                >
                  <div className="px-4 py-6 md:px-8 md:py-10">
                    <DepartmentGraph />
                  </div>
                </BrowserFrame>
              </Reveal>
            </section>

            {/* ----------------------------------------------- System */}
            <section className="mt-24 scroll-mt-24 md:mt-32">
              <Reveal>
                <H2 id="system" n="03 — System">
                  Seven departments, one record.
                </H2>
                <p className="t-body measure">
                  Each department gets an interface shaped to its own job, and
                  every one of them writes to the same record. An order placed in
                  a consulting room appears in the laboratory worklist without
                  anyone carrying anything.
                </p>
              </Reveal>

              <ol className="mt-12 border-t border-hairline">
                {DEPARTMENTS.map((d, i) => (
                  <Reveal as="li" key={d.n} index={i % 4}>
                    <div className="grid gap-3 border-b border-hairline py-7 md:grid-cols-12 md:gap-6">
                      <MonoLabel as="span" className="md:col-span-1">
                        {d.n}
                      </MonoLabel>
                      <div className="md:col-span-3">
                        <p className="text-[15px] font-medium tracking-[-0.015em] text-ink">
                          {d.name}
                        </p>
                        <MonoLabel as="p" className="mt-2 normal-case tracking-[0.06em]">
                          {d.role}
                        </MonoLabel>
                      </div>
                      <p className="t-body md:col-span-8 md:text-[15px]">
                        {d.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="mt-14">
                <BrowserFrame
                  url={`${MEDSYS.domain}/pharmacy`}
                  caption="fig. 02 — pharmacy dispensing queue, one line held for an interaction check"
                >
                  <PharmacyQueue />
                </BrowserFrame>
              </Reveal>
            </section>

            {/* ----------------------------------------- Intelligence */}
            <section className="mt-24 scroll-mt-24 md:mt-32">
              <Reveal>
                <H2 id="intelligence" n="04 — Intelligence">
                  Automation that shows its working.
                </H2>
                <p className="t-body measure">
                  Three places where the system does something on its own. In each
                  one it has to be able to explain the decision, and a clinician
                  has to be able to overrule it on the record.
                </p>
              </Reveal>

              <div className="mt-12 grid gap-px md:grid-cols-3">
                {INTELLIGENCE.map((item, i) => (
                  <Reveal
                    key={item.n}
                    index={i}
                    className={`border-hairline py-8 first:pt-0 md:border-l md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0 ${
                      i < INTELLIGENCE.length - 1 ? "border-b md:border-b-0" : ""
                    }`}
                  >
                    <MonoLabel as="p" className="mb-5">
                      {item.n}
                    </MonoLabel>
                    <h3 className="mb-3 text-[15px] font-medium leading-snug tracking-[-0.015em] text-ink">
                      {item.title}
                    </h3>
                    <p className="t-body md:text-[15px]">{item.body}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-14">
                <BrowserFrame
                  url={`${MEDSYS.domain}/prescribing`}
                  caption="fig. 03 — the severity floor: only an alert that would change the prescription may interrupt"
                >
                  <div className="px-4 py-6 md:px-8 md:py-8">
                    <AlertChannels />
                  </div>
                </BrowserFrame>
              </Reveal>

              <Reveal className="mt-12">
                <BrowserFrame
                  url={`${MEDSYS.domain}/consultation`}
                  caption="fig. 04 — a spoken consultation, structured into SOAP fields with the transcript retained"
                >
                  <ConsultationDiagram />
                </BrowserFrame>
              </Reveal>
            </section>

            {/* ---------------------------------------------- Outcome */}
            <section className="mt-24 scroll-mt-24 md:mt-32">
              <Reveal>
                <H2 id="outcome" n="05 — Outcome">
                  It survives a Tuesday.
                </H2>
                <div className="measure space-y-5">
                  <p className="t-body">
                    MedSys is in production. The seven departments run on one
                    record, the queue is the spine of the interface rather than a
                    report, and the clinic keeps registering patients when the
                    grid goes down.
                  </p>
                  <p className="t-body">
                    The architectural decision that mattered most was the least
                    visible one. Stock is written as a delta rather than an
                    absolute, so two dispensers working offline through the same
                    queue produce a ledger that reconciles without a merge and
                    without losing units. That choice is invisible in a demo and
                    decisive in a clinic.
                  </p>
                  <p className="t-body">
                    We continue to operate it. Support, iteration, and uptime stay
                    with the studio, which is what keeps the research honest —
                    every wrong assumption comes back as a support ticket with a
                    clinic&rsquo;s name on it.
                  </p>
                </div>
              </Reveal>

              <Reveal index={1} className="mt-12">
                <BrowserFrame
                  url={`${MEDSYS.domain}/sync`}
                  caption="fig. 05 — offline writes as commuting deltas: order of arrival cannot change the result"
                >
                  <div className="px-4 py-6 md:px-8 md:py-10">
                    <SyncDiagram />
                  </div>
                </BrowserFrame>
              </Reveal>
            </section>

            {/* ------------------------------------------- 002 teaser */}
            <Reveal className="mt-24 md:mt-32">
              <div className="rounded-[10px] border border-hairline border-dashed p-8 md:p-10">
                <MonoLabel as="p" className="mb-5 flex items-center gap-2.5">
                  <StatusDot />
                  {teaser.index} · {teaser.status}
                </MonoLabel>
                <h2 className="t-sub mb-3 max-w-[28ch] text-ink">
                  {teaser.tagline}
                </h2>
                <ul className="measure space-y-2.5">
                  {teaser.summary.map((s) => (
                    <li key={s} className="t-body">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* ----------------------------------------------- Next up */}
            <Reveal className="mt-20">
              <div className="flex flex-col gap-5 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <MonoLabel as="p" className="mb-2.5">
                    Next
                  </MonoLabel>
                  <p className="text-[15px] text-ink">
                    Read how the studio operates what it builds.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/studio">The studio</Button>
                  <Button href="/contact" variant="primary">
                    Start a project
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Shell>

      <div className="border-t border-hairline">
        <Shell className="py-10">
          <p className="t-mono-label">
            <Link href="/work" className="transition-colors hover:text-ink-2">
              ← All work
            </Link>
            <span aria-hidden="true" className="mx-3 text-ink-4">
              ·
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-ink-2"
            >
              {SITE.email}
            </a>
          </p>
        </Shell>
      </div>
    </>
  );
}
