import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Magyar Élelmiszerbank Egyesület",
    slug: "elelmiszerbank",
    category: "élelmiszermentés",
    lead: "Magyarország legnagyobb élelmiszermentő hálózata — 2024-ben 10 685 tonna élelmiszer 20 mrd Ft értékben, 650 partnerszervezeten át 243 919 nélkülözőhöz.",
    longLead:
      "24 alkalmazott, 60+ önkéntes, 4 raktár, 7 áruházlánc-partner, 383+ aktív áruház, 699 karitatív partnerszervezet — de a logisztika mellett strukturálisan magas adminisztratív teher. Az 'irodai adatrögzítők' aktívan toborzott pozíciók. Ez a kapacitás-hiány az, amit az AI fel tud szabadítani.",
    website: "https://www.elelmiszerbank.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "Heti",
    promiseAccent: "15–22 óra",
    promiseTail: " felszabadítható a stáb adminisztrációjából — partnerkapcsolatra, sajtóra, új áruházi együttműködésre.",
  },
  situation: {
    headline: "10 685 tonna élelmiszer, 699 partner, 24 ember.",
    paragraphs: [
      "A Magyar Élelmiszerbank 2024-ben 10 685 tonna élelmiszert mentett meg 20 milliárd Ft értékben, 243 919 nélkülözőnek 650+ partneren át. Ez Magyarország legnagyobb élelmiszermentő hálózata — és 24 alkalmazott + 60 önkéntes mozgatja.",
      "A logisztikai oldal (négy raktár, 383+ áruház, 699 partnerszervezet) önmagában nehéz — de a munka 40-60%-a hátul, az adminisztratív íróasztaloknál van. SmartFront elszámolás-helpdesk, áruházanként eltérő riport-formátumok, NÉBIH-szabályok, FELIR-igazolások, donor-jelentések. Itt jön be az AI.",
      "Nem a furgon helyett. A furgon mellett papírmunkát végző kolléga helyett. Hogy aki most adatot rögzít, partner-kapcsolatot építhessen.",
    ],
    pains: [
      {
        title: "Áruházanként eltérő elszámolási logika",
        detail:
          "Aldi, Auchan, Lidl, Metro, Penny, Tesco mind külön minta-elszámolást kér. A SmartFront helpdesk napi 1-2 óra emiatt.",
      },
      {
        title: "7 áruházlánc × havi donor-riport",
        detail:
          "Mindegyik más struktúrában. A kommunikációs felelős havi 10-20 órát fordít rá.",
      },
      {
        title: "Strukturális admin-kapacitás-hiány",
        detail:
          "Aktív 'irodai adatrögzítő' önkéntes-toborzás — vagyis a stáb tudja, hogy ez a szűk keresztmetszet.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Donor-jelentés-asszisztens",
      problem: "10–20 óra/hó: 7 áruházlánc-formátum, SmartFront export-szűrés, hatás-történet írás.",
      solution:
        "Claude Project benne a SmartFront export, 7 sablon, 10 anonim hatás-történet. Egy kattintás: 'Készítsd a Tesco-riportot április hónapra'. 5–10 perc alatt 1. verzió.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~85% idő",
      tools: ["Claude Project", "Filesystem MCP"],
    },
    {
      title: "SmartFront elszámolás-validátor",
      problem:
        "Bajdik János napi 1–2 óra: minden új partneri elszámolás kézi átnézése, áruházanként eltérő logikával.",
      solution:
        "AI átolvassa a feltöltéseket, jelöli az anomáliákat (rossz formátum, lejárat-anomália, hiányzó fotó). Helpdesk csak a kétségeseket nézi.",
      effort: "közepes",
      impact: "óriási",
      saving: "~75% helpdesk-teher",
      tools: ["Claude Desktop", "Filesystem MCP"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "8–25 óra/pályázat (BGA, NEA, EFOP, EU, vállalati CSR). Évi 5–15 darab.",
      solution:
        "Korábbi nyertes pályázatok + alapító okirat + 2024 statisztikák a Claude Project-ben. 1. verzió 1–2 óra alatt, finomítás 2–4 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~65% idő",
      tools: ["Claude Project", "NotebookLM"],
    },
    {
      title: "Partner-szervezet email-triage",
      problem: "650+ partner: napi 1.5–2.5 óra triage, válasz-vázlat, sürgősség-rendelés.",
      solution:
        "Gmail MCP + Claude: kategorizál, sürgősséget rendel, 80%-os válasz-vázlatot ad. Koordinátor jóváhagy és küld.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~75% idő",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
  ],
  surprises: [
    {
      title: "CO2 / hatás-történet kalkulátor donoronként",
      description:
        "Az 27 580 124 kg CO2 (= 12 015 autó éves károsanyag-kibocsátása) szám lenyűgöző. Donor-szintre bontva — 'a Tesco XV. kerület 1 200 kg pékárut mentett, 1 752 kg CO2-t előzött meg' — még erősebb. AI generálja minden donor-riporthoz a saját számokat.",
      why:
        "A SmartFront-ban nincs CO2-modul, ezért senki sem írja be a riportokba. Pedig a számítás triviális, és a donor-élményt sokszorozza.",
    },
    {
      title: "Új áruház-pályázat — partner-matching modell",
      description:
        "Új Lidl csatlakozik → melyik karitatív partner kapja? A 699 partner adatbázisából AI 5–10 perc alatt 5 javasolt párosítást ad indoklással. A koordinátor dönt — de 80%-kal gyorsabb előválasztás.",
      why:
        "Most ezt 'földrajzi közelség + tapasztalat' alapján fejből csinálják. Az adat alapú döntés nem volt korábban opció.",
    },
    {
      title: "Adóigazolás-generátor 1%-os SZJA-felajánlóknak",
      description:
        "Évi 2–3 hét intenzív munka. Sablon × név-lista → 1 nap alatt megír mind. Heti 8–12 óra megtakarítás csak az SZJA-időszakra.",
      why:
        "Repetitív, ismétlődő munka — pont az amit az AI a legjobban csinál. De olyan 'dolog ami megvan' érzés, hogy ritkán optimalizálják.",
    },
    {
      title: "Önkéntes-onboarding videó-átirat + tudásteszt",
      description:
        "60+ önkéntes onboarding-ja folyamatos. AI a bevezető videóból generál: 1-oldalas összefoglaló, 5 leggyakoribb félreértés, 10 kérdéses tudásteszt. Coach-terhelés 50-70% csökken.",
      why: "A coach idő-intenzív, de minőségileg fontos. Az AI nem helyettesíti — felgyorsítja a könnyebb részét.",
    },
    {
      title: "Sajtó-megkeresésekhez forrás-hivatkozásos vázlat",
      description:
        "Évi 50–100 sajtó-megkeresés (élelmiszerbiztonság, élelmiszerpazarlás). AI 5–10 perc alatt szakszerű vázlat — a kommunikációs felelős finomít. Forrás-hivatkozás kötelező.",
      why:
        "A 'sajtó-stresszelni fog' érzés miatt sokszor hetekkel csúsznak — pedig egy 30 perces feladatból 5 perc lehetne.",
    },
  ],
  timeline: [
    {
      week: "Hét 1",
      phase: "pilot",
      title: "Setup és AI sáfár",
      steps: [
        "AI sáfár kijelölése (kommunikációs vagy CSR-felelős)",
        "Claude Desktop telepítés a központi 'AI munkagépre'",
        "Claude for Nonprofits jelentkezés benyújtva (2-4 hét átfutás)",
        "Stáb-tájékoztató 30 perc: mit jelent, mit nem",
      ],
    },
    {
      week: "Hét 2",
      phase: "pilot",
      title: "Donor-riport pilot indul",
      steps: [
        "Tesco-sablon betanítása a Claude Project-be",
        "SmartFront export anonimizálva",
        "Első próba-riport AI-vel (offline, nem küldjük)",
        "Mérőszámok rögzítve: óraszám előtt/után",
      ],
    },
    {
      week: "Hét 3",
      phase: "pilot",
      title: "Első éles donor-riport",
      steps: [
        "Április Tesco-riport AI-vel készítve",
        "Kommunikációs felelős finomít, leadás",
        "Mérés: 10–15 óra → ?? óra",
      ],
    },
    {
      week: "Hét 4",
      phase: "pilot",
      title: "Pilot retro és fázis-kapu",
      steps: [
        "Eredmény-elemzés Cseh Balázzsal / vezetéssel",
        "Mit tanultunk, mi nem működött",
        "Döntés: bővítjük-e a 2. fázisra",
      ],
    },
    {
      week: "Hét 5–6",
      phase: "csapat",
      title: "SmartFront-validátor + 6 áruházlánc-sablon",
      steps: [
        "Bajdik János kapja: SmartFront elszámolás-validátor",
        "A 6 maradék áruházlánc-sablon betanítása (Aldi, Auchan, Lidl, Metro, Penny, KFC)",
        "Tudásbázis Claude Project: ÁSZF, NÉBIH, FELIR, élelmiszerbiztonsági szabályok",
      ],
    },
    {
      week: "Hét 7–8",
      phase: "csapat",
      title: "Pályázat A/B teszt + GDPR-protokoll",
      steps: [
        "1 BGA pályázat AI-vel + 1 hagyományosan (összehasonlítás)",
        "GDPR-protokoll formálisan dokumentálva",
        "Audit log review elsőként",
        "Csapat-szintű mérőszám-review",
      ],
    },
    {
      week: "Hét 9–10",
      phase: "skálázás",
      title: "Önkéntes-onboarding + partner-matching",
      steps: [
        "60+ önkéntes onboarding video → AI átirat + tudásteszt",
        "Partner-matching pilot 1 új áruházra (pl. új Lidl)",
        "CO2 / hatás-történet kalkulátor élesben donor-riportokon",
      ],
    },
    {
      week: "Hét 11–12",
      phase: "skálázás",
      title: "Sajtó + adóigazolás + skálázási döntés",
      steps: [
        "Sajtó-prompt-csomag bevezetése",
        "Adóigazolás-generátor előkészítése a következő SZJA-ra",
        "ROI-mérés végleges",
        "Skálázási döntés: Pro/Team csomag, API-keret",
      ],
    },
  ],
  toolStack: [
    {
      name: "Claude for Nonprofits",
      purpose:
        "Ingyenes / kedvezményes API + Pro / Team licenc nonprofit-okhoz. Magas magyar nyelvtudás.",
      cost: "€0 (jelentkezés, 2–4 hét átfutás)",
      required: true,
    },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose:
        "Lokális dokumentumok elérése (sablonok, jelentések, NÉBIH-útmutatók) — anélkül hogy felhőbe kerülnének.",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Desktop + Google Drive MCP",
      purpose: "A meglévő szervezeti Drive elérése — jelentések, archív anyagok.",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Desktop + Gmail MCP",
      purpose: "Email-triage és válasz-vázlatok. Kötelező auto-send=false beállítás.",
      cost: "€0",
      required: false,
    },
    {
      name: "SmartFront (meglévő)",
      purpose: "Élelmiszermentési adminisztráció — az AI mellette dolgozik, NEM helyettesíti.",
      cost: "meglévő",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "NÉBIH-útmutatók, élelmiszerbiztonsági szabályok, FELIR-eljárás tudásbázis.",
      cost: "€0",
      required: false,
    },
  ],
  metrics: [
    {
      label: "Donor-jelentés átlagos készítési ideje",
      baseline: "10–15 óra/hó",
      target: "<2 óra/hó",
    },
    {
      label: "SmartFront helpdesk-kérdések száma (heti)",
      baseline: "30–50",
      target: "<15",
    },
    {
      label: "Heti megtakarított adminisztratív óra",
      baseline: "0",
      target: "12–18 óra",
    },
    {
      label: "AI-vel írt pályázat sikerarány",
      baseline: "nincs adat",
      target: "A/B teszt 1 BGA-val",
    },
    {
      label: "Önkéntes-onboarding ideje",
      baseline: "2–3 hét",
      target: "4–7 nap",
    },
    {
      label: "Stáb-tagok napi AI-használata",
      baseline: "0/24",
      target: "8/24",
    },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Anonimizálás minden promptba — sosem teljes név, sosem konkrét cím, sosem rászoruló-családok személyazonosító adata.",
      "Anthropic DPA aláírva a Claude for Nonprofits / Team szerződésnél. Article 9 különleges adatokra vonatkozó kiegészítés.",
      "Audit log Claude Team-mel, havi review.",
      "Donor-adat NEM keveredhet rászoruló-adattal egy Claude Project-ben — két különálló project.",
      "AI nem kommunikál közvetlenül rászoruló családdal — csak stáb-asszisztens.",
      "SmartFront export előtt automatikus anonimizáló script kötelező (partnerszervezet-szintű helymeghatározást is le kell takarni).",
      "Fizikai adathordozó (titkosított külső lemez) az érzékeny eredeti dokumentumoknak. Mac-en FileVault, Windows-on BitLocker.",
    ],
  },
  cost: {
    pilot: "€0",
    scale: "€100–350/hó",
  },
  download: {
    zipName: "05-elelmiszerbank-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — vezetői összefoglaló (4 oldal, valós 2024-2025 számokkal)",
      "02_starter_prompts.md — 14 általános + szervezet-specifikus prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig (Filesystem + Drive + Gmail)",
      "04_claude_nonprofits_jelentkezes.md — Élelmiszerbank-specifikus jelentkezési levél",
      "05_pilot_metrics.md — 12-hetes (3×4 hét) mérőszám-roadmap",
      "06_napi_munka_terkep.md — 14 napi feladat × AI-asszisztencia mátrix prioritás-sorrenddel",
      "csomagok/ — 4 kész operatív munkacsomag: copy-paste promptok, sample-fájlok, várható eredmények",
    ],
  },
  readyPackages: [
    {
      number: "01",
      title: "Donor-jelentés Claude Project",
      cloudProduct: "Claude Project",
      setupTime: "5 perc",
      firstValueTime: "10 perc",
      problem:
        "10–20 órás havi donor-riport Tesco/Auchan-formátumban. AI-vel 5–10 perc alatt 1. verzió a SmartFront-export-ból.",
      saving: "85% idő",
      folderName: "01-claude-project-donor-jelentes",
      files: ["README", "system-prompt", "elso-prompt", "3 sample-fájl", "várható-eredmény"],
    },
    {
      number: "02",
      title: "SmartFront elszámolás-validátor",
      cloudProduct: "Claude Desktop + MCP",
      setupTime: "15 perc",
      firstValueTime: "25 perc",
      problem:
        "Bajdik János napi 1–2 óra: minden új partner-feltöltés kézi átnézése, áruházanként eltérő szabállyal. AI prevalidál, Bajdik csak a kétségeseket nézi.",
      saving: "70% helpdesk",
      folderName: "02-claude-desktop-smartfront-validator",
      files: ["README", "system-prompt", "elso-prompt", "5 mintafeltöltés", "áruházlánc-szabályok"],
    },
    {
      number: "03",
      title: "Pályázatírás workflow (Claude Code)",
      cloudProduct: "Claude Code",
      setupTime: "10 perc",
      firstValueTime: "1–2 óra",
      problem:
        "12–25 órás BGA/EFOP/EU pályázat. Claude Code lokálisan olvas korábbi nyertes pályázatokat, statisztikákat, alapító okiratot — strukturált, git-verziózott pályázat-kódolás.",
      saving: "60% idő",
      folderName: "03-claude-code-palyazatiras-bga",
      files: ["README", "CLAUDE.md", "session-prompt", "2 nyertes pályázat", "alapító-okirat", "statisztikák"],
    },
    {
      number: "04",
      title: "Heti vezetői dashboard (rutin)",
      cloudProduct: "Scheduled Routine",
      setupTime: "10 perc",
      firstValueTime: "hétfő reggel",
      problem:
        "Cseh Balázs hétfő reggel automatikusan kapja az emailben: top 5 áruház, top 5 partner, hetes kg, CO2, anomáliák, 3 javaslat. Manuális 2–4 óra → 5 perc review.",
      saving: "85% idő",
      folderName: "04-scheduled-routine-heti-dashboard",
      files: ["README", "routine-prompt", "smartfront-heti-export minta", "routine-script.mjs", "várható-eredmény"],
    },
  ],
};
