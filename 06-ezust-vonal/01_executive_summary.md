# DélUtán Alapítvány — az idős emberek segélyvonala
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Megjegyzés

Az eredeti listán "Ezüst Vonal (MMSZ-fenntartású)" szerepelt. **A publikus források szerint ilyen MMSZ-fenntartású magyar szolgálat nem azonosítható** — az "Ezüst Vonal" név Sophie Andrews brit szervezetét jelöli (The Silver Line). A magyar idős-lelkivonal a **DélUtán Alapítvány** (1998 óta működik, független szervezet). Erre szabjuk a csomagot — a koncepciónak (idősek lelkivonala, hívás-utáni adminisztráció, kiégés-kockázat) ez felel meg.

---

## Helyzet

A DélUtán Alapítvány **1998 óta** üzemelteti Magyarország egyetlen telefonos lelkisegély-szolgálatát, amely **kifejezetten 40 év feletti felnőtteknek** szól. Hívható naponta **18:00–21:00 között** (137-77 mobilról, 06-80-200-866 ingyenes vezetékesről). Mellette: chat, email, jogi és orvosi konzultáció, személyes pszichológiai segítség, nyelv- és számítógép-klubok.

A működés sajátossága: **28 aktív önkéntes**, mind felsőfokú végzettségű, kötelező képzésen átesett. Sem ők, sem a vezetés nem kap fizetést. **Évi kb. 7 000 ember** kér segítséget. Finanszírozás: kizárólag pályázatokból.

A modell legnagyobb kihívása: **minden hívás után 20-30 perc adminisztráció** — anonim összefoglaló, krízis-jelzés rögzítése, esetleges szupervízió-jegyzet. Plus a 28 önkéntes közötti koordináció (ki ügyel, ki helyettesít), pályázati beszámolók, képzési anyagok karbantartása.

A kiégés kockázata magas: az önkéntesek nehéz hívásokat fogadnak (öngyilkossági fenyegetés is előfordult — *"a hídról hívtak, hogy ugrani fog"* — HVG 2025). A hívás után az önkéntesnek 30+ perc adminisztrációt kell csinálnia stresszhormon-szint mellett.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Hívás-utáni anonim összefoglaló | minden hívás (~25-50/nap) | 20-30 perc/hívás | nagy |
| Krízis-eskaláció dokumentáció | hetente 2-5 | 30-60 perc/eset | nagy |
| Önkéntes-beosztás (28 fő) | heti | 2-3 óra | közepes |
| Szupervízió jegyzőkönyv | havi 4-6 | 30-45 perc/ülés | közepes |
| Pályázatírás (NEA, EFOP, magán) | 5-10/év | 8-15 óra/db | nagy |
| Adományozói riport | havi/negyedéves | 4-6 óra | közepes |
| Új önkéntes onboarding (kötelező képzés) | folyamatos | 40-60 óra/önkéntes | óriási |

**Heti összesen:** 15-25 óra adminisztráció. Az önkéntesek "ingyen" csinálnak még adminisztrációt is — csökkenti a megtartást.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **Hívás-utáni összefoglaló-asszisztens** (5 perc diktálás → strukturált jegyzet) | 20-30 perc/hívás | 5-10 perc/hívás | **~70%** |
| 2 | **Önkéntes-beosztás optimalizáló** (28 fő, igények, helyettesítés) | 2-3 óra/hét | 30 perc/hét | **~80%** |
| 3 | **Pályázatírás Claude Project-tel** | 8-15 óra/db | 3-6 óra/db | **~60%** |

---

## Egyedi DélUtán quick win — Hívás-utáni összefoglaló-asszisztens

Az önkéntes a 30-60 perces hívás után 5 perc diktált összefoglalót csinál (iPhone diktafon vagy Otter.ai). A Claude strukturálja: anonim helyzet, érzelmi téma, krízis-szint (zöld/sárga/piros), további lépés-javaslat, források amiket említettünk. **Minden hívásra 15-20 perc megtakarítás** = naponta 25-50 hívás × 15 perc = **6-12 óra napi**, az egész önkéntes-csapatra.

**Plus mentális kíméltség:** az önkéntes nem stresszhelyzetben kell adminisztrációt fogalmaznia — diktálva mond, AI strukturál.

---

## 5 use case, amire nem gondoltak

1. **Krízis-eskaláció pattern keresés** — havi anonim összefoglalókban mintázat: pl. szezonális öngyilkossági trendek, geográfiai hot-spotok. Vezetői dashboardra.
2. **Önkéntes-burnout early warning** — havi check-in válaszokból mely önkéntes van kiégés közelében. Prevenciós beszélgetés.
3. **Új önkéntes onboarding videó-kurzus** — 40-60 órás képzés helyett 20-30 órás interaktív (videó + AI Q&A NotebookLM-ben).
4. **Sajtó-megkeresés-vázlat (idős magány, demográfia)** — szakszerű, óvatos válaszok 5 perc alatt.
5. **Szupervízió jegyzőkönyv + akciópontok** — havi szupervíziós ülésekből strukturált összefoglaló + felelős-vállalás táblázat.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár, Claude Desktop, **hívás-utáni összefoglaló-asszisztens** 1-2 önkéntessel 30 napig, mérés.
**Csapat (Hét 5-8):** Beosztás-optimalizáló (5-6), 1 NEA pályázat AI-vel (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** Mind 28 önkéntesre kiterjesztve, krízis-pattern dashboard, onboarding videó-kurzus, skálázási döntés.

---

## Eszköz-stack — minimális

- **Claude for Nonprofits** — €0 (jelentkezés szükséges)
- **Claude Desktop** + Filesystem MCP — lokálisan, anonim
- **Otter.ai** vagy iPhone diktafon — hívás-utáni 5-perces összefoglalók
- **Google NotebookLM** — krízis-protokoll + idős-támogatási tudásbázis

**Skálázás:** Claude Team 3-5 user (~€60-180/hó) ha bizonyul az ROI.

---

## 6 hetes mérőszámok

- Hívás-utáni adminisztráció átlagos ideje: 20-30 perc → 5-10 perc
- Önkéntes-beosztás készítési ideje: 2-3 óra/hét → 30 perc/hét
- Új önkéntes onboarding ideje: 40-60 óra → 20-30 óra
- Heti megtakarított adminisztratív óra (összesen): 0 → 15-20 óra
- Önkéntes-megtartás 1 év után (önbevallás, 1-5): mérve, +0.5-1 pont várt

---

## GDPR keret — KRITIKUS

Lelkisegély-szolgálatok különleges érzékenységgel dolgoznak:

1. **Anonim hívás** alapelv — sem hívás, sem chat NEM rögzítendő.
2. **Anonimizálás minden promptba**: *"60-es férfi, vidéki, magány, párvesztés"* — sosem teljes név, lakcím.
3. **Krízis-eskaláció** humán protokoll: ha öngyilkossági akut veszély → AZONNALI humán intézkedés, AI csak utólag dokumentál.
4. **Anthropic DPA** aláírva. **Lokális tárolás** az anonim összefoglalóknak — sem Drive sem iCloud.
5. **Audit log** Claude Team-mel havi review.
6. **Önkéntes-szupervízió** kötelező — az AI-t használat is szupervíziós napirenden.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-12 hónap | €60-180/hó | Claude Team 3-5 user |

**ROI:** elsősorban az önkéntes-megtartásban + mentális kíméltségben mérhető. Pénzbeli megtakarítás közvetett (kevesebb új önkéntes-toborzás).

---

## Következő lépés

1. Vezetői + DPO megbeszélés
2. AI sáfár kijelölése (1 önkéntes-koordinátor)
3. Claude for Nonprofits jelentkezés
4. Hívás-utáni összefoglaló pilot 1-2 önkéntessel 30 napra
5. Mérés + döntés a skálázásról

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
**Hivatalos szervezet:** [delutan.hu](https://delutan.hu)
