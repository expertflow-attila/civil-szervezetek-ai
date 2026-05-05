# Csomag #1 — Hívás-utáni összefoglaló-asszisztens (DélUtán)

**Mit kapsz:** A 30-60 perces idős-lelkivonal-hívás után az önkéntes **5 perc diktált összefoglalót** csinál (iPhone diktafon vagy Otter.ai). A Claude Desktop **strukturálja**: anonim helyzet, érzelmi téma, krízis-szint, lépés-javaslat. **20-30 perc/hívás → 5-10 perc.**

**Kinek:** A 28 önkéntes, akik napi 25-50 hívást fogadnak.

**Idő setup:** 10 perc. **Első érték:** 25 perc (egy próba-hívás).

---

## ⚠️ Anonim hívás KÖTELEZŐ

A DélUtán-szolgálat **anonim** — sem hívás, sem chat NEM rögzítendő. Az AI **csak az anonim összefoglaló-szöveggel** dolgozik.

---

## 5 lépés

1. **Claude Desktop telepítés** ([claude.ai/download](https://claude.ai/download))
2. **Otter.ai vagy iPhone Voice Memo** (Transcribe funkcióval)
3. **Hívás után 5 perc diktálás** (anonimizálva): *"60-as férfi, vidéki, magány, párvesztés. 45 perc beszélgetés. Krízis-jelzés: nincs. Sírt..."*
4. **Whisper-transcript** → másold Claude Desktop chat-be
5. **`promptok/prompt-01-osszefoglalo.md`** + transcript → **5-10 perc strukturált jegyzet**

---

## Mit kapsz

> **Hívás-összefoglaló — 2026-04-15 19:30**
>
> Anonim helyzet: 60-as férfi, vidéki, párvesztés 6 hónapja, magány domináns
>
> Hívás-időtartam: 45 perc
> Krízis-szint: zöld (nincs akut veszély)
> Érzelmi téma: gyász, magány, jövőkép-hiány
>
> Mit beszéltünk: érzelem-feldolgozás, helyi közösségi lehetőségek
> (DélUtán nyelv-klub, könyvklub, idős-szomszédság)
>
> Lépés-javaslat: a férfi említette hogy van fia Budapesten —
> javasoltunk havi telefonos kontaktust, segítettünk pre-formulázni egy üzenetet.
>
> Önkéntes-megfigyelés: a férfi beszélni akart — sürgető nem
> volt szükséges. Lehet 2-4 héten belül visszahív (kértük).
>
> Akció: nincs follow-up szükséges (nem akut). Ha visszahív, adj
> szabad időt, NE siettesd.

---

## ⚠️ GDPR (KRITIKUS)

- **Anonim hívás** alapelv (nincs rögzítés)
- **Anonimizálás minden promptba**: *"60-as férfi"*, *"vidéki"* — sosem teljes név
- **Lokális tárolás** (sem Drive, sem iCloud)
- **Krízis-eskaláció humán protokoll**: akut veszély → 112 / OKIT, AI csak utólag dokumentál
- **DPO havi review**

---

## Kapcsolat
Nagy Attila · `hello@expertflow.hu` · [DélUtán főoldal](../../) · [Hub](../../../)
