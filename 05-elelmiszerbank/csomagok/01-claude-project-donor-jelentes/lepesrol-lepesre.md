# Lépésről lépésre — Donor-jelentés Project setup

**Idő összesen:** 8-10 perc.
**Mire végzel:** kész Claude Project, Tesco-sablonnal, ahova csak feltöltöd a havi SmartFront-export-ot, és kapsz egy 1. verziós donor-riportot.

---

## 1. Nyisd meg Claude.ai-t

> Ha még nincs fiókod: [claude.ai](https://claude.ai) → **Sign up**. Ha Claude for Nonprofits jóváhagyott (lásd `04_claude_nonprofits_jelentkezes.md`), akkor a szervezeti email-edddel jelentkezz be.

## 2. Hozz létre új Project-et

A bal oldali menüben **Projects** → **+ New Project** gomb.

**Beírni:**

- **Project név**: `Élelmiszerbank — Donor-jelentés`
- **Description** (opcionális): `Magyar Élelmiszerbank — havi donor-riport asszisztens. 7 áruházlánc-partner, anonim SmartFront-export alapján.`

> 💡 Tipp: a név fontos — ez fog megjelenni a chat-listában. Adj **konkrét, kereshető** nevet.

## 3. Custom Instructions beállítás

A Project-en belül kattints a **⚙️ Settings** ikonra (jobb felső sarok), aztán **Custom Instructions** szekcióra.

**Másold ide a teljes `system-prompt.md` tartalmát.** (A `system-prompt.md` fájlt nyisd meg ebben a csomagban.)

Mentés: **Save instructions**.

## 4. Project Files feltöltés

A Project-felületen találsz egy **📎 Project Files** szekciót (jobb oldali oszlop).

**Töltsd fel ezeket a fájlokat** (a `sample-fajlok/` mappából):

1. `tesco-export-2026-aprilis.csv` — minta SmartFront-export
2. `auchan-export-2026-marcius.csv` — másik példa
3. `nyertes-pelda-tesco-riport.md` — sablon-riport, hangnem-modell

> ⚠️ **Éles használatban**: a saját, **anonimizált** SmartFront-export-odat töltöd fel. NE konkrét partner-szervezet-név maradjon.

## 5. Első chat — próba

Az alsó input-mezőbe **másold a `promptok/prompt-01-tesco-havi.md`** tartalmát. **Enter.**

🎉 **30-60 másodpercen belül** kapsz egy 1. verziós Tesco-donor-riportot.

---

## Mit látsz a felületen

```
┌─ Claude.ai ─────────────────────────────────────┐
│                                                 │
│ Projects > Élelmiszerbank — Donor-jelentés      │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ 💬 Új beszélgetés                           │ │
│ │                                             │ │
│ │ User: [a prompt-01-tesco-havi.md tartalma] │ │
│ │                                             │ │
│ │ Claude: # Tesco — Donor-riport — 2026 ...   │ │
│ │ [strukturált riport itt]                    │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ 📎 Project Files (3)                            │
│ ⚙️ Custom Instructions (✓ beállítva)            │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Ha hibát látsz

| Probléma | Megoldás |
|----------|----------|
| "Project not available" | Claude Pro / Team / Nonprofits előfizetés szükséges |
| "File too large" | A CSV >50 MB? Bontsd havi mintára. |
| Claude nem hivatkozik a CSV-re | Custom Instructions-ben ne felejtsd el: *"a Project Files-okat használd"* |
| Magyarul rossz a hangnem | Iteratív prompt: *"a 3. bekezdés túl marketinges, írd át tényközpontibbá"* |

---

## Következő lépés

Most működik az alapcsomag. **A 3 másik prompt** (`promptok/`) különböző feladatokat oldanak meg — nézd meg melyik passzol most a havi rutinodba.

A **stáb-tagokkal megosztáshoz** lásd `cowork-share.md`.

A **havi automatikus rutin** beállításához (heti vezetői dashboard mintán) lásd `schedule-rutin.md`.
