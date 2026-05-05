# Magyar Élelmiszerbank — operatív prompt-csomag

**14 általános + 8 Élelmiszerbank-specifikus prompt magyar nyelven**

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05

---

## Hogyan használd

1. Másold a kiválasztott promptot a Claude Desktop / Claude.ai felületre
2. Töltsd ki a `{{...}}` placeholder-eket
3. Csatold a hivatkozott fájlokat (Claude Desktop: drag-and-drop)
4. Ellenőrizd a kimenetet — **soha ne küldd ki ellenőrzés nélkül**

**Általános szabály:** sosem írj a promptba teljes nevet, partnerszervezet-szintű helymeghatározást, rászoruló-családok adatát. Anonimizálj előbb (pl. "vidéki Tesco-egység" vagy "fővárosi gyermekellátó partner").

---

## A — Élelmiszerbank-specifikus promptok

### A1. Donor-jelentés generálás (havi)

```
Csatolom a SmartFront 2026 {{hónap}} export Excel-jét (anonimizálva: 
áruházlánc + kg + dátum, NEM partnerszervezet konkrét neve).

A Claude Project-ben benne van:
- A Tesco-formátumú riport-sablon (ha {{Tesco}} a célpont)
- 5 anonim hatás-történet
- A 2024-es éves számok (10 685 tonna, 20 mrd Ft, 27 580 124 kg CO2)

Készítsd el a {{donor neve}} havi riportját:
- A sablon szerkezetét pontosan kövesd
- Mentett kg az {{donor neve}} áruházaiból (export szűrve)
- Becsült rászorulók száma (átlag 200 fő/tonna)
- 1 anonim hatás-történet a sablonokból
- CO2-becslés: kg × 1.46 kg CO2/kg (élelmiszerlánc-átlag)

A kimenet 1. verzió — a kommunikációs felelős finomít.
```

### A2. SmartFront elszámolás-validátor

```
Itt egy új partner-szervezet feltöltés a SmartFront-ban (csatolva).

Az áruházlánc-elszámolási szabályok (a Project-ben):
- Tesco: kg + dátum + fotó kötelező
- Aldi: kg + dátum + fotó + lejárati dátum kötelező
- Lidl: kg + dátum + fotó + receipt-szám
- (etc.)

Validáld:
1. Az elszámolás formátuma megfelel az adott áruházláncnak?
2. A lejárati dátum nem előzi meg a feltöltést?
3. A fotó megvan és értelmes (nem üres mappa)?
4. Anomáliákat sorold fel: [HIBA: ...] vagy [GYANÚS: ...]
5. Ha minden OK: ✓ JÓVÁHAGYHATÓ

Csak emberi review-t kérj a [GYANÚS] és [HIBA] sorokra.
```

### A3. Partner-szervezet matching új áruházhoz

```
Új áruház csatlakozott: {{áruházlánc, kerület/település}}.
Heti felesleg-becslés: {{kg}}/hét, jellemzően {{típus: pékáru / friss / 
konzerv / fagyasztott}}.

Csatolom az aktív partner-szervezetek anonim profilját (földrajz, 
kapacitás, korábbi átvételi típusok, kihelyezési kapacitás).

Adj 5 javaslatot, mindegyikre 2-3 mondatos indoklással:
- Földrajzi közelség
- Kapacitás illeszkedés
- Korábbi tapasztalat ezzel az áruháztípussal
- Kockázat: van-e ami óvatosságra int?

A koordinátor dönt — te csak javasolj.
```

### A4. CO2 / hatás-történet kalkulátor

```
Donor: {{áruházlánc}} {{egység-azonosító}}
Időszak: {{hó/év}}
Mentett mennyiség: {{kg}}

Generálj donor-szintű hatás-snippetet:
- CO2-becslés: {{kg}} × 1.46 = ___ kg CO2 megelőzött kibocsátás
- Auto-egyenérték: CO2 / 2295 = ___ autó éves károsanyag-kibocsátása
  (a teljes 2024-es 27 580 124 kg = 12 015 autó országosan)
- Becsült érintett emberek: {{kg}} / 5 = ___ fő (átlag fejadag)
- 1-2 mondatos érzelmi szöveg ("ennyi kg pékárut megmentve, 
  ennyi családot támogattunk a {{negyed}}-ban")

Ne találj ki konkrét családi történetet a számokból.
```

### A5. Pályázatírás — élelmiszermentés/élelmiszerpazarlás

```
Csatolom a {{pályázat}} kiírást (BGA / NEA / EFOP / vállalati CSR / EU).
+ Csatolok 2 korábbi NYERTES pályázatunkat sablonnak.
+ A Project-ben: alapító okirat, 2024 éves beszámoló, 5 év statisztika.

Készítsd el a pályázat 1. verzióját:
- A kiírás minden kötelező pontját töltsd ki
- A nyertes pályázat hangnemét és érvelési struktúráját kövesd
- Hivatkozz a 2024-es számokra (10 685 tonna, 243 919 nélkülöző,
  27 580 124 kg CO2)
- Hangsúlyozd a 4 raktáros országos lefedettséget
- Ha hiányzik adat, jelöld [HIÁNYZIK: ...]

A célunk az 1. verzió, amit a stáb finomít — ne találj ki adatot.
```

### A6. Vezetői dashboard heti

```
Csatolom a SmartFront 2026 hét {{X}} export-Excelét.

Készíts 1 oldalas vezetői dashboardot:
1. Összes mentett kg (heti, kumulált hónap, kumulált év)
2. Top 5 áruház (heti)
3. Top 5 karitatív partner (heti, mennyit kapott)
4. CO2-egyenérték a héten
5. Becsült érintett emberek a héten
6. Trend: a múlt hét adatához képest
7. 2-3 figyelmeztetés (pl. "a Lidl XII. kerület 3 hete csökkenő,
   érdemes utánanézni")

Hangnem: tényszerű, vezetői, akcióra hívó.
```

### A7. Sajtó-megkeresés válasz-vázlat

```
Csatolom a sajtó-megkeresést a {{lap}} riporterétől, téma:
{{élelmiszerbiztonság / élelmiszerpazarlás / ünnepi gyűjtés /
NÉBIH / EU-pályázat}}.

A Project-ben: NÉBIH-útmutatók, FELIR-eljárás, 2024 éves számok,
korábbi sajtó-válaszaink.

Készíts 1 oldalas válasz-vázlatot:
- 3 fő üzenet (15 másodperces "talking points")
- Konkrét számok 2024-2025-ből (mindig hivatkozva)
- 1 emberi történet sablon (anonim, ne találj ki konkrétumot)
- 2 várható nehéz kérdés + 30-mp válasz

A kommunikációs felelős finomít és válaszol.
```

### A8. Adóigazolás (1%-os SZJA-felajánlóknak)

```
Csatolom a NAV-tól kapott 1%-os felajánló-listát ({{év}}).

A sablon a Project-ben: hivatalos adóigazolás formátum (köszönet +
jogi kötelező elemek + összegszerű elszámolás + dátum + aláírás).

Generáld le mindegyik felajánlónak az igazolást:
- Név (ahogy a NAV-tól megkaptuk)
- Felajánlott összeg
- Dátum (kibocsátás)
- Egyedi sorszám (sorszám-formátum a sablonban)

Output: 1 PDF / felajánló, batch módban.
```

---

## B — Általános civil-szervezet promptok

### B1. Email-triage és válasz-vázlat (650+ partnerhez)

```
Itt egy bejövő email partnertől / érdeklődőtől.

1. Kategorizáld: [igénylés / elszámolás-kérdés / csatlakozási szándék /
   probléma-jelentés / sajtó / általános / egyéb]
2. Foglald össze 1-2 mondatban, mire vágyik a feladó
3. Készíts válasz-vázlatot az Élelmiszerbank stílusában
   (csatolom a mintaszövegeket)
4. Ha krízis-jelzés (élelmiszermérgezés, partneri probléma):
   ⚠️ KRÍZIS — vezető azonnali bevonása

Soha ne küldd el — csak vázlat.
```

### B2. Közhasznúsági éves beszámoló (iFORM 2026-tól)

```
Csatolom a 2025-ös év SmartFront éves export-ját + tagi statisztikát +
előző évi közhasznúsági jelentést.

Írd meg a 2025-ös szöveges közhasznúsági beszámolót:
- A bírósági iFORM nyomtatvány szerkezetét kövesd
- Hivatalos, érthető nyelvezet
- Számszerű adatokat csak a forrásból — ne találj ki
- Külön bekezdés: élelmiszer-redisztribúció, partner-szervezet
  támogatás, adományozói kommunikáció, lakossági gyűjtések
- 5 mondatos "2026-os tervek" rész

Kimenet bekerül az iFORM-ba — markdown nélkül.
```

### B3. Jegyzőkönyv strukturálás

```
Csatolom a {{ülés}} {{X}} perces hangfelvétel-átiratát.

Készíts hivatalos jegyzőkönyvet:
- Résztvevők (a beszélők alapján)
- Napirendi pontok (rekonstruálva)
- Döntések (kiemelve: ki, mit, mikorra vállalt)
- Akciópontok táblázatban: feladat | felelős | határidő
- Nyitott kérdések a következő ülésre

Ne foglalj össze szó szerint — strukturálj.
```

### B4. Új munkatárs / önkéntes onboarding kérdés

```
Új vagyok az Élelmiszerbankon. Dolgozom egy {{partner / áruház /
adományozó}}-val:
{{anonim helyzet 2-3 mondatban}}

Kérdéseim:
1. Mi a standard eljárás ilyen esetre?
2. Kihez fordulhatok a stábból (Cseh Balázs / Nagygyörgy András /
   Schwikker Zsófia / Bajdik János / Fehér Balázs)?
3. Vannak NÉBIH / FELIR / élelmiszerbiztonsági szabályok,
   amiket tudnom kell?
4. Hol találom a sablonokat / szerződés-mintákat?

Forrás-hivatkozással válaszolj a NotebookLM dokumentumokból.
SOHA ne találj ki eljárást vagy elérhetőséget.
```

### B5. Önkéntes párosítási javaslat

```
Új önkéntes profil (ANONIM):
- Helyzet: {{rövid leírás}}
- Földrajz: {{város/régió}}
- Időbeli rugalmasság: {{...}}
- Készségek: {{sofőr / nehéz dobozok / iroda / pakolás / koordináció}}
- Preferencia: {{áruházi / raktári / iroda / esemény-stand}}

Csatolom az aktív projektek + szabad helyek táblázatát.

Adj 3 javaslatot, mindegyikre 2-3 mondatos indoklással:
- Miért illik a profilja?
- Mire kell figyelni?

A koordinátor dönt — te csak javasolj.
```

### B6. Adományozói riport (vállalati CSR)

```
Csatolom a {{cég neve}} 2025-ös támogatási megállapodását + a
felhasznált összeg részletezését.

Készítsd el a riportot:
- Mire költöttük (számokkal, projekt-bontásban)
- Konkrét eredmények (kg mentett, partnerek száma, érintett emberek)
- 2-3 emberi történet anonim, érzelmi súllyal (sosem találj ki)
- 2024-es CO2-számokkal alátámasztva
- Köszönet + 2026-os tervek
- Vizuális javaslat: hova diagram, hova fotó

Hangnem: meleg, hiteles, számokkal — nem marketing.
```

### B7. Belső tudásbázis kérdés-válasz

```
Vagyok az Élelmiszerbank {{munkakör}}.
Kérdés: {{konkrét adminisztratív / szakmai kérdés}}

Példa: "Mit csinálok a partnertől visszahozott 25 kg lejárt
joghurttal? Mi a NÉBIH által előírt selejtezési protokoll?"

Válaszolj a Project-tudásbázisból (NÉBIH-útmutató, ÁSZF, eljárás-
szabályzat). Forrás-hivatkozással.

Ha nem tudod biztosan: "Ezt Cseh Balázzsal vagy Schwikker
Zsófiával kell egyeztetni: kapcsolat@elelmiszerbank.hu" —
SOHA ne találj ki eljárást.
```

### B8. Önkéntes-onboarding videó-átirat + összefoglaló

```
Csatolom a 30 perces önkéntes-bevezető videó átiratát (Whisper-ből).

Készítsd el az új önkéntes számára:
1. 1 oldalas összefoglaló — "amit muszáj tudnod 5 perc alatt"
2. 5 leggyakoribb félreértés és tisztázás
3. Checklist az első hét akcióira
4. 10 kérdéses tudásteszt (multiple choice + magyarázat)
5. 3 kérdés, amit feltétlenül kérdezzen meg a koordinátorától

Hangnem: barátságos, tényszerű, motiváló (de nem giccs).
```

### B9. Hírlevél (havi adományozói)

```
Csatolom a havi tevékenységi log Excel-jét + 3 fotót + 1-2 partneri
visszajelzést.

Készíts havi hírlevelet az adományozóknak:
- Lead: 1 érzelmi nyitó történet (anonim)
- 3 számszerű frissítés (kg, partner, esemény)
- 1 felhívás (esemény / önkéntes-keresés / új áruházi együttműködés)
- 1 partneri történet (anonim, hiteles)
- Köszönet a támogatóknak

Hangnem: meleg, számokkal alátámasztott, sosem álszent.
Elkerülendő: "forradalmi", "életet-változtató", "egyedülálló".
```

### B10. Logisztikai prioritás (napi reggel)

```
Csatolom a mai napra jelzett áruházi feleslegeket (lánc + kerület +
kg + típus + romlandóság).

Készíts prioritás-sorrendet a furgonkoordinátornak:
1. Sürgős (romlandó, ma délelőtt felveendő)
2. Fontos (frissesség kritikus, délután)
3. Normál (konzerv, fagyasztott — tervezhető)
4. Halasztható (ami holnap is jó)

Ha a furgon-kapacitás véges: jelöld melyik partner kapja melyiket.
A koordinátor dönt — te csak javasolj sorrendet.
```

### B11. Beszámoló külső gyűjtésről

```
Csatolom a {{esemény}} Excel-export-ját (résztvevő partnerek,
gyűjtött kg, helyszín-szerinti bontás).

Készíts 2 oldalas beszámolót:
- Vezetői összefoglaló (top 3 üzenet)
- Eredmények számokkal (összes kg, partnerek, érintett emberek)
- Top 5 helyszín
- Tanulság a következő évre (3 javaslat)
- Köszönet a résztvevőknek

Hangnem: tényszerű + emberi.
```

### B12. Külföldi szakirodalom magyar összefoglaló

```
Csatolom a {{cikk címe, folyóirat, év}} angol szakcikket az
élelmiszerpazarlás / élelmiszerbankok / nonprofit logisztika
témakörből.

Készíts magyar nyelvű szakmai összefoglalót:
- 1 mondatos lényeg
- Vizsgálati módszer (3-4 mondat)
- Eredmények (számszerűen, ahogy a cikk adja)
- A magyar Élelmiszerbank számára releváns 3 tanulság
- Hivatkozási stílus: APA 7

Célközönség: vezetés és pályázat-felelős.
```

### B13. Stábmegbeszélés jegyzőkönyv

```
Csatolom a {{dátum}} stábmegbeszélés átiratát (Otter.ai vagy hasonló).

Készíts hivatalos jegyzőkönyvet:
- Résztvevők
- Napirendi pontok
- Döntések (ki, mit, mikorra)
- Akciópontok táblázatban
- Nyitott kérdések

Ne foglalj össze szó szerint — strukturálj.
```

### B14. Új áruházi együttműködés-vázlat

```
Új áruházlánc / áruház érdeklődik csatlakozásért: {{lánc, üzlet}}.

Csatolom a meglévő Tesco-szerződésünket sablonként.

Készíts kezdő javaslat-csomagot:
1. 2 oldalas "miért éri meg az áruháznak" (CO2, CSR, NÉBIH-megfelelés)
2. Szerződés-vázlat módosítva az új láncra
3. SmartFront-feltöltési protokoll-leírás
4. Heti / havi riport-minta amit a lánc kapni fog
5. Kapcsolattartó nálunk: Schwikker Zsófia

A csapat finomít és tárgyal.
```

---

## Tippek

- **Mindig ellenőrizd a kimenetet** — a Claude néha ír olyan számot, ami nem a forrásból jön.
- **Iteratív munka:** ne várj 1 promptra tökéletes kimenetet. "A 3. bekezdést írd át formálisabban."
- **Sablon-mentés:** ha valami 5x egymás után jól megy, mentsd el a Claude Project Custom Instructions-be.
- **Tilos:** ne tedd be a teljes SmartFront export-ot egyszerre. Anonimizált oszlopok.
- **Mérj:** írd fel hányszor használtad heti szinten, mennyi időt spóroltál. 2 hét után döntés: érdemes-e fizetős csomagra váltani.

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
