# Lépésről lépésre — Claude Code pályázatírás setup

**Idő összesen:** 15-20 perc.
**Mire végzel:** Claude Code CLI telepítve, a pályázat-csomag mappája megnyitva, és a Claude Code az 1. verziós pályázatot strukturáltan írja a `palyazatok/` mappába.

> **Ez a csomag azt feltételezi, hogy még soha nem használtál Claude Code-ot.** Ha igen, lépj a 4. lépésre.

---

## 1. Telepítsd a Node.js-t (ha még nincs)

A Claude Code-nak **Node.js 20+** kell. Ellenőrzés:

```bash
node --version
```

Ha az output `v20.x.x` vagy újabb, ugorhatsz a 2. lépésre.

Ha nincs Node.js: [nodejs.org](https://nodejs.org) → **LTS** verzió (22.x) → letöltés + installer.

## 2. Telepítsd Claude Code-ot

Mac terminálban / Windows PowerShell-ben:

```bash
npm install -g @anthropic-ai/claude-code
```

A telepítés 1-2 percig tart.

**Ellenőrzés:**

```bash
claude --version
```

Ha látsz egy verziószámot (pl. `2.1.117`), kész.

## 3. Bejelentkezés Claude-fiókba

```bash
claude login
```

A terminál megnyit egy böngésző-ablakot. Bejelentkezés Claude Pro / Team / Nonprofits fiókkal. Ha sikeres, a böngésző azt írja: *"Authentication successful"*.

## 4. Klónozd a repót

```bash
git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git
cd civil-szervezetek-ai/05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga
```

> 💡 **A `cd` parancs után** abban a mappában vagy, ahol a `CLAUDE.md`, `session-prompt.md`, és `sample-fajlok/` is.

## 5. Indítsd Claude Code-ot

```bash
claude .
```

(Pont a végén — ez azt jelenti: "indítsd a jelenlegi mappát".)

**Ami történik:**
- Claude Code beolvassa a **CLAUDE.md** fájlt automatikusan (a Magyar Élelmiszerbank kontextusát megkapja)
- Megnyit egy interaktív terminál-prompt-ot, ahova írhatsz neki

## 6. Másold be a session-prompt-ot

A `promptok/prompt-01-bga-uj-palyazat.md` tartalmát **bemásolod a Claude Code terminálba**.

🎉 **Az AI elkezd dolgozni** — több lépésben:

1. Olvassa a `sample-fajlok/`-ban a 2 nyertes pályázatot, alapító, statisztikákat
2. Strukturálja a TOC-ot (a kötelező 9 BGA-szekció szerint)
3. Megírja az 1. verziót szekció-szekció
4. **Minden szekció után git commit-ot csinál** (verziókövetés)

**1-2 óra múlva** a `palyazatok/2026-bga-uj-palyazat.md` fájlban kész az 1. verzió.

---

## Mit látsz a terminálban

```
┌─ Terminal ──────────────────────────────────────┐
│ $ claude .                                      │
│                                                 │
│ ✓ Loaded CLAUDE.md (Magyar Élelmiszerbank...)   │
│                                                 │
│ > [bemásolt session-prompt]                     │
│                                                 │
│ ─ Plan ─                                        │
│  1. Olvasom a sample-fajlok/-ban 4 forrást     │
│  2. Strukturálom a TOC-ot                       │
│  3. Megírom szekciónként                        │
│  4. Git commit-ok minden lépés után             │
│                                                 │
│ Reading sample-fajlok/nyertes-2024-bga...       │
│ Reading sample-fajlok/alapito-okirat.md         │
│ Reading sample-fajlok/statisztikak/2024.csv     │
│                                                 │
│ Writing palyazatok/2026-bga-uj-palyazat.md      │
│ git commit -m "feat: pályázat 1. szekció"       │
│                                                 │
│ ...                                             │
└─────────────────────────────────────────────────┘
```

## Ha hibát látsz

| Probléma | Megoldás |
|----------|----------|
| "command not found: claude" | `npm install -g @anthropic-ai/claude-code` |
| "Authentication required" | `claude login` |
| "Cannot find CLAUDE.md" | Biztos a megfelelő mappában vagy? `pwd` parancs |
| Lassú a Claude válasza | Normál — egy 8-12 oldalas pályázat 30-60 perc |

---

## Iteratív munka

A `promptok/` mappa **3 prompt-mintát** ad — kezdő (Step 5-höz), finomító, és lezáró. Mindegyiket Claude Code-ban használhatod.

A **Cowork** (csapatban-pályázás) lásd `cowork-share.md`.

A **Schedule** itt **NEM relevánse** (a pályázatírás egyedi, nem ismétlődő rutin).

---

## Következő lépés

Most működik — kapsz egy 1. verziós pályázatot. **Olvasd át**, finomítsd `prompt-02-finomitas.md`-vel, és **emberi pályázat-szakértő** lektorálja.

A pályázat **Word-be** konvertálható:
```bash
pandoc palyazatok/2026-bga-uj-palyazat.md -o palyazatok/2026-bga-uj-palyazat.docx
```

Aztán logót, aláírást betoldasz, és **benyújtod**.
