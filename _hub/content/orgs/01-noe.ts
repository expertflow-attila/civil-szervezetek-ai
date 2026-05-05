import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "NOE — Nagycsaládosok Országos Egyesülete",
    slug: "noe",
    category: "család",
    lead: "16 000 tagcsalád, 250 helyi szervezet, 7 régió, 5 ingyenes tanácsadó-szolgálat. 1987 óta.",
    longLead:
      "A NOE Magyarország legnagyobb nagycsaládos közössége. A 250 helyi vezető a kritikus pont — nem alkalmazottak, hanem vállalkozó-szervezők. A központi iroda nem tudja minden kérdésüket napi szinten megválaszolni — pontosan ez a 'központi szűk keresztmetszet' az, amit egy AI-projekt a leghatékonyabban tehermentesít.",
    website: "https://www.noe.hu",
    sensitivity: "alap",
  },
  hero: {
    promiseIntro: "250 helyi vezető",
    promiseAccent: "kérdezhet",
    promiseTail: " — anélkül hogy a központi telefon csengjen.",
  },
  situation: {
    headline: "Egy központ, 250 lokális vezető, 16 000 család.",
    paragraphs: [
      "A NOE 1987 óta szolgálja a magyar nagycsaládokat. 16 000 tagcsalád, 250 helyi szervezet, 7 régió, 5 ingyenes tanácsadó-szolgálat (jogsegély, otthonteremtés, családi/szociális ellátások, fogyasztóvédelem, gyermeknevelés).",
      "A modell sajátossága: a 250 helyi vezető vállalkozó-szervező — nem alkalmazott. A központi iroda telefonja folyamatosan szól. Ez a 'központi szűk keresztmetszet' a NOE legnagyobb adminisztratív terhe.",
      "Az AI itt nem helyettesít, hanem közvetít: a 250 vezetőnek egy közös tudásbázist ad, amelyben minden szervezeti dokumentum benne van — alapító okirat, programszervezési útmutató, beszámoló-sablon, kedvezmény-szabályzat.",
    ],
    pains: [
      {
        title: "Központi telefon napi 1.5-2.5 óra",
        detail:
          "Helyi vezetők mindennapi kérdései — nagy részük ismétlődő (sablonok, eljárások).",
      },
      {
        title: "5 tanácsadó × 50-100 napi megkeresés",
        detail: "Várólisták, ismétlődő típus-kérdések jogi/szociális témákban.",
      },
      {
        title: "iFORM 2026-tól közhasznúsági beszámoló",
        detail: "Új formanyomtatvány, 30-50 óra évente — szöveges rész strukturálatlan.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Helyi vezető assistant (Claude Project)",
      problem:
        "250 helyi vezető naponta hívja a központi irodát ismétlődő kérdésekkel: programszervezés, kedvezmények, sablonok. Központi telefon 1.5-2.5 óra/nap.",
      solution:
        "Egy Claude Project benne minden szervezeti dokumentum. Vezetők önkiszolgáló módon kérdezhetnek, forrás-hivatkozásos választ kapnak.",
      effort: "közepes",
      impact: "óriási",
      saving: "~95%",
      tools: ["Claude Project", "Pro / Team licenc"],
    },
    {
      title: "Tagi email-triage és válasz-vázlat",
      problem: "30-50 napi email különböző témákban (jogi, kedvezmény, családi pótlék).",
      solution: "Gmail MCP + Claude: kategorizál, sürgősséget rendel, 80% válasz-vázlat. Koordinátor jóváhagy.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~70%",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "Évi 5-15 pályázat (BGA, NEA, EFOP). 8-20 óra/db.",
      solution:
        "Korábbi nyertes pályázatok + alapító okirat + statisztikák a Project-ben → 1. verzió 1-2 óra alatt.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Helyi jelentés-összesítés vezetői dashboard-tá",
      problem: "250 helyi szervezet negyedéves Excel összerakása vezetésnek (6-10 óra/Q).",
      solution: "AI generál vezetői dashboardot számokkal, trendekkel, top 10 listával 30 perc alatt.",
      effort: "kicsi",
      impact: "közepes",
      saving: "~85%",
      tools: ["Claude Desktop", "Filesystem MCP"],
    },
  ],
  surprises: [
    {
      title: "Tagdíj-elmaradás early warning",
      description:
        "A tagdíj-történet alapján a Claude 2-3 hónappal előre jelzi mely családok valószínűsíthetően lecsúszhatnak. Koordinátor proaktívan érdeklődik mielőtt elveszik.",
      why: "Senki nem nézi az ismétlődő mintákat — túl sok tagcsalád, túl kis stáb. AI másodpercek alatt csinálja.",
    },
    {
      title: "Új helyi szervezet alapítási asszisztens",
      description:
        "Új vidéki város érdeklődik — 30+ oldalas alapítási útmutató Claude Project-ben kérdezve. Új vezető 5 perc alatt megkapja a checklist-et.",
      why: "Az alapítási útmutatót senki nem olvassa el szekvenciálisan — csak akkor amikor kell. AI megkönnyíti a hozzáférést.",
    },
    {
      title: "Családi pótlék jogi changelog (havi NotebookLM)",
      description:
        "5-15 jogszabály-változás évente. NotebookLM havonta frissül a hivatalos közlönyökből — tanácsadók azonnal kérdezhetnek forrás-hivatkozással.",
      why: "Most a tanácsadóknak fejből kell követniük a változásokat — fáradságos és hibalehetőség.",
    },
    {
      title: "Volt családok visszahívása email-batch",
      description:
        "Az utóbbi 5 évben kilépett 200-500 családot AI-asszisztált batch-emaillal lehet visszahívni — minden családnak személyre szabott szöveg.",
      why: "A passzív családoknál nincs energia kézzel egyenként megírni — AI gyors.",
    },
    {
      title: "Sajtó-megkeresés egységes hangnem",
      description:
        "250 helyi vezető néha sajtó-megkeresésre nyilatkozik — AI-asszisztens 30 másodperc alatt ad konzisztens válasz-vázlatot.",
      why: "Most a NOE márkaüzenete szétforgácsolódik — a vezetőknek nincs eszköz a központi hangnem követésére.",
    },
  ],
  timeline: [
    {
      week: "Hét 1",
      phase: "pilot",
      title: "Setup + AI sáfár",
      steps: [
        "AI sáfár kijelölése (kommunikációs / adminisztratív vezető)",
        "Claude Desktop telepítés központi 'AI munkagépre'",
        "Claude for Nonprofits jelentkezés (2-4 hét átfutás)",
        "Stáb-tájékoztató 30 perc",
      ],
    },
    {
      week: "Hét 2-3",
      phase: "pilot",
      title: "Tagi email-triage pilot",
      steps: [
        "Gmail label `tagok_2026/` kijelölve",
        "Első próba: napi 5-10 levél AI-asszisztált",
        "Mérés: válaszidő előtt vs. után",
      ],
    },
    {
      week: "Hét 4",
      phase: "pilot",
      title: "Pilot retro és fázis-kapu",
      steps: [
        "Eredmény-elemzés vezetéssel",
        "Mit tanultunk, mi nem működött",
        "Döntés: bővítjük-e a 2. fázisra",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Helyi vezető Claude Project",
      steps: [
        "Szervezeti dokumentumok feltöltése (alapító, ÁSZF, sablonok)",
        "Project-szerkezet kialakítása",
        "5-10 helyi vezető meghívása pilot-tesztre",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "Pályázat A/B + GDPR",
      steps: [
        "1 BGA pályázat AI-vel + 1 hagyományosan",
        "GDPR-protokoll dokumentálva",
        "Audit log review elsőként",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "250 vezető Project + early warning",
      steps: [
        "Project-hozzáférés 250 helyi vezetőnek",
        "Tagdíj-elmaradás early warning pilot 1 régióban",
        "Tanácsadói triage rendszer kialakítása",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "NotebookLM + skálázási döntés",
      steps: [
        "Családtámogatási jogi changelog NotebookLM publikálva",
        "ROI-mérés végleges",
        "Skálázási döntés: Claude Team csomag + API-keret",
      ],
    },
  ],
  toolStack: [
    {
      name: "Claude for Nonprofits",
      purpose: "Ingyenes / kedvezményes API + Pro/Team licenc nonprofitoknak.",
      cost: "€0 (jelentkezés, 2-4 hét)",
      required: true,
    },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Sablonok, jelentések, eljárás-szabályzat lokális elérése.",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project (helyi vezetőknek)",
      purpose: "250 vezető önkiszolgáló tudásbázisa, forrás-hivatkozásos válaszokkal.",
      cost: "Pro / Team csomagból",
      required: true,
    },
    {
      name: "Claude Desktop + Gmail MCP",
      purpose: "Tagi email-triage és válasz-vázlatok (auto-send=false).",
      cost: "€0",
      required: false,
    },
    {
      name: "Google NotebookLM",
      purpose: "Családtámogatási jogi changelog (családi pótlék, GYED, GYES).",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    {
      label: "Tagi email átlagos válaszidő",
      baseline: "24-48 óra",
      target: "<8 óra",
    },
    {
      label: "Helyi vezető-kérdés központi telefon-idő",
      baseline: "1.5-2.5 óra/nap",
      target: "<30 perc/nap",
    },
    {
      label: "Új tanácsadó onboarding",
      baseline: "6-12 hónap",
      target: "2-4 hónap",
    },
    {
      label: "Pályázatírási idő (1 BGA)",
      baseline: "12-15 óra",
      target: "5-7 óra",
    },
    {
      label: "Heti megtakarított adminisztratív óra",
      baseline: "0",
      target: "10-15 óra",
    },
    {
      label: "Stáb-tagok napi AI-használata",
      baseline: "0/5",
      target: "4/5",
    },
  ],
  gdpr: {
    level: "alap",
    notes: [
      "Anonimizálás minden promptba — sosem teljes név, lakcím, TAJ-szám.",
      "Anthropic DPA aláírva a Claude for Nonprofits / Team szerződésnél.",
      "Audit log Claude Team-mel, havi review.",
      "AI nem helyettesíti a jogi tanácsadást — csak vázlatot ad, a tanácsadó dönt.",
      "Vallási hovatartozás (egyes tagcsaládoknál) — különleges adat, sosem promptba.",
      "Helyi vezető Project-ben csak nyilvános szervezeti dokumentum — nem személyes adat.",
    ],
  },
  cost: {
    pilot: "€0",
    scale: "€100-350/hó",
  },
  download: {
    zipName: "01-noe-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (3-4 oldal, 9 szekció)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél (NOE-példa)",
      "05_pilot_metrics.md — 12-hetes (3×4 hét) mérőszám-roadmap",
      "06_napi_munka_terkep.md — 11 napi feladat × AI-asszisztencia mátrix",
    ],
  },
};
