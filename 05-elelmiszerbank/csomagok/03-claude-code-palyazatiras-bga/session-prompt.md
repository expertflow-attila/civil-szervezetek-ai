# Session-prompt — első kérés a Claude Code-nak

Mielőtt elindítod, **bizonyosodj meg róla**:
- ✓ Claude Code fut: `claude .` parancs a `csomagok/03-claude-code-palyazatiras-bga/` mappában
- ✓ A `CLAUDE.md` automatikusan beolvasva (látod a session-fejlécben)
- ✓ A `sample-fajlok/` mappában megvannak a források

---

## Az első prompt — copy-paste a Claude Code-terminálba

```
Készítsd el az 1. verziót a 2026-os BGA pályázatra "Önkéntes-toborzás vidéken — 4 raktár logisztikai kapacitás-bővítése" témában.

Forrás-olvasás (ezekből DOLGOZZ):
- sample-fajlok/nyertes-2024-bga-elelmezesbiztonsag.md (előző évi nyertes, hangnem-modell)
- sample-fajlok/nyertes-2025-bga-aruhazak.md (másik nyertes)
- sample-fajlok/alapito-okirat.md
- sample-fajlok/statisztikak/2024.csv

Pályázat-szerkezet:
- A CLAUDE.md "BGA-pályázat kötelező szekciói" listája szerint
- Cél: 10-12 oldal
- Output: palyazatok/2026-bga-onkentes-toborzas.md

Pályázat-projekt fókusza:
- 4 raktár (Budapest, Karcag, Alsónémedi, Veszprém) önkéntes-állományát 60-ról 100+ fő-re bővítjük
- Vidéki Magyarországon (különösen az alsónémedi, veszprémi raktár környékén) toborzunk
- Cél: heti 22 ezer kg élelmiszer mozgatása zökkenőmentes (jelenleg torlódás van bevizes hetekben)

Kötelező:
- Hivatkozz a 2024-es éves számokra (10 685 tonna, 243 919 fő, 27,5M kg CO2)
- Minden konkrét szám forrással ([statisztikak/2024.csv, sor X] vagy [korábbi pályázat, oldal Y])
- Ha hiányzik egy adat (pl. konkrét vidéki költség-számok), jelöld [HIÁNYZIK: ...]
- A költségvetés-szekcióban részletes bontás: bér, képzés, járművek, üzemeltetés
- Mérhető hatás: önkéntes-szám, mentett tonna, érintett emberek, CO2

Készíts először egy strukturált TOC-ot (1 lépés), aztán fejezet-fejezet a tartalmat (több lépés). Minden lépés után commit a git-be.
```

---

## Iteratív promptok

### Egy szekció átírása

```
A 4. szekció (Módszer / megvalósítás) túl elvont. Konkretizáld 5 alfejezettel:
1. Hogyan toborzunk vidéken (konkrét csatornák: helyi újság, faluközösség)
2. Önkéntes-onboarding workflow (a Csomag #2 SmartFront-validátorral kompatibilis)
3. Heti gyakorlat-rendszer (Csomag #4 dashboard alapján)
4. Mentor-rendszer (új önkéntes mellé tapasztalt)
5. Mérés és visszacsatolás (havi review)
```

### Költségvetés-finomítás

```
A költségvetés-szekciót részletezd: 8 millió Ft / év keret, ebből:
- 50%: új önkéntes képzése (vidéki utazás-támogatás, 2-napos képzés)
- 25%: 2 új koordinátori pozíció (félállás, 6 hónap)
- 15%: szoftver-eszközök (Claude for Nonprofits skálázás, SmartFront fejlesztés)
- 10%: dokumentáció, anyagok

Mindegyik tételhez 2-3 mondatos indoklást is.
```

### Hatás-mérés

```
A 7. szekció (Mérhető hatás) most általános. Tedd konkretizálttá:
- Önkéntes-szám: 60 → 100+ (mérhető: havonta jelentés)
- Mentett tonna éves: 10 685 → 12 500 (+17%)
- Érintett emberek: 243 919 → 280 000+
- CO2: 27,5M kg → 32M kg
- Vidéki raktár-átfutás: 36 órás → 24 órás (mérhető: SmartFront timestamp)

A számokat indokold a 4 raktár ütemezésével — pl. miért 12 500 tonna a reális becslés.
```

### Lezárás (a finomítások után)

```
A pályázat kész. Ellenőrizd:
- Hossza 10-12 oldal? Ha nem, finomítsd.
- Vannak-e [HIÁNYZIK: ...] jelölések? Listázd ki, mit kell még megkérdezni.
- A korábbi nyertes pályázatok hangnemét követi-e?

Készíts egy 1-oldalas vezetői összefoglalót a pályázathoz (palyazatok/2026-bga-onkentes-toborzas--exec-summary.md).
```
