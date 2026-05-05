# Csomag #1 — Mentor eset-jegyzet strukturáló (BAGázs Claude Desktop)

**Mit kapsz:** A 120-150 mentor heti eset-jegyzeteit **30-60 perc helyett 5-10 perc** alatt strukturálja diktált összefoglalóból. **80% megtakarítás × 120-150 mentor × heti 1-2 jegyzet = óriási csapat-szintű impact.**

**Kinek:** A 120-150 önkéntes mentor + mentor-koordinátor.

**Idő setup:** 10 perc. **Első érték:** 25 perc (egy próba-jegyzet).

---

## 5 lépés

1. **Claude Desktop telepítés** ([claude.ai/download](https://claude.ai/download))
2. **Új chat** → `system-prompt.md` másolás
3. **Mentor 5 perc diktálás** mentee-találkozás után (anonim — A. mentee, B. mentor, X. gyerek)
4. **Whisper-transcript** (iPhone / Otter.ai)
5. **`promptok/prompt-01-jegyzet.md`** → strukturált eset-jegyzet 5-10 perc alatt

---

## Mit kapsz

**Bemenet (5 perces diktálás):**
> *"A. mentee, 35-os anya, 2 gyerek 8 és 12. Találkozás — heti 4. Bag. Jó hangulat. Ma: munkahely-keresés, segítettem önéletrajzot. Nehézség: helyi gyári pozíció ritka. Akció: jövő héten Erika-koordinátorral konzultáció lehet jó. Megfigyelés: A. magabiztosabb mint 4 hete, küldési készsége javult."*

**Kimenet (Claude — 5-10 perc):**

```markdown
# Mentor eset-jegyzet — 2026-04-15

## Mentor: B. (anonim) — Bag-i csoport
## Mentee: A. (35, anya) — találkozás 4

### Helyzet
A. mentee Bag-i családokat képviselő, 2 gyerek (8, 12). Munkanélküli.

### Mai találkozás
Téma: munkahely-keresés. B. mentor segített önéletrajz-formában.

### Akadályok
- Helyi (Bag-régió) gyári pozíciók ritkák
- A. képzettsége: alapfokú, helyi munkapiac-illeszkedés nehéz

### Akció
- Jövő héten: konzultáció Erika-koordinátorral (BAGázs munkavállalási program)
- Cél: Pest-megyei távolsági pozíciók feltérképezése

### Mentor-megfigyelés (szakmai)
- A. magabiztossága javult (összehasonlítva a 4 hete elsővel)
- Küldési készség pozitív — proaktívan keresi a megoldást
- Mentor-mentee kapcsolat erős (találkozás-arány stabil)

### Fejlődés-rangsor
- Önbizalom: ↑ (4-héten)
- Munka-keresés: ↑ (heti 2 új jelentkezés a múlt heti 0-ról)
- Általános családi-kontextus: stabil
```

---

## Aggregálás (mentor-koordinátor heti)

A 120-150 mentor **strukturált jegyzeteit** a mentor-koordinátor **AI-jal aggregálja** heti dashboard-tá:
- Mely mentor-mentee párnál jelentős fejlődés?
- Mely párnál stagnálás (kell-e koordinátori beavatkozás)?
- Top 3 közös téma a mentee-knél (pl. munkavállalás, gyermekvédelmi jelzés, anyagi nehézség) — coaching-program-fókusz?

Lásd `promptok/prompt-02-koordinator-aggregalas.md`.

---

## ⚠️ GDPR (magas)

- **Anonimizálás**: A. mentee, B. mentor, X. gyerek — sosem konkrét név
- **Etnikai hovatartozás** sosem említett ha nem szükséges
- Anthropic DPA aláírva
- Lokális tárolás (titkosított diszk)
