"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Menu,
  X,
  Code2,
  TestTube,
  FileText,
  GitBranch,
  Lightbulb,
  BarChart3,
  Users,
  Zap,
  Lock,
  BookOpen,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const VIDEO_SRC = "/video/hero.mp4";
const POSTER_IMG = "/preview.png";
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

// Structured Data for SEO - Multiple schemas for rich results
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kodedit.com/#organization",
  "name": "Kodedit",
  "alternateName": "Kodedit AI",
  "url": "https://kodedit.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://kodedit.com/og-image.png",
    "width": 1200,
    "height": 630
  },
  "image": "https://kodedit.com/og-image.png",
  "description": "Kodedit is an AI-powered development platform that covers the full software lifecycle - from requirements to deployment - with built-in quality assurance and explainable AI.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Kodedit Team"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "hello@kodedit.com",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://twitter.com/kodedit",
    "https://linkedin.com/company/kodedit",
    "https://github.com/kodedit"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Code Generation",
    "Developer Tools",
    "Software Testing",
    "Code Quality",
    "DevOps"
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://kodedit.com/#software",
  "name": "Kodedit",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "AI Development Platform",
  "operatingSystem": "Web, macOS, Windows, Linux",
  "description": "AI-powered development platform covering the full software lifecycle with built-in quality gates, explainable AI, and workforce development tools.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available. Pro plans starting at $19/month."
  },
  "featureList": [
    "Full lifecycle AI assistance",
    "Requirements analysis",
    "Code generation with quality gates",
    "Automated testing",
    "Code review and QA",
    "Explainable AI decisions",
    "Team collaboration",
    "Learning and upskilling tools"
  ],
  "screenshot": "https://kodedit.com/og-image.png",
  "softwareVersion": "1.0",
  "author": {
    "@id": "https://kodedit.com/#organization"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kodedit.com/#website",
  "name": "Kodedit",
  "alternateName": "Kodedit - Full Lifecycle AI Development",
  "url": "https://kodedit.com",
  "publisher": {
    "@id": "https://kodedit.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kodedit.com/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kodedit.com/#webpage",
  "url": "https://kodedit.com",
  "name": "Kodedit | Full Lifecycle AI Development Platform",
  "description": "AI-powered development covering the full software lifecycle. From requirements to deployment with built-in quality gates and explainable AI.",
  "isPartOf": {
    "@id": "https://kodedit.com/#website"
  },
  "about": {
    "@id": "https://kodedit.com/#software"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://kodedit.com/og-image.png"
  },
  "mainEntity": {
    "@id": "https://kodedit.com/#software"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://kodedit.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Features",
      "item": "https://kodedit.com/#features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Research",
      "item": "https://kodedit.com/research"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "About",
      "item": "https://kodedit.com/about"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is Kodedit different from GitHub Copilot or Cursor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While Copilot and Cursor focus primarily on code completion (25-35% of dev time), Kodedit covers the full software development lifecycle - requirements analysis, planning, coding, testing, code review, and maintenance. We also provide built-in quality gates and explainable AI to address the trust gap in AI-generated code."
      }
    },
    {
      "@type": "Question",
      "name": "What is full lifecycle AI development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full lifecycle means AI assistance at every stage of software development: understanding requirements, planning implementation, writing code, generating tests, reviewing code quality, and maintaining codebases. Most AI tools only help with code writing, leaving 65-75% of developer time unassisted."
      }
    },
    {
      "@type": "Question",
      "name": "How does Kodedit ensure code quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kodedit includes built-in quality gates that analyze AI-generated code before it reaches your codebase. Our explainable AI shows reasoning behind suggestions, addressing the trust gap - 46% of developers don't trust AI outputs. We catch the ~9% increase in bugs typically seen with AI-generated code."
      }
    },
    {
      "@type": "Question",
      "name": "Is Kodedit suitable for learning to code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kodedit uniquely combines AI coding assistance with developer education. Our explainable AI helps developers understand not just what code to write, but why - accelerating skill development and workforce readiness for the AI-augmented future of software development."
      }
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
      {/* Structured Data for SEO - Multiple schemas for rich Google results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          <Problem />
          <Features />
          <Differentiators />
          <UseCases />
          <Pricing />
          <CTA />
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
          <a href="#features" className="text-zinc-300 hover:text-white transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#pricing" className="text-zinc-300 hover:text-white transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/research" className="text-zinc-300 hover:text-white transition-colors relative group">
            Research
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/about" className="text-zinc-300 hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="https://github.com/kodedit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="h-4 w-4" />
            <span className="hidden lg:inline">GitHub</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#waitlist"
            className="rounded-full bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-5 py-2 font-medium"
          >
            Join Waitlist
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
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "/research", label: "Research" },
            { href: "/about", label: "About" },
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
            href="https://github.com/kodedit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3 px-4 text-zinc-300 hover:text-white"
          >
            <GitBranch className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="#waitlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 text-center rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-6 py-3 font-semibold"
          >
            Join Waitlist
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
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#fe3641]/30 bg-[#fe3641]/10 text-[#fe3641] text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Now in private beta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight"
            >
              AI for the{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
                full development lifecycle
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl"
            >
              Code writing is only 25% of development. Kodedit covers requirements, planning, testing, review, and maintenance with built-in quality gates and explainable AI.
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
                href="#waitlist"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-5 sm:px-6 py-3 text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#fe3641]/20"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/research"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 sm:px-6 py-3 text-white font-semibold text-sm sm:text-base backdrop-blur hover:bg-white/10 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Our Research</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-10 grid grid-cols-2 gap-3"
            >
              {[
                { icon: Shield, text: "Quality gates built-in" },
                { icon: Lightbulb, text: "Explainable AI decisions" },
                { icon: Lock, text: "Enterprise-grade security" },
                { icon: Users, text: "Built for teams" },
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


/* ======================= Problem Section ======================= */

function Problem() {
  return (
    <section className="relative bg-[#171717] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI coding tools are{" "}
            <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
              leaving developers behind
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Current tools focus on the wrong 25% of development work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              stat: "25-35%",
              label: "of dev time is writing code",
              desc: "Requirements, planning, testing, QA, and maintenance take 65-75% — and AI barely touches it.",
            },
            {
              stat: "46%",
              label: "of developers don't trust AI output",
              desc: "No visibility into why AI made decisions. No quality gates. Just hope it works.",
            },
            {
              stat: "~9%",
              label: "more bugs in AI-generated code",
              desc: "AI increases velocity but also increases defects. Teams ship faster into failure.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#fe3641] mb-2">{item.stat}</div>
              <div className="font-semibold mb-3">{item.label}</div>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Features ======================= */

function Features() {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Requirements Analysis",
      desc: "AI that understands your specs, identifies gaps, and suggests clarifications before you write a line of code.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Planning & Architecture",
      desc: "Generate implementation plans, identify dependencies, and surface architectural decisions upfront.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Code Generation",
      desc: "Context-aware code suggestions with explainable reasoning — know why, not just what.",
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Automated Testing",
      desc: "Generate comprehensive test suites. Catch edge cases. Maintain coverage as code evolves.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Gates",
      desc: "Built-in code review before merge. Security scanning. Best practice enforcement.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Explainable AI",
      desc: "See the reasoning behind every suggestion. Build trust through transparency.",
    },
  ];

  return (
    <section id="features" className="relative bg-[#1a1a1a] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI across the full lifecycle
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Not just another code completion tool. Kodedit assists every stage of development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#fe3641]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#fe3641]/10 flex items-center justify-center text-[#fe3641] mb-4 group-hover:bg-[#fe3641]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Differentiators ======================= */

function Differentiators() {
  const comparisons = [
    { feature: "Requirements analysis", kodedit: true, others: false },
    { feature: "Implementation planning", kodedit: true, others: false },
    { feature: "Code generation", kodedit: true, others: true },
    { feature: "Test generation", kodedit: true, others: "Limited" },
    { feature: "Code review & QA", kodedit: true, others: false },
    { feature: "Quality gates", kodedit: true, others: false },
    { feature: "Explainable AI", kodedit: true, others: false },
    { feature: "Learning mode", kodedit: true, others: false },
  ];

  return (
    <section className="relative bg-[#171717] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Beyond code completion
            </h2>
            <p className="text-zinc-400 mb-6">
              Copilot, Cursor, and Claude Code are powerful for writing code. But writing code is just the beginning.
            </p>
            <p className="text-zinc-400 mb-8">
              Kodedit covers the 65-75% of development work that other tools ignore — with the trust and quality guarantees that enterprises require.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/research"
              className="inline-flex items-center gap-2 text-[#fe3641] font-medium hover:underline"
            >
              Read our technical approach
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-white/10">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center text-[#fe3641]">Kodedit</div>
              <div className="p-4 text-center text-zinc-400">Others</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                <div className="p-4 text-zinc-300">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.kodedit ? <CheckCircle2 className="h-5 w-5 text-[#fe3641] mx-auto" /> : <X className="h-5 w-5 text-zinc-500 mx-auto" />}
                </div>
                <div className="p-4 text-center">
                  {row.others === true ? (
                    <CheckCircle2 className="h-5 w-5 text-zinc-400 mx-auto" />
                  ) : row.others === false ? (
                    <X className="h-5 w-5 text-zinc-600 mx-auto" />
                  ) : (
                    <span className="text-zinc-500">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ======================= Use Cases ======================= */

function UseCases() {
  const useCases = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enterprise Teams",
      desc: "Standardize AI-assisted development across your organization with governance, quality gates, and audit trails.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Startups",
      desc: "Move fast without breaking things. Ship with confidence knowing AI code meets quality standards.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Developer Education",
      desc: "Learn by doing with AI that explains its reasoning. Accelerate junior developers into productive contributors.",
    },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for how teams actually work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="w-12 h-12 rounded-lg bg-[#fe3641]/10 flex items-center justify-center text-[#fe3641] mb-4">
                {useCase.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
              <p className="text-sm text-zinc-400">{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= Pricing ======================= */

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "For individual developers exploring full-lifecycle AI",
      features: ["Full lifecycle assistance", "5 projects", "Community support", "Basic quality gates"],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      desc: "For developers who want unlimited power",
      features: ["Unlimited projects", "Advanced quality gates", "Explainable AI insights", "Priority support", "IDE integrations"],
      popular: true,
      cta: "Join Waitlist",
    },
    {
      name: "Team",
      price: "$49",
      period: "/user/month",
      desc: "For teams that need governance and collaboration",
      features: ["Everything in Pro", "Team collaboration", "Audit logs", "SSO & SAML", "Custom policies", "Dedicated support"],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="relative bg-[#171717] py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400">Start free. Scale when you need to.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl p-6 ${
                tier.popular
                  ? "bg-gradient-to-b from-[#fe3641] to-[#d12d36] text-white ring-2 ring-[#fe3641]"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#fe3641]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.popular ? "text-white/70" : "text-zinc-400"}`}>{tier.period}</span>
                </div>
                <p className={`text-sm mt-2 ${tier.popular ? "text-white/80" : "text-zinc-400"}`}>
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${tier.popular ? "text-white" : "text-[#fe3641]"}`} />
                    <span className={tier.popular ? "text-white/90" : "text-zinc-300"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  tier.popular
                    ? "bg-white text-[#fe3641] hover:bg-white/90"
                    : "bg-[#fe3641] text-white hover:bg-[#e62d38]"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= CTA / Waitlist ======================= */

function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative bg-[#1a1a1a] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Be first to experience{" "}
            <span className="bg-gradient-to-r from-[#fe3641] to-[#ff4757] bg-clip-text text-transparent">
              full-lifecycle AI
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Join the waitlist for early access. We are onboarding teams in batches.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl border border-[#fe3641]/30 bg-[#fe3641]/10"
            >
              <CheckCircle2 className="h-12 w-12 text-[#fe3641] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">You are on the list!</h3>
              <p className="text-zinc-400">We will reach out when your spot is ready.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-zinc-500 focus:border-[#fe3641] focus:outline-none focus:ring-2 focus:ring-[#fe3641]/20"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white font-semibold"
              >
                Join Waitlist
              </motion.button>
            </form>
          )}

          <p className="text-xs text-zinc-500 mt-4">
            No spam. We will only email you about Kodedit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================= Footer ======================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo size="md" />
              <span className="font-bold">Kodedit</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              AI for the full development lifecycle.
            </p>
            <a href={`mailto:${EMAIL}`} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {EMAIL}
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#waitlist" className="text-zinc-400 hover:text-white transition-colors">Join Waitlist</a>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/about" className="text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="/research" className="text-zinc-400 hover:text-white transition-colors">Research</a>
              <a href="https://github.com/kodedit" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} Kodedit, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/kodedit" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/kodedit" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://linkedin.com/company/kodedit" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}