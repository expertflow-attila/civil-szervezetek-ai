# Lépésről lépésre — SmartFront-validátor setup (Claude Desktop)

**Idő összesen:** 15-20 perc.
**Mire végzel:** kész Claude Desktop setup, amely **automatikusan átolvassa** a partner-feltöltések mappáját, validálja az áruházlánc-szabályok szerint, és csak a kétségeseket küldi Bajdik Jánosnak.

> Ez a csomag azt feltételezi, hogy **még soha nem használtál Claude Desktop-ot**. Ha igen, lépj az 5. lépésre.

---

## 1. Töltsd le Claude Desktop-ot

Menj erre az URL-re: **[claude.ai/download](https://claude.ai/download)**

A weboldal felismeri az operációs rendszered (Mac vagy Windows) és felajánlja a megfelelő letöltést.

**Mac**: `Claude.dmg` letöltés → **dupla-katt** → húzd a Claude ikonját az Applications mappába.
**Windows**: `Claude.exe` setup → **dupla-katt** → kövesd az installer-t.

> 💡 Ha "Apple cannot verify" hiba (Mac), akkor: Rendszerbeállítások → Adatvédelem → Általános → "Open Anyway".

## 2. Bejelentkezés

Indítsd el a Claude Desktop-ot. **Sign in** → ugyanazzal az email-fiókkal, amelyikkel claude.ai-t használnál.

> 💡 Ha nincs még Claude Pro / Team / Nonprofits előfizetésed, ingyenes fiókkal is működik kezdetben — de a **Filesystem MCP** funkció Pro-tól érhető el.

## 3. Hozz létre egy "Élelmiszerbank" mappát

**Mac terminálban** (Finder → Applications → Utilities → Terminal):

```bash
mkdir -p ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek
mkdir -p ~/Documents/Elelmiszerbank/smartfront_validalva
mkdir -p ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/javitando
mkdir -p ~/Documents/Elelmiszerbank/smartfront_szabalyok
```

**Windows PowerShell-ben** (Start → "PowerShell"):

```powershell
mkdir C:\Users\<felhasznaloneved>\Documents\Elelmiszerbank\smartfront_uj_feltoltesek
mkdir C:\Users\<felhasznaloneved>\Documents\Elelmiszerbank\smartfront_validalva
mkdir C:\Users\<felhasznaloneved>\Documents\Elelmiszerbank\smartfront_uj_feltoltesek\javitando
mkdir C:\Users\<felhasznaloneved>\Documents\Elelmiszerbank\smartfront_szabalyok
```

## 4. Másold a Claude Desktop konfigot

A szervezet csomagjának `03_claude_desktop_config.json` fájlja tartalmazza a **Filesystem MCP** beállítást.

**Mac:**
```bash
cp 03_claude_desktop_config.json ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows:**
```powershell
Copy-Item 03_claude_desktop_config.json -Destination "$env:APPDATA\Claude\claude_desktop_config.json"
```

**Cseréld** `{{felhasznalonev}}`-et a saját Mac/Windows username-edre. (Mac-en `whoami` parancs, Windows-on `$env:USERNAME`.)

## 5. Indítsd újra Claude Desktop-ot

**Quit** → **Open**. (Mac: `cmd+Q` aztán újranyitás.)

## 6. Ellenőrizd: Filesystem MCP aktív?

A Claude Desktopban: **Settings → Developer → MCP Servers** tab.

Látnod kell:

```
filesystem ✓ aktív
```

Ha nem aktív (✗ vagy hiányzik), nézd át a `claude_desktop_config.json` szintaxisát (JSON-érvényesség, helyes path-ok).

## 7. Tölts fel sample fájlokat

A `sample-fajlok/`-ból másold át:

- `aruhaz-szabalyok.md` → `~/Documents/Elelmiszerbank/smartfront_szabalyok/`
- `partneri-feltoltes-mintak/` mappa minden JSON-fájlja → `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/`

## 8. Első próba

Claude Desktop új beszélgetésében **másold be a `system-prompt.md` tartalmát**, aztán **másold be a `promptok/prompt-01-reggeli-validalas.md` tartalmát**.

🎉 **30-60 másodpercen belül** kapod a strukturált validálási riportot — látod, mit jóváhagyott, mit jelölt gyanúsnak, mit hibásnak.

---

## Mit látsz a felületen

```
┌─ Claude Desktop ────────────────────────────────┐
│ ⚙️ Settings → Developer → MCP Servers           │
│   ✓ filesystem                                  │
│   (✓ google-drive, gmail ha beállítva)          │
│                                                 │
│ 💬 Új beszélgetés                               │
│                                                 │
│ User: [system-prompt.md tartalom] +             │
│        [prompt-01-reggeli-validalas.md]         │
│                                                 │
│ Claude: [SmartFront elszámolás-validálás]       │
│   [tesco-bp-001-2026-04-15.json] — ✓            │
│   [aldi-bp-203-...] — ✗ HIBA                    │
│   [tesco-bp-007-...] — ⚠️ GYANÚS                │
│   ...                                           │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Ha hibát látsz

| Probléma | Megoldás |
|----------|----------|
| "Filesystem MCP not found" | `claude_desktop_config.json` szintaxis-hiba — érvényesítsd JSON-validátorral |
| "Permission denied" a mappához | Mac → Rendszerbeállítások → Adatvédelem → Files and Folders → engedélyezd Claude Desktop-nak |
| Claude nem talál fájlokat | A path tartalmazza-e a `{{felhasznalonev}}` placeholder-t még? Cseréld le. |
| "Path outside allowed dirs" | Csak a config-ban felsorolt path-ok érhetők el — ne hivatkozz `~`/szülő-mappára |

---

## Következő lépés

Most működik az alapcsomag. **A `promptok/` mappa 3 különböző feladatot** mutat be (reggeli validálás, heti coaching-jelölt-lista, audit log). Mindegyik másolható.

A **stáb-tagokkal megosztáshoz** lásd `cowork-share.md`.

A **napi automatikus rutin** (cron-szintű) beállításához lásd `schedule-rutin.md`.
