# Csomag #2 — SmartFront elszámolás-validátor (Claude Desktop + Filesystem MCP)

**Mit kapsz:** Egy működő Claude Desktop setup, amely **automatikusan átolvassa** a partner-szervezetek SmartFront-feltöltéseit, és **kategorizálja** őket: ✓ jóváhagyható / ⚠️ gyanús / ✗ hibás. Bajdik János SmartFront helpdesk-munkáját **napi 1-2 óráról 15-25 percre** csökkenti.

**Kinek:** Bajdik János (IT lead) és a SmartFront-felelősök, akiknek **napi szinten** kell partneri elszámolásokat ellenőrizni.

**Idő setup-ig:** 15 perc (Claude Desktop telepítés + MCP konfig). **Idő első értékig:** 25 perc.

---

## Mit old meg

A Magyar Élelmiszerbank SmartFront-rendszerében **699 partner-szervezet** tölt fel pickup-onkénti elszámolást. **Áruházláncok elszámolási szabályai eltérnek**:

- **Tesco**: kg + dátum + fotó kötelező
- **Aldi**: kg + dátum + fotó + **lejárati dátum** kötelező
- **Lidl**: kg + dátum + fotó + **receipt-szám**
- **Penny**: kg + dátum + fotó + **kategória-bontás**
- **Auchan**: kg + dátum + fotó + **partner-azonosító**
- **Metro**: kg + dátum + fotó + **kosár-szintű részletes lista**
- **KFC**: kg + dátum + fotó + **napi gyakorisági jelzés**

Bajdik János **napi 1-2 órát** tölt validálással:
1. Az új feltöltések szabályfelelőssége
2. Anomáliák jelölése (rossz formátum, lejárat-anomália, hiányzó fotó)
3. A kétségesek továbbítása a partneri-koordinátornak

A Claude Desktop **prevalidálja** az új feltöltéseket — **csak a kétségeseket** küldi Bajdiknak.

---

## 5 lépés a működő rendszerig

### 1. Telepítsd a Claude Desktopot

[claude.ai/download](https://claude.ai/download) → Mac vagy Windows. Bejelentkezés Pro / Team / Claude for Nonprofits fiókkal.

### 2. Hozz létre egy `Elelmiszerbank` mappát

```bash
# Mac:
mkdir -p ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek
mkdir -p ~/Documents/Elelmiszerbank/smartfront_szabalyok
mkdir -p ~/Documents/Elelmiszerbank/smartfront_validalva

# Windows (PowerShell):
mkdir C:\Users\<user>\Documents\Elelmiszerbank\smartfront_uj_feltoltesek
# stb.
```

### 3. Másold a Claude Desktop konfigot

A `03_claude_desktop_config.json` fájl (a szervezet csomagjából) tartalmazza a **Filesystem MCP** beállítást. Másold a megfelelő helyre:

- **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Cseréld a `{{felhasznalonev}}` placeholdert a valós Mac/Windows username-re.

### 4. Indítsd újra a Claude Desktopot

A Settings → Developer → MCP Servers tab-on lásd: **filesystem** ✓ aktív.

### 5. Tölts fel sample fájlokat + indíts validálást

A `sample-fajlok/`-ból másold át:

- `partneri-feltoltes-mintak/` mappa → `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/`
- `aruhaz-szabalyok.md` → `~/Documents/Elelmiszerbank/smartfront_szabalyok/`

Aztán a Claude Desktopban indíts egy új beszélgetést, és illeszd be `elso-prompt.md` tartalmát.

---

## Mit fog csinálni

A Claude:

1. **Beolvassa** az `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/` mappa új fájljait
2. **Összeveti** az áruházlánc-szabályokkal
3. **Strukturált jelentést** ad: minden feltöltésre `✓` / `⚠️` / `✗` jelöléssel + indoklás
4. Az `~/Documents/Elelmiszerbank/smartfront_validalva/` mappába másolja a `✓`-jelölteket (Bajdik csak **a kétségeseket** nézi át)

---

## Várható teljesítmény

- **Most**: 50 feltöltés/nap, mindegyik 60-90 másodperc kézi validálás → 50-75 perc/nap
- **AI-asszisztált**: 50 feltöltés/nap, AI 30 másodperc alatt prevalidál → Bajdik csak a 8-12 `⚠️` jelöltet nézi → **15-25 perc/nap**
- **Megtakarítás**: ~70% Bajdik idejéből, ami pont SmartFront-fejlesztésre vagy partner-szervezet-coachingra használható

---

## Mire számíts a 2. hónapban

- **Heti összesítő riport** automatikusan: melyik partner-szervezet hányszor töltött fel rosszul (proaktív coaching)
- **Új áruházlánc-szabály felvétele** 5 perc alatt (csak az `aruhaz-szabalyok.md`-ben kell egy új blokk)
- **Audit log** havi review-hoz — minden validálási döntés naplózva

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`

**Vissza:** [Élelmiszerbank főoldal](../../) · [Hub](../../../)
