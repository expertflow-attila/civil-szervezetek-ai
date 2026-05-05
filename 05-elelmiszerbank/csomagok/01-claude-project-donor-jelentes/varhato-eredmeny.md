# Várható eredmény — mit fog adni a Claude

Ha az 5 lépést elvégezted, és bemásolod az `elso-prompt.md` Tesco-promptját, **kb. 30 másodperc alatt** ilyet fogsz kapni:

---

## Mintakimenet (Claude válasz)

> # Tesco — Donor-riport — 2026 április
>
> **Címzett:** Tesco Magyarország CSR-csapat
> **Időszak:** 2026. április 1. – április 30.
> **Készítette:** Magyar Élelmiszerbank Egyesület
>
> ---
>
> Kedves Tesco CSR-csapat,
>
> Köszönjük a 2026 áprilisi együttműködést. Az alábbi riport a hónap során a Tesco áruházaiból megmentett és továbbosztott élelmiszer számszerű és emberi képét adja.
>
> ## Mentett mennyiség
>
> Április hónap során a Tesco 4 áruházából (Budapest III. ker, Budapest XV. ker, Debrecen, Szeged) összesen **1 727,8 kg** élelmiszert mentettünk meg. A mennyiség kategória-bontása:
>
> - Pékáru: 1 268,7 kg (73%)
> - Zöldség-gyümölcs: 327 kg (19%)
> - Konzerv és tartós: 54,8 kg (3%)
> - Fagyasztott áru: 18,5 kg (1%)
>
> **Top 3 mentési áruház**: Budapest XV. kerület (792,9 kg), Budapest III. kerület (260,0 kg), Debrecen (262,7 kg).
>
> ## Társadalmi hatás
>
> A megmentett 1 727,8 kg élelmiszer:
>
> - **kb. 346 nélkülözőt** segített közvetlenül (átlagos 5 kg/fő fejadag-becslés)
> - **2 522,6 kg CO2-kibocsátást** előzött meg (élelmiszerlánc-átlag 1,46 kg CO2/kg élelmiszer)
> - **Egy átlagos autó kb. 1,1 évi károsanyag-kibocsátásával egyenértékű**
>
> ## Hatás-történet (anonim)
>
> Egy fővárosi családsegítő partner április 15-i Adományok Hete keretében jelentős mennyiségű Tesco-pékárut osztott szét. A heti adag akkora volt, hogy a partnerek visszajelzése szerint a családok hetekre előre tudták tervezni az élelmiszer-kiadásukat.
>
> ## Tervek májusra
>
> Május hónapra a Budapest XV. kerületi áruház-egységgel a tavaszi élelmiszer-fogadási logisztikát kívánjuk frissíteni — különös tekintettel a frissáru-mentés időablakaira.
>
> ## Köszönet
>
> A 2026 áprilisi együttműködés a Tesco CSR-csapatának köszönhető — köszönjük a folyamatos partnerséget.
>
> ---
>
> **Magyar Élelmiszerbank Egyesület** · 1172 Budapest, Lokátor utca 3. · `kapcsolat@elelmiszerbank.hu`
>
> # Belső megjegyzés a stábnak
>
> - Adatok forrása: tesco-export-2026-aprilis.csv (23 sor, 4 áruház)
> - Hatás-becslés: 1 727,8 / 5 = 346 fő (átlagos fejadag)
> - CO2: 1 727,8 × 1,46 = 2 522,6 kg
> - Az Adományok Hete (április 15) felmérése a Schwikker Zsófiánál van
> - A Szolnok és Kaposvár új áruházak nem szerepelnek az áprilisi exportban — ha elindultak, jövő hónaptól lesznek számok

---

## Mit csinálj ezzel?

1. **Olvasd át** a számokat — egyezik-e a SmartFront-Excel-eddel? (Ha igen → kész. Ha nem, finomítási prompt: "a Top 3 áruház listában a Debrecen 262,7 kg helyett 287 kg-ot mutass — javítsd a forrás-fájlt is".)

2. **Hatás-történet** — túl elvont? Kérj konkrétabbat: *"Az anonim hatás-történet helyettesítsd az ezen heti `partner-jelentes-2026-04-15.md`-ben szereplő történettel."*

3. **Hangnem-finomítás** — ha túl száraz: *"Adj 1 érzelmi keretet a 'Tervek májusra' szekció elejéhez."*

4. **Másold ki és küldd el** — vagy mentsd Word-be, illessz logót, partner-aláírást, és küldd a Tesco CSR-csapatának.

---

## Kritikus: ne küldd el ellenőrizetlenül

A Claude ad **hasznos 1. verziót**, de:
- ✅ A kommunikációs felelős **mindig átolvassa**
- ✅ Az Adományok Hete számokat ellenőrzi
- ✅ A donor-konkrét részleteket pontosítja
- ✅ Hivatalos PDF/DOCX-be illeszti a Tesco fejlécével

**Az AI nem helyettesít — felgyorsít.**
