# NOE — Nagycsaládosok Országos Egyesülete
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

A NOE **16 000 tagcsalád** és **250 helyi közösség** szolgálatát látja el **7 regionális központon** keresztül, **5 ingyenes tanácsadó-szolgálattal** (jogsegély, otthonteremtés, családi/szociális ellátások, fogyasztóvédelem, gyermeknevelés). 1987 óta működik. A jelenlegi munkamennyiség az adminisztratív stábra és a tanácsadókra aránytalanul nagy terhet ró: **napi 50-100 megkeresés**, évente 5-15 pályázat, 250 helyi szervezet jelentésének összesítése, és 2026-tól iFORM nyomtatványon a közhasznúsági beszámoló.

A NOE-modell sajátossága: **a 250 helyi vezető a kritikus pont** — nem alkalmazottak, hanem helyi vállalkozó-szervezők. A központi iroda nem tudja minden kérdésüket napi szinten megválaszolni; a telefon és email-fiók folyamatos préselése. **Ez a "központi szűk keresztmetszet" pontosan az, amit egy AI-projekt a leghatékonyabban tehermentesít.**

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Tagi email-triage és válasz-vázlat | napi | 2-3 óra | nagy |
| Helyi vezető telefonos kérdések | napi | 1.5-2.5 óra | nagy |
| Tanácsadói várólista (5 szolgálat) | napi | 2-4 óra/szakértő | nagy |
| Pályázatírás (BGA, NEA, EFOP, EU) | 5-15/év | 8-20 óra/db | óriási |
| Helyi szervezet negyedéves jelentés | negyedéves | 6-10 óra/Q | közepes |
| Közhasznúsági beszámoló (iFORM) | éves | 30-50 óra | óriási |
| Új tanácsadó onboarding | folyamatos | 6-12 hónap | nagy |

**Heti összesen:** 25-40 óra adminisztráció — fél stáb-tagnyi kapacitás.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **Helyi vezető assistant** (Claude Project a 250 vezetőnek) | 1.5-2.5 óra/nap központon | <5 perc önkiszolgálva | **~95%** |
| 2 | **Tagi email-triage + válasz-vázlat** | 10-15 perc/levél | 2-4 perc/levél | **~70%** |
| 3 | **Pályázatírás** Claude Project-tel | 8-20 óra/pályázat | 3-8 óra/pályázat | **~60%** |

---

## Egyedi NOE quick win — Helyi vezető assistant

Egy közös Claude Project, amelyben benne van **az összes szervezeti dokumentum**: alapító okirat, ÁSZF, programszervezési gyakorlatok, beszámoló-sablonok, kedvezmény-szabályzat, tagdíj-rendszer. **250 helyi vezető önkiszolgáló módon kérdezhet rá**: *"Hogyan szervezek családi napot 80 főre 200e Ft-ból?"*, *"Mi az aktuális kedvezmény-pontok rendszere?"*. Egyszer 8-10 órás munka beépíteni, ezt követően **250 ember megterhelése csökken**, és a központi iroda telefonja megszabadul a 30-40% leggyakoribb kérdéstől.

---

## 5 use case, amire nem gondoltak

1. **Tagdíj-elmaradás early warning** — 2-3 hónappal előre jelzi mely családok lecsúszhatnak. Proaktív érdeklődés mielőtt elveszik.
2. **Új helyi szervezet alapítási asszisztens** — 30+ oldalas útmutató kérdezhetővé téve. Új vezetőnek 5 perc.
3. **Családi pótlék jogi changelog (NotebookLM)** — havi update a hivatalos közlönyökből. Tanácsadók azonnal kérdeznek forrás-hivatkozással.
4. **Volt családok visszahívás email-batch** — 200-500 kilépett családnak személyre szabott szöveg.
5. **Sajtó-megkeresés egységes hangnem** — 250 vezetőnek konzisztens válasz-vázlat 30 mp alatt.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár, Claude Desktop, jelentkezés, tagi email-triage indul, mérés, pilot retro.
**Csapat (Hét 5-8):** Helyi vezető Project felépítése (5-6), 5-10 vezető meghívása (7), BGA pályázat A/B (8).
**Skálázás (Hét 9-12):** 250 vezetőnek megnyitva, tagdíj early warning pilot 1 régióban, NotebookLM publikálva, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0 (jelentkezés)
- **Claude Desktop** + Filesystem MCP + Drive MCP + Gmail MCP — €0 + Pro €18/hó
- **Claude Project** (helyi vezetőknek) — Pro/Team-ből
- **Google NotebookLM** (családtámogatási jogi changelog) — €0

**Skálázás:** Claude Team 5-10 user (~€100-350/hó).

---

## 6 hetes mérőszámok

- Tagi email átlagos válaszidő: 24-48 óra → <8 óra
- Helyi vezető-kérdés központi telefonidő: 1.5-2.5 óra/nap → <30 perc/nap
- Új tanácsadó onboarding: 6-12 hónap → 2-4 hónap
- Pályázatírási idő (1 BGA): 12-15 óra → 5-7 óra
- Heti megtakarított adminisztratív óra: 0 → 10-15 óra

---

## GDPR keret — alap

A NOE működése **nem krízis-fókuszú** — családi adminisztráció. Standard GDPR-konform Claude Team beállítás (zero retention, audit log) elegendő. **Anonimizálás minden promptban** — sosem teljes név, lakcím, TAJ-szám. Anthropic DPA aláírva. Audit log Claude Team-mel havi review. AI nem helyettesíti a jogi tanácsadást — csak vázlatot ad. Vallási hovatartozás (egyes tagcsaládoknál) különleges adat, sosem promptba.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €0-50/hó | 1-2 Pro fiók |
| 6-12 hónap | €100-350/hó | Claude Team 5-10 user |

**ROI:** heti 12 óra megtakarítás @ 5000 Ft/óra ≈ 240 000 Ft/hó. Team csomag ~140 000 Ft. **Pozitív ROI 1-2 hónap.**

---

## Következő lépés

1. Vezetői döntés (1 órás meeting elnökséggel)
2. AI sáfár kijelölése (1 fő, koordinátor)
3. Claude for Nonprofits jelentkezés (lásd `04_claude_nonprofits_jelentkezes.md`)
4. Pilot use case választás: tagi email-triage → később helyi vezető Project
5. 30 napos pilot + heti retro

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
