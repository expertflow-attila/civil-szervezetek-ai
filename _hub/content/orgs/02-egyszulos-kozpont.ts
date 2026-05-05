import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Egyszülős Központ",
    slug: "egyszulos-kozpont",
    category: "család",
    lead:
      "20+ év online tartalmi archívum + budapesti központ. Ingyenes jogi, pszichológus, gyermekpszichológus és mediációs tanácsadás egyszülős családoknak.",
    longLead:
      "Az Egyszülős Központ kis szakértői stáb + óriási tartalmi örökség. A pszichológusok, mediátorok minden ülés után 30-90 perc adminisztrációval mennek haza — pont az időt, amit a következő családra fordíthatnának. Az AI itt nem helyettesít szakembert, hanem felszabadítja az idejét.",
    website: "https://egyszulos.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "A mediátor",
    promiseAccent: "heti 4-6 óra",
    promiseTail: " megtakarítás — egy szakember teljes munkaideje új családokra.",
  },
  situation: {
    headline: "Kis szakértői stáb, 20 év archívum, állandó adminisztratív teher.",
    paragraphs: [
      "2005 óta online, 2018 óta budapesti központtal. Ingyenes jogi, pszichológus, gyermekpszichológus, mediációs tanácsadás + gyász- és válási csoportok.",
      "A modell sajátossága: kis szakértői stáb, óriási tartalmi örökség. Minden ülés után 30-90 perc adminisztráció a szakembernek. A régi tartalmi archívum kereshetetlen — gyakran újra megíródnak már megírt anyagok.",
      "Az AI 3 ponton lép be: archívum kereshetővé tétele, mediációs jegyzőkönyv strukturálás, érdeklődő-triage és válasz-vázlat. A szakember hozzáadott értéke nem változik — csak az adminisztratív teher.",
    ],
    pains: [
      {
        title: "Mediációs jegyzőkönyv 60-90 perc/ülés",
        detail:
          "A 2 órás ülés után a mediátor egy teljes harmadik órát ad rá adminisztrációra. 4-6 mediációs ülés/hét = 4-6 óra el is veszik a szakember idejéből.",
      },
      {
        title: "20 év archívum kereshetetlen",
        detail:
          "Drive-on szétszórva. 'Nem találom' → újraírás. Új szakembereknek 3-6 hónap onboarding csak hogy belakja a tudást.",
      },
      {
        title: "Bejövő érdeklődő triage",
        detail:
          "Ki melyik szakemberhez? Pszichológus / mediátor / gyermekpszichológus / jogász / csoport? 10-15 perc megkeresésenként.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "20 év archívum Claude Project + Drive MCP",
      problem: "Drive-on szétszórt 20+ év tartalom — keresgélés helyett gyakran újraírás.",
      solution:
        "Claude Project + Drive MCP: minden tartalom kérdezhető magyarul. *'Van-e nálunk válási mediációs útmutató?'* — 10 mp.",
      effort: "közepes",
      impact: "óriási",
      saving: "~90% keresési idő",
      tools: ["Claude Project", "Drive MCP"],
    },
    {
      title: "Mediációs jegyzőkönyv-asszisztens",
      problem: "Mediátor 60-90 perc/ülés a jegyzőkönyvre. 4-6 ülés/hét = 4-6 óra adminisztráció.",
      solution:
        "Diktált 5-perces összefoglalóból Claude strukturált jegyzőkönyvet ír (tényállás, megegyezés, nyitott pont, következő találkozó).",
      effort: "kicsi",
      impact: "nagy",
      saving: "~75%",
      tools: ["Claude Desktop", "Otter.ai"],
    },
    {
      title: "Bejövő érdeklődő triage",
      problem: "10-15 perc/megkeresés: kategorizálás + szakember-választás + válasz-vázlat.",
      solution:
        "Gmail MCP + Claude: kategorizál (jogi/pszichológus/mediációs/gyermek/csoport), 80% válasz-vázlat. Koordinátor jóváhagy.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~70%",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
    {
      title: "Új szakértő onboarding NotebookLM",
      problem: "Új pszichológus/mediátor 3-6 hónap belakási idő. Sok 'kérdés a régi szakembertől'.",
      solution: "NotebookLM a 20 év archívumából — új szakember azonnal kérdezhet forrás-hivatkozással.",
      effort: "közepes",
      impact: "nagy",
      saving: "onboarding 3-6 hó → 4-8 hét",
      tools: ["Google NotebookLM"],
    },
  ],
  surprises: [
    {
      title: "Pszichológus ülés-összefoglaló asszisztens",
      description:
        "Diktált 5-perces összefoglalóból Claude strukturált terápiás napló. Hetente 5-7 órát spórol pszichológusonként.",
      why: "Sok pszichológus elfogadta hogy 'ez már csak így van' — pedig nem.",
    },
    {
      title: "Csoport-vezető tudásbázis",
      description:
        "Gyász- és válási csoport-vezetők elérik a 20 év csoport-anyagot kérdezve — nem kell újra felkutatni.",
      why: "A csoport-anyagok elszórva vannak vezetők privát fájljaiban — soha nem aggregálódtak.",
    },
    {
      title: "Krízis-eligazító Claude Project",
      description:
        "Családjogi 2026-os szabályok (válás, gyermekelhelyezés, gyermektartás, közös szülői felügyelet) — naprakész tudás kérdezhetően.",
      why: "A jogi változásokat fejből követni nem reális, és a régi tudás veszélyes.",
    },
    {
      title: "Adományozói riport-vázlat",
      description:
        "4-6 nagyobb támogató éves/féléves riportja jelenleg 8-12 óra/db; AI-vel 1-2 óra.",
      why: "Donor-riportok ritkák, de mindig stresszesek — senki nem optimalizálja őket.",
    },
    {
      title: "Pályázatírás-asszisztens (NEA, EU, CSR)",
      description:
        "Korábbi nyertes pályázatok + statisztikák Claude Project-ben → 1. verzió 1-2 óra alatt.",
      why: "Évente 4-8 pályázat, mindig más felelős — ezért az újraépítés nehéz.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "AI sáfár + DPO + Claude Desktop",
      steps: [
        "DPO megbeszélés a GDPR keretéről (KÖTELEZŐ ELSŐ LÉPÉS)",
        "AI sáfár kijelölése (koordinátor vagy 1 mediátor)",
        "Claude Desktop telepítés központi 'AI munkagépre'",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Mediációs jegyzőkönyv pilot",
      steps: [
        "1 mediátor pilotozza 30 napig",
        "Otter.ai vagy iPhone diktafon beállítás",
        "Mérés: jegyzőkönyv-idő előtt vs. után",
        "Pilot retro 4. hét végén",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Archívum Claude Project",
      steps: [
        "Drive-szinkron Claude Project-tel",
        "20+ év tartalom strukturált kategorizálás",
        "Próba-kérdések a stábtól",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "2 pszichológus + 1 jogász bevonása",
      steps: [
        "Pszichológus ülés-összefoglaló pilot",
        "Bejövő érdeklődő triage Gmail MCP",
        "GDPR-protokoll formálisan dokumentálva",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Krízis-eligazító + onboarding NotebookLM",
      steps: [
        "Családjogi 2026 szabályok NotebookLM",
        "Új szakértő onboarding pilot 1 fővel",
        "Csoport-vezető tudásbázis indul",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Adományozói riport + skálázási döntés",
      steps: [
        "Adományozói riport sablon",
        "Pályázatírás-asszisztens 1 NEA pályázattal",
        "Skálázási döntés: Pro/Team csomag",
      ],
    },
  ],
  toolStack: [
    {
      name: "Claude for Nonprofits",
      purpose: "Ingyenes / kedvezményes API + licenc",
      cost: "€0 (jelentkezés)",
      required: true,
    },
    {
      name: "Claude Desktop + Google Drive MCP",
      purpose: "Teljes 20+ év archívum elérése Drive-ról",
      cost: "€0",
      required: true,
    },
    {
      name: "Otter.ai vagy iPhone diktafon",
      purpose: "Mediációs ülés transcript",
      cost: "€0-12/hó",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Családjogi tudásbázis (válás, gyermekelhelyezés 2026)",
      cost: "€0",
      required: false,
    },
    {
      name: "Claude Project",
      purpose: "Szakértői tudásbázis (archívum + sablonok)",
      cost: "Pro / Team csomagból",
      required: true,
    },
  ],
  metrics: [
    {
      label: "Mediációs jegyzőkönyv készítési idő",
      baseline: "60-90 perc/ülés",
      target: "15-20 perc/ülés",
    },
    {
      label: "Bejövő érdeklődők átlagos válaszidő",
      baseline: "24-48 óra",
      target: "<8 óra",
    },
    {
      label: "Archívum hatékony keresés",
      baseline: "'gyakran nem találom'",
      target: "90%+ találati arány",
    },
    {
      label: "Új szakértő onboarding",
      baseline: "3-6 hónap",
      target: "4-8 hét",
    },
    {
      label: "Heti megtakarított adminisztratív óra (összesen)",
      baseline: "0",
      target: "8-12 óra",
    },
  ],
  gdpr: {
    level: "kritikus",
    notes: [
      "Mediációs ülések különleges adatkategória (családi krízis, gyermekek). Anthropic DPA aláírva kötelező.",
      "Anonimizálás minden promptba: 'Anya (35), apa (38), 2 gyerek (5, 8)' — soha nem teljes név.",
      "Audit log Claude Team-mel — ki mit kérdezett dokumentálva.",
      "AI sosem ad terápiás tanácsot közvetlenül — csak stábnak munka-asszisztens.",
      "Hangfelvétel kezelése: lokálisan átírva, az átirat anonimizálva, eredeti hangfelvétel titkosított diszkre — nem felhőbe.",
      "DPO megerősítése a bevezetés előtt KÖTELEZŐ.",
    ],
  },
  cost: {
    pilot: "€0",
    scale: "€100-200/hó",
  },
  download: {
    zipName: "02-egyszulos-kozpont-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (3-4 oldal)",
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
      title: "Mediációs jegyzőkönyv-asszisztens",
      cloudProduct: "Claude Desktop + MCP",
      setupTime: "10 perc",
      firstValueTime: "25 perc",
      problem:
        "Mediátor 60-90 perc/ülés a jegyzőkönyvre. 4-6 ülés/hét = 4-6 óra adminisztráció. AI-vel 15-20 perc.",
      saving: "75% idő",
      folderName: "01-mediacios-jegyzokonyv",
      files: ["README", "lépésről lépésre", "system-prompt", "1 prompt"],
    },
    {
      number: "02",
      title: "20 év archívum-kereső",
      cloudProduct: "Claude Project",
      setupTime: "4-6 óra (Drive-szervezés)",
      firstValueTime: "1 perc/keresés",
      problem:
        "20+ év Drive-tartalom kereshetetlen. AI-vel <1 perc forrás-hivatkozással.",
      saving: "90% keresési idő",
      folderName: "02-archivum-kereso",
      files: ["README", "lépésről lépésre", "system-prompt", "1 prompt"],
    },
  ],
};
