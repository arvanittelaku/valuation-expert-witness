import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE_EMAIL } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | ValuationExpertWitness.co.uk",
  description: "Privacy policy for ValuationExpertWitness.co.uk, UK GDPR compliant data handling.",
  path: "/privacy",
  noindex: true,
  nofollow: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>Who We Are</h2>
          <p>
            ValuationExpertWitness.co.uk operates as a referral service connecting UK solicitors and law firms with qualified valuation expert witnesses. We are the data controller for personal data submitted through this website.
          </p>

          <h2>What Data We Collect</h2>
          <p>When you submit an enquiry through our contact form, we collect:</p>
          <ul>
            <li>Your name, organisation, email address, and phone number</li>
            <li>Details about your matter, including asset type, legal context, and case description</li>
            <li>Technical data including IP address and browser type (via standard web server logs and analytics, where enabled)</li>
          </ul>

          <h2>Lawful Basis for Processing</h2>
          <p>
            We process your personal data on the basis of legitimate interests (responding to your enquiry and matching you with an appropriate expert witness) and, where applicable, pre-contractual steps at your request.
          </p>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>To respond to your enquiry within 1 business day</li>
            <li>To match your case with an appropriate valuation expert witness</li>
            <li>To improve our referral service</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We share your enquiry details with the valuation expert witness matched to your case. We do not sell your personal data. We use Formspree to process form submissions. Analytics providers (Google Analytics, where enabled) may process anonymised usage data.
          </p>

          <h2>Data Retention</h2>
          <p>
            Enquiry data is retained for up to 3 years from the date of submission, or longer where required for legal or regulatory purposes.
          </p>

          <h2>Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO)</li>
          </ul>
          <p>
            To exercise your rights, contact us at{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            We use essential cookies for site functionality. Where analytics or marketing cookies are enabled, you may manage preferences through our cookie banner or the Cookie Settings link in the footer. See our{" "}
            <Link href="/cookies">Cookie Policy</Link> for full details.
          </p>

          <h2>Contact</h2>
          <p>
            Data protection enquiries:{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
