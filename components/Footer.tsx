import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import {
  serviceNavLinks,
  assetTypeNavLinks,
  caseTypeNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";
import { SITE_EMAIL, UK_SERVICE_SCOPE } from "@/lib/site";

const assetLinks = [
  ...assetTypeNavLinks.slice(0, 5),
  { label: "View all 8", href: "/asset-types" },
];

const caseLinks = [
  ...caseTypeNavLinks.slice(0, 5),
  { label: "View all 10", href: "/case-types" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="page-container py-12 md:py-16 pb-[max(3rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 min-w-0">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Asset Types</h3>
            <ul className="space-y-2">
              {assetLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Case Types</h3>
            <ul className="space-y-2">
              {caseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/valuation-types" className="text-sm text-white/70 hover:text-white transition-colors">
                  Valuation Types Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60 leading-relaxed max-w-3xl">
            {UK_SERVICE_SCOPE} We are not a law firm and do not provide legal advice.
          </p>
          <p className="mt-3 text-sm text-white/60">
            <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white transition-colors">
              {SITE_EMAIL}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <CookieSettingsLink />
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/what-is-a-valuation-expert-witness" className="hover:text-white transition-colors">What Is a Valuation Expert Witness?</Link>
          </div>
          <p className="mt-4 text-sm text-white/50">
            &copy; 2026 ValuationExpertWitness. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
