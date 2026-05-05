# NOE Pályázatírás session-prompt — copy-paste a Claude Code terminálba

---

## Példa: 2026 BGA pályázat — "Új helyi NOE-szervezetek 5 vidéki városban"

```
Készítsd el a 2026-os BGA pályázatot az alábbi témára:
"Új helyi NOE-szervezetek alapítása 5 vidéki városban (Békéscsaba, Sopron, Salgótarján, Szekszárd, Hódmezővásárhely) — vidéki nagycsaládos közösségépítés."

Forrás-olvasás:
- sample-fajlok/2024_eves_szamok.md (a NOE 2024 számai)
- sample-fajlok/programszervezesi-utmutato.md (a Csomag #1-ből)
- A CLAUDE.md "Pályázat-kötelező szekciók" listája

Pályázat-fókusz:
- 5 új helyi szervezet alapítása az 5 vidéki városban
- Egyenként 30-50 családból induló közösség
- 12 hónapos pilot, utána tagdíj-finanszírozott önfenntartó
- Költségvetés-keret: 8-12 millió Ft

Output:
- TOC először (1 lépés, beleértve a 9 kötelező szekciót)
- Aztán szekció-szekció (több lépés, mindegyik git commit)
- A pályázat fájlja: palyazatok/2026-bga-uj-helyi-szervezetek.md
- 1-oldalas vezetői összefoglaló: palyazatok/2026-bga-uj-helyi-szervezetek--exec-summary.md

Szabályok:
- Számokat csak forrásból (2024_eves_szamok.md vagy a megadott pilot-mintákból)
- Hivatkozás kötelező minden konkrét számra
- Ha hiányzik adat (pl. konkrét vidéki városok családszáma): [HIÁNYZIK: kérdezd a központi irodát]
- A 2024-2025-ös nyertes pályázatok hangnemét kövesd ([HIÁNYZIK: feltöltendő minta-pályázatok])
```

---

## Iteratív promptok (a kapott 1. verzió finomításához)

```
A költségvetés-szekciót részletezzed. 8 millió Ft keret, ebből:
- 50%: regionális koordinátor 12 hónapra (új pozíció, vidéki fókusz)
- 25%: 5 város × 200 000 Ft alapítási költség (helyiség, kommunikáció, sablonok)
- 15%: utazás-támogatás (központi → 5 város × havi 2 utazás)
- 10%: anyagok, IT, beszámoló

Mindegyik tételhez 2-3 mondatos indoklást.
```

```
A 7. szekció (Mérhető hatás) konkretizáld:
- 5 új helyi szervezet alapítva → 12 hónap után
- Min 30 család / város → 150 új tagcsalád összesen
- 5 közösségi rendezvény / szervezet / év → 25 esemény / év
- Önfenntartás: 24 hónap után tagdíj-finanszírozott

A számokat indokold a 2024-es vidéki helyi szervezet pilotjaival.
```

```
A pályázat befejezett. Ellenőrizd:
- Hossz 10-12 oldal? (megfelelő?)
- [HIÁNYZIK: ...] jelölések — listázd kit kell megkérdezni
- A NOE-hangnem konzisztens (családpolitikai, nem marketing)?

Készítsd a 1-oldalas vezetői összefoglalót.
```
