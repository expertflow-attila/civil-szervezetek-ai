# Prompt #03 — CO2 hatás-történet generátor

**Mire jó:** Donor-riportokba szövegfilléreket generál: anonim hatás-történetek, CO2-egyenérték-számítás, érzelmi keret a donor-élmény erősítésére. *"A Tesco XV. kerületi áruházából megmentett 1 200 kg pékáru megelőzött 1 752 kg CO2-kibocsátást — ez egy átlagos autó 0,76 évi károsanyag-kibocsátása."*

**Miért hasznos:** A nyers számok érzelmi súly nélkül kevésbé hatásosak. A CO2-átszámítás (1.46 kg/kg, 2295 kg/autó-év) sablon-szintű, de **donor-szinten** alkalmazva **vizuálisan lenyűgöző**.

**Mikor használd:** Bármelyik donor-riport elkészültekor — utolsó simítás.

---

## A prompt — másold be a Project chat-be

```
A `tesco-export-2026-aprilis.csv` alapján generálj 3 érzelmi-hatás-snippetet
a Tesco-donor-riport "Hatás-történet" szekciójához:

1. CO2-snippet (számszerű, vizuális):
   - mennyi kg CO2 megelőzve a Tesco-egységektől
   - autó-egyenérték (osztva 2295-gyel)
   - 1 emberi mondat: "ennyi CO2 = X budapesti autóval kevesebb"

2. Anonim közösségi történet (sablon-szintű, sosem konkrét család):
   - "Egy fővárosi gyermekellátó partner április 15-én Adományok Hete keretében
     78 családnak osztott Tesco-pékárut..."
   - 2-3 mondat, érzelmi-meleg, hiteles, sosem álszent

3. Hatás-állítás (általánosítás):
   - "A 2026 áprilisi Tesco-mentésünk az egész éves Tesco-célunk X%-át teljesítette"

Hangnem: meleg, számokkal alátámasztott, NEM marketing-szöveg.
Tilos kifejezések: "forradalmi", "életet-változtató", "egyedülálló".
```
