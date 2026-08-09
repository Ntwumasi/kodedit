import { Logo } from "./Logo";

/**
 * The mark plus the wordmark. The blinking cursor motif lives on the hero
 * terminal line rather than here, so the nav carries one red element, not two.
 */
export function Wordmark({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Logo size={size} />
      <span className="font-medium tracking-[-0.03em] text-ink">kodedit</span>
    </span>
  );
}
