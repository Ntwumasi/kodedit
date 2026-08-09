"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Entrance: opacity 0->1 + translateY 12px->0, 560ms on [0.16, 1, 0.3, 1],
 * staggered by index, fired once at 20% viewport entry.
 *
 * The transition itself lives in CSS (.reveal / .is-visible) — this only
 * observes and toggles the class, which keeps an animation runtime out of
 * the client bundle. Reduced motion is handled in the stylesheet.
 */
export function Reveal({
  children,
  index = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without IntersectionObserver, show immediately rather than never.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    // rootMargin rather than threshold: 0.2 — a block taller than 5x the
    // viewport can never expose 20% of itself, and would stay hidden forever.
    // This fires as soon as the block crosses into the top 80% of the screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Card that lifts 2px and brightens its border on hover. */
export function LiftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`lift group rounded-[10px] border border-hairline ${className}`}>
      {children}
    </div>
  );
}
