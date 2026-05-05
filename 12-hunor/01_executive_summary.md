# Magyar Máltai Szeretetszolgálat Mentőszolgálata
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Megjegyzés

Az eredeti listán "HUNOR Mentőszervezet" szerepelt — a kutatás kimutatta, hogy ez **NEM civil szervezet**, hanem a Belügyminisztérium Országos Katasztrófavédelmi Főigazgatóság (OKF) alá tartozó hivatásos állami szerv (160 fő, INSARAG Heavy minősítés). A "civil önkéntes katasztrófa-mentő" profilra a **Magyar Máltai Szeretetszolgálat Mentőszolgálata** illik (~500 önkéntes, 110 000+ ellátott, 30+ év, polgári védelem + egészségügyi + pszichológiai). A folder slug megmaradt `12-hunor` (URL-stabilitás), de tartalom MMSZ Mentő.

---

## Helyzet

A **Magyar Máltai Szeretetszolgálat Mentőszolgálata** 30+ éve működik, **~500 önkéntes**, indulás óta **110 000+ ellátott**. Polgári védelem + egészségügyi + pszichológiai feladatok. Eseti és rendszeres bevetések — árvíz, hóhelyzet, nagy esemény-biztosítás, autóbalesetes elsősegély, hajléktalan-támogatás.

A modell sajátossága: **önkéntes-vezérelt**, **képzett önkéntesek** (egészségügyi, mentális, polgári védelem). Bevetés-utáni dokumentáció, képzési protokoll, biztosítási és szakmai jelentés mind kötelező — **az adminisztráció bevetés után stresszhormon-szint mellett zajlik**.

A működés financiális logikája: az MMSZ ernyőszervezete + saját pályázatok + magán-adományozók. Donor-kommunikáció rendszeres.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Bevetés-utáni szakmai jelentés (AAR) | minden bevetés (heti 3-10) | 1-3 óra/eset | nagy |
| Önkéntes-koordináció (~500 fő) | folyamatos | 8-12 óra/hét | nagy |
| Képzési protokoll-frissítés | havi 2-4 | 4-6 óra/db | közepes |
| Pályázatírás (BGA, NEA, EU, magán) | 4-8/év | 12-25 óra/db | nagy |
| Donor-kommunikáció | havi | 8-12 óra | közepes |
| Új önkéntes onboarding | folyamatos | 40-80 óra/fő (képzés) | óriási |
| Biztosítási / szakmai jelentés (kötelező) | minden bevetés | 30-60 perc/eset | közepes |
| Sajtó- és közösségi média | heti | 4-6 óra | közepes |

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **Bevetés-utáni AAR jelentés** (diktált → strukturált) | 1-3 óra/eset | 15-30 perc/eset | **~80%** |
| 2 | **Új önkéntes onboarding videó-kurzus** | 40-80 óra | 20-40 óra | **~50%** |
| 3 | **Pályázatírás Claude Project-tel** | 12-25 óra/db | 5-10 óra/db | **~60%** |

---

## Egyedi MMSZ Mentő quick win — Bevetés-utáni AAR jelentés

Minden bevetés után **kötelező a szakmai jelentés** (After-Action Review): mi történt, mit kellett volna másképp, milyen taktikai következtetések. **Önkéntes 1-3 óra adminisztrációval** zárja a bevetést — pont akkor, amikor stresszhormon-szint magas és kimerült.

**AI-asszisztált:** Bevetés után **5 perc diktált összefoglaló** (iPhone diktafon vagy Otter.ai). Claude strukturálja: helyzet, beavatkozás, eredmény, tanulság, javaslat. **Önkéntes-szintű 15-30 perc**, és a jelentések **konzisztensebbek** — éves AAR-aggregálás sokkal pontosabb. **Plus mentális kíméltség** az önkéntesnek.

---

## 5 use case, amire nem gondoltak

1. **Önkéntes-burnout early warning** — havi check-in válaszokból mintázat-keresés. Mely önkéntes van kiégés közelében (stresszbevetés-aránya magas).
2. **Bevetési pattern keresés** — éves AAR-jelentésekből aggregált trend (szezonális, geográfiai, esemény-típus szerint).
3. **Új protokoll-frissítés**: nemzetközi katasztrófa-mentő best practices (angol → magyar) havi NotebookLM digest.
4. **Donor-jelentés egyedileg** (cég-specifikus mini-riport) — milyen bevetésnél hova ment a támogatás.
5. **Önkéntes-onboarding videó-kurzus** — 40-80 órás képzés interaktív verzióban, AI-Q&A NotebookLM-ben.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár (parancsnok-helyettes vagy szakmai vezető), Claude Desktop, **AAR jelentés** 5-10 önkéntessel, mérés.
**Csapat (Hét 5-8):** Új önkéntes onboarding kurzus indul (5-6), 1 BGA pályázat AI-vel (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** Mind ~500 önkéntesre kiterjesztés (fokozatosan), bevetési pattern dashboard, donor-mini-riport, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0
- **Claude Desktop** + Filesystem MCP — sablonok, korábbi AAR-ek
- **Otter.ai** — bevetés-utáni 5-perces diktálás
- **Claude Project** — szervezet tudásbázisa + nemzetközi katasztrófa-mentő anyag
- **Google NotebookLM** — protokoll-frissítések, képzési anyag

**Skálázás:** Claude Team 7-15 user (~€140-525/hó) ha bizonyul ROI.

---

## 6 hetes mérőszámok

- Bevetés-utáni AAR idő: 1-3 óra → 15-30 perc
- Új önkéntes onboarding ideje: 40-80 óra → 20-40 óra
- AAR-jelentés következetessége (önbevallás, 1-5): mérve, +1-2 pont várt
- Pályázatírási idő (1 BGA): 18-22 óra → 8-12 óra
- Heti megtakarított adminisztratív óra (csapat): 0 → 20-40 óra

---

## GDPR keret — közepes

A Mentőszolgálat **bevetésen ellátott személyek adatai** érzékenyek (egészségügyi, pszichológiai). 

1. **Anonimizálás minden promptba**: sosem teljes név, lakcím, TAJ-szám, állapot-leírás konkrétan. Strukturális helyzet.
2. **Bevetés-utáni AAR**: anonim módon, csak az operatív tanulság — nem konkrét sérült adat.
3. **Anthropic DPA** aláírva.
4. **Audit log** Claude Team-mel — havi review.
5. **Pszichológiai esetek** különleges adatkategória: lokális tárolás, sosem AI-prompt-ban.
6. **Sajtó-anyag**: az ellátottak privacy-je abszolút — sosem konkrét eset megnevezve.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €54-108/hó | 3-6 Pro fiók |
| 6-12 hónap | €140-525/hó | Claude Team 7-15 user |

**ROI:** heti 20-40 óra megtakarítás csapatra ≈ 400-800 000 Ft/hó. Team csomag <250 000 Ft. **Pozitív ROI 1 hónap.**

---

## Következő lépés

1. Vezetői döntés (MMSZ vezetés)
2. AI sáfár kijelölése (parancsnok-helyettes vagy szakmai vezető)
3. Claude for Nonprofits jelentkezés
4. Pilot use case: bevetés-utáni AAR 5-10 önkéntessel 30 napra
5. 30 napos pilot + heti retro

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
**Hivatalos szervezet:** [maltai.hu](https://www.maltai.hu) (MMSZ ernyő)
