/**
 * kodedit▮ — the cursor block is one of only four places red is allowed.
 */
export function Wordmark({
  className = "",
  blink = true,
}: {
  className?: string;
  blink?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-medium tracking-[-0.03em] text-ink ${className}`}
    >
      kodedit
      <span
        aria-hidden="true"
        className={`ml-[2px] inline-block h-[0.78em] w-[0.42em] translate-y-[0.02em] bg-accent ${
          blink ? "cursor-block" : ""
        }`}
      />
    </span>
  );
}
