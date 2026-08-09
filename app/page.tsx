import Link from "next/link";
import type { Metadata } from "next";
import { Section, Shell } from "@/components/primitives/Section";
import { MonoLabel, StatusDot } from "@/components/primitives/MonoLabel";
import { Button, TextLink } from "@/components/primitives/Button";
import { Reveal, LiftCard } from "@/components/primitives/Reveal";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { BrowserFrame } from "@/components/primitives/BrowserFrame";
import { TerminalLine } from "@/components/site/TerminalLine";
import { ConsultationDiagram } from "@/components/diagrams/medsys";
import { CAPABILITIES } from "@/content/capabilities";
import { NOTES } from "@/content/notes";
import { INTERVIEWS, MEDSYS } from "@/content/work";
import { CTA, ETHOS, HERO_LINES, HERO_SUPPORT, PROOF, SITE } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden">
        <ColumnGuides />
        <Shell className="relative pb-24 pt-20 md:pb-32 md:pt-32 lg:pb-40 lg:pt-40">
          <MonoLabel as="p" className="mb-10 flex items-center gap-2.5">
            <StatusDot />
            AI studio · venture lab
          </MonoLabel>

          <h1 className="t-display max-w-[16ch] text-ink">
            {HERO_LINES.map((line, i) => (
              <span key={line} className="line-mask">
                <span style={{ animationDelay: `${120 + i * 90}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="t-lead measure mt-8 md:mt-10">{HERO_SUPPORT}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/work" variant="primary">
              See the work
            </Button>
            <Button href="/lab" variant="ghost">
              Read the lab notes
            </Button>
          </div>

          <div className="mt-16 border-t border-hairline pt-6 md:mt-24">
            <TerminalLine />
          </div>
        </Shell>
      </section>

      {/* --------------------------------------------------- Proof strip */}
      <div className="border-t border-hairline">
        <Shell>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {PROOF.map((p, i) => (
              <div
                key={p.label}
                className={`border-hairline py-8 md:py-10 ${
                  i % 2 === 1 ? "border-l pl-6" : ""
                } ${i > 0 ? "md:border-l md:pl-8" : ""} ${
                  i < 2 ? "border-b md:border-b-0" : ""
                }`}
              >
                <dt className="sr-only">{p.label}</dt>
                <dd>
                  <span className="block font-mono text-[1.0625rem] font-medium tracking-[-0.02em] text-ink md:text-[1.5rem]">
                    {p.value}
                  </span>
                  <MonoLabel as="span" className="mt-2.5 block normal-case tracking-[0.06em]">
                    {p.label}
                  </MonoLabel>
                </dd>
              </div>
            ))}
          </dl>
        </Shell>
      </div>

      {/* ------------------------------------------------ Flagship work */}
      <Section id="work" label="01 — Work">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <MonoLabel as="p" className="mb-4 flex items-center gap-2.5">
                <StatusDot />
                {MEDSYS.index} · {MEDSYS.status}
              </MonoLabel>
              <h2 className="t-section text-ink">{MEDSYS.name}</h2>
              <p className="t-lead measure mt-4">{MEDSYS.tagline}</p>
            </div>
            <Link
              href="/work/medsys"
              className="link-underline shrink-0 text-[13.5px] text-ink"
            >
              Read the case study →
            </Link>
          </div>
        </Reveal>

        <Reveal index={1} className="mt-12 md:mt-16">
          <BrowserFrame url={MEDSYS.domain ?? ""} caption="fig. 01 — consultation, structured from dictation">
            <ConsultationDiagram />
          </BrowserFrame>
        </Reveal>

        <ul className="mt-12 grid gap-8 border-t border-hairline pt-10 md:grid-cols-3 md:gap-10">
          {MEDSYS.summary.map((line, i) => (
            <Reveal as="li" key={line} index={i}>
              <MonoLabel as="p" className="mb-3">
                {String(i + 1).padStart(2, "0")}
              </MonoLabel>
              <p className="t-body">{line}</p>
            </Reveal>
          ))}
        </ul>

        {/* Second shipped venture — a single hairline row, so it reads as
            also-in-production without competing with the flagship. */}
        <Reveal index={1} className="mt-12">
          <a
            href={`https://${INTERVIEWS.domain}`}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-3 border-t border-hairline py-7 transition-colors duration-200 hover:bg-surface/60 md:-mx-4 md:flex-row md:items-baseline md:justify-between md:px-4"
          >
            <span className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
              <MonoLabel as="span" className="flex items-center gap-2.5">
                <StatusDot />
                {INTERVIEWS.index} · {INTERVIEWS.status}
              </MonoLabel>
              <span className="text-[1.0625rem] font-medium tracking-[-0.015em] text-ink">
                {INTERVIEWS.name}
              </span>
            </span>
            <span className="t-body text-[0.9375rem] md:text-right">
              {INTERVIEWS.tagline}{" "}
              <span className="whitespace-nowrap text-ink">↗</span>
            </span>
          </a>
        </Reveal>
      </Section>

      {/* ------------------------------------------------- Capabilities */}
      <Section label="02 — What we do">
        <div className="grid gap-px md:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal
              key={c.index}
              index={i}
              className={`border-hairline py-8 first:pt-0 md:border-l md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0 ${
                i < CAPABILITIES.length - 1 ? "border-b md:border-b-0" : ""
              }`}
            >
              <MonoLabel as="p" className="mb-5">
                {c.index}
              </MonoLabel>
              <h3 className="t-sub mb-3 text-ink">{c.title}</h3>
              <p className="t-body">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ The lab */}
      <Section label="03 — The lab">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="t-section max-w-[20ch] text-ink">
              Notes from the work in progress.
            </h2>
            <Link href="/lab" className="link-underline shrink-0 text-[13.5px] text-ink">
              All notes →
            </Link>
          </div>
        </Reveal>

        <ol className="mt-12 border-t border-hairline md:mt-16">
          {NOTES.map((n, i) => (
            <Reveal as="li" key={n.slug} index={i}>
              <Link
                href={`/lab/${n.slug}`}
                className="group grid grid-cols-1 gap-2 border-b border-hairline py-7 transition-colors duration-200 hover:bg-surface/60 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 md:-mx-4"
              >
                <MonoLabel as="span" className="md:col-span-1">
                  {n.index}
                </MonoLabel>
                <span className="md:col-span-5">
                  <span className="block text-[1.0625rem] font-medium tracking-[-0.015em] text-ink">
                    {n.title}
                  </span>
                </span>
                <span className="t-body md:col-span-4 md:text-[0.9375rem]">
                  {n.abstract}
                </span>
                <MonoLabel as="span" className="md:col-span-2 md:text-right">
                  {n.displayDate} · {n.readTime}
                </MonoLabel>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* -------------------------------------------------- Studio ethos */}
      <Section label="04 — Studio">
        <Reveal>
          <blockquote className="max-w-[20ch] text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.14] tracking-[-0.03em] text-ink">
            {ETHOS.quote}
          </blockquote>
          <p className="t-lead measure mt-8">{ETHOS.support}</p>
        </Reveal>

        <Reveal index={1}>
          <div className="mt-14 max-w-[52ch] border-t border-hairline pt-8 md:mt-20">
            <p className="t-body">{ETHOS.founderNote}</p>
            <p className="mt-5 flex items-center gap-2.5">
              <MonoLabel>
                {ETHOS.founderName} · {ETHOS.founderRole}
              </MonoLabel>
            </p>
            <p className="mt-6">
              <TextLink href="/studio" className="text-[13.5px]">
                How the studio works →
              </TextLink>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------ CTA band */}
      <Section bordered className="relative overflow-hidden">
        <ColumnGuides />
        <Reveal className="relative">
          <h2 className="t-section max-w-[22ch] text-ink">
            {CTA.headline}
            <span className="block text-ink-3">{CTA.sub}</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <TextLink href={`mailto:${SITE.email}`} className="ml-1 text-[13.5px]">
              {SITE.email}
            </TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
