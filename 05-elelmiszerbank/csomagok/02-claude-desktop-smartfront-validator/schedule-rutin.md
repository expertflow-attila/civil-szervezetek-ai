# Scheduled rutin — napi reggeli SmartFront-validálás

Bajdik János reggeli rutinja **automatizálható** lokálisan (cron-szerűen), ha a Claude Desktop-ot Bajdik gépe **mindig fut** reggel 8-kor.

> 💡 A Claude Desktop **nem támogat natívan** scheduled task-okat (2026 állapot). De a Mac/Windows **operációs rendszer cron** + a Claude Desktop **interaktív futtatás** kombinációja működik.

---

## Két út

### Út A — Bajdik manuális reggeli rutin (egyszerű)

Bajdik 8:00-kor:
1. Megnyitja Claude Desktop-ot
2. **Cmd+N** (új beszélgetés)
3. Másolás → `system-prompt.md` + `promptok/prompt-01-reggeli-validalas.md`
4. Enter → 30-60 másodperc múlva kész

**Előny**: azonnal működik, ingyen. **Hátrány**: 5 perc elveszik manuálisan.

### Út B — Lokál cron + Claude API (haladó)

Ha Bajdik a Claude API-t használja (Pro / Team / Nonprofits előfizetéssel automatikus credit), akkor egy lokális cron-job (Mac `launchd` vagy Windows Task Scheduler) **automatikusan** fut reggel 8:00-kor.

#### Mac launchd példa

Hozz létre `~/Library/LaunchAgents/com.elelmiszerbank.smartfront-reggel.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.elelmiszerbank.smartfront-reggel</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>/Users/bajdik/scripts/smartfront-reggel.mjs</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>8</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
</dict>
</plist>
```

Aktiválás:
```bash
launchctl load ~/Library/LaunchAgents/com.elelmiszerbank.smartfront-reggel.plist
```

A `smartfront-reggel.mjs` fájl tartalma a `04-scheduled-routine-heti-dashboard/sample-fajlok/routine-script.mjs` mintán — csak az érzékeny path-okat és prompt-szöveget kell változtatni.

#### Windows Task Scheduler

`Start menü → Task Scheduler → Create Basic Task`:
- Trigger: **Daily**, idő: **8:00**
- Action: **Start a program**, program: `node`, arguments: `C:\Users\bajdik\scripts\smartfront-reggel.mjs`

---

## Mit kapsz a futtatás után

A script elküldi emailen:

> Tárgy: SmartFront-validálás 2026-04-15 reggel — 5 feltöltés
>
> ✓ Jóváhagyott: 2 (40%) — átkerültek a `smartfront_validalva/` mappába
> ⚠️ Gyanús: 1 — Bajdik nézze át (tesco-bp-007, Adományok Hete)
> ✗ Hibás: 2 — Schwikker partner-koordináció kell
>   - aldi-bp-203: lejárati dátum lejárt
>   - lidl-bp-101: receipt-szám hiányzik
>
> [Részletes riport mellékletben]

Bajdik 8:30-kor megnyitja az emailt, **3 perc** alatt áttekinti, és:
- ⚠️ Gyanús → **manuálisan** áttekint a SmartFront-felületen
- ✗ Hibás → **emailben** értesíti Schwikkert (vagy a script már elküldte)

---

## Beállítási sablon

A `Util` fájlokat (cron, script) Bajdik **egyszer** létrehozza, és aztán **csak a path-okat** kell változtatnia. Ha új áruházlánc csatlakozik, csak az `aruhaz-szabalyok.md`-t bővíti — a cron továbbra is működik.

---

## Költség (Út B)

A Claude API-t használja:
- ~30 token / feltöltés × 50 feltöltés/nap × 30 nap = ~45 000 token/hó
- Sonnet 4.5 ár: ~$0.40 / hó

**Lényegtelen** költség (Claude for Nonprofits-szal **€0**, a havi credit bőven fedezi).

---

## ⚠️ Adatkezelés

A cron-script lokálisan fut, NEM küld érzékeny adatot felhőbe a Claude API-n kívül. A Claude API-hoz **Anthropic DPA** aláírva. **Audit log** Bajdik gépén lokálisan tárolva.
