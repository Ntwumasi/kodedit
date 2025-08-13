"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  LineChart,
  PlugZap,
  Workflow,
  CheckCircle2,
  Sparkles,
  Star,
  Users,
  Clock,
  Shield,
} from "lucide-react";

const VIDEO_SRC = "/video/hero.mp4";
const POSTER_IMG = "/preview.png";
const CALENDLY_LINK = "https://calendly.com/your-handle/ai-strategy";

export default function KodeditLanding() {
  const [videoComplete, setVideoComplete] = useState(false);

  const handleVideoComplete = useCallback(() => {
    setVideoComplete(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white overflow-x-hidden">
      {!videoComplete && (
        <IntroVideo onDone={handleVideoComplete} />
      )}
      
      {videoComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />
          <Hero />
          <TrustBar />
          <Services />
          <Outcomes />
          <Packages />
          <LeadForm />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

/* ======================= Intro Video ======================= */

function IntroVideo({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Respect reduced motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (prefersReduced) onDone();
    }
  }, [onDone]);



  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none"
        src={VIDEO_SRC}
        poster={POSTER_IMG}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onDone}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-20 h-full flex items-start justify-between p-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <Sparkles className="h-5 w-5 text-[#fe3641]" />
            <div className="absolute inset-0 h-5 w-5 bg-[#fe3641] rounded-full blur-sm animate-pulse opacity-30" />
          </div>
          <span className="text-sm tracking-tight font-medium">Kodedit</span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDone}
          className="rounded-full border border-white/20 bg-black/40 backdrop-blur-xl px-5 py-2.5 text-sm font-medium hover:bg-black/50 hover:border-white/30 transition-all duration-300"
        >
          Skip intro
        </motion.button>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
    </section>
  );
}

/* ======================= Header ======================= */

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/10' 
          : 'backdrop-blur-sm bg-[#0a0a0a]/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="h-5 w-5 text-[#fe3641]" />
            <div className="absolute inset-0 h-5 w-5 bg-[#fe3641] rounded-full blur-sm animate-pulse opacity-30" />
          </div>
          <span className="text-lg font-bold tracking-tight">Kodedit</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-zinc-300 hover:text-white transition-colors relative group">
            Services
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#outcomes" className="text-zinc-300 hover:text-white transition-colors relative group">
            Outcomes
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#packages" className="text-zinc-300 hover:text-white transition-colors relative group">
            Packages
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors relative group">
            Contact
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={CALENDLY_LINK}
            target="_blank"
            rel="noreferrer"
            className="relative rounded-full bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-5 py-2.5 font-medium overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff4757] to-[#fe3641] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Book a Strategy Call</span>
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}

/* ======================= Hero ======================= */

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#fe3641]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#fe3641]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 h-[100dvh] flex items-center"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <span className="inline-flex h-8 items-center rounded-full border border-[#fe3641]/30 bg-[#fe3641]/10 px-4 text-sm font-medium text-[#fe3641] backdrop-blur">
                AI Studio
              </span>
              <span className="text-sm text-white/60 font-medium tracking-wide">Automation • Agents • Analytics</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Ship AI faster.{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                Unlock real ROI in weeks.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed"
            >
              We design, build, and run practical AI systems—chatbots, automations, and custom integrations—that save time and drive revenue.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(254, 54, 65, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-8 py-4 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book a Strategy Call 
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#fe3641] bg-[#fe3641]/10 px-8 py-4 text-[#fe3641] font-bold text-lg backdrop-blur hover:bg-[#fe3641]/20 transition-all duration-300"
              >
                Explore Services
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { icon: Clock, text: "Avg. 30–60 days to value" },
                { icon: Shield, text: "Security-first build" },
                { icon: Star, text: "Fixed-scope or retainer" },
                { icon: Users, text: "US-based engineering" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div 
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-zinc-300 bg-white/5 rounded-xl px-4 py-3 backdrop-blur border border-white/10"
                >
                  <Icon className="h-4 w-4 text-[#fe3641]" />
                  <span className="font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ======================= Trust Bar ======================= */

function TrustBar() {
  const logos = ["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"];
  
  return (
    <section className="bg-[#0a0a0a] border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-zinc-400 text-sm font-medium">Trusted by teams who value speed and safety</p>
          
          <div className="mt-8 relative overflow-hidden">
            <motion.div 
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 w-[200%]"
            >
              {[...logos, ...logos].map((name, i) => (
                <div key={i} className="flex-shrink-0 h-12 w-32 rounded-xl bg-gradient-to-r from-white/5 to-white/10 flex items-center justify-center text-xs font-medium text-zinc-400 border border-white/10">
                  {name}
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================= Services ======================= */

function Services() {
  const items = [
    {
      icon: <Bot className="h-8 w-8 text-[#fe3641]" />,
      title: "AI Agents & Chatbots",
      desc: "Lead capture, support, and internal copilots with retrieval + tools. Reduce support load and unlock self‑serve sales.",
      bullets: ["RAG on your docs", "CRM + Slack integrations", "Guardrails & analytics"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Workflow className="h-8 w-8 text-[#fe3641]" />,
      title: "Automation & Workflows",
      desc: "Replace repetitive tasks with LLM‑driven workflows that read, write, and decide—safely.",
      bullets: ["Email & ticket triage", "Back‑office ops", "Human‑in-the-loop"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#fe3641]" />,
      title: "Data & Insights",
      desc: "Turn scattered data into dashboards and plain‑English insights. Decisions, not dashboards for dashboard's sake.",
      bullets: ["ETL + warehousing", "BI visualization", "KPI alerting"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <PlugZap className="h-8 w-8 text-[#fe3641]" />,
      title: "Custom Integrations",
      desc: "We wire AI into your stack—Shopify, HubSpot, Zendesk, Airtable, Notion, Stripe, Postgres, and more.",
      bullets: ["Production‑grade APIs", "Observability", "Security reviews"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Services that <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">pay for themselves</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Start small, ship fast, and scale with confidence. Fixed‑scope pilots in 2–4 weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#fe3641]/10`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="rounded-2xl bg-[#fe3641]/10 p-4 border border-[#fe3641]/20">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-zinc-300 mb-6 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-sm text-zinc-300">
                          <CheckCircle2 className="h-5 w-5 text-[#fe3641] flex-shrink-0" />
                          <span className="font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Outcomes ======================= */

function Outcomes() {
  const stats = [
    { label: "Support deflection", value: "30–60%", icon: Users },
    { label: "Lead response time", value: "< 1 min", icon: Clock },
    { label: "Ops time saved", value: "10–20 hrs/week", icon: LineChart },
    { label: "Pilot timeline", value: "2–4 weeks", icon: CheckCircle2 },
  ];

  const techStack = ["Vercel", "Next.js", "TypeScript", "Postgres", "Stripe", "Supabase", "OpenAI", "Anthropic", "Pinecone"];

  return (
    <section id="outcomes" className="relative bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Clear outcomes, <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">fast timelines</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
              We prioritise measurable ROI: faster responses, fewer tickets, more qualified leads, and hours back to your team. No hype—just outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Icon className="h-6 w-6 text-[#fe3641]" />
                    <span className="text-3xl font-black text-white group-hover:text-[#fe3641] transition-colors">{value}</span>
                  </div>
                  <span className="text-zinc-400 font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(254, 54, 65, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-8 py-4 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                See what&apos;s possible <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-[#fe3641]" />
                <span className="text-zinc-400 font-medium">Example Tech Stack</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-4 text-center text-sm font-medium border border-white/10 hover:border-[#fe3641]/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#fe3641]/20 blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#fe3641]/10 blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================= Packages ======================= */

function Packages() {
  const tiers = [
    {
      name: "Starter Pilot",
      price: "$1.5k setup + $500/mo",
      desc: "A tightly‑scoped AI pilot (chatbot or workflow) delivered in 2–3 weeks.",
      features: ["Discovery + requirements", "Implementation & testing", "Basic analytics", "1 iteration post‑launch"],
      popular: false,
    },
    {
      name: "Growth",
      price: "$3k setup + $2k/mo",
      desc: "Scale a proven use case. Add integrations, analytics, and guardrails.",
      features: ["Advanced integrations", "Staff training", "SLAs & monitoring", "Monthly improvement sprints"],
      popular: true,
    },
    {
      name: "Scale (Custom)",
      price: "$5k+/mo",
      desc: "For teams that want AI across customer support, sales, and ops.",
      features: ["Multi‑agent systems", "Role‑based access", "Security review", "Dedicated support"],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="relative bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Pricing & <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">packages</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Choose a track that matches your goals. We&apos;ll help you reach ROI and step up as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative rounded-3xl p-8 ${
                tier.popular
                  ? "bg-gradient-to-b from-[#fe3641] to-[#ff4757] text-white shadow-2xl shadow-[#fe3641]/20 scale-105"
                  : "bg-gradient-to-b from-white/5 to-white/10 border border-white/10 hover:border-white/20"
              } transition-all duration-500 group`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#0a0a0a] px-4 py-2 text-sm font-bold text-[#fe3641] border border-[#fe3641]">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? "text-white" : "text-white"}`}>
                  {tier.name}
                </h3>
                <div className={`text-3xl font-black mb-4 ${tier.popular ? "text-white" : "text-white"}`}>
                  {tier.price}
                </div>
                <p className={`leading-relaxed ${tier.popular ? "text-white/90" : "text-zinc-300"}`}>
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${tier.popular ? "text-white" : "text-[#fe3641]"}`} />
                    <span className={`${tier.popular ? "text-white/90" : "text-zinc-300"} font-medium`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold text-lg w-full transition-all duration-300 ${
                  tier.popular
                    ? "bg-white text-[#fe3641] hover:bg-white/90 shadow-xl"
                    : "bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white hover:shadow-xl hover:shadow-[#fe3641]/20"
                }`}
              >
                Book a Call <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Lead Form ======================= */

function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    setLoading(false);
    if (res.ok && data?.ok) {
      setOk(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setOk(false);
      setErr(data?.error || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Tell us what you want to <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">build</span>
            </h2>
            <p className="text-xl text-zinc-300">
              We&apos;ll respond within 24 hours with next steps. Prefer voice? Book a call instead.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* honeypot */}
            <input type="text" tabIndex={-1} autoComplete="off" name="website" className="hidden" />
            
            <input
              name="name"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300"
              placeholder="Full name"
              required
            />
            <input
              name="email"
              type="email"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300"
              placeholder="Email"
              required
            />
            <input
              name="company"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 md:col-span-2"
              placeholder="Company (optional)"
            />
            <textarea
              name="message"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 md:col-span-2"
              placeholder="What problem are we solving?"
              rows={6}
              required
            />
            
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-8 py-4 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-[#fe3641]/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
              >
                {loading ? "Sending..." : (
                  <>Send Inquiry <ArrowRight className="h-5 w-5" /></>
                )}
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#fe3641] bg-[#fe3641]/10 px-8 py-4 text-[#fe3641] font-bold text-lg backdrop-blur hover:bg-[#fe3641]/20 transition-all duration-300"
              >
                Book a Strategy Call
              </motion.a>
            </div>

            {ok === true && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium"
              >
                Thanks! We&apos;ll reach out within 24 hours.
              </motion.div>
            )}
            {ok === false && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium"
              >
                {err}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================= Footer ======================= */

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-[#fe3641]" />
                <div className="absolute inset-0 h-6 w-6 bg-[#fe3641] rounded-full blur-sm animate-pulse opacity-30" />
              </div>
              <span className="text-2xl font-black tracking-tight">Kodedit</span>
            </div>
            <p className="text-lg text-zinc-300 max-w-md leading-relaxed mb-8">
              Kodedit is an AI studio that helps teams ship practical AI—fast. We handle strategy, build, and ongoing improvement so you see results, not just demos.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@kodedit.com"
              className="inline-flex items-center gap-3 text-[#fe3641] font-semibold hover:text-[#ff4757] transition-colors"
            >
              hello@kodedit.com
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-bold text-white mb-4">Navigation</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-zinc-400 hover:text-white transition-colors">Services</a>
                <a href="#outcomes" className="block text-zinc-400 hover:text-white transition-colors">Outcomes</a>
                <a href="#packages" className="block text-zinc-400 hover:text-white transition-colors">Packages</a>
                <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Get Started</h4>
              <div className="space-y-3">
                <a 
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noreferrer" 
                  className="block text-zinc-400 hover:text-white transition-colors"
                >
                  Book Strategy Call
                </a>
                <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">Send Inquiry</a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {currentYear} Kodedit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}