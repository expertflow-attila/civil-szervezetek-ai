# Fonjuk Egymás Hálóját Egyesület
## AI bevezetés a napi működésbe — vezetői összefoglaló

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04 · **Terjedelem:** 1 oldal

---

### Helyzet

A Fonjuk Egymás Hálóját Egyesület krízisben lévő szülők peer-alapú támogató hálózata. A működés különlegessége: **kis stáb + kiterjedt sorstársi mentor-rendszer**, ahol a koordinátor szerepe kritikus a krízishelyzetbe került szülő gyors és diszkrét eligazításában (gyermekvédelmi jelzőrendszer, családok átmeneti otthonai, regionális krízisközpontok, anyaotthonok). A munka **kiemelten érzékeny adatokkal** dolgozik, ezért az AI bevezetésnél a GDPR és az etikai keret minden technikai döntés előtt áll.

### A 3 legnagyobb azonnali nyereség (90 napon belül)

| # | Use case | Jelenlegi időigény | AI-asszisztált | Megtakarítás |
|---|----------|-------------------|---------------|---------------|
| 1 | **„Krízis-eligazító" NotebookLM** (intézmények, ellátóhelyek, hatóságok) | 30 perc keresgélés stresszhelyzetben | <30 másodperc | **~95%** |
| 2 | **Mentor-mentee párosítás javaslat** (anonimizált jellemzők alapján) | 1-2 óra/párosítás | 5 perc + koordinátor döntés | **~85%** |
| 3 | **Pályázatírás + adományozói riport** (NEA, vállalati CSR) | 8-15 óra/anyag | 3-6 óra/anyag | **~60%** |

### Egyedi Fonjuk quick win

**Belső krízis-eligazító NotebookLM** — egy zárt notebook, amibe feltöltjük a gyermekvédelmi jelzőrendszer szabályait, a regionális családok átmeneti otthonai listáját elérhetőséggel, az anyaotthon-helyek aktuális elérhetőségét, és a sürgős szociális ellátási útmutatókat. **Krízishelyzetre adott reakcióidő 2 óra → 5 perc**, mert a koordinátor azonnal megtalálja, hova küldje a szülőt — és magyarul, forrás-hivatkozással kapja a választ.

### Eszköz-stack — minimális, biztonságos

- **Google NotebookLM** (ingyenes) — krízis-eligazító tudásbázis (offline források, NEM tartalmaz egyéni esetadatot)
- **Claude for Nonprofits** (ingyenes — jelentkezés szükséges)
- **Claude Desktop** + **Filesystem MCP** — lokális gépen, anonimizált eset-támogatás (semmi nem megy felhőbe semmihez kötötten)
- **NEM cloud-szinkronizált tárhely** az ügyfél-eset adatoknak. Lokális merevlemez, titkosítva (FileVault Mac / BitLocker Windows).

### Költség

- **0-12 hónap:** €0-30/hó (NotebookLM ingyenes + Claude for Nonprofits ingyenes + esetleg 1 Pro fiók)

### GDPR és etikai keret — KÖTELEZŐ

Ez a szervezet **nem hivatalos krízisellátó**, hanem peer-támogatás. Ezért:

1. **AI SOHA nem érintkezik közvetlenül a krízishelyzetű szülővel** — nincs chatbot, nincs automata válasz. Az AI csak a koordinátor és a mentorok belső munka-asszisztense.
2. **Anonimizálás minden promptban:** sosem teljes név, lakcím, gyermek neve. „Anya (32), 2 gyerek (3, 7), bántalmazó kapcsolatból menekül, fővárosi" — ennyi.
3. **Lokális fájltárolás** az eset-jegyzeteknek. Drive vagy iCloud TILOS érzékeny eset-adatra.
4. **Krízisjelzés humán protokoll:** ha bárhol felmerül öngyilkossági / bántalmazási akut veszély → AZONNALI humán beavatkozás, AI csak utólag dokumentál.
5. **Adatvédelmi tisztviselő (DPO) megerősítése** kötelező a bevezetés előtt.

### Mérőszámok 6 hét után

- Krízishelyzetre adott elsődleges reakcióidő: most → cél
- Sikeres mentor-mentee párosítások aránya: most → cél
- Koordinátor mentális terhelése (önbevallásos heti kérdőív)
- Új mentor onboarding ideje

### Következő lépés

1. **Vezetői + DPO megbeszélés** az etikai keretről (kötelező első lépés)
2. **Kizárólag belső, lokális használat** kimondása írásban
3. **Claude for Nonprofits jelentkezés** (lásd `06_claude_nonprofits_jelentkezesi_level.md`)
4. **Quick win pilot:** krízis-eligazító NotebookLM összeállítása 1 hónap alatt

**Kapcsolat:** Nagy Attila · hello@expertflow.hu
