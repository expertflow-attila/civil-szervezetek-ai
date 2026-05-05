# Prompt #02 — Havi vezetői dashboard

**Mire jó:** A havi 4 heti adat aggregálva — havi összesítő, trend-elemzés, 5 javaslat a havi vezetői meeting-re.

**Mikor használd:** Schedule-tal, havonta a 1. nap 8:00-kor.

---

## A prompt

```
Készíts havi vezetői dashboardot {{előző hónap neve}}-re.

A Project-be feltöltött 4 heti SmartFront-export (smartfront-heti-export-{{hét1}}.csv ... {{hét4}}.csv) aggregálva.

Output szekciók:
1. Havi összefoglaló (összes kg, CO2, érintettek)
2. Heti trend (4 heti összevetés)
3. Top 10 áruház (havi kg)
4. Top 10 partner (havi kg)
5. Áruházlánc-bontás (havi)
6. Anomáliák (havi szinten — pl. egy partner aki 3 héten 0 kg-t kapott)
7. Top 5 hibázó partner-szervezet (Bajdik audit log-ja alapján)
8. 5 javaslat a havi vezetői meeting-re

Hossz: 2 oldal. Markdown.
```
