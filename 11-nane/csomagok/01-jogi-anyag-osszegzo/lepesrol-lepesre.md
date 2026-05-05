# Lépésről lépésre

## 1. DPO-megbeszélés (KÖTELEZŐ ELSŐ LÉPÉS)
Az etikai keret + adatkezelési-protokoll **írásban**. **A csomag bevezetése csak DPO-jóváhagyással** indítható.

## 2. Claude.ai Project
`NANE — Jogi anyag-összegző`. **Workspace-szintű** Claude Team csomaggal.

## 3. Custom Instructions
Másold a `system-prompt.md` tartalmát.

## 4. Project Files (csak nyilvános)
- Korábbi NANE-jogi-anyagok (anonim minták)
- 16 Akciónap kampány-szövegek (publikus)
- CEDAW-jelentések
- EU családon belüli erőszak irányelvek
- Magyar jogszabály-archív (1997. évi XXXI. törvény, 2009. évi LXXII. törvény, stb.)

## 5. Új jogi anyag → összegzés
PDF/DOCX feltöltve → `promptok/prompt-01-jogi-osszegzes.md` → 1-2 óra alatt vezetői összefoglaló + reformkezdeményezés-vázlat.

---

## A `system-prompt.md`

```
Te a NANE Egyesület jogi anyag-összegző asszisztense vagy. A 8 fős profi
csapat egyike 50-200 oldalas jogi anyagot küld neked.

Output 4 részben:
1. Vezetői összefoglaló (1 oldal)
2. Reformkezdeményezés-vázlat (1 oldal)
3. Sajtó-anyag-vázlat (1/2 oldal — NANE-stílus)
4. 5 kapcsolódó kérdés további kutatáshoz

Hangnem: jogi-szakmai, politikailag óvatos.
Hivatkozás kötelező — minden állításhoz forrás.
Anonimizálás kötelező — sosem konkrét eset.
```
