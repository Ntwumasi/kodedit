/**
 * Shared drawing primitives for the venture schematics.
 *
 * These are diagrams, not screenshots. They are drawn with the same 1px rule
 * as the rest of the site and abstract real content into rules rather than
 * inventing records.
 */

export const LINE = "#1F1F23";
export const LINE_BRIGHT = "#2E2E35";
export const INK = "#F4F4F5";
export const INK_2 = "#A1A1AA";
export const INK_3 = "#7A7A84";
export const ACCENT = "#FE3641";
export const SURFACE = "#111113";

export function Svg({
  viewBox,
  children,
  label,
  minWidth = 660,
}: {
  viewBox: string;
  children: React.ReactNode;
  label: string;
  /** Below this the mono labels stop being readable, so the figure scrolls. */
  minWidth?: number;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className="block h-auto w-full"
      style={{ minWidth }}
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

/** A run of hairline "text" rules. */
export function Rules({
  x,
  y,
  widths,
  gap = 12,
  color = LINE,
}: {
  x: number;
  y: number;
  widths: number[];
  gap?: number;
  color?: string;
}) {
  return (
    <>
      {widths.map((w, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * gap}
          width={w}
          height={4}
          rx={2}
          fill={color}
        />
      ))}
    </>
  );
}
