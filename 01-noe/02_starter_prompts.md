# Starter prompt-csomag — civil szervezetek napi munkájához
## 14 sablon prompt magyar nyelven

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04

---

## Hogyan használd

1. Másold a kiválasztott promptot a Claude Desktop / Claude.ai felületre
2. Töltsd ki a `{{...}}` placeholder-eket
3. Csatold a hivatkozott fájlokat (Claude Desktop: drag-and-drop, Claude.ai: papírkapocs ikon)
4. Ellenőrizd a kimenetet — **soha ne küldd ki ellenőrzés nélkül**

**Általános szabály:** sosem írj a promptba teljes nevet, TAJ-számot, lakcímet. Anonimizálj előbb (pl. „Anya 35, 2 gyerek 5 és 8 éves, Budapest III. kerület").

---

## 1. Pályázat első verzió (BGA, NEA, EFOP)

```
Itt a {{pályázat neve}} kiírás PDF-je.
Csatolom a szervezetünk korábbi nyertes pályázatát ({{év}}, {{projekt}}), 
az alapító okiratot és a 2025-ös éves beszámolót.

Készítsd el a pályázat első verzióját a következő szempontokkal:
- A felhívás minden kötelező pontját töltsd ki
- A nyertes pályázat hangnemét és érvelési struktúráját kövesd
- Maradj a megadott karakterszámokon belül
- Ha hiányzik egy adat, jelöld [HIÁNYZIK: ...] formában

A célunk az 1. verzió, amit a stáb finomít — ne találj ki adatokat.
```

## 2. Email-triage és válasz-vázlat (Gmail-ből)

```
Itt egy bejövő email a tagunktól / érdeklődőtől.

1. Kategorizáld: [jogi / pszichológus / mediációs / ügyintézés / krízis / 
   tagdíj / kedvezmény / egyéb]
2. Foglald össze 1-2 mondatban, mire vágyik a kérdező
3. Készíts egy válasz-vázlatot a szervezetünk tipikus stílusában 
   (csatolom a `valaszsablonok/` mappa 5 mintáját)
4. Ha krízis-jelzés van benne (öngyilkosság, bántalmazás, gyermekbántalmazás), 
   AZONNAL jelezd a válasz tetején: ⚠️ KRÍZIS — koordinátor azonnali bevonása

Soha ne küldd el a választ — csak vázlatot adj.
```

## 3. Közhasznúsági beszámoló szöveges rész (iFORM-hoz)

```
Csatolom a 2025-ös év activity log Excel-ét, a tagi statisztikákat 
és az előző évi közhasznúsági jelentést.

Írd meg a 2025-ös szöveges közhasznúsági beszámolót:
- A bírósági iFORM nyomtatvány szerkezetét kövesd
- A nyelvezet legyen hivatalos, de érthető
- Számszerű adatokat csak az Excel alapján használj — ne találj ki
- Készíts külön bekezdést minden közhasznú tevékenységi kategóriához
- A végén: 5 mondatos „2026-os tervek" rész az előző évi 
  beszámoló stílusában

A kimenet bekerül az iFORM űrlapba, így markdown nélkül, sima szöveggel.
```

## 4. Mediációs jegyzőkönyv strukturálás (Egyszülős Központ)

```
Csatolom a 2 órás mediációs ülés diktált összefoglalóját (10 perc hangfelvétel 
átirata).

Készítsd el a központ formátumú jegyzőkönyvét anonimizáltan:
- Tényállás (max 5 mondat, semleges hangnem)
- Felmerült konfliktus-pontok (felsorolás)
- Megegyezés (mit fogadtak el a felek)
- Hátralévő nyitott pontok (lista)
- Következő találkozó időpontja és napirendje
- Mediátor megfigyelése (max 3 mondat, szakmai)

Anonimizálás: „A. szülő" és „B. szülő", gyermekek „X (kor)" és „Y (kor)".
```

## 5. NEAK eszközigénylés (Dévény / Pető)

```
Itt egy gyermek anonim terápia-előzménye + a kért eszköz műszaki leírása.
Csatolok 3 korábbi NYERTES NEAK kérelmünket sablon-formaként.

Készítsd el az új eszközigénylést:
- A NEAK formanyomtatvány szerkezetét kövesd
- Az indoklás hivatkozzon a DSGM módszertan elveire
- A funkcionális javulás várható ütemét konkrétan írd le
- A költséghatékonysági érvet hangsúlyozd (otthoni vs. intézményi terápia)
- Sosem találj ki orvosi adatot — csak amit a csatolt dokumentum tartalmaz
- Ha hiányzik adat, jelöld: [HIÁNYZIK: kérdezd meg a szülőt]

A végeredményt a szülő szakértő ellenőrzi és aláírja.
```

## 6. Helyi vezető assistant (NOE)

```
Vagyok a NOE {{város}} helyi szervezet vezetője.
Kérdés: {{konkrét szervezési vagy adminisztratív kérdés}}

Válaszolj a NOE szervezeti tudásból (alapító okirat, ÁSZF, programszervezési 
gyakorlatok, beszámoló-sablonok, kedvezményrendszer, tagdíj-szabályok), amik 
a Claude Project-ben vannak.

Ha nem tudod biztosan, mondd ki: „Ezt a központi irodából kell megkérdezni: 
+36-1-... vagy noe@noe.hu" — soha ne találj ki adatot.
```

## 7. Helyi szervezet jelentések összesítése (NOE)

```
Csatolom a 2026 Q1-es helyi szervezet jelentéseket (Excel fájlok).

Készíts vezetői összefoglalót:
1. Top 10 legaktívabb helyi szervezet (rendezvényszám, taglétszám-növekedés)
2. Top 10 legtöbb tagvesztést szenvedett szervezet (vizsgálatra javasolva)
3. Régiónkénti összehasonlítás (7 régió)
4. Trendek: melyik tanácsadói terület iránti igény nőtt drámaian?
5. 5 javaslat a Q2-re

A kimenet 1 oldalas vezetői dashboard, számokkal alátámasztva.
```

## 8. Mentor-mentee párosítási javaslat (Fonjuk / Egyszülős)

```
Új mentee profil (ANONIM):
- Helyzet: {{rövid leírás}}
- Földrajz: {{város/régió}}
- Gyermek(ek) száma és kora: {{...}}
- Időbeli rugalmasság: {{...}}
- Mentor-preferencia: {{ha van: nem, kor, korábbi tapasztalat}}

Csatolom az aktív mentorok anonim profil-tábláját (Sheets export).

Adj 3 javaslatot, mindegyikre 2-3 mondatos indoklással:
- Miért illik a profilja?
- Mire kell figyelni a párosításnál (esetleges óvatosság)?

A koordinátor dönt — te csak javasolj.
```

## 9. Krízis-eligazító kérdés (Fonjuk, NotebookLM)

```
{{anonim helyzet 2-3 mondatban}}
Hova küldjem ezt a szülőt?

Válaszodban:
- Konkrét intézmény / hatóság neve
- Pontos elérhetőség (telefon, cím)
- Mit kell magával vinnie (papírok)
- Ha sürgős: 24/7-es elérhetőség
- Forrás-hivatkozás (NotebookLM)
```

## 10. Archívum kereső (Egyszülős Központ)

```
Téma: {{milyen anyagot keresek}}
Cél: {{kinek szól / mire használom}}

Az Egyszülős Központ Drive-ján található 20+ év tartalom alapján:
1. Listázd a 4-5 legrelevánsabb cikket / anyagot link + 2 mondatos 
   összefoglalóval
2. Ha az anyagok elavultak (>3 év), jelezd
3. Javasolj: van-e érdemes összevonás / frissítés ezekből egy új 
   útmutatóra?
```

## 11. Adományozói riport vázlat

```
Csatolom a {{adományozó/támogató neve}} 2025-ös támogatási megállapodását 
és a felhasznált összeg részletezését.

Készítsd el a támogatói riportot:
- Mire költöttük (számokkal, projekt-bontásban)
- Konkrét eredmények (anonimizált esetszámmal: „43 család kapott 
  pszichológiai segítséget")
- 2-3 emberi történet anonim, érzelmi súllyal (de hiteles, sosem találd ki)
- Köszönet és 2026-os tervek
- Vizuális javaslat: hova kerüljön diagram / fotó

Hangnem: meleg, hiteles, számokkal alátámasztott — nem marketing-szöveg.
```

## 12. Nemzetközi szakirodalom magyar összefoglaló (Dévény / Pető)

```
Csatolom a {{angol cikk címe, folyóirat, év}}.

Készíts magyar nyelvű szakmai összefoglalót:
- 1 mondatos lényeg
- Vizsgálati módszer (3-4 mondat)
- Eredmények (számszerűen, ahogy a cikkben szerepel)
- A magyar gyakorlat számára releváns 3 tanulság
- Korlátok és kritikák a tanulmányhoz
- Hivatkozási stílus: APA 7

A célközönség a DSGM módszer gyakorló gyógytornászai.
```

## 13. Stábmegbeszélés jegyzőkönyv

```
Csatolom a {{dátum}} stábmegbeszélés Otter.ai átiratát.

Készítsd el a hivatalos jegyzőkönyvet:
- Résztvevők (a beszélők neve alapján)
- Napirendi pontok (rekonstruálva a tartalomból)
- Döntések (kiemelve: ki, mit, mikorra vállalt)
- Akciópontok táblázatban: feladat | felelős | határidő
- Nyitott kérdések a következő ülésre

Ne foglalj össze szó szerint — strukturálj.
```

## 14. Új munkatárs onboarding kérdés (NotebookLM / Project)

```
Új vagyok a szervezetnél. Dolgozom egy családdal:
{{anonim helyzet 2-3 mondatban}}

Kérdéseim:
1. Milyen ellátások járhatnak nekik? (családi pótlék, GYED, lakhatási 
   támogatás, stb. — magyar jogszabály-pontos válasz)
2. Mi a szervezetünk standard eljárása ilyen esetben?
3. Kihez fordulhatok a stábból további segítségért?
4. Vannak-e kapcsolódó intézmények/szakemberek, akiknek tovább küldhetem?

Forrás-hivatkozással válaszolj a NotebookLM dokumentumokból. 
Soha ne találj ki jogszabály-számot.
```

---

## Tippek a használatához

- **Mindig ellenőrizd a kimenetet** — a Claude néha ír olyan számot/dátumot, ami nem a forrásból jön. Hivatkozást kérj.
- **Iteratív munka:** ne várj egy promptra tökéletes kimenetet. Mondd: „Ez a része jó, de a 3. bekezdést írd át formálisabban."
- **Sablon-bővítés:** ha valami jól megy 5x egymás után — mentsd el promptként a Claude Project Custom Instructions részébe.
- **Tilos:** ne tedd be a teljes Gmail postaládádat egyszerre. Egyenként vagy maximum 5-10 levél kötegekben.
- **Mérj:** írd fel hányszor használtad heti szinten, mennyi időt spóroltál. 2 hét után döntened kell — érdemes-e fizetős csomagra váltani.
