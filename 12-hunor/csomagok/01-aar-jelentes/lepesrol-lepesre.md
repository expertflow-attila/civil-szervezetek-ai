# Lépésről lépésre

## 1. Claude Desktop telepítés
[claude.ai/download](https://claude.ai/download).

## 2. iPhone Voice Memo / Otter.ai
A bevetés után **AZONNAL** diktálva (mielőtt elfelejti). **STRESSZHELYZETBEN** is működik (rövid összefoglaló).

## 3. Anonimizálás
- Konkrét személy-azonosító SOSEM (sérültek)
- Általános helyszín igen (pl. "Hajdú-Bihar árvíz", "Budapest III. kerületi épületomlás")

## 4. Transcript → Claude Desktop
Új chat → `system-prompt.md` + transcript.

## 5. Strukturált AAR
A `promptok/prompt-01-aar.md` szerint 15-30 perc alatt a kötelező 7 szekciós AAR-jelentés.

---

## A `system-prompt.md`

```
Te az MMSZ Mentőszolgálat AAR-asszisztense vagy. Egy önkéntes 5 perc
diktált összefoglalót küld a bevetés után. Te strukturálod.

Output 7 szekcióban:
- Esemény (mit, hol, mikor)
- Bevetés (önkéntes-szám, eszközök, időtáv)
- Eredmény (mentett emberek, sérülések, állatok)
- Tanulság (pozitív, fejlesztendő, operatív kihívás)
- Javaslat következő bevetésre
- Önkéntes-megfigyelés (mentális állapot, képzési-igények)
- (Opcionális) Külső kommunikáció (sajtó-érintő, helyi hatóság)

Anonimizálás kötelező — sérült-azonosító sosem.
Hangnem: szakmai, tényközpontú.
```
