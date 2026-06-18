import Link from "next/link";
import AlertBanner from "@/components/AlertBanner";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { homepageSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { assetTypes } from "@/lib/data/asset-types";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Valuation Expert Witness UK | Business, Property, IP & All Asset Types",
  description:
    "Find a qualified valuation expert witness in the UK. Business valuation, property valuation, intellectual property, plant and machinery, art, and all asset types for litigation and arbitration. CPR Part 35 compliant.",
  path: "/",
});

const disciplines = [
  {
    title: "Forensic Accountants",
    description:
      "ACA and FCA qualified experts for business and share valuation, goodwill, intangible assets, and IP financial valuation in shareholder disputes, matrimonial proceedings, and HMRC challenges.",
    href: "/asset-types/business-share-valuation",
  },
  {
    title: "RICS Chartered Surveyors",
    description:
      "MRICS and FRICS registered valuers for property, land, compulsory purchase, lease renewal, and plant and machinery valuation under the RICS Red Book.",
    href: "/asset-types/property-land-valuation",
  },
  {
    title: "Specialist Valuers",
    description:
      "Sector experts for art, antiques, jewellery, financial instruments, agricultural assets, cryptocurrency, and other specialist asset classes requiring niche market knowledge.",
    href: "/asset-types/specialist-assets",
  },
];

const stats = [
  { fact: "Valuation disciplines covered", figure: "3 expert types", source: "All asset classes" },
  { fact: "Asset type pages", figure: "8 dedicated hubs", source: "Unique site structure" },
  { fact: "Case type coverage", figure: "10 litigation contexts", source: "UK courts and tribunals" },
  { fact: "Expert evidence framework", figure: "CPR Part 35 / FPR Part 25", source: "Civil Procedure Rules" },
  { fact: "Property valuation standard", figure: "RICS Red Book (VPS 4)", source: "RICS" },
  { fact: "S994 fair value", figure: "Minority discount typically disapplied", source: "Companies Act 2006" },
  { fact: "Inspired Education v Crombie [2025]", figure: "Expert rigour and independence required", source: "EWHC 1236 (Ch)" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <AlertBanner />
      <PageHero
        title="Valuation Expert Witness Services for UK Solicitors & Law Firms"
        subtitle="The broadest valuation expert witness service in the United Kingdom. Business valuation, property valuation, intellectual property, plant and machinery, art and chattels, financial instruments, and every specialist asset type for litigation and arbitration in England, Wales, Scotland, and Northern Ireland. CPR Part 35 compliant expert evidence across all three valuation disciplines."
      />
      <section className="py-12 md:py-16 border-b border-border">
        <div className="page-container max-w-3xl min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4 break-words">
            United Kingdom Valuation Expert Witness Instruction
          </h2>
          <p className="text-body leading-relaxed mb-4">
            This website is built for UK litigation and arbitration only. We support solicitors and law firms instructing valuation expert witnesses in the High Court, County Court, Family Court, Employment Tribunal, Lands Tribunal, and other UK forums, including Scottish Court of Session proceedings and Northern Ireland courts.
          </p>
          <p className="text-body leading-relaxed mb-4">
            Content, credentials, and valuation standards referenced throughout the site reflect United Kingdom practice: CPR Part 35 and FPR Part 25 for expert evidence; the RICS Red Book for property; Companies Act 2006 fair value for shareholder disputes; and HMRC market value concepts for tax matters. Professional designations such as ACA, FCA, MRICS, FRICS, and ICAEW Forensic Accreditation are UK qualifications.
          </p>
          <p className="text-body leading-relaxed">
            We do not provide valuation expert witness referrals for proceedings outside the United Kingdom. If your matter involves foreign courts or non-UK regulatory bodies, you should instruct an expert qualified in that jurisdiction&apos;s rules of evidence and valuation practice.
          </p>
        </div>
      </section>
      <section className="py-8 bg-section-alt border-b border-border">
        <div className="page-container text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Instruct an Expert
          </Link>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            Valuation Services Across All Asset Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <HubCard
                key={service.id}
                title={service.shortTitle}
                description={service.description.slice(0, 120) + "..."}
                href={`/services#${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-section-alt">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            Three Expert Disciplines, Every Asset Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disciplines.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                <p className="mt-3 text-body leading-relaxed">{card.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            Valuation Expert Witnesses by Asset Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {assetTypes.map((asset) => (
              <HubCard
                key={asset.slug}
                title={asset.shortTitle}
                description={asset.paragraphs[0].slice(0, 100) + "..."}
                href={`/asset-types/${asset.slug}`}
              />
            ))}
          </div>
          <p className="mt-8 text-body leading-relaxed max-w-3xl">
            Our dedicated asset type pages provide solicitors with targeted guidance on which expert discipline to instruct, the applicable valuation methodology, and the key legal contexts for each asset class.{" "}
            <Link href="/valuation-types" className="text-accent font-semibold underline hover:text-primary">
              Read the complete valuation types guide
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-section-alt">
        <div className="page-container min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-8 break-words">
            UK Valuation Litigation: Key Facts
          </h2>
          <div className="table-scroll rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]">
            <table className="w-full text-sm min-w-[36rem]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Fact</th>
                  <th className="px-4 py-3 text-left font-semibold">Detail</th>
                  <th className="px-4 py-3 text-left font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-section-alt"}>
                    <td className="px-4 py-3 text-body border-t border-border">{row.fact}</td>
                    <td className="px-4 py-3 text-body border-t border-border font-medium">{row.figure}</td>
                    <td className="px-4 py-3 text-body border-t border-border">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
