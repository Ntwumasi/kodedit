export type Capability = {
  index: string;
  title: string;
  body: string;
};

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "Applied research",
    body: "We study how AI behaves inside real clinical and business workflows — where it helps, where it misleads, and where a user quietly stops trusting it. What the lab finds goes directly into what we ship.",
  },
  {
    index: "02",
    title: "Product engineering",
    body: "We ship complete systems, not demos. Records, scheduling, permissions, billing, audit trails — the unglamorous nine-tenths that decides whether software survives contact with a working clinic.",
  },
  {
    index: "03",
    title: "Venture building",
    body: "We operate what we build. MedSys is not a client project we handed off. We run it, support it, and answer for it when a pharmacy queue stalls on a Tuesday morning.",
  },
];

export const STUDIO_MODEL = [
  {
    index: "01",
    title: "Research",
    body: "We spend time where the work happens before we design for it. For MedSys that meant weeks in clinic corridors watching how a paper folder actually moves between a front desk, a consulting room, and a dispensary.",
  },
  {
    index: "02",
    title: "Build",
    body: "We design and engineer the system end to end — interface, data model, offline behaviour, deployment. One team, no handoff between the people who studied the problem and the people who solve it.",
  },
  {
    index: "03",
    title: "Operate",
    body: "We run the venture in production. Support, iteration, and uptime stay with us, which keeps the research honest: every wrong assumption comes back as a support ticket.",
  },
];

export const PRINCIPLES = [
  "Research before code. Sit in the room where the work happens before designing for it.",
  "Ship the whole system. A demo that skips billing is not a product.",
  "Operate what we build. Ownership ends at uptime, not at handoff.",
  "Earn the automation. Every automatic action must be inspectable and reversible.",
  "Choose the unglamorous. The industries with the worst software have the most to gain.",
];
