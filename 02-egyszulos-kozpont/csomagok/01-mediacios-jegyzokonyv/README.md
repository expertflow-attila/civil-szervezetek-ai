# Csomag #1 — Mediációs jegyzőkönyv-asszisztens (Claude Desktop)

**Mit kapsz:** A mediátor a 2 órás ülés után **5 perc diktált összefoglalót** készít (iPhone diktafon vagy Otter.ai). A Claude Desktop **strukturálja a központ formátumába**: tényállás, megegyezés, hátralévő nyitott pontok, következő találkozó, mediátori megfigyelés. **60-90 perc/ülés → 15-20 perc**.

**Kinek:** mediátor, aki heti 4-6 mediációs ülést tart.

**Idő setup-ig:** 10 perc. **Idő első értékig:** 25 perc (egy próba-ülés).

---

## 5 lépés

1. **Telepítsd Claude Desktop-ot** + Filesystem MCP (a szervezet `03_claude_desktop_config.json` szerint)
2. **Otter.ai vagy iPhone diktafon** — bizonyosodj meg róla hogy működik (tesztfelvétel a szervezeti-tudaslemezen)
3. **Ülés után**: 5 perces összefoglalót diktálsz (anonimizálva: "A. szülő (35), B. szülő (38), 2 gyerek 5/8")
4. **Whisper transcript** (Otter.ai automatikusan, vagy iPhone Voice Memo-ban "Transcribe")
5. **Másold a Claude Desktop-be**: `system-prompt.md` + a transcript → strukturált jegyzőkönyv 15-20 perc alatt

---

## Várható eredmény

**Bemenet (5 perc diktálva):**
> *"A. szülő és B. szülő válási mediáción. 2 gyerek, 5 és 8. A. anyagi helyzete most nehezebb, B. tartásdíjat fizet 80 ezret havonta. Ma megegyeztek hogy szombatonként B. apa, vasárnap A. anyával vannak a gyerekek. Iskolakezdési költség közösen, fél-fél. Ami nyitva: nyári szünet beosztás — még gondolkodunk, nyár közepi mediációs ülés. Tipp a mediátortól: mindkét szülő dicséri a gyerekek alkalmazkodását, kommunikáció jó."*

**Kimenet (Claude — 15-20 perc):**

```markdown
# Mediációs jegyzőkönyv — 2026 április 12

## Felek
- A. szülő (35) — anya
- B. szülő (38) — apa
- Gyermekek: X (8), Y (5)

## Tényállás
A felek válási mediációs folyamatban — 2. ülés.
A. anyagi helyzete jelenleg szűkösebb. B. havi 80 000 Ft tartásdíjat fizet.

## Megegyezés ezen az ülésen
1. **Hétvégi gyermekfelügyelet**: szombat — B. szülő, vasárnap — A. szülő
2. **Iskolakezdési költség** (2026 szeptember): közösen viselik, 50-50%

## Nyitott pontok
- Nyári szünet beosztás (4 hét szünet a tervezett kötelező intézményi szünetből)

## Következő mediációs ülés
- Időpont: 2026 június eleje (nyár közepi felmerülés előtt)
- Napirend: nyári szünet részletes beosztás

## Mediátor megfigyelése
A felek konstruktív hangnemben tárgyalnak. Mindkét szülő pozitívan értékeli
a gyermekek alkalmazkodását. A kommunikáció érett, érzelmi reaktivitás
nem domináns. **Folytatás javasolt.**
```

---

## GDPR (KRITIKUS)

- **Anonimizálás kötelező** — sosem teljes név, lakcím, gyermek neve
- **Hangfelvétel** lokálisan (Otter.ai vagy iPhone), Drive-ra **ne** töltsd
- **Az átirat** anonimizálva kerül a Claude-be
- **Eredeti hangfelvétel** titkosított diszkre (FileVault Mac), 30 nap után törlés

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Egyszülős főoldal](../../) · [Hub](../../../)
