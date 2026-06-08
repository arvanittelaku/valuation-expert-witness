import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a Valuation Expert Witness | Contact",
  description:
    "Instruct a valuation expert witness for UK litigation. All asset types, all expert disciplines. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
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
        subtitle="Submit your case details and we will match you with a qualified UK valuation expert witness across any asset type and litigation context."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <aside className="rounded-[8px] border border-border bg-section-alt p-6 h-fit">
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
