# Csomag #3 — Pályázatírás workflow (Claude Code)

**Mit kapsz:** Claude Code-alapú pályázatírási workflow a NOE-nak. **Évente 5-15 pályázat × 8-20 óra/db = 40-300 óra évente.** AI-asszisztált: **3-8 óra/pályázat**, plus git-verziókezelés.

**Kinek:** pályázatfelelős vagy adminisztratív vezető, aki **Claude Code CLI-vel** kényelmes (vagy VS Code-ban).

**Idő setup-ig:** 10 perc. **Idő első értékig:** 1-2 óra (BGA pályázat 1. verzió).

---

## 5 lépés

1. **Telepítsd Claude Code-ot**: `npm install -g @anthropic-ai/claude-code` → `claude login`
2. **Klónozd a repót**: `git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git && cd civil-szervezetek-ai/01-noe/csomagok/03-palyazatiras-bga`
3. **Indítsd**: `claude .` (a `CLAUDE.md` automatikusan beolvasódik)
4. **Másold a session promptot**: a `session-prompt.md` tartalmát a Claude Code terminálba
5. **Iteráltasd**: a Claude többszöri körben írja meg a pályázatot, minden lépést git-be commit-olja

---

## Workflow

A Claude Code:
1. **Olvas**: `sample-fajlok/`-ban a 2 korábbi nyertes pályázat + alapító + 2024 statisztikák
2. **Strukturál**: NEA / BGA / EFOP kötelező szekciók szerint TOC
3. **Ír**: szekció-szekció a `palyazatok/` mappába
4. **Commit-ol**: minden szekció után git-tel
5. **Iteráltat**: te kérsz finomításokat, Claude javít

---

## Várható eredmény

Egy 8-12 oldalas BGA-pályázat, strukturált formában:
- 1. Pályázó szervezet (NOE — 16 000 tagcsalád, 250 helyi, 7 régió)
- 2. Helyzetfelmérés
- 3. Célok (pl. "új helyi szervezet 5 vidéki városban")
- 4. Módszer
- 5. Időbeli ütemezés
- 6. Költségvetés (8 millió Ft bontva)
- 7. Mérhető hatás
- 8. Fenntarthatóság
- 9. Kockázatok

Minden számra forrás-hivatkozás. Hiányzó adat `[HIÁNYZIK: ...]` jelölve.

---

## Skálázás

A `csomagok/03-palyazatiras-bga/` mappa más pályázatokra (NEA, EFOP, EU, vállalati CSR) **másolható** — csak a `sample-fajlok/`-ban kell lecserélni a 2 korábbi nyertes pályázatot a megfelelő típusra:

```bash
cp -r csomagok/03-palyazatiras-bga csomagok/03b-palyazatiras-nea
# A sample-fajlok/-ban cseréld le a BGA mintákat NEA mintákra
```

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [NOE főoldal](../../) · [Hub](../../../)

> **Részletes Claude Code workflow** lásd a Magyar Élelmiszerbank ugyanezen csomagján: [`05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga/`](../../../05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga/) — ott teljes CLAUDE.md és session-prompt példa.
