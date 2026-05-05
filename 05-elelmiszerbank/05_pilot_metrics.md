# Magyar Élelmiszerbank — 12-hetes pilot mérőszám-keret

**Cél:** mérhetővé tenni, hogy az AI tényleg időt-pénzt-energiát spórol-e — vagy csak forma-újdonság.

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05

---

## Általános elv

Hét végi 30 perces review minden pénteken. **Számokat mérünk, nem érzéseket.** Egyetlen szabály: ha 4 hét után nem mérhető a megtakarítás, akkor leállunk azzal a use case-szel.

A 4. és 8. és 12. héten formális retro: mennek-e a célok, kit vonunk be, mire váltunk át.

---

## Fázis 1: Pilot (Hét 1-4) — egy fő, egy use case

**Pilot use case:** donor-jelentés-asszisztens (Claude Desktop + Claude Project)

### Kötelezően mérendő

| Mérőszám | Hét 0 (baseline) | Cél hét 4 | Mérés módja |
|----------|------------------|-----------|--------------|
| Donor-jelentés készítési idő (1 jelentés) | 8-15 óra | <3 óra | stopperrel mérve a 4. héten egy éles donor-riport |
| AI-vel készített rész (% a végén) | 0% | 70%+ | retró, AI sáfár becslése |
| Hibák / pontatlanságok száma a 1. verzióban | nincs adat | <3 | utólagos átolvasásnál jelölve |
| Donor visszajelzés a riportra | előző hónap | nem rosszabb | direkt visszakérdezés a donornak |
| AI sáfár frusztrációs szint (1-5) | 5 (kezdő) | <3 | önbevallás |

### Kvalitatív review (4. hét végén)

1. Mi tetszett az AI-jal?
2. Mi NEM működött?
3. Folytassuk-e a 2. fázissal? (igen / nem / módosítva — milyen módosítással)
4. Kit vonunk be a 2. fázisba?

---

## Fázis 2: Csapat (Hét 5-8) — 3-5 fő, 3 use case

**Új use case-ek:** partner-szervezet email-triage + tudásbázis-építés Claude Project + 1 pályázat A/B tesztben.

### Kötelezően mérendő

| Mérőszám | Hét 4 | Cél hét 8 | Mérés módja |
|----------|-------|-----------|--------------|
| Partner-szervezet email első válasz-idő | 24-48 óra | <8 óra | Gmail label tracking |
| Naponta AI-jal triage-elt email-ek száma | 0 | 30-50 | AI sáfár loggolja |
| Tudásbázis-kérdések (Claude Project hits) | 0 | 20+ kérdés/hét | Claude Project metrik |
| Stáb-tagok napi AI-használata (% akik) | 1/5 | 4/5 | önbevallás |
| Pályázat A/B teszt — AI-vel írt vs. hagyományos | nincs adat | A/B mérve | egyszerre két pályázatot indítunk azonos kategóriában (ha van mód) |

### Csapat-szintű mérőszámok

| Mérőszám | Hét 4 | Cél hét 8 | Megjegyzés |
|----------|-------|-----------|------------|
| Heti megtakarított adminisztratív óra (összesen) | 5-8 óra | 12-18 óra | óraszám-loggolás minden résztvevőnél |
| GDPR-protokoll dokumentálva | nem | igen | 1-2 oldalas írott protokoll |
| Audit log review (havi) | nem | igen | Claude Team-mel |

### Kvalitatív review (8. hét végén)

1. Mi a legértékesebb visszajelzés a stábtól?
2. Hol vannak vakfoltok (use case, amire nem gondoltunk)?
3. Bővítsünk-e a teljes szervezetre? Ha igen, ki maradjon ki és miért?

---

## Fázis 3: Skálázás (Hét 9-12) — egész szervezet

**Új use case-ek:** önkéntes-onboarding videó-átirat + összefoglaló, áruházi felesleg-előrejelzés (1 régió pilot), sajtó-prompt-csomag.

### Kötelezően mérendő

| Mérőszám | Hét 8 | Cél hét 12 | Mérés módja |
|----------|-------|------------|--------------|
| Heti megtakarított adminisztratív óra (összesen) | 12-18 óra | 25-35 óra | óraszám-loggolás |
| Önkéntes-onboarding ideje (új belépő → első éles akció) | 2-3 hét | 4-7 nap | datestamp-tracking |
| Áruházi felesleg-előrejelzés pilot ROI | nincs adat | +5-10% mentett mennyiség | 1 régió 4 hetes mérés |
| Sajtó-megkeresés válaszidő | 24 óra | 4 óra | egy heti minta |
| Stáb-elégedettségi index (1-10) | 5-6 | 7-8 | anonim kérdőív |

### Skálázási döntés (12. hét végén)

| Kérdés | Válasz | Akció |
|--------|--------|-------|
| Folytatjuk Claude for Nonprofits-tal? | **Igen** ha ROI +1, **nem** ha -1 | DPA-újraértékelés |
| Bővítjük Claude Team csomagra? | **Igen** ha 5+ napi user | €100-350/hó budget terv |
| Új API-keretigény? | **Igen** ha kifutott | Anthropic-támogatáshoz fordulás |
| Folytatjuk az áruházi előrejelzést? | **Igen** ha +5% ROI | Bővítés egy másik régióra |
| Stáb-tréningezést kérünk? | Igénytől függően | Külső konzultáns vagy belső peer-coaching |

---

## Adatlap-sablon — heti riport

```
Hét: __ (dátum: ____ - ____)
AI sáfár: ____

A) Megtakarítás
- Donor-jelentés idő: __ óra (előző hét: __ óra)
- Email-triage time/email: __ perc (előző hét: __ perc)
- Tudásbázis-kérdések: __ db (előző hét: __ db)
- Stáb-tagok napi AI-használata: __/__ fő

B) Mit tanultunk
- Mi működött JÓ:  
- Mi NEM működött:  
- Mit kell finomítani jövő hétre:

C) Probléma / blocker
- Kérdés a tanácsadótól (Nagy Attila): ____
- Kérdés a stáb-vezetőtől: ____

D) Következő hét tervei
- Új use case: ____
- Bevonandó stáb-tag: ____
- Mérendő új mérőszám: ____
```

A heti riportot Slack/email-en küldjük el a vezetőknek, hogy lássák a trendet.

---

## Kockázatok és korai jelek

### Korai megálló-jelek (hetente nézzük)

1. **Az AI sáfár 2 héten át <3 óra/hét időt fordít a pilotra** → nem prioritás, vagy vezetői döntésre szorul
2. **A stáb-tagok 4. hét után sem nyitottak az AI-ra** → onboarding gond, peer-coaching kell
3. **Donor-jelentés első verziójában 5+ ténybeli hiba** → AI-prompt finomítás kell, ne a donor lássa
4. **Stáb-tag „lop az időmből az AI" érzés** → lassítás, használati eseteket szűkíteni
5. **Audit logban nem-anonimizált adat található** → AZONNALI leállás, GDPR-incidens jelentés

### Eszkalációs út

| Ki | Mire | Mikor |
|----|-----|-------|
| AI sáfár | Napi tech-kérdések | önállóan |
| Vezetés | Use case-kiterjesztés, költségvetés | havi (4. és 8. hét) |
| DPO | GDPR-incidens, érzékeny adat-kezelés | azonnal ha bármi |
| Külső tanácsadó | Stratégiai kérdések, leskálázás | kérésre, de min. 1x/fázis |

---

## Hosszú távú (12 hét után) mérőszámok

Ezek nem most kerülnek mérésre, de jó tudni:

- **Évi pályázat-szám:** AI előtt 5-15, AI után 8-20 (cél: kapacitás-növelés ugyanazon stábbal)
- **Évi mentett tonna mennyiség:** AI előtt baseline, AI után +5-10% (áruházi előrejelzés alapján)
- **Stáb-fluktuáció:** AI előtt baseline, AI után csökkenés várható (kevesebb monoton munka)
- **Donor-elégedettség:** éves felmérés, +0.5-1 pont a 10-es skálán

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
