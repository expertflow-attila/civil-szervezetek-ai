# Dévény Anna Alapítvány + Pető Intézet támogatói kör
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

A Dévény Anna Alapítvány a koraszülött és sérülten született gyermekek korai fejlesztésével foglalkozik a **DSGM módszerrel**, gyógytornász posztgraduális képzést szervez, és családokat támogat. A Pető Intézet támogatói köre hasonló profilú: konduktív pedagógia, fogyatékos gyermekek családjai. A napi működés **dokumentum-intenzív**: NEAK eszközigénylések családonként egyedi indoklással, pályázatok (BGA, EFOP, NEA, vállalati CSR, EU), nemzetközi szakirodalom követése, adományozói kommunikáció.

A modell sajátossága: **terapeuta-stáb + szülői hálózat + nemzetközi szakmai kapcsolat**. A terapeuták adminisztratív terhe enormous: minden gyermeknek egyedi, indoklásos NEAK-kérelem kell, ami **családonként 4 órás munka**.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| NEAK eszközigénylés (családonkénti) | heti 5-15 | 4 óra/család | óriási |
| Pályázatírás (BGA, EFOP, NEA, EU, CSR) | 6-12/év | 12-25 óra/db | óriási |
| Nemzetközi szakirodalom követés (CP, koraszülött) | havi | 4-8 óra | nagy |
| Adományozói kommunikáció | havi | 8-12 óra | közepes |
| Új gyógytornász onboarding (DSGM képzés) | folyamatos | 6-12 hónap | nagy |
| Szakmai szakcikk-fordítás (angol→magyar) | havi 2-4 | 2-4 óra/cikk | közepes |
| Szülői konzultáció dokumentáció | heti 10-20 | 30-45 perc/ülés | közepes |

**Heti összesen:** 30-50 óra adminisztráció a stábtól, plusz a terapeuták egyedi NEAK-munkája.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **NEAK eszközigénylés-asszisztens** (sablon + anonim előzmény) | 4 óra/család | 30 perc/család | **~88%** |
| 2 | **Pályázatírás** (BGA, EFOP, vállalati CSR, EU) | 12-25 óra/db | 5-10 óra/db | **~60%** |
| 3 | **Nemzetközi szakirodalom követése** (CP, koraszülött) | 4-8 óra/hó | 1-2 óra/hó | **~75%** |

---

## Egyedi Dévény / Pető quick win — NEAK eszközigénylés-asszisztens

A Claude Desktop a `nyertes_kerelmek/` mappa korábbi sikeres igénylései alapján megírja az új gyermek anonim adataiból az igénylést, indoklással. Az alapítvány csak ellenőrzi és továbbítja. **Családonkénti 4 óra → 30 perc**, és a **sikerarány nő**, mert következetesebb a szövegezés (a NEAK ügyintézők ismerős szerkezetű érveléssel találkoznak).

Egy heti 10 NEAK-kérelmes terapeuta számára: **35+ óra megtakarítás hetente**.

---

## 5 use case, amire nem gondoltak

1. **DSGM-tudásbázis (NotebookLM)** — magyar és nemzetközi DSGM szakirodalma kérdezhetővé. Új gyógytornász-onboarding 6-12 hó → 3-4 hó.
2. **Anonimizált családi történet generátor** (donor-riportokhoz) — sablon-anonim történetek érzelmi hatással, sosem konkrét család.
3. **Szülői konzultáció ülés-összefoglaló** — diktált 5-perces összefoglalóból strukturált jegyzet.
4. **Cerebral Palsy nemzetközi research havi digest** — Claude havonta összefoglalja a 10-15 új PDF lényegét magyarul, APA-hivatkozással.
5. **Eszköz-újrahasznosítás matching** — családok közt — anonim profil-pár ajánlat (kinek nőtt ki egy eszköz, kinek lenne szüksége rá).

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár + DPO meeting, Claude Desktop, **NEAK pilot 5 családdal**, mérés.
**Csapat (Hét 5-8):** Pályázatírás-asszisztens 1 BGA pályázattal A/B (5-6), DSGM tudásbázis NotebookLM (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** Minden NEAK-kérelmes terapeuta bevonva, CP nemzetközi digest pilot, donor-riport sablon, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0 (jelentkezés szükséges)
- **Claude Desktop** + Filesystem MCP — lokális, anonim NEAK feldolgozás
- **Claude Project** (pályázatok) — minden korábbi pályázat + alapító + statisztikák
- **Google NotebookLM** — DSGM szakirodalma + nemzetközi CP kutatás
- **DeepL Pro** (€7-30/hó) vagy Claude — angol szakcikk → magyar

**Skálázás:** Claude Pro/Team a stábnak (~€25-150/hó).

---

## 6 hetes mérőszámok

- NEAK eszközigénylés átlagos elkészítési ideje: 4 óra → 30 perc
- NEAK kérelem sikeraránya (előtte vs. utána): mérve A/B módban
- Pályázatírási idő (1 BGA): 12-15 óra → 5-7 óra
- Nemzetközi cikk-feldolgozás havi átlaga: 1-2 → 4-6
- Új gyógytornász onboarding: 6-12 hó → 3-4 hó

---

## GDPR keret — magas

Egészségügyi adat **különleges adatkategória** (GDPR 9. cikk). Kötelező:
- **Anonimizálás**: *"6 hetes koraszülött lány, 1200g születési súly, jelenlegi tünetek..."* — soha nem TAJ-szám, név, anya neve
- **Anthropic DPA** aláírva a Claude for Nonprofits / Team szerződés keretében
- **Helyi fájltárolás** az anonimizálatlan eredeti dokumentumoknak (titkosított merevlemez)
- **Szülői beleegyezés** módosítása: jelezni, hogy az alapítvány AI-eszközöket használ az adminisztrációban, anonimizált formában
- **Audit log** Claude Team-mel havi review

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0-15/hó | Claude for Nonprofits + esetleg DeepL |
| 3-6 hónap | €25-75/hó | 1-2 Pro fiók |
| 6-12 hónap | €100-150/hó | Claude Team 4-6 user |

**ROI:** heti 15-20 óra megtakarítás (csak NEAK!) ≈ 300-400 000 Ft/hó. Team csomag <100 000 Ft. **Pozitív ROI 1 hónapnál előbb.**

---

## Következő lépés

1. Vezetői + DPO megbeszélés (1 óra)
2. AI sáfár kijelölése (javaslat: pályázatfelelős vagy adminisztratív vezető)
3. Claude for Nonprofits jelentkezés
4. Quick win pilot: NEAK eszközigénylés-asszisztens 5 családdal 30 napra
5. Mérés: ha sikeres → minden családra kiterjeszteni 60. napra

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
