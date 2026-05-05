import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "BAGázs Közhasznú Egyesület",
    slug: "bagazs",
    category: "roma telep / mentor",
    lead:
      "Mentor-modell roma telepi közösségi munka. 10 fő, 120-150 önkéntes, 75 család, 8 program. SROI: 1 Ft → 3.27 Ft hozam.",
    longLead:
      "2011 óta. Bag (40 km) és Dány (600 fős szegregátum) telepek. Prima Primissima 2023, SozialMarie 2016 (Jogklinika). Támogatók BlackRock + Morgan Stanley. Magyarország egyik legjobban dokumentált hatás-mérésű civil szervezete. Az AI itt a 120-150 mentor heti eset-jegyzetét strukturálja és aggregálja.",
    website: "https://bagazs.org",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "Mentor eset-jegyzet",
    promiseAccent: "30 perc → 5 perc",
    promiseTail: " — és minden jegyzet aggregálható az éves SROI-méréshez.",
  },
  situation: {
    headline: "120-150 mentor heti jegyzete, 75 család, állandó hatás-dokumentáció.",
    paragraphs: [
      "A BAGázs 2011 óta működik. 10 főállású munkatárs, ~120-150 önkéntes mentor évente. 75 család és ~250 fő közvetlen részvevő. 8 aktív program — köztük a SozialMarie-díjas Jogklinika.",
      "A modell sajátossága: mentor-koordináció + hatás-mérés. SROI 1 Ft → 3.27 Ft. Konkrét eredmény: 25 fő nyílt munkaerőpiacon, +3 közmunkán.",
      "A szűk keresztmetszet: a 120-150 mentor heti eset-jegyzete heterogén — egyik strukturált, másik anekdotikus. Az aggregálás emiatt nehéz, az SROI-mérés időigényes (évi 80-120 óra).",
    ],
    pains: [
      {
        title: "Mentor eset-jegyzet 30-60 perc/db",
        detail: "120-150 mentor × 1-2 jegyzet hetente = sok stáb-koordinátori idő.",
      },
      {
        title: "Donor-jelentés vállalati formátumban",
        detail: "BlackRock + Morgan Stanley — pénzügyi-igényes nemzetközi standard. Havi 8-12 óra.",
      },
      {
        title: "SROI éves mérés 80-120 óra",
        detail: "A 120-150 mentor jegyzeteiből aggregálás. Most manuális.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Mentor eset-jegyzet strukturáló",
      problem: "30-60 perc/db. Heterogén formátum. 120-150 mentor heti 1-2 jegyzet.",
      solution: "Mentor 5 perc diktálva → Claude strukturálja: helyzet, fejlődés, akadályok, következő téma.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~80%",
      tools: ["Claude Desktop", "Otter.ai"],
    },
    {
      title: "Donor-jelentés vállalati formátum",
      problem: "BlackRock + Morgan Stanley pénzügyi-igényes 8-12 óra/hó.",
      solution: "Sablon Claude Project-ben + havi adat → 1-2 óra alatt 1. verzió.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~85%",
      tools: ["Claude Project"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "EU, vállalati CSR, NEA. 12-25 óra/db.",
      solution: "Korábbi nyertesek + alapító + statisztikák → 1. verzió 1-2 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "SROI éves mérés asszisztens",
      problem: "80-120 óra évente.",
      solution: "Mentor-jegyzetek aggregálva → AI strukturált hatás-jelentést készít.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project", "Filesystem MCP"],
    },
  ],
  surprises: [
    {
      title: "Adósságkezelő program család-jelentés",
      description: "Családonként strukturált fejlődés-jelentés a sablon-jegyzetekből.",
      why: "Most ad-hoc, minden szakember máshogy ír.",
    },
    {
      title: "Jogklinika eset-tanulmány generátor (anonim)",
      description: "Diszkriminációs eseteket strukturált sablon-tanulmányokká.",
      why: "A SozialMarie-díjas tudás ott van, de manuálisan nehézkes közzétenni.",
    },
    {
      title: "Roma telepi sajtó-anyag óvatos vázlat",
      description: "Prima Primissima utáni 50-100 sajtó-megkeresés évente.",
      why: "Téma érzékeny, hibás idézet kommunikációs károkat okoz.",
    },
    {
      title: "Mentor-koordinátor heti dashboard",
      description: "120-150 mentor jegyzeteiből: ki van bajban, kit kell support-olni.",
      why: "Most a koordinátor egyenként hívja a mentorokat — időigényes, késő.",
    },
    {
      title: "Mentor-burnout early warning",
      description: "Havi check-in válaszokból mintázat-keresés.",
      why: "Az önkéntes-megtartás kritikus — a mentor-pótlás 6-12 hó.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "Setup",
      steps: [
        "AI sáfár (mentor-koordinátor + 1 stáb)",
        "Claude Desktop + Filesystem MCP",
        "Otter.ai pilot 5-10 mentorhoz",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Mentor eset-jegyzet pilot",
      steps: [
        "5-10 mentor pilotozza 30 napig",
        "Mérés: jegyzet-idő/db",
        "Pilot retro 4. hét",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Donor-jelentés vállalati",
      steps: [
        "BlackRock + Morgan Stanley sablon",
        "1 havi vállalati riport AI-vel",
        "Mérés: idő + minőség",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "1 EU pályázat + GDPR",
      steps: [
        "1 EU pályázat AI-vel",
        "GDPR-protokoll formálisan",
        "Audit log review",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "120-150 mentorra + SROI",
      steps: [
        "Mind 120-150 mentor bevonva",
        "SROI éves asszisztens pilot",
        "Mentor-koordinátor dashboard",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Sajtó + jogklinika + skálázás",
      steps: [
        "Sajtó-prompt-csomag",
        "Jogklinika eset-tanulmány generátor",
        "Skálázási döntés (Team 7-12 user)",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Sablonok, jelentések, eset-jegyzetek",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project",
      purpose: "Szervezeti tudásbázis + nemzetközi vállalati riport-sablonok",
      cost: "Pro / Team",
      required: true,
    },
    {
      name: "Otter.ai",
      purpose: "Mentor eset-jegyzet 5 perces diktálás",
      cost: "€0-12/hó",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Jogklinika jogi precedens-archív",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    { label: "Mentor eset-jegyzet idő", baseline: "30-60 perc", target: "5-10 perc" },
    { label: "Donor-jelentés vállalati havi idő", baseline: "8-12 óra", target: "1-2 óra" },
    { label: "Pályázatírási idő (1 EU)", baseline: "18-22 óra", target: "8-12 óra" },
    { label: "SROI éves mérés idő", baseline: "80-120 óra", target: "30-40 óra" },
    { label: "Heti megtakarított adminisztratív óra (csapat)", baseline: "0", target: "30-50 óra" },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Roma + család + gyermek + jogi eset = több réteg érzékenység.",
      "Anonimizálás minden promptba — sosem konkrét család neve, telepi cím, gyermek-azonosító.",
      "Etnikai hovatartozás sosem említett ha nem szükséges; ha igen: aggregált statisztika.",
      "Anthropic DPA aláírva.",
      "Mentor eset-jegyzetek lokálisan tárolva (titkosított diszk), aggregált formában felhőbe.",
      "Jogklinika eset-anyag — anonim sablonon, konkrét jogi eset csak titkosított storage.",
    ],
  },
  cost: { pilot: "€0", scale: "€140-420/hó" },
  download: {
    zipName: "10-bagazs-ai-csomag.zip",
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
