#!/usr/bin/env node
/**
 * Új szervezet boilerplate generátor
 *
 * Használat:
 *   node scripts/new-org.mjs "13-magyar-elelmiszerbank" "Magyar Élelmiszerbank Egyesület" "élelmiszermentés"
 *
 * Mit csinál:
 *   1. Létrehozza a `<slug>/` mappát
 *   2. Bemásolja a `_shared/web-template/` teljes Next.js appot a `<slug>/web/`-be
 *   3. Bemásolja a 4 közös dokumentumot (prompts, desktop config, jelentkezés)
 *   4. Generál egy minimális `01_executive_summary.md` placeholdert
 *   5. Generál egy `web/content/page-data.ts` placeholdert a megadott névvel/kategóriával
 *
 * UTÁNA: kézzel írod át a `01_executive_summary.md`, `05_pilot_metrics.md`,
 * `06_napi_munka_terkep.md` fájlokat és a `web/content/page-data.ts`-t a szervezet-specifikus
 * tartalomra. Ezt egy AI agent (pl. Claude Code) is megcsinálhatja kutatás után.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const [, , slugArg, nameArg, categoryArg] = process.argv;
if (!slugArg || !nameArg || !categoryArg) {
  console.error("Használat: node scripts/new-org.mjs <slug> <name> <category>");
  console.error('Példa: node scripts/new-org.mjs "13-magyar-elelmiszerbank" "Magyar Élelmiszerbank" "élelmiszermentés"');
  process.exit(1);
}

const orgPath = path.join(ROOT, slugArg);
if (fs.existsSync(orgPath)) {
  console.error(`HIBA: ${orgPath} már létezik. Törölje előbb, vagy más slugot adjon.`);
  process.exit(1);
}

console.log(`Létrehozás: ${slugArg} ("${nameArg}" / ${categoryArg})`);

// 1. Mappák
fs.mkdirSync(path.join(orgPath, "downloads"), { recursive: true });

// 2. Web template másolás
const tmplPath = path.join(ROOT, "_shared", "web-template");
copyRecursive(tmplPath, path.join(orgPath, "web"), {
  skip: ["node_modules", ".next", ".vercel"],
});

// 3. Közös dokumentumok másolás (a archive/flat-original-ból, ahol a "master" verziók)
const archive = path.join(ROOT, "archive", "flat-original");
const sharedFiles = [
  ["05_starter_prompt_csomag.md", "02_starter_prompts.md"],
  ["07_claude_desktop_config.json", "03_claude_desktop_config.json"],
  ["06_claude_nonprofits_jelentkezesi_level.md", "04_claude_nonprofits_jelentkezes.md"],
];
for (const [src, dst] of sharedFiles) {
  fs.copyFileSync(path.join(archive, src), path.join(orgPath, dst));
}

// 4. README.md a szervezet mappához
const readme = `# ${nameArg}

**Kategória:** ${categoryArg}
**Slug:** ${slugArg}

## Csomag tartalma

| Fájl | Mit tartalmaz |
|------|---------------|
| \`01_executive_summary.md\` | Vezetői összefoglaló (3-4 oldal mély) |
| \`02_starter_prompts.md\` | 14 operatív prompt magyar nyelven |
| \`03_claude_desktop_config.json\` | Működő Claude Desktop MCP konfig |
| \`04_claude_nonprofits_jelentkezes.md\` | Pre-filled jelentkezési levél |
| \`05_pilot_metrics.md\` | 12 hetes mérőszám-roadmap |
| \`06_napi_munka_terkep.md\` | Napi feladatok + AI-asszisztencia |
| \`web/\` | Next.js premium weboldal (Vercel-deployable) |
| \`downloads/${slugArg}-ai-csomag.zip\` | Letölthető teljes csomag |

## Web app indítás

\`\`\`bash
cd web
pnpm install
pnpm dev
# http://localhost:3000
\`\`\`

## Kapcsolat

Nagy Attila · hello@expertflow.hu · Expert Flow tanácsadói anyag
`;
fs.writeFileSync(path.join(orgPath, "README.md"), readme);

// 5. Executive summary placeholder
const exec = `# ${nameArg}
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** ${new Date().toISOString().slice(0, 10)} · **Terjedelem:** 3-4 oldal

---

> ⚠️ TODO: Ez a fájl placeholder. A szervezet-specifikus tartalom megírásához kutatás kell:
> nyilvános weboldal, működés, stáb-méret, fő fájdalompontok. Forrást **mindig hivatkozz**,
> SOHA ne találj ki konkrét számot vagy belső eseményt.

### Szekciók (kötelező)

1. Helyzet (2-3 mondat)
2. Napi munka térkép (4-5 napi feladat)
3. 3 quick win (effort/impact mátrixban)
4. 5 "amire nem gondoltak" use case
5. 12-hetes fokozatos bevezetés
6. Eszköz-stack
7. 6 hetes mérőszámok
8. GDPR + etikai keret
9. Költség-kalkuláció
10. Következő lépés

**Kapcsolat:** Nagy Attila · hello@expertflow.hu
`;
fs.writeFileSync(path.join(orgPath, "01_executive_summary.md"), exec);

// 6. page-data.ts placeholder
const pageData = `import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "${nameArg}",
    slug: "${slugArg}",
    category: "${categoryArg}",
    lead: "TODO: 1 mondat — kit szolgálnak, mit csinálnak.",
    longLead: "TODO: 2-3 mondat — szervezet részletesebb leírása, fő kihívásai.",
    sensitivity: "alap",
  },
  hero: {
    promiseIntro: "TODO: bevezető pl. 'Heti'",
    promiseAccent: "TODO: hangsúlyos szám pl. '12 óra'",
    promiseTail: " TODO: zárószöveg",
  },
  situation: {
    headline: "A jelenlegi helyzet",
    paragraphs: ["TODO: 1. bekezdés", "TODO: 2. bekezdés"],
    pains: [
      { title: "TODO: fájdalom 1", detail: "részletesen" },
      { title: "TODO: fájdalom 2", detail: "részletesen" },
      { title: "TODO: fájdalom 3", detail: "részletesen" },
    ],
  },
  dailyTasks: [],
  useCases: [],
  surprises: [],
  timeline: [],
  toolStack: [],
  metrics: [],
  gdpr: { level: "alap", notes: [] },
  cost: { pilot: "TODO", scale: "TODO" },
  download: {
    zipName: "${slugArg}-ai-csomag.zip",
    contents: [],
  },
};
`;
fs.writeFileSync(path.join(orgPath, "web", "content", "page-data.ts"), pageData);

console.log(`✓ Kész: ${orgPath}`);
console.log(`  Következő: írd át a 01_executive_summary.md-t és web/content/page-data.ts-t.`);

// ---- Helpers ----
function copyRecursive(src, dst, opts = {}) {
  const skip = new Set(opts.skip ?? []);
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, dstPath, opts);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}
