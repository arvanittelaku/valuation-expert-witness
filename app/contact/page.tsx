import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, UK_SERVICE_SCOPE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Instruct a Valuation Expert Witness | Contact",
  description:
    "Instruct a valuation expert witness for UK litigation. All asset types, all expert disciplines. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "United Kingdom proceedings only (England, Wales, Scotland, Northern Ireland)",
  "All asset types covered",
  "Forensic accountants, RICS surveyors and specialist valuers",
  "CPR Part 35 and FPR Part 25 compliant",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Valuation Expert Witness"
        subtitle="Submit your case details for a United Kingdom litigation or arbitration matter. We will match you with a qualified valuation expert witness across any asset type and UK legal context."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 min-w-0">
              <p className="text-body leading-relaxed mb-6 max-w-2xl">
                {UK_SERVICE_SCOPE} Use the form below for UK matters only. For general enquiries, email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="text-accent font-semibold underline hover:text-primary">
                  {SITE_EMAIL}
                </a>
                .
              </p>
              <ContactForm />
            </div>
            <aside className="rounded-[8px] border border-border bg-section-alt p-6 h-fit min-w-0">
              <h2 className="text-lg font-bold text-heading mb-4">UK Service Scope</h2>
              <p className="text-sm text-body leading-relaxed mb-6">
                We instruct valuation expert witnesses for England and Wales civil and family proceedings, Scottish Court of Session and Sheriff Court matters, Northern Ireland courts, and UK-seated arbitration. Enquiries relating to US, EU, or other non-UK jurisdictions cannot be processed through this service.
              </p>
              <h2 className="text-lg font-bold text-heading mb-4">Why Instruct Through Us</h2>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-body">
                    <span className="text-accent font-bold mt-0.5" aria-hidden="true">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
