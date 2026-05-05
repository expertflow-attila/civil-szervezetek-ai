import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "InDaHouse Hungary",
    slug: "indahouse",
    category: "gyermekvédelem / tanoda",
    lead:
      "Borsod-i tanoda-szervezet 5 településen. ~150 gyerek, 150 állandó önkéntes, 4 program (kora gyermekkori → NagyTanoda 18 évesig). 2014 óta.",
    longLead:
      "Alapító Benkő Fruzsina szociális munkás. 2014-ben 2 zsák játékkal érkezett Peré-be. Hernádszentandrás, Fügöd, Peré + 2 további. Magán-adományok + céges szponzorok finanszíroznak. Logisztikai kihívás: Budapest ↔ Borsod 220+ km, az adminisztráció vidéken, a koordinátor a fővárosban.",
    website: "https://indahousehungary.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "Önkéntes-onboarding",
    promiseAccent: "8-12 óra → 4-6 óra",
    promiseTail: " — videó-kurzus a 220 km-es utazás előtt. Több önkéntes marad meg.",
  },
  situation: {
    headline: "Borsod 220 km Budapesttől, a szervezeti koordináció szétszakad.",
    paragraphs: [
      "Az InDaHouse 2014 óta működik 5 településen. ~150 gyerek, 150 állandó önkéntes, 4 program (kora gyermekkori → NagyTanoda). Magán-adományok + céges szponzorok.",
      "A szűk keresztmetszet: a koordináció szétszakad — a koordinátor a fővárosban, a tanoda Borsodban. A pályázatírás vidékről, a donor-kommunikáció a fővárosi koordinátoron át.",
      "Az AI 3 ponton lép be: pályázat-asszisztens (vidékről admin), önkéntes-onboarding videó-kurzus (utazás előtt felkészítés), donor-kommunikáció batch (1200+ adományozó).",
    ],
    pains: [
      {
        title: "Pályázat 12-25 óra/db vidékről",
        detail: "Évi 5-10 pályázat. Vidéki internet, távoli admin — nehézkes.",
      },
      {
        title: "Önkéntes-onboarding 220 km utazással",
        detail:
          "Új önkéntes Budapestről 3-4 órás úttal érkezik. 1-2 nap képzés. Drága szervezetnek, nehéz az önkéntesnek.",
      },
      {
        title: "Donor-kommunikáció havi 12-18 óra",
        detail: "1200+ magán + 20 céges támogató. Egyéni kommunikáció időigényes.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "12-25 óra/EU/EFOP pályázat. Évi 5-10 db. Vidékről admin nehézkes.",
      solution: "Korábbi nyertesek + alapító + statisztikák a Project-ben → 1. verzió 1-2 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Önkéntes-onboarding videó-kurzus",
      problem: "8-12 óra Borsodban személyesen. Új önkéntes 220 km-t utazik.",
      solution:
        "Online videó + AI Q&A NotebookLM → 4-6 óra otthoni felkészülés, csak 1 nap szakmai bevezetés vidéken.",
      effort: "közepes",
      impact: "nagy",
      saving: "~50% + jobb megtartás",
      tools: ["NotebookLM"],
    },
    {
      title: "Donor-kommunikáció batch",
      problem: "1200+ magán + 20 céges. Havi 12-18 óra.",
      solution: "AI-asszisztált batch-email — köszönet + 1%-os SZJA emlékeztető, személyre szabva.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~80%",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
    {
      title: "Foglalkozás-terv generátor",
      problem: "4 program × heti foglalkozás-anyag (6-10 óra/hét).",
      solution: "Korábbi sablonokból AI heti foglalkozás-tervet ad életkor-specifikusan.",
      effort: "kicsi",
      impact: "közepes",
      saving: "~60%",
      tools: ["Claude Project"],
    },
  ],
  surprises: [
    {
      title: "Anonimizált családlátogatás-jegyzet",
      description: "Diktált 5 percből strukturált család-jegyzet, fejlődés-követés.",
      why: "Most kézzel írják, vagy nem készül — pedig fejlődés-követéshez kritikus.",
    },
    {
      title: "Cég-specifikus donor-mini-riport",
      description: "20 céges támogatónak nem 1 sablon, hanem cég-specifikus mini-riport (mire költöttük náluk a támogatást).",
      why: "Most 1 sablon mindenkinek — hiányzik a personalizáció ami cégvállalat lojalitást építene.",
    },
    {
      title: "Sajtó-megkeresés válasz-vázlat",
      description: "Roma gyermek-helyzet, mélyszegénység, gyermekvédelem témakörökben szakszerű, óvatos válasz.",
      why: "Téma érzékeny — egy hibás idézet kommunikációs károkat okoz. AI sablonon dolgozik.",
    },
    {
      title: "1200+ magán-adományozó email batch (1% SZJA)",
      description: "Éves köszönet + 1%-os SZJA emlékeztető, személyre szabva. AI 4 óra alatt megír mind.",
      why: "Most 5-10% emlékezteti az adományozók — pedig a jelek szerint sok visszafordulna.",
    },
    {
      title: "Önkéntes-burnout early warning",
      description: "Havi check-in válaszokból mintázat-keresés. Mely fővárosi önkéntes lemorzsolódhat.",
      why: "A 220 km utazás a leggyakoribb dropout-ok. Korai jelek értékesek.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "Setup",
      steps: [
        "AI sáfár (fővárosi koordinátor)",
        "Claude Desktop + Filesystem MCP",
        "Claude for Nonprofits jelentkezés",
        "Stáb-tájékoztató 30 perc",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Pályázat-asszisztens pilot",
      steps: [
        "1 EU/EFOP pályázat AI-vel + 1 hagyományosan",
        "Mérés: idő + sikerarány",
        "Pilot retro 4. hét",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Önkéntes-onboarding videó-kurzus",
      steps: [
        "Benkő Fruzsina és tapasztalt önkéntesek videók",
        "AI transzkript + NotebookLM Q&A",
        "Új önkéntes pilot-tesztje",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "Donor-kommunikáció batch + GDPR",
      steps: [
        "1200+ magán-adományozó köszönet-email batch",
        "20 céges mini-riport pilot",
        "GDPR-protokoll formálisan",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Foglalkozás-terv + családlátogatás",
      steps: [
        "Foglalkozás-terv generátor 4 programra",
        "Családlátogatás-jegyzet asszisztens",
        "Sajtó-prompt-csomag",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Önkéntes-burnout + skálázás",
      steps: [
        "Burnout early warning rendszer",
        "ROI-mérés",
        "Skálázási döntés (Pro/Team)",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Pályázat-sablonok, donor-tudásbázis",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project",
      purpose: "Szervezeti tudásbázis",
      cost: "Pro / Team-ből",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Önkéntes-onboarding kurzus",
      cost: "€0",
      required: true,
    },
    { name: "Otter.ai", purpose: "Családlátogatás-jegyzet diktálás", cost: "€0-12/hó", required: false },
  ],
  metrics: [
    { label: "Pályázatírási idő (1 EU)", baseline: "18-22 óra", target: "8-12 óra" },
    { label: "Önkéntes-onboarding ideje", baseline: "8-12 óra/fő", target: "4-6 óra/fő" },
    { label: "Önkéntes-dropout új belépőknél", baseline: "?", target: "−30%" },
    { label: "Donor-kommunikáció havi idő", baseline: "12-18 óra", target: "3-4 óra" },
    { label: "Heti megtakarított adminisztratív óra", baseline: "0", target: "12-18 óra" },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Roma gyermekekkel dolgozó szervezet — kettős érzékenység (kor + etnikai hovatartozás). GDPR 9. cikk.",
      "Anonimizálás minden promptba — sosem konkrét gyermek neve, családi azonosító.",
      "Etnikai hovatartozás sosem említett, ha nem szükséges. Ha igen: aggregált statisztika.",
      "Anthropic DPA aláírva.",
      "Donor-anyagok anonim történet-sablonokon — sosem konkrét család.",
      "Sajtó-anyag: a roma téma kommunikációjához óvatosság, jogász-jóváhagyás.",
    ],
  },
  cost: { pilot: "€0", scale: "€100-200/hó" },
  download: {
    zipName: "09-indahouse-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (3-4 oldal)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
    ],
  },
};
