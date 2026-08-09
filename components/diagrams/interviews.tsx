/**
 * Hairline schematic of an interviews.study session. Illustrative, not a
 * capture: the scores and prompt stand in for a real run.
 */

import { ACCENT, INK, INK_2, INK_3, LINE, LINE_BRIGHT, Rules, SURFACE, Svg } from "./base";

const NODES = [
  { label: "CLIENT", x: 32, y: 200 },
  { label: "API", x: 156, y: 200 },
  { label: "QUEUE", x: 280, y: 200 },
  { label: "STORE", x: 156, y: 266 },
];

const SCORES = [
  { label: "COMMUNICATION", pct: 0.82, weak: false },
  { label: "TRADE-OFFS", pct: 0.74, weak: false },
  { label: "SCALABILITY", pct: 0.9, weak: false },
  { label: "EDGE CASES", pct: 0.46, weak: true },
];

export function InterviewSession() {
  return (
    <Svg
      viewBox="0 0 800 430"
      label="Schematic of an interviews.study session: a system design prompt with a whiteboard of client, API, queue and store, an interviewer follow-up question, and a feedback panel scoring communication, trade-offs, scalability and edge cases."
    >
      {/* header */}
      <text x={32} y={36} fontSize={13.5} fill={INK} fontWeight={500}>
        System design — senior
      </text>
      <circle cx={694} cy={32} r={3} fill={ACCENT} className="pulse-dot" />
      <text x={706} y={36} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        IN SESSION
      </text>
      <line x1={0} y1={60} x2={800} y2={60} stroke={LINE} strokeWidth={1} />

      {/* column divider */}
      <line x1={500} y1={60} x2={500} y2={430} stroke={LINE} strokeWidth={1} />

      {/* prompt */}
      <text x={32} y={92} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        PROMPT
      </text>
      <Rules x={32} y={106} widths={[420, 356, 288]} gap={14} />

      {/* whiteboard */}
      <text x={32} y={178} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        WHITEBOARD
      </text>
      <line x1={128} y1={214} x2={156} y2={214} stroke={LINE_BRIGHT} strokeWidth={1} />
      <line x1={252} y1={214} x2={280} y2={214} stroke={LINE_BRIGHT} strokeWidth={1} />
      <line x1={204} y1={228} x2={204} y2={266} stroke={LINE_BRIGHT} strokeWidth={1} />
      {NODES.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width={96} height={28} rx={5} fill={SURFACE} stroke={LINE} />
          <text
            x={n.x + 48}
            y={n.y + 18}
            className="font-mono"
            fontSize={9}
            fill={INK_2}
            textAnchor="middle"
            letterSpacing="0.07em"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* interviewer follow-up */}
      <line x1={32} y1={324} x2={468} y2={324} stroke={LINE} strokeWidth={1} />
      <circle cx={35} cy={350} r={3} fill={ACCENT} />
      <text x={48} y={354} fontSize={11.5} fill={INK}>
        What happens when the queue backs up?
      </text>
      <Rules x={48} y={372} widths={[380, 300]} />

      {/* feedback */}
      <text x={532} y={92} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        FEEDBACK
      </text>
      {SCORES.map((s, i) => {
        const y = 116 + i * 44;
        return (
          <g key={s.label}>
            <text x={532} y={y} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.06em">
              {s.label}
            </text>
            <text
              x={768}
              y={y}
              className="font-mono"
              fontSize={9}
              fill={s.weak ? INK : INK_3}
              textAnchor="end"
            >
              {Math.round(s.pct * 100)}
            </text>
            <rect x={532} y={y + 9} width={236} height={3} rx={1.5} fill={LINE} />
            <rect
              x={532}
              y={y + 9}
              width={236 * s.pct}
              height={3}
              rx={1.5}
              fill={s.weak ? ACCENT : LINE_BRIGHT}
            />
          </g>
        );
      })}

      {/* study next */}
      <line x1={532} y1={306} x2={768} y2={306} stroke={LINE} strokeWidth={1} />
      <text x={532} y={332} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        STUDY NEXT
      </text>
      <Rules x={532} y={348} widths={[196, 164, 212]} gap={16} />
    </Svg>
  );
}
