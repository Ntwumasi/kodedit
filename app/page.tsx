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
} from "lucide-react";

const VIDEO_SRC = "/video/hero.mp4";
const POSTER_IMG = "/preview.png";
const CALENDLY_LINK = "https://calendly.com/your-handle/ai-strategy-call";

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kodedit",
  "url": "https://kodedit.com",
  "logo": "https://kodedit.com/og-image.png",
  "description": "AI solutions for small businesses. We provide chatbots, automation, and predictive analytics that save time, reduce costs, and accelerate growth.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
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
          <TrustBar />
          <Services />
          <Outcomes />
          <Packages />
          <LeadForm />
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#171717]/60 via-transparent to-[#171717]" />
      
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
            <div className="h-5 w-5 text-[#fe3641]">
              {/* Morse Code Logo Mark */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
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
            </div>
            <div className="absolute inset-0 h-5 w-5 bg-[#fe3641] rounded-sm blur-sm animate-pulse opacity-30" />
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-b from-transparent to-[#171717]" />
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
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-5 w-5 text-[#fe3641]">
              {/* Morse Code Logo Mark */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
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
            </div>
            <div className="absolute inset-0 h-5 w-5 bg-[#fe3641] rounded-sm blur-sm animate-pulse opacity-30" />
          </div>
          <span className="text-lg font-bold tracking-tight">Kodedit</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-zinc-300 hover:text-white transition-colors relative group">
            AI Solutions
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#outcomes" className="text-zinc-300 hover:text-white transition-colors relative group">
            Benefits
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fe3641] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#packages" className="text-zinc-300 hover:text-white transition-colors relative group">
            AI Packages
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
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur transition-colors hover:bg-white/10"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute top-full left-0 right-0 backdrop-blur-xl bg-[#171717]/95 border-b border-white/10 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a 
            href="#services" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
          >
            AI Solutions
          </a>
          <a 
            href="#outcomes" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
          >
            Benefits
          </a>
          <a 
            href="#packages" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
          >
            AI Packages
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
          >
            Contact
          </a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={CALENDLY_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 text-center rounded-xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] text-white px-6 py-3 font-semibold"
          >
            Book a Strategy Call
          </motion.a>
        </div>
      </motion.div>
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
                AI Solutions
              </span>
              <span className="text-sm text-white/60 font-medium tracking-wide">Automation • Intelligence • Growth</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Transform your business with AI.{" "}
              <span className="bg-gradient-to-r from-[#fe3641] to-[#be0a24] bg-clip-text text-transparent">
                Start seeing results in weeks.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed"
            >
              We help small businesses integrate AI to automate tasks, improve decision-making, and accelerate growth. From chatbots to predictive analytics—unlock AI&apos;s potential without the complexity.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-col gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(254, 54, 65, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book AI Strategy Call 
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#fe3641] bg-[#fe3641]/10 px-6 sm:px-8 py-3 sm:py-4 text-[#fe3641] font-bold text-base sm:text-lg backdrop-blur hover:bg-[#fe3641]/20 transition-all duration-300"
              >
                Explore AI Solutions
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { icon: Clock, text: "See results in 2-4 weeks" },
                { icon: Shield, text: "Secure AI implementation" },
                { icon: Star, text: "No technical expertise needed" },
                { icon: Users, text: "Dedicated AI specialists" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div 
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300 bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3 backdrop-blur border border-white/10"
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
    <section className="bg-[#171717] border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-zinc-400 text-sm font-medium">Trusted by small businesses embracing AI transformation</p>
          
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
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#171717] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#171717] to-transparent z-10" />
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
      title: "AI Chatbots & Customer Service",
      desc: "24/7 customer support that never sleeps. Reduce response times and handle more inquiries with intelligent chatbots.",
      bullets: ["Website chat integration", "WhatsApp & SMS automation", "Lead qualification & booking"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Workflow className="h-8 w-8 text-[#fe3641]" />,
      title: "Process Automation",
      desc: "Automate repetitive tasks and workflows. Free up your team's time for high-value activities.",
      bullets: ["Document processing", "Email & calendar automation", "Inventory management"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#fe3641]" />,
      title: "Predictive Analytics",
      desc: "Make data-driven decisions with AI insights. Forecast trends, optimize operations, and stay ahead.",
      bullets: ["Sales forecasting", "Customer behavior analysis", "Inventory optimization"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <PlugZap className="h-8 w-8 text-[#fe3641]" />,
      title: "AI Strategy & Implementation",
      desc: "Complete AI transformation roadmap. From strategy to implementation, we guide your AI journey.",
      bullets: ["AI readiness assessment", "Custom AI solutions", "Team training & support"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-[#171717] to-[#1a1a1a] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4">
            AI solutions that <span className="bg-gradient-to-r from-[#fe3641] to-[#be0a24] bg-clip-text text-transparent">grow your business</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            Practical AI implementations that save time, reduce costs, and unlock new opportunities for small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 px-4 sm:px-0">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#fe3641]/10`}
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="rounded-xl sm:rounded-2xl bg-[#fe3641]/10 p-3 sm:p-4 border border-[#fe3641]/20 self-start">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-zinc-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#fe3641] flex-shrink-0 mt-0.5" />
                          <span className="font-medium text-xs sm:text-sm">{bullet}</span>
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
    { label: "Time savings", value: "40+ hours/week", icon: Clock },
    { label: "Response time", value: "< 30 seconds", icon: CheckCircle2 },
    { label: "Cost reduction", value: "60% in ops", icon: LineChart },
    { label: "Customer satisfaction", value: "95%+", icon: Users },
  ];

  const techStack = ["OpenAI GPT", "Claude", "Langchain", "Python", "TensorFlow", "Pinecone", "Supabase", "Vercel", "Zapier"];

  return (
    <section id="outcomes" className="relative bg-[#1a1a1a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
              Real AI impact, <span className="bg-gradient-to-r from-[#fe3641] to-[#be0a24] bg-clip-text text-transparent">measurable results</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 sm:mb-10 leading-relaxed">
              We deliver AI solutions that provide immediate business value: increased efficiency, cost savings, and competitive advantages that transform how you operate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#fe3641]" />
                    <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#fe3641] transition-colors">{value}</span>
                  </div>
                  <span className="text-zinc-400 font-medium text-sm sm:text-base">{label}</span>
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
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                See AI case studies <ArrowRight className="h-5 w-5" />
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
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-[#fe3641]" />
                <span className="text-zinc-400 font-medium">AI Tech Stack</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-3 sm:p-4 text-center text-xs sm:text-sm font-medium border border-white/10 hover:border-[#fe3641]/30 transition-all duration-300"
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
      name: "AI Starter",
      price: "$2k - $5k",
      desc: "Perfect first step into AI. Get a simple chatbot or automation tool deployed in 2-3 weeks.",
      features: ["AI strategy consultation", "Simple chatbot or automation", "Basic training & setup", "2 weeks support"],
      popular: false,
    },
    {
      name: "AI Growth",
      price: "$5k - $12k",
      desc: "Comprehensive AI integration across multiple business processes. See significant productivity gains.",
      features: ["Multiple AI tools", "Process automation", "Team training program", "3 months ongoing support"],
      popular: true,
    },
    {
      name: "AI Enterprise",
      price: "$12k+",
      desc: "Complete AI transformation with custom solutions, advanced analytics, and dedicated support.",
      features: ["Custom AI development", "Predictive analytics", "Advanced integrations", "Dedicated AI consultant"],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="relative bg-gradient-to-b from-[#1a1a1a] to-[#171717] py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(254,54,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(254,54,65,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4">
            AI Solutions & <span className="bg-gradient-to-r from-[#fe3641] to-[#be0a24] bg-clip-text text-transparent">packages</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            AI implementation packages designed for small businesses. Start small, see results, then scale up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
                tier.popular
                  ? "bg-gradient-to-b from-[#fe3641] to-[#ff4757] text-white shadow-2xl shadow-[#fe3641]/20 md:scale-105"
                  : "bg-gradient-to-b from-white/5 to-white/10 border border-white/10 hover:border-white/20"
              } transition-all duration-500 group`}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#171717] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#fe3641] border border-[#fe3641]">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${tier.popular ? "text-white" : "text-white"}`}>
                  {tier.name}
                </h3>
                <div className={`text-2xl sm:text-3xl font-black mb-3 sm:mb-4 ${tier.popular ? "text-white" : "text-white"}`}>
                  {tier.price}
                </div>
                <p className={`leading-relaxed text-sm sm:text-base ${tier.popular ? "text-white/90" : "text-zinc-300"}`}>
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-white" : "text-[#fe3641]"}`} />
                    <span className={`${tier.popular ? "text-white/90" : "text-zinc-300"} font-medium text-sm sm:text-base`}>
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
                className={`inline-flex items-center justify-center gap-3 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg w-full transition-all duration-300 ${
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
    <section id="contact" className="relative bg-[#171717] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#1a1a1a] to-[#171717]" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Ready to transform your business with <span className="bg-gradient-to-r from-[#fe3641] to-[#be0a24] bg-clip-text text-transparent">AI?</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300">
              Tell us about your business goals and we&apos;ll show you how AI can help you achieve them faster.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* honeypot */}
            <input type="text" tabIndex={-1} autoComplete="off" name="website" className="hidden" />
            
            <input
              name="name"
              className="w-full rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 text-sm sm:text-base"
              placeholder="Full name"
              required
            />
            <input
              name="email"
              type="email"
              className="w-full rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 text-sm sm:text-base"
              placeholder="Email"
              required
            />
            <input
              name="company"
              className="w-full rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 md:col-span-2 text-sm sm:text-base"
              placeholder="Company (optional)"
            />
            <textarea
              name="message"
              className="w-full rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-zinc-400 outline-none focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 transition-all duration-300 md:col-span-2 text-sm sm:text-base resize-none"
              placeholder="Describe your business challenges and how you'd like AI to help"
              rows={5}
              required
            />
            
            <div className="md:col-span-2 flex flex-col gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="inline-flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-[#fe3641]/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full"
                type="submit"
              >
                {loading ? "Sending..." : (
                  <>Get AI Strategy <ArrowRight className="h-5 w-5" /></>
                )}
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl border-2 border-[#fe3641] bg-[#fe3641]/10 px-6 sm:px-8 py-3 sm:py-4 text-[#fe3641] font-bold text-base sm:text-lg backdrop-blur hover:bg-[#fe3641]/20 transition-all duration-300 w-full sm:w-auto"
              >
                Book AI Strategy Call
              </motion.a>
            </div>

            {ok === true && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm sm:text-base"
              >
                Thanks! We&apos;ll reach out within 24 hours.
              </motion.div>
            )}
            {ok === false && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm sm:text-base"
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
    <footer className="bg-[#171717] border-t border-white/10">
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
                <div className="h-6 w-6 text-[#fe3641]">
                  {/* Morse Code Logo Mark */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
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
                </div>
                <div className="absolute inset-0 h-6 w-6 bg-[#fe3641] rounded-sm blur-sm animate-pulse opacity-30" />
              </div>
              <span className="text-2xl font-black tracking-tight">Kodedit</span>
            </div>
            <p className="text-lg text-zinc-300 max-w-md leading-relaxed mb-8">
              Kodedit helps small businesses harness the power of AI to automate processes, improve customer service, and unlock new growth opportunities.
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
                <a href="#services" className="block text-zinc-400 hover:text-white transition-colors">AI Solutions</a>
                <a href="#outcomes" className="block text-zinc-400 hover:text-white transition-colors">Benefits</a>
                <a href="#packages" className="block text-zinc-400 hover:text-white transition-colors">AI Packages</a>
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
                <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors">Get AI Strategy</a>
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