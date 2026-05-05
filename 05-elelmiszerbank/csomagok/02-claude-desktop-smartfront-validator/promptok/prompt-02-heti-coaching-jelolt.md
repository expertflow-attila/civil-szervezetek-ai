# Prompt #02 — Heti partner-coaching-jelölt-lista

**Mire jó:** Heti összesítő — mely partner-szervezetek **hibáztak a legtöbbet** az utóbbi 7 napban. Ez Schwikker Zsófia (partner-koordináció) **proaktív coaching-tervébe** kerül: hívja meg a top 3 hibázót egy 30 perces beszélgetésre.

**Miért hasznos:** Az ismétlődő hibák **a partneri képzés hiányát** jelzik. Proaktív coaching → kevesebb hiba a következő hónapban.

**Mikor használd:** Minden péntek 14:00-kor (a heti adminisztratív review-n).

---

## A prompt

```
Készíts heti coaching-jelölt-listát az utóbbi 7 nap SmartFront-validálási
adatai alapján.

Forrás-mappák:
- ~/Documents/Elelmiszerbank/smartfront_validalva/ (jóváhagyottak — kontextusra)
- ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/javitando/ (a héten hibázottak)

Számítsd ki minden partner-szervezetre:
- Heti összes feltöltés
- Heti hibás feltöltés (a `javitando/` mappa fájljai)
- Hiba-arány %

Adj listát a TOP 5 partner-szervezet (legmagasabb hiba-arány, min 5 feltöltéssel).
Mindegyikhez:
- Jellemző hibák (a leggyakoribb 2-3)
- Coaching-javaslat (1-2 mondat — Schwikker mit mondjon a 30-perces hívásban)
- Javasolt prioritás (sürgős / középsürgős / megvárható)

Hangnem: tényszerű, akcióra hívó.
```

---

## Variáns: havi audit log

```
Készíts havi audit logot a `smartfront_validalva/` mappa fájljaiból:

- Mindegyik validálási döntés rögzítve (fájlnév, áruházlánc, döntés, indok)
- Top 5 GYANÚS-eset (hogy döntött az AI, jó volt-e)
- Hány false-positive volt (Bajdik átírta a döntést)?
- CSV-formátumú export az `~/Documents/Elelmiszerbank/audit_logs/2026-04.csv`-be
```
