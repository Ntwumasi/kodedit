/**
 * Hairline line-diagrams of the MedSys interfaces. Swap for real product
 * captures by replacing the child of the surrounding <BrowserFrame>.
 */

import { ACCENT, INK, INK_2, INK_3, LINE, LINE_BRIGHT, Rules, SURFACE, Svg } from "./base";

/* ------------------------------------------------------------------ */
/* fig. 01 — consultation with voice dictation                         */
/* ------------------------------------------------------------------ */

const WAVE = [
  4, 9, 6, 14, 8, 18, 11, 22, 7, 16, 10, 25, 13, 19, 6, 12, 9, 21, 15, 8, 5,
  11, 17, 23, 10, 14, 7, 19, 12, 6, 16, 9, 20, 13, 8, 11, 5, 15, 7, 10,
];

const SOAP = [
  { k: "S", title: "Subjective", widths: [430, 360] },
  { k: "O", title: "Objective", widths: [380, 300] },
  { k: "A", title: "Assessment", widths: [340] },
  { k: "P", title: "Plan", widths: [400, 260] },
];

export function ConsultationDiagram() {
  return (
    <Svg
      viewBox="0 0 800 500"
      label="Schematic of the MedSys consultation screen: a patient queue rail, a note structured into subjective, objective, assessment and plan sections, and a dictation bar."
    >
      {/* queue rail */}
      <line x1={168} y1={0} x2={168} y2={500} stroke={LINE} strokeWidth={1} />
      <text x={24} y={32} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        QUEUE · 12
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          {i === 0 ? <circle cx={26} cy={62 + i * 38} r={3} fill={ACCENT} /> : null}
          <rect x={38} y={58 + i * 38} width={i === 0 ? 82 : 70} height={5} rx={2} fill={i === 0 ? LINE_BRIGHT : LINE} />
          <rect x={38} y={69 + i * 38} width={46} height={3} rx={1.5} fill={LINE} />
        </g>
      ))}

      {/* header */}
      <line x1={168} y1={76} x2={800} y2={76} stroke={LINE} strokeWidth={1} />
      <text x={196} y={40} fontSize={14} fill={INK} fontWeight={500}>
        Patient · folder 04812
      </text>
      <text x={196} y={60} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.06em">
        RETURNING · LAST SEEN 14 JUN
      </text>
      <circle cx={664} cy={38} r={3} fill={ACCENT} />
      <text x={676} y={42} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        IN CONSULT
      </text>

      {/* SOAP blocks */}
      {SOAP.map((b, i) => {
        const y = 104 + i * 82;
        return (
          <g key={b.k}>
            <rect x={196} y={y} width={20} height={20} rx={3} fill={SURFACE} stroke={LINE} />
            <text x={206} y={y + 14} className="font-mono" fontSize={10} fill={INK_2} textAnchor="middle">
              {b.k}
            </text>
            <text x={230} y={y + 14} fontSize={11.5} fill={INK} fontWeight={500}>
              {b.title}
            </text>
            <Rules x={230} y={y + 32} widths={b.widths} />
          </g>
        );
      })}

      {/* dictation bar */}
      <line x1={168} y1={452} x2={800} y2={452} stroke={LINE} strokeWidth={1} />
      <circle cx={200} cy={476} r={4} fill={ACCENT} />
      <text x={214} y={480} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.06em">
        DICTATING 0:42
      </text>
      {WAVE.map((h, i) => (
        <rect
          key={i}
          x={352 + i * 11}
          y={476 - h / 2}
          width={2}
          height={h}
          rx={1}
          fill={i < 26 ? LINE_BRIGHT : LINE}
        />
      ))}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* fig. 02 — seven departments, one record                             */
/* ------------------------------------------------------------------ */

const NODES = [
  { label: "FRONT DESK", x: 400, y: 70 },
  { label: "DOCTOR", x: 634, y: 127 },
  { label: "LABORATORY", x: 692, y: 253 },
  { label: "PHARMACY", x: 530, y: 355 },
  { label: "IMAGING", x: 270, y: 355 },
  { label: "BILLING", x: 108, y: 253 },
  { label: "NURSING", x: 166, y: 127 },
];

export function DepartmentGraph() {
  return (
    <Svg
      viewBox="0 0 800 440"
      label="Diagram: seven clinic departments — front desk, doctor, laboratory, pharmacy, imaging, billing and nursing — all connected to a single shared patient record at the centre."
    >
      {NODES.map((n) => (
        <line
          key={n.label}
          x1={400}
          y1={220}
          x2={n.x}
          y2={n.y}
          stroke={LINE}
          strokeWidth={1}
        />
      ))}

      {/* centre */}
      <rect x={300} y={194} width={200} height={52} rx={6} fill={SURFACE} stroke={LINE_BRIGHT} />
      <circle cx={324} cy={220} r={3} fill={ACCENT} className="pulse-dot" />
      <text x={340} y={224} className="font-mono" fontSize={10} fill={INK} letterSpacing="0.08em">
        ONE PATIENT RECORD
      </text>

      {NODES.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 58}
            y={n.y - 15}
            width={116}
            height={30}
            rx={5}
            fill={SURFACE}
            stroke={LINE}
          />
          <text
            x={n.x}
            y={n.y + 4}
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
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* fig. 03 — pharmacy dispensing queue                                 */
/* ------------------------------------------------------------------ */

const QUEUE = [
  { drug: "Amoxicillin 500 mg", qty: "21", status: "DISPENSED", flag: false },
  { drug: "Metformin 850 mg", qty: "60", status: "DISPENSED", flag: false },
  { drug: "Warfarin 5 mg", qty: "28", status: "HELD — CHECK", flag: true },
  { drug: "Artemether / Lumefantrine", qty: "24", status: "CHECKING", flag: false },
  { drug: "Omeprazole 20 mg", qty: "14", status: "READY", flag: false },
  { drug: "Paracetamol 1 g", qty: "30", status: "READY", flag: false },
];

export function PharmacyQueue() {
  return (
    <Svg
      viewBox="0 0 800 440"
      label="Schematic of the MedSys pharmacy dispensing queue: rows of prescribed drugs with quantity, stock and dispensing status, one row held for an interaction check."
    >
      {/* header */}
      <text x={32} y={36} fontSize={14} fill={INK} fontWeight={500}>
        Dispensing queue
      </text>
      <text x={768} y={36} className="font-mono" fontSize={9} fill={INK_3} textAnchor="end" letterSpacing="0.08em">
        6 WAITING
      </text>
      <line x1={0} y1={60} x2={800} y2={60} stroke={LINE} strokeWidth={1} />

      {/* column labels */}
      {[
        { t: "#", x: 32 },
        { t: "PATIENT", x: 72 },
        { t: "DRUG", x: 232 },
        { t: "QTY", x: 512 },
        { t: "STATUS", x: 580 },
      ].map((c) => (
        <text key={c.t} x={c.x} y={84} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
          {c.t}
        </text>
      ))}
      <line x1={0} y1={100} x2={800} y2={100} stroke={LINE} strokeWidth={1} />

      {QUEUE.map((r, i) => {
        const y = 100 + i * 56;
        return (
          <g key={r.drug}>
            {i > 0 ? <line x1={0} y1={y} x2={800} y2={y} stroke={LINE} strokeWidth={1} /> : null}
            <text x={32} y={y + 32} className="font-mono" fontSize={9.5} fill={INK_3}>
              {String(i + 1).padStart(2, "0")}
            </text>
            <rect x={72} y={y + 24} width={92} height={5} rx={2} fill={LINE_BRIGHT} />
            <rect x={72} y={y + 35} width={54} height={3} rx={1.5} fill={LINE} />
            <text x={232} y={y + 32} fontSize={11.5} fill={r.flag ? INK : INK_2}>
              {r.drug}
            </text>
            <text x={512} y={y + 32} className="font-mono" fontSize={10} fill={INK_2}>
              {r.qty}
            </text>
            {r.flag ? <circle cx={588} cy={y + 28} r={3} fill={ACCENT} /> : null}
            <text
              x={r.flag ? 600 : 580}
              y={y + 32}
              className="font-mono"
              fontSize={9}
              fill={r.flag ? INK : INK_3}
              letterSpacing="0.07em"
            >
              {r.status}
            </text>
          </g>
        );
      })}
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* fig. 04 — the three alert channels                                  */
/* ------------------------------------------------------------------ */

export function AlertChannels() {
  return (
    <Svg
      viewBox="0 0 800 400"
      label="Diagram of three alert channels: interrupt, which blocks and proposes an action; inline, which renders beside the drug without dismissal; and chart only, which is recorded but never surfaced while prescribing."
    >
      {/* Interrupt */}
      <text x={32} y={28} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        01 — INTERRUPT
      </text>
      <rect x={32} y={44} width={236} height={168} rx={6} fill={SURFACE} stroke={LINE_BRIGHT} />
      <circle cx={56} cy={72} r={3.5} fill={ACCENT} />
      <text x={70} y={76} fontSize={11} fill={INK} fontWeight={500}>
        Raises warfarin effect
      </text>
      <Rules x={56} y={96} widths={[188, 160, 120]} color={LINE} />
      <rect x={56} y={158} width={94} height={26} rx={4} fill="none" stroke={LINE_BRIGHT} />
      <text x={103} y={175} className="font-mono" fontSize={9} fill={INK_2} textAnchor="middle" letterSpacing="0.06em">
        SUBSTITUTE
      </text>
      <rect x={160} y={158} width={84} height={26} rx={4} fill="none" stroke={LINE} />
      <text x={202} y={175} className="font-mono" fontSize={9} fill={INK_3} textAnchor="middle" letterSpacing="0.06em">
        OVERRIDE
      </text>
      <text x={32} y={240} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.04em">
        BLOCKS · PROPOSES AN ACTION
      </text>

      {/* Inline */}
      <text x={282} y={28} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        02 — INLINE
      </text>
      <rect x={282} y={44} width={236} height={168} rx={6} fill={SURFACE} stroke={LINE} />
      <rect x={306} y={68} width={104} height={5} rx={2} fill={LINE_BRIGHT} />
      <line x1={306} y1={90} x2={494} y2={90} stroke={LINE} strokeWidth={1} />
      <text x={306} y={112} fontSize={10.5} fill={INK_2}>
        Monitor INR more often
      </text>
      <Rules x={306} y={128} widths={[140]} color={LINE} />
      <line x1={306} y1={156} x2={494} y2={156} stroke={LINE} strokeWidth={1} />
      <rect x={306} y={174} width={82} height={5} rx={2} fill={LINE} />
      <text x={282} y={240} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.04em">
        NO DISMISSAL REQUIRED
      </text>

      {/* Chart only */}
      <text x={532} y={28} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        03 — CHART ONLY
      </text>
      <rect x={532} y={44} width={236} height={168} rx={6} fill={SURFACE} stroke={LINE} strokeDasharray="3 3" />
      <Rules x={556} y={72} widths={[172, 140, 188, 116]} gap={16} color={LINE} />
      <text x={532} y={240} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.04em">
        RECORDED · NEVER SURFACED
      </text>

      {/* severity floor */}
      <line x1={32} y1={296} x2={768} y2={296} stroke={LINE_BRIGHT} strokeWidth={1} strokeDasharray="4 4" />
      <text x={32} y={286} className="font-mono" fontSize={9} fill={INK_2} letterSpacing="0.08em">
        SEVERITY FLOOR
      </text>
      <text x={32} y={324} fontSize={11} fill={INK_3}>
        Below the floor, an alert may be recorded but may not interrupt.
      </text>
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* fig. 05 — offline writes as commuting deltas                        */
/* ------------------------------------------------------------------ */

export function SyncDiagram() {
  return (
    <Svg
      viewBox="0 0 800 320"
      label="Diagram: two offline devices each write a stock delta, minus six and minus four. The deltas queue and merge on the server in either order to the same result of thirty units."
    >
      <defs>
        <marker id="kd-arrow" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={6} markerHeight={6} orient="auto">
          <path d="M0,0 L8,4 L0,8" fill="none" stroke={LINE_BRIGHT} strokeWidth={1} />
        </marker>
      </defs>

      {/* devices */}
      {[
        { label: "DEVICE A", delta: "stock −6", y: 40 },
        { label: "DEVICE B", delta: "stock −4", y: 176 },
      ].map((d) => (
        <g key={d.label}>
          <rect x={32} y={d.y} width={184} height={104} rx={6} fill={SURFACE} stroke={LINE} />
          <text x={56} y={d.y + 30} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
            {d.label}
          </text>
          <text x={56} y={d.y + 62} fontSize={13} fill={INK} fontWeight={500}>
            {d.delta}
          </text>
          <circle cx={59} cy={d.y + 82} r={3} fill={ACCENT} />
          <text x={72} y={d.y + 86} className="font-mono" fontSize={8.5} fill={INK_3} letterSpacing="0.06em">
            OFFLINE
          </text>
          <line
            x1={216}
            y1={d.y + 52}
            x2={316}
            y2={d.y + 52}
            stroke={LINE_BRIGHT}
            strokeWidth={1}
            markerEnd="url(#kd-arrow)"
          />
        </g>
      ))}

      {/* queue */}
      <rect x={324} y={40} width={148} height={240} rx={6} fill={SURFACE} stroke={LINE} strokeDasharray="3 3" />
      <text x={398} y={70} className="font-mono" fontSize={9} fill={INK_3} textAnchor="middle" letterSpacing="0.08em">
        PERSISTED QUEUE
      </text>
      <text x={398} y={152} className="font-mono" fontSize={11} fill={INK_2} textAnchor="middle">
        −6 · −4
      </text>
      <text x={398} y={182} className="font-mono" fontSize={9} fill={INK_3} textAnchor="middle" letterSpacing="0.05em">
        ORDER IRRELEVANT
      </text>

      <line x1={472} y1={160} x2={572} y2={160} stroke={LINE_BRIGHT} strokeWidth={1} markerEnd="url(#kd-arrow)" />

      {/* server */}
      <rect x={580} y={108} width={188} height={104} rx={6} fill={SURFACE} stroke={LINE_BRIGHT} />
      <text x={604} y={138} className="font-mono" fontSize={9} fill={INK_3} letterSpacing="0.08em">
        LEDGER
      </text>
      <text x={604} y={172} fontSize={15} fill={INK} fontWeight={500}>
        40 − 10 = 30
      </text>
      <text x={604} y={194} className="font-mono" fontSize={8.5} fill={INK_3} letterSpacing="0.05em">
        NO MERGE REQUIRED
      </text>
    </Svg>
  );
}
