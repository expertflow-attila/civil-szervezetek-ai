# Prompt #01 — Krízis-eligazítás (anonim szülő)

**Mire jó:** A koordinátor 30 másodperc alatt megtudja, **hova küldje** az anonim leírású szülőt.

**Mikor használd:** Krízis-hívásnál, közben — a koordinátor a NotebookLM-be írja a szülő anonim leírását.

---

## A prompt

```
[ANONIM HELYZET 2-3 mondatban]

Pl.:
"32 éves anya, 2 gyerek (3, 7), fővárosi, este 8-kor érkezett,
bántalmazó kapcsolatból menekül. Nincs okmánya, csak telefon."

Hova küldjem ezt a szülőt?

Válaszodban:
- Konkrét intézmény / hatóság neve
- Pontos elérhetőség (telefon, cím, nyitvatartás)
- Mit kell magával vinnie (papírok, igazolások)
- Ha sürgős: 24/7-es elérhetőség
- Forrás-hivatkozás (a NotebookLM-feltöltött fájlokból)
- Kötelező jelzőrendszer-felelősség (mit kell jelenteni a Fonjuk-nak 24 órán belül)
```

---

## Variáns: konkrét régió

```
[ANONIM HELYZET 2-3 mondat]

Régió: Borsod-Abaúj-Zemplén megye

Adj **csak Borsodra elérhető** intézményeket — fővárosi alternatívák
NEM relevánsak (utazás-időigényes a krízisben).
```

## Variáns: csoport-specifikus

```
[ANONIM HELYZET]

Speciális szükség: gyermek 6 hónapnál fiatalabb (csecsemő).

Adj **kifejezetten csecsemős anya-fogadó** intézményeket — nem minden
anyaotthon fogad csecsemőt.
```
