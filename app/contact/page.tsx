import type { Metadata } from "next";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel, StatusDot } from "@/components/primitives/MonoLabel";
import { ColumnGuides } from "@/components/primitives/ColumnGuides";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with the Kodedit studio. Tell us the problem, the industry, and what happens today without software.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Kodedit", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-hairline">
        <ColumnGuides />
        <Shell className="relative py-16 md:py-24">
          <MonoLabel as="p" className="mb-8 flex items-center gap-2.5">
            <StatusDot />
            Contact
          </MonoLabel>
          <h1 className="t-display max-w-[14ch] text-ink">Start a project.</h1>
          <p className="t-lead measure mt-7">
            We take on a small number of engagements a year, and we are most
            useful early — before the system has been specified, while the
            problem is still being understood.
          </p>
        </Shell>
      </header>

      <Shell className="py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-hairline pt-8 lg:border-t-0 lg:pt-0">
              <MonoLabel as="p" className="mb-5">
                Direct
              </MonoLabel>
              <p className="mb-8">
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-[15px] text-ink"
                >
                  {SITE.email}
                </a>
              </p>

              <MonoLabel as="p" className="mb-5">
                Where we are
              </MonoLabel>
              <p className="t-body mb-8 text-[15px]">{SITE.location}</p>

              <MonoLabel as="p" className="mb-5">
                What helps
              </MonoLabel>
              <ul className="space-y-2.5">
                {[
                  "The industry and who does the work today.",
                  "What breaks now, specifically.",
                  "Whether anything is already built.",
                ].map((item) => (
                  <li key={item} className="t-body flex gap-3 text-[15px]">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-px w-3 shrink-0 bg-hairline-bright"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Shell>
    </>
  );
}
