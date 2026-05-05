# Lépésről lépésre — Heti dashboard rutin (Claude.ai Scheduled Tasks)

**Idő összesen:** 10-15 perc.
**Mire végzel:** Hétfő reggel 8:00-kor automatikusan kapod e-mailben a heti vezetői dashboardot.

> Ez a csomag azt feltételezi, hogy **még soha nem használtál Scheduled Tasks-ot**. Ha igen, lépj a 5. lépésre.

---

## Két út — válaszd a tudásodtól

### ÚT A — Claude.ai Scheduled Tasks (egyszerű, ajánlott kezdőknek)

Ha **Claude Pro / Team / Nonprofits** előfizetésed van, a Scheduled Tasks beépített funkció. Nem kell kódolni.

### ÚT B — Cron + Claude API (haladó, csak ha Bajdik János ér)

Ha lokális automatizmust akarsz (heti email cron-ról), akkor `routine-script.mjs` (a `sample-fajlok/`-ban) + Mac launchd / Windows Task Scheduler.

> Ez a csomag az **ÚT A**-t magyarázza részletesen. Az ÚT B részletek a `sample-fajlok/routine-script.mjs`-ben.

---

## ÚT A — Lépések

### 1. Nyisd meg Claude.ai-t

[claude.ai](https://claude.ai) → bejelentkezés Pro / Team / Nonprofits fiókkal.

### 2. Hozz létre Project-et a heti rutinhoz

Bal oldali menü → **Projects** → **+ New Project**

- **Project név**: `Élelmiszerbank — Heti vezetői dashboard`
- **Description**: `Hétfő reggeli automatikus dashboard a SmartFront-export alapján`

### 3. Custom Instructions

A Project beállításoknál **másold be a `routine-prompt.md` tartalmát** a Custom Instructions mezőbe. Mentés.

### 4. Tölts fel sample SmartFront-export-ot

A `sample-fajlok/smartfront-heti-export-2026-h15.csv`-t **tölts fel a Project Files**-be (csak teszteléshez — éles használatban Bajdik János frissít).

### 5. Project Settings → Scheduled Tasks (vagy Routines)

A Project beállításaiban keresd meg a **Scheduled Tasks** vagy **Routines** szekciót.

> 💡 Ha ezt a szekciót nem látod, nézd meg: a Claude Pro / Team csomagodban aktív-e? Ha igen → **+ New Schedule** gomb.

### 6. + New Schedule

**Beírni:**

- **Schedule név**: `Heti dashboard hétfőre`
- **Frequency**: **Weekly**
- **Day**: **Monday**
- **Time**: **08:00**
- **Timezone**: **Europe/Budapest**

### 7. A Schedule prompt-mező

**Másold be**:

```
Készíts heti vezetői dashboardot a 2026 H{{előző hét száma}}-re.

A Project-be feltöltött `smartfront-heti-export-{{hét}}.csv` adatai alapján
generáld a dashboardot a Custom Instructions szerint.

Output formátum: markdown, max 1 oldal, az emailben látható módon.
```

> 💡 A `{{előző hét száma}}` és `{{hét}}` placeholder-eket a Claude **automatikusan kitölti** futtatáskor.

### 8. Output beállítás

- **Output type**: **Email**
- **Recipient**: `cseh.balazs@elelmiszerbank.hu` (vagy a vezetőség email-listája)
- **Subject template**: `Heti vezetői dashboard — H{{hét száma}}`

### 9. Save Schedule

🎉 **Minden hétfő reggel 8-kor** kap a vezetőség egy emailt a dashboard-dal.

---

## Mit látsz a Claude.ai felületen

```
┌─ Claude.ai ─────────────────────────────────────┐
│ Projects > Élelmiszerbank — Heti dashboard      │
│                                                 │
│ ⚙️ Settings → Scheduled Tasks                   │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ 📅 Heti dashboard hétfőre                   │ │
│ │   Aktív • Hetente, hétfő 8:00 (Budapest)   │ │
│ │   Output: email → cseh.balazs@...           │ │
│ │   Utolsó futás: 2026-04-08 8:01 ✓ sikeres  │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Ha hibát látsz

| Probléma | Megoldás |
|----------|----------|
| "Scheduled Tasks not available" | Claude Pro / Team / Nonprofits előfizetés szükséges. Free fiókkal nem érhető el. |
| Nem érkezik email | Claude.ai → Settings → Email notifications: aktív? Spam folder? |
| Üres / hibás dashboard | A SmartFront-export biztos feltöltve a Project Files-be? Frissítsd hetente. |
| Időzítés rossz | Timezone Europe/Budapest legyen (nem UTC) |

---

## Következő lépés

A heti dashboard automatikusan érkezik. Most már elindíthatsz **havi és negyedéves** dashboardokat is — ugyanezzel a módszerrel, csak más Schedule-paraméterekkel.

A **stáb-tagokkal megosztáshoz** lásd `cowork-share.md`.
