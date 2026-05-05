# NOE — Nagycsaládosok Országos Egyesülete
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04 · **Terjedelem:** 1 oldal

---

### Helyzet

A NOE 16 000 tagcsalád és 250 helyi közösség szolgálatát látja el 7 regionális központon keresztül, 5 ingyenes tanácsadói szolgálattal (jogsegély, otthonteremtés, családi/szociális ellátások, fogyasztóvédelem, gyermeknevelés). A jelenlegi munkamennyiség az adminisztratív stábra és a tanácsadókra aránytalanul nagy terhet ró: **napi 50-100 megkeresés**, évente 5-15 pályázat, 250 helyi szervezet jelentésének összesítése, közhasznúsági beszámoló (2026-tól iFORM nyomtatványon).

### A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Jelenlegi időigény | AI-asszisztált | Megtakarítás |
|---|----------|-------------------|---------------|---------------|
| 1 | **Tagi email triage és válasz-vázlat** (Gmail + Claude) | 10-15 perc/levél | 2-4 perc/levél (vázlat-jóváhagyás) | **~70%** |
| 2 | **Pályázatírás** (BGA, NEA, EFOP) Claude Project-tel | 8-20 óra/pályázat | 3-8 óra/pályázat | **~60%** |
| 3 | **Helyi vezető assistant** (Claude Project a 250 helyi vezetőnek) | 1-2 óra/kérdés telefonon | <5 perc önkiszolgálva | **~95%** |

### Egyedi NOE quick win

**Helyi vezető assistant** — egy közös Claude Project, ami tartalmazza az összes szervezeti dokumentumot (alapító okirat, ÁSZF, programszervezési gyakorlatok, beszámoló-sablonok, kedvezmény-szabályzat). 250 helyi vezető önkiszolgáló módon kérdezhet rá: *„Hogyan szervezek családi napot 80 főre 200e Ft-ból?"*. Egyszer 8-10 órás munka beépíteni, ezt követően 250 ember megterhelése csökken.

### Eszköz-stack

- **Claude for Nonprofits** (ingyenes — jelentkezés szükséges, 2-4 hét átfutás)
- **Claude Desktop** + Filesystem MCP + Google Drive MCP + Gmail MCP — egy dedikált „AI munkagépre" telepítve a központi irodában
- **Google NotebookLM** (ingyenes) — jogi tudásbázis (családi pótlék, GYED, GYES, családi adókedvezmény, lakhatási támogatás aktuális szabályai)

### Költség

- **0-3 hónap:** €0 (Claude for Nonprofits + ingyenes eszközök)
- **3-12 hónap:** ~€125-250/hó (Claude Team 5-10 user) — opcionális, ha skálázunk

### GDPR keret

Tagi adatok érzékenyek (vallási hovatartozás esetenként, gyermekek), de a NOE működése nem krízis-fókuszú. Standard GDPR-konform Claude Team beállítás (zero retention, audit log) elegendő. **Soha ne adjunk teljes nevet/címet/TAJ-számot a promptba** — anonimizáljunk.

### Mérőszámok 6 hét után

- Tagi email átlagos válaszidő: most → cél (mérés a Gmail label-ekkel)
- Tanácsadói várólista hossza: most → cél
- Új pályázat írási ideje: A/B teszt (1 AI-jal, 1 hagyományosan)
- Új munkatárs onboarding ideje: 6-12 hónap → 2-4 hónap

### Következő lépés

1. **Vezetői döntés:** kísérleti pilot indításáról (2 órás meeting)
2. **AI sáfár kijelölése** a stábból (1 fő, koordinátor)
3. **Claude for Nonprofits jelentkezés** benyújtása (lásd `06_claude_nonprofits_jelentkezesi_level.md`)
4. **Quick win pilot indítása:** tagi email triage 30 napra

**Kapcsolat:** Nagy Attila · hello@expertflow.hu
