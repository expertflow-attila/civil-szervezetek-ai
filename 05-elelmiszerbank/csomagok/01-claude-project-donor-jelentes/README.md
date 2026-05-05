# Csomag #1 — Donor-jelentés Claude Project

**Mit kapsz:** Egy működő Claude Project setup, amely **percek alatt** kiad egy 1. verziós havi donor-jelentést bármelyik áruházlánc-partnernek (Tesco, Auchan, Aldi, Lidl, Penny, Metro, KFC). 10-20 órás munkából **5-10 perces feladat**.

**Kinek:** kommunikációs / CSR-felelős az Élelmiszerbankon, aki **éppen most** akar elkezdeni AI-t használni.

**Idő setup-ig:** 5 perc. **Idő első értékig:** 10 perc.

---

## 5 lépés a működő rendszerig

### 1. Nyiss egy Claude Project-et

[claude.ai/projects](https://claude.ai/projects) → "Create Project". Adj neki nevet: **"Élelmiszerbank — Donor-jelentés"**.

> Ha nincs Claude Pro / Team fiókod, futasd a `04_claude_nonprofits_jelentkezes.md`-t a szervezet csomagjából — 2-4 hét átfutás után ingyenes / kedvezményes hozzáférés.

### 2. Másold be a system promptot

A Project-ben kattints a **"Custom Instructions"** mezőre, és illeszd be a `system-prompt.md` teljes tartalmát. **Mentés.**

Ez tartalmazza: az Élelmiszerbank 2024-es számait (10 685 tonna, 27,5M kg CO2, 243 919 nélkülöző), a 7 áruházlánc-partner riport-formátumát, a hangnem-iránymutatást, és a tilos-listát ("ne találj ki konkrét számot").

### 3. Tölts fel sample fájlokat a Project-hez

A **"Project Files"** szekcióban tölts fel:

- `sample-fajlok/tesco-export-2026-aprilis.csv` — anonim minta SmartFront-export
- `sample-fajlok/auchan-export-2026-marcius.csv` — másik példa
- `sample-fajlok/nyertes-pelda-tesco-riport.md` — egy korábbi nyertes Tesco-riport sablon

> Éles használatban a saját SmartFront-exportodat töltöd fel — anonimizálva (partner-szervezet konkrét neve helyett "fővárosi gyermekellátó").

### 4. Másold be az első promptot

A Project-en belül indíts egy új beszélgetést, és illeszd be `elso-prompt.md` tartalmát. Pl.:

```
Készítsd el a Tesco 2026 áprilisi donor-riportját a sablon alapján,
a tesco-export-2026-aprilis.csv adatainak felhasználásával.
```

### 5. Kapod az 1. verziót — finomítod

Másodperceken belül megérkezik a riport. **A kommunikációs felelős átolvassa, finomítja**, és továbbküldi a Tesco CSR-csapatának.

---

## Mit kell várnod

A `varhato-eredmeny.md` fájl megmutatja **konkrétan** mit fog adni a Claude — egy mintaválasz teljes formájában, hogy lásd, **MŰKÖDIK**.

---

## Mire számíts a 2. hónapban

- **Auchan-sablon felvétele**: ugyanezzel a Project-tel, csak fel kell tölteni 1 nyertes Auchan-riport sablont és módosítani a system promptot.
- **Heti dashboard automatizálás** (lásd Csomag #4)
- **Pályázatírás** ugyanezen a Project-en (lásd Csomag #3) — vagy külön Project-ben

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`

**Vissza:** [Élelmiszerbank főoldal](../../) · [Hub](../../../)
