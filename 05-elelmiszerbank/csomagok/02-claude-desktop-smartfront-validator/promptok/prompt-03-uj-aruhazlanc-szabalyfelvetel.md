# Prompt #03 — Új áruházlánc szabály-felvétele

**Mire jó:** Új áruházlánc csatlakozott (pl. SPAR), a SmartFront-rendszerben létrehoznod kell a sajátos elszámolási szabályait. AI segít megírni az új blokkot az `aruhaz-szabalyok.md`-be.

**Miért hasznos:** Új áruházlánc-szabály felvétele eddig 1-2 órás munka volt (jogász + IT). AI-vel 15-20 perc.

**Mikor használd:** Új áruházlánc-csatlakozáskor (1-2× évente).

---

## A prompt

```
Bővítsük a `~/Documents/Elelmiszerbank/smartfront_szabalyok/aruhaz-szabalyok.md`
fájlt egy új áruházlánccal.

Áruházlánc neve: SPAR
Kötelező mezők (a Schwikker Zsófia által egyeztetett szerződés alapján):
- kg, dátum, fotó
- partneri visszaigazolás melléklet (XML formátumban, az áruház ad)
- hibás szállítás-jelölés (boolean) — ha az áruház hibás dátummal töltötte fel

Validálási szabályok:
- A kg + dátum + fotó kötelező (mint Tesco)
- Plus: partneri visszaigazolás XML formátum-érvényesítés
- Plus: ha hibás szállítás-jelölés = igen, akkor mindenképp ⚠️ GYANÚS
  (még ha minden más mező OK is)

Frissítsd a `aruhaz-szabalyok.md`-t:
1. Új SPAR-szekció (a Tesco/Aldi minta szerinti formátumban)
2. Általános logikai validáció szekció — ha kell új szabály
3. Verzió-szám 1.0 → 1.1, dátum 2026-MM-DD

A kimenet a teljes frissített `aruhaz-szabalyok.md` legyen — kommentekkel
jelölve mit változtattunk (`<!-- 2026-MM-DD: SPAR felvéve -->`).
```
