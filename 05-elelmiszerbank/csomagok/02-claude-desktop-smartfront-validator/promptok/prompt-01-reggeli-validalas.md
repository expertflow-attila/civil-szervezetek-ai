# Prompt #01 — Reggeli SmartFront-validálás

**Mire jó:** Bajdik János reggeli rutin: az új partner-feltöltések prevalidálása. Az AI átolvassa a `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/` mappát, és minden fájlra ✓ / ⚠️ / ✗ jelölést ad.

**Miért hasznos:** Eddig 60-90 perc volt napi 50 feltöltés ellenőrzése. AI-vel 5-10 perc + Bajdik csak a kétségeseket nézi.

**Mikor használd:** Minden reggel 8-9-kor.

---

## A prompt

```
Validáld a ma reggeli új SmartFront-feltöltéseket.

Mappa: ~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/
Szabály-forrás: ~/Documents/Elelmiszerbank/smartfront_szabalyok/aruhaz-szabalyok.md

Mindegyik fájlra futtasd a system-promptban definiált logikát.
A jóváhagyhatókat helyezd át a `smartfront_validalva/` mappába.
A hibásakat a `smartfront_uj_feltoltesek/javitando/` almappába.
A gyanúsakat hagyd helyben — én átnézem.

A végén adj egy 4-soros összefoglalót.
```

---

## Variáns: csak Tesco-feltöltések

```
Validáld a ma reggeli SMARTFRONT-feltöltéseket — csak Tesco-fájlokat (a fájlnév
'tesco-' kezdetű).

A többi áruházlánc-feltöltést ne nyúlj most — későbbi prompt-ban.
```
