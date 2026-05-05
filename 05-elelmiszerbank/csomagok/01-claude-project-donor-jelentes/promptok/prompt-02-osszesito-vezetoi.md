# Prompt #02 — Vezetői összesítő (összes donor)

**Mire jó:** Egy egyoldalas vezetői dashboard a havi összes mentési adatból — Cseh Balázsnak / vezetésnek.

**Miért hasznos:** Eddig 4-6 órás munka volt manuálisan az Excel-ből. AI-vel 5 perc.

**Mikor használd:** Minden hónap elején, az előző hónapra visszatekintve.

---

## A prompt — másold be a Project chat-be

```
Készíts egy 1-oldalas vezetői dashboardot 2026 április hónapra:

Adatforrás: a Project-be feltöltött tesco-export-2026-aprilis.csv és más
áruházlánc-export-ok (ha vannak).

Tartalom:
- Top 5 donor-áruházlánc mentett kg-ban
- Összes mentett mennyiség (kg, és Ft-érték becslés ~1873 Ft/kg-mal)
- Becsült érintett emberek (kg / 5)
- CO2-megelőzés (kg × 1.46)
- Áruházlánc-bontás %
- Anomáliák: olyan áruház amely >3x átlagot ért, vagy 0-mennyiséget mutat
- 3 javaslat a következő havi vezetői meeting-re

Hangnem: tényszerű, akcióra hívó, vezetői.
Hossz: max 1 oldal.
```

---

## Variáns: negyedéves összesítő

```
Készíts negyedéves vezetői dashboardot 2026 Q1-re (jan-feb-márc).
A Project-be feltöltött 3 havi export aggregálva.
Hangsúlyozd a trendeket (havi változás), és adj 5 javaslatot Q2-re.
```
