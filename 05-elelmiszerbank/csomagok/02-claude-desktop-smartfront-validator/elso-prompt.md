# Első prompt — Bajdik János reggeli rutin (Claude Desktopban)

Mielőtt elindítod, **bizonyosodj meg róla**:
- ✓ Claude Desktop fut, Filesystem MCP aktív (Settings → Developer → MCP Servers)
- ✓ A `system-prompt.md` tartalma az új beszélgetés ELSŐ üzeneteként van bemásolva
- ✓ A `sample-fajlok/partneri-feltoltes-mintak/`-ból átmásoltad a fájlokat a `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/`-be

---

## A reggeli prompt

```
Validáld a ma reggeli új SmartFront-feltöltéseket.

Mappa: ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/
Szabály-forrás: ~/Documents/Elelmiszerbank/smartfront_szabalyok/aruhaz-szabalyok.md

Mindegyik fájlra futtasd a system-promptban definiált logikát. A jóváhagyhatókat áthelyezzed a 'smartfront_validalva' mappába, a hibásakat a 'javitando' almappába. A gyanúsakat hagyd helyben — én átnézem.

A végén adj egy 4-soros összefoglalót.
```

---

## Variánsok

### Heti összesítő riport
```
Készíts heti összesítő riportot a `smartfront_validalva/` és `smartfront_uj_feltoltesek/javitando/` mappák alapján:

- Hány feltöltés érkezett ezen a héten?
- Áruházlánc-bontás (Tesco/Aldi/Lidl/Penny/Auchan/Metro/KFC %)
- Top 5 partner-szervezet feltöltésszám szerint
- Top 5 partner-szervezet **hiba-arány** szerint (ez kell coaching-tervhez)
- Hét végi tanulság: 1-2 jellemző hiba + javaslat a partner-koordinátornak
```

### Új áruházlánc szabály felvétele
```
Bővítsük a `aruhaz-szabalyok.md`-t egy új áruházlánccal: SPAR.

SPAR-szabályok:
- kg, dátum, fotó kötelező
- ezen kívül a partner-szervezet visszaigazolása mellékelve (XML formátumban)

Frissítsd a fájlt, és írd át a Tesco-séma struktúráját SPAR-formátumra.
```

### Audit log generálás
```
Készíts havi audit logot a `smartfront_validalva/` mappa fájljaiból:
- Mindegyik validálási döntés rögzítve (fájlnév, áruházlánc, döntés, indok)
- Top 5 GYANÚS-eset elemezve (mi volt az anomália)
- Hány false-positive volt (Bajdik átírta a döntést)?
- Csv-formátumú export az `~/Documents/Elelmiszerbank/audit_logs/2026-04.csv`-be
```

---

## Iteratív promptok

```
A `tesco-bp-001-2026-04-15.json` feltöltést `⚠️ GYANÚS`-ra jelölted, mert a kg 156-ra ugrott a heti 45 átlaghoz képest. Ellenőriztem — Adományok Hete miatt, ez normális. Hogyan javítsam a system prompt logikáját, hogy az "Adományok Hete" kontextust figyelembe vegye?
```

```
Hány partner-szervezet hibázott a Lidl receipt-szám miatt az utolsó 30 napban? Készíts listát kapcsolat-felvételhez.
```
