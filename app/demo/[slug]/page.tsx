'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDemoLink, isDemoLinkValid, formatExpirationDate, type DemoLink } from '@/lib/demo-utils';
import { getDemoSiteData, type DemoSiteData } from '@/lib/demo-data';

export default function DemoPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [demo, setDemo] = useState<DemoLink | null>(null);
  const [siteData, setSiteData] = useState<DemoSiteData | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll simulate with our utility functions
    const demoLink = getDemoLink(slug);

    if (demoLink && isDemoLinkValid(demoLink)) {
      setDemo(demoLink);
      setIsValid(true);

      // Try to get site data - if slug is a business ID, use it directly
      let businessData = getDemoSiteData(slug);

      // If not found, try to extract business ID from client name or use default
      if (!businessData && demoLink.clientName) {
        const businessId = demoLink.clientName.toLowerCase().replace(/[^a-z]/g, '');
        businessData = getDemoSiteData(businessId);
      }

      // Default to Atlantic if no specific data found
      if (!businessData) {
        businessData = getDemoSiteData('atlantic');
      }

      setSiteData(businessData);
    } else {
      setIsValid(false);
    }

    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading demo...</div>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Demo Link Expired</h1>
          <p className="text-gray-300 mb-6">
            This demo link has expired or is no longer valid.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Kodedit
          </Link>
        </div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading site data...</div>
      </div>
    );
  }

  // Dynamic Demo Template
  return (
    <div className="min-h-screen" style={{ backgroundColor: getColorValue(siteData.colors.background) }}>
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Header */}
      <header className="text-white shadow-xl" style={{ background: `linear-gradient(to right, ${getColorValue(siteData.colors.primary)}, ${getColorValue(siteData.colors.secondary)})` }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            {/* Logo */}
            {siteData.logo?.type === 'custom' && (
              <div className="bg-white p-2 rounded-lg">
                <div className="grid grid-cols-2 gap-1 w-12 h-12">
                  <div className="rounded-sm" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}></div>
                  <div className="rounded-sm" style={{ backgroundColor: getColorValue(siteData.colors.secondary) }}></div>
                  <div className="rounded-sm" style={{ backgroundColor: getColorValue(siteData.colors.secondary) }}></div>
                  <div className="rounded-sm" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}></div>
                </div>
              </div>
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {siteData.businessName.toUpperCase()}
              </h1>
              <p className="text-white/90 text-sm">{siteData.tagline}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 py-4 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20" style={{ background: `linear-gradient(to right, ${getColorValue(siteData.colors.background)}, ${getColorValue(siteData.colors.background, 0.7)})` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: getColorValue(siteData.colors.primary) }}>
            {siteData.tagline}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: getColorValue(siteData.colors.accent) }}>
            {siteData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {siteData.ctaButtons.map((button, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  button.type === 'primary'
                    ? 'text-white'
                    : 'border-2 hover:text-white'
                }`}
                style={{
                  backgroundColor: button.type === 'primary' ? getColorValue(siteData.colors.primary) : 'transparent',
                  borderColor: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : 'transparent',
                  color: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined
                }}
                onMouseEnter={(e) => {
                  if (button.type === 'secondary') {
                    e.currentTarget.style.backgroundColor = getColorValue(siteData.colors.primary);
                  }
                }}
                onMouseLeave={(e) => {
                  if (button.type === 'secondary') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About/Special Features Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: getColorValue(siteData.colors.primary) }}>
              Why Choose {siteData.businessName}?
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {siteData.description}
                </p>
                {siteData.contact.phone && (
                  <p className="text-gray-600 mb-2">
                    <strong>Phone:</strong> {siteData.contact.phone}
                  </p>
                )}
                {siteData.contact.email && (
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> {siteData.contact.email}
                  </p>
                )}
                {siteData.contact.website && (
                  <p className="text-gray-600 mb-6">
                    <strong>Website:</strong> {siteData.contact.website}
                  </p>
                )}
              </div>
              <div className="p-8 rounded-xl text-white" style={{ background: `linear-gradient(to br, ${getColorValue(siteData.colors.primary)}, ${getColorValue(siteData.colors.secondary)})` }}>
                <h4 className="text-2xl font-bold mb-4">Our Strengths</h4>
                <ul className="space-y-3">
                  {siteData.specialFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-300 text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.3) }}>
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: getColorValue(siteData.colors.primary) }}>Our Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4"
                style={{ borderLeftColor: getColorValue(siteData.colors.primary) }}
              >
                <h4 className="font-bold mb-2" style={{ color: getColorValue(siteData.colors.primary) }}>{service}</h4>
                <p className="text-gray-600 text-sm">Professional service with attention to detail and customer satisfaction.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (if available) */}
      {siteData.testimonials && siteData.testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: getColorValue(siteData.colors.primary) }}>What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-semibold" style={{ color: getColorValue(siteData.colors.primary) }}>– {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 text-white" style={{ background: `linear-gradient(to r, ${getColorValue(siteData.colors.primary)}, ${getColorValue(siteData.colors.secondary)})` }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to Get Started?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {siteData.ctaButtons.map((button, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  button.type === 'primary'
                    ? 'bg-white hover:bg-gray-100'
                    : 'border-2 border-white text-white hover:bg-white'
                }`}
                style={{
                  color: button.type === 'primary' ? getColorValue(siteData.colors.primary) : undefined
                }}
                onMouseEnter={(e) => {
                  if (button.type === 'secondary') {
                    e.currentTarget.style.color = getColorValue(siteData.colors.primary);
                  }
                }}
                onMouseLeave={(e) => {
                  if (button.type === 'secondary') {
                    e.currentTarget.style.color = 'white';
                  }
                }}
              >
                {button.text}
              </button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {siteData.contact.phone && (
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Phone</h4>
                <p>{siteData.contact.phone}</p>
              </div>
            )}
            {siteData.contact.email && (
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Email</h4>
                <p>{siteData.contact.email}</p>
              </div>
            )}
            {siteData.contact.website && (
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Website</h4>
                <p className="break-all">{siteData.contact.website}</p>
              </div>
            )}
          </div>

          {/* Addresses */}
          {siteData.contact.addresses && siteData.contact.addresses.length > 0 && (
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Our Locations</h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {siteData.contact.addresses.map((address, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <h5 className="font-bold mb-2">{address.location}</h5>
                    <p className="mb-2">{address.address}</p>
                    {address.phone && <p>Phone: {address.phone}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs backdrop-blur">
        Demo by Kodedit
      </div>
    </div>
  );
}

// Helper function to convert Tailwind color to actual color value
function getColorValue(color: string, opacity = 1): string {
  const colorMap: Record<string, string> = {
    'red-700': '#b91c1c',
    'red-800': '#991b1b',
    'stone-100': '#f5f5f4',
    'stone-600': '#57534e',
    'purple-600': '#9333ea',
    'purple-800': '#6b21a8',
    'purple-50': '#faf5ff',
    'pink-500': '#ec4899',
    'blue-600': '#2563eb',
    'blue-50': '#eff6ff',
    'yellow-500': '#eab308',
    'slate-700': '#334155',
    'slate-600': '#475569',
    'slate-50': '#f8fafc',
    'slate-800': '#1e293b',
    'green-600': '#16a34a',
    'green-700': '#15803d',
    'green-800': '#166534',
    'green-50': '#f0fdf4',
    'amber-600': '#d97706',
    'amber-700': '#b45309',
    'amber-50': '#fffbeb',
    'orange-600': '#ea580c',
    'teal-600': '#0d9488',
    'teal-700': '#0f766e',
    'teal-50': '#f0fdfa'
  };

  const baseColor = colorMap[color] || '#6b7280'; // fallback to gray

  if (opacity < 1) {
    // Convert hex to rgba
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return baseColor;
}