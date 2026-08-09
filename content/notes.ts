export type Note = {
  slug: string;
  index: string;
  title: string;
  abstract: string;
  date: string; // ISO
  displayDate: string;
  readTime: string;
};

/** Newest first. The index on /lab and the home page both read from here. */
export const NOTES: Note[] = [
  {
    slug: "why-voice-beats-forms",
    index: "N-003",
    title: "Why voice beats forms at the point of care",
    abstract:
      "A consultation is narrated before it is recorded. Structuring speech after the fact beats asking a doctor to think in database fields.",
    date: "2026-07-22",
    displayDate: "22 Jul 2026",
    readTime: "4 min",
  },
  {
    slug: "alerts-clinicians-dont-ignore",
    index: "N-002",
    title: "Designing drug-interaction alerts clinicians don't ignore",
    abstract:
      "Most interaction warnings are dismissed without being read. The fix is a severity floor, not a louder modal.",
    date: "2026-05-14",
    displayDate: "14 May 2026",
    readTime: "4 min",
  },
  {
    slug: "offline-first-clinics",
    index: "N-001",
    title: "Offline-first architecture for clinics with unstable power",
    abstract:
      "When the grid and the network both fail weekly, the network has to be an optimisation rather than a requirement.",
    date: "2026-03-03",
    displayDate: "3 Mar 2026",
    readTime: "5 min",
  },
];

export function getNote(slug: string): Note | undefined {
  return NOTES.find((n) => n.slug === slug);
}
