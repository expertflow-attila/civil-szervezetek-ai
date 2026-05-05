# Cowork — Pályázatírás csapatban (git-alapú)

A Claude Code workflow **git-alapú**, ami **automatikusan csapat-szintű cowork-ot** ad. A pályázat-csapat mind ugyanazon a git repón dolgozik.

---

## Munkafolyamat

### Setup csapatszinten

1. **Cseh Balázs** klónozza a repót egyszer:
   ```bash
   git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git
   ```

2. **Pályázatfelelős** kapja a write-jogot a GitHub-on:
   - GitHub repo → Settings → Manage access → Add people
   - `palyazat-felelos@elelmiszerbank.hu` → Write access

3. **Mindkét stáb-tag** Claude Code-pal dolgozik **ugyanabban a `palyazatok/` mappában**.

### Iterációk

**Pályázatfelelős** elindítja a Claude Code-ot:
```bash
cd civil-szervezetek-ai/05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga
claude .
```

**Iteratív munka 5-7 körön át**, minden lépés után git commit:

```
git log --oneline | head -5

a3b4c5d feat: 4. szekció finomítás (módszer 5 alfejezetre)
b1c2d3e feat: 6. szekció (költségvetés bontás)
c0d1e2f feat: pályázat 1. verzió kész (8 szekció)
d8e9f0a feat: pályázat TOC strukturálva
```

### Cseh Balázs review

Cseh Balázs **NEM Claude Code-ot használ**, csak átolvassa GitHub-on:
- `https://github.com/expertflow-attila/civil-szervezetek-ai/blob/main/05-elelmiszerbank/csomagok/03-claude-code-palyazatiras-bga/palyazatok/2026-bga-uj-palyazat.md`

**GitHub Pull Request** formájában a pályázatfelelős küldi review-ra:
1. Pályázatfelelős: új branch (`feature/2026-bga-uj-palyazat`), ott dolgozik
2. Készítsen PR-t a `main` ágra
3. Cseh Balázs **review-zza, kommenteket ír** sortok mellé
4. Pályázatfelelős **újabb iteráció** Claude Code-ban (a kommenteket figyelembe véve)
5. Cseh **approve** → pályázatfelelős merge-eli

### Lezárás

A pályázat **`main`-en** van. Cseh Balázs lemented Word-be:
```bash
pandoc palyazatok/2026-bga-uj-palyazat.md -o palyazatok/2026-bga-uj-palyazat.docx
```

→ logó, aláírás betoldva → BGA-nak benyújtva.

---

## Eszközök

| Eszköz | Mire kell | Ki használja |
|--------|-----------|--------------|
| **Claude Code** | Pályázat-iterációk, git commit | Pályázatfelelős |
| **Git + GitHub** | Verziókezelés, PR-review | Mindkettő |
| **GitHub web** | Cseh Balázs review (Claude Code nélkül) | Cseh |
| **pandoc** | Markdown → Word konverzió | Pályázatfelelős |
| **Microsoft Word** | Logó, aláírás, leadás | Pályázatfelelős |

---

## Költség

| Csomag | Ár | Indok |
|--------|-----|-------|
| Claude Pro (Pályázatfelelős) | €18/hó | Claude Code napi szintű használat |
| GitHub (alapcsomag) | €0 | publikus repó |
| pandoc | €0 | nyílt forrás |

**Becsült havi költség**: €18/hó. Claude for Nonprofits-szal **€0**.

---

## ⚠️ Adatkezelési szabály

A pályázat-fájlok **publikusan láthatóak** a GitHub repón (a `civil-szervezetek-ai` repó publikus). Ezért:

- **Anonimizált** sample-pályázatok használhatók
- **Konkrét, jogi súlyú pályázat-szöveg** csak a leadás után publikus (Magyar Államkincstár tájékoztatóként)
- **Érzékeny kontaktok** (telefonszámok, email-ek) **NE** kerüljenek a markdownba — a `[HIÁNYZIK: kapcsolat]` jelölést használd, és csak a Word-konverzió után toldd be őket
