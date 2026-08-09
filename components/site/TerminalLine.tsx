"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const TEXT = "building: medsys.healthcare";

export function TerminalLine({ delay = 1100 }: { delay?: number }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    let i = 0;
    let timer = window.setTimeout(function step() {
      if (cancelled) return;
      i += 1;
      setCount(i);
      if (i < TEXT.length) timer = window.setTimeout(step, 26);
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [reduced, delay]);

  // Reduced motion shows the finished line rather than animating to it.
  const shown = reduced ? TEXT : TEXT.slice(0, count);

  return (
    <p className="t-mono flex items-center gap-2 text-ink-3">
      <span
        aria-hidden="true"
        className="cursor-block inline-block size-[9px] shrink-0 bg-accent"
      />
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">Currently {TEXT}</span>
    </p>
  );
}
