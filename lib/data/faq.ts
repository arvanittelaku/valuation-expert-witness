import type { FAQ } from "@/lib/schema";

export const siteFaqs: FAQ[] = [
  {
    question: "What is a valuation expert witness?",
    answer:
      "A valuation expert witness is an independent professional who provides expert opinion evidence on the value of assets for UK courts and tribunals. Unlike a valuer who prepares valuations for transactional purposes, a valuation expert witness prepares CPR Part 35 compliant expert reports for litigation, gives evidence under oath, and assists the court in understanding valuation methodology and conclusions.",
  },
  {
    question: "What is the difference between fair market value and fair value?",
    answer:
      "Fair market value is the price a willing buyer would pay a willing seller in an open market transaction, and may include minority discounts for non-controlling shareholdings. Fair value, as used in S994 unfair prejudice proceedings, typically means the petitioner's shares are valued as a proportionate share of the whole company without applying a minority discount. The legal context determines which standard applies.",
  },
  {
    question: "What credentials should a property valuation expert hold?",
    answer:
      "MRICS or FRICS (Royal Institution of Chartered Surveyors) with RICS Registered Valuer status is the essential qualification. For court proceedings, RICS Expert Witness qualification or Academy of Experts accreditation adds further credibility. All property expert evidence must comply with the RICS Red Book and CPR Part 35.",
  },
  {
    question: "When do you need multiple valuation experts?",
    answer:
      "Multiple valuation experts are needed when a dispute involves assets requiring different professional disciplines. A complex divorce with business and property requires a forensic accountant and a RICS surveyor. An estate dispute may need property, business, and art valuers. Each asset class requires its own expert discipline and valuation methodology.",
  },
  {
    question: "What went wrong in the 2025 SPA valuation case?",
    answer:
      "In Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch), the judge found the claimant's valuation expert's evidence was fatally undermined by instructions not consistent with commonly used definitions of market value, a lack of rigour in approach to evidence, and a somewhat partial approach. Solicitors must ensure instructions are consistent with standard valuation definitions and that experts demonstrate independence.",
  },
  {
    question: "What is the RICS Red Book?",
    answer:
      "The RICS Red Book (RICS Valuation Global Standards) sets the mandatory standards for property valuation in the UK. VPS 4 applies to valuations for litigation purposes. All RICS registered valuers must comply with Red Book standards, and expert witnesses must demonstrate compliance in their reports.",
  },
  {
    question: "How is IP valued for litigation?",
    answer:
      "The relief from royalty method is most commonly used in UK IP litigation: estimating the royalty payments the owner avoids by owning rather than licensing the IP, discounted to present value. Lost profits analysis applies where infringement caused identifiable sales losses. The methodology depends on the IP type and available data.",
  },
  {
    question: "What is CPR Part 35?",
    answer:
      "CPR Part 35 governs expert evidence in civil proceedings in England and Wales. It requires experts to provide independent opinion evidence to assist the court, impose a duty to the court overriding any obligation to the instructing party, and set requirements for expert reports including a statement of truth and declaration of compliance with CPR Part 35 and the expert's professional code.",
  },
  {
    question: "What disciplines cover valuation expert witnesses?",
    answer:
      "Three distinct disciplines cover valuation expert witnesses in UK litigation: forensic accountants and chartered accountants for business, shares, goodwill, and IP (financial); RICS chartered surveyors for property, land, and plant and machinery; and specialist valuers for art, antiques, financial instruments, livestock, and other specialist assets.",
  },
  {
    question: "How long does a valuation expert report take?",
    answer:
      "Report timelines depend on asset complexity and data availability. A straightforward property valuation report may take 2 to 4 weeks. Complex business valuations with multiple entities can take 6 to 12 weeks. Urgent instructions for imminent hearings can be accommodated with prior agreement on scope and fees.",
  },
  {
    question: "Can a single expert value all asset types?",
    answer:
      "No. Different asset types require different professional qualifications and valuation methodologies. A forensic accountant cannot provide RICS-compliant property valuations, and a RICS surveyor cannot value complex financial instruments. Multi-asset disputes require multiple experts across the relevant disciplines.",
  },
  {
    question: "What is a single joint expert in valuation proceedings?",
    answer:
      "A single joint expert (SJE) is appointed jointly by both parties to provide one expert report on a specific issue, typically ordered by the court under CPR Part 35. In matrimonial proceedings, courts frequently direct a single joint expert for each asset class. The SJE's duty is to the court, not to either party.",
  },
];
