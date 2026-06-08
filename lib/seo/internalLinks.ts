import { assetTypes } from "@/lib/data/asset-types";
import { caseTypes } from "@/lib/data/case-types";
import { guides } from "@/lib/data/guides";

export type InternalLink = { href: string; label: string };

export function getValuationTypesRelatedLinks(): InternalLink[] {
  return [
    { href: "/what-is-a-valuation-expert-witness", label: "What Is a Valuation Expert Witness?" },
    { href: "/asset-types", label: "All Asset Types" },
    { href: "/case-types", label: "All Case Types" },
    { href: "/guides/multi-expert-valuation-cases", label: "Multi-Expert Valuation Guide" },
    { href: "/glossary", label: "Valuation Glossary" },
    { href: "/how-to-instruct", label: "How to Instruct" },
  ];
}

export function getAssetTypesHubLinks(): InternalLink[] {
  return [
    { href: "/valuation-types", label: "Valuation Types Guide" },
    ...assetTypes.map((a) => ({
      href: `/asset-types/${a.slug}`,
      label: a.shortTitle,
    })),
  ];
}

export function getCaseTypesHubLinks(): InternalLink[] {
  return [
    { href: "/valuation-types", label: "Valuation Types Guide" },
    ...caseTypes.map((c) => ({
      href: `/case-types/${c.slug}`,
      label: c.shortTitle,
    })),
  ];
}

export function getGuidesHubLinks(): InternalLink[] {
  return guides.map((g) => ({
    href: `/guides/${g.slug}`,
    label: g.shortTitle,
  }));
}
