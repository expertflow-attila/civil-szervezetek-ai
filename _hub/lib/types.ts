export type Effort = "kicsi" | "közepes" | "nagy";
export type Impact = "közepes" | "nagy" | "óriási";

export type UseCase = {
  title: string;
  problem: string;       // Mi a fájdalom most
  solution: string;      // Hogyan segít az AI
  effort: Effort;        // Bevezetési költség (idő/energia)
  impact: Impact;        // Várható hatás
  saving: string;        // pl. "70% idő" / "4 óra/család"
  tools?: string[];      // ajánlott tool-ok
};

export type SurpriseUseCase = {
  title: string;
  description: string;
  why: string;           // Miért nem gondolnak rá
};

export type TimelineWeek = {
  week: string;          // pl. "Hét 1–2"
  phase: "pilot" | "csapat" | "skálázás";
  title: string;
  steps: string[];
};

export type ToolStackItem = {
  name: string;
  purpose: string;
  cost: string;          // "ingyenes" / "€18-50/hó"
  required: boolean;
};

export type DailyTask = {
  task: string;
  current: string;       // jelenlegi időigény
  withAI: string;        // AI-asszisztált
  frequency: string;     // pl. "napi", "heti 3x"
};

export type ReadyPackage = {
  number: string;        // "01", "02", ...
  title: string;
  cloudProduct: "Claude Project" | "Claude Desktop + MCP" | "Claude Code" | "Scheduled Routine" | "Claude.ai web" | "Google NotebookLM";
  setupTime: string;     // pl. "5 perc"
  firstValueTime: string;// pl. "10 perc"
  problem: string;       // 1 mondat: mit old meg
  saving: string;        // pl. "85% idő"
  folderName: string;    // a `csomagok/` alatti mappa neve
  files: string[];       // mit tartalmaz (README, system-prompt, ...)
};

export type PageContent = {
  org: {
    name: string;
    slug: string;
    category: string;     // pl. "élelmiszermentés"
    lead: string;         // 1 mondat
    longLead: string;     // 2-3 mondat hero alá
    website?: string;
    sensitivity: "alap" | "magas" | "kritikus";  // GDPR-érzékenység
  };
  hero: {
    promiseIntro: string;  // pl. "Heti 12 órát megspórolnánk"
    promiseAccent: string; // italic accent rész
    promiseTail: string;
  };
  situation: {
    headline: string;
    paragraphs: string[];
    pains: { title: string; detail: string }[];
  };
  dailyTasks: DailyTask[];
  useCases: UseCase[];          // 4-5 fő use case
  surprises: SurpriseUseCase[]; // 5 "amire nem gondoltak"
  timeline: TimelineWeek[];     // 12 hetes
  toolStack: ToolStackItem[];
  metrics: { label: string; baseline: string; target: string }[];
  gdpr: {
    level: "alap" | "magas" | "kritikus";
    notes: string[];
  };
  cost: {
    pilot: string;
    scale: string;
  };
  download: {
    zipName: string;       // pl. "elelmiszerbank-ai-csomag.zip"
    contents: string[];    // mit kap a csomagban
  };
  readyPackages?: ReadyPackage[];  // ÚJ: kész operatív csomagok (opcionális)
};
