import type { ContentTable } from "./types";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  paragraphs: string[];
  methodology: ContentTable;
};

export const services: Service[] = [
  {
    id: "business-share-valuation",
    title: "Business & Share Valuation",
    shortTitle: "Business & Shares",
    description:
      "Independent business and share valuation expert evidence for shareholder disputes, matrimonial proceedings, HMRC challenges, and arbitration.",
    paragraphs: [
      "Our forensic accountant and chartered accountant experts provide CPR Part 35 compliant business and share valuation reports for High Court Chancery proceedings, unfair prejudice petitions, matrimonial financial remedy cases, and HMRC Shares and Assets Valuation disputes.",
      "Methodologies include maintainable earnings (EBITDA multiple), discounted cash flow, and net asset value, selected and justified according to the business type and legal context.",
    ],
    methodology: {
      title: "Business Valuation Methodologies",
      headers: ["Method", "Best For", "Key Inputs"],
      rows: [
        ["Maintainable Earnings", "Stable trading businesses", "Normalised EBITDA, sector multiple"],
        ["Discounted Cash Flow", "Growth companies", "Projected cash flows, discount rate, terminal value"],
        ["Net Asset Value", "Property/investment companies", "Adjusted assets less liabilities"],
        ["Dividend Yield", "Quoted minority holdings", "Dividend history, yield comparison"],
      ],
    },
  },
  {
    id: "property-land-valuation",
    title: "Property & Land Valuation",
    shortTitle: "Property & Land",
    description:
      "RICS chartered surveyor property valuation expert evidence for compulsory purchase, lease renewal, matrimonial, and professional negligence proceedings.",
    paragraphs: [
      "Our MRICS and FRICS experts provide Red Book compliant property valuation reports for residential, commercial, industrial, agricultural, and development land across all UK litigation contexts.",
      "All property expert evidence complies with RICS Valuation Global Standards (Red Book) and CPR Part 35 requirements.",
    ],
    methodology: {
      title: "Property Valuation Approaches",
      headers: ["Approach", "Asset Type", "Evidence Base"],
      rows: [
        ["Comparable Sales", "Residential, commercial", "Recent transactions, adjustments"],
        ["Investment Method", "Income-producing property", "Rental income, yield, cap rate"],
        ["Residual Method", "Development land", "GDV, build costs, developer profit"],
        ["Contractor's Method", "Specialist buildings", "Replacement cost, depreciation"],
      ],
    },
  },
  {
    id: "intellectual-property-valuation",
    title: "Intellectual Property Valuation",
    shortTitle: "IP Valuation",
    description:
      "IP valuation expert evidence for patent, trade mark, and copyright infringement proceedings, licensing disputes, and M&A litigation.",
    paragraphs: [
      "Our IP valuation experts apply relief from royalty, lost profits, and brand valuation methodologies for IP infringement quantum, licensing disputes, and purchase price allocation proceedings.",
      "Expert reports address the specific IP asset type and the legal context of the damages claim or account of profits election.",
    ],
    methodology: {
      title: "IP Valuation Methodologies",
      headers: ["Method", "Application", "Key Data"],
      rows: [
        ["Relief from Royalty", "Patents, trade marks, copyright", "Comparable royalty rates, discount rate"],
        ["Lost Profits", "Infringement with sales impact", "Sales data, margin analysis, causation"],
        ["Cost Approach", "Early-stage IP", "Development costs, replacement cost"],
        ["Market Approach", "Licensed IP portfolios", "Comparable transactions"],
      ],
    },
  },
  {
    id: "plant-machinery-valuation",
    title: "Plant & Machinery Valuation",
    shortTitle: "Plant & Machinery",
    description:
      "Plant and machinery valuation expert evidence for insurance claims, compulsory purchase, matrimonial disputes, and professional negligence claims.",
    paragraphs: [
      "Our RICS plant and machinery specialists and MEBAA members provide independent valuations of manufacturing, industrial, agricultural, and medical equipment for litigation and arbitration.",
      "Reports address market value, replacement cost, and depreciated replacement cost depending on the litigation context and asset type.",
    ],
    methodology: {
      title: "Plant Valuation Bases",
      headers: ["Basis", "When Used", "Calculation"],
      rows: [
        ["Market Value", "Active second-hand market", "Comparable sales, condition adjustment"],
        ["Replacement Cost", "Insurance reinstatement", "New equivalent asset cost"],
        ["Depreciated Replacement Cost", "No active market", "Replacement cost less depreciation"],
        ["Forced Sale Value", "Distressed disposal", "Market value less compulsion discount"],
      ],
    },
  },
  {
    id: "art-antiques-chattels",
    title: "Art, Antiques & Chattels",
    shortTitle: "Art & Chattels",
    description:
      "Specialist art, antiques, jewellery, and chattels valuation expert evidence for probate, matrimonial, and insurance litigation.",
    paragraphs: [
      "Our specialist valuers with auction house and fine art expertise provide market comparable valuations for fine art, antiques, jewellery, watches, wine, and collectibles.",
      "Reports address condition, provenance, attribution, and the specific market sector for each item type.",
    ],
    methodology: {
      title: "Art Valuation Methodology",
      headers: ["Factor", "Assessment", "Impact on Value"],
      rows: [
        ["Comparable Sales", "Auction and dealer records", "Primary valuation method"],
        ["Condition", "Physical state, restoration", "Adjustment to comparables"],
        ["Provenance", "Ownership history, documentation", "Premium or discount"],
        ["Attribution", "Artist/maker identification", "Significant value driver"],
      ],
    },
  },
  {
    id: "financial-instruments-securities",
    title: "Financial Instruments & Securities",
    shortTitle: "Financial Instruments",
    description:
      "Financial instruments valuation expert evidence for derivatives disputes, ISDA close-out, fair value accounting, and investment management litigation.",
    paragraphs: [
      "Our CFA-qualified experts provide independent valuations of derivatives, bonds, structured products, and options using market-standard pricing models.",
      "Reports address model selection, input justification, and valuation uncertainty ranges for complex instrument disputes.",
    ],
    methodology: {
      title: "Financial Instrument Pricing Models",
      headers: ["Instrument", "Model", "Key Inputs"],
      rows: [
        ["Options", "Black-Scholes / Binomial", "Volatility, strike, time to expiry"],
        ["Bonds", "DCF / Yield curve", "Credit spread, coupon, maturity"],
        ["Structured Products", "Monte Carlo / DCF", "Underlying paths, correlation"],
        ["Exchange-Traded", "Mark-to-market", "Observable market prices"],
      ],
    },
  },
  {
    id: "goodwill-intangibles",
    title: "Goodwill & Intangibles",
    shortTitle: "Goodwill & Intangibles",
    description:
      "Goodwill and intangible asset valuation expert evidence for partnership dissolution, professional practice disputes, and HMRC incorporation challenges.",
    paragraphs: [
      "Our experts distinguish personal goodwill from business goodwill and apply income-based and market-based approaches for standalone goodwill valuations.",
      "Reports address IFRS 3 purchase price allocation, HMRC goodwill challenges, and matrimonial business asset valuations.",
    ],
    methodology: {
      title: "Goodwill Valuation Approaches",
      headers: ["Approach", "Application", "Key Issue"],
      rows: [
        ["Excess Earnings", "Professional practices", "Personal vs business goodwill split"],
        ["Market Comparables", "Sector transactions", "Goodwill multiple from deals"],
        ["Capitalisation", "Stable earnings businesses", "Maintainable earnings, cap rate"],
        ["Cost Approach", "Recently built goodwill", "Marketing spend, customer acquisition cost"],
      ],
    },
  },
  {
    id: "specialist-emerging-assets",
    title: "Specialist & Emerging Assets",
    shortTitle: "Specialist Assets",
    description:
      "Specialist asset valuation expert evidence for agricultural assets, classic vehicles, wine collections, cryptocurrency, and niche asset classes.",
    paragraphs: [
      "Our network includes sector-specific valuers for agricultural assets, classic vehicles, wine and whisky collections, sports assets, and cryptocurrency holdings.",
      "Where specialist assets sit alongside mainstream business or property assets, we coordinate multi-disciplinary expert teams.",
    ],
    methodology: {
      title: "Specialist Asset Valuation",
      headers: ["Asset Class", "Expert Type", "Methodology"],
      rows: [
        ["Agricultural (livestock, quotas)", "Agricultural valuer", "Market comparables, quota trading prices"],
        ["Classic Vehicles", "Automotive specialist", "Auction comparables, condition grading"],
        ["Wine & Whisky", "Fine wine specialist", "Broker prices, provenance, storage"],
        ["Cryptocurrency", "Digital assets + financial expert", "Exchange rate, liquidity discount"],
      ],
    },
  },
];
