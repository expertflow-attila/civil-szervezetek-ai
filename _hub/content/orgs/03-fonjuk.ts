import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Fonjuk Egymás Hálóját Egyesület",
    slug: "fonjuk",
    category: "krízisszülők",
    lead:
      "Krízisben lévő szülők peer-mentor hálózata. Kis stáb, óriási mentor-háló, kritikus krízis-koordináció.",
    longLead:
      "A Fonjuk a magyar peer-támogatás egyedi modellje: kis stáb + sorstársi mentor-rendszer. A koordinátor szerepe kritikus: krízis-megkeresés érkezik, és 15-30 percig stresszhelyzetben kell keresgélni — ellátási kapacitások, telefonszámok, papír-igények változnak. Az AI itt KIZÁRÓLAG belső munka-asszisztens, sosem érintkezik közvetlenül szülővel.",
    website: "https://fonjuk.hu",
    sensitivity: "kritikus",
  },
  hero: {
    promiseIntro: "Krízishelyzeti reakcióidő",
    promiseAccent: "30 perc → 5 perc",
    promiseTail: " — a koordinátor azonnal megtalálja, hova küldje a szülőt.",
  },
  situation: {
    headline: "A koordinátor mentális terhelése a kritikus mérőszám.",
    paragraphs: [
      "Krízis-megkeresés érkezik (anya menekül bántalmazó kapcsolatból, gyermekvédelmi ügy, anyaotthon-keresés). A koordinátor 15-30 percig stresszhelyzetben keresgél — aktuális ellátási kapacitások, telefonszámok, papír-igények változnak.",
      "A memória nem segít. A koordinátor mentális terhelése a krízis után órákig magas marad — nem lehet mentálisan üres munkahelyre érkezni a következő szülőhöz.",
      "Az AI feladata: a stresszhelyzeti reakció-időt csökkenteni, hogy kevesebb idő teljen el a krízisben — és a koordinátor mentálisan kíméltebb legyen.",
    ],
    pains: [
      {
        title: "Krízis-megkeresés stresszhelyzeti eligazítás",
        detail:
          "Naponta 2-5 krízis. Mindegyik 30-60 perc keresgélés stresszben. Nem strukturált forrás.",
      },
      {
        title: "Mentor-mentee párosítás",
        detail:
          "Heti 2-5 párosítás manuálisan, anonim profil-egyezés alapján. 1-2 óra/párosítás.",
      },
      {
        title: "Pályázat + adományozói riport",
        detail:
          "NEA, vállalati CSR. Évi 3-5 anyag. Anonim eset-történetek aggregálása nehézkes.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "Belső krízis-eligazító NotebookLM",
      problem: "30 perc keresgélés stresszben — gyermekvédelmi jelzőrendszer, krízisközpontok, anyaotthonok aktuális elérhetősége.",
      solution:
        "Zárt NotebookLM minden ellátási intézménnyel + protokollal. *'Hova küldjem a 32 éves anyát 2 gyerekkel, fővárosi, ma este?'* — <30 mp válasz forrással.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~95%",
      tools: ["Google NotebookLM"],
    },
    {
      title: "Mentor-mentee párosítás javaslat",
      problem: "1-2 óra/párosítás — anonim profil-egyezés.",
      solution:
        "Anonim profil-tábla + új mentee → Claude javasol 3 illeszkedő mentort indoklással. Koordinátor dönt.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~85%",
      tools: ["Claude Desktop"],
    },
    {
      title: "Pályázat + adományozói riport",
      problem: "NEA / CSR pályázat 8-15 óra/db. Anonim eset-történetek aggregálása nehéz.",
      solution: "Korábbi nyertes pályázatok Claude Project-ben → 1. verzió 1-2 óra. Sablon-történetek anonim módon.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Mentor-coaching jegyzet-strukturáló",
      problem: "Havi mentor-coaching utáni 30-perces összefoglaló — mit kell aggódni, ki van kiégés közelében.",
      solution: "Diktált összefoglaló → strukturált jegyzet 5-10 perc.",
      effort: "kicsi",
      impact: "közepes",
      saving: "~70%",
      tools: ["Claude Desktop"],
    },
  ],
  surprises: [
    {
      title: "Anonim eset-statisztika éves jelentéshez",
      description:
        "200-500 anonim eset aggregálása NEA-pályázatokhoz, közhasznúsági beszámolóhoz. Forrás-hivatkozással.",
      why: "Túl sok eset, túl kevés idő manuálisan számolni — eddig becslések kerültek a riportokba.",
    },
    {
      title: "'Mentor-burnout' early warning",
      description:
        "Havi mentor check-in válaszokból mintázat-keresés — mely mentor van kiégés közelében. Prevenciós beszélgetés mielőtt kilép.",
      why: "Mentorok kilépését leggyakrabban csak utólag észlelik — pedig hetekkel előtte vannak jelek.",
    },
    {
      title: "Pályázati hatás-történet generátor",
      description:
        "Sablon-anonim történetek donor-riportokhoz. Sosem konkrét családot kitalálva — strukturált sablonokból.",
      why: "Az anekdotikus szöveg-írás emocionálisan kimerítő — AI sablon-szintűt csinál.",
    },
    {
      title: "Sajtó-megkeresés válasz-vázlat",
      description:
        "Bántalmazás / krízis-szülő témákban professzionális, óvatos hangnem. 5 perc alatt kész.",
      why: "A sajtó-stressz miatt sokszor hetekig csúsznak — pedig egy 30 perces feladatból 5 perc lehetne.",
    },
    {
      title: "Belső szabályzat-changelog (havi)",
      description:
        "A gyermekvédelmi és anyaotthoni ellátás szabályai változnak — havi összefoglaló a koordinátornak.",
      why: "A szabály-változásokat senki nem követi proaktívan — csak amikor egy eset miatt kiderül egy elavult tudás.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "DPO + Claude Desktop + krízis-eligazító építés",
      steps: [
        "DPO megbeszélés (KÖTELEZŐ ELSŐ LÉPÉS)",
        "Kizárólag belső, lokális használat kimondása írásban",
        "AI sáfár kijelölése (koordinátor)",
        "Claude Desktop + Filesystem MCP telepítés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "Krízis-eligazító NotebookLM",
      steps: [
        "Gyermekvédelmi jelzőrendszer + krízisközpontok feltöltése",
        "Anyaotthon-elérhetőség aktualizálva",
        "Koordinátor próba-használat",
        "Mérés: krízishelyzeti reakcióidő",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Mentor-mentee matching",
      steps: [
        "Anonim mentor-profil-tábla felépítése",
        "Új mentee + Claude javaslat (5-10 párosítás)",
        "Koordinátor minőségi review",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "Pályázat AI-vel + GDPR",
      steps: [
        "1 NEA pályázat AI-vel",
        "GDPR-protokoll formálisan dokumentálva",
        "Audit log review elsőként",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "Eset-statisztika + mentor-burnout",
      steps: [
        "Anonim eset-aggregátor pilot",
        "Mentor-burnout early warning indul",
        "Adományozói riport sablon",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Sajtó + szabályzat-changelog + skálázás",
      steps: [
        "Sajtó-prompt-csomag",
        "Belső szabályzat-changelog NotebookLM",
        "Skálázási döntés (Pro/Team csomag)",
      ],
    },
  ],
  toolStack: [
    {
      name: "Google NotebookLM",
      purpose: "Krízis-eligazító tudásbázis (offline, NEM tartalmaz egyéni esetadatot)",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude for Nonprofits",
      purpose: "Ingyenes / kedvezményes API + licenc",
      cost: "€0 (jelentkezés)",
      required: true,
    },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "LOKÁLIS gépen, anonim eset-támogatás. Semmi nem megy felhőbe semmihez kötötten.",
      cost: "€0",
      required: true,
    },
    {
      name: "Titkosított külső lemez",
      purpose: "Eset-jegyzetek lokális tárolása. Drive vagy iCloud TILOS érzékeny adatra.",
      cost: "egyszeri ~€50",
      required: true,
    },
  ],
  metrics: [
    {
      label: "Krízishelyzeti elsődleges reakcióidő",
      baseline: "30 perc",
      target: "<5 perc",
    },
    {
      label: "Sikeres mentor-mentee párosítások aránya",
      baseline: "?",
      target: "javuló (önbevallás)",
    },
    {
      label: "Koordinátor mentális terhelése (1-5)",
      baseline: "?",
      target: "csökkenő",
    },
    {
      label: "Új mentor onboarding ideje",
      baseline: "?",
      target: "rövidebb",
    },
    {
      label: "Heti megtakarított adminisztratív óra",
      baseline: "0",
      target: "6-10 óra",
    },
  ],
  gdpr: {
    level: "kritikus",
    notes: [
      "Az AI SOHA nem érintkezik közvetlenül a krízishelyzetű szülővel — nincs chatbot, nincs automata válasz.",
      "Anonimizálás minden promptban: sosem teljes név, lakcím, gyermek neve. 'Anya (32), 2 gyerek (3, 7), bántalmazó kapcsolatból menekül, fővárosi'.",
      "Lokális fájltárolás az eset-jegyzeteknek. Drive vagy iCloud TILOS érzékeny eset-adatra.",
      "Krízisjelzés humán protokoll: ha bárhol felmerül öngyilkossági / bántalmazási akut veszély → AZONNALI humán beavatkozás, AI csak utólag dokumentál.",
      "DPO megerősítése KÖTELEZŐ a bevezetés előtt.",
      "Audit log Claude Team-mel havi review.",
    ],
  },
  cost: {
    pilot: "€0",
    scale: "€0-30/hó",
  },
  download: {
    zipName: "03-fonjuk-ai-csomag.zip",
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
