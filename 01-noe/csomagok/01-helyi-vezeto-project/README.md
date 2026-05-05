# Csomag #1 — Helyi vezető Claude Project (NOE-egyedi)

**Mit kapsz:** Egy közös Claude Project a 250 helyi NOE-vezetőnek. Minden szervezeti dokumentum benne (alapító, ÁSZF, programszervezési útmutató, kedvezmény-szabályzat). A vezetők **önkiszolgáló módon kérdezhetnek** — *"Hogyan szervezek családi napot 80 főre 200e Ft-ból?"* — forrás-hivatkozással.

**Kinek:** NOE központi adminisztratív vezető, aki a 250 helyi vezető napi kérdéseit kapja. **A központi telefon 30-40%-a kiváltható.**

**Idő setup-ig:** 8-10 óra (egyszeri Project-építés, dokumentum-feltöltés). **Idő első értékig:** 1 hét (10 vezetős pilot).

---

## 5 lépés a működő rendszerig

### 1. Hozz létre Claude Project-et
[claude.ai/projects](https://claude.ai/projects) → "Create Project". Név: **"NOE — Helyi vezető assistant"**. Visibility: **Team** (a 250 vezető hozzáférést kap, ha Pro/Team csomag van).

### 2. Másold be a system promptot
A `system-prompt.md` tartalmát a Project Custom Instructions mezőjébe.

### 3. Tölts fel szervezeti dokumentumokat
A Project Files-ba minden dokumentumot, amit a 250 vezető kérdezhet:
- Alapító okirat (anonim, csak nyilvános rész)
- ÁSZF
- Programszervezési útmutató (családi nap, kiránduás, ünnepi rendezvény)
- Kedvezmény-szabályzat (kuponok, partneri ajánlatok)
- Tagdíj-rendszer (mikor mennyi, kit kell utalni)
- Sablon-meghívók (családi nap, közgyűlés)

### 4. 5-10 helyi vezető meghívása pilot-tesztre
4 hét pilot. Heti review: mit kérdeznek leggyakrabban? Hol akad el? Mit kell még feltölteni?

### 5. Skálázás 250 vezetőre
4 hét után a Project elérhetővé válik mind a 250 vezetőnek. **Központi telefon-teher mérve csökken.**

---

## Várható eredmény

A vezető beírja: *"Hogyan szervezek családi napot 80 főre 200e Ft-ból Veszprémben?"*

Claude válasz (5 másodperc):

> Ehhez 3 sablon-megoldás van a NOE-tudásbázisban:
>
> 1. **Önkormányzati helyiség + helyi gazda-kosárral** (~120 000 Ft) — a `programszervezesi-utmutato.md` 12. szekciója alapján: önkormányzati közösségi terem ingyen, helyi gazdák 30% kedvezménnyel adnak (lásd a `kedvezmeny-szabalyzat.md` "Helyi termelők" rész). Konkrét lépések: 1. kérvény az önkormányzathoz (sablon: `sablonok/onkormanyzati-kerveny.md`), 2. gazda-koordinátor felvétele 2 héttel előtte...
>
> 2. **Templom udvara + egyházi konyha** (~80 000 Ft) — ha katolikus / református közösség...
>
> 3. **Kistérségi turisztikai egyesület + helyi vendéglő** (~150 000 Ft) — 2024-es Pest megyei pilot alapján...
>
> **Forrás-hivatkozások**: programszervezesi-utmutato.md, kedvezmeny-szabalyzat.md (8. szekció), 2024-es-veszpremi-csaladi-nap-jelentes.md.
>
> **Bizonytalan?** A központi irodát is hívhatod: noe@noe.hu, +36-1-...

A vezető **5 perc alatt** megkapja a 3 megoldást — előbb a központi iroda telefon-konzultációja kellett.

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Vissza a NOE főoldalra](../../) · [Hub](../../../)
