import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/primitives/Section";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for using kodedit.io. The website only — studio engagements and our ventures are governed by their own separate agreements.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <header className="border-b border-hairline">
        <Shell className="py-16 md:py-20">
          <MonoLabel as="p" className="mb-7">
            Legal
          </MonoLabel>
          <h1 className="text-[clamp(1.875rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            Terms
          </h1>
          <p className="t-lead measure-read mt-6">
            These cover this website and nothing else. Work we do for you, and
            the ventures we operate, each run under their own agreement.
          </p>
          <MonoLabel as="p" className="mt-8">
            Last updated: August 2026
          </MonoLabel>
        </Shell>
      </header>

      <Shell className="py-14 md:py-20">
        <div className="legal measure-read">
          <section>
            <h2>1. What these terms cover</h2>
            <p>
              Kodedit LLC is an AI studio and venture lab, incorporated in Delaware,
              United States. These terms govern your use of{" "}
              <strong>kodedit.io</strong>. By using the site you accept them. If
              you do not, please stop using the site.
            </p>
            <p>Two things sit outside these terms, deliberately.</p>
            <ul>
              <li>
                <strong>Studio engagements.</strong> If we work together, that
                relationship is governed by a separate written agreement covering
                scope, fees, timelines, confidentiality, and who owns what.
                Nothing on this website is an offer to contract, a quote, or a
                commitment to take on a project.
              </li>
              <li>
                <strong>Our ventures.</strong> MedSys and any venture that
                follows it are separate products with their own terms of service,
                published with the product. Using this site gives you no rights
                to any of them.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Using the site</h2>
            <p>
              You may read the site, quote from it under section 3, and contact
              us through it. You may not:
            </p>
            <ul>
              <li>
                Interfere with the site or try to gain access to systems or data
                that are not published here.
              </li>
              <li>
                Use automated tools to place load on the site beyond ordinary
                reading, or to send bulk submissions through our forms.
              </li>
              <li>
                Send us anything unlawful, malicious, or infringing through our
                forms.
              </li>
              <li>
                Misrepresent yourself, or imply an association with the studio
                that does not exist.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Our content</h2>
            <p>
              The text, diagrams, layout, and code of this site, along with the
              Kodedit name and wordmark, belong to us or are used with
              permission.
            </p>
            <p>
              <strong>Quoting the lab notes is welcome.</strong> You may quote
              reasonable extracts from anything we publish in the lab for
              commentary, teaching, criticism, or research, provided you
              attribute it to Kodedit and link to the original note. You do not
              need to ask.
            </p>
            <p>
              What we do ask is that you not republish a note in full, present
              our writing as your own, or use the Kodedit name or wordmark in a
              way that suggests we endorse you.
            </p>
            <p>
              We also reserve our rights in respect of bulk extraction of this
              site for text and data mining or for training machine-learning
              models. We build such systems ourselves, and we think the courtesy
              runs both ways: ask us first.
            </p>
          </section>

          <section>
            <h2>4. What you send us</h2>
            <p>
              When you send us an enquiry or an intake form, we treat its
              contents as confidential and handle it as described in our{" "}
              <Link href="/privacy">privacy policy</Link>. We are happy to sign a
              non-disclosure agreement before you share anything sensitive.
            </p>
            <p>
              Sending us material does not transfer ownership of it. You keep
              your intellectual property; we only use what you send to evaluate
              and respond to your enquiry.
            </p>
            <p>
              One thing to be clear about, because it protects both of us: we
              work across a small number of industries and think publicly about
              recurring problems in them. Receiving your enquiry does not stop us
              from working on similar problems, for ourselves or for others,
              provided we do not use your confidential information to do it.
            </p>
            <p>
              You are responsible for having the right to send us whatever you
              send.
            </p>
          </section>

          <section>
            <h2>5. The lab notes are not professional advice</h2>
            <p>
              This one matters. Our lab notes discuss clinical software: how
              consultations are recorded, how drug-interaction alerts are
              designed, how dosage checks behave. They are engineering write-ups
              describing decisions we made while building a specific product for
              specific clinics.
            </p>
            <p>
              <strong>
                They are not medical, clinical, pharmaceutical, legal, or
                regulatory advice, and must not be relied on for the care of any
                patient.
              </strong>{" "}
              Nothing published here should be used to make a clinical decision,
              to design a safety-critical system, or to establish compliance with
              any regulation. If you need advice of that kind, get it from a
              qualified professional in your jurisdiction.
            </p>
            <p>
              Descriptions of how MedSys behaves reflect the product as we built
              it and may not describe its current behaviour.
            </p>
          </section>

          <section>
            <h2>6. Availability</h2>
            <p>
              We make no promise that this site will be available uninterrupted
              or error-free. We may change, suspend, or withdraw any part of it
              at any time, including individual lab notes, without notice.
            </p>
          </section>

          <section>
            <h2>7. Links to other sites</h2>
            <p>
              Where we link to somewhere else, including to our own ventures, we
              do not control what is there and are not responsible for it. A link
              is not an endorsement.
            </p>
          </section>

          <section>
            <h2>8. Disclaimers</h2>
            <p>
              The site and its content are provided as they are, without
              warranties of any kind, express or implied, to the fullest extent
              the law permits. That includes any implied warranty of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p>
              We write carefully but we do not warrant that everything here is
              accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2>9. Liability</h2>
            <p>
              To the fullest extent the law permits, we are not liable for any
              indirect, incidental, special, or consequential loss arising out of
              your use of this site, or for any loss of profit, revenue, data, or
              business.
            </p>
            <p>
              Nothing in these terms limits liability that cannot lawfully be
              limited, including liability for death or personal injury caused by
              negligence, or for fraud.
            </p>
            <p>
              This section governs the website. Liability under a studio
              engagement is dealt with in that engagement&rsquo;s own agreement.
            </p>
          </section>

          <section>
            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Delaware,
              United States, without regard to its conflict-of-laws rules, and
              the state and federal courts located in Delaware have exclusive
              jurisdiction over any dispute arising from them. If you are a
              consumer, this does not deprive you of protections available under
              the mandatory law of the country where you live.
            </p>
          </section>

          <section>
            <h2>11. General</h2>
            <p>
              If any part of these terms is found unenforceable, the rest stays
              in force. Not enforcing a term on one occasion does not waive it.
              These terms, together with our{" "}
              <Link href="/privacy">privacy policy</Link>, are the whole
              agreement between us regarding this website.
            </p>
          </section>

          <section>
            <h2>12. Changes</h2>
            <p>
              We may update these terms. When we do, we will change the date at
              the top of this page, and the updated version applies from the
              moment it is published. Continuing to use the site means you accept
              the revision.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>Questions about these terms go to:</p>
            <div>
              <p>Kodedit LLC</p>
              <p>Delaware, United States</p>
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
