/**
 * The Kodedit mark: KODEDIT in Morse, white on the brand red.
 *
 * Transcribed from the original brand asset (public/favicon.svg) into data so
 * the same geometry drives the inline SVG here, the favicon, the app icon, and
 * the OG card. Circles in the source are normalised to 2x2 rounded rects.
 */

/** [x, y, width] on a 32x32 grid; every mark is 2 tall with a 1 radius. */
export const MARKS: [number, number, number][] = [
  // K
  [3, 6, 5], [9, 6, 2], [13, 6, 5], [20, 6, 3], [25, 6, 2],
  // O
  [3, 11, 2], [7, 11, 5], [14, 11, 5], [21, 11, 2], [25, 11, 2],
  // D
  [3, 16, 5], [9, 16, 2], [12, 16, 2], [15, 16, 2], [20, 16, 2], [24, 16, 3],
  // E
  [3, 21, 2], [6, 21, 2], [9, 21, 2], [13, 21, 5], [20, 21, 5], [27, 21, 2],
];

export function Logo({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect width="32" height="32" rx="6" fill="#FE3641" />
      {MARKS.map(([x, y, w], i) => (
        <rect key={i} x={x} y={y} width={w} height="2" rx="1" fill="#FFFFFF" />
      ))}
    </svg>
  );
}
