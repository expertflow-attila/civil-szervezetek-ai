# Várható eredmény — minta heti dashboard

A `routine-prompt.md` lefuttatása után (manuálisan Claude Desktop-ban vagy automatizáltan a Claude API-n) **kb. 30 másodperc alatt** ilyet fogsz kapni:

---

## Mintakimenet (Claude válasz)

> # Heti vezetői dashboard — 2026 H15 (április 7-13)
>
> ## Heti összefoglaló
>
> A héten **összesen 1 998,1 kg** élelmiszert mentettünk meg (↑ 8% a múlt héthez, becsült 1 850 kg-hoz képest). A **CO2-megelőzés 2 917,2 kg** — egy átlagos autó **kb. 1,3 évi** károsanyag-kibocsátásával egyenértékű. **Becsült érintett emberek: ~400 fő** (5 kg/fő fejadag-becsléssel).
>
> **Hangulati keret:** A vasárnapi (április 13) Adományok Hete kampány-stand erős hatású volt — a Tesco XV. kerületi és debreceni áruházak 268 kg-ot értek el együtt.
>
> ---
>
> ## Top 5 áruház (heti kg)
>
> 1. **TSC-BP-007** Budapest XV. ker — 535,5 kg
> 2. **TSC-DE-003** Debrecen — 191,4 kg
> 3. **METRO-BP-001** Budapest XIV. ker — 176,6 kg
> 4. **AUC-BP-101** Budapest XIX. ker — 155,2 kg
> 5. **ALDI-MISK-202** Miskolc — 173,4 kg
>
> ---
>
> ## Top 5 karitatív partner (kapott kg)
>
> 1. **fovarosi-csaladsegito-B** — 715,0 kg (~143 család becslés)
> 2. **vidéki-iskolai-etkezde-C** — 422,6 kg (~85 család)
> 3. **fovarosi-gyermekvedelmi-E** — 269,7 kg (~54 család)
> 4. **vidéki-csaladsegito-F** — 173,4 kg (~35 család)
> 5. **fovarosi-gyermekellato-A** — 165,4 kg (~33 család)
>
> ---
>
> ## Áruházlánc-bontás
>
> ```
> Tesco:    51,4% (1 027,5 kg)
> Auchan:   18,2% (363,9 kg)
> Aldi:     13,0% (260,5 kg)
> Metro:     8,8% (176,6 kg)
> Lidl:      9,5% (189,6 kg)  ← magas
> Penny:     7,9% (159,4 kg)
> KFC:       2,0% (39,9 kg)
> ```
>
> *Megjegyzés:* a Tesco-arány (51,4%) magasabb mint a 2024-es éves átlag (47%) — ez az Adományok Hete kampány hatása.
>
> ---
>
> ## Anomáliák
>
> - ⚠️ **TSC-BP-007 (Budapest XV. ker) április 13-án 178,9 kg** — heti átlagához képest ~2,5x. **Magyarázat:** Adományok Hete kampány-stand a megjegyzés-mezőben. **Akció:** nem szükséges Bajdik-átnézés.
> - ⚠️ **KFC-BP-001 csak 39,9 kg ezen a héten** — múlt heti 80+ kg-hoz képest 50% csökkenés. **Akció:** Schwikker felvegye-e a kapcsolatot a KFC operatív koordinátorával?
> - ✓ Egyéb GDPR-jelzés nincs.
>
> ---
>
> ## Trend a múlt héthez képest
>
> - **Mennyiség**: ↑ 8% (Adományok Hete kampány)
> - **Áruházi diverzifikáció**: stabil (7/7 lánc aktív)
> - **Partner-aktivitás**: ↑ enyhén — 8 partner aktív a múlt heti 7-tel szemben
>
> ---
>
> ## 3 javaslat a heti vezetői meeting-re
>
> 1. **KFC-aktivitás csökkenése** — Schwikker hívja meg az operatív koordinátort egy gyors review-ra. (Indok: 50% csökkenés a múlt héthez)
> 2. **Adományok Hete erős hatás** — kommunikáljuk Tesco CSR-csapatának egy köszönő-emaillel. (Indok: 535,5 kg = 26% a heti összes-ből)
> 3. **Lidl-arány emelkedett (9,5% — éves átlag 7%)** — a Lidl tavaszi koordinációs változása működik. **Folytatás**: vidéki Lidl-bővítés pályázat felvétele a 2026-os ütemtervbe.
>
> ---
>
> *Magyar Élelmiszerbank Egyesület · 2026 H15 · auto-generált, ellenőrzendő emberi szemekkel.*

---

## Mit csinálj ezzel?

### Cseh Balázs (vezetés)

1. **Olvasd át 5 perc alatt** a teljes dashboardot.
2. **Vidd be a heti vezetői meeting-be** a 3 javaslatot.
3. Ha a "Lidl pályázat-bővítés" javaslat tetszik, **Schwikker indítja el** a tervet jövő hét végéig.

### Schwikker Zsófia (partner-koordináció)

1. A "KFC-csökkenés" javaslatot **felveszed kapcsolat-listára**, hétfő délelőtt hívás.
2. A Tesco-köszönő-email **automatikusan generálható** a Csomag #1 (Donor-jelentés Project) alapján.

### Bajdik János (IT)

1. **Az anomáliákat ellenőrizd** a SmartFront-rendszerben.
2. Ha a Tesco-Adományok Hete-megjegyzés **nem jelent meg minden feltöltésben**, partner-coaching kell.

---

## Skálázás más rutin-feladatokra

A `routine-prompt.md` és `routine-script.mjs` mintára **másolható** minden rendszeresen ismétlődő feladatra:

- **Havi dashboard** (a 4 heti aggregálva)
- **Negyedéves trend-elemzés** (12 heti aggregálva)
- **Adományozói riport-rotáció** (havi, donor-onkénti)
- **Heti partner-coaching-jelölt-lista** (top 5 hibázó)

Mindegyikhez egy új mappa: `04b-monthly-dashboard/`, `04c-quarterly-trend/`, stb. — ugyanaz a 4 fájl-szerkezet (README, routine-prompt, sample-data, varhato-eredmeny).
