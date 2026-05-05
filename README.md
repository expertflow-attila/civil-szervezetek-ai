# Civil Szervezetek AI — komplex csomag 12 magyar szervezetnek

Ez a mappa **12 magyar civil szervezetnek** szállít kulcsrakész AI-bevezetési csomagot — vezetői összefoglalót, prompt-csomagot, Claude Desktop konfigurációt, jelentkezési levelet, mérőszám-tervet, napi munka térképet és **premium weboldalt** (Vercel-deployable).

A csomagot **Claude Code-dal vagy VS Code-ban** megnyitva a szervezet stábja egy hét alatt el tudja indítani az első AI-pilotot.

**Készítette:** Nagy Attila / Expert Flow · 2026 · `hello@expertflow.hu`

---

## Mappa-struktúra

```
Civil Szervezetek AI/
├── _hub/                              ← közös landing site (Vercel deploy #13)
├── _shared/                           ← közös sablon (web template + prompt patterns + design tokens)
├── 01-noe/ ... 12-hunor/              ← per-szervezet csomagok (12 db)
├── archive/flat-original/             ← eredeti 8 flat fájl (backup)
├── scripts/                           ← új-szervezet generátor + ZIP build + sync
└── README.md                          ← ez a fájl
```

## A 12 szervezet

| # | Szervezet | Kategória | Slug |
|---|-----------|-----------|------|
| 01 | NOE — Nagycsaládosok Országos Egyesülete | család | `01-noe` |
| 02 | Egyszülős Központ | család | `02-egyszulos-kozpont` |
| 03 | Fonjuk Egymás Hálóját Egyesület | család / krízisszülők | `03-fonjuk` |
| 04 | Dévény Anna Alapítvány / Pető | gyermek-rehabilitáció | `04-deveny-peto` |
| 05 | Magyar Élelmiszerbank Egyesület | élelmiszermentés | `05-elelmiszerbank` |
| 06 | Ezüst Vonal (MMSZ) | krízisvonal — idősek | `06-ezust-vonal` |
| 07 | Hintalovon Alapítvány | gyermekjogi | `07-hintalovon` |
| 08 | MOPESZ — Koraszülöttekért | ritka betegség | `08-mopesz` |
| 09 | InDaHouse Hungary | gyermekvédelem / tanoda | `09-indahouse` |
| 10 | Bagázs Egyesület | roma telep / mentor | `10-bagazs` |
| 11 | NANE Egyesület | bántalmazott nők | `11-nane` |
| 12 | HUNOR Mentőszervezet | önkéntes mentés | `12-hunor` |

## Mit kap minden szervezet (per-org csomag)

| Fájl | Mit tartalmaz |
|------|---------------|
| `01_executive_summary.md` | 3-4 oldalas vezetői összefoglaló (helyzet + 3 quick win + 5 "amire nem gondoltak" + 12-hetes rollout + GDPR + költség) |
| `02_starter_prompts.md` | 14 operatív prompt magyarul (pályázatírás, email-triage, jegyzőkönyv, tudásbázis-kérdések, mentor-párosítás, stb.) |
| `03_claude_desktop_config.json` | Működő Claude Desktop MCP konfig (Filesystem + Drive + Gmail + opcionális SQLite/Memory/Fetch) |
| `04_claude_nonprofits_jelentkezes.md` | Pre-filled Claude for Nonprofits jelentkezési levél |
| `05_pilot_metrics.md` | 12-hetes (3 fázis × 4 hét) mérőszám-roadmap |
| `06_napi_munka_terkep.md` | Konkrét napi feladatok × AI-asszisztencia mátrix |
| `web/` | Next.js premium weboldal (Vercel-deployable) |
| `downloads/<slug>-ai-csomag.zip` | A 6 dokumentum egy letöltésben |

## Hogyan használd Claude Code-dal

```bash
# 1. Klónozd vagy töltsd le az érdekelt szervezet mappáját
git clone https://github.com/expertflow/civil-szervezetek-ai.git
cd civil-szervezetek-ai/05-elelmiszerbank

# 2. Nyisd meg Claude Code-dal
claude .

# 3. Első prompt:
# "Olvasd el a teljes csomagot és javasolj 1 quick wint, amit holnap reggel elindíthatok."
```

A Claude végigfutja a 6 dokumentumot, ki tudja választani a szervezet legtipikusabb terhét, és **konkrét, hétfői indítást** javasol.

## Foundation scriptek

```bash
# Új szervezet inicializálás (sablonból)
node scripts/new-org.mjs "13-uj-szervezet" "Új Szervezet Neve" "kategória"

# ZIP csomag generálása egy szervezethez
node scripts/build-zip.mjs 05-elelmiszerbank

# Mind a 12 ZIP egyszerre
node scripts/build-all-zips.mjs

# Hub-ra szinkronizálás (deploy előtt)
node scripts/sync-to-web.mjs
```

## Tech stack (minden weboldal egyforma)

- **Next.js 16.1** (App Router, Static Export-kompatibilis)
- **React 19.2** + **TypeScript 5.7**
- **Tailwind CSS v4.2** (CSS-first `@theme`, NINCS `tailwind.config.js`)
- **Motion v11** (Framer Motion fork) — fade-in animációkhoz
- **Lucide React** ikonok
- **Inter** + **Instrument Serif** + **JetBrains Mono** fontok
- Színek: **lavender** `#b9a7e0` accent + **dark** mode (`#0a0a0c` paper)

## Deploy

```bash
# Egy szervezet deploy
cd 05-elelmiszerbank/web
vercel --prod

# A hub deploy
cd _hub
vercel --prod
```

A 12 szervezet + 1 hub = **13 különálló Vercel projekt**, mindegyik saját URL-en.

## Verzió

- **2026-05-04** — eredeti 4-szervezetes flat csomag (NOE, Egyszülős, Fonjuk, Dévény/Pető)
- **2026-05-05** — folder-per-org migráció + 8 új szervezet + Next.js web template + scripts (ez a verzió)

---

Ne csinálj egyszerre nagy lépést. Egy szervezet, egy quick win, egy mérés.
Az AI nem helyettesíti a stábot — felszabadítja az idejét, hogy ne ismétlődő dokumentációt írjon, hanem embereket segítsen.
