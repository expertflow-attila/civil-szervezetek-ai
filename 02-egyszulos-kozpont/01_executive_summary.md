# Egyszülős Központ
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

Az Egyszülős Központ **2005 óta online, 2018 óta budapesti fizikai központtal** szolgálja az egyszülős családokat: ingyenes jogi, pszichológus, gyermekpszichológus és mediációs tanácsadás, gyász- és válási csoportok, közösségépítés. A napi működés legnagyobb terhe **a 20+ év alatt felhalmozott online tartalmi archívum kereshetetlensége**, a bejövő érdeklődők triage-e (ki melyik szakemberhez), a mediációs ülések jegyzőkönyvezése, és a csoport-szervezés.

A modell sajátossága: **kis szakértői stáb + óriási tartalmi örökség**. A pszichológusok, mediátorok, jogászok minden ülés után 30-90 perc adminisztrációval mennek haza — pont az időt veszítik el, amit a következő családra fordíthatnának.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Bejövő érdeklődő triage és válasz-vázlat | napi | 1-2 óra | közepes |
| Mediációs ülés jegyzőkönyv | mediátoronként 4-6/hét | 60-90 perc/ülés | nagy |
| Pszichológus ülés-összefoglaló | hetente 8-12 | 15-30 perc/ülés | nagy |
| Archívum-keresés ("hol van az a régi anyag?") | napi | 30-60 perc | közepes |
| Hírlevél + közösségi média | heti | 4-6 óra | közepes |
| Pályázatírás (NEA, EU, vállalati CSR) | 4-8/év | 10-20 óra/db | nagy |
| Új szakértő onboarding | folyamatos | 3-6 hónap | nagy |

**Heti összesen:** 20-30 óra a stáb adminisztrációja — egy szakember teljes idejének közel 30%-a.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **20 éves archívum kereshetővé tétele** (Claude Project + Drive) | "nem találom" → újraírás | <1 perc keresés | **~90%** |
| 2 | **Mediációs jegyzőkönyv-asszisztens** (diktált → strukturált jegyzőkönyv) | 60-90 perc/ülés | 15-20 perc/ülés | **~75%** |
| 3 | **Bejövő érdeklődő triage és válasz-vázlat** | 10-15 perc/megkeresés | 2-4 perc/megkeresés | **~70%** |

---

## Egyedi Egyszülős Központ quick win — Mediációs jegyzőkönyv-asszisztens

A mediátor a 2 órás ülés után 5-10 perces hangfelvétel-összefoglalót diktál (Otter.ai vagy iPhone diktafon). A Claude Desktop strukturálja a központ formátumába: tényállás, megegyezés, hátralévő nyitott pontok, következő találkozó. **Mediátor heti 4-6 órát spórol**, és a jegyzőkönyvek konzisztensebbek lesznek — fontos, mert egy válási mediációs jegyzőkönyv jogi súllyal bírhat.

---

## 5 use case, amire nem gondoltak

1. **Pszichológus ülés-összefoglaló asszisztens** — diktált 5-perces összefoglalóból strukturált terápiás napló. Hetente 5-7 órát spórol.
2. **Csoport-vezető tudásbázis** — gyász- és válási csoport-vezetőknek elérhető 20+ év csoport-anyag, kérdezhetővé téve.
3. **Kríziseligazító Claude Project** (családjogi 2026 szabályok) — válás, gyermekelhelyezés, gyermektartás, közös szülői felügyelet aktualizált tudás.
4. **Új szakértő onboarding** (NotebookLM) — beépítési idő 3-6 hónap → 4-8 hét, mert az új pszichológus / mediátor azonnal kérdez a 20 év archívumából.
5. **Adományozói riport-vázlat sablon** — 4-6 nagyobb támogató éves/féléves riportja jelenleg 8-12 óra/db; AI-vel 1-2 óra.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár, Claude Desktop telepítés, **mediációs jegyzőkönyv-asszisztens** 1 mediátorral 30 napra, mérés.
**Csapat (Hét 5-8):** Archívum Drive-szinkron Claude Project-tel (5-6), 2 pszichológus + 1 jogász bevonva (7), GDPR-protokoll dokumentálás (8).
**Skálázás (Hét 9-12):** Krízis-eligazító + onboarding NotebookLM, csoport-vezető tudásbázis, adományozói riport sablon, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0 (jelentkezés szükséges)
- **Claude Desktop** + Google Drive MCP — teljes archívum elérése
- **Otter.ai** vagy iPhone diktafon — meeting transcript
- **Google NotebookLM** — családjogi tudásbázis (válás, gyermekelhelyezés)
- **Claude Project** — szakértői tudásbázis

**Skálázás:** Claude Pro 1-2 főnek (€18-36/hó), majd Team csomag.

---

## 6 hetes mérőszámok

- Mediációs jegyzőkönyv készítési idő: 60-90 perc → 15-20 perc
- Bejövő érdeklődők átlagos válaszidő: 24-48 óra → <8 óra
- "Megtaláltam, amit kerestem" rate az archívumban: stáb-felmérés (most: ?, cél: 90%+)
- Új szakértő onboarding: 3-6 hónap → 4-8 hét
- Heti megtakarított adminisztratív óra: 0 → 8-12 óra

---

## GDPR keret — KRITIKUS

A mediációs ülések **különleges adatkategória** (családi krízis, gyermekek). Kötelező:
- **Anthropic DPA** aláírva a Claude for Nonprofits / Team szerződés keretében
- **Anonimizálás minden promptba**: *"Anya (35), apa (38), 2 gyerek (5, 8)"* — soha nem teljes név
- **Audit log** Claude Team-mel — ki mit kérdezett dokumentálva
- **AI sosem ad terápiás tanácsot** közvetlenül — csak stábnak munka-asszisztens
- **Hangfelvétel kezelése**: lokálisan átírva, az átirat anonimizálva, eredeti hangfelvétel titkosított diszkre, nem felhőbe

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €18-50/hó | 1-2 Pro fiók |
| 6-12 hónap | €100-200/hó | Claude Team 4-7 user |

**ROI:** heti 8-10 óra megtakarítás → ~160-200 000 Ft/hó. Team csomag <100 000 Ft. **Pozitív ROI 1 hónap.**

---

## Következő lépés

1. Vezetői + DPO megbeszélés (kötelező első lépés)
2. AI sáfár kijelölése (javaslat: koordinátor vagy 1 mediátor)
3. Claude for Nonprofits jelentkezés
4. Adatvédelmi tisztviselő bevonása a GDPR kerethez
5. Quick win pilot: mediációs jegyzőkönyv 1 mediátorral 30 napra

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
