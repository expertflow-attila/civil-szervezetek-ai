# Scheduled rutin — havi tudásbázis-frissítés-ellenőrzés

A Project-tudásbázis **élő** — havi automatikus ellenőrzés segíthet, hogy ne maradjon elavult anyag.

---

## Schedule beállítás

A Claude.ai **Scheduled Tasks** funkció (Pro / Team / Nonprofits):

1. Project: `NOE — Helyi vezető assistant` → ⚙️ Settings → Scheduled Tasks
2. **+ New Schedule** — `Havi Project-tudásbázis frissítés-ellenőrzés`
3. Frequency: **Monthly**, Day: **1**, Time: **09:00**, Timezone: **Europe/Budapest**

### Prompt

```
Ellenőrizd a Project-be feltöltött dokumentumokat:

1. Listázd az összes feltöltött fájlt (név + utolsó módosítási dátum, ha van)
2. Jelöld azokat amelyek >6 hónaposak — ezek frissítésre szorulnak
3. Ellenőrizd a `kedvezmeny-szabalyzat.md`-t: van-e benne lejárt kedvezmény-szerződés?
4. Ellenőrizd a `tagdij-rendszer.md`-t: az aktuális tagdíj-évvel egyezik-e?

Output: 1-oldalas riport a NOE adminisztratív vezetőjének,
   `noe-admin@noe.hu` címre emailben.
```

### Output

- **Output type**: Email
- **Recipient**: `noe-admin@noe.hu`
- **Subject**: `Havi NOE Project-tudásbázis-ellenőrzés`

---

## Mit tesz az adminisztratív vezető

A havi 1. napon kapja az emailt — **5 perc** alatt áttekinti:

- ⚠️ 3 dokumentum >6 hónapos → felteszi a teendőlistára
- ✓ Aktuális tagdíj megfelel → OK
- ✗ Kedvezmény-szabályzat egy lejárt szerződést tartalmaz → frissítés ezen a héten

---

## Más Schedule-ötletek

| Schedule | Frequency | Mire jó |
|----------|-----------|---------|
| Havi tudásbázis-ellenőrzés | havi | (fent) |
| Negyedéves Project-aktivitás-jelentés | negyedéves | hány vezető használja, top 10 kérdés |
| Éves audit log | évi | minden Project-interakció áttekintve, GDPR-megfelelőség |
