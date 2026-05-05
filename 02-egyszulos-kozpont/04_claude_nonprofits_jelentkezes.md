# Claude for Nonprofits — jelentkezési levélsablon

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-04

---

## Mit kell tudni a programról

Az Anthropic a **Claude for Nonprofits** keretében ingyenes / kedvezményes hozzáférést biztosít a Claude API-hoz és termékekhez minősített nonprofit szervezeteknek. A program tartalma jellemzően:

- **Ingyenes API credit** (havi keretösszeg, jogosultságtól függően)
- **Claude Pro / Team licenc kedvezmény** (akár 75%-os) a stáb tagjainak
- **Integrációk** Microsoft 365, Asana, Candid, Blackbaud platformokkal
- **Prioritást élvező support** és onboarding tananyag

**Jelentkezés:** [https://www.anthropic.com/news/claude-for-nonprofits](https://www.anthropic.com/news/claude-for-nonprofits) → online űrlap kitöltése. Átfutás 2-4 hét.

**Jogosultság:** bejegyzett nonprofit / civil szervezet, közhasznú minősítéssel (a 4 vizsgált szervezet mind jogosult).

---

## Jelentkezési űrlap mezői és javaslat-tartalmak

A jelentkezés online angol nyelvű űrlapon történik. Az alábbi szövegek angolul vannak (a hivatalos űrlap nyelvén), magyar zárójeles fordítással.

### Organization name
```
{{Hivatalos szervezet név}}
```

### Country
```
Hungary
```

### Mission statement (max 200 chars)
**NOE példa:**
```
NOE represents 16,000 large families across Hungary, providing free legal, 
social, financial and child-rearing advisory through 250 local groups and 
7 regional centers since 1987.
```

**Egyszülős Központ példa:**
```
Single Parent Center supports single-parent families in Hungary through free 
legal, psychological, child-psychology and mediation services, both online 
(since 2005) and at our Budapest center (since 2018).
```

**Fonjuk Egymás Hálóját példa:**
```
Crisis Parents Network is a peer-led support association for parents in 
crisis situations in Hungary, connecting families with mentors who have 
lived experience and guiding them to appropriate institutional support.
```

**Dévény / Pető példa:**
```
The Anna Dévény Foundation supports premature and disabled children with 
the unique DSGM therapy method developed in Hungary, runs postgraduate 
training for therapists, and provides direct family support.
```

### Annual budget (USD)
*A pontos szám a szervezet éves költségvetése. Tipikus értékek HUF-ban (2025-ös becslés):*
- NOE: 200-500 millió Ft (~$550K-1.4M)
- Egyszülős Központ: 50-150 millió Ft (~$140-410K)
- Fonjuk: 5-30 millió Ft (~$14-82K)
- Dévény: 30-100 millió Ft (~$82-275K)

### Number of staff / volunteers
*Tényleges szám.*

### Website
*Hivatalos URL.*

### Tax-exempt status / Registration number
*Bíróság közhasznú nyilvántartási szám + adószám.*

### How will you use Claude? (max 1500 chars) — KULCSKÉRDÉS

**Sablon, amit testre kell szabni:**

```
Our organization plans to deploy Claude across four core operational areas 
to multiply the impact of our small staff serving vulnerable families:

1. Grant writing and mandatory reporting: We submit 5-15 grant applications 
   yearly to Hungarian sources (BGA, NEA, EFOP) and the EU. Claude will draft 
   first versions from our prior winning grants and program data, reducing 
   8-20 hours per application to 3-8 hours. Mandatory annual reports to the 
   Hungarian Court (iFORM format starting 2026) will be drafted from our 
   activity logs.

2. Member / beneficiary inquiry triage: We receive 20-100 inquiries daily 
   (legal aid, social benefits, child-rearing). Claude will categorize, 
   summarize, and draft replies for staff review, reducing per-inquiry 
   handling time by 70%.

3. Internal knowledge base via NotebookLM and Claude Projects: Hungarian 
   social benefits law changes 5-15 times yearly. Claude-powered knowledge 
   base will give counselors instant, citation-backed answers, reducing 
   new-hire onboarding from 6-12 months to 2-4 months.

4. Mentor / volunteer coordination: For our peer-support programs, Claude 
   will suggest matches between mentors and parents based on anonymized 
   profile data, freeing coordinator time for high-value human work.

We have a clear data protection framework: anonymization before any prompt, 
strict adherence to GDPR (especially Article 9 on special categories), no 
direct AI contact with vulnerable individuals — only staff assistance. Our 
DPO has been involved in the planning.
```

### Specific Claude products requested
*Pipálandó:*
- ☑ Claude.ai (Pro / Team subscription)
- ☑ Claude API (for any custom integrations)
- ☐ Claude for Enterprise (csak ha kifejezetten skálázunk)

### Number of seats requested
*A használatra tervezett stáb-tagok száma. Indulásra javasolt:*
- NOE: 5-10
- Egyszülős Központ: 3-5
- Fonjuk: 2-3
- Dévény: 3-5

### Implementation timeline
```
Month 1: Pilot with 1-2 staff on highest-ROI use case (grant writing or 
inquiry triage), measure baseline metrics.

Month 2: Expand to full staff, build NotebookLM knowledge base, write 
internal AI usage protocol.

Month 3: Measure results (time saved, error rates, staff satisfaction), 
decide on long-term integration scope.
```

### Privacy / data protection statement
```
We process special category personal data under GDPR Article 9(2)(j) — 
public interest in social services. Our data protection officer has approved 
the implementation framework, which mandates: (a) full anonymization before 
any prompt, (b) Anthropic's zero data retention setting, (c) signed Data 
Processing Agreement, (d) audit logging via Claude Team, (e) AI used only 
as staff assistant — no direct interaction with vulnerable beneficiaries.
```

---

## Hivatalos kísérőlevél a jelentkezéshez (opcionális, de erősíti)

Ha az online űrlap mellett feltölthető PDF, használd ezt:

```
[Szervezet fejléc]

[Dátum]

To: Anthropic Claude for Nonprofits Team

Subject: Claude for Nonprofits Application — [Organization Name]

Dear Anthropic Team,

[Organization name] is a Hungarian [civil association / public-benefit 
foundation] founded in [year], serving [target population] across [geography]. 
Our work directly impacts [number] families / individuals annually through 
[core services].

We are applying for the Claude for Nonprofits program because we believe 
AI-assisted operations will allow our small staff to multiply impact for 
the vulnerable populations we serve, without compromising the personal, 
human nature of our work.

Our planned use cases prioritize internal staff productivity over 
beneficiary-facing automation. We will use Claude for grant writing, 
inquiry triage, knowledge management, and reporting — areas where the 
time savings translate directly into more capacity for direct support 
work with families.

Hungary's civil sector is at an early stage of AI adoption, and we see 
this as both an opportunity (early adopter advantage in grant competition 
and donor reporting) and a responsibility (modeling ethical AI use in 
the social sector).

We have a clear data protection framework, approved by our data protection 
officer, ensuring full GDPR compliance and ethical safeguards for our 
beneficiary data.

We thank you for considering our application and look forward to the 
opportunity to demonstrate impact-first AI use in the Hungarian civil 
sector.

Sincerely,

[Igazgató / Elnök neve]
[Pozíció]
[Email] | [Telefon]
[Hivatalos szervezet név és cím]
```

---

## Tippek a sikeres jelentkezéshez

1. **Konkrét számok** — mindig adj meg konkrét óraszámot, érintett családszámot, jelenlegi vs. tervezett mérőszámokat. Az általánosságokat („szeretnénk hatékonyabbak lenni") nem értékelik.
2. **Hangsúlyozd a sérülékeny célcsoportot** — nagycsaládos, egyszülős, krízisanya, fogyatékos gyermek. Ez ad nagy súlyt az Anthropic non-profit programjában.
3. **Etikai keret** — világosan írd le, hogy az AI nem érintkezik közvetlenül a kiszolgáltatottakkal. Ez a #1 értékelési szempont.
4. **Magyar nyelvű különlegesség** — említsd meg, hogy a Claude erős magyar nyelvtudása alapfeltétele a használhatóságnak. Ez egy kis nyelvi piac, ahol a Claude differenciál.
5. **Skálázási terv** — ne csak „kipróbáljuk" hangulatban, hanem 90 napos pilot + skálázási döntés. Ez mutatja, hogy komoly.
6. **Kapcsolattartó:** egy konkrét személy email + telefon, aki gyorsan reagál az Anthropic visszakérdezésére.

---

## Várható válaszidő és következő lépések

- **2-4 hét** átfutás után emailben jön a válasz
- Pozitív elbírálás esetén kapsz egy onboarding linket + DPA aláírási folyamat
- A licencek 24-48 órán belül aktívak

Ha 4 hét után sincs válasz, írj follow-up emailt: `nonprofits@anthropic.com` (a hivatalos elérhetőség az űrlapon megjelenik).
