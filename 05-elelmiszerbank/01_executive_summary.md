# Magyar Élelmiszerbank Egyesület
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 4 oldal

---

## Helyzet

A Magyar Élelmiszerbank Egyesület 2005 óta működő, az Európai Élelmiszerbankok Szövetségének teljes jogú tagja. **2024-ben 10 685 tonna élelmiszert** osztott szét **20 milliárd Ft értékben**, **2025-ben 243 919 nélkülözőt segített 650 karitatív partneren keresztül**. Indulás óta összesen **130 ezer tonna élelmiszer 110+ milliárd Ft értékben** — Magyarország legnagyobb élelmiszermentő hálózata.

**Csapat:** **24 alkalmazott és 60+ önkéntes**, 4 raktár (Budapest, Karcag, Alsónémedi, Veszprém), 7 partner-áruházlánc (Tesco, Auchan, Aldi, Metro, Lidl, Penny, KFC), és **383+ áruház aktív együttműködésben**. A mentett mennyiség **~80%-a áruházi feleslegből** származik, a maradék gyártói és iskolai-menza átvétel.

A működés strukturális kihívása: **a partnerszervezet maga megy az áruházhoz**, az Élelmiszerbank közvetít — ezért a koordináció **699 partnerszervezet × ~400 áruház × heti-kétheti rendszeresség** komplexitásban zajlik. A saját IT-rendszer (SmartFront, `meb.smartfront.hu`) tartja össze, de **az áruházanként eltérő elszámolási folyamat** (külön minta-elszámolás Aldira, Auchanra, Lidlre, Metrora, Pennyre, Tescora), a NÉBIH lejárati-útmutató, FELIR-azonosító, fotódokumentáció, hozzájáruló nyilatkozat, selejtezési jegyzőkönyv mind **manuális adminisztráció**.

A háttér-csapat ezt rendszerszinten viseli: **dedikált felelős van** elszámolásokra (Fehér Balázs), áruház-koordinációra (Schwikker Zsófia), és SmartFront helpdeskre (Bajdik János). A nyilvánosan közölt fájlpontok között **az "irodai adatrögzítők" aktív toborzása** is megjelenik — ami azt mutatja, **strukturális adminisztratív kapacitás-hiány** van.

**Itt lép be az AI**: nem a furgon helyett, hanem a furgon mellett papírmunkát végző embert szabadítja fel — hogy az aki most adatot rögzít, partner-kapcsolat-építéssel foglalkozhasson.

---

## Napi munka térkép — mi terheli a stábot most?

| Feladat | Gyakoriság | Jelenlegi időigény | Terhelési szint |
|--------|-----------|-------------------|-----------------|
| Áruházi felesleg-mentés napi prioritás-tervezés | napi | 30-60 perc | közepes |
| Partner-szervezet igény-triage (650+ partner) | napi | 1.5-2.5 óra | nagy |
| SmartFront elszámolás-ellenőrzés (áruházanként eltérő) | napi | 1-2 óra | óriási |
| Önkéntes-koordináció (60+ fő) és heti beosztás | heti | 3-4 óra | közepes |
| Donor-jelentés (7 áruházlánc + gyártók + magán) | havi | 10-20 óra | nagy |
| Pályázatírás (BGA, NEA, EFOP, EU, vállalati CSR) | 5-15 / év | 8-25 óra/pályázat | óriási |
| Közhasznúsági + éves beszámoló (iFORM-tól 2026-tól) | éves | 30-50 óra | óriási |
| Önkéntes-onboarding (új belépő) | folyamatos | 1-2 óra/fő | közepes |
| Sajtó-megkeresés és közösségi média | heti | 4-6 óra | közepes |
| Vezetői dashboard / mentett mennyiség statisztika | heti / havi | 2-4 óra | kicsi |
| Adóigazolás (1%-os SZJA-felajánlóknak) | éves (2-3 hét) | heti 8-12 óra erre az időszakra | nagy |

**Összesen heti, csúcsidőszakon kívül:** kb. **25-40 munkaóra** csak adminisztrációra. Ez nagyjából **fél stáb-tag** helyettesítésével ér fel.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Jelenlegi időigény | AI-asszisztált | Megtakarítás | Effort | Hatás |
|---|----------|-------------------|----------------|--------------|--------|-------|
| 1 | **Donor-jelentés-asszisztens** (havi riport 7 áruházláncnak külön formátumban) | 10-20 óra/hó | 1.5-3 óra/hó | **~85%** | kicsi | nagy |
| 2 | **SmartFront elszámolás-ellenőrző asszisztens** (áruházanként eltérő logika) | 1-2 óra/nap | 15-25 perc/nap | **~75%** | közepes | óriási |
| 3 | **Pályázatírás Claude Project-tel** (BGA, NEA, EU, vállalati CSR) | 8-25 óra/pályázat | 3-8 óra/pályázat | **~65%** | közepes | nagy |

**90 napos várható megtakarítás:** **heti 15-22 óra** — egy fő félállás teljes átvétele, *amit pótolhatatlan emberi munkára lehet visszairányítani* (önkéntes-toborzás, partner-kapcsolat, sajtó, új áruházi együttműködés).

---

## Egyedi Élelmiszerbank quick win — Donor-jelentés-asszisztens

A 7 áruházlánc-partner mindegyike más-más formátumban kéri a havi/negyedéves donor-riportot: mentett mennyiség saját áruházaikból, partnerek száma akik ezt megkapták, elért emberek becslése, hatás-történet anonim módon, CO2-megelőzés-érték, esetenként vizuális elem.

**Most:** havi 10-20 óra a kommunikációs/CSR-felelősnek, mert
- a SmartFront export Excel-jeit áruházanként szűrni kell
- minden donor más struktúrájú adatot kér
- a "hatás-történet" anekdotikus, körlevél-munka

**AI-asszisztált:** egy Claude Project benne:
- A SmartFront havi export-Excelje (anonimizálva)
- A 7 áruházlánc-sablon (Tesco-formátum, Aldi-formátum, …)
- 5-10 anonim "hatás-történet" sablon
- 2024-es éves számok (10 685 tonna, 20 mrd Ft, 27 580 124 kg CO2)

**Egy kattintás:** "Készítsd el a Tesco-riportot 2026 áprilisra a sablon szerint." → 5-10 perc, 1. verzió kész. **A stáb finomít, nem ír nulláról.**

---

## 5 use case, amire nem gondoltak (kis befektetés, nagy eredmény)

### 1. SmartFront elszámolás-validátor
A partner-szervezetek minden átvételt fel kell tölteniük a SmartFront-ba, **áruházanként eltérő elszámolási logikával**. A Bajdik Jánosi helpdesk-feladat (validálás, hibakeresés) napi 1-2 óra. Egy AI-asszisztens (Claude + Filesystem MCP) automatikusan átolvassa az új elszámolásokat, jelöli az anomáliákat ("Aldinak Tesco-formátumú kg-egységet adtak meg", "lejárati dátum a feltöltési dátum előtti", "a fotódokumentáció hiányos"), és emberi review-t kér csak a kétségesekre. **~70% helpdesk-teher átvállalása.**

### 2. Partner-szervezet "matching" javaslat új áruházra
Új áruház-pályázat (pl. új Lidl-üzlet csatlakozik) esetén el kell dönteni, melyik karitatív partner kapja a hozzárendelést. Ma ezt manuálisan, "földrajzi közelség + kapacitás + korábbi tapasztalat" alapján döntik. A 699 partner-adatbázisból AI-jal **5-10 perces javaslat-modell** adható: top 5 illeszkedő partner indoklással. A koordinátor dönt — de **80%-kal gyorsabb előválasztás**.

### 3. Adóigazolás-generátor (1%-os SZJA-felajánlóknak)
Évente több ezer 1%-os felajánló kap igazolást. Az AI sablonból, név-lista alapján **1 nap alatt megír mind**. **Heti 8-12 óra megtakarítás évi 2-3 hét intenzív SZJA-időszakra koncentrálva.**

### 4. CO2 / hatás-történet kalkulátor donorokhoz
A 2024-es **27 580 124 kg CO2** (=12 015 autó éves károsanyag-kibocsátása) lenyűgöző szám. Donor-szintre lebontva — pl. *"a Tesco XV. kerületi áruházából megmentett 1 200 kg pékáru megelőzött 1 752 kg CO2-kibocsátást"* — még erősebb. AI-asszisztens generálja minden donor-riporthoz a saját CO2-becslést. **Csillogóbb donor-élmény, ugyanaz az adat.**

### 5. Önkéntes-onboarding videó-átirat + kurzus
A 60+ önkéntes folyamatos onboarding-ja terheli a koordinátort. Az AI a bevezető videó-felvételből generál:
- 1 oldalas "amit muszáj tudnod 5 perc alatt" összefoglalót
- 5 leggyakoribb félreértés tisztázását
- Checklist az első hétre
- Tudástesztet (10 kérdés, automatikus pontozás)

**Csökkenti** az onboarding-coachok terhelését 50-70%-kal.

---

## 12-hetes fokozatos bevezetés

### 1. fázis: Pilot (Hét 1-4) — egy fő, egy use case

| Hét | Mérföldkő |
|-----|-----------|
| 1 | AI sáfár kijelölése (kommunikációs / CSR-felelős javasolt). Claude Desktop telepítés. Claude for Nonprofits jelentkezés benyújtva. |
| 2 | **Quick win #1 indítása**: donor-jelentés-asszisztens. Tesco-sablon betanítása. |
| 3 | Első éles donor-riport AI-asszisztált a Tesco számára. Mérés: óraszám előtt vs. után. |
| 4 | Pilot retro: mit tanultunk. Fázis-kapu döntés. |

### 2. fázis: Csapat (Hét 5-8) — 3-5 fő, 3 use case

| Hét | Mérföldkő |
|-----|-----------|
| 5 | Quick win #2 (SmartFront elszámolás-validátor) bevezetése Bajdik Jánosnak. |
| 6 | A maradék 6 áruházlánc-sablon betanítása. Tudásbázis Claude Project: ÁSZF, NÉBIH-útmutató, FELIR. |
| 7 | Pályázatírás-asszisztens kipróbálása élesben (1 BGA pályázat A/B teszttel). |
| 8 | Csapat-szintű mérőszám-review. GDPR-protokoll dokumentálás. |

### 3. fázis: Skálázás (Hét 9-12) — egész szervezet

| Hét | Mérföldkő |
|-----|-----------|
| 9 | Önkéntes-onboarding automatizálás (60+ önkéntes számára). |
| 10 | Partner-szervezet matching pilot (1 új áruház). CO2 / hatás-történet kalkulátor élesben. |
| 11 | Sajtó- és kommunikációs prompt-csomag bevezetése. Adóigazolás-generátor előkészítése a következő SZJA-ra. |
| 12 | **Skálázási döntés**: marad-e Claude Pro / Team, hányadán bővítjük az API-keretet. |

---

## Eszköz-stack

| Eszköz | Cél | Költség |
|--------|-----|---------|
| **Claude for Nonprofits** | Ingyenes / kedvezményes API + Pro/Team licenc | €0 (jelentkezés szükséges, 2-4 hét) |
| **Claude Desktop** + Filesystem MCP | Lokális dokumentumok elérése (sablonok, jelentések) | €0 + Pro €18/hó |
| **Claude Desktop** + Google Drive MCP | A meglévő Drive-tartalom elérése | €0 |
| **Claude Desktop** + Gmail MCP | Email-triage és válasz-vázlatok | €0 |
| **SmartFront** (meglévő) | Élelmiszermentési adminisztráció (NEM az AI része, mellette dolgozik) | meglévő |
| **Google NotebookLM** | NÉBIH-útmutató, élelmiszerbiztonsági szabályzat tudásbázis | €0 |

**Skálázási opció:** Claude Team 5-10 user (€20-35/hó/fő) → ~€100-350/hó stáb-méretétől függően.

---

## 6 hetes mérőszámok

| Mérőszám | Most | Cél (6. hét) |
|----------|------|--------------|
| Donor-jelentés átlagos készítési ideje (Tesco-sablon) | 10-15 óra/hó | <2 óra/hó |
| SmartFront helpdesk-kérdések száma (heti) | tipikus 30-50 | <15 |
| Heti megtakarított adminisztratív óra (összesen) | 0 (baseline) | 12-18 óra |
| AI-szel írt pályázat sikerarány vs. hagyományos | nincs adat | A/B teszt 1 BGA pályázattal |
| Önkéntes-onboarding ideje (új belépő → első éles akció) | 2-3 hét | 4-7 nap |

A mérés a `05_pilot_metrics.md` fájlban részletesen. Heti review, 4./8./12. héten formális retro.

---

## GDPR + etikai keret — magas érzékenység

A Magyar Élelmiszerbank **többféle adattípussal** dolgozik:

1. **Donor-adatok (vállalati áruházlánc, magán):** általános üzleti adat, GDPR alapszintű — Anthropic Claude for Nonprofits standard DPA elegendő.
2. **Partnerszervezet-adatok (650+):** szintén üzleti, alapszintű.
3. **Rászoruló családok adatai:** **különleges adatkategória**, de ezek a partnerszervezeteknél vannak. Az Élelmiszerbank tipikusan **csak aggregált statisztikát kap** (érintett emberek száma). Ettől függetlenül szigorú anonimizáció szükséges.
4. **SmartFront adatok:** üzleti / pénzügyi, de tartalmazhat partnerszervezet-szintű helymeghatározást — anonimizálni kell promptba kerülés előtt.

**Kötelező intézkedések:**
1. **Anonimizálás minden promptba** — sosem teljes név, sosem konkrét cím, sosem rászoruló-családok személyazonosító adata.
2. **Anthropic DPA** aláírva a Claude for Nonprofits / Team szerződésnél.
3. **Audit log** Claude Team-mel, havi review.
4. **Donor-adat NEM keveredhet** rászoruló-adattal egy Claude Project-ben.
5. **AI nem kommunikál közvetlenül** rászoruló családdal — csak stáb-asszisztens.
6. **SmartFront export előtt** automatikus anonimizáló script (script: `_shared/scripts/anonymize.mjs`-be tehető).

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| **0-3 hónap (pilot)** | €0 | Claude for Nonprofits + ingyenes eszközök |
| **3-6 hónap (csapat-bővítés)** | €0-50/hó | Esetleges 1-2 Pro fiók |
| **6-12 hónap (teljes szervezet)** | €100-350/hó | Claude Team 5-10 user, ha bizonyul az ROI |
| **Egyszeri implementálási idő** | 30-50 munkaóra | AI sáfár + külső tanácsadó (vagy belső) |

**ROI-becslés:** ha a heti megtakarítás 15 munkaóra @ 5000 Ft/óra hatékonyság = **havi ~300 000 Ft alternatív érték**. A €350/hó Claude Team csomag = ~140 000 Ft/hó. **Pozitív ROI 1-2 hónap után.**

---

## Következő lépés (most, 2 héten belül)

1. **Vezetői döntés** a pilot indításáról (1 órás meeting Cseh Balázzsal és Nagygyörgy Andrással)
2. **AI sáfár kijelölése** (1 fő — javaslat: kommunikációs vagy CSR-felelős)
3. **Claude for Nonprofits jelentkezés** benyújtása (lásd `04_claude_nonprofits_jelentkezes.md`) — 2-4 hét átfutás
4. **AI munkagép** előkészítése (Mac/Windows desktop az irodában a Lokátor utcában, lásd `03_claude_desktop_config.json`)
5. **Pilot use case választása**: donor-jelentés-asszisztens (Tesco-sablonnal kezdünk)
6. **Stáb-tájékoztató** (30 perc): mit jelent ez, mit nem, hol nem szabad használni
7. **30 napos pilot indítása** + heti retro

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu` · Expert Flow tanácsadói anyag

**Források:**
- elelmiszerbank.hu/hu/rolunk/kik_vagyunk.html (24 alkalmazott, 60 önkéntes, 2005-ös alapítás)
- elelmiszerbank.hu/hu/eredmenyeink.html (10 685 tonna 2024-ben, 130 ezer tonna indulás óta)
- elelmiszerbank.hu/hu/szervezeteknek/adminisztracio.html (SmartFront, áruházi elszámolási útmutatók)
- csrplatform.hu/hu/szervezetek/elelmiszerbank.html (699 partner 2024-ben)
- napi.hu interjú Nagygyörgy Andrással 2022-ből (576 áruház, napi 22-23 ezer kg)
