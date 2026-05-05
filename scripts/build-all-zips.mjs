#!/usr/bin/env node
/**
 * Az összes 12 szervezet ZIP-ét legenerálja egy futtatással.
 * Használat: node scripts/build-all-zips.mjs
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const orgs = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^\d{2}-/.test(e.name))
  .map((e) => e.name)
  .sort();

console.log(`Building ZIPs for ${orgs.length} orgs...`);
for (const slug of orgs) {
  try {
    execSync(`node "${path.join(__dirname, "build-zip.mjs")}" "${slug}"`, { stdio: "inherit" });
  } catch (e) {
    console.error(`HIBA ${slug}:`, e.message);
  }
}
console.log("\n✓ Mind kész.");
