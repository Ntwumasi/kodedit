/**
 * A faint 12-column guide. Engineering-paper feel: hairlines at 40% opacity,
 * decorative only. Columns collapse to 4 on small screens so the rhythm
 * stays legible rather than turning into noise.
 */
export function ColumnGuides({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="mx-auto h-full w-full max-w-[1200px] px-6 md:px-10">
        <div className="grid h-full grid-cols-4 opacity-40 md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`border-l border-hairline ${
                i === 11 ? "border-r" : ""
              } ${i >= 4 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
