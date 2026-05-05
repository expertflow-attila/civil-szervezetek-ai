# Prompt #01 — Új BGA pályázat 1. verzió

**Mire jó:** Egy új BGA-pályázat 1. verziója — szekció-szekció felépítve, korábbi nyertes pályázatok mintáján, a Magyar Élelmiszerbank 2024-es számaival alátámasztva.

**Miért hasznos:** 12-25 órás munka **1-2 órára csökken** a 1. verzióhoz.

**Mikor használd:** Új BGA pályázat felhívás megjelenésekor.

---

## A prompt — másold be a Claude Code terminálba

```
Készítsd el az 1. verziót a 2026-os BGA pályázatra "Önkéntes-toborzás vidéken — 4 raktár logisztikai kapacitás-bővítése" témában.

Forrás-olvasás (ezekből DOLGOZZ):
- sample-fajlok/nyertes-2024-bga-elelmezesbiztonsag.md
- sample-fajlok/nyertes-2025-bga-aruhazak.md
- sample-fajlok/alapito-okirat.md
- sample-fajlok/statisztikak/2024.csv

Pályázat-szerkezet:
- A CLAUDE.md "BGA-pályázat kötelező szekciói" listája szerint
- Cél: 10-12 oldal
- Output: palyazatok/2026-bga-onkentes-toborzas.md

Pályázat-projekt fókusza:
- 4 raktár (Budapest, Karcag, Alsónémedi, Veszprém) önkéntes-állományát 60-ról 100+ fő-re bővítjük
- Vidéki toborzás (Borsod, Szabolcs, Veszprém-régió)
- Cél: heti 22 ezer kg élelmiszer mozgatása zökkenőmentes

Kötelező:
- Hivatkozz a 2024-es éves számokra (10 685 tonna, 243 919 fő, 27,5M kg CO2)
- Minden konkrét szám forrással ([statisztikak/2024.csv, sor X] vagy [korábbi pályázat, oldal Y])
- Ha hiányzik adat, jelöld [HIÁNYZIK: ...]
- Költségvetés-szekció: részletes bontás (bér, képzés, járművek, üzemeltetés)
- Mérhető hatás: önkéntes-szám, mentett tonna, érintett emberek, CO2

Készíts először TOC-ot (1 lépés), aztán fejezet-fejezet a tartalmat (több lépés). Minden lépés után commit a git-be.
```

---

## Variánsok más pályázatokra

### NEA pályázat
```
Készítsd el az 1. verziót a 2026-os NEA pályázatra... [cseréld a témát + forrásokat]
```

### EU pályázat (FEAD)
```
Készítsd el az 1. verziót a 2026-os FEAD pályázatra... [cseréld]
A FEAD-formátum eltér a BGA-tól — különösen a "Indikátorok" és "Esélyegyenlőség" szekciók kötelezőek.
```
