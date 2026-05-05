# BGA pályázat — 2025 — "Áruházi mentés-rendszer fejlesztése"

**Pályázó:** Magyar Élelmiszerbank Egyesület
**Pályázati év:** 2025
**Státusz:** ✓ NYERTES (12 millió Ft)

> **Megjegyzés**: ez egy **anonim, demonstrációs célú** kivonat. A 2025-ös valós pályázatot a hivatalos szervezeti dokumentumtárból kell elővenni.

---

## 1. Pályázó szervezet bemutatása

A Magyar Élelmiszerbank Egyesület **2024-ben 10 685 tonna** élelmiszert mentett meg **20 mrd Ft** értékben, **243 919** nélkülözőhöz juttatva el **650+** partneren át. A **CO2-megelőzés 27,5 millió kg** volt — **12 015 autó** éves károsanyag-kibocsátásával egyenértékű.

A szervezet 2005 óta működik, az Európai Élelmiszerbankok Szövetségének teljes jogú tagja, **383+ aktív áruházi kapcsolattal** Magyarországon.

## 2. Helyzetfelmérés / probléma

**Az áruházi mentés a teljes mennyiség 80%-a** (8 548 tonna 2024-ben). A növekedés-potenciál **a 7 áruházlánc-partnernél** **nagyobb mint az SmartFront jelenlegi feldolgozási kapacitása** — **napi 22-23 ezer kg** mozog, és bizonyos napokon (különösen Adományok Hete) **2-3 napos torlódás** keletkezik.

A torlódás **3 forrásból**:
1. SmartFront-feldolgozás kézi (Bajdik János 1-2 óra/nap)
2. Áruház-szintű elszámolás-formátumok eltérők (7 lánc, 7 sablon)
3. Partner-szervezet feltöltési hibák (40-50% első verzió hibás)

## 3. Célok

A 2025-ös 12 millió Ft támogatással:

1. **SmartFront-AI-validálás** bevezetése (Csomag #2 alapján) — 70% Bajdik-idő-megtakarítás
2. **Új áruházlánc-felvétel**: SPAR (8. áruházlánc partner) — 20+ új áruház
3. **Partner-szervezet hibázási arány csökkentése**: 40-50% → 15% (AI-asszisztált validálás visszajelzéssel)
4. **Heti torlódás eltüntetése**: 2-3 nap → 0 nap

## 4. Módszer / megvalósítás

### 4.1 SmartFront-AI-validálás integrálás

A Claude Desktop + Filesystem MCP setup használatával az új partner-feltöltések **prevalidálódnak**. Bajdik János csak a kétségeseket nézi át.

### 4.2 SPAR-felvétel

Schwikker Zsófia 2025 Q1-ben tárgyalja a SPAR-CSR-csapattal a hivatalos szerződést. A SmartFront-ban új áruházlánc-séma létrehozása.

### 4.3 Partner-coaching

A heti hiba-statisztikákból a top 5 hibázó partner-szervezet **proaktív coaching-ot** kap (Schwikker telefonosan).

### 4.4 Heti dashboard

A Claude scheduled routine (Csomag #4) hetente automatikusan generál vezetői dashboardot.

## 5. Időbeli ütemezés

| Hó | Mérföldkő |
|----|-----------|
| 2025-01 | Claude for Nonprofits jelentkezés benyújtva |
| 2025-02 | Claude Desktop + AI-validátor kísérleti pilot |
| 2025-03 | SPAR-tárgyalás, AI-pilot mérés |
| 2025-04 | AI-validátor élesben (mind 7 áruházlánc) |
| 2025-06 | SPAR-szerződés, SmartFront-séma |
| 2025-09 | Heti dashboard pilot 1 régiónál |
| 2025-12 | 2026-os tervek, beszámoló |

## 6. Költségvetés (12 millió Ft)

| Tétel | Összeg | Indoklás |
|-------|--------|----------|
| SmartFront-AI-integráció (külső fejlesztő) | 4 500 000 Ft | Bajdikkal együttműködésben |
| Schwikker Zsófia 50%-os költségfedezet | 3 000 000 Ft | SPAR-tárgyalás + partner-coaching |
| Claude Team licenc (8 user) | 1 500 000 Ft | éves díj |
| Partner-coaching utazás | 800 000 Ft | top 5 hibázó megyei utazások |
| AI-betanítási anyag | 700 000 Ft | aruhaz-szabalyok.md, fotó-validálás |
| Beszámoló + audit | 1 500 000 Ft | iFORM 2026, könyvvizsgálat |
| **Összesen** | **12 000 000 Ft** | |

## 7. Mérhető hatás

| Mérőszám | 2024 | Cél 2025 | Mérés |
|----------|------|----------|-------|
| Áruházi mentett tonna | 8 548 | 10 200 | SmartFront havi |
| Bajdik napi validálási idő | 60-90 perc | <25 perc | önbevallás napló |
| Partner-feltöltés hibás % | 40-50% | <15% | SmartFront-statisztika |
| Új áruházlánc | 7 | 8 (SPAR) | szerződéses |
| Heti torlódás napok | 2-3 | 0 | SmartFront-late-pickup |

## 8. Fenntarthatóság

Az AI-validátor **operatívvá** válik, vagyis 2026-ban is működik **támogatási költség nélkül** (csak Claude Team licenc havi). A SPAR-szerződés 3 éves. A partner-coaching folytatódik Schwikker költségvetéséből.

## 9. Kockázatok

| Kockázat | Súly | Mitigáció |
|----------|------|-----------|
| AI-validátor false-positive | Közepes | 30 nap pilot 10% kézi átnézéssel |
| SPAR-tárgyalás megszakad | Alacsony | Penny-bővítés alternatíva |
| Claude-szolgáltatási leállás | Alacsony | manuális SmartFront fallback |
| GDPR-incidens | Magas | szigorú anonimizálási protokoll, DPO havi review |

---

**Aláírás:** Cseh Balázs, elnök
**Dátum:** 2025-02-01
**Pályázat-státusz:** ✓ NYERTES — szerződéskötve 2025-03-15
