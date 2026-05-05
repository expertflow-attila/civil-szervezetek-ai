# Prompt #01 — Reggeli email-triage

**Mire jó:** A NOE központi Gmail `tagok_2026/` label-jén az új email-eket triage-ezi (kategorizál, sürgősséget rendel, válasz-vázlatot ad).

**Mikor használd:** Reggel 8:30-kor (a stáb-tag belépésekor).

---

## A prompt

```
Triage a `tagok_2026/`-emaileket — az utolsó 24 órában érkezetteket.

Mindegyikre:
1. Kategória (a system-prompt-ban definiált 11 kategória egyike)
2. Sürgősség (alacsony / normál / ⚠️ magas)
3. Összefoglaló 1 mondatban
4. Válasz-vázlat a NOE-hangnemben (3-5 mondat)

Záróként összesítő:
- Összes email
- Sürgősségi bontás
- Top 3 sablon-kategória ezen a napon
```
