# SmartFront — Áruházlánc-elszámolási szabályok

**Forrás:** Magyar Élelmiszerbank IT-csapat (Bajdik János, Schwikker Zsófia)
**Verzió:** 2026-05-05

A partner-szervezetek a SmartFront-rendszeren keresztül töltik fel az áruházi pickup-onkénti elszámolásokat. Az áruházláncok eltérő formátumot kérnek — ez a fájl tartalmazza az aktuális szabályokat.

---

## Tesco

| Mező | Kötelező | Megjegyzés |
|------|----------|------------|
| `kg` | ✓ | szám, 0.1 kg pontosság |
| `datum` | ✓ | YYYY-MM-DD |
| `aruhaz_kod` | ✓ | TSC-ZONE-NNN formátum |
| `kategoria` | ✓ | pekaru / zoldseg-gyumolcs / tej-tejtermek / konzerv / fagyasztott / egyeb |
| `fotó` | ✓ | URL vagy fájl-path; 0-byte fájl → HIBA |
| `partner_anonim` | ✓ | partner-szervezet anonim azonosítója |

**Példa fájlnév:** `tesco-bp-001-2026-04-15.json`

---

## Aldi

| Mező | Kötelező |
|------|----------|
| `kg` | ✓ |
| `datum` | ✓ |
| `aruhaz_kod` | ✓ (`ALDI-ZONE-NNN`) |
| `kategoria` | ✓ |
| `fotó` | ✓ |
| `lejarati_datum` | ✓ |
| `partner_anonim` | ✓ |

**Speciális szabály:** a `lejarati_datum` SOSEM lehet előzménye a `datum`-nak. Ha igen → ✗ HIBA.

**Példa fájlnév:** `aldi-bp-203-2026-04-15.json`

---

## Lidl

Mint Tesco + plusz:

| Mező | Kötelező |
|------|----------|
| `receipt_szam` | ✓ — Lidl-belső receipt-azonosító, formátum: `LIDL-NNN-NNNNN` |

---

## Penny

Mint Tesco + plusz:

| Mező | Kötelező |
|------|----------|
| `kategoria_bontas` | ✓ — JSON object: `{"pekaru": 45.2, "zoldseg-gyumolcs": 12.8}` |

A bontás összegének **egyeznie kell** a `kg` mezővel ±5% toleranciával.

---

## Auchan

Mint Tesco + plusz:

| Mező | Kötelező |
|------|----------|
| `partner_azonosito` | ✓ — Auchan-belső partneri azonosító, formátum: `AUC-PRT-NNNN` |

---

## Metro

Mint Tesco + plusz:

| Mező | Kötelező |
|------|----------|
| `kosar_lista` | ✓ — JSON array: `[{"termek": "kenyer 500g", "db": 12, "kg": 6.0}, ...]` |

A `kosar_lista` kg-jainek összege ≈ a `kg` mezővel.

---

## KFC

Mint Tesco + plusz:

| Mező | Kötelező |
|------|----------|
| `napi_gyakorisag` | ✓ — `napi` / `naponta-tobbszor` / `het-3-4-x` / `het-1-2-x` / `havi-1-x` |

---

## Általános logikai validáció (minden áruházlánc)

1. **Lejárati dátum** előzi-e a feltöltési dátumot? → ⚠️ GYANÚS (kivéve Aldinál ahol HIBA)
2. **Kg** 0 < x < 2000 tartományban? → kívül → ⚠️ GYANÚS
3. **Fotó** elérhető és nem 0-byte? → ✗ HIBA ha 0-byte vagy hiányzik
4. **Partner heti átlaga** vs. mai feltöltés: >3x → ⚠️ GYANÚS (Adományok Hete kontextus kivétel)
5. **Duplikáció**: ugyanaz a partner ugyanazon a napon ugyanezt a kategóriát? → ⚠️ duplikáció-gyanú

## GDPR-szabály

**Ha a feltöltésben** ügyfél (rászoruló családtag) **személyazonosító adat** szerepel (név, lakcím, TAJ, születési dátum) → **AZONNAL ✗ HIBA**: GDPR-incidens, partner-koordinátor azonnal értesítendő, a feltöltés AZONNAL törölendő.

---

## Validálási státuszok

- **✓ JÓVÁHAGYHATÓ**: minden szabály teljesült. Áthelyezni a `smartfront_validalva/` mappába.
- **⚠️ GYANÚS**: van anomália, ember nézze át. Hagyni a `smartfront_uj_feltoltesek/` mappában. Bajdik János reggeli rutinjában átnézi.
- **✗ HIBA**: szabálysértés. Áthelyezni `smartfront_uj_feltoltesek/javitando/`-ba. Partner-koordinátor (Schwikker Zsófia) felveszi a partner-szervezettel.

---

## Verzionálás

| Verzió | Dátum | Változás |
|--------|-------|----------|
| 1.0 | 2026-05-05 | Első verzió, 7 áruházlánc + GDPR-szabály |

Új áruházlánc-szabály bővítéséhez: bemásolni az új blokkot, frissíteni a verzió-számot, dátumot.
