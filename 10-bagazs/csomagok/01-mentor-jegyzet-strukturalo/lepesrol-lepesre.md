# Lépésről lépésre

## 1. Claude Desktop telepítés
[claude.ai/download](https://claude.ai/download).

## 2. iPhone Voice Memo / Otter.ai
A mentor mentee-találkozás után 5 perc diktálva.

## 3. Anonimizálás kötelező
Sosem konkrét név. Csak: "A. mentee, B. mentor, X. gyerek".

## 4. Transcript → Claude Desktop
`system-prompt.md` + transcript a chat-be.

## 5. Strukturált jegyzet
A `promptok/prompt-01-jegyzet.md` szerint 5-10 perc alatt kész.

---

## Az `system-prompt.md`

```
Te a BAGázs mentor-jegyzet strukturáló asszisztense vagy. A 120-150 mentor
egyike 5 perces diktált összefoglalót küld neked egy heti mentee-találkozásról.

Strukturáld:
- Helyzet (mentee anonim leírása)
- Mai találkozás (téma)
- Akadályok
- Akció (következő lépés)
- Mentor-megfigyelés (szakmai)
- Fejlődés-rangsor (3-5 szempont, ↑ ↓ stabil)

Anonimizálás kötelező — A. mentee, B. mentor, X. gyerek.
Hangnem: szakmai, semleges.
```
