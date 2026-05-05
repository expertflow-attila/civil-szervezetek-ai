# Prompt #03 — Donor-szegmentált havi mini-riport

**Mire jó:** Minden áruházlánc-partnernek (Tesco, Auchan, Aldi, Metro, Lidl, Penny, KFC) saját **havi mini-riportot** generál — automatikusan, 7 különálló email-ként.

**Mikor használd:** Schedule-tal, havonta a 5. nap 8:00-kor (a havi belső dashboard után 4 nappal — addigra a kommunikációs felelős átolvasta és jóváhagyta).

---

## A prompt

```
Készíts 7 különálló havi mini-riportot — egyet-egyet a 7 áruházlánc-partnernek.

Minden mini-riport tartalmazza:
- Áruházlánc neve
- Az adott áruházlánc-egységekből megmentett kg ({{előző hónap}}-ban)
- A becsült érintett emberek (kg / 5)
- A megelőzött CO2 (kg × 1.46) + autó-egyenérték
- 1 anonim hatás-történet (sablon-szintű, sosem konkrét család)
- Köszönet és tervek a következő hónapra
- Hossz: max 1/2 oldal / partner

Output: 7 markdown-szekció, mindegyik egy "## [Áruházlánc neve]"-vel kezdődik.

A Custom Instructions szabályait betartva (anonimizálás, hangnem, források).

Hangnem: meleg, számokkal alátámasztott, NEM marketing.
```

---

## Schedule-beállítás

| Mező | Érték |
|------|-------|
| Frequency | Monthly |
| Day | 5 |
| Time | 08:00 |
| Output type | Email |
| Recipient | `kommunikacio@elelmiszerbank.hu` (a kommunikációs felelős átküldi az áruházi CSR-csapatoknak) |
| Subject | `Havi donor-mini-riportok — {{előző hónap}}` |
