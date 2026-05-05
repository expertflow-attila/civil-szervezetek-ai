# Magyar Élelmiszerbank Egyesület — AI bevezetési csomag

**Kategória:** élelmiszermentés · **Slug:** `05-elelmiszerbank` · **Verzió:** 2026-05-05

A Magyar Élelmiszerbank Egyesület hazai legnagyobb élelmiszermentő hálózata. **2024:** 10 685 tonna élelmiszer, 20 mrd Ft érték, 243 919 nélkülöző, 650+ partnerszervezet. **Csapat:** 24 alkalmazott + 60 önkéntes, 4 raktár. **Áruházi partnerek:** Tesco, Auchan, Aldi, Metro, Lidl, Penny, KFC.

Ez a csomag az AI bevezetését támogatja — **fókusz:** a strukturális adminisztratív kapacitás-hiány enyhítése (donor-jelentések, SmartFront elszámolás-helpdesk, pályázat-írás, önkéntes-onboarding).

## Csomag tartalma

| Fájl | Mit tartalmaz | Mire jó |
|------|---------------|---------|
| `01_executive_summary.md` | 4 oldalas vezetői összefoglaló | Cseh Balázs / vezetés döntéshez |
| `02_starter_prompts.md` | 14 általános + 8 Élelmiszerbank-specifikus prompt | Stáb mindennapi használat |
| `03_claude_desktop_config.json` | Élelmiszerbank-specifikus Claude Desktop MCP konfig | Bajdik János (IT) telepítéshez |
| `04_claude_nonprofits_jelentkezes.md` | Pre-filled jelentkezési levél valós Élelmiszerbank-számokkal | Adminisztráció jelentkezéshez |
| `05_pilot_metrics.md` | 12-hetes (3×4 hét) mérőszám-roadmap | AI sáfár heti review-hoz |
| `06_napi_munka_terkep.md` | 14 napi feladat × AI-asszisztencia, prioritási sorrenddel | Stáb használat-tervezéshez |
| `web/` | Next.js premium weboldal (Vercel-deployable) | Bemutató oldal donor-jaival |
| `downloads/05-elelmiszerbank-ai-csomag.zip` | A 6 dokumentum egy letöltésben | YouTube video nézőknek |

## Web app indítás (lokál)

```bash
cd web
pnpm install
pnpm dev
# http://localhost:3000
```

## Vercel deploy (Attila explicit jóváhagyásával)

```bash
cd web
vercel --prod
```

## Quick start a stábnak

1. Olvasd el a `01_executive_summary.md`-t (10 perc)
2. Cseh Balázzsal / Nagygyörgy Andrással döntés a pilot-indításról (1 órás meeting)
3. AI sáfár kijelölése — javaslat: kommunikációs vagy CSR-felelős
4. `04_claude_nonprofits_jelentkezes.md` benyújtása (2-4 hét átfutás)
5. **Quick win pilot indul:** donor-jelentés-asszisztens Tesco-sablonnal

## Kapcsolat

**Tanácsadó:** Nagy Attila / Expert Flow · `hello@expertflow.hu`
**Hivatalos:** Magyar Élelmiszerbank Egyesület · 1172 Budapest, Lokátor utca 3. · `kapcsolat@elelmiszerbank.hu`
**Hivatalos web:** [elelmiszerbank.hu](https://www.elelmiszerbank.hu)
