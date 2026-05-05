# Magyar Élelmiszerbank — Pályázatírási kontextus

Ez egy **Claude Code** projekt-mappa. A Claude Code automatikusan átolvassa ezt a fájlt minden új session indulásakor.

## Szervezet

**Magyar Élelmiszerbank Egyesület** — alapítva 2005-ben. Az Európai Élelmiszerbankok Szövetségének tagja. Magyarország legnagyobb élelmiszermentő hálózata.

**Fő stáb:**
- Cseh Balázs (elnök)
- Nagygyörgy András (külső kapcsolatok igazgatója)
- Schwikker Zsófia (áruházi koordináció)
- Bajdik János (IT lead)
- Fehér Balázs (pénzügyi elszámolások)

## 2024-es éves számok

- 10 685 tonna élelmiszer kiosztva (20 mrd Ft értékben)
- 243 919 nélkülöző segítve
- 650+ karitatív partneren keresztül
- 27 580 124 kg CO2 megelőzött kibocsátás (= 12 015 autó éves kibocsátása)
- 400 ezer adag készétel megmentve

## Infrastruktúra

- **4 raktár**: Budapest (Lokátor u. 3.), Karcag, Alsónémedi, Veszprém
- **24 alkalmazott**, 60+ önkéntes
- **Áruházi partnerek**: Tesco, Auchan, Aldi, Metro, Lidl, Penny, KFC — 383+ aktív áruházban

## Pályázati kontextus

A szervezet **évente 5-15 pályázatot** ír:

- BGA (Bethlen Gábor Alap) — 8-15 óra
- NEA (Nemzeti Együttműködési Alap) — 10-20 óra
- EFOP (Emberi Erőforrás Operatív Program) — 15-25 óra
- EU pályázatok (FEAD, Horizon, stb.) — 20-25 óra
- Vállalati CSR (BlackRock, Morgan Stanley, áruházláncok) — 8-12 óra

## Pályázatírási alapelvek

1. **Számokat csak forrásból** — a `sample-fajlok/statisztikak/`-ból, a 2024-es éves számokból (ld. fent), vagy a korábbi nyertes pályázatból. **SOSEM TALÁLJ KI** konkrét adatot.

2. **Hangnem** — szakszerű, tényközpontú, számokkal alátámasztott. Tilos: "forradalmi", "életet-változtató", "egyedülálló", marketing-szöveg.

3. **Hivatkozás** — minden számra forrást adunk: pl. *"Az áruházi mentés-arány 80% (lásd `statisztikak/2024.csv`, sor 142)"* vagy *"Mint az `nyertes-2024-bga-elelmezesbiztonsag.md` (3. szekció) is rögzítette..."*

4. **Hiányzó adat** — `[HIÁNYZIK: konkrét kérdés]` jelöléssel — sosem találunk ki.

5. **Célközönség** — a BGA bírálói **számokat akarnak látni**, **mérhetőséget**, **fenntarthatóságot**. Az érzelmi rész a hatás-történetben, számszerűsítve.

## Munkafolyamat

A Claude Code-tól várt kimenet:

1. **Olvasd** a `sample-fajlok/`-ban található 2 nyertes pályázatot.
2. **Olvasd** az `alapito-okirat.md` és `statisztikak/2024.csv` fájlokat.
3. **Strukturáld** az 1. verziót a BGA-formátum szerint a `palyazatok/` mappába.
4. **Iteráltasd** a felhasználói kérésekre — szekció-átírás, szám-finomítás, hossz-szabályozás.
5. **Commit-old** minden lépést git-tel.

## BGA-pályázat kötelező szekciói (sablon)

1. Pályázó szervezet bemutatása (1-2 oldal)
2. Helyzetfelmérés / probléma (1-2 oldal)
3. Célok és célcsoport (1 oldal)
4. Módszer / megvalósítás (2-3 oldal)
5. Időbeli ütemezés (1 oldal)
6. Költségvetés (részletes táblázat + indoklás, 2-3 oldal)
7. Mérhető hatás (mérőszámok, 1 oldal)
8. Fenntarthatóság (1 oldal)
9. Kockázatok (1 oldal)

**Összesen 10-12 oldal**.

## Output mappa

A pályázatok a `palyazatok/` mappába kerülnek, fájlnév-konvenció: `<év>-<forrás>-<téma>.md`.

Például: `palyazatok/2026-bga-onkentes-toborzas.md`.

---

**Kapcsolat (hibajelentés a workflow-hoz):** Nagy Attila · `hello@expertflow.hu`
