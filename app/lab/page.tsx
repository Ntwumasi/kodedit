import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { NOTES } from "@/content/notes";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Research notes from the Kodedit lab: voice at the point of care, drug-interaction alert design, and offline-first architecture for clinics with unstable power.",
  alternates: { canonical: "/lab" },
  openGraph: { title: "Lab — Kodedit", url: "/lab" },
};

export default function LabPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-hairline">
        <ColumnGuides />
        <Shell className="relative py-16 md:py-24">
          <MonoLabel as="p" className="mb-8">
            02 — The lab
          </MonoLabel>
          <h1 className="t-display max-w-[15ch] text-ink">
            Notes from the work in progress.
          </h1>
          <p className="t-lead measure mt-7">
            What we learn building and running the ventures, written up while it
            is still specific. No summaries of other people&rsquo;s research.
          </p>
        </Shell>
      </header>

      <Shell className="py-16 md:py-24">
        <ol className="border-t border-hairline">
          {NOTES.map((n, i) => (
            <Reveal as="li" key={n.slug} index={i}>
              <article>
                <Link
                  href={`/lab/${n.slug}`}
                  className="group grid gap-3 border-b border-hairline py-9 transition-colors duration-200 hover:bg-surface/60 md:-mx-5 md:grid-cols-12 md:gap-6 md:px-5"
                >
                  <MonoLabel as="span" className="md:col-span-1">
                    {n.index}
                  </MonoLabel>

                  <div className="md:col-span-6">
                    <h2 className="text-[1.125rem] font-medium leading-snug tracking-[-0.02em] text-ink">
                      {n.title}
                    </h2>
                    <p className="t-body mt-2.5 max-w-[52ch] text-[0.9375rem]">
                      {n.abstract}
                    </p>
                  </div>

                  <div className="md:col-span-5 md:text-right">
                    <MonoLabel as="span" className="block">
                      {n.displayDate}
                    </MonoLabel>
                    <MonoLabel as="span" className="mt-2 block">
                      {n.readTime} read
                    </MonoLabel>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </ol>
      </Shell>
    </>
  );
}
