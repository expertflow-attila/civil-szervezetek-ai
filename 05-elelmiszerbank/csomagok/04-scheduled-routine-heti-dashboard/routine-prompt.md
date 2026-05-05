# Heti rutin — Vezetői dashboard
## Másold ezt a Claude Desktop első üzenetébe (Út A) vagy a Claude API call user-prompt mezőjébe (Út B)

---

Készíts vezetői dashboardot a Magyar Élelmiszerbank Egyesület számára a csatolt heti SmartFront-export alapján.

## Időszak

A csatolt `smartfront-heti-export-*.csv` egy heti adatot tartalmaz (általában hétfő → vasárnap). Az időszak a fájlnévben szerepel: `smartfront-heti-export-2026-h15.csv` = 2026 15. hete (április 7-13).

## Kontextus (használd ahol releváns)

- **2024-es éves számok**: 10 685 tonna, 27,5M kg CO2, 243 919 nélkülöző, 650+ partner
- **Heti átlag (2024-2025)**: ~205 tonna/hét, ~530 kg CO2-megelőzés/tonna
- **7 áruházlánc-partner**: Tesco, Auchan, Aldi, Metro, Lidl, Penny, KFC
- **4 raktár**: Budapest (Lokátor u.), Karcag, Alsónémedi, Veszprém

## Dashboard-szerkezet

### Cím
`# Heti vezetői dashboard — 2026 H{hét} (dátum-tól dátum-ig)`

### Szekciók (kötelező sorrend)

#### 1. Heti összefoglaló (3-4 sor)

- **Mentett kg ezen a héten**: ___ kg (változás a múlt héthez: ↑/↓ ___ %)
- **CO2-megelőzés**: ___ kg (= ___ autó éves károsanyag-kibocsátása)
- **Becsült érintett emberek**: ___ fő (kg / 5 alapján)
- **Egy mondatos vezetői hangulati keret**: pl. *"A héten az Adományok Hete kampány miatt erős mennyiségi mozgás látható; a vidéki raktárak átfutási ideje stabil."*

#### 2. Top 5 áruház (heti kg)

```
1. [aruhaz_kod] [aruhaz_zona] — ___ kg
2. ...
3. ...
```

#### 3. Top 5 karitatív partner (kapott kg)

```
1. [partner_anonim] — ___ kg, ___ kg/család (becslés)
2. ...
```

#### 4. Áruházlánc-bontás

```
Tesco:    ___% (___ kg)
Auchan:   ___% (___ kg)
Aldi:     ___% (___ kg)
Metro:    ___% (___ kg)
Lidl:     ___% (___ kg)
Penny:    ___% (___ kg)
KFC:      ___% (___ kg)
```

#### 5. Anomáliák (max 3-5 jelölés)

A heti átlagtól eltérő esetek:
- **Magas anomalia**: olyan partner / áruház, amely **>3x** heti átlagot ért (gyanús — Adományok Hete? gyors-akciózás? hiba?)
- **Alacsony anomalia**: olyan partner / áruház, amely **>50%-kal csökkent** vagy **0 mennyiséget** mutat
- **GDPR-jelzés**: ha SmartFront-feltöltésben érzékeny adat látszik az export-ban — JELZÉS, AZONNALI Bajdik-figyelem

#### 6. Trend a múlt héthez képest

- Mennyiség: ↑/↓/= (1 mondat)
- Áruházi diverzifikáció: ↑/↓/= (1 mondat)
- Partner-aktivitás: ↑/↓/= (1 mondat)

#### 7. 3 javaslat a heti vezetői meeting-re

Konkrét, akciózható:

- pl. *"A Lidl XV. ker. áruház 3 hete csökkenő mennyiségű — Schwikker felvegye-e velük a kapcsolatot?"*
- pl. *"A vidéki Karcag-i raktárban szabad kapacitás van — kezdeményezzünk-e új partner-szervezet bevonást?"*
- pl. *"Az Adományok Hete tavaszi kampány előkészítése elkezdődhet a következő héten."*

## Output-formátum

- Hossz: **1 oldal** (max 400 szó)
- Markdown — könnyen email-be / Slack-be másolható
- Számok pontossággal: kg-ra egész, % egy tizedes
- Hangnem: tényközpontú, vezetői, akcióra-hívó

## Adatkezelési szabály

- **Anonimizálás**: a partner-szervezetet az export anonim azonosítója szerint nevezed (`fovarosi-gyermekellato-A`).
- **GDPR-jelzés**: ha a SmartFront-export tartalmaz konkrét személyazonosító adatot, **AZONNAL JELEZD** a 5. szekcióban.
- **Nincs** kitalált adat: minden számot a CSV-ből számolsz.

---

## Iteratív promptok (ha a Cseh Balázsnak / vezetésnek finomítás kell)

```
A 7. szekció 3 javaslata túl általános. Konkretizáld — mindegyikhez adj 1-1 sornyi indoklást a CSV-adatokból.
```

```
Az áruházlánc-bontás % helyett kg-ban is. Plus a dashboard végére tedd be: "Top 5 hibázó partner-szervezet — Bajdik átnézze".
```

```
Készíts havi dashboardot az április hónapra a 4 heti export aggregálásával (smartfront-heti-export-2026-h13/h14/h15/h16).
```
