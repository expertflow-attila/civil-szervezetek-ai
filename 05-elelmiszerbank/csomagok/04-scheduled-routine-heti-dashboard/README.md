# Csomag #4 — Heti vezetői dashboard (rutin / scheduled prompt)

**Mit kapsz:** Egy működő **heti rutin**, amely **automatikusan** generál vezetői dashboardot a Magyar Élelmiszerbank vezetésének. Cseh Balázs hétfő reggel emailben megkapja: top 5 áruház, top 5 partner, hetes kg, CO2-megtakarítás, anomáliák. **2-4 órás manuális munka** helyett **automatikus, 5 perces review**.

**Kinek:** kommunikációs felelős vagy Bajdik János (IT lead), aki **rendszeresen ismétlődő riport-feladatot** akar automatizálni — vagy a vezetésnek (Cseh Balázs) aki gyorsan akarja látni a heti pillanatfelvételt.

**Idő setup-ig:** 10 perc. **Idő első értékig:** a következő hétfő reggel (auto, küldetés-aktivált).

---

## Két megvalósítási út — válaszd a szervezeti kapacitásod szerint

### Út A — Egyszerű manuális rutin (heti 5 perc)

**Mikor érdemes:** ha még nincs Claude API hozzáférés, vagy az IT-csapat nem szeretne automatizálni.

1. **Hétfő reggel 8:00**: Cseh Balázs (vagy a kommunikációs felelős) megnyit Claude Desktop-ot
2. **Bemásolja** a `routine-prompt.md` tartalmát
3. **Csatolja** az aktuális SmartFront-heti-export Excel-t
4. **Másodperceken belül** kapja a dashboardot
5. **Email-be másolja** és küldi a vezetésnek

**Előny:** azonnal működik, ingyen. **Hátrány:** valakinek el kell hétfő reggel csinálnia.

---

### Út B — Automatizált rutin Claude API-n keresztül (haladó)

**Mikor érdemes:** ha a Claude for Nonprofits jelentkezésed elfogadták (van API kredit), és Bajdik János beépíti a SmartFront-rendszerbe.

A `routine-script.mjs` (a `sample-fajlok/`-ban) egy minta Node.js script, amely:

1. **Cron-job-ként hétfő hajnali 7:00-kor fut** (cron: `0 7 * * 1`)
2. **Lekérdezi** a SmartFront-API-tól (vagy Excel-export-ot olvas a megosztott Drive-ról) a heti adatot
3. **Hívja a Claude API-t** a `routine-prompt.md` szerint
4. **Email-ben elküldi** a dashboardot a vezetés title-listájára (Cseh, Nagygyörgy, Schwikker, Bajdik, Fehér)

A script **~80 sor** kódból áll — Bajdik János egy nap alatt integrálja.

**Előny:** teljesen automatizált, hétfő reggel email a vezetés inboxában. **Hátrány:** API-kredit-költség (~2-5 USD/hét), Bajdik karbantartja.

---

## Mit fog tartalmazni a dashboard

A `varhato-eredmeny.md`-ben a teljes minta — összefoglalva:

1. **Heti összefoglaló**: mentett kg + CO2 + érintett emberek
2. **Top 5 áruház** (mentett kg szerint)
3. **Top 5 karitatív partner** (kapott mennyiség szerint)
4. **Áruházlánc-bontás** (Tesco/Auchan/Aldi/Metro/Lidl/Penny/KFC %)
5. **Anomáliák** (heti átlaghoz képest >3x mennyiség, 0 mennyiség, GDPR-jelzés)
6. **Trend a múlt héthez képest** (felfelé/lefelé/stabil)
7. **3 javaslat a héti vezetői meeting-re**

---

## 5 lépés a működő rendszerig (Út A — Manuális)

### 1. Tölts le egy heti SmartFront-export-ot

A `sample-fajlok/smartfront-heti-export-2026-h15.csv` egy minta. Éles használatban Bajdik János megosztja ezt minden hétfő reggel a Drive-on.

### 2. Másold a routine-prompt-ot

`routine-prompt.md` tartalma → Claude Desktop új beszélgetés első üzenetébe.

### 3. Csatold a heti CSV-t

A Claude Desktop chat-ablakhoz drag-and-drop-pal csatold a `smartfront-heti-export-2026-h15.csv`-t.

### 4. Küldd el (Enter)

Másodperceken belül megérkezik a strukturált dashboard.

### 5. Email-be másolva küldd

A dashboardot bemásolod egy Gmail-be:

- **Címzett**: `cseh.balazs@elelmiszerbank.hu`, `nagygyorgy.andras@elelmiszerbank.hu`, [...]
- **Tárgy**: `Heti vezetői dashboard — 2026 H15 (április 7-13)`
- **Tartalom**: a Claude válasza + opcionálisan 1-2 soros saját megjegyzés

---

## Mire számíts a 2. hónapban

- **Útra váltás**: Bajdik János az Út A → Út B átállás után te csak a `varhato-eredmeny.md` minőségét review-zod
- **Bővítés**: havi dashboard (összesítő), negyedéves dashboard (trend-elemzés)
- **Donor-szegmentált dashboard**: minden 7 áruházlánc-partnernek a saját heti kivonatát automatikusan

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`

**Vissza:** [Élelmiszerbank főoldal](../../) · [Hub](../../../)
