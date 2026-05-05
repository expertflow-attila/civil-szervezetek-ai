# Csomag #3 — Pályázatírás workflow (Claude Code CLI)

**Mit kapsz:** Egy működő Claude Code workflow, amely **strukturált, kódszintű** munkafolyamattal készít új pályázatot. A korábbi nyertes pályázatok + alapító okirat + 2024-es statisztikák alapján a Claude Code **fájlokat olvas, fájlokat ír**, és iteratívan finomítja a pályázatot. **12-25 órás munka helyett 5-10 óra** — és a verzió-kontroll is megvan (git).

**Kinek:** pályázatfelelős vagy adminisztratív vezető, aki **kényelmes a terminállal** vagy VS Code-dal, és szeretne **strukturált kódszintű AI-munkát** csinálni — nem csak chat-et.

**Idő setup-ig:** 10 perc (Claude Code letöltés + repo klónozás). **Idő első értékig:** 1-2 óra (1 BGA pályázat 1. verziója).

---

## Miért Claude Code?

A Claude Project (Csomag #1) **chat-alapú** — gyors válaszra jó. A Claude Code **kódszintű**:

- **Fájlokat olvas** (`Read`): minden korábbi nyertes pályázat, alapító okirat, statisztika
- **Fájlokat ír** (`Edit`, `Write`): a kész pályázat-fájlt strukturáltan
- **Git verziók**: minden iteráció commit-ban, könnyű visszagörgetni
- **Több turn**: napokon át ugyanazon a pályázaton dolgozhat
- **Strukturált**: fejezet-fejezet építés, részleges feladatok delegálása

Pályázatírásra **ideális**, mert egy 25-oldalas pályázat sok dokumentumot fűz össze, és iteráltan kell finomítani.

---

## 5 lépés a működő rendszerig

### 1. Töltsd le Claude Code-ot

[claude.com/claude-code](https://claude.com/claude-code) → terminál parancs:

```bash
npm install -g @anthropic-ai/claude-code
# vagy a hivatalos installer-rel
```

Bejelentkezés Claude Pro / Team / Claude for Nonprofits fiókkal:

```bash
claude login
```

### 2. Klónozd a repót lokálisan

```bash
git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git
cd civil-szervezetek-ai/05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga
```

### 3. Nyisd meg Claude Code-ot

```bash
claude .
```

A Claude Code **átolvassa** a `CLAUDE.md` fájlt automatikusan (a projektben benne van) — ezzel kontextust kap a Magyar Élelmiszerbankról.

### 4. Másold be a session-promptot

A `session-prompt.md` az első kérés a Claude Code-nak. Másold be a Claude Code-terminálba:

```
Készítsd el az 1. verziót a 2026-os BGA pályázatra "Önkéntes-toborzás vidéken" témában. Olvasd el a sample-fajlok/-ban található 2 korábbi nyertes pályázatot, az alapító-okirat.md-t, és a statisztikak/2024.csv-t. Az output a palyazatok/2026-bga-onkentes-toborzas.md fájlba kerüljön. ...
```

### 5. Iteráltatok

A Claude Code **több lépésben** dolgozik:
1. Beolvassa a forrásokat
2. Megírja az 1. verziót
3. Te átolvasod, finomítási promptokkal kéred a változtatásokat
4. Git commit-ban elmented az iterációkat

---

## Mit fog csinálni

A Claude Code:

1. **Olvas**: `sample-fajlok/nyertes-2024-bga-elelmezesbiztonsag.md`, `nyertes-2025-bga-aruhazak.md`, `alapito-okirat.md`, `statisztikak/2024.csv`
2. **Ír**: `palyazatok/2026-bga-onkentes-toborzas.md` (teljes 8-10 oldalas pályázat)
3. **Strukturál**: a kötelező BGA-szekciók szerint (helyzet, célok, módszer, költségvetés, hatás-mérés, sustainability)
4. **Hivatkozik**: minden szám forrással (CSV-sor, korábbi pályázat oldalszám)
5. **Jelöli a hiányzó adatot**: `[HIÁNYZIK: kérdezd a stábtól]`

---

## Várható teljesítmény

- **Most**: 12-25 óra/pályázat
- **AI-asszisztált (Claude Code)**: 5-10 óra/pályázat (1-2 óra első verzió + 3-7 óra finomítás)
- **Megtakarítás**: ~60% idő, **plusz** verzió-kontroll, **plusz** újrahasznosíthatóság (a BGA-csomag a következő évben is működik)

---

## Mire számíts a 2. hónapban

- **EFOP, NEA, EU pályázatok** ugyanezzel a workflow-val — csak más sablon a `nyertes-pelda-*` mappában
- **Közhasznúsági éves beszámoló (iFORM 2026-tól)** — szintén Claude Code-ban, hasonlóan
- **Új csapat-tag onboarding**: a pályázat-csapat új tagja Claude Code-on belül kérdez a régi pályázatokról

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`

**Vissza:** [Élelmiszerbank főoldal](../../) · [Hub](../../../)
