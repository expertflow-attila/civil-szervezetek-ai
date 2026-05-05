#!/usr/bin/env node
/**
 * Per-org ZIP csomag generátor
 *
 * Használat:
 *   node scripts/build-zip.mjs 05-elelmiszerbank
 *
 * Generálja: <slug>/downloads/<slug>-ai-csomag.zip
 * A ZIP tartalma: a 6 markdown/json dokumentum + README + web/content/page-data.ts (ha létezik).
 *
 * Függőség: a rendszerben telepített `zip` parancs (macOS-en alapból van).
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const slug = process.argv[2];
if (!slug) {
  console.error("Használat: node scripts/build-zip.mjs <slug>");
  process.exit(1);
}

const orgPath = path.join(ROOT, slug);
if (!fs.existsSync(orgPath)) {
  console.error(`HIBA: ${orgPath} nem létezik.`);
  process.exit(1);
}

const downloadsDir = path.join(orgPath, "downloads");
fs.mkdirSync(downloadsDir, { recursive: true });

const zipName = `${slug}-ai-csomag.zip`;
const zipPath = path.join(downloadsDir, zipName);

// Files to include (relative to org folder)
const candidates = [
  "README.md",
  "01_executive_summary.md",
  "02_starter_prompts.md",
  "03_claude_desktop_config.json",
  "04_claude_nonprofits_jelentkezes.md",
  "05_pilot_metrics.md",
  "06_napi_munka_terkep.md",
];
const includes = candidates.filter((f) => fs.existsSync(path.join(orgPath, f)));

// Web content data is a bonus
const webData = "web/content/page-data.ts";
if (fs.existsSync(path.join(orgPath, webData))) {
  includes.push(webData);
}

// Remove old zip
if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

// Build the zip from inside the org folder so paths inside zip are clean
const cmd = `cd "${orgPath}" && zip -q "${zipPath}" ${includes.map((f) => `"${f}"`).join(" ")}`;
console.log(`Building: ${zipName}`);
execSync(cmd, { stdio: "inherit" });

const sizeKB = Math.round(fs.statSync(zipPath).size / 1024);
console.log(`✓ ${zipPath} (${sizeKB} KB)`);
console.log(`  Files: ${includes.length}`);
