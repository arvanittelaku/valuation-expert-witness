import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="bg-accent/10 border-b border-accent/30">
      <div className="page-container py-3">
        <p className="text-sm md:text-base text-body leading-relaxed break-words">
          <span className="font-semibold text-accent mr-1">Case Law Alert:</span>
          Inspired Education v Crombie [2025] confirms that valuation expert evidence must use instructions consistent with standard market value definitions and demonstrate rigour and independence.{" "}
          <Link
            href="/guides/valuation-expert-instruction-guide"
            className="font-semibold text-accent underline hover:text-primary transition-colors"
          >
            Read instruction guide
          </Link>
        </p>
      </div>
    </div>
  );
}
