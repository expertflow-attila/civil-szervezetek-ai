# Scheduled rutin — havi automatikus donor-riport-generálás

A Claude.ai-ban van **Scheduled Tasks** (vagy hasonlóan: **Routines**) funkció, amellyel **havi/heti** rendszerességgel automatikusan futtathatsz egy promptot.

> 💡 **Megjegyzés**: a Scheduled Tasks **Claude Pro / Team** csomagban érhető el (2026 állapot). Ha még nincs aktiválva a fiókodnál, alternatíva a `routine-script.mjs` (Claude API + cron) — lásd a Csomag #4 (heti dashboard) alatt.

---

## Hogyan állítsd be — lépésről lépésre

### 1. Nyisd meg a Project-edet

`Élelmiszerbank — Donor-jelentés` Project-ben.

### 2. ⚙️ Settings → Scheduled Tasks

A Project beállításaiban keresd meg a **Scheduled Tasks** szekciót (vagy **Routines**, fiók-verziótól függően).

### 3. + New Schedule

**Beírni:**

- **Schedule name**: `Tesco havi donor-riport`
- **Frequency**: **Monthly**
- **Day**: `1` (a hónap első napján)
- **Time**: `08:00`
- **Timezone**: `Europe/Budapest`

### 4. Prompt mező

**Másold ide a `promptok/prompt-01-tesco-havi.md` tartalmát**, módosítva:

```
Készítsd el a Tesco {{előző hónap neve}} donor-riportját a sablon alapján,
a tesco-export-{{előző hónap}}.csv adatainak felhasználásával.

Időszak: {{előző hónap kezdete}} – {{előző hónap vége}}.
Kapcsolat-fogadó: Tesco Magyarország CSR-csapat
Hangnem: a nyertes-pelda-tesco-riport.md alapján.

Ha hiányzik egy adat, jelöld [HIÁNYZIK: ...].
```

> 💡 A `{{...}}` placeholder-eket a Claude **automatikusan** kitölti a futtatáskor (most 2026-05-01 reggel 8-kor → "2026 április"-ot ír).

### 5. Output beállítás

- **Output type**: `Email` (a Schedule eredményét emailben kapod)
- **Email recipient**: `kommunikacio@elelmiszerbank.hu`
- **Subject template**: `Tesco havi donor-riport — {{előző hónap}}`

### 6. Save Schedule

🎉 **Minden hónap 1-jén reggel 8-kor** automatikusan kapod az emailt.

---

## Mit kell csinálnod ezután

A kommunikációs felelős reggel 8:30-kor megnézi az emailt:

1. **Olvas** (5 perc)
2. **Iteratív promptokkal finomít** ha kell (`prompt-04-iteralas-finomitas.md` alapján)
3. **Word-be / PDF-be konvertál** (Tesco-fejléccel)
4. **Elküldi** a Tesco CSR-csapatának

**Összes idő hónaponta**: 30-45 perc (az 1. verzió generálás automatikus).

---

## Ha a Scheduled Tasks nincs még a fiókodnál

Alternatíva: `routine-script.mjs` (Csomag #4 mintán) — Claude API hívás cron-ról hetente/havonta. Bajdik János egy nap alatt integrálja.

Részletek: [`05-elelmiszerbank/csomagok/04-scheduled-routine-heti-dashboard/`](../../04-scheduled-routine-heti-dashboard/) — ott teljes minta-script Node.js-ben.

---

## Más Schedule-ötletek a Project-ben

| Schedule | Gyakoriság | Cél |
|----------|-----------|-----|
| Tesco havi riport | 1./hó 8:00 | (fent) |
| Auchan havi riport | 5./hó 8:00 | másik donor |
| Q1/Q2/Q3/Q4 vezetői dashboard | negyedévente 1./8:00 | Cseh Balázsnak |
| Adományok Hete kampány-előkészítő | 2× évente, 4 héttel a kampány előtt | tavasz / tél |
| 1%-os SZJA-figyelmeztető | évente, márciusban | adóigazolás-időszak |
