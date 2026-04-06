"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Code2,
  CheckCircle2,
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

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Full Lifecycle AI Assistance",
      problem: "Current AI coding tools focus on code generation (25-35% of dev time), leaving requirements, planning, testing, and maintenance unaddressed.",
      approach: "We are developing models that understand the full context of software projects, from initial requirements documents through deployed codebases, enabling AI assistance at every stage.",
      impact: "Potential to improve overall development productivity by 40-60%, not just coding speed.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI Code Quality Assurance",
      problem: "AI-generated code has ~9% more bugs and 1.7x higher issue counts. 46% of developers do not trust AI outputs.",
      approach: "Multi-stage quality gates that analyze AI suggestions before they reach the codebase. Combines static analysis, learned patterns from high-quality code, and real-time security scanning.",
      impact: "Aim to reduce AI-introduced defects by 80%+ while maintaining productivity gains.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Explainable AI for Development",
      problem: "Black-box AI suggestions erode developer trust and prevent learning. Developers accept code they do not understand.",
      approach: "Explanation generation that shows the reasoning behind suggestions: why this approach, what tradeoffs were considered, and what alternatives exist.",
      impact: "Building developer trust while accelerating skill acquisition. Making AI a teaching tool, not a crutch.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "AI-Augmented Developer Education",
      problem: "Traditional learning-to-code paths do not prepare developers for AI-augmented workflows. No dominant platform at the intersection of education and AI coding.",
      approach: "Learning modes that adapt AI assistance levels, provide contextual explanations, and guide developers through increasingly complex challenges.",
      impact: "Accelerating junior-to-senior developer progression. Expanding the AI-ready workforce.",
    },
  ];

  const marketData = [
    { stat: "$12.8B+", label: "AI developer tools market (2026)" },
    { stat: "17-27%", label: "Annual growth rate (CAGR)" },
    { stat: "84%", label: "Developers using or planning to use AI tools" },
    { stat: "41%", label: "Code now written with AI assistance" },
  ];

  const federalAlignment = [
    {
      initiative: "AI-Ready America Initiative",
      funding: "$224M+",
      alignment: "Tools that accelerate AI literacy and applied skills for the development workforce",
    },
    {
      initiative: "NIST Trustworthy AI Standards",
      funding: "$55M",
      alignment: "Explainable, transparent, and accountable AI systems with built-in governance",
    },
    {
      initiative: "NSF AI Education Expansion",
      funding: "Ongoing",
      alignment: "K-12 through professional developer education with AI assistance",
    },
    {
      initiative: "Future of AI Innovation Act",
      funding: "TBD",
      alignment: "Advancing AI standards and competitiveness through practical tooling",
    },
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
            <Link href="/research" className="text-white font-medium">Research</Link>
            <Link href="/about" className="text-zinc-300 hover:text-white transition-colors">About</Link>
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
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#fe3641]/30 bg-[#fe3641]/10 text-[#fe3641] text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Research & Technology
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Advancing{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                trustworthy AI
              </span>{" "}
              for software development
            </h1>
            <p className="text-lg md:text-xl text-zinc-400">
              Our research addresses critical gaps in AI-assisted development: full lifecycle coverage, code quality assurance, explainability, and developer education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Context */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The AI Developer Tools Landscape</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A rapidly growing market with significant gaps in full-lifecycle coverage and trustworthy AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {marketData.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#fe3641] mb-2">{item.stat}</div>
                <div className="text-sm text-zinc-400">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/5"
          >
            <h3 className="font-semibold text-lg mb-4">Current Market Gaps</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#fe3641] font-medium mb-2">Lifecycle Coverage Gap</h4>
                <p className="text-sm text-zinc-400">
                  Existing tools (Copilot, Cursor, Claude Code) excel at code completion, but code writing is only 25-35% of development time. Requirements, planning, testing, QA, and maintenance represent 65-75% of work that AI barely touches.
                </p>
              </div>
              <div>
                <h4 className="text-[#fe3641] font-medium mb-2">Trust & Quality Gap</h4>
                <p className="text-sm text-zinc-400">
                  46% of developers do not trust AI-generated code. Studies show ~9% more bugs in AI-assisted projects. No dominant solution for quality gates, governance, or explainability in AI coding tools.
                </p>
              </div>
              <div>
                <h4 className="text-[#fe3641] font-medium mb-2">Education Gap</h4>
                <p className="text-sm text-zinc-400">
                  No dominant platform at the intersection of learning to code and AI coding tools. Federal priority: AI-Ready America ($224M+) focuses on AI literacy and workforce development.
                </p>
              </div>
              <div>
                <h4 className="text-[#fe3641] font-medium mb-2">Enterprise Governance Gap</h4>
                <p className="text-sm text-zinc-400">
                  Large organizations need audit trails, policy enforcement, and compliance controls. Current tools offer limited enterprise governance capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Research Focus Areas</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our technical approach addresses the gaps that limit current AI coding tools.
            </p>
          </motion.div>

          <div className="space-y-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#fe3641]/10 flex items-center justify-center text-[#fe3641] flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{area.title}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-[#fe3641] text-sm font-medium mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" /> Problem
                    </h4>
                    <p className="text-sm text-zinc-400">{area.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[#fe3641] text-sm font-medium mb-2 flex items-center gap-2">
                      <Code2 className="h-4 w-4" /> Our Approach
                    </h4>
                    <p className="text-sm text-zinc-400">{area.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-[#fe3641] text-sm font-medium mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" /> Expected Impact
                    </h4>
                    <p className="text-sm text-zinc-400">{area.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Innovation */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Technical Innovation</h2>
              <p className="text-zinc-400 mb-6">
                Our approach combines advances in program synthesis, code understanding, and explainable AI to create a fundamentally different development experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Multi-modal understanding of code, documentation, and requirements",
                  "Hierarchical planning from high-level goals to implementation details",
                  "Quality-aware generation with built-in verification",
                  "Explanation synthesis that communicates AI reasoning to developers",
                  "Adaptive learning that personalizes to developer skill levels",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#fe3641] mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-[#171717]"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#fe3641]" />
                Differentiation from Existing Tools
              </h3>
              <div className="space-y-4">
                {[
                  { feature: "Requirements analysis", us: true, others: false },
                  { feature: "Implementation planning", us: true, others: false },
                  { feature: "Code generation", us: true, others: true },
                  { feature: "Automated testing", us: true, others: "Limited" },
                  { feature: "Quality gates", us: true, others: false },
                  { feature: "Explainable AI", us: true, others: false },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-sm text-zinc-300">{row.feature}</span>
                    <div className="flex gap-8">
                      <span className="text-sm">
                        {row.us ? (
                          <span className="text-[#fe3641]">Kodedit</span>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </span>
                      <span className="text-sm w-16 text-right">
                        {row.others === true ? (
                          <span className="text-zinc-400">Others</span>
                        ) : row.others === false ? (
                          <span className="text-zinc-600">—</span>
                        ) : (
                          <span className="text-zinc-500">{row.others}</span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Federal Alignment */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Alignment with Federal Priorities</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our research directly supports national goals for AI competitiveness, workforce development, and trustworthy AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {federalAlignment.map((item, i) => (
              <motion.div
                key={item.initiative}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold">{item.initiative}</h3>
                  <span className="text-[#fe3641] text-sm font-medium">{item.funding}</span>
                </div>
                <p className="text-sm text-zinc-400">{item.alignment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications / Papers placeholder */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Publications & Insights</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We publish our research and share insights with the developer community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Full Lifecycle Gap in AI Coding Tools",
                type: "Technical Report",
                date: "2024",
                desc: "Analysis of where current AI tools fall short and the opportunity for full-lifecycle assistance.",
              },
              {
                title: "Quality Gates for AI-Generated Code",
                type: "Research Paper",
                date: "2024",
                desc: "Our approach to catching defects before AI-generated code reaches your codebase.",
              },
              {
                title: "Explainable AI for Developer Trust",
                type: "Blog Post",
                date: "2024",
                desc: "Why transparency in AI reasoning is essential for developer adoption and learning.",
              },
            ].map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#fe3641]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-4 w-4 text-[#fe3641]" />
                  <span className="text-xs text-zinc-500">{paper.type} • {paper.date}</span>
                </div>
                <h3 className="font-semibold mb-2">{paper.title}</h3>
                <p className="text-sm text-zinc-400 mb-4">{paper.desc}</p>
                <span className="text-[#fe3641] text-sm font-medium">Coming soon</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner with us</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              We are looking for research partners, pilot customers, and collaborators who share our vision for trustworthy AI development tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:research@kodedit.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white font-semibold"
              >
                Research Partnerships
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Join Waitlist
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
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
