# Egyszülős Központ
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04 · **Terjedelem:** 1 oldal

---

### Helyzet

Az Egyszülős Központ 2005 óta online, 2018 óta budapesti fizikai központtal szolgálja az egyszülős családokat: ingyenes jogi, pszichológus, gyermekpszichológus és mediációs tanácsadás, gyász- és válási csoportok, közösségépítés. A napi működés legnagyobb terhe **a 20+ év alatt felhalmozott online tartalmi archívum kereshetetlensége**, a bejövő érdeklődők triage-e (ki melyik szakemberhez), a mediációs ülések jegyzőkönyvezése, és a csoport-szervezés.

### A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Jelenlegi időigény | AI-asszisztált | Megtakarítás |
|---|----------|-------------------|---------------|---------------|
| 1 | **20 éves archívum kereshetővé tétele** (Claude Project + Drive) | „Nem találom" → újraírás | <1 perc keresés szervezeti tudásból | **~90%** |
| 2 | **Mediációs jegyzőkönyv-asszisztens** (diktált összefoglaló → strukturált jegyzőkönyv) | 60-90 perc/ülés | 15-20 perc/ülés | **~75%** |
| 3 | **Bejövő érdeklődő triage és válasz-vázlat** | 10-15 perc/megkeresés | 2-4 perc/megkeresés | **~70%** |

### Egyedi Egyszülős Központ quick win

**Mediációs jegyzőkönyv-asszisztens** — a mediátor a 2 órás ülés után 5-10 perces hangfelvétel-összefoglalót diktál (Otter.ai vagy iPhone diktafon). A Claude Desktop strukturálja a központ formátumába: tényállás, megegyezés, hátralévő nyitott pontok, következő találkozó. **Mediátor heti 4-6 órát spórol**, és a jegyzőkönyvek konzisztensebbek lesznek.

### Eszköz-stack

- **Claude for Nonprofits** (ingyenes — jelentkezés szükséges, 2-4 hét átfutás)
- **Claude Desktop** + Google Drive MCP — a teljes online + offline tartalmi archívum elérése
- **Google NotebookLM** — családjogi tudásbázis (válás, gyermekelhelyezés, gyermektartás, közös szülői felügyelet 2026-os szabályok)
- **Otter.ai** vagy hasonló (ingyenes csomag elég kezdetnek) — meeting transcript a mediációs jegyzőkönyvekhez

### Költség

- **0-3 hónap:** €0 (Claude for Nonprofits + ingyenes eszközök + meglévő Drive)
- **3-12 hónap:** ~€18-50/hó (Claude Pro 1-2 főnek, vagy Team)

### GDPR keret — kritikus

A mediációs ülések **különleges adatkategória** (családi krízis, gyermekek). Kötelező:
- **Anthropic adatfeldolgozói szerződés** (DPA) aláírása a Claude for Nonprofits / Team csomag keretében
- **Anonimizálás** a promptba: „Anya (35), apa (38), 2 gyerek (5, 8)" — soha nem teljes név
- **Audit log** Claude Team-mel — ki mit kérdezett dokumentálva
- AI **soha nem ad terápiás tanácsot** közvetlenül — csak a stábnak munka-asszisztens

### Mérőszámok 6 hét után

- Mediációs jegyzőkönyv készítési ideje: most → cél
- Bejövő érdeklődők átlagos válaszidő: most → cél
- „Megtaláltam, amit kerestem" rate az archívumban: stáb-felmérés
- Új pszichológus/mediátor onboarding ideje: most → cél (NotebookLM-mel)

### Következő lépés

1. **Vezetői döntés** a pilot indításáról
2. **AI sáfár kijelölése** (javaslat: koordinátor vagy 1 mediátor)
3. **Claude for Nonprofits jelentkezés** (lásd `06_claude_nonprofits_jelentkezesi_level.md`)
4. **Adatvédelmi tisztviselő bevonása** a GDPR kerethez
5. **Quick win pilot:** mediációs jegyzőkönyv-asszisztens 1 mediátorral 30 napra

**Kapcsolat:** Nagy Attila · hello@expertflow.hu
