# Csomag #1 — Bevetés-utáni AAR jelentés (MMSZ Mentő Claude Desktop)

**Mit kapsz:** A bevetés (árvíz, hóhelyzet, baleset, USAR) után az önkéntes **5 perc diktálva** összefoglal — a Claude Desktop **strukturált AAR (After-Action Review) jelentésbe** alakítja. **1-3 órás munka → 15-30 perc.** **80% megtakarítás × 500 önkéntes.**

**Kinek:** A ~500 MMSZ Mentő-önkéntes + parancsnok-helyettes.

**Idő setup:** 10 perc. **Első érték:** 25 perc (egy próba-AAR).

---

## 5 lépés

1. **Claude Desktop telepítés** ([claude.ai/download](https://claude.ai/download))
2. **Új chat** → `system-prompt.md` másolás
3. **Bevetés után 5 perc diktálás** (anonim — beavatkozás-helyszín, esemény-típus, fő tanulság)
4. **Whisper-transcript** (iPhone / Otter.ai)
5. **`promptok/prompt-01-aar.md`** → strukturált AAR-jelentés 15-30 perc alatt

---

## Mit kapsz

> # AAR — 2026-04-15 árvíz Hajdú-Bihar
>
> ## Esemény
> Hirtelen áradás után evakuálás. Időtáv: 14:00 → 18:00.
>
> ## Bevetés
> 8 önkéntes, 2 csónak, 1 mentő-jármű. Megelőző értesítés 12:00-kor.
>
> ## Eredmény
> - 12 ember evakuálva (közte 4 idős)
> - 0 sérülés
> - 1 állat-mentés (kutya)
>
> ## Tanulság (szakmai)
> - **Pozitív**: csónak-koordináció zökkenőmentes, rádió-kommunikáció jó
> - **Fejlesztendő**: az értesítési idő 2 óra — egy korábbi jelzés lehetett volna
> - **Operatív kihívás**: az utolsó 2 ház megközelítése csónakon nehéz volt
>
> ## Javaslat következő bevetésre
> - **Helyi rendőrkapitányság** rádió-csatornájához gyorsabb csatlakozás
> - **Térképi adat** előkészítés (a Hajdú-Bihar-i árvíz-zónák GPS-koordinátái
>   előzetes feltöltve a parancsnoki tabletre)
>
> ## Önkéntes-megfigyelés
> - 8/8 fő mentális állapota OK
> - 1 fő (B. önkéntes) első árvízi bevetése — **mentor-coaching** ajánlott

---

## Aggregálás (parancsnok-helyettes havi)

A 100+ AAR-jelentés / hónap → **havi vezetői dashboard**:
- Top 3 esemény-típus
- Önkéntes-aktivitás
- Pattern-keresés (hol gyakori a rendőri-koordinációs probléma?)

Lásd `promptok/prompt-02-havi-aggregalas.md`.
