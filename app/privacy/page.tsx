"use client";

import Link from "next/link";

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

export default function PrivacyPage() {
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

      {/* Content */}
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-zinc-400 mb-4">
                Kodedit, Inc. (&quot;Kodedit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered development platform and related services.
              </p>
              <p className="text-zinc-400">
                By using Kodedit, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">2. Information We Collect</h2>

              <h3 className="text-lg font-medium mb-2 text-white">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Account information (name, email address, company name)</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Code and project data you submit for AI assistance</li>
                <li>Communications with our support team</li>
                <li>Feedback and survey responses</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 text-white">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Usage data (features used, interaction patterns, session duration)</li>
                <li>Device information (browser type, operating system, device identifiers)</li>
                <li>Log data (IP address, access times, pages viewed)</li>
                <li>Performance metrics and error reports</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-zinc-400 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Provide, maintain, and improve our AI development tools</li>
                <li>Process your requests and transactions</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Train and improve our AI models (with appropriate safeguards)</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">4. Code and Project Data</h2>
              <p className="text-zinc-400 mb-4">
                <strong className="text-white">Your code remains yours.</strong> We process code you submit to provide AI assistance, but we do not claim ownership of your code or use it to train models shared with other customers without your explicit consent.
              </p>
              <p className="text-zinc-400 mb-4">
                For enterprise customers, we offer options for:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Data isolation and dedicated infrastructure</li>
                <li>On-premises deployment</li>
                <li>Custom data retention policies</li>
                <li>Opting out of any model training programs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">5. Data Sharing and Disclosure</h2>
              <p className="text-zinc-400 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li><strong className="text-white">Service providers:</strong> Third parties that help us operate our business (hosting, analytics, payment processing)</li>
                <li><strong className="text-white">Business partners:</strong> With your consent, for integrated services</li>
                <li><strong className="text-white">Legal requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-white">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-zinc-400">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">6. Data Security</h2>
              <p className="text-zinc-400 mb-4">
                We implement appropriate technical and organizational measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Encryption in transit and at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">7. Data Retention</h2>
              <p className="text-zinc-400">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">8. Your Rights and Choices</h2>
              <p className="text-zinc-400 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-zinc-400">
                To exercise these rights, contact us at <a href="mailto:privacy@kodedit.com" className="text-[#fe3641] hover:underline">privacy@kodedit.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">9. International Data Transfers</h2>
              <p className="text-zinc-400">
                We may transfer your information to countries other than your country of residence. When we do so, we ensure appropriate safeguards are in place, including standard contractual clauses approved by relevant authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">10. Children&apos;s Privacy</h2>
              <p className="text-zinc-400">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">11. Changes to This Policy</h2>
              <p className="text-zinc-400">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <p className="text-zinc-400">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-lg border border-white/10 bg-white/5">
                <p className="text-zinc-300">Kodedit, Inc.</p>
                <p className="text-zinc-400">Email: <a href="mailto:privacy@kodedit.com" className="text-[#fe3641] hover:underline">privacy@kodedit.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-sm text-zinc-400">© 2024 Kodedit, Inc.</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white font-medium">Privacy</Link>
              <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
