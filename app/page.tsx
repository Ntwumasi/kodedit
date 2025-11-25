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
  Star,
  Users,
  Clock,
  Shield,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

const VIDEO_SRC = "/video/hero.mp4";
const POSTER_IMG = "/preview.png";
const PHONE_NUMBER = "(315) 723-1818";
const PHONE_LINK = "tel:+13157231818";
const EMAIL = "hello@kodedit.com";

/* ======================= Logo Component ======================= */

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

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kodedit",
  "url": "https://kodedit.com",
  "logo": "https://kodedit.com/og-image.svg",
  "description": "AI solutions for small businesses. We provide chatbots, automation, and predictive analytics that save time, reduce costs, and accelerate growth.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-315-723-1818",
    "contactType": "Customer Service",
    "email": "hello@kodedit.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://twitter.com/kodedit",
    "https://linkedin.com/company/kodedit"
  ],
  "services": [
    {
      "@type": "Service",
      "name": "AI Chatbots & Customer Service",
      "description": "24/7 customer support automation with intelligent chatbots"
    },
    {
      "@type": "Service",
      "name": "Process Automation",
      "description": "Automate repetitive tasks and workflows for increased efficiency"
    },
    {
      "@type": "Service",
      "name": "Predictive Analytics",
      "description": "Data-driven insights and forecasting for better business decisions"
    },
    {
      "@type": "Service",
      "name": "AI Strategy & Implementation",
      "description": "Complete AI transformation roadmap and implementation"
    }
  ]
};

export default function KodeditLanding() {
  const [videoComplete, setVideoComplete] = useState(false);

  const handleVideoComplete = useCallback(() => {
    setVideoComplete(true);
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen w-full bg-[#171717] text-white overflow-x-hidden">
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
          <Services />
          <Outcomes />
          <Packages />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
    </>
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
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#171717]/60 via-transparent to-[#171717]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-20 h-full flex items-start justify-between p-4 sm:p-6 pt-6 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Logo size="md" />
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 z-20 bg-gradient-to-b from-transparent to-[#171717]" />
    </section>
  );
}

/* ======================= Header ======================= */

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'backdrop-blur-xl bg-[#171717]/80 border-b border-white/10'
          : 'backdrop-blur-sm bg-[#171717]/40'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Kodedit Home">
          <Logo size="md" />
          <span className="text-lg font-bold tracking-tight">Kodedit</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          <a href="#services" className="text-zinc-300 hover:text-white transition-colors relative group">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#outcomes" className="text-zinc-300 hover:text-white transition-colors relative group">
            Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#packages" className="text-zinc-300 hover:text-white transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">{PHONE_NUMBER}</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/intake"
            className="rounded-full bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-5 py-2 font-medium"
          >
            Start Project
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.2 }}
        className={`md:hidden overflow-hidden backdrop-blur-xl bg-[#171717]/95 border-b border-white/10`}
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-4 space-y-2">
          {[
            { href: "#services", label: "Solutions" },
            { href: "#outcomes", label: "Results" },
            { href: "#packages", label: "Pricing" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_LINK}
            className="flex items-center gap-3 py-3 px-4 text-[#fe3641] font-medium"
          >
            <Phone className="h-5 w-5" />
            {PHONE_NUMBER}
          </a>
          <a
            href="/intake"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 text-center rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-6 py-3 font-semibold"
          >
            Start Project
          </a>
        </div>
      </motion.nav>
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
    <section ref={containerRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#171717] via-[#1a1a1a] to-[#171717]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#fe3641]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-[#fe3641]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-[100dvh] flex items-center pt-16 pb-8"
      >
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight"
            >
              AI solutions that{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                grow your business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl"
            >
              Automate tasks, reduce costs, and accelerate growth with AI built for small businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 md:mt-8 flex flex-row gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/intake"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-5 sm:px-6 py-3 text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#fe3641]/20"
              >
                Start Project
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={PHONE_LINK}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 sm:px-6 py-3 text-white font-semibold text-sm sm:text-base backdrop-blur hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-10 grid grid-cols-2 gap-3"
            >
              {[
                { icon: Clock, text: "Results in 2-4 weeks" },
                { icon: Shield, text: "Secure & private" },
                { icon: Star, text: "No tech skills needed" },
                { icon: Users, text: "Dedicated support" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400"
                >
                  <Icon className="h-4 w-4 text-[#fe3641] flex-shrink-0" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


/* ======================= Services ======================= */

function Services() {
  const items = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Chatbots",
      desc: "24/7 customer support with intelligent chatbots",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Automation",
      desc: "Automate repetitive tasks and workflows",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Analytics",
      desc: "Data-driven insights and forecasting",
    },
    {
      icon: <PlugZap className="h-6 w-6" />,
      title: "AI Strategy",
      desc: "Custom AI roadmap and implementation",
    },
  ];

  return (
    <section id="services" className="relative bg-[#171717] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            What we do
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-4 md:p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#fe3641]/30 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#fe3641]/10 flex items-center justify-center text-[#fe3641] mb-3 md:mb-4 group-hover:bg-[#fe3641]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
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
    { value: "40+", label: "Hours saved weekly" },
    { value: "60%", label: "Cost reduction" },
    { value: "<30s", label: "Response time" },
    { value: "95%", label: "Satisfaction" },
  ];

  return (
    <section id="outcomes" className="relative bg-[#1a1a1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Real results,{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                measurable impact
              </span>
            </h2>
            <p className="text-zinc-400 mb-6 md:mb-8">
              AI solutions that deliver immediate value—increased efficiency, reduced costs, and competitive advantages.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/intake"
              className="inline-flex items-center gap-2 text-[#fe3641] font-medium hover:underline"
            >
              See what we can do for you
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 md:p-6 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#fe3641] mb-1">{value}</div>
                <div className="text-xs md:text-sm text-zinc-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= Packages ======================= */

function Packages() {
  const tiers = [
    {
      name: "Starter",
      price: "$2k - $5k",
      desc: "Simple chatbot or automation in 2-3 weeks",
      features: ["AI strategy session", "Single AI tool", "Basic training", "2 weeks support"],
      popular: false,
    },
    {
      name: "Growth",
      price: "$5k - $12k",
      desc: "Multiple AI tools with significant productivity gains",
      features: ["Multiple AI tools", "Process automation", "Team training", "3 months support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$12k+",
      desc: "Complete AI transformation with custom solutions",
      features: ["Custom development", "Predictive analytics", "Advanced integrations", "Dedicated consultant"],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="relative bg-[#171717] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Pricing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl p-5 md:p-6 ${
                tier.popular
                  ? "bg-gradient-to-b from-[#fe3641] to-[#d12d36] text-white ring-2 ring-[#fe3641]"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#fe3641]">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-semibold mb-1">{tier.name}</h3>
                <div className="text-xl md:text-2xl font-bold mb-2">{tier.price}</div>
                <p className={`text-xs md:text-sm ${tier.popular ? "text-white/80" : "text-zinc-400"}`}>
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-2 mb-5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs md:text-sm">
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${tier.popular ? "text-white" : "text-[#fe3641]"}`} />
                    <span className={tier.popular ? "text-white/90" : "text-zinc-300"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/intake"
                className={`block text-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  tier.popular
                    ? "bg-white text-[#fe3641] hover:bg-white/90"
                    : "bg-[#fe3641] text-white hover:bg-[#e62d38]"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Contact ======================= */

function Contact() {
  return (
    <section id="contact" className="relative bg-[#1a1a1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-zinc-400 mb-6">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fe3641]/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#fe3641]" />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fe3641]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#fe3641]" />
                </div>
                <span>{EMAIL}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/5"
          >
            <h3 className="font-semibold mb-4">Start your project</h3>
            <p className="text-sm text-zinc-400 mb-6">
              Fill out our intake form to give us details about your project needs.
            </p>
            <a
              href="/intake"
              className="block text-center rounded-lg bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-6 py-3 text-white font-medium hover:shadow-lg hover:shadow-[#fe3641]/20 transition-all"
            >
              Start Intake Form
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================= Footer ======================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo size="md" />
            <span className="font-bold">Kodedit</span>
          </div>

          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Solutions</a>
            <a href="#outcomes" className="text-zinc-400 hover:text-white transition-colors">Results</a>
            <a href="#packages" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
            <a href="/intake" className="text-zinc-400 hover:text-white transition-colors">Start Project</a>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <a href={PHONE_LINK} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{EMAIL}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            © {currentYear} Kodedit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}