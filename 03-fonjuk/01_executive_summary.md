# Fonjuk Egymás Hálóját Egyesület
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05 · **Terjedelem:** 3-4 oldal

---

## Helyzet

A Fonjuk Egymás Hálóját Egyesület krízisben lévő szülők peer-alapú támogató hálózata. A működés különlegessége: **kis stáb + kiterjedt sorstársi mentor-rendszer**, ahol a koordinátor szerepe kritikus a krízishelyzetbe került szülő gyors és diszkrét eligazításában (gyermekvédelmi jelzőrendszer, családok átmeneti otthonai, regionális krízisközpontok, anyaotthonok). A munka **kiemelten érzékeny adatokkal** dolgozik, ezért az AI bevezetésnél a GDPR és az etikai keret minden technikai döntés előtt áll.

A koordinátor mentális terhelése a kritikus mérőszám: krízis-megkeresés érkezik, és **15-30 percig kell stresszhelyzetben keresgélni**, hogy hova küldje a szülőt. Az aktuális ellátási kapacitások, telefonszámok, papír-igények változnak — a memória nem segít.

---

## Napi munka térkép

| Feladat | Gyakoriság | Időigény | Terhelés |
|--------|-----------|---------|---------|
| Krízis-megkeresés stresszhelyzeti eligazítás | napi 2-5 | 30-60 perc/eset | óriási |
| Mentor-mentee párosítás | heti 2-5 | 1-2 óra/párosítás | nagy |
| Mentor-coaching ülések adminisztrációja | heti 4-6 | 30-60 perc/ülés | közepes |
| Pályázatírás (NEA, vállalati CSR) | 3-5/év | 8-15 óra/db | nagy |
| Adományozói riport | havi/negyedéves | 4-8 óra | közepes |
| Szakmai továbbképzés szervezés | havi | 3-5 óra | közepes |

**Krízismunka után a koordinátor stresszhormon-szintje órákig magas marad** — ezt nem lehet adminisztrációval menteni. Ezért az AI feladata: a **stresszhelyzeti reakció-időt csökkenteni**, hogy kevesebb idő teljen el a krízisben.

---

## A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Most | AI-asszisztált | Megtakarítás |
|---|----------|------|---------------|--------------|
| 1 | **"Krízis-eligazító" NotebookLM** (intézmények, ellátóhelyek, hatóságok) | 30 perc keresgélés stresszben | <30 másodperc | **~95%** |
| 2 | **Mentor-mentee párosítás javaslat** (anonim profil-egyezés) | 1-2 óra/párosítás | 5 perc + koordinátor döntés | **~85%** |
| 3 | **Pályázat + adományozói riport** (NEA, CSR) | 8-15 óra/anyag | 3-6 óra/anyag | **~60%** |

---

## Egyedi Fonjuk quick win — Belső krízis-eligazító NotebookLM

Egy zárt notebook, amibe feltöltjük:
- A gyermekvédelmi jelzőrendszer szabályait
- A regionális családok átmeneti otthonai listáját elérhetőséggel
- Az anyaotthon-helyek aktuális elérhetőségét (havonta frissítve)
- Sürgős szociális ellátási útmutatókat
- Visszaélés-jelentő intézmények kontaktjait

**Krízishelyzetre adott reakcióidő 2 óra → 5 perc**, mert a koordinátor azonnal megtalálja, hova küldje a szülőt — magyarul, forrás-hivatkozással. **A koordinátor mentális terhelése csökken** — kritikus a kiégés-megelőzéshez.

---

## 5 use case, amire nem gondoltak

1. **Mentor-coaching jegyzet-strukturáló** — a havi mentor-coachings utáni 30-perces összefoglaló helyett 5-10 perces strukturált jegyzet.
2. **Anonim eset-statisztika éves jelentéshez** — 200-500 anonim eset aggregálása NEA-pályázatokhoz forrás-hivatkozással.
3. **"Mentor-burnout" early warning** — a havi check-in válaszokból mintázat-keresés, mely mentor van kiégés közelében.
4. **Pályázati hatás-történet generátor** — anonim anonim sablon-történetek egy donor-riportba (sosem konkrét családot kitalálva).
5. **Sajtó-megkeresés válasz-vázlat** — bántalmazás / krízis-szülő témákban professzionális, óvatos hangnem.

---

## 12-hetes fokozatos bevezetés

**Pilot (Hét 1-4):** AI sáfár + DPO megbeszélés (kötelező), Claude Desktop telepítés, **krízis-eligazító NotebookLM** építése (1 hónap alatt), mérés.
**Csapat (Hét 5-8):** Mentor-mentee matching pilot (5-6), 1 NEA pályázat AI-vel (7), GDPR-protokoll formálisan (8).
**Skálázás (Hét 9-12):** Eset-statisztika anonim aggregátor, mentor-burnout pilot, adományozói riport sablon, skálázási döntés.

---

## Eszköz-stack — minimális, biztonságos

- **Google NotebookLM** (ingyenes) — krízis-eligazító tudásbázis (offline, NEM tartalmaz egyéni esetadatot)
- **Claude for Nonprofits** (ingyenes — jelentkezés szükséges)
- **Claude Desktop** + Filesystem MCP — lokális gépen, anonimizált eset-támogatás (semmi nem megy felhőbe semmihez kötötten)
- **NEM cloud-szinkronizált tárhely** az ügyfél-eset adatoknak. Lokális merevlemez, titkosítva (FileVault Mac / BitLocker Windows).

---

## 6 hetes mérőszámok

- Krízishelyzetre adott elsődleges reakcióidő: 30 perc → <5 perc
- Sikeres mentor-mentee párosítások aránya: most → cél (önbevallás)
- Koordinátor mentális terhelése (önbevallásos heti 1-5 skála): mérés
- Új mentor onboarding ideje: most → cél
- Heti megtakarított adminisztratív óra: 0 → 6-10 óra

---

## GDPR és etikai keret — KÖTELEZŐ (kritikus)

Ez a szervezet **nem hivatalos krízisellátó**, hanem peer-támogatás. Ezért:

1. **AI SOHA nem érintkezik közvetlenül a krízishelyzetű szülővel** — nincs chatbot, nincs automata válasz. Az AI csak a koordinátor és a mentorok belső munka-asszisztense.
2. **Anonimizálás minden promptban**: sosem teljes név, lakcím, gyermek neve. *"Anya (32), 2 gyerek (3, 7), bántalmazó kapcsolatból menekül, fővárosi"* — ennyi.
3. **Lokális fájltárolás** az eset-jegyzeteknek. Drive vagy iCloud TILOS érzékeny eset-adatra.
4. **Krízisjelzés humán protokoll**: ha bárhol felmerül öngyilkossági / bántalmazási akut veszély → AZONNALI humán beavatkozás, AI csak utólag dokumentál.
5. **DPO megerősítése** kötelező a bevezetés előtt.
6. **Audit log Claude Team-mel** — havi review.

---

## Költség-kalkuláció

| Időszak | Költség | Megjegyzés |
|---------|---------|------------|
| 0-12 hónap | €0-30/hó | NotebookLM ingyenes + Claude for Nonprofits + esetleg 1 Pro fiók |

**ROI nem pénzben mérhető** — a koordinátor mentális kapacitása és a krízis-szülő gyorsabb eligazítása a fő érték.

---

## Következő lépés

1. **Vezetői + DPO megbeszélés** az etikai keretről (kötelező első lépés)
2. **Kizárólag belső, lokális használat** kimondása írásban
3. Claude for Nonprofits jelentkezés
4. Quick win pilot: krízis-eligazító NotebookLM összeállítása 1 hónap alatt
5. 30 nap után: mérés + döntés

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
