import type { PageContent } from "@/lib/types";

// Az eredeti lista 'HUNOR'-t említ, ami NEM civil — hivatásos állami BM OKF szerv.
// A civil önkéntes katasztrófa-mentő profilra a MMSZ Mentőszolgálat illik.

export const pageContent: PageContent = {
  org: {
    name: "MMSZ Mentőszolgálat",
    slug: "mmsz-mento",
    category: "önkéntes mentés",
    lead:
      "Magyar Máltai Szeretetszolgálat Mentőszolgálata. ~500 önkéntes, 110 000+ ellátott, 30+ év. Polgári védelem + egészségügyi + pszichológiai.",
    longLead:
      "Önkéntes-vezérelt szervezet, képzett önkéntesekkel. Bevetés-utáni dokumentáció, képzési protokoll, biztosítási és szakmai jelentés mind kötelező — pont akkor amikor az önkéntes stresszhormon-szint mellett kimerülve zárja a bevetést. Az AI 80%-kal csökkenti az AAR-jelentés idejét és kíméletesebbé teszi.",
    website: "https://www.maltai.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "Bevetés-utáni jelentés",
    promiseAccent: "1-3 óra → 15 perc",
    promiseTail: " — diktálva, strukturálva. Az önkéntes nem stresszben fogalmaz.",
  },
  situation: {
    headline: "~500 önkéntes, heti 3-10 bevetés, állandó AAR-dokumentáció.",
    paragraphs: [
      "Az MMSZ Mentőszolgálata 30+ éve működik. ~500 önkéntes, indulás óta 110 000+ ellátott. Polgári védelem + egészségügyi + pszichológiai. Eseti és rendszeres bevetések.",
      "A modell sajátossága: önkéntes-vezérelt, képzett önkéntesek. A bevetés-utáni adminisztráció (AAR — After-Action Review) kötelező, de stresszhormon-szint mellett zajlik.",
      "Az AI itt: bevetés után 5 perc diktálva → strukturált AAR. Önkéntes-szintű 15-30 perc, és a jelentések konzisztensebbek — éves trend-elemzés sokkal pontosabb.",
    ],
    pains: [
      {
        title: "AAR jelentés 1-3 óra/bevetés",
        detail: "Stresszhelyzeti fogalmazás. Heti 3-10 bevetés. Önkéntes-szintű kimerítő.",
      },
      {
        title: "Új önkéntes onboarding 40-80 óra",
        detail: "Képzés időigényes. Sok dropout a folyamat során.",
      },
      {
        title: "Pályázatírás 12-25 óra/db",
        detail: "BGA, NEA, EU, magán — évi 4-8 db.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Bevetés-utáni AAR jelentés",
      problem: "1-3 óra/eset. Stresszhormon-szint mellett kimerülve.",
      solution: "5 perc diktálva → Claude strukturálja: helyzet, beavatkozás, eredmény, tanulság, javaslat.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~80%",
      tools: ["Claude Desktop", "Otter.ai"],
    },
    {
      title: "Új önkéntes onboarding videó-kurzus",
      problem: "40-80 óra képzés. Sok dropout.",
      solution: "Videó + AI Q&A NotebookLM → 20-40 óra interaktív + 1 nap szakmai gyakorlat.",
      effort: "közepes",
      impact: "nagy",
      saving: "~50% + jobb megtartás",
      tools: ["NotebookLM"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "BGA, NEA, EU. 12-25 óra/db.",
      solution: "Korábbi nyertesek + statisztikák → 1. verzió 1-2 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Donor-kommunikáció batch",
      problem: "Havi 8-12 óra magán + cég.",
      solution: "AI-asszisztált batch — sablonon, mini-riportokkal.",
      effort: "kicsi",
      impact: "közepes",
      saving: "~70%",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
  ],
  surprises: [
    {
      title: "Önkéntes-burnout early warning",
      description:
        "Havi check-in válaszokból mintázat-keresés. Mely önkéntes van kiégés közelében (stresszbevetés-arány magas).",
      why: "Önkéntes-kilépést leggyakrabban csak utólag észlelik.",
    },
    {
      title: "Bevetési pattern keresés (éves AAR-aggregálás)",
      description: "Szezonális, geográfiai, esemény-típus trend.",
      why: "Most senki nem aggregálja a 100+ AAR-jelentést — pedig ott van a tudás.",
    },
    {
      title: "Nemzetközi best practices havi digest",
      description: "Angol → magyar nemzetközi katasztrófa-mentő anyag NotebookLM digest.",
      why: "Most ezek nem jutnak át — időigény + nyelv.",
    },
    {
      title: "Cég-specifikus donor mini-riport",
      description: "Milyen bevetésnél hova ment a támogatás.",
      why: "Most 1 sablon mindenkinek — hiányzik a personalizáció.",
    },
    {
      title: "Sajtó-megkeresés válasz-vázlat",
      description: "Katasztrófa-helyzet kommunikációja gyors, óvatos.",
      why: "Sajtó-stressz miatt csúszó válasz — AI 5 percessé teszi.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "Setup",
      steps: [
        "AI sáfár (parancsnok-helyettes vagy szakmai vezető)",
        "Claude Desktop + Filesystem MCP",
        "Otter.ai pilot 5-10 önkéntesnek",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "AAR jelentés pilot",
      steps: [
        "5-10 önkéntes pilotozza 30 napig",
        "Mérés: AAR-idő/bevetés",
        "Pilot retro 4. hét",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Új önkéntes onboarding kurzus",
      steps: [
        "Tapasztalt önkéntesek videó-felvételek",
        "AI transzkript + NotebookLM Q&A",
        "Új önkéntes pilot",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "1 BGA pályázat AI-vel + GDPR",
      steps: [
        "1 BGA pályázat AI-vel",
        "GDPR-protokoll formálisan",
        "Audit log review",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Mind ~500 önkéntes (fokozatosan)",
      steps: [
        "AAR-asszisztens kiterjesztve",
        "Bevetési pattern dashboard",
        "Önkéntes-burnout early warning",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Donor + sajtó + skálázás",
      steps: [
        "Donor mini-riport sablon",
        "Sajtó-prompt-csomag",
        "Skálázási döntés (Team 7-15 user)",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Sablonok, AAR-archív, pályázat-anyagok",
      cost: "€0",
      required: true,
    },
    {
      name: "Otter.ai",
      purpose: "Bevetés-utáni 5-perces diktálás",
      cost: "€0-12/hó",
      required: true,
    },
    {
      name: "Claude Project",
      purpose: "Szervezet tudásbázisa + nemzetközi katasztrófa-mentő anyag",
      cost: "Pro / Team",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Protokoll-frissítések, képzési anyag, onboarding kurzus",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    { label: "Bevetés-utáni AAR idő", baseline: "1-3 óra", target: "15-30 perc" },
    { label: "Új önkéntes onboarding ideje", baseline: "40-80 óra", target: "20-40 óra" },
    { label: "AAR-jelentés következetessége (1-5)", baseline: "?", target: "+1-2 pont" },
    { label: "Pályázatírási idő (1 BGA)", baseline: "18-22 óra", target: "8-12 óra" },
    { label: "Heti megtakarított adminisztratív óra (csapat)", baseline: "0", target: "20-40 óra" },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Bevetésen ellátott személyek adatai érzékenyek (egészségügyi, pszichológiai).",
      "Anonimizálás minden promptba: sosem teljes név, lakcím, TAJ-szám, állapot-leírás konkrétan.",
      "Bevetés-utáni AAR anonim módon — csak operatív tanulság, nem konkrét sérült adat.",
      "Anthropic DPA aláírva.",
      "Pszichológiai esetek különleges adatkategória: lokális tárolás, sosem AI-prompt-ban.",
      "Sajtó-anyag: az ellátottak privacy-je abszolút — sosem konkrét eset megnevezve.",
    ],
  },
  cost: { pilot: "€0", scale: "€140-525/hó" },
  download: {
    zipName: "12-hunor-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — MMSZ Mentőszolgálat vezetői összefoglaló (3-4 oldal)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél (MMSZ-re szabva)",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
    ],
  },
};
