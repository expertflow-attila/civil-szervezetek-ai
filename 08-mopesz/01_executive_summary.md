# KORE — Koraszülöttekért Országos Egyesület
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Megjegyzés

Az eredeti listán "MOPESZ" szerepelt, de ez a név nyilvános forrásokban nem azonosítható (a `mopesz.hu` domain nem érhető el). A magyar koraszülött ernyőszervezet a **KORE — Koraszülöttekért Országos Egyesület** ([koraszulott.com](https://koraszulott.com)). A folder slug megmaradt `08-mopesz` (URL-stabilitás), de tartalom KORE.

---

## Helyzet

A KORE **2011-ben alakult**, **Magyarország első szülői koraszülött-szervezete** — tagjai **kizárólag érintett szülők**, önkéntes alapon dolgoznak munka és család mellett. Székhely: 6600 Szentes, Munkás u. 88.

**Tevékenységek (2024-2025):**
- **Pszichológiai támogatás** (egyéni és csoportos szülőcsoportok 16 megyében)
- **KORE Textil Program** — 2012 óta az ország 29 koraszülött intenzív osztályának (PIC) textil- és ruhaadományozás
- **Koripok** — 2015 óta **33 000 horgolt polip-figura** adományozása
- **Együttdobban pályázat** — max 300 000 Ft fejlesztő terápia-támogatás családoknak
- **Fejtejes szobák** kialakítása több kórházban
- **Ingyenes újraélesztés- és elsősegély-tanfolyamok** mind a 19 megyében
- **Pici Füzet** ([picifuzet.hu](https://picifuzet.hu)) — szülői kiadvány

**Finanszírozás:** állami támogatást NEM kap, kizárólag SZJA 1%, adományok, pályázatok, vállalati együttműködések (CEDEK Izraelita Szeretetszolgálat partnerség).

A modell sajátossága: **érintett szülő-önkéntesek**, akik munka és család mellett szervezik a hálózatot. A szülő-önkéntesek mentális kapacitása a szűk keresztmetszet — nem a pénz, hanem az idő.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Új szülő-megkeresés (kórházi szülő, krízisben) | napi 2-5 | 30-60 perc/eset | nagy |
| PIC-protokoll szülőknek érthető fordítás | folyamatos | 2-3 óra/PIC-fordulat | nagy |
| Fejlesztő terápia-pályázat családoknak | havi 5-10 | 1-2 óra/család | közepes |
| Önkéntes-koordináció 19 megyében | heti | 4-6 óra | közepes |
| Pici Füzet-szerkesztés és frissítés | éves/féléves | 30-50 óra | nagy |
| Pályázatírás (BGA, NEA, vállalati CSR) | 4-8/év | 8-15 óra/db | nagy |
| Koripok logisztika (29 PIC ország) | folyamatos | 2-4 óra/hét | közepes |
| Kórház-koordináció (29 PIC) | havi | 4-6 óra | közepes |

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **PIC-protokoll fordító asszisztens** (orvosi szöveg → szülői magyar) | 2-3 óra/anyag | 20-30 perc/anyag | **~85%** |
| 2 | **Szülő-megkeresés triage és válasz** (kórházi krízisben) | 30-60 perc/eset | 10-15 perc/eset | **~70%** |
| 3 | **Pályázatírás Claude Project-tel** | 8-15 óra/db | 3-6 óra/db | **~60%** |

---

## Egyedi KORE quick win — PIC-protokoll fordító asszisztens

A kórházi szülő-protokoll (mit kapja, mit kell tennie, mire van joga) **orvosi nyelvezetben íródott**. A KORE szülő-önkéntesek 2-3 órát dolgoznak rajta, hogy érthetővé tegyék: rövid mondatok, hétköznapi szavak, vizuális megfogalmazás. **Új PIC-protokoll-frissítés évi 2-4 alkalommal.**

**AI-asszisztált:** Claude megkapja az orvosi szöveget + a KORE korábbi szülő-magyarázatait, és **20-30 perc alatt** átfordítja. A szülő-önkéntes finomít — **nem nulláról ír**. Ez **óriási elérés-növelés** a kórházi szülő-tájékoztatásban.

---

## 5 use case, amire nem gondoltak

1. **Multilang szülői anyag** — angol/német nemzetközi koraszülött-anyagok magyar fordítása szülőknek (NEM orvosi szakcikk-fordítás).
2. **PIC-koordinátor heti dashboard** — 29 PIC mit kapott, mit kér, milyen problémák vannak. Manuálisan most nem mérve.
3. **Krízisanya első-segély protokoll** — *"a kisbabám koraszülöttként sírni kezdett, mit csináljak?"* — NotebookLM forrás-hivatkozással.
4. **Ingyenes elsősegély-tanfolyam regisztráció + emlékeztető** — 19 megyében, AI-vel automatizált koordináció.
5. **Anonim szülő-történet generátor donor-riportokhoz** — sablon-anonim történetek, sosem konkrét család.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár, Claude Desktop, **PIC-protokoll fordító** 1-2 önkéntessel, mérés.
**Csapat (Hét 5-8):** Szülő-megkeresés triage (5-6), 1 BGA pályázat AI-vel (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** PIC-koordinátor dashboard, multilang anyagok, krízisanya NotebookLM, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0
- **Claude Desktop** + Filesystem MCP — sablonok, korábbi anyagok
- **Google NotebookLM** — PIC-protokollok, krízisanya útmutatók
- **DeepL Pro** vagy Claude — multilang fordítás

**Skálázás:** Claude Pro 1-2 önkéntesnek (~€18-36/hó). Team csak ha bizonyul ROI.

---

## 6 hetes mérőszámok

- PIC-protokoll fordítási idő: 2-3 óra → 20-30 perc
- Szülő-megkeresés válaszidő: 24-48 óra → <8 óra
- Pici Füzet-frissítés ideje: 30-50 óra → 12-20 óra
- Heti megtakarított adminisztratív óra (csapat): 0 → 8-12 óra
- 19 megyei elsősegély-tanfolyam koordináció: manuális → automatizált

---

## GDPR keret — magas

**Egészségügyi adat — különleges adatkategória (GDPR 9. cikk).**

1. **Anonimizálás minden promptba**: sosem teljes név, baba TAJ-szám, kórházi azonosító.
2. **Anthropic DPA** aláírva.
3. **Szülő-megkeresés rögzítése** anonim — egyéni eset NEM kerül felhőbe.
4. **Audit log** Claude Team-mel havi review (ha skálázunk).
5. **Multilang anyagok**: KORE-saját anyag + nemzetközi nyilvános anyag — donor-személyiségi adat sosem.
6. **AI sosem kommunikál közvetlenül** krízisbe esett szülővel — csak önkéntest segíti.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €18-36/hó | 1-2 Pro fiók |
| 6-12 hónap | €60-150/hó | Claude Team 3-5 önkéntes |

**ROI:** elsősorban szülő-elérés növekedésében + önkéntes-megtartásban.

---

## Következő lépés

1. Vezetői döntés (1 órás meeting elnökséggel)
2. AI sáfár kijelölése (1 fő, főállásban dolgozó önkéntes)
3. Claude for Nonprofits jelentkezés
4. Pilot use case: PIC-protokoll fordító 1-2 önkéntessel 30 napra
5. 30 napos pilot + heti retro

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
**Hivatalos szervezet:** [koraszulott.com](https://koraszulott.com)
