"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Upload, 
  X, 
  Palette,
  Sparkles,
  Globe,
  Code,
  Zap,
  Building,
  Mail,
  Phone,
  User,
  Target,
  Layers,
  MessageSquare,
  DollarSign,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Bot,
  LineChart,
  FileText,
  ShoppingCart,
  Clock,
  Languages,
  Cpu,
  BarChart3,
  FileSearch,
  PenTool,
  Send
} from "lucide-react";

// Color wheel component
function ColorWheel({ onColorSelect }: { onColorSelect: (colors: ColorPalette) => void }) {
  const [selectedHue, setSelectedHue] = useState(0);
  const [selectedSaturation, setSelectedSaturation] = useState(70);
  const [selectedLightness, setSelectedLightness] = useState(50);

  const generateColorPalette = (hue: number, sat: number, light: number): ColorPalette => {
    const primary = `hsl(${hue}, ${sat}%, ${light}%)`;
    const secondary = `hsl(${(hue + 120) % 360}, ${sat}%, ${light}%)`;
    const tertiary = `hsl(${(hue + 240) % 360}, ${sat}%, ${light}%)`;
    const accent = `hsl(${(hue + 30) % 360}, ${Math.min(sat + 20, 100)}%, ${light}%)`;
    const complementary = `hsl(${(hue + 180) % 360}, ${sat}%, ${light}%)`;
    
    return {
      primary,
      secondary,
      tertiary,
      accent,
      complementary,
      light: `hsl(${hue}, ${Math.max(sat - 30, 10)}%, 95%)`,
      dark: `hsl(${hue}, ${sat}%, 20%)`,
    };
  };

  useEffect(() => {
    const palette = generateColorPalette(selectedHue, selectedSaturation, selectedLightness);
    onColorSelect(palette);
  }, [selectedHue, selectedSaturation, selectedLightness, onColorSelect]);

  return (
    <div className="space-y-6">
      {/* Circular Color Picker */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
        <svg
          className="w-full h-full cursor-pointer"
          viewBox="0 0 200 200"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const angle = Math.atan2(y, x) * (180 / Math.PI);
            setSelectedHue((angle + 360) % 360);
          }}
        >
          {/* Color wheel gradient */}
          <defs>
            <radialGradient id="saturation">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            {Array.from({ length: 360 }).map((_, i) => (
              <linearGradient key={i} id={`hue-${i}`}>
                <stop stopColor={`hsl(${i}, 100%, 50%)`} />
              </linearGradient>
            ))}
          </defs>
          
          {/* Hue segments */}
          {Array.from({ length: 360 }).map((_, i) => (
            <path
              key={i}
              d={`M 100 100 L ${100 + 90 * Math.cos((i * Math.PI) / 180)} ${
                100 + 90 * Math.sin((i * Math.PI) / 180)
              } A 90 90 0 0 1 ${100 + 90 * Math.cos(((i + 1) * Math.PI) / 180)} ${
                100 + 90 * Math.sin(((i + 1) * Math.PI) / 180)
              } Z`}
              fill={`hsl(${i}, ${selectedSaturation}%, ${selectedLightness}%)`}
              stroke="none"
            />
          ))}
          
          {/* Center circle */}
          <circle cx="100" cy="100" r="30" fill={`hsl(${selectedHue}, ${selectedSaturation}%, ${selectedLightness}%)`} />
          
          {/* Selection indicator */}
          <circle
            cx={100 + 90 * Math.cos((selectedHue * Math.PI) / 180)}
            cy={100 + 90 * Math.sin((selectedHue * Math.PI) / 180)}
            r="8"
            fill="white"
            stroke={`hsl(${selectedHue}, ${selectedSaturation}%, ${selectedLightness}%)`}
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Saturation and Lightness Sliders */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Saturation</label>
          <input
            type="range"
            min="0"
            max="100"
            value={selectedSaturation}
            onChange={(e) => setSelectedSaturation(Number(e.target.value))}
            className="w-full accent-[#fe3641]"
            style={{
              background: `linear-gradient(to right, hsl(${selectedHue}, 0%, 50%), hsl(${selectedHue}, 100%, 50%))`,
            }}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Lightness</label>
          <input
            type="range"
            min="0"
            max="100"
            value={selectedLightness}
            onChange={(e) => setSelectedLightness(Number(e.target.value))}
            className="w-full accent-[#fe3641]"
            style={{
              background: `linear-gradient(to right, hsl(${selectedHue}, ${selectedSaturation}%, 0%), hsl(${selectedHue}, ${selectedSaturation}%, 50%), hsl(${selectedHue}, ${selectedSaturation}%, 100%))`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface ColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  complementary: string;
  light: string;
  dark: string;
}

export default function IntakeForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);
  const [formProgress, setFormProgress] = useState(0);
  
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    existingWebsite: "",
    
    // Business Overview
    businessDescription: "",
    targetCustomers: "",
    uniqueValue: "",
    onlinePresence: "",
    
    // Project Goals
    projectGoals: "",
    problemsToSolve: "",
    integrations: "",
    aiFeatures: "",
    
    // Branding & Visual Identity
    hasLogo: "",
    logoFile: null as File | null,
    colorScheme: "",
    brandColors: null as ColorPalette | null,
    lookAndFeel: "",
    inspirationWebsites: "",
    
    // Content & Features
    aboutUsSection: "",
    corePages: [] as string[],
    needsBlog: "",
    needsEcommerce: "",
    needsBooking: "",
    needsMultiLanguage: "",
    
    // AI & Modern Features
    interestedInAI: "",
    aiFeaturesList: [] as string[],
    otherAIFeatures: "",
    
    // Technical & Budget
    hasHostingDomain: "",
    hostingDetails: "",
    techStack: "",
    budgetRange: "",
    timeline: "",
    
    // Communication & Collaboration
    mainContact: "",
    preferredComm: "",
    involvementLevel: "",
    
    // Success Metrics
    successMetrics: "",
    
    // Additional Notes
    additionalNotes: "",
  });

  const sections = [
    { 
      title: "Welcome", 
      icon: <Sparkles className="h-6 w-6" />,
      description: "Let’s create something amazing together"
    },
    { 
      title: "Basic Information", 
      icon: <User className="h-6 w-6" />,
      description: "Tell us who you are"
    },
    { 
      title: "Business Overview", 
      icon: <Building className="h-6 w-6" />,
      description: "Help us understand your business"
    },
    { 
      title: "Project Goals", 
      icon: <Target className="h-6 w-6" />,
      description: "What do you want to achieve?"
    },
    { 
      title: "Branding & Visual Identity", 
      icon: <Palette className="h-6 w-6" />,
      description: "Define your visual style"
    },
    { 
      title: "Content & Features", 
      icon: <Layers className="h-6 w-6" />,
      description: "What functionality do you need?"
    },
    { 
      title: "AI & Modern Features", 
      icon: <Cpu className="h-6 w-6" />,
      description: "Explore cutting-edge capabilities"
    },
    { 
      title: "Technical & Budget", 
      icon: <DollarSign className="h-6 w-6" />,
      description: "Project specifications"
    },
    { 
      title: "Communication", 
      icon: <MessageSquare className="h-6 w-6" />,
      description: "How we’ll work together"
    },
    { 
      title: "Success Metrics", 
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Measuring success"
    },
    { 
      title: "Additional Notes", 
      icon: <FileText className="h-6 w-6" />,
      description: "Anything else to share?"
    }
  ];

  useEffect(() => {
    // Calculate form progress
    const filledFields = Object.entries(formData).filter(([, value]) => {
      if (Array.isArray(value)) return value.length > 0;
      if (value === null) return false;
      return value !== "";
    }).length;
    const totalFields = Object.keys(formData).length;
    setFormProgress((filledFields / totalFields) * 100);
  }, [formData]);

  const handleInputChange = (field: string, value: string | string[] | File | null | ColorPalette) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, option: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[];
    const newArray = currentArray.includes(option)
      ? currentArray.filter(item => item !== option)
      : [...currentArray, option];
    handleInputChange(field, newArray);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (Array.isArray(value)) {
          formDataToSend.append(key, value.join(", "));
        } else if (typeof value === 'object' && value !== null) {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, String(value));
        }
      });

      const response = await fetch("/api/intake-gmail", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#171717] via-[#1a1a1a] to-[#171717] text-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center"
          >
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-zinc-300 mb-8 text-lg">
            Your intake form has been submitted successfully. We&apos;ll review your information and get back to you within 24 hours.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#fe3641] to-[#ff4757] px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-[#fe3641]/20 transition-all"
            >
              Back to Home
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171717] via-[#1a1a1a] to-[#171717] text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fe3641]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#fe3641]/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 bg-[#171717]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-7 w-7 text-[#fe3641] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
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
              <div className="absolute inset-0 h-7 w-7 bg-[#fe3641] rounded-sm blur-md animate-pulse opacity-20" />
            </div>
            <span className="text-xl font-bold">Kodedit</span>
          </Link>
          
          {/* Progress indicator */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-2 transition-all duration-300 ${
                  i === currentSection 
                    ? 'w-8 bg-gradient-to-r from-[#fe3641] to-[#ff4757] rounded-full' 
                    : i < currentSection 
                    ? 'w-2 bg-[#fe3641] rounded-full'
                    : 'w-2 bg-white/20 rounded-full'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">
              {currentSection + 1} / {sections.length}
            </div>
            <div className="relative w-20 h-20">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-white/10"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - formProgress / 100)}`}
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fe3641" />
                    <stop offset="100%" stopColor="#ff4757" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">{Math.round(formProgress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#fe3641]/20 to-[#ff4757]/20 text-[#fe3641]">
                {sections[currentSection].icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{sections[currentSection].title}</h1>
                <p className="text-zinc-400 mt-1">{sections[currentSection].description}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 0: Welcome */}
              {currentSection === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 text-center py-12"
                >
                  <div className="relative inline-block">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-[#fe3641] to-[#ff4757] rounded-full blur-2xl opacity-20"
                    />
                    <Sparkles className="h-24 w-24 text-[#fe3641] relative" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                    Welcome to Kodedit&apos;s Project Intake
                  </h2>
                  <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                    This comprehensive form helps us understand your vision and requirements. 
                    It should take about 10-15 minutes to complete.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Clock className="h-8 w-8 text-[#fe3641] mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Save Time</h3>
                      <p className="text-sm text-zinc-400">Your answers help us prepare a tailored solution</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Zap className="h-8 w-8 text-[#fe3641] mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Fast Response</h3>
                      <p className="text-sm text-zinc-400">We&apos;ll review and respond within 24 hours</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Target className="h-8 w-8 text-[#fe3641] mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Accurate Quote</h3>
                      <p className="text-sm text-zinc-400">Get a precise estimate for your project</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Section 1: Basic Information */}
              {currentSection === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <User className="h-4 w-4 text-[#fe3641]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all group-hover:border-white/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4 text-[#fe3641]" />
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all group-hover:border-white/30"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#fe3641]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all group-hover:border-white/30"
                        placeholder="john@acmecorp.com"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#fe3641]" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all group-hover:border-white/30"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-[#fe3641]" />
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      value={formData.existingWebsite}
                      onChange={(e) => handleInputChange("existingWebsite", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all group-hover:border-white/30"
                      placeholder="https://example.com"
                    />
                  </div>
                </motion.div>
              )}

              {/* Section 2: Business Overview */}
              {currentSection === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Describe your business in a few sentences *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.businessDescription}
                      onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="We are a boutique digital agency specializing in..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Who are your target customers? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.targetCustomers}
                      onChange={(e) => handleInputChange("targetCustomers", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Small to medium businesses in the tech sector..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      What makes you unique? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.uniqueValue}
                      onChange={(e) => handleInputChange("uniqueValue", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Our personalized approach and cutting-edge technology..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Current online presence *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.onlinePresence}
                      onChange={(e) => handleInputChange("onlinePresence", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="We have a basic website and active social media on..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Section 3: Project Goals */}
              {currentSection === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Main project goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectGoals}
                      onChange={(e) => handleInputChange("projectGoals", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Create a modern website with e-commerce capabilities..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Problems to solve *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.problemsToSolve}
                      onChange={(e) => handleInputChange("problemsToSolve", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Our current site is outdated and doesn't convert visitors..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Integration needs
                    </label>
                    <textarea
                      rows={3}
                      value={formData.integrations}
                      onChange={(e) => handleInputChange("integrations", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Salesforce CRM, Stripe payments, Google Analytics..."
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      AI features interest
                    </label>
                    <textarea
                      rows={3}
                      value={formData.aiFeatures}
                      onChange={(e) => handleInputChange("aiFeatures", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none group-hover:border-white/30"
                      placeholder="Chatbot for customer support, personalized recommendations..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Section 4: Branding & Visual Identity with Color Wheel */}
              {currentSection === 4 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Do you have a logo? *
                        </label>
                        <div className="flex gap-4 mb-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="hasLogo"
                              value="yes"
                              checked={formData.hasLogo === "yes"}
                              onChange={(e) => handleInputChange("hasLogo", e.target.value)}
                              className="text-[#fe3641]"
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="hasLogo"
                              value="no"
                              checked={formData.hasLogo === "no"}
                              onChange={(e) => handleInputChange("hasLogo", e.target.value)}
                              className="text-[#fe3641]"
                            />
                            <span>No</span>
                          </label>
                        </div>
                        {formData.hasLogo === "yes" && (
                          <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-[#fe3641]/50 transition-colors cursor-pointer">
                            <Upload className="h-10 w-10 mx-auto mb-3 text-zinc-400" />
                            <input
                              type="file"
                              accept="image/*,.svg"
                              onChange={(e) => handleInputChange("logoFile", e.target.files?.[0] || null)}
                              className="hidden"
                              id="logo-upload"
                            />
                            <label htmlFor="logo-upload" className="cursor-pointer">
                              <span className="text-sm text-zinc-400 block">
                                {formData.logoFile ? formData.logoFile.name : "Click or drag to upload logo"}
                              </span>
                              <span className="text-xs text-zinc-500 mt-1">SVG, PNG, JPG up to 10MB</span>
                            </label>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Brand personality (3 words) *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lookAndFeel}
                          onChange={(e) => handleInputChange("lookAndFeel", e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                          placeholder="Modern, Professional, Trustworthy"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Inspiration websites
                        </label>
                        <textarea
                          rows={4}
                          value={formData.inspirationWebsites}
                          onChange={(e) => handleInputChange("inspirationWebsites", e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none"
                          placeholder="apple.com - clean and minimal&#10;stripe.com - great animations..."
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-4">
                          Choose your brand colors
                        </label>
                        <ColorWheel onColorSelect={(palette) => {
                          setColorPalette(palette);
                          handleInputChange("brandColors", palette);
                        }} />
                      </div>

                      {colorPalette && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-3"
                        >
                          <h3 className="text-sm font-medium">Generated Color Palette</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.primary }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Primary</div>
                                  <div className="text-xs font-mono">{colorPalette.primary}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.secondary }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Secondary</div>
                                  <div className="text-xs font-mono">{colorPalette.secondary}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.tertiary }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Tertiary</div>
                                  <div className="text-xs font-mono">{colorPalette.tertiary}</div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.accent }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Accent</div>
                                  <div className="text-xs font-mono">{colorPalette.accent}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.light }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Light</div>
                                  <div className="text-xs font-mono">{colorPalette.light}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-12 h-12 rounded-lg border border-white/20"
                                  style={{ backgroundColor: colorPalette.dark }}
                                />
                                <div>
                                  <div className="text-xs text-zinc-400">Dark</div>
                                  <div className="text-xs font-mono">{colorPalette.dark}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Section 5: Content & Features */}
              {currentSection === 5 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      About Us content *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="aboutUsSection"
                          value="have"
                          checked={formData.aboutUsSection === "have"}
                          onChange={(e) => handleInputChange("aboutUsSection", e.target.value)}
                          className="text-[#fe3641]"
                        />
                        <span>I have content ready</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="aboutUsSection"
                          value="need-help"
                          checked={formData.aboutUsSection === "need-help"}
                          onChange={(e) => handleInputChange("aboutUsSection", e.target.value)}
                          className="text-[#fe3641]"
                        />
                        <span>Need help creating it</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Required pages/features *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Home", "About", "Services", "Blog", "Shop", "Contact", "Portfolio", "Testimonials", "FAQ", "Team", "Pricing", "Resources"].map((page) => (
                        <label key={page} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#fe3641]/30 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.corePages.includes(page)}
                            onChange={() => handleCheckboxChange("corePages", page)}
                            className="text-[#fe3641]"
                          />
                          <span className="text-sm">{page}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#fe3641]" />
                        Blog/News Section
                      </label>
                      <select
                        value={formData.needsBlog}
                        onChange={(e) => handleInputChange("needsBlog", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes, needed</option>
                        <option value="no">No, not needed</option>
                        <option value="maybe">Maybe later</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4 text-[#fe3641]" />
                        E-commerce
                      </label>
                      <select
                        value={formData.needsEcommerce}
                        onChange={(e) => handleInputChange("needsEcommerce", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes, needed</option>
                        <option value="no">No, not needed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#fe3641]" />
                        Booking System
                      </label>
                      <select
                        value={formData.needsBooking}
                        onChange={(e) => handleInputChange("needsBooking", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes, needed</option>
                        <option value="no">No, not needed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                        <Languages className="h-4 w-4 text-[#fe3641]" />
                        Multi-language
                      </label>
                      <select
                        value={formData.needsMultiLanguage}
                        onChange={(e) => handleInputChange("needsMultiLanguage", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes, needed</option>
                        <option value="no">No, not needed</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Section 6: AI & Modern Features */}
              {currentSection === 6 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Interest in AI tools *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="relative flex items-center justify-center p-6 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer group">
                        <input
                          type="radio"
                          name="interestedInAI"
                          value="yes"
                          checked={formData.interestedInAI === "yes"}
                          onChange={(e) => handleInputChange("interestedInAI", e.target.value)}
                          className="absolute opacity-0"
                        />
                        <div className="text-center">
                          <Bot className="h-8 w-8 mx-auto mb-2 text-[#fe3641] group-hover:scale-110 transition-transform" />
                          <span className="font-semibold">Yes, definitely</span>
                        </div>
                        {formData.interestedInAI === "yes" && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                          </div>
                        )}
                      </label>
                      <label className="relative flex items-center justify-center p-6 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer group">
                        <input
                          type="radio"
                          name="interestedInAI"
                          value="unsure"
                          checked={formData.interestedInAI === "unsure"}
                          onChange={(e) => handleInputChange("interestedInAI", e.target.value)}
                          className="absolute opacity-0"
                        />
                        <div className="text-center">
                          <Cpu className="h-8 w-8 mx-auto mb-2 text-zinc-400 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold">Tell me more</span>
                        </div>
                        {formData.interestedInAI === "unsure" && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                          </div>
                        )}
                      </label>
                      <label className="relative flex items-center justify-center p-6 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer group">
                        <input
                          type="radio"
                          name="interestedInAI"
                          value="no"
                          checked={formData.interestedInAI === "no"}
                          onChange={(e) => handleInputChange("interestedInAI", e.target.value)}
                          className="absolute opacity-0"
                        />
                        <div className="text-center">
                          <X className="h-8 w-8 mx-auto mb-2 text-zinc-600 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold">Not interested</span>
                        </div>
                        {formData.interestedInAI === "no" && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {(formData.interestedInAI === "yes" || formData.interestedInAI === "unsure") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-4"
                    >
                      <label className="block text-sm font-medium mb-3">
                        Select AI features of interest
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { name: "Chatbot for customer service", icon: <MessageSquare className="h-5 w-5" /> },
                          { name: "Personalized recommendations", icon: <Target className="h-5 w-5" /> },
                          { name: "Content generation", icon: <PenTool className="h-5 w-5" /> },
                          { name: "Analytics dashboards", icon: <LineChart className="h-5 w-5" /> },
                          { name: "Document automation", icon: <FileSearch className="h-5 w-5" /> },
                          { name: "Predictive insights", icon: <BarChart3 className="h-5 w-5" /> }
                        ].map((feature) => (
                          <label key={feature.name} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.aiFeaturesList.includes(feature.name)}
                              onChange={() => handleCheckboxChange("aiFeaturesList", feature.name)}
                              className="text-[#fe3641]"
                            />
                            <span className="text-[#fe3641]">{feature.icon}</span>
                            <span className="text-sm">{feature.name}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Other AI features
                        </label>
                        <input
                          type="text"
                          value={formData.otherAIFeatures}
                          onChange={(e) => handleInputChange("otherAIFeatures", e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                          placeholder="Any specific AI features you have in mind..."
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Section 7: Technical & Budget */}
              {currentSection === 7 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hosting & Domain Status *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {["yes", "no", "partial"].map((option) => (
                        <label key={option} className="relative p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer">
                          <input
                            type="radio"
                            name="hasHostingDomain"
                            value={option}
                            checked={formData.hasHostingDomain === option}
                            onChange={(e) => handleInputChange("hasHostingDomain", e.target.value)}
                            className="absolute opacity-0"
                          />
                          <div className="text-center">
                            <span className="font-semibold capitalize">{option === "yes" ? "Have both" : option === "no" ? "Need both" : "Have some"}</span>
                          </div>
                          {formData.hasHostingDomain === option && (
                            <div className="absolute top-2 right-2">
                              <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                    {(formData.hasHostingDomain === "yes" || formData.hasHostingDomain === "partial") && (
                      <textarea
                        rows={3}
                        value={formData.hostingDetails}
                        onChange={(e) => handleInputChange("hostingDetails", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none"
                        placeholder="Provide details about your current hosting provider and domain..."
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-[#fe3641]" />
                      Preferred Technology
                    </label>
                    <select
                      value={formData.techStack}
                      onChange={(e) => handleInputChange("techStack", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                    >
                      <option value="">No preference</option>
                      <option value="wordpress">WordPress</option>
                      <option value="shopify">Shopify</option>
                      <option value="nextjs">Next.js (Modern)</option>
                      <option value="custom">Custom Solution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-[#fe3641]" />
                      Budget Range *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Under $5k",
                        "$5k - $10k",
                        "$10k - $25k",
                        "$25k - $50k",
                        "$50k - $100k",
                        "$100k+"
                      ].map((range) => (
                        <label key={range} className="relative p-3 rounded-xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer text-center">
                          <input
                            type="radio"
                            name="budgetRange"
                            value={range}
                            checked={formData.budgetRange === range}
                            onChange={(e) => handleInputChange("budgetRange", e.target.value)}
                            className="absolute opacity-0"
                          />
                          <span className="text-sm font-medium">{range}</span>
                          {formData.budgetRange === range && (
                            <div className="absolute top-1 right-1">
                              <CheckCircle2 className="h-4 w-4 text-[#fe3641]" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#fe3641]" />
                      Timeline *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.timeline}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      placeholder="e.g., 3 months, Q2 2024, ASAP"
                    />
                  </div>
                </motion.div>
              )}

              {/* Section 8: Communication */}
              {currentSection === 8 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Main contact person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.mainContact}
                      onChange={(e) => handleInputChange("mainContact", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all"
                      placeholder="Name and role (e.g., John Doe - CEO)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Preferred communication *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { value: "Email", icon: <Mail className="h-5 w-5" /> },
                        { value: "Slack", icon: <MessageSquare className="h-5 w-5" /> },
                        { value: "WhatsApp", icon: <MessageSquare className="h-5 w-5" /> },
                        { value: "Zoom", icon: <Users className="h-5 w-5" /> },
                        { value: "Phone", icon: <Phone className="h-5 w-5" /> },
                        { value: "Teams", icon: <Users className="h-5 w-5" /> }
                      ].map((method) => (
                        <label key={method.value} className="relative flex items-center gap-3 p-3 rounded-xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer">
                          <input
                            type="radio"
                            name="preferredComm"
                            value={method.value}
                            checked={formData.preferredComm === method.value}
                            onChange={(e) => handleInputChange("preferredComm", e.target.value)}
                            className="absolute opacity-0"
                          />
                          <span className="text-[#fe3641]">{method.icon}</span>
                          <span className="text-sm font-medium">{method.value}</span>
                          {formData.preferredComm === method.value && (
                            <div className="absolute top-1 right-1">
                              <CheckCircle2 className="h-4 w-4 text-[#fe3641]" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Involvement level *
                    </label>
                    <div className="space-y-3">
                      {[
                        { value: "hands-on", title: "Hands-on", desc: "I want to be involved in every decision" },
                        { value: "regular", title: "Regular Check-ins", desc: "Updates at key milestones" },
                        { value: "hands-off", title: "Mostly Hands-off", desc: "Trust you to deliver the vision" }
                      ].map((level) => (
                        <label key={level.value} className="relative block p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:border-[#fe3641]/30 transition-all cursor-pointer">
                          <input
                            type="radio"
                            name="involvementLevel"
                            value={level.value}
                            checked={formData.involvementLevel === level.value}
                            onChange={(e) => handleInputChange("involvementLevel", e.target.value)}
                            className="absolute opacity-0"
                          />
                          <div>
                            <div className="font-semibold mb-1">{level.title}</div>
                            <div className="text-sm text-zinc-400">{level.desc}</div>
                          </div>
                          {formData.involvementLevel === level.value && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Section 9: Success Metrics */}
              {currentSection === 9 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How will you measure success? *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.successMetrics}
                      onChange={(e) => handleInputChange("successMetrics", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none"
                      placeholder="e.g., 50% increase in leads, 30% reduction in support tickets, improved brand perception..."
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { icon: <Target className="h-6 w-6" />, label: "More Sales" },
                      { icon: <Users className="h-6 w-6" />, label: "More Leads" },
                      { icon: <Zap className="h-6 w-6" />, label: "Save Time" },
                      { icon: <LineChart className="h-6 w-6" />, label: "Growth" }
                    ].map((metric) => (
                      <div key={metric.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <div className="text-[#fe3641] mx-auto mb-2">{metric.icon}</div>
                        <div className="text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Section 10: Additional Notes */}
              {currentSection === 10 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={8}
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-[#fe3641] focus:ring-2 focus:ring-[#fe3641]/20 outline-none transition-all resize-none"
                      placeholder="Special requirements, concerns, timeline constraints, or any other important information..."
                    />
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#fe3641]/10 to-[#ff4757]/10 border border-[#fe3641]/20">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#fe3641]" />
                      Ready to submit?
                    </h3>
                    <p className="text-sm text-zinc-300 mb-4">
                      By submitting this form, you&apos;re taking the first step toward transforming your business with AI and modern technology.
                      We&apos;ll review your information and get back to you within 24 hours with a personalized proposal.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Send className="h-4 w-4" />
                      <span>Form will be sent to kodedit.io@gmail.com</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-8 border-t border-white/10">
                <button
                  type="button"
                  onClick={prevSection}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                
                {currentSection < sections.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextSection}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fe3641] to-[#ff4757] rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[#fe3641]/20 transition-all"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#fe3641] to-[#ff4757] rounded-xl hover:shadow-xl hover:shadow-[#fe3641]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                  >
                    {loading ? "Submitting..." : "Submit Form"}
                    <Send className="h-4 w-4" />
                  </motion.button>
                )}
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}