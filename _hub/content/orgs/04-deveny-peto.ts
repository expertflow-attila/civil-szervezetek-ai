import type { PageContent } from "@/lib/types";

export const pageContent: PageContent = {
  org: {
    name: "Dévény Anna Alapítvány + Pető támogatói kör",
    slug: "deveny-peto",
    category: "gyermek-rehabilitáció",
    lead:
      "DSGM módszer, koraszülött + sérülten született gyermekek korai fejlesztése. Gyógytornász posztgraduális képzés.",
    longLead:
      "Dokumentum-intenzív működés: minden gyermeknek egyedi, indoklásos NEAK-kérelem, ami családonként 4 órás munka. Évi 6-12 pályázat, nemzetközi szakirodalom követés. Az AI a NEAK-kérelmet 30 percessé teszi — egy heti 10 NEAK-os terapeuta 35+ órát spórol hetente.",
    website: "https://devenymodszer.hu",
    sensitivity: "magas",
  },
  hero: {
    promiseIntro: "NEAK eszközigénylés",
    promiseAccent: "4 óra → 30 perc",
    promiseTail: " — családonként. Egy heti 10 kérelmes terapeuta 35+ óra megtakarítása.",
  },
  situation: {
    headline: "Egyedi NEAK-kérelem minden gyermeknek, indoklással. 4 óra/család.",
    paragraphs: [
      "A Dévény Anna Alapítvány a DSGM módszerrel dolgozik koraszülött és sérülten született gyermekek korai fejlesztésében. A Pető Intézet támogatói köre konduktív pedagógiát hoz, fogyatékos gyermekek családjait támogatja.",
      "A működés dokumentum-intenzív: NEAK eszközigénylések családonként egyedi indoklással, pályázatok (BGA, EFOP, NEA, vállalati CSR, EU), nemzetközi szakirodalom követése, adományozói kommunikáció.",
      "A terapeuta-stáb adminisztratív terhe enormous: minden gyermeknek egyedi, indoklásos NEAK-kérelem kell, családonként 4 órás munka. Az AI ezt 30 percessé teszi.",
    ],
    pains: [
      {
        title: "NEAK eszközigénylés családonként 4 óra",
        detail:
          "Egyedi indoklás, anonim előzmény, DSGM-méthodológiai hivatkozás, költséghatékonyság-érv. Heti 5-15 kérelem.",
      },
      {
        title: "Pályázatírás 12-25 óra/db",
        detail: "BGA, EFOP, NEA, EU, vállalati CSR. Évi 6-12 pályázat.",
      },
      {
        title: "Nemzetközi szakirodalom követés",
        detail: "Cerebral Palsy és koraszülött research havi 4-8 óra. Sok nem jut át fordításra.",
      },
    ],
  },
  dailyTasks: [],
  useCases: [
    {
      title: "NEAK eszközigénylés-asszisztens",
      problem: "Családonként 4 óra. Heti 5-15 kérelem.",
      solution:
        "Korábbi NYERTES kérelmek + új gyermek anonim adat → Claude megírja az igénylést indoklással. Alapítvány csak ellenőrzi.",
      effort: "közepes",
      impact: "óriási",
      saving: "~88% (4 óra → 30 perc)",
      tools: ["Claude Desktop", "Filesystem MCP"],
    },
    {
      title: "Pályázatírás Claude Project-tel",
      problem: "12-25 óra/pályázat. Évi 6-12 db.",
      solution: "Korábbi nyertesek + alapító + statisztikák a Project-ben → 1. verzió 1-2 óra.",
      effort: "közepes",
      impact: "nagy",
      saving: "~60%",
      tools: ["Claude Project"],
    },
    {
      title: "Nemzetközi szakcikk magyar összefoglaló",
      problem: "Havi 4-8 óra angolról magyarra fordítás-feldolgozás.",
      solution: "Claude APA-formátumú szakmai összefoglalót ír. Havonta 4-6 cikk dolgozható fel ugyanannyi idő alatt.",
      effort: "kicsi",
      impact: "közepes",
      saving: "~75%",
      tools: ["Claude Desktop", "DeepL Pro"],
    },
    {
      title: "DSGM-tudásbázis NotebookLM",
      problem: "Új gyógytornász onboarding 6-12 hónap.",
      solution: "DSGM szakirodalom + nemzetközi CP kutatás NotebookLM-ben — új szakember 3-4 hó alatt belakja.",
      effort: "közepes",
      impact: "nagy",
      saving: "onboarding 6-12 → 3-4 hó",
      tools: ["NotebookLM"],
    },
  ],
  surprises: [
    {
      title: "Anonimizált családi történet generátor",
      description:
        "Donor-riportokhoz sablon-anonim történetek érzelmi hatással. Sosem konkrét család.",
      why: "Anekdota-írás emocionálisan kimerítő — AI sablon-szintűt csinál.",
    },
    {
      title: "Szülői konzultáció ülés-összefoglaló",
      description:
        "Terapeuta diktált 5-perces összefoglalóból strukturált jegyzet. Heti 8-10 órás megtakarítás.",
      why: "Senki nem optimalizálja az ülés-utáni adminisztrációt — pedig ott van a teher.",
    },
    {
      title: "Cerebral Palsy nemzetközi research havi digest",
      description:
        "Claude havonta 10-15 új PDF lényegét összefoglalja magyarul, APA-hivatkozással.",
      why: "Egy szakember nem tud havonta 10+ angol cikket átolvasni — AI felgyorsítja.",
    },
    {
      title: "Eszköz-újrahasznosítás matching",
      description:
        "Kinek nőtt ki egy eszköz, kinek lenne szüksége rá. Anonim profil-pár ajánlat.",
      why: "A családok közti eszköz-átadás manuálisan nehéz — AI mátrixot készít.",
    },
    {
      title: "Szakcikk-fordítási hangtár",
      description:
        "Magyar DSGM-szótár automatikusan épül a nemzetközi cikkekből — konzisztens terminológia.",
      why: "Most a fordítások szakszó-szinten heterogének — AI sztenderdizál.",
    },
  ],
  timeline: [
    {
      week: "Hét 1-2",
      phase: "pilot",
      title: "DPO + Claude Desktop + NEAK pilot setup",
      steps: [
        "DPO megbeszélés (egészségügyi adat, GDPR 9. cikk)",
        "AI sáfár kijelölése (pályázatfelelős vagy adminisztratív)",
        "Claude Desktop + Filesystem MCP",
        "Korábbi nyertes NEAK-kérelmek mappa-strukturálás",
      ],
    },
    {
      week: "Hét 3-4",
      phase: "pilot",
      title: "NEAK pilot 5 családdal",
      steps: [
        "5 anonim új gyermek NEAK-kérelme AI-vel",
        "Mérés: idő + sikerarány",
        "Pilot retro 4. hét végén",
      ],
    },
    {
      week: "Hét 5-6",
      phase: "csapat",
      title: "Pályázatírás A/B + DSGM tudásbázis",
      steps: [
        "1 BGA pályázat AI-vel + 1 hagyományosan",
        "DSGM szakirodalom NotebookLM",
        "GDPR-protokoll formálisan",
      ],
    },
    {
      week: "Hét 7-8",
      phase: "csapat",
      title: "Minden NEAK-kérelmes terapeuta",
      steps: [
        "NEAK-asszisztens kiterjesztve minden terapeutára",
        "Heti review",
        "Audit log elsőként",
      ],
    },
    {
      week: "Hét 9-10",
      phase: "skálázás",
      title: "CP nemzetközi digest + szülői ülés-összefoglaló",
      steps: [
        "CP havi research digest pilot",
        "Szülői ülés-összefoglaló asszisztens 1 terapeutával",
        "Eszköz-újrahasznosítás matching pilot",
      ],
    },
    {
      week: "Hét 11-12",
      phase: "skálázás",
      title: "Donor-riport + skálázási döntés",
      steps: [
        "Adományozói riport sablon",
        "ROI mérés végleges",
        "Skálázási döntés: Claude Team csomag",
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
      name: "Claude Desktop + Filesystem MCP",
      purpose: "Lokális, anonim NEAK-kérelem feldolgozás",
      cost: "€0",
      required: true,
    },
    {
      name: "Claude Project (pályázatok)",
      purpose: "Korábbi nyertesek + alapító + statisztikák",
      cost: "Pro / Team-ből",
      required: true,
    },
    {
      name: "Google NotebookLM",
      purpose: "DSGM szakirodalom + CP nemzetközi kutatás",
      cost: "€0",
      required: false,
    },
    {
      name: "DeepL Pro",
      purpose: "Angol szakcikk → magyar (Claude is alkalmas, DeepL csak ha kell)",
      cost: "€7-30/hó",
      required: false,
    },
  ],
  metrics: [
    {
      label: "NEAK eszközigénylés átlagos elkészítési ideje",
      baseline: "4 óra/család",
      target: "30 perc/család",
    },
    {
      label: "NEAK kérelem sikeraránya",
      baseline: "?",
      target: "A/B mérve",
    },
    {
      label: "Pályázatírási idő (1 BGA)",
      baseline: "12-15 óra",
      target: "5-7 óra",
    },
    {
      label: "Nemzetközi cikk-feldolgozás havi átlaga",
      baseline: "1-2",
      target: "4-6",
    },
    {
      label: "Új gyógytornász onboarding",
      baseline: "6-12 hó",
      target: "3-4 hó",
    },
  ],
  gdpr: {
    level: "magas",
    notes: [
      "Egészségügyi adat különleges adatkategória (GDPR 9. cikk).",
      "Anonimizálás: '6 hetes koraszülött lány, 1200g születési súly, jelenlegi tünetek...' — soha nem TAJ-szám, név, anya neve.",
      "Anthropic DPA aláírva a Claude for Nonprofits / Team szerződés keretében.",
      "Helyi fájltárolás az anonimizálatlan eredeti dokumentumoknak (titkosított merevlemez).",
      "Szülői beleegyezés módosítása: jelezni hogy az alapítvány AI-eszközöket használ az adminisztrációban, anonimizált formában.",
      "Audit log Claude Team-mel havi review.",
    ],
  },
  cost: {
    pilot: "€0-15/hó",
    scale: "€100-150/hó",
  },
  download: {
    zipName: "04-deveny-peto-ai-csomag.zip",
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
      title: "NEAK eszközigénylés-asszisztens",
      cloudProduct: "Claude Project",
      setupTime: "1 óra",
      firstValueTime: "1.5 óra",
      problem:
        "Családonkénti 4 órás NEAK-kérelem indoklással + DSGM-hivatkozással. AI-vel 30 perc 1. verzió.",
      saving: "88% (4 óra → 30 perc)",
      folderName: "01-neak-eszkozigenyles",
      files: ["README", "lépésről lépésre", "system-prompt", "1 prompt"],
    },
    {
      number: "02",
      title: "EFOP-pályázatírás (Claude Code)",
      cloudProduct: "Claude Code",
      setupTime: "15 perc",
      firstValueTime: "1-2 óra",
      problem: "12-25 órás EFOP-pályázat. AI-vel 5-10 óra git-verziózott workflow-val.",
      saving: "60% idő",
      folderName: "02-palyazatiras-efop",
      files: ["README", "CLAUDE.md", "lépésről lépésre", "1 prompt"],
    },
  ],
};
