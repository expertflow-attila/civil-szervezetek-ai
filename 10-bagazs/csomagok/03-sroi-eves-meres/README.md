# Csomag #3 — SROI éves mérés (BAGázs Claude Code)

**Mit kapsz:** A 120-150 mentor heti jegyzetei → **éves SROI-elemzés** automatikusan. **80-120 óra → 30-40 óra.** Kódszintű, git-verziózott munka.

**Kinek:** BAGázs hatás-mérés-felelős vagy adminisztratív vezető.

**Idő setup:** 15 perc. **Első érték:** 1 nap (1. verzió).

---

## 5 lépés

1. **Claude Code telepítés**: `npm install -g @anthropic-ai/claude-code` → `claude login`
2. **Repo klónozás**: `git clone ...` → `cd 10-bagazs/csomagok/03-sroi-eves-meres`
3. **Claude Code indítás**: `claude .` (a CLAUDE.md beolvasódik)
4. **Session-prompt** (`promptok/prompt-01-sroi-elemzes.md`) → strukturált elemzés
5. **Iteratív** finomítás 5-7 körön át, **git commit**-tal minden lépésnél

---

## Mit fog csinálni

A Claude Code:
1. **Olvas**: a `mentor_jegyzetek_aggregalt_2026.md` (12 havi aggregált), a 2024 SROI-bázis (1 Ft → 3.27 Ft), a `nyertes-2024-aruhazak.md`
2. **Strukturál**: SROI-jelentés a kötelező 8 szekció szerint (helyzet, módszer, érdekelt felek, eredmények, SROI-számítás, érzékenység-elemzés, határok, javaslatok)
3. **Ír**: a `sroi-jelentesek/2026-eves-sroi.md`
4. **Commit-ol**: minden szekció után git-tel
5. **Iteráltat** kérésre

---

## Mit fog adni

10-15 oldalas jelentés:
- Bevezetés + szervezet-kontextus
- SROI-módszertan
- Érdekelt felek (mentee-k, mentorok, családok, közösség, adományozók)
- Eredmények (anonim, aggregált — pl. "25 fő nyílt munkaerőpiacon")
- SROI-számítás: bemenet → eredmény → társadalmi-érték
- Érzékenység-elemzés
- Határok
- 5 javaslat 2027-re

A jelentés a `palyazatok/`-ban használható (NEA, EFOP, vállalati CSR).

---

## ⚠️ GDPR

- **Aggregált, anonim** adat — sosem konkrét család / mentee
- Etnikai hovatartozás aggregált statisztikában
- Anthropic DPA aláírva
