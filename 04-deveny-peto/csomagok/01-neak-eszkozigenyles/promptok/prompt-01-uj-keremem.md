# Prompt #01 — Új NEAK-kérelem 1. verzió

**A prompt** (Claude Project chat-be):

```
Készítsd el a NEAK-eszközigénylést egy új gyermekre.

Páciens-adatok (anonimizálva):
- Életkor: [N hét/hónap]
- Születési súly (ha koraszülött): [N gramm]
- Terhességi hét: [N]
- Egészségügyi besorolás: [pl. "koraszülött, közepes fokú érintettség"]
- DSGM-vizsgálat eredménye (pl. izomtónus-csökkenés, refleksz-késedelem):
  [LEÍRÁS]

Kért eszköz:
- [pl. "1 db terápiás labda 35 cm + ülőpárna"]

Terápia helyszíne: [otthoni / intézményi / kombinált]
Terápia gyakorisága: [pl. "heti 3× szülői szupervízióval"]

Output: a system-prompt szerinti 6 szekciós NEAK-kérelem,
DSGM-hivatkozással, költséghatékonysági érvvel.
```

---

## Variáns: cerebral palsy-érintett

```
Páciens-adatok:
- Életkor: 8 hónap
- Diagnózis: cerebral palsy spasztikus (közepes fokú)
- Vizsgálat: [DSGM-eredmény]

Kért eszköz: [...]

A NEAK-kérelmet építsd a CP-szakirodalom hivatkozásával,
és különösen erősen indokold a **korai fejlesztés-időablak** fontosságát.
```
