# Lépésről lépésre — Tagi email-triage setup

**Idő összesen:** 15 perc. **Idő első értékig:** 30 perc.

---

## 1. Claude Desktop telepítés

[claude.ai/download](https://claude.ai/download) → letöltés + bejelentkezés Pro / Team / Nonprofits fiókkal.

## 2. Gmail MCP konfigurálás

A NOE szervezet csomagjának `03_claude_desktop_config.json` tartalmazza a Gmail MCP-t. **Csak egy konkrét label-hez** add hozzáférést (`tagok_2026/`):

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

> ⚠️ **`GMAIL_AUTO_SEND=false` KÖTELEZŐ** — auto-küldés tilos.

Másold a `claude_desktop_config.json`-t a megfelelő helyre (Mac: `~/Library/Application Support/Claude/`, Windows: `%APPDATA%\Claude\`).

## 3. Gmail-fiók authorizálás

Első futtatáskor a Gmail MCP kér engedélyt a Gmail-fiókodhoz. **Bejelentkezés** → **Allow** csak a `tagok_2026` label-hez.

## 4. Restart Claude Desktop

Settings → Developer → MCP Servers: `gmail ✓` aktív.

## 5. Reggeli rutin

Új beszélgetés → másold be `system-prompt.md` + `promptok/prompt-01-reggeli-triage.md` tartalmát.

🎉 **30-50 emailre 30-60 másodperc alatt** kapsz strukturált triage-et.

---

## Mit látsz

```
[Email 1: "Új tagcsalád szeretnénk lenni" — 9:42]
  Kategória: tagsag-felvetel
  Sürgősség: normál
  Válasz-vázlat: "Köszönjük az érdeklődést! ..."

[Email 2: "Jogi tanács családi pótlékhoz" — 10:15]
  Kategória: jogi-tanácsadás
  Sürgősség: ⚠️ MAGAS (irányítás)
  Válasz-vázlat: "Köszönjük a megkeresést. Kollégánk 24 órán belül..."
...

Összesen: 30 email
- ⚠️ 3 magas
- 22 normál
- 5 alacsony
```

A koordinátor **5-10 perc** alatt átfut, **gombnyomással** elküldi a vázlatokat (ahol jó), 30 mp finomítás ahol nem.

---

## Hiba

| Probléma | Megoldás |
|----------|----------|
| `Gmail MCP not found` | Restart Claude Desktop |
| `Permission denied` | Gmail OAuth újraindítás |
| `Label not found` | A `tagok_2026/` label létezik a Gmail-en? Hozd létre. |
