import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Hintalovon Gyermekjogi Alapítvány",
    slug: "hintalovon",
    category: "gyermekjogi",
    lead:
      "13 fős profi csapat, 100+ önkéntes. NEMECSEK + Yelon + ECPAT + Pro Bono Jogi Központ + Gyermekjogi Nagykövetek.",
    longLead:
      "A magyar civil szektor egyik legprofibb kommunikációval bíró szervezete. Alapító Gyurkó Szilvia (volt UNICEF gyermekjogi igazgató). 2025 márciustól Szuverenitásvédelmi Hivatal listáján — az 'átláthatósági' törvény miatt 2026-tól létbizonytalanság. Az AI épp most segít a leghatékonyabb erőforrás-felhasználással.",
    website: "https://hintalovon.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "Jogi anyag-feldolgozás",
    promiseAccent: "4-8 óra → 1-2 óra",
    promiseTail: " — a kutatás-intenzív munka legnehezebb részében.",
  },
  situation: {
    headline: "Kutatás-intenzív munka, 13 fős stáb, 2025-ös létbizonytalanság.",
    paragraphs: [
      "A Hintalovon 2015 óta működik. 13 fős alkalmazott csapat (2024), 100+ önkéntes, ~100 millió Ft uniós/európai pályázati forrás évente. Fő programok: NEMECSEK (közösségi gyermekvédelem), Yelon (online szexuális felvilágosítás tinédzsereknek), ECPAT, Pro Bono Jogi Központ, Gyermekjogi Nagykövetek.",
      "A modell sajátossága: kutatás-intenzív munka, hosszú jogi anyagok, érzékeny gyermekvédelmi adat. A magyar civil szektor egyik legprofibb kommunikációja.",
      "2025 márciustól a Szuverenitásvédelmi Hivatal listáján szerepelnek EU-pályázat miatt; 2026-tól létbizonytalanság (1% SZJA, NAV-jóváhagyás). Az AI épp most segít a leghatékonyabb erőforrás-felhasználással.",
    ],
    pains: [
      {
        title: "Jogi anyag 4-8 óra/db",
        detail: "50-200 oldalas törvénytervezet vagy nemzetközi precedens feldolgozása.",
      },
      {
        title: "EU pályázat 12-25 óra/db",
        detail: "Évi 5-10 pályázat. Most NAV-jóváhagyási kötelezettséggel.",
      },
      {
        title: "Sajtó-anyag heti 5-10",
        detail: "Kommunikációs felelős terhelése. Minőségi szöveg, gyors válaszidő.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Jogi anyag-összegző asszisztens",
      problem: "4-8 óra/szakmai anyag (jogszabály-elemzés, jogeset-szintézis, ECPAT-fordítás).",
      solution:
        "50-200 oldalas jogi szöveg + Hintalovon korábbi anyagok → Claude 1 óra alatt megírja a vezetői összefoglalót, sajtó-vázlatot, hatás-elemzést.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~75%",
      tools: ["Claude Project"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "12-25 óra/EU pályázat, évi 5-10.",
      solution: "Korábbi nyertesek + alapító + statisztikák → 1. verzió 5-10 óra alatt.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Sajtó- és kommunikációs vázlat-generátor",
      problem: "2-4 óra/db, heti 5-10. Minőségi, óvatos szöveg.",
      solution: "Sablon-tudásbázis + ad-hoc téma → Claude vázlatot ír 30-60 perc alatt.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~75%",
      tools: ["Claude Desktop"],
    },
    {
      title: "Donor-jelentés (NAV-kompatibilis)",
      problem: "2026-tól külön formátum-igény, havi 4-6 óra.",
      solution: "Sablon + statisztikák Project-ben → 30-60 perc/donor.",
      effort: "közepes",
      impact: "közepes",
      saving: "~80%",
      tools: ["Claude Desktop"],
    },
  ],
  surprises: [
    {
      title: "Yelon chat-asszisztens (önkéntesnek)",
      description:
        "A tinédzser chat-jét NEM AI fogadja, de az önkéntes mellett AI segédlet a NotebookLM-ben (helyzet-protokollok, erőforrás-listák).",
      why: "Az önkéntes magabiztosabb, gyorsabb választ ad — anélkül hogy AI érintené a tinédzsert.",
    },
    {
      title: "Anonimizált eset-tanulmány generátor",
      description: "NEMECSEK-hez sok érzékeny eset → anonim szakmai tanulmány. Sosem konkrét gyermek.",
      why: "A safeguarding-tudás megosztható lenne — de manuálisan túl időigényes.",
    },
    {
      title: "Gyermekjogi Nagykövetek mentor-anyag",
      description: "Középiskolás önkénteseknek interaktív tudásbázis NotebookLM-ben.",
      why: "A fiatalok kérdezgetnek, de a felnőtt mentor-idő szűkös.",
    },
    {
      title: "ECPAT nemzetközi jelentés magyar összefoglaló",
      description: "Havi 1-2 nemzetközi jelentés feldolgozása magyarra.",
      why: "Most ezek nehezen jutnak át — nyelvi-szakmai keretrendszer szétfeszíti az időt.",
    },
    {
      title: "Belső safeguarding-protokoll Q&A bot",
      description: "A 100+ önkéntesnek elérhető tudásbázis: 'mi a teendő, ha gyermek beszámolt bántalmazásról?'",
      why: "Most a felelősökhöz fordulnak telefonon — akkor is amikor a választ a sablon-protokollban van.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "Setup + DPO",
      steps: [
        "DPO megbeszélés (gyermekvédelmi adat)",
        "AI sáfár (jogász-kutató vagy kommunikációs felelős)",
        "Claude Desktop telepítés",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Jogi anyag-összegző pilot",
      steps: [
        "1-2 jogász-kutató pilotozza 30 napig",
        "Mérés: feldolgozási-idő/anyag",
        "Pilot retro",
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
      title: "1 EU pályázat AI-vel + GDPR",
      steps: [
        "1 EU pályázat AI-vel (összevetés a hagyományos módszerrel)",
        "GDPR-protokoll formálisan",
        "Audit log review",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Yelon + Nagykövetek tudásbázis",
      steps: [
        "Yelon önkéntes-asszisztens (NotebookLM)",
        "Gyermekjogi Nagykövetek mentor-anyag",
        "Donor-jelentés sablon",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Eset-tanulmány + skálázás",
      steps: [
        "Anonimizált eset-tanulmány generátor",
        "ECPAT nemzetközi digest",
        "Skálázási döntés (Team 8-15 user)",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Sablonok, pályázatok, jogi anyagok lokális",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project",
      purpose: "Gyermekjogi tudásbázis (saját + nemzetközi)",
      cost: "Pro/Team",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Jogszabályi changelog, jogeset-archív, Yelon önkéntes-anyag",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    { label: "Jogi anyag-feldolgozás (1 új jogszabály)", baseline: "4-8 óra", target: "1-2 óra" },
    { label: "Sajtó-vázlat készítési idő", baseline: "2-4 óra", target: "30-60 perc" },
    { label: "Pályázatírási idő (1 EU)", baseline: "18-22 óra", target: "8-12 óra" },
    { label: "Heti megtakarított adminisztratív óra (csapat)", baseline: "0", target: "25-40 óra" },
    { label: "Új munkatárs onboarding", baseline: "3-6 hó", target: "1-2 hó" },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Anonimizálás minden promptba — sosem konkrét gyermek neve, lakhelye, iskolája.",
      "Anthropic DPA aláírva — kötelező.",
      "Yelon chat-anonimitás abszolút — tinédzser-azonosítók sosem kerülnek AI-hoz.",
      "Audit log Claude Team-mel havi review.",
      "Pro Bono jogi eset-tanulmányok anonim sablon-szintűek.",
      "2025-2026 Szuverenitásvédelmi Hivatal kontextus: minden adatkezelési-protokoll jogilag védhető legyen.",
    ],
  },
  cost: { pilot: "€0", scale: "€160-525/hó" },
  download: {
    zipName: "07-hintalovon-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (3-4 oldal, 2025-ös kontextussal)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
      "csomagok/ — 2 kész operatív munkacsomag",
    ],
  },
  readyPackages: [
    {
      number: "01",
      title: "Jogi anyag-összegző",
      cloudProduct: "Claude Project",
      setupTime: "10 perc",
      firstValueTime: "1 óra",
      problem:
        "50-200 oldalas jogi anyag (törvénytervezet, CEDAW, ECPAT) feldolgozása 4-8 óra. AI-vel 1-2 óra: vezetői összefoglaló + sajtó-vázlat + hatás-elemzés.",
      saving: "75% idő",
      folderName: "01-jogi-anyag-osszegzo",
      files: ["README", "lépésről lépésre", "system-prompt", "1 prompt"],
    },
    {
      number: "02",
      title: "Sajtó-vázlat-generátor",
      cloudProduct: "Claude Desktop + MCP",
      setupTime: "10 perc",
      firstValueTime: "15 perc",
      problem: "Heti 5-10 sajtó-megkeresés × 2-3 óra/db. AI-vel 30-60 perc / db.",
      saving: "75% idő",
      folderName: "02-sajto-vazlat",
      files: ["README", "lépésről lépésre", "1 prompt"],
    },
  ],
};
