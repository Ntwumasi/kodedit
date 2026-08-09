import type { Metadata } from "next";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Kodedit handles information sent through kodedit.io. No cookies, no analytics, no third-party requests — only what you send us directly.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-hairline">
        <Shell className="py-16 md:py-20">
          <MonoLabel as="p" className="mb-7">
            Legal
          </MonoLabel>
          <h1 className="text-[clamp(1.875rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Privacy
          </h1>
          <p className="t-lead measure-read mt-6">
            This site sets no cookies, runs no analytics, and loads nothing from
            a third party. The only information we hold is what you send us.
          </p>
          <MonoLabel as="p" className="mt-8">
            Last updated: August 2026
          </MonoLabel>
        </Shell>
      </header>

      <Shell className="py-14 md:py-20">
        <div className="legal measure-read">
          <section>
            <h2>1. Who we are, and what this covers</h2>
            <p>
              Kodedit is an AI studio and venture lab based in Accra, Ghana. In
              this policy &ldquo;we&rdquo; and &ldquo;the studio&rdquo; mean
              Kodedit, and &ldquo;you&rdquo; means anyone visiting this site or
              contacting us through it.
            </p>
            <p>
              This policy covers <strong>kodedit.io only</strong>. Our ventures
              run as separate products with their own terms and their own
              privacy policies. MedSys in particular handles clinical records on
              behalf of the clinics that operate it. No patient data from MedSys,
              or from any other venture, reaches this website or is governed by
              this policy.
            </p>
          </section>

          <section>
            <h2>2. What we collect</h2>
            <p>We collect three things, and only three.</p>

            <h3>2.1 The contact form</h3>
            <p>
              If you use the form on our contact page we receive your name, your
              email address, your organisation if you choose to give it, and
              whatever you write in the message field. It is sent to our inbox.
              Nothing is stored on the website itself.
            </p>

            <h3>2.2 The project intake form</h3>
            <p>
              Our longer intake questionnaire collects the business and project
              information you enter across its sections: contact details,
              business description, project goals, branding preferences,
              indicative budget range, timeline, and any notes you add. It
              reaches us the same way, by email.
            </p>
            <p>
              That form has an optional logo upload. Any file you attach is
              transmitted with the submission but is not read, forwarded, or
              retained by us. If you want us to have your logo, send it by email
              instead.
            </p>

            <h3>2.3 Server logs</h3>
            <p>
              Our hosting provider records standard request logs: IP address,
              browser user-agent string, the page requested, and a timestamp.
              These are generated automatically by the infrastructure, are used
              for security and diagnostics, and are held by the provider on a
              short rolling window.
            </p>
          </section>

          <section>
            <h2>3. What we do not collect</h2>
            <p>
              This is worth stating plainly, because most sites cannot.
            </p>
            <ul>
              <li>
                <strong>No cookies.</strong> This site sets none — not for
                analytics, not for preferences, not for anything.
              </li>
              <li>
                <strong>No analytics.</strong> There is no web analytics, no
                product analytics, and no tracking pixel on any page.
              </li>
              <li>
                <strong>No third-party requests.</strong> Fonts, styles, images,
                and scripts are all served from this domain. Loading a page here
                contacts no other company.
              </li>
              <li>
                <strong>No accounts, no payments.</strong> There is nothing to
                sign into and nothing to pay for on this site.
              </li>
              <li>
                <strong>No advertising or profiling.</strong> We do not build
                profiles, run retargeting, or make automated decisions about you.
              </li>
            </ul>
            <p>
              We do not sell personal information and we do not share it for
              anyone else&rsquo;s marketing.
            </p>
          </section>

          <section>
            <h2>4. Why we use it</h2>
            <p>
              We use what you send us to reply to you, to work out whether a
              project is a fit for the studio, and to scope and quote the work if
              it is. If we go on to work together, that correspondence becomes
              part of the project record.
            </p>
            <p>
              Where data protection law requires a legal basis, ours is our
              legitimate interest in responding to enquiries about our work, and
              in taking steps at your request before entering a contract. Server
              logs rest on our legitimate interest in keeping the site secure and
              working.
            </p>
          </section>

          <section>
            <h2>5. Who else processes it</h2>
            <p>
              We keep the list of companies that touch your information as short
              as we can. At present it is three.
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — hosting and content delivery for this
                site, and the source of the server logs described above.
              </li>
              <li>
                <strong>Resend</strong> — delivery of contact-form messages to
                our inbox.
              </li>
              <li>
                <strong>Google</strong> — delivery and storage of intake-form
                submissions and of our email correspondence generally.
              </li>
            </ul>
            <p>
              Each acts as a processor on our behalf under its own terms. Beyond
              these, we disclose information only where the law requires it, or
              where it is necessary to protect our rights or someone&rsquo;s
              safety.
            </p>
          </section>

          <section>
            <h2>6. Confidentiality of what you tell us</h2>
            <p>
              People send us unreleased product plans and commercially sensitive
              detail about how their business runs. We treat the contents of an
              enquiry as confidential. We do not publish it and we do not discuss
              it outside the studio.
            </p>
            <p>
              We are glad to sign a non-disclosure agreement before you send
              anything substantial. Ask, and we will.
            </p>
          </section>

          <section>
            <h2>7. How long we keep it</h2>
            <p>
              Enquiries that do not become projects are kept while they might
              still be relevant — usually no more than two years — and then
              deleted. Correspondence about work we actually did is kept for as
              long as the engagement needs it, and afterwards for as long as our
              tax and accounting obligations require.
            </p>
            <p>
              You can ask us to delete your enquiry at any point and we will,
              unless we are required to keep it.
            </p>
          </section>

          <section>
            <h2>8. Your rights</h2>
            <p>
              Depending on where you live, you may have the right to ask us to:
            </p>
            <ul>
              <li>Tell you what we hold about you, and give you a copy.</li>
              <li>Correct anything that is wrong.</li>
              <li>Delete it.</li>
              <li>Restrict or object to how we are using it.</li>
              <li>Provide it in a portable, machine-readable form.</li>
              <li>Withdraw consent, where we relied on consent.</li>
            </ul>
            <p>
              Email us and we will action it. We do not charge for this and we
              will not make it difficult.
            </p>
            <p>
              If you are in Ghana, the Data Protection Act, 2012 (Act 843)
              applies and you may complain to the Data Protection Commission. If
              you are in the UK or the EEA, the UK GDPR or the GDPR applies and
              you may complain to your supervisory authority. We would rather you
              came to us first.
            </p>
          </section>

          <section>
            <h2>9. Where your information goes</h2>
            <p>
              The studio is based in Ghana and works remotely. Our hosting and
              email providers operate infrastructure in the United States and
              Europe, so information you send us is transferred and stored
              outside your country of residence. Where the law requires
              safeguards for those transfers, we rely on the standard contractual
              terms our providers make available.
            </p>
          </section>

          <section>
            <h2>10. Security</h2>
            <p>
              The site is served entirely over HTTPS. Submissions are relayed
              straight to email rather than accumulating in a database here,
              which means there is no store of enquiries on this site to breach.
              Access to the inbox is limited to the studio and protected by
              two-factor authentication.
            </p>
            <p>
              No system is perfectly secure. Please do not send us passwords,
              payment card details, health records, or other special-category
              information through these forms.
            </p>
          </section>

          <section>
            <h2>11. Children</h2>
            <p>
              This site is aimed at businesses and is not directed at children.
              We do not knowingly collect information from anyone under 16. If
              you believe a child has sent us something, tell us and we will
              delete it.
            </p>
          </section>

          <section>
            <h2>12. Changes</h2>
            <p>
              If we change this policy we will update the date at the top of this
              page. If a change materially affects how we handle information you
              have already sent us, we will contact you about it directly.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>
              Questions about this policy, or about anything we hold, go to:
            </p>
            <div>
              <p>Kodedit</p>
              <p>Accra, Ghana</p>
              <p>
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
          </section>
        </div>
      </Shell>
    </>
  );
}
