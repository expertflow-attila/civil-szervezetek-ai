# Cowork — SmartFront-validátor megosztás

A SmartFront-validátor **lokális gépen** fut (Bajdik János gépén). De a **csapat-szintű** együttműködés kulcsfontosságú:

- Bajdik János (IT lead) — technikai felelős
- Schwikker Zsófia (partner-koordináció) — a coaching-jelöltek listáját kapja
- Cseh Balázs (vezetés) — havi audit-log-ot kap

---

## Munkamegosztás

| Feladat | Felelős | Eszköz |
|---------|---------|--------|
| Reggeli validálás futtatás | Bajdik János | Claude Desktop lokálisan |
| Audit log havi review | Cseh Balázs | Bajdik exportál CSV-t, Claude.ai-ban átfutja |
| Heti coaching-jelölt-lista | Schwikker Zsófia | Bajdik küldi emailen, Schwikker átnézi |
| Új áruházlánc-szabály felvétel | Bajdik János + Schwikker | együtt, Claude Desktop-ban |
| Hibák partner-coaching-ja | Schwikker Zsófia | telefonosan, az AI-elemzés alapján |

---

## Megosztási folyamat

### Reggeli validálás → Schwikker

Bajdik a reggeli validálás után **emailben** küldi a kétségeseket Schwikkernek:

> Tárgy: SmartFront-validálás 2026-04-15 — 3 kétséges
>
> Schwikker, a mai validálásból 3 kétséges esetet küldök:
>
> 1. tesco-bp-007 — 178,9 kg (Adományok Hete?)
> 2. lidl-bp-101 — receipt-szám hiányzik
> 3. aldi-bp-203 — lejárati dátum lejárt
>
> Az 1. valószínűleg jó (Adományok Hete). 2. és 3. partner-coaching kell.

### Heti coaching-lista → Schwikker

Péntek 14:00-kor Bajdik futtatja a `prompt-02-heti-coaching-jelolt.md`-t, a kimenetet **megosztja Schwikkernek** (email vagy közös Drive-fájl).

Schwikker hétfő reggel hívja a top 3 hibázót.

### Audit log → Cseh Balázs

Hónap utolsó péntekén Bajdik futtatja `prompt-02` "havi audit log" variánsát, a CSV-t feltölti a közös Drive-ra (`Vezetoseg/Audit_logs/2026-04.csv`), és emailben jelzi Csehnek.

Cseh **5 perc** alatt átfutja a CSV-t, és válaszol Bajdiknak: "OK" vagy "tisztázzuk a következő havi meeting-en".

---

## Eszközök

A SmartFront-validátor **Claude Desktop-ot** használ — ez **lokális, asztalra telepített** alkalmazás. NEM Claude.ai (web).

Ha másik stáb-tag szeretné használni:
- **Saját Claude Desktop telepítés** szükséges (lásd `lepesrol-lepesre.md` 1-2. lépés)
- **Saját MCP-konfig** — minden gépen külön
- **Külön mappa-jogok** — Bajdik admin-jogokat ad a stáb-tagnak a saját SmartFront-mappához

> 💡 **Egy stáb-taghoz egy MCP-konfig**. A SmartFront-mappa megosztása **NEM Drive-szinkronon keresztül** (érzékeny adat) — ha kell, Bajdik adja át USB-stickre vagy lokál hálózati share-en.

---

## ⚠️ Adatkezelési szabály

- **Soha ne másold** a SmartFront-mappát Drive-ra / iCloud-ra
- **Soha ne küldd** át emailben a teljes feltöltést — csak az anonim mező-listát
- Az audit log CSV-je **anonim** kell legyen (partner-szervezet kódot tartalmaz, nem nevet)
- **DPO havi review** — Cseh Balázs az audit log-ot a DPO-val együtt nézi havonta

---

## Költség

| Csomag | Ár | Indok |
|--------|-----|-------|
| Claude Pro (Bajdik János) | €18/hó | Filesystem MCP-vel |
| Claude Pro (Schwikker, ha külön gépen használja) | €18/hó | opcionális |

**Becsült havi költség**: €18-36/hó. Claude for Nonprofits jóváhagyással **€0**.
