// SABLON FÁJL — minden szervezetnek saját page-data.ts kell.
// A `_shared/web-template/` ezt használja default-ként hogy a TypeScript build ne törjön.
// Új szervezetnél `cp` után csak ezt a fájlt írod át.

import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Példa Szervezet",
    slug: "pelda",
    category: "kategória",
    lead: "Egy mondatos szervezeti összefoglaló — kit szolgálnak, mióta, mire.",
    longLead:
      "2-3 mondatos részletesebb összefoglaló a szervezet munkájáról, méretéről, fő kihívásairól.",
    website: "https://example.org",
    sensitivity: "alap",
  },
  hero: {
    promiseIntro: "Heti",
    promiseAccent: "12 óra",
    promiseTail: " megspórolható a stáb adminisztrációjából.",
  },
  situation: {
    headline: "A jelenlegi helyzet",
    paragraphs: [
      "Az első bekezdés bemutatja a szervezet napi munkáját és terheit.",
      "A második bekezdés rámutat 1-2 konkrét fájdalompontra.",
    ],
    pains: [
      { title: "Fájdalompont 1", detail: "Részletes leírás" },
      { title: "Fájdalompont 2", detail: "Részletes leírás" },
      { title: "Fájdalompont 3", detail: "Részletes leírás" },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Use case 1",
      problem: "Milyen jelenleg",
      solution: "Hogyan segít az AI",
      effort: "kicsi",
      impact: "nagy",
      saving: "70% idő",
      tools: ["Claude Desktop"],
    },
  ],
  surprises: [
    {
      title: "Meglepő use case 1",
      description: "Részletes leírás",
      why: "Miért nem gondolnak rá",
    },
  ],
  timeline: [
    {
      week: "Hét 1–2",
      phase: "pilot",
      title: "Setup és első siker",
      steps: ["AI sáfár kijelölése", "Claude Desktop telepítés", "Első prompt"],
    },
  ],
  toolStack: [
    {
      name: "Claude Desktop",
      purpose: "Fő AI munkagép, MCP-kapcsolatokkal",
      cost: "ingyenes (Pro fizetős)",
      required: true,
    },
  ],
  metrics: [
    {
      label: "Heti megtakarított óra",
      baseline: "0",
      target: "10+",
    },
  ],
  gdpr: {
    level: "alap",
    notes: ["Anonimizálás minden promptban", "Audit log heti review"],
  },
  cost: {
    pilot: "€0",
    scale: "€50/hó",
  },
  download: {
    zipName: "pelda-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló",
      "02_starter_prompts.md — 14 operatív prompt",
      "03_claude_desktop_config.json — működő MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél",
      "05_pilot_metrics.md — 12 hetes mérőszám-tervezet",
      "06_napi_munka_terkep.md — napi feladatok és AI-asszisztencia",
    ],
  },
};
