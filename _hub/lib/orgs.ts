export type Org = {
  slug: string;
  number: string;          // "01" .. "12"
  name: string;
  category: string;        // pl. "élelmiszermentés"
  categoryGroup: string;   // pl. "logisztika" — szekció-grouping
  lead: string;            // 1 mondat
  size: string;            // "24 fő + 60 önkéntes"
  vercelUrl: string;       // pl. "https://elelmiszerbank-ai.vercel.app"
  zipName: string;         // letöltés
  ready: boolean;          // van-e már gold-standard tartalom (csak Élelmiszerbank true első session-ben)
};

export const orgs: Org[] = [
  {
    slug: "01-noe",
    number: "01",
    name: "NOE — Nagycsaládosok Országos Egyesülete",
    category: "család",
    categoryGroup: "csalad",
    lead: "16 000 tagcsalád, 250 helyi szervezet, 7 régió, 5 ingyenes tanácsadó-szolgálat. Az AI a 250 helyi vezető telefon-terhelését csökkenti.",
    size: "kb. 16 000 tagcsalád",
    vercelUrl: "https://noe-ai.vercel.app",
    zipName: "01-noe-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "02-egyszulos-kozpont",
    number: "02",
    name: "Egyszülős Központ",
    category: "család",
    categoryGroup: "csalad",
    lead: "20 év online tartalmi archívum + budapesti központ. Ingyenes jogi, pszichológus, mediációs szolgálat. Az AI az archívumot teszi kereshetővé.",
    size: "online 2005 óta, központ 2018 óta",
    vercelUrl: "https://egyszulos-ai.vercel.app",
    zipName: "02-egyszulos-kozpont-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "03-fonjuk",
    number: "03",
    name: "Fonjuk Egymás Hálóját Egyesület",
    category: "krízisszülők",
    categoryGroup: "krizis",
    lead: "Krízisben lévő szülők peer-mentor hálózata. Az AI a koordinátor krízisreagálási idejét csökkenti — sosem érintkezik közvetlenül szülőkkel.",
    size: "kis stáb + nagy mentor-háló",
    vercelUrl: "https://fonjuk-ai.vercel.app",
    zipName: "03-fonjuk-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "04-deveny-peto",
    number: "04",
    name: "Dévény Anna Alapítvány / Pető",
    category: "gyermek-rehabilitáció",
    categoryGroup: "egeszseg",
    lead: "DSGM módszer, koraszülött + sérülten született gyermekek. Az AI a NEAK eszközigénylést gyorsítja 4 órás munkából 30 percessé.",
    size: "alapítvány + támogatói kör",
    vercelUrl: "https://deveny-peto-ai.vercel.app",
    zipName: "04-deveny-peto-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "05-elelmiszerbank",
    number: "05",
    name: "Magyar Élelmiszerbank Egyesület",
    category: "élelmiszermentés",
    categoryGroup: "logisztika",
    lead: "10 685 tonna élelmiszer 2024-ben, 243 919 nélkülözőhöz, 650+ partneren át. 24 fő + 60 önkéntes hordoz strukturális admin-terhet.",
    size: "24 fő + 60 önkéntes",
    vercelUrl: "https://elelmiszerbank-ai.vercel.app",
    zipName: "05-elelmiszerbank-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "06-ezust-vonal",
    number: "06",
    name: "DélUtán Alapítvány",
    category: "krízisvonal — idősek",
    categoryGroup: "krizis",
    lead: "1998 óta. 28 önkéntes, évi 7000 hívás 40+ feletti embereknek. Naponta 18-21h. Hívás-utáni 20-30 perc adminisztráció — az AI itt szabadít fel.",
    size: "28 önkéntes",
    vercelUrl: "https://delutan-ai.vercel.app",
    zipName: "06-ezust-vonal-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "07-hintalovon",
    number: "07",
    name: "Hintalovon Gyermekjogi Alapítvány",
    category: "gyermekjogi",
    categoryGroup: "krizis",
    lead: "13 fős profi csapat, 100+ önkéntes. NEMECSEK + Yelon + ECPAT + Pro Bono. 2025-től Szuverenitásvédelmi Hivatal listán — az AI épp most segít.",
    size: "13 fő + 100+ önkéntes",
    vercelUrl: "https://hintalovon-ai.vercel.app",
    zipName: "07-hintalovon-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "08-mopesz",
    number: "08",
    name: "KORE — Koraszülöttekért Országos Egyesület",
    category: "ritka betegség / család",
    categoryGroup: "egeszseg",
    lead: "Magyarország első szülői koraszülött-szervezete (2011 óta). 33 000 horgolt polip, 29 PIC textil-program, fejtejes szobák, 19 megyés elsősegély.",
    size: "szülő-önkéntesek 19 megyében",
    vercelUrl: "https://kore-ai.vercel.app",
    zipName: "08-mopesz-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "09-indahouse",
    number: "09",
    name: "InDaHouse Hungary",
    category: "gyermekvédelem / tanoda",
    categoryGroup: "gyermek",
    lead: "Borsodi tanoda-szervezet 5 településen. ~150 gyerek, 150 önkéntes, 4 program. Az AI a 220 km-es koordinációs szakadékot hidalja át.",
    size: "~150 önkéntes, 5 telephely",
    vercelUrl: "https://indahouse-ai.vercel.app",
    zipName: "09-indahouse-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "10-bagazs",
    number: "10",
    name: "BAGázs Közhasznú Egyesület",
    category: "roma telep / mentor",
    categoryGroup: "gyermek",
    lead: "10 fő, 120-150 önkéntes, 75 család. SROI 1 Ft → 3.27 Ft. Prima Primissima 2023. Bag + Dány telepek. AI strukturálja a mentor eset-jegyzeteket.",
    size: "10 fő + 120-150 önkéntes",
    vercelUrl: "https://bagazs-ai.vercel.app",
    zipName: "10-bagazs-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "11-nane",
    number: "11",
    name: "NANE Egyesület",
    category: "bántalmazott nők",
    categoryGroup: "krizis",
    lead: "1994 óta. 8 fő munkatárs + vezetői team, 1500+ önkéntes története. Évi 1200-2400 hívás. KRITIKUS GDPR — AI csak belső, sosem klienssel.",
    size: "8 fő + 1500+ önkéntes története",
    vercelUrl: "https://nane-ai.vercel.app",
    zipName: "11-nane-ai-csomag.zip",
    ready: true,
  },
  {
    slug: "12-hunor",
    number: "12",
    name: "MMSZ Mentőszolgálat",
    category: "önkéntes mentés",
    categoryGroup: "menteshelp",
    lead: "~500 önkéntes, 110 000+ ellátott, 30+ év. Polgári védelem + egészségügy + pszichológia. Bevetés-utáni AAR-jelentés 1-3 óra → 15 perc.",
    size: "~500 önkéntes",
    vercelUrl: "https://mmsz-mento-ai.vercel.app",
    zipName: "12-hunor-ai-csomag.zip",
    ready: true,
  },
];

export const categoryGroups = [
  { id: "csalad", label: "Család", desc: "Nagycsaládos, egyszülős, krízisszülők" },
  { id: "krizis", label: "Krízis & jogvédelem", desc: "Lelkivonalak, gyermekjog, bántalmazás" },
  { id: "logisztika", label: "Élelmezés & logisztika", desc: "Adminisztráció-nehéz operatív szervezetek" },
  { id: "egeszseg", label: "Ritka betegségek & rehab", desc: "Tudásbázis-igényes közösségek" },
  { id: "gyermek", label: "Gyermek & mentor", desc: "Tanoda, mentor-modell, roma telep" },
  { id: "menteshelp", label: "Önkéntes mentés", desc: "HUNOR, polgári védelem, tűzoltó" },
];

export function orgsByGroup(groupId: string) {
  return orgs.filter((o) => o.categoryGroup === groupId);
}
