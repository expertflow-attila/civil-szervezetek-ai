# Prompt #03 — Új pályázat-típus felvétele (NEA, EFOP, EU)

**Mire jó:** A workflow eddig BGA-pályázatra van betanítva. Új típust (NEA, EFOP, EU FEAD) **adaptálni kell** — más szekciók, más sablon.

**Miért hasznos:** Egy új pályázat-típushoz **nem kell új csomag-mappa** — csak a CLAUDE.md frissítése + minta-pályázatok cseréje a `sample-fajlok/`-ban.

**Mikor használd:** Új típusú pályázat felhívása érkezik.

---

## A prompt

```
Adaptáljuk a Claude Code pályázatírási workflow-t egy új típusra: EFOP.

EFOP-pályázat fő különbségei a BGA-tól:
- Részletesebb kötelező szekciók (10-12 helyett 9 BGA)
- Indikátor-tábla kötelező (output, eredmény, hatás-szintű)
- Esélyegyenlőség, fenntarthatóság, fogyatékosügy szekciók kötelezőek
- EU-társfinanszírozás miatt 5 év fenntartási kötelezettség
- Kockázat-elemzés táblázat (kockázat × valószínűség × hatás)

Add a következő lépéseket:
1. Frissítsd a CLAUDE.md "EFOP-kötelező szekciók" listáját (a BGA-mellett párhuzamosan)
2. Készíts egy új session-prompt sablont (prompt-04-efop-uj-palyazat.md)
3. Listázd melyik új sample-fajlok kellenek (pl. nyertes-2024-efop-mintat helyettem)

Output: a 3 fenti dolog leírva, struktur-jelölésekkel.
```

---

## Variánsok más típusokra

### NEA-pályázat adaptáció
```
Adaptáljuk a workflow-t NEA-pályázatra. NEA fő különbségei a BGA-tól:
- Konkrét civil-szervezet-kategóriák (1.1, 1.2, ... NEA-séma)
- Operatív + projektre szétválasztva
- Évente 2 forduló (március, szeptember)
- Költségvetés ezer Ft-ban (NEM millió)

[Hasonlóan strukturáld]
```

### EU FEAD adaptáció
```
Adaptáljuk a workflow-t EU FEAD-pályázatra (élelmezésbiztonság).
- ENGLISH nyelven kell magyar mellékletként
- Öko-fenntartható kötelezettség
- 5+ partner ország szükséges
- Pénzügyi audit éves

[Hasonlóan strukturáld]
```
