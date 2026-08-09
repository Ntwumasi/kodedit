import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Button } from "@/components/primitives/Button";
import { NOTES, getNote } from "@/content/notes";
import { SITE } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.abstract,
    alternates: { canonical: `/lab/${note.slug}` },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.abstract,
      url: `/lab/${note.slug}`,
      publishedTime: note.date,
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const { default: Body } = await import(`../../../content/notes/${slug}.mdx`);

  const idx = NOTES.findIndex((n) => n.slug === slug);
  const next = NOTES[idx + 1] ?? NOTES[0];

  return (
    <article>
      <header className="border-b border-hairline">
        <Shell className="py-16 md:py-24">
          <MonoLabel as="p" className="mb-8">
            <Link href="/lab" className="transition-colors hover:text-ink-2">
              ← Lab
            </Link>
            <span aria-hidden="true" className="mx-3 text-ink-4">
              ·
            </span>
            {note.index}
          </MonoLabel>

          <h1 className="measure-read text-[clamp(1.875rem,4.4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            {note.title}
          </h1>

          <p className="t-lead measure-read mt-6">{note.abstract}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hairline pt-6">
            <MonoLabel>
              <time dateTime={note.date}>{note.displayDate}</time>
            </MonoLabel>
            <span aria-hidden="true" className="text-ink-4">
              ·
            </span>
            <MonoLabel>{note.readTime} read</MonoLabel>
            <span aria-hidden="true" className="text-ink-4">
              ·
            </span>
            <MonoLabel>Kodedit lab</MonoLabel>
          </div>
        </Shell>
      </header>

      <Shell className="py-14 md:py-20">
        <div className="measure-read">
          <Body />
        </div>

        {/* Footnote rule */}
        <div className="measure-read mt-16 border-t border-hairline pt-6">
          <MonoLabel as="p" className="normal-case leading-relaxed tracking-[0.05em]">
            Written from work on {" "}
            <Link href="/work/medsys" className="text-ink-2 underline underline-offset-2 hover:text-ink">
              MedSys
            </Link>
            , the studio&rsquo;s first venture. Corrections and disagreement to{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-ink-2 underline underline-offset-2 hover:text-ink"
            >
              {SITE.email}
            </a>
            .
          </MonoLabel>
        </div>
      </Shell>

      <div className="border-t border-hairline">
        <Shell className="py-12 md:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <MonoLabel as="p" className="mb-3">
                Next note
              </MonoLabel>
              <Link
                href={`/lab/${next.slug}`}
                className="link-underline text-[1.0625rem] font-medium tracking-[-0.015em] text-ink"
              >
                {next.title}
              </Link>
            </div>
            <Button href="/lab">All notes</Button>
          </div>
        </Shell>
      </div>
    </article>
  );
}
