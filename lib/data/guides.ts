export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
};

export const guides: Guide[] = [
  {
    slug: "choosing-right-valuation-expert",
    title: "Choosing the Right Valuation Expert Witness: A Solicitor's Guide",
    shortTitle: "Choosing the Right Expert",
    metaTitle: "Choosing the Right Valuation Expert Witness | Solicitor's Guide",
    metaDescription:
      "How to match valuation expert discipline to asset type, check credentials, and avoid instruction errors from Inspired Education v Crombie [2025].",
    content: `
<h2>Step 1: Identify the Asset Type</h2>
<p>The first step in instructing a valuation expert witness is identifying which asset type requires valuation. Business interests, property, intellectual property, plant and machinery, art and chattels, financial instruments, goodwill, and specialist assets each require a different expert discipline. A forensic accountant cannot provide RICS-compliant property valuations, and a RICS surveyor cannot value complex derivatives.</p>

<h2>Step 2: Match Expert Discipline to Asset</h2>
<p>Three distinct disciplines cover valuation expert witnesses in UK litigation:</p>
<ul>
<li><strong>Forensic accountants / chartered accountants</strong> for business, shares, goodwill, and IP (financial valuation)</li>
<li><strong>RICS chartered surveyors</strong> for property, land, and plant and machinery</li>
<li><strong>Specialist valuers</strong> for art, antiques, financial instruments, livestock, and other specialist assets</li>
</ul>

<h2>Step 3: Check Credentials</h2>
<p>For business valuation: ACA or FCA (ICAEW), CVA or CFA, and ICAEW Forensic Accreditation. For property: MRICS or FRICS with RICS Registered Valuer status and RICS Expert Witness qualification. For financial instruments: CFA with specific instrument experience. For art and specialist assets: sector-specific professional membership and prior litigation experience.</p>

<h2>Step 4: Prior Court Acceptance</h2>
<p>Prior acceptance as an expert witness in court or arbitration proceedings is a critical credibility indicator. Ask the expert or referral service about their litigation track record, including the courts and tribunals in which they have given evidence.</p>

<h2>Step 5: Lessons from Inspired Education v Crombie [2025]</h2>
<p>In Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch), the court rejected valuation expert evidence because instructions were not consistent with commonly used definitions of market value, the expert's approach lacked rigour, and the evidence appeared partial. Ensure your letter of instruction uses standard valuation definitions and does not steer the expert toward a predetermined conclusion.</p>

<h2>Step 6: Consider Multiple Experts</h2>
<p>Complex disputes involving multiple asset classes require multiple valuation experts. A divorce with business interests and property needs both a forensic accountant and a RICS surveyor. Coordinate instructions across disciplines to ensure consistent valuation dates and assumptions.</p>
`,
  },
  {
    slug: "business-valuation-litigation-guide",
    title: "Business Valuation in UK Litigation: Methodology Guide",
    shortTitle: "Business Valuation Guide",
    metaTitle: "Business Valuation in UK Litigation | Methodology Guide",
    metaDescription:
      "DCF, maintainable earnings, NAV, S994 fair value, matrimonial context, HMRC SAV, and expert independence in business valuation litigation.",
    content: `
<h2>Valuation Methodologies</h2>
<p>Business valuation expert witnesses apply three primary methodologies depending on the business type and legal context:</p>

<h3>Maintainable Earnings</h3>
<p>The most common method for stable trading businesses. The expert normalises historical earnings (adjusting for non-recurring items, related-party transactions, and owner remuneration), determines maintainable EBITDA, and applies a sector-appropriate multiple. The multiple is justified by reference to comparable transactions and quoted company multiples.</p>

<h3>Discounted Cash Flow</h3>
<p>Used for growth companies with predictable cash flow projections. The expert projects future cash flows, selects an appropriate discount rate (typically WACC), and calculates terminal value. DCF is sensitive to assumptions and requires careful justification of inputs.</p>

<h3>Net Asset Value</h3>
<p>Applied to property companies, investment holding companies, and businesses where asset value exceeds earnings-based value. Assets are adjusted to fair value (particularly property and investments) and liabilities are deducted.</p>

<h2>S994 Fair Value</h2>
<p>In unfair prejudice proceedings, courts typically order valuation at fair value without applying a minority discount. The expert must address whether a minority discount is appropriate on the specific facts and justify the chosen valuation approach.</p>

<h2>Matrimonial Context</h2>
<p>Business interests in financial remedy proceedings are valued at fair value as at the relevant date. Personal goodwill must be distinguished from business goodwill. The expert should address the impact of the valuation on both parties' financial positions.</p>

<h2>HMRC SAV</h2>
<p>HMRC's Shares and Assets Valuation team challenges business valuations for IHT, CGT, and ERS purposes. Independent expert evidence is essential to counter SAV's methodology, which may apply different assumptions on maintainable earnings, multiples, and minority discounts.</p>

<h2>Expert Independence</h2>
<p>Under CPR Part 35 and the Ikarian Reefer principles, the business valuation expert's duty is to the court. The expert must state assumptions clearly, address alternative methodologies, and not adopt a partial approach to the evidence.</p>
`,
  },
  {
    slug: "property-valuation-cpr35-guide",
    title: "Property Valuation Expert Witnesses: CPR Part 35 & RICS Red Book Guide",
    shortTitle: "Property Valuation Guide",
    metaTitle: "Property Valuation Expert Witnesses | CPR Part 35 & RICS Red Book",
    metaDescription:
      "RICS standards, CPR Part 35 requirements, residential vs commercial valuation, compulsory purchase, and professional negligence.",
    content: `
<h2>RICS Red Book Compliance</h2>
<p>All property valuation expert evidence must comply with RICS Valuation Global Standards (the Red Book). VPS 4 applies specifically to valuations for litigation and dispute resolution. The expert must demonstrate Red Book compliance in their report, including basis of value, valuation date, and assumptions.</p>

<h2>CPR Part 35 Requirements</h2>
<p>Property valuation expert reports must comply with CPR Part 35 and Practice Direction 35. The report must include: the expert's qualifications and experience; the instructions received; the documents relied upon; the methodology applied; the assumptions made; a statement of truth; and a declaration of compliance with CPR Part 35.</p>

<h2>Residential vs Commercial</h2>
<p>Residential valuations typically use the comparable sales method with adjustments for location, size, condition, and tenure. Commercial valuations may use the investment method (capitalisation of rental income), comparable sales, or residual method for development land. The expert must justify the approach for the specific property type.</p>

<h2>Compulsory Purchase</h2>
<p>CPO valuations apply the open market value standard: the price the land would achieve absent the scheme. Disturbance compensation covers relocation costs and loss of goodwill. The Upper Tribunal (Lands Chamber) hears disputed compensation claims with expert evidence from RICS valuers.</p>

<h2>Professional Negligence</h2>
<p>In negligent valuation claims, the independent expert assesses whether the defendant valuer fell below the RICS standard of care. Loss is quantified as the difference between the negligent valuation and the correct valuation (the SAAMCo cap). The expert must opine on both breach and causation.</p>

<h2>Lease Renewal</h2>
<p>Rent in LTA 1954 lease renewal proceedings is determined at open market rent. The RICS expert applies comparable letting evidence, adjusting for the specific terms of the new lease including rent-free periods, break clauses, and repairing obligations.</p>
`,
  },
  {
    slug: "ip-valuation-litigation-guide",
    title: "IP Valuation in Litigation: Relief from Royalty & Lost Profits Explained",
    shortTitle: "IP Valuation Guide",
    metaTitle: "IP Valuation in Litigation | Relief from Royalty & Lost Profits",
    metaDescription:
      "IP valuation methodology for patent, trade mark, and copyright litigation. Account of profits election and reasonable royalty calculation.",
    content: `
<h2>Methodology Options</h2>
<p>IP valuation in UK litigation uses three primary approaches depending on the IP type and available data:</p>
<ul>
<li><strong>Relief from royalty:</strong> Estimates the royalty the IP owner avoids by owning rather than licensing, capitalised and discounted to present value</li>
<li><strong>Lost profits:</strong> Quantifies sales and profit lost due to infringement, requiring proof of causation</li>
<li><strong>Cost approach:</strong> Based on the cost to develop or replace the IP, used for early-stage or unlicensed IP</li>
</ul>

<h2>Patent vs Trade Mark vs Copyright</h2>
<p>Patent valuation typically uses relief from royalty with comparable licence rates for similar technology. Trade mark valuation may use relief from royalty or brand valuation approaches depending on the brand's standalone value. Copyright valuation uses comparable licence rates for similar content types.</p>

<h2>Account of Profits Election</h2>
<p>The claimant must elect between compensatory damages (lost profits or reasonable royalty) and account of profits. The valuation expert should calculate both to inform the election. Account of profits requires the infringer to disgorge profits made from the infringement.</p>

<h2>Reasonable Royalty Calculation</h2>
<p>The reasonable royalty is the rate a willing licensor and willing licensee would have agreed at the time infringement began. The expert uses comparable licences, the value of the patented technology to the infringer, and the hypothetical negotiation framework established in UK case law.</p>

<h2>Brand Value Erosion</h2>
<p>Where infringement has damaged brand reputation, the expert may quantify brand value erosion as an additional head of loss. This requires evidence of brand tracking data and market research showing consumer perception changes attributable to the infringement.</p>
`,
  },
  {
    slug: "multi-expert-valuation-cases",
    title: "When You Need Multiple Valuation Expert Witnesses: A Practical Guide",
    shortTitle: "Multi-Expert Guide",
    metaTitle: "When You Need Multiple Valuation Expert Witnesses | Practical Guide",
    metaDescription:
      "When different asset classes require different disciplines, coordinating evidence, joint meetings, and cost management in multi-expert valuation cases.",
    content: `
<h2>When Multiple Experts Are Needed</h2>
<p>Multi-expert valuation cases arise whenever a dispute involves assets requiring different professional disciplines. Common scenarios include:</p>
<ul>
<li>Complex divorce with business interests and property (forensic accountant + RICS surveyor)</li>
<li>M&A dispute with IP and equipment (business valuer + IP valuer + plant valuer)</li>
<li>Estate dispute with property, business, and art (RICS surveyor + forensic accountant + art valuer)</li>
<li>Insurance claim with plant and specialist assets (plant valuer + specialist asset valuer)</li>
</ul>

<h2>Coordinating Evidence</h2>
<p>When multiple valuation experts are instructed, ensure consistent valuation dates, assumptions, and treatment of interdependent assets. For example, in a matrimonial case, the business valuer and property valuer should use the same valuation date and the business valuer should be aware of property values used in the NAV calculation.</p>

<h2>Joint Meetings Across Disciplines</h2>
<p>CPR Part 35 joint expert meetings typically occur within each discipline separately. However, where asset values are interdependent (business value including property assets), consider whether a cross-disciplinary discussion is needed to resolve inconsistencies before reports are finalised.</p>

<h2>Cost Management</h2>
<p>Multiple experts increase costs significantly. Prioritise the asset classes with the highest value at stake and greatest area of dispute. Consider whether a single joint expert can be agreed for less contentious asset classes, reserving separate experts for the primary areas of disagreement.</p>

<h2>Court Directions</h2>
<p>In matrimonial proceedings, courts frequently direct a single joint expert for each asset class. In commercial litigation, each party typically instructs their own expert per discipline. Early case management discussion of expert requirements saves costs and avoids late applications for additional expert evidence.</p>
`,
  },
  {
    slug: "valuation-expert-instruction-guide",
    title: "Instructing a Valuation Expert: Lessons from Recent Case Law",
    shortTitle: "Instruction Guide",
    metaTitle: "Instructing a Valuation Expert | Lessons from Recent Case Law",
    metaDescription:
      "Inspired Education v Crombie [2025] warning, instruction consistency, independence requirements, and avoiding partial approach errors.",
    content: `
<h2>Inspired Education v Crombie [2025]</h2>
<p>In Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch), the High Court rejected the claimant's business valuation expert evidence in an unfair prejudice petition. The judge identified three fatal flaws: instructions not consistent with commonly used definitions of market value; a lack of rigour in approach to evidence; and a somewhat partial approach to the valuation.</p>

<h2>Instruction Consistency</h2>
<p>Your letter of instruction must use standard valuation definitions. Specify the basis of value (market value, fair value, open market value per RICS Red Book) and the valuation date. Do not instruct the expert to reach a particular value or to adopt assumptions favourable to your client's case without justification.</p>

<h2>Independence Requirements</h2>
<p>Under CPR Part 35 and the Ikarian Reefer principles, the expert's duty is to the court. The expert must provide independent opinion regardless of the instructing party's position. Instructing solicitors should not seek to influence the expert's conclusions and should ensure the expert has access to all relevant documents, including those unfavourable to the instructing party's case.</p>

<h2>Market Value Definitions</h2>
<p>Market value, fair value, fair market value, and open market value have distinct meanings in different legal contexts. Your instructions must specify which standard applies and the expert must apply that standard consistently throughout the report. Confusion between standards was a key failing in the Inspired Education case.</p>

<h2>Documents to Provide</h2>
<p>Provide the expert with: court orders and directions; pleadings; all relevant financial statements and accounts; property information (for business valuations including property); comparable transaction data; prior valuations; and any expert reports from the opposing party. Incomplete instructions lead to incomplete reports.</p>

<h2>Avoiding Partial Approach Errors</h2>
<p>The expert must address evidence that contradicts their conclusion. A report that ignores unfavourable comparables, dismisses alternative methodologies without analysis, or adopts only the assumptions most favourable to the instructing party risks being rejected by the court as partial.</p>
`,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
