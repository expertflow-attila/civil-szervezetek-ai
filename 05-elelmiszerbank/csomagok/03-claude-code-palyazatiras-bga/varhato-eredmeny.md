# Várható eredmény — mit fog adni a Claude Code

A `session-prompt.md` első prompt-ja után a Claude Code **több lépésben** dolgozik. Tipikus folyamat:

---

## 1. Forrás-olvasás (kb. 30 másodperc)

```
Olvasom a forrásokat:
✓ sample-fajlok/nyertes-2024-bga-elelmezesbiztonsag.md (8 KB, 9 szekció)
✓ sample-fajlok/nyertes-2025-bga-aruhazak.md (10 KB, 9 szekció)
✓ sample-fajlok/alapito-okirat.md (5 KB)
✓ sample-fajlok/statisztikak/2024.csv (2 KB, 26 sor)

Forrás-olvasás kész. Most strukturálom a TOC-ot.
```

---

## 2. TOC strukturálás (kb. 30 másodperc)

```
A pályázat TOC-ja:

1. Pályázó szervezet bemutatása
2. Helyzetfelmérés / probléma — vidéki önkéntes-helyzet, raktár-torlódás
3. Célok és célcsoport — 60 → 100+ önkéntes, 4 raktár
4. Módszer / megvalósítás — 5 alfejezet
5. Időbeli ütemezés — Q1-Q4 2026
6. Költségvetés — 12-15 millió Ft becslés
7. Mérhető hatás — önkéntes, tonna, érintettek, CO2
8. Fenntarthatóság — operatív integrálás
9. Kockázatok — vidéki toborzás, képzési kapacitás

Mehetünk a tartalomra?
```

---

## 3. Tartalom-építés (kb. 5-15 perc, fejezet-fejezet)

A Claude Code minden szekciót **commit**-ol git-ben:

```bash
git log --oneline | head -10

a3b4c5d feat: pályázat 1. szekció (szervezet bemutatás)
b1c2d3e feat: pályázat 2. szekció (helyzet)
c0d1e2f feat: pályázat 3. szekció (célok)
d8e9f0a feat: pályázat 4. szekció (módszer)
e7f8a9b feat: pályázat 5. szekció (ütemezés)
...
```

**Mintarészlet (4. szekció — Módszer):**

> ## 4. Módszer / megvalósítás
>
> ### 4.1 Vidéki toborzás csatornái
>
> A 2024-es 60 fős önkéntes-állomány **Budapesten 70%-ban koncentrálódik** (`statisztikak/2024.csv` — 4 raktár, kapcsolat-bontás), miközben a vidéki raktárak (Karcag, Alsónémedi, Veszprém) csak 18 fő közvetlen vidéki önkéntessel működnek. Cél: **40 új vidéki önkéntes** 2026-ban.
>
> Csatornák:
> - **Helyi újság-hirdetés** Borsodban, Szabolcsban (Veszprém-régióval párhuzamosan) — 12 régió
> - **Faluközösségi nap** szervezése (3 esemény/év)
> - **Iskolai partnerség**: középiskolákban szelektív gyűjtéses bemutató (5 iskola/év)
> - **Online toborzás**: Facebook + Instagram célzottan vidéki 18-65 célcsoport
>
> ### 4.2 Önkéntes-onboarding workflow (kompatibilis a SmartFront-validátorral)
>
> Az új vidéki önkéntes onboarding-ja **2 napos képzéssel** kezdődik (mint a 2024-es BGA-pályázatban [HIÁNYZIK: pontos képzési modul-szám]). A 2-napos képzés magában foglalja:
> - SmartFront-rendszer használata (Bajdik János)
> - Partner-szervezet-kapcsolat (Schwikker Zsófia)
> - Élelmiszerbiztonsági alapok (NÉBIH-anyagok)
> - Adományok Hete-protokoll
>
> A 2 napos képzés a 4 raktár valamelyikén zajlik **havi 1-2 alkalommal**.
>
> ### 4.3 Heti gyakorlat-rendszer
>
> [folytatás...]

---

## 4. Költségvetés-szekció (mintarészlet)

> ## 6. Költségvetés (12 millió Ft elnyert támogatás bontása)
>
> | Tétel | Összeg | Indoklás |
> |-------|--------|----------|
> | Vidéki utazás-támogatás (40 új önkéntes × 6 utazás × 5 000 Ft) | 1 200 000 Ft | Borsod-Veszprém-Karcag-Alsónémedi-régió |
> | 2-napos képzés-modul (havi 1, év: 12 alkalom × 60 000 Ft) | 720 000 Ft | élelmiszerbiztonsági szakértő + helyszín |
> | 2 új koordinátori pozíció (félállás, 6 hó × 200 000 Ft) | 2 400 000 Ft | vidéki fókusz: 1 Borsod, 1 Veszprém |
> | Helyi újság-hirdetés (12 régió × 100 000 Ft) | 1 200 000 Ft | toborzási kampány |
> | Faluközösségi nap (3 esemény × 800 000 Ft) | 2 400 000 Ft | helyszín + anyagok + ellátás |
> | Iskolai partnerség (5 iskola × 200 000 Ft) | 1 000 000 Ft | bemutató + anyagok |
> | Claude Team licenc skálázás (8 → 12 user) | 720 000 Ft | önkéntes-koordinátor új fiókok |
> | Online toborzási kampány | 600 000 Ft | Facebook + Instagram célzott |
> | SmartFront-mobil-app vidéki fókusz | 800 000 Ft | partner-szervezet kapcsolódási rugalmasság |
> | Beszámoló + audit | 960 000 Ft | iFORM 2026 |
> | **Összesen** | **12 000 000 Ft** | |

---

## 5. Befejezés (kb. 10 másodperc)

```
A pályázat 1. verziója kész. Hossz: 11 oldal (3 250 szó).
Output: palyazatok/2026-bga-onkentes-toborzas.md

[HIÁNYZIK: ...] jelölések:
- 4.2 szekció — pontos képzési modul-szám a 2024-es pályázatban
- 7. szekció — vidéki önkéntes-megtartási statisztika

Mit változtassak az 1. verzión?
```

---

## Ezt követő iteráció

Te kérsz változtatásokat (`session-prompt.md` "Iteratív promptok" szekció), és a Claude Code:
1. Olvas (a meglévő pályázat-fájlt)
2. Edit-el (a kért változtatásokkal)
3. Commit-ol git-be

Egy **átlagos pályázat-iteráció: 5-7 finomítási kör**, össz 3-5 óra.

---

## Mit csinálj ezzel a kész pályázattal?

1. **Olvasd át** a teljes pályázatot egyben — összefügg-e?
2. **A `[HIÁNYZIK:]` jelöléseket** pótold (kérdezd a stábot, frissítsd a forrásokat)
3. **Hangnem-ellenőrzés** — egyezik-e a 2024-2025 nyertesekkel?
4. **Lektor**: a finomított verziót **emberi pályázat-szakértő** lektorálja (a Claude nem helyettesít)
5. **Word/PDF konvertálás**: pandoc-cal a `.md` → `.docx`, illessz logót, aláírást, küldd be

```bash
pandoc palyazatok/2026-bga-onkentes-toborzas.md -o palyazatok/2026-bga-onkentes-toborzas.docx
```

---

## Skálázás más pályázatra

Másold a `csomagok/03-claude-code-palyazatiras-bga/` mappát:

```bash
cp -r csomagok/03-claude-code-palyazatiras-bga/ csomagok/03b-claude-code-palyazatiras-efop/
```

A `sample-fajlok/`-ban cseréld le a 2 nyertes BGA pályázatot 2 nyertes EFOP-pályázatra. **A workflow ugyanaz**.
