import type { PageContent } from "@/lib/types";

// MEGJEGYZÉS: az eredeti lista 'Ezüst Vonal (MMSZ-fenntartású)'-t említett, ami publikus
// forrásokban nem azonosítható. A magyar idős-lelkivonal a DélUtán Alapítvány (1998 óta).
// A folder slug megmaradt '06-ezust-vonal'-ként (URL-stabilitás), de tartalom DélUtán.

export const pageContent: PageContent = {
  org: {
    name: "DélUtán Alapítvány",
    slug: "delutan",
    category: "krízisvonal — idősek",
    lead:
      "1998 óta Magyarország egyetlen 40+ feletti felnőtteknek szóló telefonos lelkisegély-szolgálata. 28 önkéntes, évi 7000 segítség.",
    longLead:
      "Naponta 18-21h üzemel. Hívható ingyenesen 137-77 (mobil) és 06-80-200-866 (vezetékes) számokon. Mellette chat, email, jogi és orvosi konzultáció, nyelv- és számítógép-klubok. Minden hívás után 20-30 perc adminisztráció — itt hatja meg a kiégés-kockázat az önkénteseket. Az AI a hívás-utáni adminisztrációt csinálja gyorsabbá és kíméletesebbé.",
    website: "https://delutan.hu",
    sensitivity: "kritikus",
  },
  hero: {
    promiseIntro: "Hívás után",
    promiseAccent: "20 perc → 5 perc",
    promiseTail: " — adminisztráció, az önkéntes ne stresszhelyzetben fogalmazzon.",
  },
  situation: {
    headline: "28 önkéntes, évi 7 000 hívás, állandó kiégés-kockázat.",
    paragraphs: [
      "A DélUtán Alapítvány 1998 óta működik. Önkéntesek üzemeltetik — mind felsőfokú végzettségűek, kötelező képzésen átestek. Sem ők, sem a vezetés nem kap fizetést.",
      "A modell sajátossága: nehéz hívások — magány, párvesztés, betegség, néha öngyilkossági fenyegetés (HVG 2025: 'a hídról hívtak, hogy ugrani fog'). Hívás után 20-30 perc adminisztráció stresszhormon-szint mellett.",
      "Az AI nem helyettesíti a beszélgetést — felgyorsítja és kíméletesebbé teszi a hívás-utáni adminisztrációt. Az önkéntes diktál 5 percet, az AI strukturál.",
    ],
    pains: [
      {
        title: "Hívás-utáni adminisztráció 20-30 perc",
        detail: "Stresszhelyzeti fogalmazás. 25-50 hívás/nap × 20-30 perc = 8-25 óra napi.",
      },
      {
        title: "28 önkéntes-beosztás",
        detail: "Heti 2-3 óra, igény-egyezés, helyettesítés.",
      },
      {
        title: "Krízis-eskaláció dokumentáció",
        detail: "Öngyilkossági / akut bántalmazási fenyegetés esetek dokumentálása stresszben.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Hívás-utáni összefoglaló-asszisztens",
      problem: "20-30 perc/hívás stresszhelyzeti adminisztráció. 25-50 hívás/nap.",
      solution:
        "5 perc diktálva → Claude strukturált jegyzet (anonim helyzet, érzelmi téma, krízis-szint, lépés-javaslat).",
      effort: "kicsi",
      impact: "óriási",
      saving: "~70%",
      tools: ["Claude Desktop", "Otter.ai vagy iPhone diktafon"],
    },
    {
      title: "Önkéntes-beosztás optimalizáló",
      problem: "28 fő, igények, helyettesítés. Heti 2-3 óra koordinátorra.",
      solution: "Claude megkapja a heti igényeket + önkéntes-rugalmasságot → optimalizált beosztást javasol.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~80%",
      tools: ["Claude Desktop"],
    },
    {
      title: "Pályázatírás (NEA, EFOP, magán)",
      problem: "Évi 5-10 pályázat, 8-15 óra/db.",
      solution: "Korábbi nyertesek + statisztikák Project-ben → 1. verzió 1-2 óra alatt.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Új önkéntes onboarding videó-kurzus",
      problem: "40-60 órás kötelező képzés.",
      solution: "Videók + AI Q&A NotebookLM → 20-30 óra interaktív kurzus.",
      effort: "közepes",
      impact: "nagy",
      saving: "onboarding ~50%",
      tools: ["NotebookLM"],
    },
  ],
  surprises: [
    {
      title: "Krízis-eskaláció pattern keresés",
      description:
        "Havi anonim összefoglalókban mintázat: szezonális öngyilkossági trendek, geográfiai hot-spotok. Vezetői dashboardra.",
      why: "Most senki nem aggregálja az anonim összefoglalókat — pedig ott van a tudás.",
    },
    {
      title: "Önkéntes-burnout early warning",
      description: "Havi check-in válaszokból mely önkéntes van kiégés közelében.",
      why: "Önkéntes-kilépést leggyakrabban csak utólag észlelik.",
    },
    {
      title: "Sajtó-megkeresés-vázlat (idős magány, demográfia)",
      description: "Szakszerű, óvatos válaszok 5 perc alatt.",
      why: "Sajtó-megkeresés stresszes — a kommunikációs felelős csúszással válaszol.",
    },
    {
      title: "Szupervízió jegyzőkönyv + akciópontok",
      description:
        "Havi szupervíziós ülésekből strukturált összefoglaló + felelős-vállalás táblázat.",
      why: "Most sok ülés-anyag elveszik — AI strukturál.",
    },
    {
      title: "Adományozói történet-sablon (anonim)",
      description: "Donor-riportokhoz sablon-történetek, sosem konkrét hívót kitalálva.",
      why: "Anekdota-írás emocionálisan megterhelő — AI sablonon dolgozik.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "DPO + Claude Desktop + sáfár",
      steps: [
        "DPO megbeszélés (anonim hívás alapelv)",
        "AI sáfár (1 önkéntes-koordinátor)",
        "Claude Desktop + Filesystem MCP",
        "Otter.ai / iPhone diktafon beállítás 1-2 önkéntesnek",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Hívás-utáni asszisztens pilot",
      steps: [
        "1-2 önkéntes pilotozza 30 napig",
        "Mérés: adminisztráció-idő/hívás",
        "Pilot retro 4. hét",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Beosztás-optimalizáló",
      steps: [
        "28 önkéntes igénye Excel-be",
        "Claude javasolja a heti beosztást",
        "Koordinátor minőségi review",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "Pályázat AI-vel + GDPR",
      steps: [
        "1 NEA pályázat AI-vel",
        "GDPR-protokoll formálisan",
        "Audit log review",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Mind 28 önkéntesre + dashboard",
      steps: [
        "Hívás-utáni asszisztens minden önkéntesnek",
        "Krízis-pattern dashboard pilot",
        "Burnout early warning indul",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Onboarding kurzus + skálázás",
      steps: [
        "Új önkéntes interaktív kurzus",
        "ROI mérés",
        "Skálázási döntés",
      ],
    },
  ],
  toolStack: [
    {
      name: "Claude for Nonprofits",
      purpose: "Ingyenes API + licenc",
      cost: "€0 (jelentkezés)",
      required: true,
    },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Lokális, anonim összefoglalók feldolgozása",
      cost: "€0",
      required: true,
    },
    {
      name: "Otter.ai vagy iPhone diktafon",
      purpose: "Hívás-utáni 5-perces diktálás",
      cost: "€0-12/hó",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Krízis-protokoll + idős-támogatási tudásbázis + onboarding kurzus",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    {
      label: "Hívás-utáni adminisztráció átlagos ideje",
      baseline: "20-30 perc/hívás",
      target: "5-10 perc/hívás",
    },
    {
      label: "Önkéntes-beosztás készítési ideje",
      baseline: "2-3 óra/hét",
      target: "30 perc/hét",
    },
    {
      label: "Új önkéntes onboarding ideje",
      baseline: "40-60 óra",
      target: "20-30 óra",
    },
    {
      label: "Heti megtakarított adminisztratív óra (összesen)",
      baseline: "0",
      target: "15-20 óra",
    },
    {
      label: "Önkéntes-megtartás 1 év után (1-5)",
      baseline: "?",
      target: "+0.5-1 pont",
    },
  ],
  gdpr: {
    level: "kritikus",
    notes: [
      "Anonim hívás alapelv — sem hívás, sem chat NEM rögzítendő.",
      "Anonimizálás minden promptba: '60-es férfi, vidéki, magány, párvesztés' — sosem teljes név, lakcím.",
      "Krízis-eskaláció humán protokoll: öngyilkossági akut veszély → AZONNALI humán, AI csak utólag dokumentál.",
      "Anthropic DPA aláírva. Lokális tárolás — sem Drive, sem iCloud.",
      "Audit log Claude Team-mel havi review.",
      "Önkéntes-szupervízió kötelező — az AI-használat is szupervíziós napirenden.",
    ],
  },
  cost: {
    pilot: "€0",
    scale: "€60-180/hó",
  },
  download: {
    zipName: "06-ezust-vonal-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — DélUtán Alapítvány vezetői összefoglaló (3-4 oldal)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél (DélUtán-ra szabva ajánlott)",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
    ],
  },
};
