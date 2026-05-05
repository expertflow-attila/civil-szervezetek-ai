# Prompt #01 — Éves SROI-elemzés

**A prompt** (Claude Code terminálba):

```
Készítsd el a 2026-os éves SROI-elemzést a BAGázs számára.

Forrás-olvasás:
- sample-fajlok/mentor_jegyzetek_aggregalt_2026.md (12 havi aggregálva)
- sample-fajlok/sroi-2024-bazis.md (1 Ft → 3.27 Ft alapszámítás)
- sample-fajlok/nyertes-2024-aruhazak.md (CSR-támogatások 2024)

Pályázat-szerkezet (a CLAUDE.md "SROI-módszertan kötelező szekciói" listája):
1. Bevezetés + szervezet-kontextus
2. SROI-módszertan-keret
3. Érdekelt felek
4. Eredmények (anonim, aggregált)
5. SROI-számítás
6. Érzékenység-elemzés
7. Határok és kockázatok
8. Javaslatok 2027-re

Cél hossz: 10-15 oldal.
Output: sroi-jelentesek/2026-eves-sroi.md

Kötelező:
- Anonim aggregálás (sosem konkrét család / mentee)
- Hivatkozás a 2024-bazisra (1 Ft → 3.27 Ft)
- 5 javaslat 2027-re

Készítsd először TOC-ot (1 lépés), aztán szekció-szekció (több lépés).
Minden lépés után git commit.
```
