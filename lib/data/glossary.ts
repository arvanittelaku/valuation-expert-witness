export type GlossaryTerm = {
  id: string;
  name: string;
  description: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "adjusted-net-asset-value",
    name: "Adjusted Net Asset Value",
    description:
      "Net asset value adjusted for items not reflected at fair value on the balance sheet, such as property revaluations, contingent liabilities, and off-balance sheet items. Commonly used for property-rich companies and investment holding companies.",
  },
  {
    id: "capitalisation-rate",
    name: "Capitalisation Rate",
    description:
      "The rate applied to maintainable earnings or rental income to derive a capital value. The inverse of an earnings or rental yield multiple. Used in both business valuation (EBITDA multiple) and property valuation (capitalisation of net rent).",
  },
  {
    id: "chorzow-factory-standard",
    name: "Chorzow Factory Standard",
    description:
      "The international law standard for reparation of expropriation, requiring the expropriating state to provide full reparation for the breach. In investment treaty arbitration, fair market value of the expropriated asset is the primary measure of compensation.",
  },
  {
    id: "comparable-evidence-rics",
    name: "Comparable Evidence (RICS)",
    description:
      "Evidence of recent transactions or lettings of similar properties used to support a valuation opinion. RICS Red Book requires valuers to identify, verify, and adjust comparable evidence for differences in location, size, condition, and terms.",
  },
  {
    id: "compulsory-purchase-cpo",
    name: "Compulsory Purchase (CPO)",
    description:
      "The statutory process by which public authorities acquire land and property without the owner's consent for public purposes. Compensation is assessed at open market value plus disturbance compensation, heard by the Upper Tribunal (Lands Chamber) where disputed.",
  },
  {
    id: "control-premium",
    name: "Control Premium",
    description:
      "The premium paid above the pro-rata value of a minority shareholding to acquire a controlling stake. Relevant in business valuation where a controlling interest is being valued, and typically disapplied in S994 fair value proceedings.",
  },
  {
    id: "cpr-part-35",
    name: "CPR Part 35",
    description:
      "The Civil Procedure Rules governing expert evidence in England and Wales civil proceedings. Requires experts to provide independent opinion to assist the court, with a duty overriding any obligation to the instructing party. Applies to all valuation expert disciplines.",
  },
  {
    id: "depreciated-replacement-cost",
    name: "Depreciated Replacement Cost",
    description:
      "A valuation basis calculating the cost of a modern equivalent asset less accumulated depreciation. Used for specialist plant and machinery where no active second-hand market exists, and for certain property types under the RICS Red Book.",
  },
  {
    id: "discounted-cash-flow-dcf",
    name: "Discounted Cash Flow (DCF)",
    description:
      "A valuation method projecting future cash flows and discounting them to present value using an appropriate discount rate. Used for growth companies, businesses with predictable cash flows, and financial instruments including bonds.",
  },
  {
    id: "expert-determination",
    name: "Expert Determination",
    description:
      "A contractual dispute resolution process where an independent expert makes a binding determination on a specific issue, commonly used for rent reviews and valuation disputes in commercial contracts. Distinct from expert witness evidence in court proceedings.",
  },
  {
    id: "fair-market-value",
    name: "Fair Market Value",
    description:
      "The price a willing buyer would pay a willing seller, both acting rationally and without compulsion, in an open market transaction. The standard valuation concept in international arbitration and many commercial contexts.",
  },
  {
    id: "fair-value-s994",
    name: "Fair Value (S994)",
    description:
      "The legal valuation standard in unfair prejudice proceedings under Companies Act 2006 s994. Courts typically order valuation without applying a minority discount, valuing the petitioner's shares as a proportionate share of the whole company.",
  },
  {
    id: "forced-sale-value",
    name: "Forced Sale Value",
    description:
      "The price achievable under compulsion or within a restricted marketing period, typically below open market value. Relevant in insolvency, mortgage repossession, and certain insurance contexts.",
  },
  {
    id: "goodwill-personal-vs-business",
    name: "Goodwill (Personal vs Business)",
    description:
      "Personal goodwill attaches to an individual professional and is not transferable on sale. Business goodwill is attached to the business entity and is transferable to a buyer. The distinction is critical in matrimonial business valuations and professional practice disputes.",
  },
  {
    id: "hot-tubbing",
    name: "Hot-Tubbing",
    description:
      "A concurrent expert evidence format where both parties' experts give evidence simultaneously before the tribunal or court, allowing direct comparison of methodologies. Common in international arbitration and increasingly used in UK commercial litigation.",
  },
  {
    id: "iba-rules-on-evidence",
    name: "IBA Rules on Evidence",
    description:
      "The International Bar Association Rules on the Taking of Evidence in International Arbitration. Govern expert evidence presentation, document production, and witness examination in ICC, LCIA, and ICSID proceedings.",
  },
  {
    id: "ikarian-reefer",
    name: "Ikarian Reefer",
    description:
      "The leading UK authority on expert witness duties (National Justice Compania Naviera SA v Prudential Assurance Co Ltd [1993]). Establishes that an expert's duty is to the court, the expert must provide independent opinion, and the expert must state when a question falls outside their expertise.",
  },
  {
    id: "inspired-education-v-crombie-2025",
    name: "Inspired Education v Crombie [2025]",
    description:
      "Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch). The court found valuation expert evidence fatally undermined by inconsistent instructions, lack of rigour, and a partial approach. A key warning for solicitors instructing valuation experts in shareholder disputes.",
  },
  {
    id: "intellectual-property-valuation",
    name: "Intellectual Property Valuation",
    description:
      "The process of determining the economic value of patents, trade marks, copyright, know-how, and brand assets. In litigation, commonly uses relief from royalty, lost profits, or cost approaches depending on the IP type and available data.",
  },
  {
    id: "landlord-and-tenant-act-1954",
    name: "Landlord and Tenant Act 1954",
    description:
      "UK legislation providing security of tenure for business tenants. Part II governs lease renewal proceedings where open market rent is determined by RICS expert witnesses applying comparable letting evidence.",
  },
  {
    id: "maintainable-earnings",
    name: "Maintainable Earnings",
    description:
      "The normalised, sustainable level of earnings a business is expected to generate in the future, typically expressed as EBITDA. The most common basis for valuing stable trading businesses by applying a sector-appropriate multiple.",
  },
  {
    id: "market-value-rics",
    name: "Market Value (RICS)",
    description:
      "The estimated amount for which an asset should exchange on the date of valuation between a willing buyer and a willing seller in an arm's length transaction, after proper marketing. The standard definition in the RICS Red Book.",
  },
  {
    id: "minority-discount",
    name: "Minority Discount",
    description:
      "A discount applied to the pro-rata value of a non-controlling shareholding to reflect lack of control, illiquidity, and inability to influence management. Typically disapplied in S994 fair value proceedings but may apply in other contexts.",
  },
  {
    id: "net-asset-value",
    name: "Net Asset Value",
    description:
      "The value of a company's assets less its liabilities. The primary valuation method for property companies, investment holding companies, and businesses where asset value exceeds earnings-based value.",
  },
  {
    id: "plant-and-machinery-valuation",
    name: "Plant and Machinery Valuation",
    description:
      "The valuation of manufacturing, industrial, agricultural, and medical equipment. May use market value, replacement cost, or depreciated replacement cost depending on the asset type and litigation context.",
  },
  {
    id: "relief-from-royalty",
    name: "Relief from Royalty",
    description:
      "An IP valuation method estimating the royalty payments the IP owner avoids by owning rather than licensing the IP, capitalised and discounted to present value. The most common approach in UK IP infringement litigation.",
  },
  {
    id: "rics-red-book",
    name: "RICS Red Book",
    description:
      "RICS Valuation Global Standards, the mandatory professional standards for property valuation in the UK. VPS 4 applies specifically to valuations for litigation and dispute resolution purposes.",
  },
  {
    id: "rics-registered-valuer",
    name: "RICS Registered Valuer",
    description:
      "A RICS member who has met additional competency requirements to carry out formal valuations under the RICS Red Book. Essential qualification for property valuation expert witnesses in UK litigation.",
  },
  {
    id: "saamco-principle",
    name: "SAAMCo Principle",
    description:
      "South Australia Asset Management Corp v York Montague Ltd [1996]. Limits the scope of damages in professional negligence claims to losses within the scope of the defendant's duty. In negligent valuation claims, damages are capped at the difference between the negligent and correct valuation.",
  },
  {
    id: "single-joint-expert",
    name: "Single Joint Expert",
    description:
      "An expert appointed jointly by both parties to provide one report on a specific issue, typically ordered by the court. Common in matrimonial proceedings where the court directs a single joint expert for each asset class.",
  },
  {
    id: "upper-tribunal-lands-chamber",
    name: "Upper Tribunal (Lands Chamber)",
    description:
      "The specialist tribunal for disputed compensation in compulsory purchase proceedings and certain property disputes. Hears expert evidence from RICS valuers and forensic accountants on property value and disturbance compensation.",
  },
  {
    id: "willing-buyer-willing-seller",
    name: "Willing Buyer/Willing Seller",
    description:
      "The hypothetical parties in a market value assessment, both acting knowledgeably, prudently, and without compulsion. The foundation of market value definitions in the RICS Red Book and international valuation standards.",
  },
  {
    id: "rics-expert-witness",
    name: "RICS Expert Witness",
    description:
      "A RICS member who has completed the RICS Expert Witness Training and Assessment Programme or holds equivalent accreditation. Demonstrates competency in preparing CPR Part 35 compliant expert reports and giving expert evidence in court.",
  },
];
