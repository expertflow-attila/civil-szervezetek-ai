import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "NANE Egyesület — Nők A Nőkért Együtt az Erőszak Ellen",
    slug: "nane",
    category: "bántalmazott nők",
    lead:
      "1994 óta. 8 fő munkatárs + vezetői team, 1500+ önkéntes történetében. Évi 1200-2400 segélyvonal-hívás.",
    longLead:
      "A magyar civil szektor egyetlen célzott segélyvonala, amelyet képzett női önkéntesek működtetnek. Jogi-politikai-szakmai pozíció — az AI itt SZIGORÚAN belső munka-asszisztens, KRITIKUS GDPR keret. Sosem érintkezik klienssel. A jogi anyag-elemzés, pályázat, sajtó-vázlat — ezek a fő AI-területek.",
    website: "https://nane.hu",
    sensitivity: "kritikus",
  },
  hero: {
    promiseIntro: "Jogi anyag-feldolgozás",
    promiseAccent: "4-8 óra → 1-2 óra",
    promiseTail: " — a NANE reformkezdeményezései a kutatás-intenzív munkán múlnak.",
  },
  situation: {
    headline: "8 fős profi stáb, érzékeny terület, jogi-politikai pozíció.",
    paragraphs: [
      "A NANE 1994 óta működik. 8 fő munkatárs + vezetői team. 1500+ önkéntes története. Segélyvonal: He/Cs/P 18-22h, Ke 10-22h, Sze 12-16h. Évi 1200-2400 hívás. Anonim hívás alapelv — sosem rögzítettek.",
      "A modell sajátossága: érzékeny adatkezelés + reform-kezdeményezések. A jogi munka kutatás-intenzív (alkotmánybíróság 1997, CEDAW jelentések, EU családon belüli erőszak irányelvek).",
      "Az AI itt SZIGORÚAN belső munka-asszisztens. Sosem érintkezik klienssel, sosem dolgozik segélyvonal-adattal. Csak jogi anyag-elemzés, pályázat, sajtó-vázlat, kampány-anyag.",
    ],
    pains: [
      {
        title: "Jogi anyag 4-8 óra/db",
        detail:
          "Új törvénytervezet, nemzetközi precedens, CEDAW-jelentés feldolgozása. Nagy szakmai súly.",
      },
      {
        title: "Pályázatírás 12-25 óra/db",
        detail: "EU, NEA, magán. Évi 5-10 db. Politikailag nehéz pozíció.",
      },
      {
        title: "16 Akciónap éves 80-120 óra",
        detail: "November 25 – december 10. Éves nagy kampány — kommunikációs koncentráció.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Jogi anyag-összegző asszisztens",
      problem: "4-8 óra/szakmai anyag. Reformkezdeményezések alapja.",
      solution:
        "50-200 oldalas jogi szöveg + NANE korábbi anyagok → Claude 1-2 óra alatt vezetői összefoglaló, sajtó-vázlat, hatás-elemzés.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~75%",
      tools: ["Claude Project"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "12-25 óra/EU pályázat. Politikailag óvatos megfogalmazás.",
      solution: "Korábbi nyertesek + statisztikák → 1. verzió 5-10 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Sajtó- és kommunikációs vázlat",
      problem: "Heti 3-5 sajtó-anyag, 2-3 óra/db. Érzékeny téma, óvatos hangnem.",
      solution: "Sablon-tudásbázis + ad-hoc téma → Claude vázlat 30-60 perc alatt.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~75%",
      tools: ["Claude Desktop"],
    },
    {
      title: "Munkahelyi zaklatás-megelőzési protokoll",
      problem: "Cég-specifikus protokollok kézzel. 4-6 óra/cég.",
      solution: "AI sablon + cég-input → 30-60 perc/protokoll.",
      effort: "közepes",
      impact: "közepes",
      saving: "~80%",
      tools: ["Claude Project"],
    },
  ],
  surprises: [
    {
      title: "16 Akciónap kampány-tartalom batch",
      description: "Heti 5-7 social poszt + sajtó-anyag + esemény-leírás november 25 – december 10.",
      why: "Most 80-120 órás éves nagy effort — AI-vel 30-50 órára csökkenthető.",
    },
    {
      title: "Anonim szakmai eset-tanulmány (csak nyilvános bírósági anyagból)",
      description:
        "Segélyvonal-hívásokból SOSEM, csak nyilvánosan-elérhető bírósági ítéletekből. Edukációs célra.",
      why: "A nyilvános ítéletek tudás-erőforrás — manuálisan nehézkes feldolgozni.",
    },
    {
      title: "Donor-jelentés magán-adományozóknak",
      description: "Köszönet + impact-számok éves. Most ad-hoc, AI-vel sablonon.",
      why: "Donor-megtartás kritikus, de nem skálázódik kézzel.",
    },
    {
      title: "Új önkéntes onboarding videó-kurzus",
      description:
        "A kötelező női önkéntes-képzés interaktív verziója. NotebookLM-ben Q&A.",
      why: "Önkéntes-képzés időigényes — AI nem helyettesíti a személyes részt, de gyorsítja.",
    },
    {
      title: "Belső szabályzat-changelog (NANE-saját)",
      description: "Politikailag változó környezet — szabályzat-változások havi review.",
      why: "Most ad-hoc — AI strukturált trackinget csinál.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "DPO + Setup (KÖTELEZŐ)",
      steps: [
        "DPO megbeszélés (KÖTELEZŐ ELSŐ LÉPÉS) — etikai keret írásban",
        "AI sáfár (jogász vagy adminisztratív vezető)",
        "Claude Desktop + Filesystem MCP",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Jogi anyag-összegző pilot",
      steps: [
        "1-2 jogász pilotozza 30 napig",
        "1-2 új törvénytervezet feldolgozás AI-vel",
        "Mérés: idő/anyag, minőség",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Sajtó-vázlat-generátor",
      steps: [
        "Kommunikációs felelős bevonva",
        "Sablon-tudásbázis épül",
        "Mérés: válaszidő",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "1 EU pályázat AI-vel + GDPR teljes",
      steps: [
        "1 EU pályázat AI-vel",
        "GDPR-protokoll teljes formalitásban",
        "Audit log review",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Munkahelyi zaklatás-protokoll + 16 Akciónap",
      steps: [
        "Munkahelyi zaklatás-protokoll generátor",
        "16 Akciónap kampány-batch előkészítés",
        "Donor-jelentés sablon",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Onboarding kurzus + skálázás",
      steps: [
        "Új önkéntes interaktív kurzus",
        "Belső szabályzat-changelog",
        "Skálázási döntés (DPO-jóváhagyással)",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "LOKÁLIS, nem felhő-szinkronizált. Sablonok, jogi anyagok.",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project",
      purpose: "Csak nyilvános / anonim sablonok. Reformkezdeményezések kutatás.",
      cost: "Pro / Team",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Jogi precedens-archív (nyilvános anyagok)",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    { label: "Jogi anyag-feldolgozás (1 törvénytervezet)", baseline: "4-8 óra", target: "1-2 óra" },
    { label: "Sajtó-vázlat készítési idő", baseline: "2-3 óra", target: "30-60 perc" },
    { label: "Pályázatírási idő (1 EU)", baseline: "18-22 óra", target: "8-12 óra" },
    { label: "16 Akciónap előkészítés ideje", baseline: "80-120 óra", target: "40-60 óra" },
    { label: "Heti megtakarított adminisztratív óra (csapat)", baseline: "0", target: "12-20 óra" },
  ],
  gdpr: {
    level: "kritikus",
    notes: [
      "Az AI SOHA nem érintkezik klienssel — sem chatbot, sem automata válasz, sem szöveg-analízis konkrét hívásból.",
      "Segélyvonal-hívások anonim alapelv — NEM rögzítettek. Az AI sosem dolgozik konkrét hívási adattal.",
      "Anonimizálás minden promptba: sosem teljes név, lakcím, kapcsolat-adat. Csak strukturális helyzet.",
      "Anthropic DPA aláírva.",
      "Audit log Claude Team-mel — DPO havi review.",
      "Lokális tárolás az érzékeny eredeti dokumentumoknak (titkosított diszk).",
      "Politikai-jogi kontextus: minden adatkezelési-protokoll jogilag védhető legyen.",
    ],
  },
  cost: { pilot: "€0", scale: "€100-175/hó (DPO-jóváhagyott)" },
  download: {
    zipName: "11-nane-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (3-4 oldal, KRITIKUS GDPR keret)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig (LOKÁLIS-only)",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
    ],
  },
};
