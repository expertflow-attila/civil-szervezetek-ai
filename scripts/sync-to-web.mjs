#!/usr/bin/env node
/**
 * Per-org ZIP-eket szinkronizálja a hub `_hub/public/downloads/` mappájába,
 * hogy a hub oldal letölthetővé tegye őket.
 *
 * Használat: node scripts/sync-to-web.mjs
 *
 * Megjegyzés: 2026-05-05-től 1 deploy architektúra (a per-org `web/` mappák
 * törölve). A script már CSAK a hub `public/downloads/`-ba másol.
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

console.log(`✓ ${copied}/${orgs.length} ZIP szinkronizálva a hub _hub/public/downloads/-ba.`);
