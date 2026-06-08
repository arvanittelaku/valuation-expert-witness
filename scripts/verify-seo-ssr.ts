/**
 * Verifies key pages export metadata (title/description) via source inspection.
 * Run: npm run seo:verify:ssr
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";

const ROOT = process.cwd();

const STATIC_PAGE_FILES: Record<string, string> = {
  "/": "app/page.tsx",
  "/valuation-types": "app/valuation-types/page.tsx",
  "/asset-types": "app/asset-types/page.tsx",
  "/case-types": "app/case-types/page.tsx",
  "/services": "app/services/page.tsx",
  "/what-is-a-valuation-expert-witness": "app/what-is-a-valuation-expert-witness/page.tsx",
  "/contact": "app/contact/page.tsx",
  "/glossary": "app/glossary/page.tsx",
};

function checkFile(relPath: string): boolean {
  const full = join(ROOT, relPath);
  if (!existsSync(full)) {
    console.error(`ERROR: Missing page file ${relPath}`);
    return false;
  }
  const content = readFileSync(full, "utf-8");
  const hasMeta =
    content.includes("createMetadata") ||
    content.includes("generateMetadata") ||
    content.includes("export const metadata");
  if (!hasMeta) {
    console.error(`ERROR: No metadata export in ${relPath}`);
    return false;
  }
  return true;
}

function main(): void {
  let ok = true;

  for (const [path, file] of Object.entries(STATIC_PAGE_FILES)) {
    if (!checkFile(file)) ok = false;
    else console.log(`OK ${path} -> ${file}`);
  }

  const inventory = buildPublicUrlInventory();
  if (inventory.allPaths.length < 30) {
    console.error(`ERROR: URL inventory unexpectedly small (${inventory.allPaths.length})`);
    ok = false;
  }

  if (!ok) process.exit(1);
  console.log(`seo:verify:ssr passed (${inventory.allPaths.length} URLs in inventory)`);
}

main();
