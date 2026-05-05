# BAGázs Közhasznú Egyesület
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

A BAGázs **2011-ben alakult** egyesületként (előzménye Both Emőke 2010-es nyári tábora). Mentor-modell roma telepi közösségi munka. **Telepek:** Bag (40 km Budapesttől, 2010 óta) és Dány (~600 fős szegregátum, 2017 óta), plus a budapesti Bagázs Bazár közösségi tér Újlipótvárosban (2018 dec.).

**Stáb:** **10 főállású munkatárs, ~120-150 önkéntes** évente, **75 család és ~250 helyi gyerek/felnőtt** közvetlen részvevő, **8 aktív program**:
- Gyermek-mentor (4 éves kortól)
- Felnőtt-mentor (2013-tól, munkavállalás, kommunikáció, önbizalom)
- Női-csoport (test-tudat, önismeret)
- **Jogklinika** (jogi tanácsadás diszkrimináció ellen — SozialMarie Díj 2016)
- Adósságkezelő program
- Gyerekprogramok
- Bagázs Bazár közösségi tér

**Hatás-mérés (Magyarország egyik legjobban dokumentáltja):**
- 7 és 10 éves módszertani összegzés (2011-2021)
- **SROI elemzés: 1 Ft befektetésre 3.27 Ft társadalmi hozam**
- Konkrét eredmény: **25 fő nyílt munkaerőpiacra jutása, +3 fő közmunkán** — Bag-i telep háztartásainak harmadában legalább 1 legális jövedelem keletkezett

**Díjak:** SozialMarie 2016, NIOK Civil Díj 2016, Etikai Adománygyűjtő 2021, **Prima Primissima 2023**, Civil Díj 2016. Támogatók: BlackRock Innovation Lab, Morgan Stanley Budapest Analytics Center.

A modell sajátossága: **mentor-koordináció + jogi tanácsadás + hatás-mérés**. A 120-150 önkéntes mentor-szerepben dolgozik — eset-jegyzeteik strukturálása nem szabványosított, az AI itt **strukturálási és aggregálási** réteget hoz.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Mentor-koordináció (120-150 fő × 2 telep) | heti | 6-10 óra | nagy |
| Mentor eset-jegyzet (heti 1-2/mentor) | heti | 30-60 perc/jegyzet | nagy |
| Jogklinika dokumentáció (jogi eset) | heti | 2-3 óra/eset | nagy |
| Pályázatírás (vállalati, EU, NEA) | 6-12/év | 12-25 óra/db | óriási |
| Donor-jelentés (BlackRock, Morgan Stanley) | havi | 8-12 óra | nagy |
| Adósságkezelő program adminisztráció | folyamatos | 3-5 óra/család | közepes |
| Hatás-mérés és SROI éves frissítés | éves | 80-120 óra | óriási |
| Sajtó-anyag (Prima Primissima utáni érdeklődés) | heti 3-5 | 1-2 óra/db | közepes |

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **Mentor eset-jegyzet strukturáló** (diktált → strukturált jegyzet) | 30-60 perc/db | 5-10 perc/db | **~80%** |
| 2 | **Donor-jelentés (vállalati pénzügyi-igényes)** | 8-12 óra/hó | 1-2 óra/hó | **~85%** |
| 3 | **Pályázatírás Claude Project-tel** | 12-25 óra/db | 5-10 óra/db | **~60%** |

---

## Egyedi BAGázs quick win — Mentor eset-jegyzet strukturáló

A 120-150 önkéntes mentor heti 1-2 jegyzetet ír a mentoráltjáról. **Mentorónként heti 30-60 perc** adminisztráció. A jegyzetek inkonzisztensek — egyik mentor strukturált, másik anekdotikus, harmadik csak címszavakat.

**AI-asszisztált:** A mentor a találkozás után 5 perc diktált összefoglalót csinál (iPhone diktafon vagy Otter.ai). A Claude strukturálja: helyzet, fejlődés, akadályok, következő találkozó témái. **Mentor-szintű 5-10 perc**, és **a jegyzetek aggregálhatóvá válnak** — éves SROI-mérés sokkal pontosabb.

**Plus**: a mentor-koordinátor heti dashboardot kap a 120-150 mentor jegyzeteiből — ki van bajban, kit kell support-olni.

---

## 5 use case, amire nem gondoltak

1. **SROI éves mérés asszisztens** — a 120-150 mentor jegyzeteiből aggregált hatás-mérés. Most évi 80-120 óra; AI-vel 30-40 óra.
2. **Adósságkezelő program család-jelentés** — családonként strukturált fejlődés-jelentés a sablon-jegyzetekből.
3. **BlackRock / Morgan Stanley pénzügyi-igényes mini-riport** — nemzetközi vállalati standard riport-formátum.
4. **Jogklinika eset-tanulmány generátor (anonim)** — diszkriminációs eseteket strukturált sablon-tanulmányokká.
5. **Roma telepi sajtó-anyag óvatos vázlat** — Prima Primissima utáni 50-100 sajtó-megkeresés évente.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár, Claude Desktop, **mentor eset-jegyzet pilot** 5-10 mentorral, mérés.
**Csapat (Hét 5-8):** Donor-jelentés vállalati formátum (5-6), 1 EU pályázat AI-vel (7), GDPR-protokoll (8).
**Skálázás (Hét 9-12):** Mind 120-150 mentorra kiterjesztés, SROI éves asszisztens, sajtó-prompt, skálázási döntés.

---

## Eszköz-stack

- **Claude for Nonprofits** — €0
- **Claude Desktop** + Filesystem MCP — sablonok, jelentések
- **Claude Project** — szervezeti tudásbázis + nemzetközi kutatás
- **Otter.ai** — mentor eset-jegyzet diktálás
- **Google NotebookLM** — Jogklinika jogi precedens-archív

**Skálázás:** Claude Team 7-12 user (~€140-420/hó).

---

## 6 hetes mérőszámok

- Mentor eset-jegyzet idő: 30-60 perc → 5-10 perc
- Donor-jelentés vállalati havi idő: 8-12 óra → 1-2 óra
- Pályázatírási idő (1 EU): 18-22 óra → 8-12 óra
- SROI éves mérés idő: 80-120 óra → 30-40 óra
- Heti megtakarított adminisztratív óra (csapat): 0 → 30-50 óra

---

## GDPR keret — magas

**Roma + család + gyermek + jogi eset = több réteg.**

1. **Anonimizálás minden promptba** — sosem konkrét család neve, telepi cím, gyermek-azonosító.
2. **Etnikai hovatartozás** — sosem említett ha nem szükséges; ha igen: aggregált statisztika.
3. **Anthropic DPA** aláírva.
4. **Audit log** Claude Team-mel havi review.
5. **Mentor eset-jegyzetek** lokálisan tárolva (titkosított diszk), aggregált formában felhőbe.
6. **Jogklinika eset-anyag** — anonim sablonon, konkrét jogi eset csak titkosított storage-ben.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-3 hónap (pilot) | €0 | Claude for Nonprofits |
| 3-6 hónap | €54-108/hó | 3-6 Pro fiók |
| 6-12 hónap | €140-420/hó | Claude Team 7-12 user |

**ROI:** heti 30-50 óra megtakarítás csapatra ≈ 600-1 000 000 Ft/hó. Team csomag <200 000 Ft. **Pozitív ROI 1 hónapnál előbb.**

---

## Következő lépés

1. Vezetői döntés (Both Emőke + alapítvány)
2. AI sáfár kijelölése (mentor-koordinátor + 1 stáb-tag)
3. Claude for Nonprofits jelentkezés
4. Pilot use case: mentor eset-jegyzet strukturáló 5-10 mentorral
5. 30 napos pilot + heti retro

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
**Hivatalos szervezet:** [bagazs.org](https://bagazs.org)
