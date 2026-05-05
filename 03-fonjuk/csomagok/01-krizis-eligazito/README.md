# Csomag #1 — Krízis-eligazító NotebookLM (Fonjuk-egyedi, KRITIKUS GDPR)

**Mit kapsz:** Egy zárt **Google NotebookLM**, amelyben benne van **minden gyermekvédelmi és anyaotthon-elérhetőség** + szabály + krízis-protokoll. A koordinátor 30 percnyi keresgélés helyett **<5 perc** alatt megtudja: hova küldje a krízishelyzetű szülőt. **A koordinátor mentális kapacitását szabadítja fel.**

**Kinek:** Fonjuk koordinátor, aki **napi 2-5 krízis-megkereséssel** dolgozik. **A reakcióidő csökkenés a szülőnek életet menthet.**

**Idő setup-ig:** 1-2 nap (NotebookLM-építés). **Idő első értékig:** azonnali, az első krízis-hívásnál.

---

## ⚠️ KRITIKUS GDPR ÉS ETIKAI KERET

A Fonjuk **peer-támogatás**, NEM hivatalos krízisellátó. A NotebookLM **TILTOTT TARTOMÁNYBA esik** ha:
- A NotebookLM-ben EGYÉNI eset-adat van
- Ha a szülővel **közvetlenül** kommunikálna a Claude / NotebookLM
- Ha érzékeny adatot **felhőbe** szinkronizálnak

**A NotebookLM-ben CSAK** nyilvános, intézmény-szintű adat van: címek, telefonszámok, eljárás-dokumentumok, NEM egyedi szülői/gyermek esetek.

**DPO-jóváhagyás KÖTELEZŐ** a NotebookLM-építés **előtt**.

---

## 5 lépés

1. **DPO megbeszélés** — az etikai keret írásban (KÖTELEZŐ ELSŐ LÉPÉS)
2. **NotebookLM létrehozás**: notebooklm.google.com → "New Notebook" — név: **"Fonjuk Krízis-eligazító"**
3. **Forrás-feltöltés** (a `sample-fajlok/forrasok-listaja.md` szerint):
   - Gyermekvédelmi jelzőrendszer szabályai (nyilvános, jogszabály)
   - Anyaotthonok elérhetősége régiónként (frissítve havonta)
   - Családok átmeneti otthonai
   - Krízisközpontok 24/7 elérhetőséggel
   - Sürgős szociális ellátási útmutatók
4. **Próba-kérdés**: *"Hova küldjem a 32 éves anyát 2 gyerekkel, fővárosi, este 8-kor érkezett, bántalmazó kapcsolatból menekül?"*
5. **Havi forrás-frissítés** — anyaotthon-listák, krízisközpont-elérhetőségek (változnak)

---

## Várható eredmény

**Kérdés (anonim, NEM szülői név):** *"32 éves anya, 2 gyerek (3, 7), fővárosi, este 8-kor érkezett, bántalmazó kapcsolatból menekül. Hova küldjem?"*

**NotebookLM válasz** (15-30 másodperc, forrás-hivatkozással):

> **Sürgős — 24/7 elérhető helyek (fővárosi):**
>
> 1. **NANE Bántalmazott Nők Anyaotthona** — cím: [HIÁNYZIK: pontos cím a forrás-listából], telefon: 06 80 505 101 (ingyenes), 24/7 fogadás
>    - Mit vigyen: személyi igazolvány, gyermek születési anyakönyvi kivonata, ha lehetséges
>    - Forrás: `sources/nane-anyaotthon-2026.pdf`
>
> 2. **Magyar Máltai Szeretetszolgálat Anyaotthona** — [HIÁNYZIK: konkrét adat]
>    - Forrás: `sources/mmsz-anyaotthon-2026.pdf`
>
> **Ha nincs hely** ezekben:
> - **Pest Megyei Kormányhivatal Gyermekvédelmi Központ** ügyeleti telefon: [HIÁNYZIK]
>
> **Akut bántalmazási veszély**: hívjátok azonnal a 112-t, a rendőrség kötelezett védelmi intézkedésre.
>
> **Kötelező jelzőrendszer**: a Fonjuk **24 órán belül kötelezett** értesíteni a Pest megyei gyermekvédelmi szolgálatot (jogszabály alapján). Forrás: `sources/gyermekvedelmi-jelzorendszer-2024.pdf` 7. szekció.

**A koordinátor 5 perc alatt** megkapja a 3 helyszínt + jogi kötelezettséget. Korábban 30 perc keresgélés stresszben.

---

## ⚠️ MINDIG

- **Anonimizált kérdés** — sosem konkrét név
- **Forrás-hivatkozás kötelező** minden válaszban
- **Akut veszély → 112** azonnali humán beavatkozás
- **Az AI sosem kommunikál** közvetlenül szülővel — csak a koordinátor belső asszisztense

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Fonjuk főoldal](../../) · [Hub](../../../)
