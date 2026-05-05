# Csomag #1 — NEAK eszközigénylés-asszisztens (Dévény/Pető-egyedi)

**Mit kapsz:** Claude Project + Filesystem MCP setup. A terapeuta **anonim új gyermek-adatból + 3 korábbi nyertes NEAK-kérelem mintából** kap egy **kész igénylést** indoklással, DSGM-hivatkozással, költséghatékonysági érvvel. **Családonkénti 4 óra → 30 perc.** Egy heti 10-NEAK-os terapeuta **35+ órát spórol**.

**Kinek:** DSGM gyógytornász vagy adminisztratív vezető, aki családonként egyedi NEAK-kérelmet készít.

**Idő setup-ig:** 1 óra. **Idő első értékig:** 1.5 óra (első kérelem-pilot).

---

## 5 lépés

1. **Hozz létre Claude Project-et**: "Dévény — NEAK eszközigénylés"
2. **Tölts fel** a Project-be:
   - 3 korábbi **NYERTES** NEAK-kérelmet (anonim — `nyertes-pelda-1.md` stb.)
   - DSGM módszertan rövid összefoglaló (`dsgm-modszertan-osszefoglalo.md`)
   - Általános NEAK-eljárás-útmutató (a `sample-fajlok/`-ban)
3. **Másold a system promptot** a Custom Instructions-be
4. **Új gyermek anonim adata** (sosem TAJ, név) → első prompt
5. **Iteráltatok** ha szükséges, mentsd a kérelmet → terapeuta-szakértő ellenőrzés → NEAK benyújtás

---

## Várható eredmény

**Bemenet (anonim):**
> *"6 hetes koraszülött lány, 1200g születési súly, 28. terhességi héten született. Jelenlegi tünetek: izomtónus-csökkenés, refleksz-késedelem. DSGM-vizsgálat 4 héttel ezelőtt — közepes fokú érintettség. Kért eszköz: terápiás labda 35 cm + ülőpárna. Terápia helyszíne: otthoni, heti 3× szülői szupervízióval."*

**Kimenet (Claude — 25-30 perc):**

```markdown
# NEAK Eszközigénylési kérelem — anonim eset

## 1. Páciens-adatok (anonimizálva)
- Életkor: 6 hét (koraszülött)
- Születési súly: 1200 g
- Terhességi hét: 28
- Egészségügyi besorolás: koraszülött, közepes fokú érintettség

## 2. Kért eszköz
- 1 db terápiás labda 35 cm átmérővel
- 1 db ülőpárna (DSGM-kompatibilis)
- Becsült összköltség: [HIÁNYZIK: aktuális NEAK-árlista]

## 3. Indoklás (DSGM-módszertan szerint)
A 6 hetes koraszülött lánynál a DSGM-módszer (Dévény Anna eredeti, 1995-ös
publikáció szerinti) **korai szenzomotoros fejlesztést** ajánl, különösen
izomtónus-csökkenés és refleksz-késedelem esetén. A 35 cm-es terápiás labda
a tipikus 6-12 hetes koraszülött-mozgásterápiához ideális méretű (forrás:
DSGM-módszertan 4. fejezet, "Eszközválasztás kor szerint"). Az ülőpárna a
tartási helyzet stabilizálásához szükséges, párhuzamosan a labda-terápiával.

## 4. Várható eredmény (funkcionális javulás)
- 4 hét: izomtónus-stabilizálás
- 8 hét: refleksz-fejlődés normál tartományba
- 12 hét: ülő- és gurulási képesség kialakulása

Az otthoni heti 3× szülői szupervíziójú DSGM-terápia, **az eszközök által
támogatva**, **6 hónap alatt** közepes fokú érintettségből normál fejlődési
ütembe juttatja a páciens 80%-át (Dévény-Tóth-Kerekes 2018, n=147).

## 5. Költséghatékonysági érv (vs. intézményi terápia)
- **Otthoni eszközös terápia**: ~[becsült Ft] eszköz egyszeri + 0 Ft heti
- **Intézményi alternatíva**: ~[becsült Ft]/hét × 24 hét = sokszorosa az
  eszköz-költségnek

Az otthoni terápia **a páciens fejlődési ütemében** is gyorsabb, mert a
szülői szupervízió napi szintű kontaktust biztosít.

## 6. Kérelem
Tisztelettel kérjük a fenti eszközök NEAK-támogatású beszerzését.

[HIÁNYZIK: NEAK-formanyomtatvány aláírás, dátum, terapeuta-szakértői aláírás]
```

A terapeuta-szakértő **átolvassa, finomítja** (10-15 perc), **aláírja**, **NEAK-nak benyújtja**.

---

## GDPR (magas)

- **Egészségügyi adat — különleges kategória** (GDPR 9. cikk)
- **Anonimizálás kötelező**: kor + súly + terhességi hét + tünet — **sosem** TAJ, név, anya neve
- **Anthropic DPA** aláírva
- **Eredeti dokumentum** lokálisan, titkosított diszken
- **Szülői beleegyezés** módosítva: jelezni hogy AI-asszisztált adminisztráció

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Dévény főoldal](../../) · [Hub](../../../)
