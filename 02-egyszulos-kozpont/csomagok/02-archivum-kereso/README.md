# Csomag #2 — 20 év archívum-kereső (Claude Project + Drive MCP)

**Mit kapsz:** Egy közös Claude Project, amelyben **a teljes 20+ év** Egyszülős-tartalom (cikkek, blogok, csoport-anyagok, jogi útmutatók) **kereshető magyarul**, forrás-hivatkozással. *"Van-e nálunk válási mediációs útmutató?"* → 10 másodperc. **Most: "nem találom" → újraírás. AI-vel: <1 perc keresés, 90% megtakarítás.**

**Kinek:** szakemberek (pszichológus, mediátor, jogász), akik gyakran keresnek korábbi anyagot, illetve új belépők akiknek a 20 év archívum belakása nehézkes.

**Idő setup-ig:** 4-6 óra (egyszeri archívum-strukturálás + Drive-szinkron). **Idő első értékig:** 1 nap.

---

## 5 lépés

1. **Hozz létre Claude Project-et**: "Egyszülős — 20 év archívum"
2. **Kategorizáld a Drive-tartalmat** — javasolt struktúra: `cikkek-2005-2015/`, `cikkek-2016-2025/`, `csoport-anyagok/`, `jogi-utmutato/`, `mediacios-anyagok/`
3. **Töltsd fel a Drive-t a Claude Project-hez** (Drive MCP-vel automatikusan, vagy manuálisan a fontosabbakat)
4. **Másold a system promptot** a Project Custom Instructions-be
5. **Próba-keresés**: *"Mit írtunk a karácsonyi gyász-támogató csoportokról 2018-ban?"* — működnie kell

---

## Várható eredmény

**Kérdés:** *"Van-e nálunk válási mediációs útmutató, és ha igen, mikor frissült utoljára?"*

**Claude válasz** (5-10 másodperc):

> 3 releváns anyag van az archívumban:
>
> 1. **`mediacios-anyagok/utmutato-2024.md`** (8 oldal) — *"Válási mediáció lépései az Egyszülős Központban"* — frissítve **2024 márciusban**
> 2. **`mediacios-anyagok/jogi-keret-2026.md`** (3 oldal) — frissítve **2026 január** (a 2026 januári családjogi változások beépítve)
> 3. **`cikkek-2016-2025/2019-mediacios-elmelet.md`** — szakmai cikk Polányi-féle mediációs elméletről, **elavulhat**
>
> **Ajánlás**: az 1. és 2. együtt használandó (a 2. friss jogi kerettel). A 3. csak elméleti háttér, **2019-óta nem frissült**.

A szakember **5 perc helyett 30 másodpercet** tölt a kereséssel.

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [Egyszülős főoldal](../../) · [Hub](../../../)
