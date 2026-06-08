import type { FAQ } from "@/lib/schema";

export type ContentTable = {
  title: string;
  headers: string[];
  rows: string[][];
};

export type RelatedLink = {
  label: string;
  href: string;
};

export type DetailPageItem = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedCaseTypes?: RelatedLink[];
  relatedAssetTypes?: RelatedLink[];
  relatedServices?: RelatedLink[];
};
