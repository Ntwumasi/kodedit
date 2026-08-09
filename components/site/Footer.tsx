import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { NAV_LINKS, SITE, SOCIALS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-[15px] leading-none">
              <Wordmark blink={false} />
            </Link>
            <MonoLabel as="p" className="mt-4">
              {SITE.location}
            </MonoLabel>
          </div>

          <nav aria-label="Footer" className="flex gap-14 md:gap-20">
            <div>
              <MonoLabel as="p" className="mb-4">
                Site
              </MonoLabel>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] text-ink-2 transition-colors duration-150 hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <MonoLabel as="p" className="mb-4">
                Elsewhere
              </MonoLabel>
              <ul className="space-y-2.5">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[13.5px] text-ink-2 transition-colors duration-150 hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <MonoLabel>© {SITE.year} {SITE.legalName}</MonoLabel>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="t-mono-label transition-colors duration-150 hover:text-ink-2"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="t-mono-label transition-colors duration-150 hover:text-ink-2"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
