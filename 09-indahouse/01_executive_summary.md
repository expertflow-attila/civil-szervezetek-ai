# InDaHouse Hungary
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

Az InDaHouse Hungary **Borsod-Abaúj-Zemplén megyei** civil tanoda-szervezet. **Fő telephelyek:** Hernádszentandrás (önkéntes- és gyerekközpont), Fügöd (fejlesztő ház, 1 km-re a 200+ gyerek élő mélyszegénységű roma teleptől), Peré (itt indultak 2014-ben). 5 településen aktív.

**Alapító:** Benkő Fruzsina szociális munkás, korábbi NANE-önkéntes (17 évesen). 2014-ben indult, 2 zsák játékkal érkezett Borsodba.

**Számok:** kb. **150 gyerek** részesül személyre szabott foglalkozásban, **150 állandó önkéntes** + összesen 600+ önkéntes építette a központot. 1 200+ magánadományozó és 20 céges támogató (2019-ig). 6 év alatt 8 588 foglalkozás 141 gyerekkel (2014-2020).

**4 program:** kora gyermekkori fejlesztés (6 alatt), iskola-előkészítő (5 évesek), KisTanoda (6-9), NagyTanoda (10-18). Plus mentor, egészség, családlátogatás kisgyerekekhez.

**Finanszírozás:** magán-adományok, céges szponzorok, pályázati források. **Nemzetközi médiajelenlét** (a brief feltette): a kutatás nem találta sajtót, csak magyar (WMN, Dívány, csalad.hu, Üzletem) + Palantír Film dokumentumfilm. **A nemzetközi figyelem feltevés [NEM ELLENŐRZÖTT]** — érdemes közvetlenül kérni sajtólistát az alapítványtól.

A modell sajátossága: **kis városi alapozó stáb + Borsodba kijáró önkéntesek** Budapestről 220+ km-re. Az adminisztráció **vidékre lokalizált** — pályázat-írás Borsodban, donor-kommunikáció a fővárosi koordinátoron át. Ez logisztikai-koordinációs nehézség.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Önkéntes-koordináció (Budapest ↔ Borsod 220 km) | heti | 4-6 óra | nagy |
| Önkéntes-onboarding (új belépő) | folyamatos | 8-12 óra/fő | nagy |
| Pályázatírás (vidéki adminisztrációból) | 5-10/év | 12-25 óra/db | óriási |
| Donor-kommunikáció (1200+ magán + 20 céges) | havi | 12-18 óra | nagy |
| Foglalkozás-tervek (4 program × heti) | heti | 6-10 óra | közepes |
| Sajtó- és közösségi média | heti | 4-6 óra | közepes |
| Családlátogatás-jegyzet | heti 5-10 | 30-45 perc/család | közepes |

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **Pályázatírás Claude Project-tel** (vidékről admin) | 12-25 óra/db | 5-10 óra/db | **~60%** |
| 2 | **Önkéntes-onboarding videó-kurzus** (220 km utazás előtt felkészítés) | 8-12 óra/fő | 4-6 óra/fő | **~50%** |
| 3 | **Donor-kommunikáció batch** (1200+ adományozó) | 12-18 óra/hó | 3-4 óra/hó | **~80%** |

---

## Egyedi InDaHouse quick win — Önkéntes-onboarding videó-kurzus

Az új önkéntes Budapestről utazik Borsodba — **220+ km, 3-4 órás út**. A korábbi onboarding-modell: az utazás után 1-2 napos képzés Hernádszentandráson. Ez **nehéz a fővárosi önkéntesnek** (munka mellett 2 nap szabadság), és **drága a szervezetnek** (szállás, koordinátor-idő).

**AI-asszisztált:** Az alapozó képzést **online videó-kurzussá** alakítjuk: AI a Benkő Fruzsina és más tapasztalt önkéntesek videó-felvételeiből transzkriptet készít, kérdésekre bonton választ ad NotebookLM-ben. **Az új önkéntes 4-6 órás otthoni felkészülés után** érkezik Borsodba — ott csak 1 nap szakmai bevezetés kell. **Önkéntes-megtartás nő** (kevesebb dropout), **képzési költség csökken**.

---

## 5 use case, amire nem gondoltak

1. **Anonimizált családlátogatás-jegyzet asszisztens** — diktált 5 percből strukturált család-jegyzet, fejlődés-követés.
2. **Foglalkozás-terv generátor** — KisTanoda 6-9 éveseknek heti foglalkozás-anyag korábbi sablonokból.
3. **Donor-jelentés egyedileg** — 20 céges támogatónak nem 1 sablon, hanem cég-specifikus mini-riport.
4. **Sajtó-megkeresés válasz-vázlat** — roma gyermek-helyzet, mélyszegénység, gyermekvédelem témakörökben.
5. **1200+ magán-adományozó email batch** — éves köszönet + 1%-os SZJA emlékeztető, személyre szabva.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár (fővárosi koordinátor), Claude Desktop, **pályázatírás-asszisztens** 1 EFOP/EU pályázattal A/B, mérés.
**Csapat (Hét 5-8):** Önkéntes-onboarding videó-kurzus pilot (5-6), donor-kommunikáció batch (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** Foglalkozás-terv generátor, családlátogatás-jegyzet, sajtó-prompt-csomag, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0
- **Claude Desktop** + Filesystem MCP — pályázat-sablonok, donor-tudásbázis
- **Claude Project** — szervezet tudásbázisa
- **Google NotebookLM** — önkéntes-onboarding kurzus
- **Otter.ai** — családlátogatás-jegyzet diktálás

**Skálázás:** Claude Pro 2-3 fő (~€36-54/hó). Team 5-7 user később (~€100-200/hó).

---

## 6 hetes mérőszámok

- Pályázatírási idő (1 EU pályázat): 18-22 óra → 8-12 óra
- Önkéntes-onboarding ideje: 8-12 óra/fő → 4-6 óra/fő
- Önkéntes-dropout új belépőknél: most → 30%-kal csökkentett
- Donor-kommunikáció havi idő: 12-18 óra → 3-4 óra
- Heti megtakarított adminisztratív óra: 0 → 12-18 óra

---

## GDPR keret — magas

Roma gyermekekkel dolgozó szervezet — **kettős érzékenység** (kor + etnikai hovatartozás). **GDPR 9. cikk különleges adatkategória.**

1. **Anonimizálás** minden promptba — sosem konkrét gyermek neve, családi azonosító.
2. **Etnikai hovatartozás** — sosem említett, ha nem szükséges. Ha igen: aggregált statisztika.
3. **Anthropic DPA** aláírva.
4. **Audit log** Claude Team-mel havi review.
5. **Donor-anyagok** anonim történet-sablonokon — sosem konkrét család.
6. **Sajtó-anyag**: a roma téma kommunikációjához óvatosság, jogász-jóváhagyás.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €36-72/hó | 2-4 Pro fiók |
| 6-12 hónap | €100-200/hó | Claude Team 5-7 user |

**ROI:** heti 12-18 óra megtakarítás ≈ 240-360 000 Ft/hó. Team csomag <100 000 Ft. **Pozitív ROI 1 hónap.**

---

## Következő lépés

1. Vezetői döntés (Benkő Fruzsina + alapítvány)
2. AI sáfár kijelölése (fővárosi koordinátor)
3. Claude for Nonprofits jelentkezés
4. Pilot use case: pályázat-asszisztens 1 EU/EFOP pályázattal A/B
5. 30 napos pilot + heti retro

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
**Hivatalos szervezet:** [indahousehungary.hu](https://indahousehungary.hu)
