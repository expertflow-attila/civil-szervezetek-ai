# Csomag #2 — Pályázatírás workflow EFOP-ra (Claude Code)

**Mit kapsz:** Claude Code-alapú pályázatírási workflow Dévény-specifikus EFOP-pályázatokhoz. **12-25 óra/EFOP-pályázat → 5-10 óra**, plus git-verzió.

**Kinek:** pályázatfelelős vagy adminisztratív vezető.

**Idő setup-ig:** 10 perc. **Idő első értékig:** 1-2 óra.

---

## 5 lépés

1. **Telepítsd Claude Code-ot**: `npm install -g @anthropic-ai/claude-code` → `claude login`
2. **Klónozd**: `git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git && cd civil-szervezetek-ai/04-deveny-peto/csomagok/02-palyazatiras-efop`
3. **Indítsd**: `claude .`
4. **Másold a session-prompt.md** tartalmát
5. **Iteráltatok** szekció-szekció, git commit-tal

---

## Workflow

A Claude Code:
1. **Olvas**: `sample-fajlok/`-ban a 2 nyertes Dévény-pályázat (anonim minta), DSGM-módszertan, 2024 statisztikák
2. **Strukturál**: EFOP-kötelező szekciók (sokkal részletesebb mint BGA — különösen a hatás-mérés és fenntarthatóság)
3. **Ír**: a `palyazatok/2026-efop-koraszulott-modernizacio.md`-be
4. **Iteráltat**: Te kérsz változtatásokat, Claude javít

---

## Részletes Claude Code workflow

A teljes session-prompt + CLAUDE.md példa lásd a Magyar Élelmiszerbank csomagján: [`05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga/`](../../../05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga/) — itt csak a Dévény-specifikus rész tér el (DSGM-módszertan + koraszülött-fejlesztés-fókusz).

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Dévény főoldal](../../) · [Hub](../../../)
