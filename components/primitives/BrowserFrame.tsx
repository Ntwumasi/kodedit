import type { ReactNode } from "react";

/**
 * Chrome-in-hairlines. No gloss, no shadow bloom — the frame is drawn
 * with the same 1px rule as everything else on the site.
 */
export function BrowserFrame({
  url,
  children,
  caption,
  className = "",
}: {
  url: string;
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[10px] border border-hairline bg-surface">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-hairline bg-surface-2 px-3.5 py-2.5">
          <div className="flex items-center gap-[6px]" aria-hidden="true">
            <span className="size-[7px] rounded-full border border-hairline-bright" />
            <span className="size-[7px] rounded-full border border-hairline-bright" />
            <span className="size-[7px] rounded-full border border-hairline-bright" />
          </div>
          <div className="min-w-0 flex-1">
            {/* ink-2, not ink-3: this sits on the lighter surface-2, where
                the muted tier only reaches 4.25:1. */}
            <div className="mx-auto w-fit max-w-full truncate rounded-[4px] border border-hairline px-2.5 py-1 font-mono text-[10.5px] leading-none text-ink-2">
              {url}
            </div>
          </div>
          <div className="w-[42px]" aria-hidden="true" />
        </div>

        {/* Viewport. Dense schematics keep a legible minimum width and
            scroll inside the frame rather than shrinking to illegibility
            on a phone. The page body never scrolls sideways.
            tabIndex makes that scroll reachable from the keyboard. */}
        <div
          className="overflow-x-auto bg-canvas"
          tabIndex={0}
          role="group"
          aria-label={caption ? `Figure: ${caption}` : `Screen: ${url}`}
        >
          {children}
        </div>
      </div>

      {caption ? (
        <figcaption className="t-mono-label mt-4 normal-case tracking-[0.06em]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
