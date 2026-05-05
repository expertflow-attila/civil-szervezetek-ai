import { RevealOnScroll } from "./RevealOnScroll";

const steps = [
  {
    title: "Forráskutatás",
    desc: "Minden szervezetről nyilvános források (saját weboldal, sajtó, beszámolók) — KONKRÉT 2024-2025 számokkal. Nem találunk ki adatot.",
  },
  {
    title: "Napi munka térkép",
    desc: "Stáb-tipikus napjának 4-5 valódi feladata. Ki csinálja most, mennyi időbe telik, milyen terhelési szinten — hogy az AI hova lép be konkrétan.",
  },
  {
    title: "AI use case mapping",
    desc: "3 quick win + 5 'amire nem gondoltak' — effort/impact mátrixban. Nem általánosság: konkrét eszköz, konkrét sablon, konkrét megtakarítás-becslés.",
  },
  {
    title: "12-hetes fokozatos rollout",
    desc: "1 fő pilot (Hét 1-4) → 3-5 fős csapat (5-8) → egész szervezet (9-12). Minden fázis végén döntési pont. Heti mérés.",
  },
  {
    title: "GDPR + etikai keret",
    desc: "Szervezet érzékenységi szintje (alap / magas / kritikus) szerint. Bántalmazott nőknél / krízisvonalon AI sosem érintkezik klienssel — csak stábot segít.",
  },
  {
    title: "Premium weboldal",
    desc: "Next.js 16 + Tailwind v4 + lavender / dark mode. Vercel-deployolt — minden szervezet egy URL-en, letölthető ZIP-pel.",
  },
];

export function Methodology() {
  return (
    <section className="section" id="modszertan">
      <div className="container-wide">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-lilac)] mb-5">
            Hogyan készült
          </div>
          <h2 className="display text-[length:var(--text-h1)] mb-5 leading-tight">
            6 lépéses
            <em className="accent"> módszertan</em>
          </h2>
          <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed">
            Nem chat-templátum. Nem PDF-disznó. Hanem strukturált, mérhető bevezetési csomag — amit Claude Code-dal megnyitva a stáb a használatba veheti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 60}>
              <div className="card p-7 h-full grid grid-cols-[60px_1fr] gap-5 items-start">
                <div className="font-display text-4xl text-[var(--color-lilac)] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl text-[var(--color-ink)] mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] text-[15px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
