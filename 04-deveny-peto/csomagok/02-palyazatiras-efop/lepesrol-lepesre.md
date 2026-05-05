# Lépésről lépésre — EFOP-pályázat Claude Code (Dévény)

**Idő:** 15 perc setup, 1-2 óra első érték.

---

## 1. Claude Code telepítés
```bash
npm install -g @anthropic-ai/claude-code
claude login
```

## 2. Klónozás
```bash
git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git
cd civil-szervezetek-ai/04-deveny-peto/csomagok/02-palyazatiras-efop
```

## 3. Indítás
```bash
claude .
```

A CLAUDE.md automatikusan beolvasódik (Dévény + EFOP kontextus).

## 4. Session-prompt másolás
A `promptok/prompt-01-efop-uj.md` tartalmát bemásolod a Claude Code terminálba.

## 5. Iteráltatok
A Claude Code megírja az 1. verziót szekció-szekció (10-12 oldal), git commit-tal. 1-2 óra alatt **kész**.

---

## EFOP különbségek a BGA-tól

A `CLAUDE.md`-ben részletesen — főleg:
- 10-12 kötelező szekció (BGA-nak 9)
- Indikátor-tábla (output / eredmény / hatás)
- 5 év fenntartási kötelezettség (EU-társfinanszírozás)
- Esélyegyenlőség-szekció KÖTELEZŐ
