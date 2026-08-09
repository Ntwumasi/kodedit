export const SITE = {
  name: "Kodedit",
  legalName: "Kodedit",
  domain: "kodedit.io",
  url: "https://kodedit.io",
  email: "hello@kodedit.io",
  location: "Remote",
  year: 2026,
  description:
    "Kodedit is an AI studio and venture lab. We research how intelligent systems behave in real workflows, then build and operate the software that runs them.",
} as const;

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { href: "https://x.com/kodedit", label: "X" },
  { href: "https://github.com/Ntwumasi", label: "GitHub" },
  { href: "https://www.linkedin.com/company/kodedit", label: "LinkedIn" },
] as const;

/** Hero thesis, split for the masked per-line reveal. */
export const HERO_LINES = [
  "An AI studio for",
  "the industries",
  "software forgot.",
] as const;

export const HERO_SUPPORT =
  "We research how intelligent systems behave inside real clinical and operational workflows, then design, build, and operate the systems that run them.";

/** Proof strip. Every figure here is structural, not a growth metric. */
export const PROOF = [
  { value: "7", label: "departments connected" },
  { value: "1", label: "EMR platform in production" },
  { value: "Voice-first", label: "consultation capture" },
  { value: "Offline-first", label: "built for unstable power" },
] as const;

export const ETHOS = {
  quote:
    "The best software problems left are in the industries nobody demos on stage.",
  support:
    "Clinics, pharmacies, freight yards, cooperatives. The work is harder, the users are less forgiving, and the outcome matters more than the launch.",
  founderNote:
    "Kodedit started from a narrow frustration: the software running clinics was worse than the software running coffee shops, and nobody seemed to find that strange. MedSys is the first answer. There will be others.",
  founderName: "Nokio Twumasi",
  founderRole: "Founder",
};

export const CTA = {
  headline: "Have a hard problem in an unglamorous industry?",
  sub: "Those are our favorite.",
};
