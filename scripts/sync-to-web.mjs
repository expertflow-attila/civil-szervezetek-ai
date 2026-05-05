#!/usr/bin/env node
/**
 * Másolja a per-org ZIP fájlokat a hub `_hub/public/downloads/` mappájába,
 * hogy a hub oldal letölthetővé tegye őket.
 *
 * Használat: node scripts/sync-to-web.mjs
 *
 * Futás után deploy előtt: minden szervezet ZIP-je elérhető a hub-on.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const hubDownloads = path.join(ROOT, "_hub", "public", "downloads");
fs.mkdirSync(hubDownloads, { recursive: true });

const orgs = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^\d{2}-/.test(e.name))
  .map((e) => e.name)
  .sort();

let copied = 0;
for (const slug of orgs) {
  const zipPath = path.join(ROOT, slug, "downloads", `${slug}-ai-csomag.zip`);
  if (!fs.existsSync(zipPath)) {
    console.warn(`  - hiányzik: ${zipPath} (futtasd: node scripts/build-zip.mjs ${slug})`);
    continue;
  }
  fs.copyFileSync(zipPath, path.join(hubDownloads, path.basename(zipPath)));
  copied++;
}

// Minden per-org webnek is kell a saját ZIP a /public/downloads-ben
for (const slug of orgs) {
  const zipPath = path.join(ROOT, slug, "downloads", `${slug}-ai-csomag.zip`);
  if (!fs.existsSync(zipPath)) continue;
  const orgPublic = path.join(ROOT, slug, "web", "public", "downloads");
  fs.mkdirSync(orgPublic, { recursive: true });
  fs.copyFileSync(zipPath, path.join(orgPublic, path.basename(zipPath)));
}

console.log(`✓ ${copied}/${orgs.length} ZIP másolva mind a hub-ra, mind az org webekre.`);
