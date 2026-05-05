# Csomag #2 — Tagi email-triage (Claude Desktop + Gmail MCP)

**Mit kapsz:** Egy működő Claude Desktop setup, amely **a NOE központi Gmail-fiókjában** kategorizálja a napi 30-50 tagi emailt, és **válasz-vázlatokat ad** — a koordinátor csak átolvassa, finomítja, küldi. **2-3 órás napi munkából 30-45 perc.**

**Kinek:** koordinátor / adminisztratív vezető, aki naponta sok tagi megkeresést kezel.

**Idő setup-ig:** 15 perc. **Idő első értékig:** 30 perc.

---

## 5 lépés

### 1. Telepítsd Claude Desktop-ot
[claude.ai/download](https://claude.ai/download). Bejelentkezés Pro / Team / Claude for Nonprofits fiókkal.

### 2. Konfiguráld a Gmail MCP-t
A NOE szervezet csomagjának `03_claude_desktop_config.json` fájlja már tartalmazza a Gmail MCP-t. **Csak egy bizonyos Gmail label-hez** adj hozzáférést (pl. `tagok_2026/`) — NEM a teljes postaládához.

```json
"gmail": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-gmail"],
  "env": {
    "GMAIL_LABEL_RESTRICT": "tagok_2026",
    "GMAIL_AUTO_SEND": "false"
  }
}
```

`GMAIL_AUTO_SEND=false` **KÖTELEZŐ** — minden válasz vázlat marad, ember küldi el.

### 3. Indítsd újra Claude Desktop-ot
Settings → Developer → MCP Servers tab: `gmail` ✓ aktív.

### 4. Másold a system prompt-ot
`system-prompt.md` tartalmát az új beszélgetés első üzenetébe.

### 5. Indítsd a reggeli rutint
Pl.: *"Triage az új `tagok_2026/`-emaileket. Mindegyikre kategorizálj, sürgősséget rendelj, válasz-vázlatot adj."*

---

## Várható eredmény

```
[Email 1: "Új tagcsalád szeretnénk lenni" — 9:42-kor]
  Kategória: új-tag-felvétel
  Sürgősség: normál
  Válasz-vázlat:
    "Köszönjük az érdeklődést! A NOE-tagság feltétele: 3+ gyermek..."
    [+ kapcsolat-info, csatolt jelentkezési űrlap-link]

[Email 2: "Sürgős: jogi tanács családi pótlékhoz" — 10:15-kor]
  Kategória: jogi-tanácsadás (irányítás)
  Sürgősség: ⚠️ MAGAS
  Válasz-vázlat:
    "Köszönjük a megkeresést. A jogi tanácsadás a NOE jogi szolgálatához
     tartozik — kollégánk, [Név], 24 órán belül felveszi a kapcsolatot:
     jogsegely@noe.hu, +36-1-..."

[Email 3: "Hol van a NOE-kártyám 2026-ra?" — 11:08-kor]
  Kategória: tagi-kártya
  Sürgősség: alacsony
  Válasz-vázlat: ...
```

A koordinátor 2 percenként **átfut** egy emailt, **gombnyomással** elküldi a vázlatot, vagy 30 másodperc alatt finomít. **30 email = 60-90 perc** (eddig 2-3 óra).

---

## Mit NE tegyél

- **Ne** add a Claude-nak a teljes Gmail-postaládát. Csak 1 label.
- **Ne** kapcsold be `GMAIL_AUTO_SEND=true`. Auto-küldés tilos — minden válasz emberi jóváhagyással.
- **Ne** anonimizálatlan tagi adatot tegyél a promptba.

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [NOE főoldal](../../) · [Hub](../../../)
