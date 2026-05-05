# Cowork — Project megosztás a stábbal

A Claude Project **csapat-szintű** lehet — több stáb-tag használhatja párhuzamosan, közös tudásbázissal.

---

## Hogyan oszd meg a Project-et

> ⚠️ Ez **csak Claude Team** csomaggal működik. Pro-fiókkal a Project privát maradna.

### 1. Claude Team csomag aktiválása

[claude.ai/upgrade](https://claude.ai/upgrade) → **Team plan**. Vagy ha Claude for Nonprofits-ot kaptátok, ez automatikusan tartalmazza.

### 2. Workspace meghívás

A Claude Team-ben a szervezeti **Workspace** kezeli a felhasználókat. Cseh Balázs (admin) meghívja:

- `kommunikacio@elelmiszerbank.hu` (kommunikációs felelős)
- `bajdik.janos@elelmiszerbank.hu` (IT lead)
- `schwikker.zsofia@elelmiszerbank.hu` (áruházi koordináció)

> Minden meghívottnak Claude-fiókja lesz, **önállóan** is használhatja.

### 3. Project sharing

A `Élelmiszerbank — Donor-jelentés` Project-en kattints a **🔗 Share** gombra (jobb felső sarok).

**Beállítások:**

- **Visibility**: `Workspace members can view`
- **Edit access**: csak a kommunikációs felelős + Cseh Balázs (két szerkesztő, hogy páros-validáció legyen)
- **View access**: minden workspace-tag (8 fő)

### 4. Project-tudásbázis közös karbantartása

A **Project Files**-ba bárki feltölthet új sablon-riportot, frissített SmartFront-export-ot. **A változtatás minden tag számára azonnali**.

---

## Munkamegosztás javaslat

| Feladat | Felelős |
|---------|---------|
| Havi Tesco-export feltöltés | Bajdik János |
| Custom Instructions karbantartás (változás esetén) | Kommunikációs felelős |
| 1. verziós riport generálás | Kommunikációs felelős (vagy CSR-asszisztens) |
| Riport-finomítás + Tesco-nak küldés | Kommunikációs felelős |
| 2024-es nyertes minták frissítése (új év) | Cseh Balázs jóváhagyásával |

---

## Riport-iterációk csapatban

Ha a kommunikációs felelős generál 1. verziót, és **Schwikker Zsófia kéri a finomítást** (mert ő ismeri a Tesco-CSR-csapat előzetes preferenciáit), akkor:

1. Schwikker megnyitja **ugyanazt a beszélgetést** (a Project chat-listában látja)
2. Ír egy iteratív promptot (pl. *"a 2. bekezdést írd át — a Tesco-CSR-csapat nem szereti a 'tegező' hangnemet"*)
3. A finomított verzió **mindketten látják**

Ez egy **valós cowork-folyamat** — nem email-iterációkkal, hanem ugyanazon Claude-beszélgetésben.

---

## ⚠️ Adatkezelési szabály

- **Anonimizálás kötelező** — ha valaki konkrét partner-szervezet-nevet ír promptba, az audit log rögzíti, és Cseh Balázs **havi review-ban** átnézi.
- **Donor-adat** és **rászoruló-adat** SOSEM keveredhet egy Project-ben. Ha a stáb-tag rászoruló-adatot említ, **AZONNAL** átállás külön Project-be.

---

## Költség

| Csomag | Ár | Kit fed le |
|--------|-----|-----------|
| Claude for Nonprofits | €0 (jelentkezés alapján) | 5-10 felhasználó (intézmény-szintű) |
| Claude Team | €25/user/hó | bármely workspace-tag |

**Becsült havi költség** 8 stáb-taggal: €200/hó (Claude for Nonprofits-szal: €0 az első 12 hónapban).
