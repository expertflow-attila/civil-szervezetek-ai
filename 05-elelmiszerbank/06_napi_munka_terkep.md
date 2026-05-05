# Magyar Élelmiszerbank — napi munka térkép

**A stáb tipikus napjának feladatai × AI-asszisztencia mátrix**

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05

---

## Hogyan használd ezt a fájlt

Ez nem egy elméleti AI-roadmap, hanem **egy konkrét napi feladat-lista**, amit a Magyar Élelmiszerbank stábja jellemzően elvégez — mellette milyen AI-asszisztencia hogyan csökkentené az időigényt.

A célközönség: **AI sáfár** (akit kijelöltök), aki a 12-hetes pilot alatt módszeresen végigmegy ezen, és minden napi feladatnál eldönti: melyiket pilotozzuk először, melyiket utána, melyik nem fontos.

A "Terhelés" oszlop azt jelzi, mennyire nehéz / kimerítő / monoton a feladat — minél nagyobb a terhelés, annál vonzóbb az AI-segítség.

---

## Reggel (8:00–11:00) — logisztikai indulás

### 1. Áruházi felesleg-felvételi prioritás-tervezés

- **Mit:** A koordinátor megnézi mely áruházak jeleztek aznapra felesleget, hány órás csúszás van, és melyik furgon-/önkéntes-csapat menjen hova
- **Most:** ~30-45 perc, Excel + WhatsApp / Slack + áruházi koordinátor-hívás
- **AI-asszisztált:** Claude Desktop kapja meg a múlt heti adatokat + aktuális jelzéseket → javasol prioritás-sorrendet "ezt vidd ma reggel, mert romlandó / ezt délután, mert pékáru / ezt holnap, mert konzerv"
- **Megtakarítás:** ~50% (15-20 perc)
- **Terhelés:** közepes
- **Quick win pozíció:** 5. helyen javasolt — fontos, de Excel-rendszer-integrációval bonyolultabb

### 2. Partner-szervezet igénytriage

- **Mit:** A 150+ partner közül 20-40 küld napi vagy hetes igényt (mit fogadnak, mit NEM fogadnak, mikor van helyük). A koordinátor ezt összepárosítja a beérkező felesleggel.
- **Most:** ~1-1.5 óra napi, fülelve a Gmail-t és a partneri Excel-t
- **AI-asszisztált:** Claude email-triage → kategorizál, sürgősséget rendel, javasol válasz-vázlatot. A koordinátor csak jóváhagy és küld.
- **Megtakarítás:** ~75%
- **Terhelés:** nagy (sok kontextus-váltás, mentális teher)
- **Quick win pozíció:** **2. helyen javasolt** — gyors mérhető eredmény

### 3. Heti önkéntes-beosztás

- **Mit:** Hétvégi nagy-akciókhoz (Adományok Hete, raktári rendezés, áruházi gyűjtés-stand) önkéntesek beosztása képességek és időbeli rugalmasság alapján
- **Most:** Heti 3-4 óra, Excel + Google Form
- **AI-asszisztált:** Claude megkapja az önkéntes-profil-Excel + igénylő-akciókat → optimalizálási javaslat ("Anna jó pékáru-mentésben, Tamás nehéz dobozokra, Petra recepciózásra"). Koordinátor dönt.
- **Megtakarítás:** ~50%
- **Terhelés:** közepes
- **Quick win pozíció:** 8. helyen javasolt

---

## Délelőtt-délután (11:00–15:00) — adminisztratív blokk

### 4. Donor-email feldolgozás és válasz-vázlat

- **Mit:** Vállalati CSR-felelősök, magánadományozók, médiapartnerek email-jei (köszönet-kérés, együttműködési javaslat, beszámoló-igény)
- **Most:** Napi 1-2 óra
- **AI-asszisztált:** Claude triage + 80%-os válasz-vázlat. Néha csak 1 kattintás kell.
- **Megtakarítás:** ~70%
- **Terhelés:** közepes (de fontos — donor-élmény)

### 5. Donor-jelentés szövegezés

- **Mit:** Havi/negyedéves riport TESCO, Auchan, SPAR-felé. Mentett mennyiség, mely partnerek kapták, milyen családok, hatás-történet
- **Most:** Havi 8-15 óra
- **AI-asszisztált:** Claude Project a központi statisztikával + 5-10 sablon "hatás-történet" → 5-10 perc alatt 1. verzió per donor
- **Megtakarítás:** ~85%
- **Terhelés:** nagy (időszakos torló, hónap végén stresszes)
- **Quick win pozíció:** **1. helyen javasolt** — ez a gold-standard pilot use case

### 6. Pályázatírás (BGA, NEA, EFOP, vállalati CSR, EU)

- **Mit:** Évi 5-15 pályázat, mindegyik 8-25 óra
- **Most:** Egy ember 2-3 napig dolgozik egy pályázaton
- **AI-asszisztált:** Claude Project a korábbi NYERTES pályázatokkal + alapító okirat + statisztikák → 1. verzió 1-2 óra alatt. A finomítás 2-4 óra.
- **Megtakarítás:** ~65%
- **Terhelés:** óriási (kritikus, hibatűrés alacsony)
- **Quick win pozíció:** **3. helyen javasolt** — A/B teszt 1 pályázattal a pilotban

---

## Délután-este (15:00–18:00) — kommunikáció és tudásbázis

### 7. Sajtó-megkeresések kezelése

- **Mit:** Élelmiszerpazarlás, élelmiszerbiztonság, ünnepi gyűjtések témakörében évi 50-100 megkeresés
- **Most:** 30-60 perc/megkeresés, kommunikációs felelős
- **AI-asszisztált:** Claude megkapja a megkeresést + szervezet-tudásbázist + típus-válaszokat → 80%-os szakszerű vázlat 5 perc alatt
- **Megtakarítás:** ~70%
- **Terhelés:** közepes

### 8. Social media + hírlevél tartalom

- **Mit:** Heti 2-3 LinkedIn / Facebook / Instagram poszt + havi hírlevél
- **Most:** Heti 4-6 óra
- **AI-asszisztált:** Egy heti history-Excel + 2-3 fotó → Claude generál 5 platform-specifikus posztot (LinkedIn profi, Facebook érzelmi, Instagram caption hashtag-ekkel, hírlevél bevezetés, Twitter/X)
- **Megtakarítás:** ~60%
- **Terhelés:** közepes
- **Quick win pozíció:** 7. helyen javasolt

### 9. Belső tudásbázis kérdés-válasz (Claude Project)

- **Mit:** Önkéntesek, helyi koordinátorok kérdezik a központi irodát: *„hogyan szállítható -18°C-os fagyasztott 3 órán át?"*, *„mi van ha az áruház lejárati dátumot 1 napja átlépett pizzát kínál?"*
- **Most:** Központi telefon + email, 30-50% ismétlődő kérdés
- **AI-asszisztált:** Egy Claude Project, amelyben benne van az élelmiszerbiztonsági szabályzat, ÁSZF, partner-eljárás, NEAK-jegyzék (ha releváns) — minden önkéntes maga kérdezi
- **Megtakarítás:** ~80% (a központi koordinátor terhe)
- **Terhelés:** közepes (de a sok hívás zavarja a fő munkát)
- **Quick win pozíció:** 4. helyen javasolt

---

## Hetente / havonta visszatérő nagy-feladatok

### 10. Vezetői dashboard (heti / havi)

- **Mit:** Mentett tonna, partnerek száma, elért emberek, top 5 áruház, top 5 partner
- **Most:** 2-4 óra/hét
- **AI-asszisztált:** Excel-bejelentkezés → Claude generálja a heti dashboardot 5 perc alatt
- **Megtakarítás:** ~85%
- **Terhelés:** kicsi (de monoton)

### 11. Adóigazolás (1%-os SZJA-felajánlóknak)

- **Mit:** Évi 2-3 hét intenzív munka az igazolások kiküldésével
- **Most:** Heti 8-12 óra erre az időszakra koncentrálva
- **AI-asszisztált:** Sablon-merge automatizáltan, Claude-asszisztálva
- **Megtakarítás:** ~90%
- **Terhelés:** nagy (de időszakos)

### 12. Önkéntes-onboarding (új belépőnek)

- **Mit:** Bevezető videó (30-60 perc) + dokumentum-csomag + éles akció-kíséret
- **Most:** 1-2 óra/fő admin + 1 hét coaching
- **AI-asszisztált:** Videó → Claude transcript + 1-oldalas „muszáj tudnod" összefoglaló + 5 leggyakoribb félreértés
- **Megtakarítás:** ~50% (admin) + jobb minőségű első hét
- **Terhelés:** közepes

### 13. Közhasznúsági éves beszámoló (iFORM 2026-tól)

- **Mit:** Bírósági kötelező, kategóriánként szöveges leírás + statisztikák
- **Most:** Évi 30-50 óra
- **AI-asszisztált:** Activity log Excel + előző évi beszámoló → Claude 1. verzió 1 napos munka. Finomítás 5-8 óra.
- **Megtakarítás:** ~70%
- **Terhelés:** óriási (időszakos)

### 14. Partneri minőségbiztosítás (helyi szervezetek éves audit-ja)

- **Mit:** 150+ partner-szervezet közül 20-30 évente helyszíni audit, jelentés
- **Most:** 4-8 óra/audit dokumentáció
- **AI-asszisztált:** Helyszíni jegyzet → Claude formális audit-jelentés sablonra (sablon-szövegre)
- **Megtakarítás:** ~70%
- **Terhelés:** közepes

---

## Mit ne csinálj az AI-jal (tiltó lista)

1. **Soha** ne kérj az AI-tól döntést rászoruló-családok között („melyik család kapja meg" típusú kérdés). Az emberi koordinátor felelőssége.
2. **Soha** ne kérdezz az AI-tól élelmiszerbiztonsági végső döntést. A szabály egyértelmű: lejárati dátum, hűtéslánc, allergén — humán protokoll.
3. **Soha** ne küldj automatikus választ partner-szervezetnek vagy donornak ellenőrzés nélkül.
4. **Soha** ne tedd be a teljes donor-listát egy promptba. Anonimizálj („közepes méretű kiskereskedelmi lánc"), vagy NotebookLM-ben tárold zártan.
5. **Soha** ne adj az AI-nak hozzáférést a teljes Gmail-hez. Csak konkrét label-hez (pl. `partnerek_2026/`).

---

## Prioritási sorrend a 12-hetes pilotban

| Sorrend | Feladat | Indok |
|---------|---------|-------|
| 1 | Donor-jelentés-asszisztens (#5) | Legmérhetőbb megtakarítás (8-15 óra → 1-2 óra), mérési ciklus rövid |
| 2 | Partner-szervezet email-triage (#2) | Napi rendszeres, gyors visszajelzés |
| 3 | Pályázatírás-asszisztens (#6) | Nagy hatás, A/B teszt jól mérhető |
| 4 | Belső tudásbázis (#9) | Egyszeri építés, hosszú távon óriási megtakarítás |
| 5 | Áruházi prioritás-tervezés (#1) | Nagyobb komplexitás, későbbre |
| 6 | Adóigazolás-generátor (#11) | Időszakos, csak az SZJA-időszak előtt |
| 7 | Social/hírlevél tartalom (#8) | Egyszerűen pilotálható |
| 8 | Önkéntes-beosztás (#3) | Önkéntes-DB integráció kell |
| 9-14 | A többi | Skálázás során, fázis 3 alatt |

---

## A 12-hetes mérőszám-keret

Heti review minden pénteken 30 percben:
1. Mit pilotoltunk ezen a héten?
2. Mennyi időt megspóroltunk *ténylegesen* (mérve, nem becsülve)?
3. Mi nem működött?
4. Mit állítunk be jövő hétre?

A részletes mérőszámokat lásd `05_pilot_metrics.md`.

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
