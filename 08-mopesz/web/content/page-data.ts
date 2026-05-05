import type { PageContent } from "@/lib/types";

// Az eredeti lista 'MOPESZ' nevet említ, ami publikus forrásokban nem azonosítható.
// A magyar koraszülött ernyőszervezet a KORE — Koraszülöttekért Országos Egyesület.

export const pageContent: PageContent = {
  org: {
    name: "KORE — Koraszülöttekért Országos Egyesület",
    slug: "kore",
    category: "ritka betegség / család",
    lead:
      "Magyarország első szülői koraszülött-szervezete. 2011 óta. 33 000 horgolt polip-figura, fejtejes szobák, 19 megyés elsősegély.",
    longLead:
      "Érintett szülő-önkéntesek munka és család mellett szervezik a hálózatot. 16 megyében szülőcsoport, 29 PIC textil-program, Koripok 2015 óta. Állami támogatást NEM kap. Az AI itt szülő-mentális kapacitást szabadít fel — nem pénzt spórol.",
    website: "https://koraszulott.com",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "PIC-protokoll fordítás",
    promiseAccent: "2-3 óra → 20 perc",
    promiseTail: " — orvosi nyelvből szülői magyarra. Több családhoz jut el a tudás.",
  },
  situation: {
    headline: "Szülő-önkéntesek, kórházi protokollok, 19 megyés hálózat.",
    paragraphs: [
      "A KORE 2011-ben alakult, Magyarország első szülői koraszülött-szervezete. Tagjai kizárólag érintett szülők. Tevékenységek 2024-2025: pszichológiai támogatás, KORE Textil Program (29 PIC), 33 000 Koripok, Együttdobban pályázat (max 300k Ft), fejtejes szobák, ingyenes elsősegély 19 megyében, Pici Füzet kiadvány.",
      "Finanszírozás: kizárólag SZJA 1%, adományok, pályázatok, vállalati partnerek (CEDEK).",
      "A szűk keresztmetszet: a szülő-önkéntesek mentális kapacitása. Munka + család + önkéntes-szerep. Az AI 2-3 órás munkát 20-30 percessé tesz — több családhoz ér el a tudás.",
    ],
    pains: [
      {
        title: "PIC-protokoll fordítás 2-3 óra",
        detail: "Orvosi nyelvből szülői magyarra. Évi 2-4 frissítés. Manuálisan végzik az önkéntesek.",
      },
      {
        title: "Szülő-megkeresés napi 2-5",
        detail: "Kórházi krízisben, 30-60 perc/eset. Önkéntes válaszol munka után.",
      },
      {
        title: "19 megyés koordináció",
        detail: "Elsősegély-tanfolyamok, csoport-szervezés, PIC-kapcsolat. Heti 4-6 óra.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "PIC-protokoll fordító asszisztens",
      problem: "Orvosi szöveg → szülői magyar 2-3 óra/anyag.",
      solution: "Claude megkapja az orvosi szöveget + KORE korábbi fordításait → 20-30 perc 1. verzió.",
      effort: "kicsi",
      impact: "óriási",
      saving: "~85%",
      tools: ["Claude Desktop", "Filesystem MCP"],
    },
    {
      title: "Szülő-megkeresés triage és válasz",
      problem: "30-60 perc/eset, kórházi krízisben.",
      solution: "Gmail MCP + Claude: kategorizál (sürgős/normál), 80% válasz-vázlat — szülő-önkéntes jóváhagy.",
      effort: "kicsi",
      impact: "nagy",
      saving: "~70%",
      tools: ["Claude Desktop", "Gmail MCP"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "BGA, NEA, vállalati CSR. 8-15 óra/db.",
      solution: "Korábbi nyertesek + statisztikák → 1. verzió 1-2 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Pici Füzet-frissítés asszisztens",
      problem: "Éves/féléves 30-50 óra.",
      solution: "Claude megkapja a meglévő szöveget + új PIC-protokollokat + szülő-feedbacket → strukturált 1. verzió.",
      effort: "közepes",
      impact: "közepes",
      saving: "~60%",
      tools: ["Claude Project"],
    },
  ],
  surprises: [
    {
      title: "Multilang szülői anyag (angol/német → magyar)",
      description: "Nemzetközi koraszülött-anyagok magyar fordítása szülőknek (NEM orvosi szakcikk).",
      why: "Most ezek nehezen jutnak át — nyelvi-szakmai kettős keret szétfeszíti az időt.",
    },
    {
      title: "PIC-koordinátor heti dashboard",
      description: "29 PIC mit kapott, mit kér, milyen problémák. AI aggregál Excel-export-ból.",
      why: "Most senki nem mérni — pedig az adat ott van a textil-programban.",
    },
    {
      title: "Krízisanya első-segély NotebookLM",
      description:
        "'A kisbabám koraszülöttként sírni kezdett, mit csináljak?' — forrás-hivatkozással válasz.",
      why: "Most a szülő egyenként telefonál — időigényes, ellenére hogy a választ a sablon adná.",
    },
    {
      title: "Ingyenes elsősegély-tanfolyam koordináció",
      description: "19 megyében automatizált regisztráció + emlékeztető + tanúsítvány-generátor.",
      why: "Most manuális e-mail körök — sok szülő lemarad emiatt.",
    },
    {
      title: "Anonim szülő-történet generátor donor-riportokhoz",
      description: "Sablon-anonim történetek, sosem konkrét család.",
      why: "Anekdota-írás emocionálisan kimerítő — AI sablon-szintűt csinál.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "Setup",
      steps: [
        "DPO megbeszélés (egészségügyi adat)",
        "AI sáfár kijelölése (főállású önkéntes)",
        "Claude Desktop + Filesystem MCP",
        "Claude for Nonprofits jelentkezés",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "PIC-protokoll fordító pilot",
      steps: [
        "1-2 önkéntes pilotozza 30 napig",
        "1-2 új PIC-protokoll átfordítás",
        "Mérés: idő/anyag",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Szülő-megkeresés triage",
      steps: [
        "Gmail label-ek strukturálása",
        "1-2 önkéntes pilotozza",
        "Mérés: válaszidő",
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
      title: "PIC-koordinátor dashboard + multilang",
      steps: [
        "29 PIC dashboard pilot",
        "Angol/német anyagok pilot fordítása",
        "Krízisanya NotebookLM építése",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Elsősegély-koordináció + skálázás",
      steps: [
        "19 megyés tanfolyam-automatizálás",
        "Donor-riport sablon",
        "Skálázási döntés",
      ],
    },
  ],
  toolStack: [
    { name: "Claude for Nonprofits", purpose: "Ingyenes API + licenc", cost: "€0", required: true },
    {
      name: "Claude Desktop + Filesystem MCP",
      purpose: "PIC-protokollok, sablonok, fordítások",
      cost: "€0",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "Krízisanya első-segély + PIC-protokoll-archív",
      cost: "€0",
      required: true,
    },
    {
      name: "DeepL Pro vagy Claude",
      purpose: "Multilang fordítás (angol/német → magyar szülői)",
      cost: "€7-30/hó vagy €0",
      required: false,
    },
  ],
  metrics: [
    { label: "PIC-protokoll fordítási idő", baseline: "2-3 óra", target: "20-30 perc" },
    { label: "Szülő-megkeresés válaszidő", baseline: "24-48 óra", target: "<8 óra" },
    { label: "Pici Füzet-frissítés ideje", baseline: "30-50 óra", target: "12-20 óra" },
    { label: "Heti megtakarított adminisztratív óra (csapat)", baseline: "0", target: "8-12 óra" },
    { label: "19 megyés tanfolyam-koordináció", baseline: "manuális", target: "automatizált" },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Egészségügyi adat különleges adatkategória (GDPR 9. cikk).",
      "Anonimizálás minden promptba: sosem teljes név, baba TAJ-szám, kórházi azonosító.",
      "Anthropic DPA aláírva.",
      "Szülő-megkeresés rögzítése anonim — egyéni eset NEM kerül felhőbe.",
      "Multilang anyagok: KORE-saját + nemzetközi nyilvános — donor-személyi adat sosem.",
      "AI sosem kommunikál közvetlenül krízisbe esett szülővel — csak önkéntest segíti.",
    ],
  },
  cost: { pilot: "€0", scale: "€60-150/hó" },
  download: {
    zipName: "08-mopesz-ai-csomag.zip",
    contents: [
      "01_executive_summary.md — KORE vezetői összefoglaló (3-4 oldal)",
      "02_starter_prompts.md — 14 operatív prompt magyarul",
      "03_claude_desktop_config.json — működő Claude Desktop MCP konfig",
      "04_claude_nonprofits_jelentkezes.md — pre-filled jelentkezési levél (KORE-ra szabva)",
      "05_pilot_metrics.md — 12-hetes mérőszám-roadmap (Élelmiszerbank-mintán)",
      "06_napi_munka_terkep.md — napi feladat × AI-asszisztencia (Élelmiszerbank-mintán)",
    ],
  },
};
