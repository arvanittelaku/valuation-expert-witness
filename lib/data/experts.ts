export type Expert = {
  id: string;
  name: string;
  title: string;
  discipline: string;
  credentials: string[];
  experience: string;
  assetTypes: string[];
};

export const experts: Expert[] = [
  {
    id: "forensic-accountant",
    name: "Business Valuation Panel",
    title: "Forensic Accountant / Chartered Accountant",
    discipline: "Business, Shares, Goodwill & IP (Financial)",
    credentials: [
      "ACA / FCA (ICAEW)",
      "CVA or CFA",
      "ICAEW Forensic Accreditation",
      "Prior High Court and arbitration acceptance",
    ],
    experience:
      "Our forensic accountant panel includes ICAEW-accredited forensic specialists with extensive experience in business and share valuation for S994 shareholder disputes, matrimonial financial remedy proceedings, HMRC SAV challenges, and international arbitration. Panel members have prepared valuation reports for matters involving companies from £500,000 to over £500 million in value.",
    assetTypes: [
      "Business & share valuation",
      "Goodwill & intangible assets",
      "Intellectual property (financial)",
      "Financial instruments",
    ],
  },
  {
    id: "rics-surveyor",
    name: "RICS Valuation Panel",
    title: "RICS Chartered Surveyor",
    discipline: "Property, Land & Plant and Machinery",
    credentials: [
      "MRICS / FRICS",
      "RICS Registered Valuer",
      "RICS Expert Witness qualification",
      "Red Book (VPS 4) litigation experience",
    ],
    experience:
      "Our RICS panel includes registered valuers with specialist experience in residential, commercial, industrial, agricultural, and development land valuation for compulsory purchase, lease renewal, matrimonial, and professional negligence proceedings. Plant and machinery specialists hold RICS P&M specialism or MEBAA membership.",
    assetTypes: [
      "Residential & commercial property",
      "Development land",
      "Compulsory purchase",
      "Plant & machinery",
    ],
  },
  {
    id: "specialist-valuer",
    name: "Specialist Valuation Panel",
    title: "Specialist Valuer",
    discipline: "Art, Antiques, Financial Instruments & Specialist Assets",
    credentials: [
      "Sector-specific professional membership",
      "Auction house / dealer background",
      "CFA (financial instruments)",
      "Prior court and tribunal acceptance",
    ],
    experience:
      "Our specialist panel includes fine art and antiques valuers with auction house backgrounds, CFA-qualified financial instrument specialists, agricultural valuers, and digital assets experts. Each specialist brings sector-specific market knowledge essential for accurate litigation valuations of non-standard assets.",
    assetTypes: [
      "Fine art & antiques",
      "Jewellery & watches",
      "Financial instruments & derivatives",
      "Agricultural assets & cryptocurrency",
    ],
  },
];
