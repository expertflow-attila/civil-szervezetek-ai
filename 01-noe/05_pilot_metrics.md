# NOE — 12-hetes pilot mérőszám-keret

**Cél:** mérhetővé tenni, hogy az AI tényleg időt-pénzt-energiát spórol-e — vagy csak forma-újdonság.

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05

---

## Általános elv

Heti 30 perces review pénteken. **Számokat mérünk, nem érzéseket.** Egyetlen szabály: ha 4 hét után nem mérhető a megtakarítás, leállunk azzal a use case-szel.

A 4./8./12. héten formális retro: mennek-e a célok, kit vonunk be.

---

## Fázis 1: Pilot (Hét 1-4) — 1 fő, tagi email-triage

| Mérőszám | Hét 0 (baseline) | Cél hét 4 | Mérés módja |
|----------|------------------|-----------|--------------|
| Email átlagos válaszidő (tagok) | 24-48 óra | <8 óra | Gmail label tracking |
| Email feldolgozási idő/db | 10-15 perc | 2-4 perc | stopperrel napi 5 levélen |
| AI-vel készített rész (% a végén) | 0% | 70%+ | önbevallás |
| AI-jel adott helytelen válasz aránya | nincs adat | <5% | retró |
| AI sáfár frusztrációs szint (1-5) | 5 (kezdő) | <3 | önbevallás |

**Kvalitatív review (4. hét):**
1. Mi tetszett az AI-jal?
2. Mi NEM működött?
3. Folytassuk a 2. fázissal? (igen / nem / módosítva)

---

## Fázis 2: Csapat (Hét 5-8) — 3-5 fő, helyi vezető Project + pályázatírás

| Mérőszám | Hét 4 | Cél hét 8 | Mérés módja |
|----------|-------|-----------|--------------|
| Helyi vezetők Project-használata | 0 | 30+ kérdés/hét | Claude Project metrik |
| Központi telefon-idő helyi vezetőknek | 1.5-2.5 óra/nap | <1 óra/nap | naplózás |
| Pályázat A/B teszt (BGA) | nincs adat | A/B mérve | egyszerre 2 pályázat |
| Stáb-tagok napi AI-használata | 1/5 | 4/5 | önbevallás |
| GDPR-protokoll dokumentálva | nem | igen | 1-2 oldal írott |

---

## Fázis 3: Skálázás (Hét 9-12) — egész szervezet

| Mérőszám | Hét 8 | Cél hét 12 | Mérés módja |
|----------|-------|------------|--------------|
| 250 helyi vezető Project-aktivizálva | 5-10 | 100+ | Project user count |
| Tagdíj-elmaradás early warning pilot | nincs | 1 régió aktív | régió-szintű |
| Heti megtakarított adminisztratív óra | 5-8 | 12-15 | óraszám-loggolás |
| Új tanácsadó onboarding ideje | 6-12 hónap | 2-4 hónap | datestamp tracking |
| Stáb-elégedettségi index (1-10) | 5-6 | 7-8 | anonim kérdőív |

**Skálázási döntés (12. hét):**
- Folytatjuk Claude for Nonprofits? Igen ha ROI +1, nem ha -1
- Bővítjük Claude Team-re? Igen ha 5+ napi user
- Új API-keretigény? Igen ha kifutott

---

## Adatlap-sablon — heti riport

```
Hét: __ (dátum: ____ - ____)
AI sáfár: ____

A) Megtakarítás
- Email válaszidő átlag: __ óra (előző hét: __ óra)
- Helyi vezető Project-kérdések: __ db (előző: __ db)
- Stáb-tagok napi AI-használata: __/__ fő

B) Mit tanultunk
- Mi működött JÓ:
- Mi NEM működött:
- Mit kell finomítani jövő hétre:

C) Probléma / blocker
- Kérdés a tanácsadótól: ____

D) Következő hét tervei
- Új use case: ____
- Bevonandó stáb-tag: ____
```

---

## Korai megálló-jelek

1. AI sáfár 2 héten át <3 óra/hét pilotra → vezetői döntés kell
2. Stáb-tagok 4. hét után sem nyitottak → onboarding gond, peer-coaching
3. Helyi vezető Project-ben 5+ ténybeli hiba → prompt finomítás kell
4. Audit logban nem-anonimizált adat → AZONNALI leállás, GDPR-incidens

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
