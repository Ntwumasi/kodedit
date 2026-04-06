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

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-zinc-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-zinc-400 mb-4">
                By accessing or using the Kodedit platform and services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use our Services.
              </p>
              <p className="text-zinc-400">
                These Terms constitute a legally binding agreement between you and Kodedit, Inc. (&quot;Kodedit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">2. Description of Services</h2>
              <p className="text-zinc-400 mb-4">
                Kodedit provides an AI-powered software development platform that assists with the full development lifecycle, including requirements analysis, planning, code generation, testing, and code review. Our Services include:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>AI-assisted code generation and completion</li>
                <li>Requirements and planning assistance</li>
                <li>Automated testing and quality analysis</li>
                <li>Code review and quality gates</li>
                <li>Team collaboration features</li>
                <li>API access for integrations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">3. Account Registration</h2>
              <p className="text-zinc-400 mb-4">
                To use certain features of our Services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">4. Acceptable Use</h2>
              <p className="text-zinc-400 mb-4">You agree not to use our Services to:</p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Generate code intended for malicious purposes</li>
                <li>Reverse engineer our AI models or algorithms</li>
                <li>Use automated methods to access Services beyond permitted API usage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">5. Intellectual Property</h2>

              <h3 className="text-lg font-medium mb-2 text-white">5.1 Your Content</h3>
              <p className="text-zinc-400 mb-4">
                You retain ownership of all code, content, and materials you submit to our Services (&quot;Your Content&quot;). By using our Services, you grant Kodedit a limited license to process Your Content solely to provide and improve our Services.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white">5.2 AI-Generated Content</h3>
              <p className="text-zinc-400 mb-4">
                Content generated by our AI tools in response to your inputs belongs to you, subject to any applicable third-party licenses. You are responsible for reviewing and ensuring AI-generated code meets your requirements and complies with applicable licenses.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white">5.3 Our Services</h3>
              <p className="text-zinc-400">
                Kodedit retains all rights in our Services, including our AI models, algorithms, software, documentation, and trademarks. These Terms do not grant you any rights to our intellectual property except as expressly stated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">6. Payment Terms</h2>
              <p className="text-zinc-400 mb-4">
                For paid subscription plans:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Fees are charged in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We may change pricing with 30 days notice</li>
                <li>You are responsible for all applicable taxes</li>
                <li>Failure to pay may result in suspension of Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">7. Service Availability</h2>
              <p className="text-zinc-400 mb-4">
                We strive to maintain high availability but do not guarantee uninterrupted access. We may:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Perform scheduled maintenance with reasonable notice</li>
                <li>Modify or discontinue features with notice</li>
                <li>Suspend access for security or compliance reasons</li>
              </ul>
              <p className="text-zinc-400">
                For enterprise customers, specific SLAs may be defined in separate agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">8. AI-Specific Terms</h2>
              <p className="text-zinc-400 mb-4">
                You acknowledge that:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>AI-generated suggestions may contain errors and should be reviewed</li>
                <li>AI outputs may not be unique and similar outputs may be provided to others</li>
                <li>You are responsible for verifying AI-generated code meets your needs</li>
                <li>AI capabilities may change as we improve our models</li>
                <li>Our quality gates reduce but do not eliminate the risk of defects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">9. Disclaimer of Warranties</h2>
              <p className="text-zinc-400 mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-zinc-400">
                We do not warrant that the Services will be error-free, secure, or uninterrupted, or that AI-generated content will be accurate, complete, or suitable for your purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">10. Limitation of Liability</h2>
              <p className="text-zinc-400 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KODEDIT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES.
              </p>
              <p className="text-zinc-400">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO KODEDIT IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">11. Indemnification</h2>
              <p className="text-zinc-400">
                You agree to indemnify and hold harmless Kodedit and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Services, your violation of these Terms, or your violation of any rights of third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">12. Termination</h2>
              <p className="text-zinc-400 mb-4">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li>Your right to access the Services ends immediately</li>
                <li>You remain responsible for any outstanding fees</li>
                <li>We may delete your data after a reasonable retention period</li>
                <li>Provisions that by their nature should survive will survive</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">13. Governing Law and Disputes</h2>
              <p className="text-zinc-400 mb-4">
                These Terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.
              </p>
              <p className="text-zinc-400">
                Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in any court of competent jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">14. Changes to Terms</h2>
              <p className="text-zinc-400">
                We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms and updating the &quot;Last updated&quot; date. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">15. General Provisions</h2>
              <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2">
                <li><strong className="text-white">Entire Agreement:</strong> These Terms constitute the entire agreement between you and Kodedit regarding the Services.</li>
                <li><strong className="text-white">Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
                <li><strong className="text-white">Waiver:</strong> Failure to enforce any right does not waive that right.</li>
                <li><strong className="text-white">Assignment:</strong> You may not assign these Terms without our consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">16. Contact Information</h2>
              <p className="text-zinc-400 mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <p className="text-zinc-300">Kodedit, Inc.</p>
                <p className="text-zinc-400">Email: <a href="mailto:legal@kodedit.com" className="text-[#fe3641] hover:underline">legal@kodedit.com</a></p>
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
              <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white font-medium">Terms</Link>
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
