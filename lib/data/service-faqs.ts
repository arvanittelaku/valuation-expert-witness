import { getAssetType } from "./asset-types";
import type { FAQ } from "@/lib/schema";

/** Maps each service section id to its corresponding asset-type slug for FAQs */
const SERVICE_ASSET_SLUG: Record<string, string> = {
  "business-share-valuation": "business-share-valuation",
  "property-land-valuation": "property-land-valuation",
  "intellectual-property-valuation": "intellectual-property-valuation",
  "plant-machinery-valuation": "plant-machinery-valuation",
  "art-antiques-chattels": "art-antiques-chattels",
  "financial-instruments-securities": "financial-instruments-securities",
  "goodwill-intangibles": "goodwill-intangible-assets",
  "specialist-emerging-assets": "specialist-assets",
};

export function getServiceFaqs(serviceId: string): FAQ[] {
  const slug = SERVICE_ASSET_SLUG[serviceId];
  if (!slug) return [];
  return getAssetType(slug)?.faqs ?? [];
}
