# Prompt #01 — Heti vezetői dashboard

**Mire jó:** Hétfő reggel automatikus dashboard — top 5 áruház, top 5 partner, hetes kg, CO2, anomáliák, 3 javaslat.

**Mikor használd:** Schedule-tal, hetente hétfő 8:00 (lásd `lepesrol-lepesre.md`).

---

## A prompt — másold a Schedule prompt-mezőjébe

```
Készíts heti vezetői dashboardot a 2026 H{{előző hét száma}}-re a Project-be
feltöltött `smartfront-heti-export-{{hét}}.csv` alapján.

A Custom Instructions-ben definiált 7 szekció szerint:
1. Heti összefoglaló (kg, CO2, érintettek, hangulati keret)
2. Top 5 áruház (heti kg)
3. Top 5 karitatív partner
4. Áruházlánc-bontás
5. Anomáliák
6. Trend a múlt héthez
7. 3 javaslat a heti vezetői meeting-re

Hossz: 1 oldal. Markdown, email-ben olvasható.
```
