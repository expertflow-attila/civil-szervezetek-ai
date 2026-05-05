# Dévény Anna Alapítvány + Pető Intézet támogatói kör
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04 · **Terjedelem:** 1 oldal

---

### Helyzet

A Dévény Anna Alapítvány a koraszülött és sérülten született gyermekek korai fejlesztésével foglalkozik a DSGM módszerrel, gyógytornász posztgraduális képzést szervez, és családokat támogat. A Pető Intézet támogatói köre hasonló profilú: konduktív pedagógia, fogyatékos gyermekek családjai. A napi működés **dokumentum-intenzív**: NEAK eszközigénylések családonként egyedi indoklással, pályázatok (BGA, EFOP, NEA, vállalati CSR, EU), nemzetközi szakirodalom követése, adományozói kommunikáció.

### A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Jelenlegi időigény | AI-asszisztált | Megtakarítás |
|---|----------|-------------------|---------------|---------------|
| 1 | **NEAK eszközigénylés-asszisztens** (sablon + anonim előzmény + indoklás) | 4 óra/család | 30 perc/család | **~88%** |
| 2 | **Pályázatírás** (BGA, EFOP, vállalati CSR, EU) | 12-25 óra/pályázat | 5-10 óra/pályázat | **~60%** |
| 3 | **Nemzetközi szakirodalom követése** (cerebral palsy, koraszülött research) | 4-8 óra/hó | 1-2 óra/hó | **~75%** |

### Egyedi Dévény / Pető quick win

**NEAK eszközigénylés-asszisztens** — a Claude Desktop a `nyertes_kerelmek/` mappa korábbi sikeres igénylései alapján megírja az új gyermek anonim adataiból az igénylést, indoklással. Az alapítvány csak ellenőrzi és továbbítja. **Családonkénti 4 óra → 30 perc**, és a **sikerarány nő**, mert következetesebb a szövegezés (a NEAK ügyintézők ismerős szerkezetű érveléssel találkoznak).

### Eszköz-stack

- **Claude for Nonprofits** (ingyenes — jelentkezés szükséges, 2-4 hét átfutás)
- **Claude Desktop** + Filesystem MCP — lokális gépen, anonim NEAK kérelem-feldolgozás
- **Claude Project a pályázatokhoz** — felmegy minden korábbi pályázat, alapító okirat, statisztikák
- **Google NotebookLM** — DSGM módszer szakirodalma + nemzetközi cerebral palsy kutatás (havi 5-10 új PDF feltöltés)
- **DeepL Pro** (€7-30/hó) vagy Claude — angol szakcikk → magyar összefoglaló

### Költség

- **0-3 hónap:** €0-15/hó (Claude for Nonprofits + ingyenes eszközök, esetleg DeepL)
- **3-12 hónap:** ~€25-150/hó (Claude Pro/Team a stábnak)

### GDPR keret

Egészségügyi adat **különleges adatkategória** (GDPR 9. cikk). Kötelező:
- **Anonimizálás:** „6 hetes koraszülött lány, 1200g születési súly, jelenlegi tünetek..." — soha nem TAJ-szám, név, anya neve
- **Anthropic DPA** aláírása a Claude for Nonprofits / Team szerződés keretében
- **Helyi fájltárolás** az anonimizálatlan eredeti dokumentumoknak (titkosított merevlemez)
- **Szülői beleegyezés** módosítása: jelezni, hogy az alapítvány AI-eszközöket használ az adminisztrációban, anonimizált formában

### Mérőszámok 6 hét után

- NEAK eszközigénylés átlagos elkészítési ideje
- NEAK kérelem sikeraránya (előtte vs. utána)
- Pályázatírási idő (1 A/B teszt)
- Nemzetközi cikk-feldolgozás havi átlaga (most: ?, cél: 2x annyi)

### Következő lépés

1. **Vezetői + DPO megbeszélés** (1 óra)
2. **AI sáfár kijelölése** (javaslat: pályázatfelelős vagy adminisztratív vezető)
3. **Claude for Nonprofits jelentkezés** (lásd `06_claude_nonprofits_jelentkezesi_level.md`)
4. **Quick win pilot:** NEAK eszközigénylés-asszisztens 5 családdal 30 napra
5. **Mérés:** ha sikeres → minden családra kiterjeszteni 60. napra

**Kapcsolat:** Nagy Attila · hello@expertflow.hu
