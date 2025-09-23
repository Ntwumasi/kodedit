// Template rendering functions for different business types

import { formatExpirationDate, type DemoLink } from '@/lib/demo-utils';
import { type DemoSiteData } from '@/lib/demo-data';

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

interface TemplateProps {
  siteData: DemoSiteData;
  demo: DemoLink | null;
}

// Construction Template (Masonry, Builders, Plastering)
export function ConstructionTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Bold Header with Company Info */}
      <header className="bg-white shadow-lg border-b-8" style={{ borderBottomColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              {siteData.logo?.type === 'custom' && (
                <div className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
                  <div className="grid grid-cols-2 gap-2 w-16 h-16">
                    <div className="rounded bg-white"></div>
                    <div className="rounded" style={{ backgroundColor: getColorValue(siteData.colors.secondary) }}></div>
                    <div className="rounded" style={{ backgroundColor: getColorValue(siteData.colors.secondary) }}></div>
                    <div className="rounded bg-white"></div>
                  </div>
                </div>
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {siteData.businessName}
                </h1>
                <p className="text-xl text-gray-600">{siteData.tagline}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {siteData.ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${
                    button.type === 'primary'
                      ? 'text-white shadow-lg hover:shadow-xl'
                      : 'border-3 bg-white hover:text-white'
                  }`}
                  style={{
                    backgroundColor: button.type === 'primary' ? getColorValue(siteData.colors.primary) : undefined,
                    borderColor: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined,
                    color: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined,
                    borderWidth: button.type === 'secondary' ? '3px' : undefined
                  }}
                  onMouseEnter={(e) => {
                    if (button.type === 'secondary') {
                      e.currentTarget.style.backgroundColor = getColorValue(siteData.colors.primary);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (button.type === 'secondary') {
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero with large image area */}
      <section className="py-20" style={{ backgroundColor: getColorValue(siteData.colors.background) }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Quality Work, <span style={{ color: getColorValue(siteData.colors.primary) }}>Every Time</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{siteData.description}</p>
              {siteData.specialFeatures && (
                <div className="space-y-4">
                  {siteData.specialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}></div>
                      <span className="text-lg text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-8" style={{ borderTopColor: getColorValue(siteData.colors.primary) }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: getColorValue(siteData.colors.primary) }}>Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteData.services.map((service, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded border-l-4" style={{ borderLeftColor: getColorValue(siteData.colors.primary) }}>
                    <span className="font-semibold text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 text-white" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-white/90 mb-8">Get your free estimate today</p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            {siteData.contact.phone && (
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">📞 {siteData.contact.phone}</span>
              </div>
            )}
            {siteData.contact.email && (
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">✉️ {siteData.contact.email}</span>
              </div>
            )}
            {siteData.contact.website && (
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">🌐 {siteData.contact.website}</span>
              </div>
            )}
          </div>
          {siteData.contact.addresses && siteData.contact.addresses.length > 0 && (
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Service Areas</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {siteData.contact.addresses.map((address, index) => (
                  <div key={index} className="bg-white/20 px-4 py-2 rounded">
                    <strong>{address.location}</strong>
                    {address.phone && <span className="block text-sm">📞 {address.phone}</span>}
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

// Moving Template
export function MovingTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Energetic Header */}
      <header className="relative overflow-hidden" style={{ background: `linear-gradient(45deg, ${getColorValue(siteData.colors.primary)}, ${getColorValue(siteData.colors.secondary)})` }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {siteData.businessName}
            </h1>
            <p className="text-2xl md:text-3xl mb-8">{siteData.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {siteData.ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-10 py-5 text-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    button.type === 'primary'
                      ? 'bg-white text-gray-800 shadow-2xl hover:shadow-3xl'
                      : 'border-3 border-white text-white hover:bg-white hover:text-gray-800'
                  }`}
                  style={{
                    borderWidth: button.type === 'secondary' ? '3px' : undefined
                  }}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: getColorValue(siteData.colors.primary) }}>Moving Made Simple</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4" style={{ borderTopColor: getColorValue(siteData.colors.primary) }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: getColorValue(siteData.colors.primary, 0.1), color: getColorValue(siteData.colors.primary) }}>
                  📦
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{service}</h3>
                <p className="text-gray-600 text-center">Professional service with care and attention to detail.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8" style={{ color: getColorValue(siteData.colors.primary) }}>Why Choose {siteData.businessName}?</h2>
            <p className="text-xl text-gray-600 mb-12">{siteData.description}</p>
            {siteData.specialFeatures && (
              <div className="grid md:grid-cols-2 gap-8">
                {siteData.specialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-white" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Move?</h3>
          <p className="text-xl text-white/90 mb-8">Contact us for your free estimate</p>
          <div className="flex flex-wrap justify-center gap-6">
            {siteData.contact.phone && <span className="text-xl">📞 {siteData.contact.phone}</span>}
            {siteData.contact.email && <span className="text-xl">✉️ {siteData.contact.email}</span>}
            {siteData.contact.website && <span className="text-xl">🌐 {siteData.contact.website}</span>}
          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs backdrop-blur">
        Demo by Kodedit
      </div>
    </div>
  );
}

// Wellness Template (Yoga, Chiropractic)
// Design Template (Kitchen & Bath)
export function DesignTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Minimal Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-2" style={{ color: getColorValue(siteData.colors.primary) }}>
              {siteData.businessName}
            </h1>
            <p className="text-xl text-gray-600">{siteData.tagline}</p>
          </div>
        </div>
      </header>

      {/* Hero with split design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight" style={{ color: getColorValue(siteData.colors.primary) }}>
                Spaces that inspire.<br/>Designs that endure.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{siteData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {siteData.ctaButtons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-8 py-4 font-medium text-lg transition-all duration-300 ${
                      button.type === 'primary'
                        ? 'text-white'
                        : 'border text-gray-800 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: button.type === 'primary' ? getColorValue(siteData.colors.primary) : undefined,
                      borderColor: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined
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
            <div className="p-8 border-l-8" style={{ borderLeftColor: getColorValue(siteData.colors.primary) }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: getColorValue(siteData.colors.primary) }}>Our Expertise</h3>
              <div className="space-y-6">
                {siteData.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}></div>
                    <span className="text-lg text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {siteData.specialFeatures && (
        <section className="py-20" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.3) }}>
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-light text-center mb-16" style={{ color: getColorValue(siteData.colors.primary) }}>Why Work With Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteData.specialFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: getColorValue(siteData.colors.primary) }}>
                    <span className="text-2xl" style={{ color: getColorValue(siteData.colors.primary) }}>✓</span>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-20 text-white" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-light mb-8">Let&apos;s Create Something Beautiful Together</h3>
          <div className="max-w-2xl mx-auto">
            {siteData.contact.addresses && siteData.contact.addresses.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {siteData.contact.addresses.map((address, index) => (
                  <div key={index} className="bg-white/20 p-6 rounded">
                    <h4 className="font-semibold mb-2">{address.location}</h4>
                    <p className="text-sm text-white/90 mb-2">{address.address}</p>
                    {address.phone && <p className="text-sm">📞 {address.phone}</p>}
                  </div>
                ))}
              </div>
            )}
            {siteData.contact.website && (
              <p className="text-lg">🌐 {siteData.contact.website}</p>
            )}
          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs backdrop-blur">
        Demo by Kodedit
      </div>
    </div>
  );
}

// Technical Template (Electrical)
export function TechnicalTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Tech Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-white/20"></div>
            ))}
          </div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block p-4 rounded border-2 border-white/30">
                <div className="grid grid-cols-3 gap-2 w-12 h-12">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-yellow-400 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-yellow-400 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-yellow-400 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-yellow-400 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{siteData.businessName}</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">{siteData.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {siteData.ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${
                    button.type === 'primary'
                      ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                      : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Electrical Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.map((service, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-yellow-400 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <h3 className="font-bold">{service}</h3>
                </div>
                <p className="text-gray-300 text-sm">Professional electrical service with safety and quality guaranteed.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Why Choose {siteData.businessName}?</h3>
            <p className="text-xl text-gray-300">{siteData.description}</p>
          </div>
          {siteData.specialFeatures && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteData.specialFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-gray-900">⚡</span>
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Electrical Work?</h3>
          <p className="text-xl text-gray-200 mb-8">Available 24/7 for emergencies</p>
          <div className="text-xl space-y-2">
            {siteData.contact.phone && <div>📞 Emergency: {siteData.contact.phone}</div>}
            {siteData.contact.email && <div>✉️ {siteData.contact.email}</div>}
          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs backdrop-blur">
        Demo by Kodedit
      </div>
    </div>
  );
}

// Development Template (Real Estate Development)
export function DevelopmentTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b-2" style={{ borderBottomColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold" style={{ color: getColorValue(siteData.colors.primary) }}>
                {siteData.businessName}
              </h1>
              <p className="text-lg text-gray-600">{siteData.tagline}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {siteData.ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 font-semibold transition-all duration-300 ${
                    button.type === 'primary'
                      ? 'text-white'
                      : 'border-2 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: button.type === 'primary' ? getColorValue(siteData.colors.primary) : undefined,
                    borderColor: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined,
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
        </div>
      </header>

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.3) }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: getColorValue(siteData.colors.primary) }}>
              Building Communities, Creating Value
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">{siteData.description}</p>

            {/* Value propositions */}
            {siteData.specialFeatures && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {siteData.specialFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderTopColor: getColorValue(siteData.colors.primary) }}>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: getColorValue(siteData.colors.primary, 0.1) }}>
                      <span className="text-2xl" style={{ color: getColorValue(siteData.colors.primary) }}>🏠</span>
                    </div>
                    <p className="font-semibold text-gray-800">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-16" style={{ color: getColorValue(siteData.colors.primary) }}>Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service, index) => (
              <div key={index} className="p-6 border-l-4 hover:shadow-lg transition-shadow" style={{ borderLeftColor: getColorValue(siteData.colors.primary), backgroundColor: getColorValue(siteData.colors.background, 0.1) }}>
                <h4 className="text-xl font-bold mb-3" style={{ color: getColorValue(siteData.colors.primary) }}>{service}</h4>
                <p className="text-gray-600">Professional service delivered with integrity and expertise.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {siteData.testimonials && siteData.testimonials.length > 0 && (
        <section className="py-20" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.2) }}>
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-16" style={{ color: getColorValue(siteData.colors.primary) }}>Client Testimonials</h3>
            <div className="max-w-4xl mx-auto">
              {siteData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md mb-8 border-l-8" style={{ borderLeftColor: getColorValue(siteData.colors.primary) }}>
                  <p className="text-lg text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-semibold" style={{ color: getColorValue(siteData.colors.primary) }}>– {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16 text-white" style={{ backgroundColor: getColorValue(siteData.colors.primary) }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-xl text-white/90 mb-8">Contact us to discuss your property needs</p>
          {siteData.contact.phone && (
            <div className="text-xl mb-4">📞 {siteData.contact.phone}</div>
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

export function WellnessTemplate({ siteData, demo }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${getColorValue(siteData.colors.background)}, white)` }}>
      {/* Demo expires banner */}
      <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center text-sm font-medium">
        🔒 Demo expires on {demo && formatExpirationDate(demo.expiresAt)}
      </div>

      {/* Floating Header */}
      <div className="relative px-4 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border" style={{ borderColor: getColorValue(siteData.colors.primary, 0.2) }}>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-light mb-4" style={{ color: getColorValue(siteData.colors.primary) }}>
                {siteData.businessName}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">{siteData.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {siteData.ctaButtons.map((button, index) => (
                  <button
                    key={index}
                    className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                      button.type === 'primary'
                        ? 'text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'border-2 bg-white/80 hover:bg-white'
                    }`}
                    style={{
                      backgroundColor: button.type === 'primary' ? getColorValue(siteData.colors.primary) : undefined,
                      borderColor: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined,
                      color: button.type === 'secondary' ? getColorValue(siteData.colors.primary) : undefined
                    }}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content with cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* About Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border" style={{ borderColor: getColorValue(siteData.colors.primary, 0.1) }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: getColorValue(siteData.colors.primary) }}>About Us</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{siteData.description}</p>
            {siteData.specialFeatures && (
              <ul className="space-y-2">
                {siteData.specialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-2xl" style={{ color: getColorValue(siteData.colors.primary) }}>✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border" style={{ borderColor: getColorValue(siteData.colors.primary, 0.1) }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: getColorValue(siteData.colors.primary) }}>Our Services</h3>
            <div className="grid gap-3">
              {siteData.services.map((service, index) => (
                <div key={index} className="p-4 rounded-lg border-l-4" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.3), borderLeftColor: getColorValue(siteData.colors.primary) }}>
                  <span className="font-medium text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {siteData.testimonials && siteData.testimonials.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border mb-16" style={{ borderColor: getColorValue(siteData.colors.primary, 0.1) }}>
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: getColorValue(siteData.colors.primary) }}>What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {siteData.testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: getColorValue(siteData.colors.background, 0.2) }}>
                  <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-semibold" style={{ color: getColorValue(siteData.colors.primary) }}>– {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="bg-gradient-to-r p-8 rounded-2xl text-white text-center" style={{ backgroundImage: `linear-gradient(to right, ${getColorValue(siteData.colors.primary)}, ${getColorValue(siteData.colors.secondary)})` }}>
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-xl text-white/90 mb-6">Contact us to start your wellness journey today</p>
          {(siteData.contact.phone || siteData.contact.email || siteData.contact.website) && (
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              {siteData.contact.phone && <span>📞 {siteData.contact.phone}</span>}
              {siteData.contact.email && <span>✉️ {siteData.contact.email}</span>}
              {siteData.contact.website && <span>🌐 {siteData.contact.website}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs backdrop-blur">
        Demo by Kodedit
      </div>
    </div>
  );
}