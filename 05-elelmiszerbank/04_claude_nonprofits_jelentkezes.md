# Claude for Nonprofits — Magyar Élelmiszerbank Egyesület jelentkezés

**Készítette:** Nagy Attila / Expert Flow · **Dátum:** 2026-05-05

**Hivatkozás:** [https://www.anthropic.com/news/claude-for-nonprofits](https://www.anthropic.com/news/claude-for-nonprofits)

---

## A program

Az Anthropic a **Claude for Nonprofits** keretében ingyenes / kedvezményes hozzáférést biztosít a Claude API-hoz és termékekhez minősített nonprofit szervezeteknek:

- **Ingyenes API credit** (havi keretösszeg)
- **Claude Pro / Team licenc kedvezmény** (akár 75%)
- **Integrációk**: Microsoft 365, Asana, Candid, Blackbaud
- **Prioritást élvező support**

**Átfutás:** 2-4 hét. **Jogosultság:** bejegyzett nonprofit / közhasznú szervezet.

A Magyar Élelmiszerbank Egyesület közhasznú szervezet, **2005 óta** működik, **az Európai Élelmiszerbankok Szövetségének teljes jogú tagja**. Egyértelműen jogosult.

---

## Jelentkezési űrlap — pre-filled válaszok

### Organization name

```
Hungarian Food Bank Association (Magyar Élelmiszerbank Egyesület)
```

### Country

```
Hungary
```

### Mission statement (max 200 chars)

```
Hungary's largest food rescue network. Since 2005, we redistribute surplus 
food from retailers, manufacturers and donors through 650+ charity 
partners to people in need across the country.
```

### Annual budget (USD)

A 2024-es éves beszámoló alapján a kiosztott élelmiszer értéke 20 milliárd Ft (~$55M USD), de a működési költségvetés ennek töredéke (logisztika + személyzet). A pontos HUF-érték a hivatalos közhasznúsági beszámolóból veendő — várhatóan **~500-1500 millió HUF (~$1.4-4.1M USD)**.

### Number of staff / volunteers

```
24 paid staff, 60+ active volunteers
```

### Website

```
https://www.elelmiszerbank.hu
```

### Tax-exempt status / Registration number

```
Public benefit organization (közhasznú) — registration number from 
Hungarian Court (to be filled by org)
Tax ID (adószám): to be filled by org
```

### How will you use Claude? (max 1500 chars) — KULCSKÉRDÉS

```
Hungary's largest food bank distributes 10,685 tons of rescued food yearly 
(20 billion HUF / $55M value, 2024) to 243,919 people in need via 650+ 
charity partners and 4 regional warehouses. Our 24 staff and 60+ volunteers 
manage massive logistics — but the administrative load grows even faster.

We will deploy Claude across four operational areas:

1. Donor reporting: 7 retail partners (Tesco, Auchan, Aldi, Metro, Lidl, 
   Penny, KFC) require monthly reports in different formats. Currently 
   10–20 hours/month for our communications lead. Claude will draft from 
   our SmartFront ERP data and templates, reducing to <3 hours.

2. SmartFront accounting validation: Our partner organizations upload 
   accounting per pickup, with retailer-specific rules (Aldi vs Tesco vs 
   Lidl format differs). Currently 1–2 hours/day helpdesk work. Claude 
   pre-validates uploads, flagging anomalies — staff reviews only edge 
   cases.

3. Grant writing: 5–15 yearly applications (BGA, NEA, EFOP, EU, corporate 
   CSR). Claude drafts from our prior winning grants and 2024 statistics, 
   reducing 8–25 hours per application to 3–8 hours.

4. Volunteer onboarding & internal knowledge: 60+ volunteers cycle in. 
   Claude transcribes our intro video, builds searchable knowledge base 
   (food safety, NÉBIH/FELIR rules, partner protocols), reducing 
   onboarding 2–3 weeks → 4–7 days.

We have a clear data protection framework: anonymization before any 
prompt, GDPR Article 9 compliance for any beneficiary data, signed DPA, 
audit logging. Claude assists staff — never directly contacts vulnerable 
families.
```

### Specific Claude products requested

- ☑ Claude.ai (Pro / Team subscription)
- ☑ Claude API (for SmartFront integration potential)
- ☐ Claude for Enterprise (later, only if scaling to all retail chains)

### Number of seats requested

```
8 (initial pilot: 5 admin + 2 communications + 1 IT/SmartFront helpdesk)
Target by month 12: 15 seats (full admin and communications team)
```

### Implementation timeline

```
Month 1: Pilot with 1 communications lead on donor reporting (Tesco 
template first), measure baseline 10-20h/month → target <3h.

Month 2: Expand to SmartFront helpdesk (Bajdik János) for accounting 
validation; build NotebookLM knowledge base on NÉBIH and food safety 
rules; train 3-5 admin staff.

Month 3: Full rollout — volunteer onboarding automation, partner-matching 
for new retail stores, CO2 impact calculator for donor reports, press 
inquiry templates. Final ROI measurement and scaling decision.
```

### Privacy / data protection statement

```
We process personal data under GDPR. While the Food Bank itself only sees 
aggregated beneficiary statistics (our partners hold individual records), 
we maintain strict safeguards:

(a) Full anonymization before any prompt — no individual partner names, 
    no specific store-locations linked to vulnerable populations
(b) Anthropic's zero data retention setting on all API calls
(c) Signed Data Processing Agreement
(d) Audit logging via Claude Team — monthly review by IT lead
(e) Donor data and beneficiary-related data NEVER mixed in same Claude 
    Project — strict separation
(f) Claude used only as staff assistant — no direct AI contact with 
    beneficiaries or vulnerable individuals
(g) SmartFront export anonymization script before any AI processing
(h) Encrypted local storage (FileVault Mac / BitLocker Windows) for 
    original sensitive documents
```

---

## Hivatalos kísérőlevél (PDF, opcionális)

```
[Magyar Élelmiszerbank Egyesület fejléc]
[Cím: 1172 Budapest, Lokátor utca 3.]
[Dátum: 2026-05-XX]

To: Anthropic Claude for Nonprofits Team

Subject: Claude for Nonprofits Application — Hungarian Food Bank 
Association (Magyar Élelmiszerbank Egyesület)

Dear Anthropic Team,

The Hungarian Food Bank Association is the nation's largest food rescue 
network, founded in 2005. In 2024, we redistributed 10,685 tons of rescued 
food worth 20 billion HUF (~$55M USD) to 243,919 people in need through 
650+ charity partner organizations, operating from 4 regional warehouses 
across Hungary. Our partner retailers include Tesco, Auchan, Aldi, Metro, 
Lidl, Penny and KFC, and our work prevents an estimated 27,580,124 kg 
of CO2 emissions yearly — equivalent to 12,015 cars off the road.

Our 24 staff and 60+ volunteers manage massive operational complexity, 
but the rate-limiting factor is increasingly administrative: retailer-
specific monthly reports, SmartFront ERP accounting validation across 
383+ stores, grant applications, volunteer onboarding, and partnership 
management.

We are applying for the Claude for Nonprofits program because we believe 
AI-assisted operations will allow our small staff to reclaim 
15-22 hours/week from administrative work, redirecting it to high-value 
human work: partner relationship building, new retailer outreach, press 
work, and volunteer recruitment.

Our planned use cases prioritize internal staff productivity, never 
beneficiary-facing automation. We will deploy Claude for donor reporting, 
SmartFront validation, grant writing, and knowledge management — all 
areas where time savings translate directly into more capacity for 
field work and partnership development.

Hungary's civil sector is at an early stage of AI adoption. We see this 
as both an opportunity (early adopter advantage in donor competition) 
and a responsibility (modeling ethical AI use in the social sector with 
food security as our domain).

We have a clear data protection framework, ensuring full GDPR compliance. 
Claude's strong Hungarian language capability is essential — Hungarian 
is a small linguistic market where Claude differentiates from competitors.

Thank you for considering our application. We look forward to demonstrating 
impact-first AI use in Hungary's largest food rescue operation.

Sincerely,

Cseh Balázs (President)
Hungarian Food Bank Association
1172 Budapest, Lokátor utca 3.
Hungary

For technical inquiries: Bajdik János (IT Lead) | bajdik.janos@elelmiszerbank.hu
For partnership inquiries: Schwikker Zsófia (Retailer Coordination)
External advisor: Nagy Attila / Expert Flow | hello@expertflow.hu
```

---

## Tippek

1. **Konkrét számok mindenhol** — 10 685 tonna, 243 919 fő, 650+ partner, 27,580,124 kg CO2. Ezek 2024-es Élelmiszerbank-publikus adatok.
2. **Hangsúlyozd a célcsoportot** — élelmezési biztonság + sérülékeny populáció + partneri ökoszisztéma.
3. **Etikai keret** — világos: AI nem érintkezik közvetlenül rászorulóval. Csak stáb-asszisztens.
4. **Magyar nyelv** — fontos differenciáló érv az Anthropic-nak (kis nyelvi piac, Claude erős magyarul).
5. **Skálázási terv** — 30-60-90 napos pilot + skálázási döntés. Nem "kipróbáljuk".
6. **Kapcsolattartó:** Cseh Balázs (elnök) vagy Nagygyörgy András (külső kapcsolatok), gyors reakcióval.

---

## Várható válaszidő

- **2-4 hét** átfutás után emailben válasz
- Pozitív elbírálás: onboarding link + DPA aláírás → 24-48 órán belül aktív licenc
- Ha 4 hét után nincs válasz: follow-up `nonprofits@anthropic.com` címre

---

**Kapcsolat:** Nagy Attila · `hello@expertflow.hu`
