"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

export function StickyToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="t-mono-label mb-5">On this page</p>
      <ul className="space-y-3">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-2.5 text-[13px] transition-colors duration-150 ${
                  isActive ? "text-ink" : "text-ink-3 hover:text-ink-2"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px w-3 shrink-0 transition-all duration-200 ${
                    isActive ? "w-5 bg-accent" : "bg-hairline-bright"
                  }`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
