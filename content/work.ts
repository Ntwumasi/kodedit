export type Venture = {
  slug: string;
  index: string;
  name: string;
  domain?: string;
  status: "in production" | "in development";
  tagline: string;
  summary: string[];
  sector: string;
  year: string;
  href?: string;
};

export const VENTURES: Venture[] = [
  {
    slug: "medsys",
    index: "Venture 001",
    name: "MedSys",
    domain: "medsys.healthcare",
    status: "in production",
    tagline: "A complete EMR platform for clinics that still run on paper.",
    summary: [
      "Seven departments — front desk, doctor, nursing, laboratory, pharmacy, imaging, and billing — running on one record instead of seven paper trails.",
      "Voice dictation that structures a spoken consultation into a SOAP note, so a doctor can look at the patient instead of the keyboard.",
      "Offline-first by design: the clinic keeps working when the power and the network do not.",
    ],
    sector: "Healthcare",
    year: "2024 —",
    href: "/work/medsys",
  },
  {
    slug: "interviews-study",
    index: "Venture 002",
    name: "interviews.study",
    domain: "interviews.study",
    status: "in production",
    tagline: "AI mock interviews for software engineers.",
    summary: [
      "Three interview formats on one platform: coding with real-time execution, system design on an interactive whiteboard, and behavioural practice against the STAR framework.",
      "An interviewer that asks follow-up questions and probes the reasoning, rather than waiting quietly for a final answer.",
      "Feedback that scores the attempt, names the specific things to fix, and points at what to study next.",
    ],
    sector: "Developer education",
    year: "2026 —",
    href: "https://interviews.study",
  },
  {
    slug: "venture-003",
    index: "Venture 003",
    name: "Unannounced",
    status: "in development",
    tagline: "Supply and inventory for pharmacies without same-day resupply.",
    summary: [
      "Research in progress with dispensaries already running MedSys.",
      "The question we are answering first: what does a stock-out actually cost a clinic that cannot reorder same-day?",
    ],
    sector: "Health logistics",
    year: "2026 —",
  },
];

export const MEDSYS = VENTURES[0];
export const INTERVIEWS = VENTURES[1];

/** Department-by-department breakdown for the case study. */
export type Department = {
  n: string;
  name: string;
  role: string;
  detail: string;
};

export const DEPARTMENTS: Department[] = [
  {
    n: "01",
    name: "Front desk",
    role: "Registration and queue",
    detail:
      "One search field resolves a returning patient by name, phone, or folder number. New registrations take under a minute and issue the queue token the rest of the clinic works from.",
  },
  {
    n: "02",
    name: "Doctor",
    role: "Consultation and orders",
    detail:
      "The consultation screen holds history, vitals, and active medication in one view. Orders for laboratory, imaging, and pharmacy are placed here and appear immediately in those queues.",
  },
  {
    n: "03",
    name: "Nursing",
    role: "Vitals and observations",
    detail:
      "Vitals recorded at triage populate the doctor's view before the patient sits down. Observation notes are timestamped and attributed without anyone typing a name.",
  },
  {
    n: "04",
    name: "Laboratory",
    role: "Specimens and results",
    detail:
      "Requests arrive as a worklist, not a paper slip. Results attach to the order that generated them, which closes the loop that paper systems lose most often.",
  },
  {
    n: "05",
    name: "Pharmacy",
    role: "Dispensing and stock",
    detail:
      "The dispensing queue shows what was prescribed, what is in stock, and what has already been collected. Interaction and dosage checks run before the drug leaves the counter.",
  },
  {
    n: "06",
    name: "Imaging",
    role: "Studies and reports",
    detail:
      "Imaging requests carry the clinical question with them, so the reporting radiographer is not guessing at what the referring doctor wanted to know.",
  },
  {
    n: "07",
    name: "Billing",
    role: "Charges and insurance",
    detail:
      "Charges accumulate from the orders themselves rather than being reconstructed at the end. Insurance and cash paths are handled in the same ledger.",
  },
];

export const INTELLIGENCE = [
  {
    n: "01",
    title: "Voice dictation that structures SOAP notes",
    body: "A doctor speaks the consultation as they would to a colleague. The system separates subjective, objective, assessment, and plan into the correct fields, and leaves the raw transcript attached so nothing is lost in the structuring. The doctor edits rather than types.",
  },
  {
    n: "02",
    title: "Drug-interaction alerts with a severity floor",
    body: "Interaction checks run at prescribing and again at dispensing. Only interactions that would change the prescription are allowed to interrupt; the rest are recorded to the chart without a modal. Alert fatigue is treated as a design failure, not a user problem.",
  },
  {
    n: "03",
    title: "Dosage verification against patient context",
    body: "Dosages are checked against weight, age, renal function where recorded, and the drug's own limits. When the system disagrees with a prescription it says which input drove the objection, so the prescriber can overrule it on the record.",
  },
];
