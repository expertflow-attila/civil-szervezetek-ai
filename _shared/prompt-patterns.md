# Prompt-pattern könyvtár — Civil Szervezetek AI

**Cél:** újrahasznosítható prompt-építőkockák, amelyekből szervezet-specifikus prompt csomagok állíthatók össze. A `02_starter_prompts.md` minden szervezetnél ezekből kompozit.

**Használati elv:** minden prompt 3 részből áll: **kontextus** (mit csatolok), **feladat** (mit csináljon az AI), **korlátok** (mit ne tegyen, hogyan validáljon).

---

## A — Adminisztratív munka

### A1. Hivatalos szöveg vázlat (pályázat, beszámoló, jelentés)

```
Csatolom a {{forrásdokumentum}} (felhívás / korábbi beszámoló / belső anyag).
+ Csatolom 2-3 korábbi NYERTES vagy ELFOGADOTT verziónkat sablonnak.

Készíts egy {{X}} oldalas vázlatot az új {{dokumentum típus}}-hoz:
- A korábbi nyertes verzió szerkezetét és hangnemét kövesd
- A felhívás minden kötelező pontját töltsd ki
- Maradj a karakterszám-korlátokon belül
- Ha hiányzik egy adat, jelöld: [HIÁNYZIK: konkrét kérdés]
- SOHA ne találj ki konkrét számot, dátumot, eseményt — csak amit a források adnak

Cél: 1. verzió, amit a stáb finomít.
```

### A2. Email-triage és válasz-vázlat

```
Itt egy bejövő levél: {{email tartalma vagy csatolva}}.

1. Kategorizáld: [{{kategória 1}} / {{kategória 2}} / {{kategória 3}} / krízis / egyéb]
2. Foglald össze 1-2 mondatban, mire vágyik a feladó
3. Készíts válasz-vázlatot a szervezet stílusában (csatolom a {{N}} mintát)
4. Ha krízis-jelzés: ⚠️ tetején, koordinátor azonnal

Soha ne küldd el — csak vázlatot adj.
```

### A3. Jegyzőkönyv strukturálás (mediációs / stáb / közgyűlés)

```
Csatolom a {{ülés}} {{X}} perces hangfelvétel-átiratát.

Készíts hivatalos jegyzőkönyvet a szervezet formátumában:
- Résztvevők (a beszélők alapján)
- Napirendi pontok (rekonstruálva)
- Döntések (kiemelve: ki, mit, mikorra vállalt)
- Akciópontok táblázatban
- Nyitott kérdések

Anonimizálás: {{ahogy a szervezet kéri, pl. "A. szülő, B. szülő"}}
Ne foglalj össze szó szerint — strukturálj.
```

### A4. Adományozói riport

```
Csatolom a {{támogató}} 2025-ös támogatási megállapodását + költési részletezést.

Készítsd el a támogatói riportot:
- Mire költöttük (számokkal, projekt-bontás)
- Konkrét eredmények (anonimizált esetszámmal)
- 2-3 emberi történet — anonim, érzelmi súllyal, de hiteles (sosem találd ki)
- Köszönet és tervek
- Vizuális javaslat: hova diagram, hova fotó

Hangnem: meleg, hiteles, számokkal alátámasztott — nem marketing.
```

---

## B — Tudásbázis és önkiszolgáló keresés

### B1. Belső assistant (Claude Project / NotebookLM)

```
Vagyok a {{szervezet}} {{munkakör}}.
Kérdés: {{konkrét adminisztratív / szakmai kérdés}}

Válaszolj a szervezeti tudásbázisból (alapító okirat, ÁSZF, eljárások,
sablonok, szabályzatok), amik a Claude Project-ben vannak.

Forrás-hivatkozással válaszolj. Ha nem tudod biztosan, mondd ki:
"Ezt a központi irodából kell megkérdezni: {{telefon/email}}".
SOHA ne találj ki adatot.
```

### B2. Új munkatárs onboarding kérdés

```
Új vagyok a szervezetnél. Dolgozom egy {{ügyfél/eset}}-tel:
{{anonim helyzet 2-3 mondatban}}

Kérdéseim:
1. Milyen ellátások / szolgáltatások járhatnak nekik?
2. Mi a szervezetünk standard eljárása?
3. Kihez fordulhatok a stábból további segítségért?
4. Vannak-e kapcsolódó intézmények/szakemberek?

Forrás-hivatkozással válaszolj.
SOHA ne találj ki jogszabály-számot vagy intézményi protokollt.
```

### B3. Krízis-eligazító

```
{{anonim helyzet 2-3 mondatban}}
Hova küldjem ezt a {{szülőt / klienst}}?

Válaszodban:
- Konkrét intézmény / hatóság neve
- Pontos elérhetőség (telefon, cím, nyitvatartás)
- Mit kell magával vinnie (papírok, igazolások)
- Ha sürgős: 24/7-es elérhetőség
- Forrás-hivatkozás (NotebookLM / belső dokumentum)
```

### B4. Archívum kereső (régi tartalmak közt)

```
Téma: {{milyen anyagot keresek}}
Cél: {{kinek szól / mire használom}}

A szervezet {{X év}} tartalom-archívuma alapján:
1. Listázd a 4-5 legrelevánsabb cikket / anyagot link + 2 mondatos összefoglalóval
2. Ha az anyagok elavultak (>3 év), jelezd
3. Javasolj: van-e érdemes összevonás / frissítés?
```

---

## C — Mentor / önkéntes / koordinátor munkák

### C1. Párosítási javaslat

```
Új {{mentee/mentorált}} profil (ANONIM):
- Helyzet: {{rövid leírás}}
- Földrajz: {{város/régió}}
- Időbeli rugalmasság: {{...}}
- Preferencia: {{ha van: nem, kor, korábbi tapasztalat}}

Csatolom az aktív {{mentorok/önkéntesek}} anonim profil-tábláját.

Adj 3 javaslatot, mindegyikre 2-3 mondatos indoklással:
- Miért illik a profilja?
- Mire kell figyelni a párosításnál (esetleges óvatosság)?

A koordinátor dönt — te csak javasolj.
```

### C2. Önkéntes-onboarding video transzkripció + összefoglaló

```
Csatolom a {{N}} perces önkéntes-bevezető videó transzkriptjét.

Készítsd el az új önkéntes számára:
1. 1 oldalas összefoglaló (mit kell tudnia 5 perc alatt)
2. 5 leggyakoribb félreértés és tisztázás
3. 3 kérdés, amit feltétlenül kérdezzen meg a koordinátortól
4. Checklist az első hétre
```

---

## D — Kommunikáció és tartalom

### D1. Social media batch (heti 5 poszt egyetlen forrásból)

```
Csatolom a {{forrás}} (cikk / esemény / belső blog).

Készíts 5 social media posztot:
- 1 LinkedIn (max 1300 karakter, profi hangnem, 1 CTA)
- 1 Facebook (max 500 karakter, érzelmi, 1 kép-javaslat)
- 1 Instagram caption (max 2200, hashtag 5-10)
- 1 hírlevél bevezetés (3 mondat, intim hangnem)
- 1 Twitter/X (280 karakter)

Ne használj túl-marketinges kifejezést ("forradalmi", "életet-változtató").
A szervezet hangneme {{leírás}}: {{példa mondat}}
```

### D2. Hírlevél vázlat

```
Csatolom a havi tevékenységi log Excel-jét + 2-3 fotót.

Készíts havi hírlevelet a {{célközönség}}-nek:
- Lead (1 érzelmi nyitó történet, anonim)
- 3 számszerű frissítés (mit csináltunk)
- 1 felhívás (esemény / önkéntes-keresés / adomány)
- 1 történet (egy család / kliens története, hiteles)

Hangnem: meleg, számokkal alátámasztott, sosem álszent.
```

### D3. Sajtó-anyag / interjú-felkészítő

```
Téma: {{interjú témája}}
Riporter / lap: {{...}}
Esemény-háttér: {{...}}

Készíts 1 oldalas felkészítőt:
- 3 fő üzenet (15 másodperces "talking points")
- 5 várható nehéz kérdés + 30-mp-es válasz mindegyikre
- 2 számszerű adat, ami minden válaszban beleszőhető
- 1 emberi történet, ami illusztrál (anonim)

Cél: a szóvivő ne a fejéből találja ki, hanem felkészülten menjen.
```

---

## E — Adatfeldolgozás és riport

### E1. Tevékenységi adat → vezetői dashboard

```
Csatolom a {{Q1/havi}} tevékenységi log Excel-jét.

Készíts vezetői dashboardot:
1. Top {{N}} legaktívabb {{egység}} (rendezvényszám, tagváltozás)
2. Top {{N}} csökkenő {{egység}} (vizsgálatra javasolva)
3. Régiónkénti / kategóriánkénti összehasonlítás
4. Trendek: melyik területen nőtt drámaian az igény?
5. {{N}} javaslat a következő időszakra

Output: 1 oldalas dashboard, számokkal alátámasztva.
```

### E2. Külföldi szakirodalom magyar összefoglaló

```
Csatolom a {{cikk címe, folyóirat, év}}.

Készíts magyar nyelvű szakmai összefoglalót:
- 1 mondatos lényeg
- Vizsgálati módszer (3-4 mondat)
- Eredmények (számszerűen, ahogy a cikk adja)
- A magyar gyakorlat számára 3 tanulság
- Korlátok és kritikák
- Hivatkozási stílus: APA 7

Célközönség: {{szakemberek}}
```

### E3. Beszámoló-szövegezés (közhasznúsági / pályázati)

```
Csatolom a {{adatforrás}} (Excel / Sheets / log).

Írd meg a {{év}} szöveges {{beszámoló típus}}-t:
- Az illetékes nyomtatvány szerkezetét kövesd
- Hivatalos, de érthető nyelv
- Számszerű adatok CSAK a forrásból — ne találj ki
- Kategóriánként külön bekezdés
- 5 mondatos "tervek" rész

A kimenet bekerül a hivatalos űrlapba — markdown nélkül.
```

---

## F — Általános biztonsági szabályok minden prompt elejéhez

```
A szervezet érzékeny adatokkal dolgozik. SOHA:
- ne tedd a promptba a teljes nevet, lakcímet, TAJ-számot, születési dátumot
- ne találj ki konkrét eseményt, számot, dátumot, hatóság-választ
- ne adj közvetlen tanácsot a kiszolgáltatott személyeknek (csak a stábot segítsd)
- ne küldj el levelet ellenőrzés nélkül — minden vázlat marad

MINDIG:
- anonimizálj előbb (pl. "Anya 32, 2 gyerek 5 és 8 éves, fővárosi")
- jelöld a hiányzó adatot: [HIÁNYZIK: ...]
- adj forrás-hivatkozást
- ha bizonytalan vagy: mondj ki "ezt kérdezzétek meg embertől"
```

---

## Hogyan használd ezt a fájlt új szervezetnél

1. **Válassz 8-12 patternt** a fenti listából, ami illik a szervezet napi munkájához
2. **Specializáld** — töltsd ki a `{{...}}` placeholder-eket a szervezet konkrétumaival
3. **Adj hozzá 2-4 szervezet-EGYEDI promptot** (ezek nincsenek itt — pl. NEAK eszközigénylés Dévény-nek, krízis-eligazító Fonjuk-nak)
4. **Tedd bele a `02_starter_prompts.md`-be** strukturált sorszámmal

Az így összerakott `02_starter_prompts.md` a stáb mindennapi referenciája.
