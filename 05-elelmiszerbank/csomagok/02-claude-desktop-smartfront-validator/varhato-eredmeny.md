# Várható eredmény — mit fog adni a Claude Desktop

Ha a setup-ot követted, és bemásoltad az `elso-prompt.md` reggeli prompt-ját, **kb. 30 másodperc alatt** ilyet fogsz kapni:

---

## Mintakimenet (Claude válasz)

> ## SmartFront elszámolás-validálás — 2026-04-15 reggel
>
> Beolvasott fájlok: 5 (a `~/Documents/Elelmiszerbank/smartfront_uj_feltoltesek/` mappából)
>
> ---
>
> ### [tesco-bp-001-2026-04-15.json] — ✓ JÓVÁHAGYHATÓ
>
>   Áruházlánc: Tesco
>   Partner: fovarosi-gyermekellato-A
>   Kg: 42.5
>   Dátum: 2026-04-15
>
>   **Mozgatás**: → smartfront_validalva/
>
> ---
>
> ### [auchan-bp-101-2026-04-15.json] — ✓ JÓVÁHAGYHATÓ
>
>   Áruházlánc: Auchan
>   Partner: fovarosi-gyermekvedelmi-E
>   Kg: 89.5
>   partner_azonosito: AUC-PRT-0042
>
>   **Mozgatás**: → smartfront_validalva/
>
> ---
>
> ### [tesco-bp-007-2026-04-15-GYANUS.json] — ⚠️ GYANÚS
>
>   Áruházlánc: Tesco
>   Partner: fovarosi-csaladsegito-B
>   Kg: 178.9
>   Heti átlag: 60 kg → ~3x mennyiség
>
>   **Megjegyzés**: anomalia, de a megjegyzés-mezőben "Adományok Hete" — kontextusban indokolható.
>
>   **Marad helyben**: smartfront_uj_feltoltesek/ — Bajdik János átnézi
>
> ---
>
> ### [aldi-bp-203-2026-04-15-HIBA.json] — ✗ HIBA
>
>   Áruházlánc: Aldi
>   Partner: fovarosi-csaladsegito-B
>   Kg: 87.2
>
>   **HIBA**: a `lejarati_datum` (2026-04-12) ELŐZI a feltöltési dátumot (2026-04-15). Aldinál ez nem megengedett (lejárt termékek).
>
>   **Mozgatás**: → smartfront_uj_feltoltesek/javitando/
>   **Akció**: Schwikker Zsófia értesítve a partner-szervezet kapcsolat-felvételére.
>
> ---
>
> ### [lidl-bp-101-2026-04-15-HIANYZO-RECEIPT.json] — ✗ HIBA
>
>   Áruházlánc: Lidl
>   Partner: fovarosi-gyermekvedelmi-E
>   Kg: 67.4
>
>   **HIBA**: kötelező mező hiányzik — `receipt_szam`. Lidlnél kötelező.
>
>   **Mozgatás**: → smartfront_uj_feltoltesek/javitando/
>   **Akció**: partner-szervezetnek értesítés a Lidl receipt-szám pótlására.
>
> ---
>
> ## Összesítő
>
> Összesen: 5 feltöltés
> ✓ Jóváhagyott: 2 (40%)
> ⚠️ Gyanús: 1 (Bajdik nézze át: tesco-bp-007)
> ✗ Hibás: 2 (Schwikker partner-koordinátor: aldi-bp-203, lidl-bp-101)
>
> **Bajdik János átnézési ideje**: csak 1 fájl (~3 perc) az 5 helyett (~10-15 perc).

---

## Mit csinálj ezzel?

1. **A 2 jóváhagyhatót** a Claude áthelyezte automatikusan — kész.

2. **A gyanús (tesco-bp-007)** — átnézed:
   - Adományok Hete tényleg volt? Ha igen → manuálisan jóváhagyod.
   - Ha kétséges → kérdezel a partner-szervezettől.
   - Iteratív prompt: *"a tesco-bp-007 ellenőrizve, jóváhagyom — mozgasd át és aktualizáld a heti átlagot a partner-szervezetre"*

3. **A 2 hibásnak**:
   - Schwikker Zsófia kapja az automatikus értesítést (vagy te küldöd manuálisan)
   - Partner-szervezet pótolja a hiányzó adatot
   - Új feltöltés érkezik holnap reggel a `smartfront_uj_feltoltesek/`-be

---

## Kritikus: monitorozd Bajdikkal

A pilot első 30 napjában:
- ✓ Bajdik **manuálisan átnézi** a Claude jóváhagyásait random 10%-ban (false-positive ellenőrzés)
- ✓ A **GDPR-szűrő** működését Bajdik fokozottan figyeli
- ✓ Ha a Claude false-positive-ot vagy false-negative-ot ad → finomítjuk a `aruhaz-szabalyok.md`-t

**Cél a 30. napra**: 95%+ pontosság, Bajdik napi 25 perc helyett 8 perc validálási ideje.
