import type { FAQ } from "@/lib/schema";

/** FAQs for /valuation-types pillar page (GEO citation + FAQPage schema) */
export const valuationTypesFaqs: FAQ[] = [
  {
    question: "What are the three valuation expert witness disciplines in UK litigation?",
    answer:
      "Forensic accountants and chartered accountants cover business, shares, goodwill, and IP financial valuation. RICS chartered surveyors cover property, land, and plant and machinery. Specialist valuers cover art, antiques, financial instruments, agricultural assets, and other niche asset classes. All disciplines must comply with CPR Part 35.",
  },
  {
    question: "When do you need multiple valuation expert witnesses in the same case?",
    answer:
      "Multiple experts are needed when a dispute involves assets requiring different professional disciplines. A complex divorce with business and property typically needs a forensic accountant and a RICS surveyor. An estate dispute may need property, business, and art valuers. Courts often direct a single joint expert for each asset class separately.",
  },
  {
    question: "What valuation standards apply in UK litigation?",
    answer:
      "Property valuations follow the RICS Red Book (VPS 4 for litigation). Business valuations follow professional practice under ICAEW and ACCA. Financial instruments may reference IFRS 13 fair value. All expert evidence must comply with CPR Part 35 regardless of asset type or expert discipline.",
  },
  {
    question: "What is the difference between fair market value and fair value in shareholder disputes?",
    answer:
      "Fair market value is the price in an open market transaction and may include minority discounts. Fair value under Companies Act 2006 s994 typically means the petitioner's shares are valued as a proportionate share of the whole company without applying a minority discount. The legal context determines which standard applies.",
  },
];
