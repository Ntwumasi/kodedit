"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Users,
  Award,
  BookOpen,
  Shield,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  return (
    <div className="relative">
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${sizes[size]} text-[#fe3641]`}>
        <rect x="2" y="6" width="4" height="2" rx="1" />
        <circle cx="8" cy="7" r="1" />
        <rect x="12" y="6" width="4" height="2" rx="1" />
        <rect x="18" y="6" width="2" height="2" rx="1" />
        <rect x="2" y="10" width="2" height="2" rx="1" />
        <rect x="6" y="10" width="4" height="2" rx="1" />
        <rect x="12" y="10" width="4" height="2" rx="1" />
        <rect x="18" y="10" width="2" height="2" rx="1" />
        <rect x="2" y="14" width="4" height="2" rx="1" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="12" cy="15" r="1" />
        <circle cx="16" cy="15" r="1" />
        <rect x="20" y="14" width="2" height="2" rx="1" />
        <rect x="2" y="18" width="2" height="2" rx="1" />
        <circle cx="6" cy="19" r="1" />
        <circle cx="10" cy="19" r="1" />
        <rect x="14" y="18" width="4" height="2" rx="1" />
      </svg>
      <div className={`absolute inset-0 ${sizes[size]} bg-[#fe3641] rounded-sm blur-sm animate-pulse opacity-30`} />
    </div>
  );
}

export default function AboutPage() {
  const team = [
    {
      name: "Team Member",
      role: "Founder & CEO",
      bio: "Former engineering lead with 10+ years building developer tools. Previously at [Company]. PhD in Computer Science focusing on program synthesis.",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Team Member",
      role: "CTO",
      bio: "ML researcher turned builder. Led AI initiatives at [Company]. Published researcher in code generation and program understanding.",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Team Member",
      role: "Head of Research",
      bio: "Former research scientist at [Lab]. Focus on trustworthy AI and explainability. Multiple patents in code analysis.",
      linkedin: "#",
      github: "#",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Full Lifecycle Thinking",
      desc: "We believe AI should assist the entire development process, not just code completion.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trustworthy AI",
      desc: "Explainable decisions, quality gates, and transparency are non-negotiable.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Developer Growth",
      desc: "AI should make developers better, not replace their learning and judgment.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Research-Driven",
      desc: "Every feature is grounded in rigorous research and validated through real-world use.",
    },
  ];

  const milestones = [
    { year: "2024", event: "Kodedit founded with mission to cover full development lifecycle" },
    { year: "2024", event: "Published research on AI code quality and developer trust" },
    { year: "2024", event: "Private beta launch with select enterprise partners" },
    { year: "2025", event: "SBIR Phase I application for workforce development research" },
  ];

  return (
    <div className="min-h-screen bg-[#171717] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#171717]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="md" />
            <span className="text-lg font-bold tracking-tight">Kodedit</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#features" className="text-zinc-300 hover:text-white transition-colors">Features</Link>
            <Link href="/#pricing" className="text-zinc-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/research" className="text-zinc-300 hover:text-white transition-colors">Research</Link>
            <Link href="/about" className="text-white font-medium">About</Link>
          </nav>
          <Link
            href="/#waitlist"
            className="rounded-full bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-5 py-2 text-sm font-medium"
          >
            Join Waitlist
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Building the future of{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                AI-assisted development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400">
              We started Kodedit because we saw a gap: AI coding tools were transforming how developers write code, but ignoring the 65-75% of development work that happens before and after.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-zinc-400 mb-4">
                To create AI development tools that cover the full software lifecycle with built-in quality, explainability, and trust that developers and enterprises demand.
              </p>
              <p className="text-zinc-400 mb-4">
                We believe AI should augment developer capabilities across requirements, planning, coding, testing, review, and maintenance not just autocomplete code snippets.
              </p>
              <p className="text-zinc-400">
                And we believe the developers using AI deserve to understand why it makes the suggestions it does.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value) => (
                <div key={value.title} className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#fe3641]/10 flex items-center justify-center text-[#fe3641] mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-xs text-zinc-400">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Engineers and researchers with deep expertise in developer tools, AI/ML, and building products developers love.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fe3641]/20 to-[#ff4757]/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-[#fe3641]" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-[#fe3641] text-sm mb-3">{member.role}</p>
                <p className="text-sm text-zinc-400 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.github} className="text-zinc-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-zinc-500 text-sm mt-8"
          >
            Interested in joining? Reach out at <a href="mailto:careers@kodedit.com" className="text-[#fe3641] hover:underline">careers@kodedit.com</a>
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#fe3641]" />
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-white/10" />}
                </div>
                <div className="pb-6">
                  <span className="text-[#fe3641] text-sm font-medium">{milestone.year}</span>
                  <p className="text-zinc-300">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Alignment */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#fe3641]/30 bg-[#fe3641]/10 text-[#fe3641] text-sm font-medium mb-4">
                <Award className="h-4 w-4" />
                Federal R&D
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Aligned with national priorities
              </h2>
              <p className="text-zinc-400 mb-4">
                Our research directly supports national goals for AI competitiveness, workforce development, and trustworthy AI systems.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#fe3641] mt-1">•</span>
                  <span><strong className="text-white">AI-Ready America Initiative:</strong> Tools that accelerate developer skill acquisition and AI literacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#fe3641] mt-1">•</span>
                  <span><strong className="text-white">NIST Trustworthy AI:</strong> Explainable, transparent, and accountable AI systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#fe3641] mt-1">•</span>
                  <span><strong className="text-white">Workforce Development:</strong> Closing the AI skills gap in software development</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="font-semibold text-lg mb-4">Research Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "Full-lifecycle AI development assistance",
                  "Quality assurance for AI-generated code",
                  "Explainable AI for developer tools",
                  "AI-augmented developer education",
                  "Enterprise governance for AI coding",
                ].map((area, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#fe3641]" />
                    <span className="text-zinc-300">{area}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-[#fe3641] font-medium mt-6 hover:underline"
              >
                Read our research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Whether you are interested in partnership, investment, or just want to learn more about what we are building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@kodedit.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white font-semibold"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </a>
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Join Waitlist
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-sm text-zinc-400">© 2024 Kodedit, Inc.</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/research" className="text-zinc-400 hover:text-white transition-colors">Research</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
