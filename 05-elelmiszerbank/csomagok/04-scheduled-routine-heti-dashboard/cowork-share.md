# Cowork — Heti dashboard csapat-megosztás

A heti dashboard **emailbe érkezik** — minden vezetőségi tag egyszerre kapja meg.

---

## Email-listák (recipient)

Hétfő reggel 8:00-kor **párhuzamosan** kapja:

- `cseh.balazs@elelmiszerbank.hu` (elnök)
- `nagygyorgy.andras@elelmiszerbank.hu` (külső kapcsolatok igazgatója)
- `schwikker.zsofia@elelmiszerbank.hu` (áruházi koordináció)
- `bajdik.janos@elelmiszerbank.hu` (IT lead)
- `feher.balazs@elelmiszerbank.hu` (pénzügyi elszámolások)

> 💡 **Email-csoportos** beállítás: a Schedule-ban egyszerre add hozzá a 5 email-t (vesszővel elválasztva), VAGY hozz létre egy `vezetoseg@elelmiszerbank.hu` csoportos cím-et, és csak azt add a Schedule-ba.

---

## Heti vezetői meeting (kedden 9:00)

A heti dashboard alapján **minden kedden 9-kor** 30 perces gyors meeting:

1. **Csenh Balázs** összefoglalja a 3 javaslatot
2. **Schwikker Zsófia** akciókat vállal a partnerekkel kapcsolatban
3. **Bajdik János** SmartFront-statisztikákat kontextusba helyez
4. **Nagygyörgy András** kommunikációs hatás-szempontot ad

A meeting **eredménye** egy 1-oldalas akció-lista, amit az 5 vezetőségi tag e-mailben kap.

---

## Eszközök

A heti dashboard **email-alapú** (NEM közös szerkesztés). Ezért:

| Eszköz | Mire kell |
|--------|-----------|
| **Claude.ai Schedule** | Auto-generálás + email-küldés |
| **Email kliens** (Gmail / Outlook) | Olvasás |
| **Google Docs / Notion** (opcionális) | Heti meeting-jegyzőkönyv |
| **Calendar** | Kedd 9:00 ismétlődő meeting |

A **Schedule beállítását** egy fő (pályázatfelelős vagy Bajdik) végzi, aztán **automatikusan fut** — nem kell senki sem szerkesztenie.

---

## Megosztás külső féllel (pl. donor partnerek)

Ha a Tesco / Auchan CSR-csapat is szeretné kapni a heti dashboardot:

1. **NE** add direkt a Schedule recipient-listához (érzékeny anonim adatok)
2. Helyette: **havi szegmentált mini-riport** (lásd `prompt-03-donor-szegmentalt.md`) — csak az adott donor-egységekből származó adatok
3. A kommunikációs felelős havonta küldi át (NEM auto)

---

## ⚠️ Adatkezelés

- A heti dashboardban **anonim partner-szervezet kódok** vannak (`fovarosi-gyermekellato-A`)
- **Donor-partneri** adatok (áruházi kg, áruházi-egység kód) nyilvánosan üzleti adatok — vagyis biztonságosan emailben küldhetők
- **Rászoruló családi** adatok SOSEM kerülnek a dashboardba — csak aggregált statisztika ("becsült 400 fő")
- **Email-titkosítás** ajánlott (TLS — gmail.com / outlook.com automatikusan)

---

## Költség

| Csomag | Ár |
|--------|-----|
| Claude Pro (1 fiók aki a Schedule-t kezeli) | €18/hó |
| Vagy Claude Team | €25/user/hó |
| Vagy Claude for Nonprofits | €0 |

A Schedule-t **1 fő** kezeli — a többi csak emailben kapja a dashboard-ot, **saját Claude-fiók nem szükséges**.
