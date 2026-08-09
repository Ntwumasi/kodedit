"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { Button } from "@/components/primitives/Button";
import { NAV_LINKS } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/80 backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? "border-hairline" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10"
      >
        <Link
          href="/"
          className="text-[15px] leading-none"
          aria-label="Kodedit — home"
        >
          <Wordmark blink={false} />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative text-[13.5px] transition-colors duration-150 ${
                    isActive(link.href)
                      ? "text-ink"
                      : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <span
                      aria-hidden="true"
                      className="absolute -left-2.5 top-1/2 size-[4px] -translate-y-1/2 rounded-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="ghost" className="h-9 px-3.5">
            Start a project
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex size-9 items-center justify-center rounded-[6px] border border-hairline text-ink transition-colors duration-150 hover:border-hairline-bright md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-[4px]">
            <span
              className={`block h-px w-[15px] bg-ink transition-transform duration-200 ${
                open ? "translate-y-[2.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-[15px] bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[2.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hairline bg-canvas md:hidden"
      >
        <ul className="mx-auto w-full max-w-[1200px] px-6 py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-hairline last:border-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="flex items-center gap-2.5 py-3.5 text-[15px] text-ink"
              >
                {isActive(link.href) ? (
                  <span
                    aria-hidden="true"
                    className="size-[4px] rounded-full bg-accent"
                  />
                ) : (
                  <span aria-hidden="true" className="size-[4px]" />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-5 pt-1">
          <Button
            href="/contact"
            variant="primary"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
