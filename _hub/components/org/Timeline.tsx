import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent, TimelineWeek } from "@/lib/types";

const phaseLabel: Record<TimelineWeek["phase"], string> = {
  pilot: "Pilot · 1 fő",
  csapat: "Csapat · 3–5 fő",
  skálázás: "Skálázás · egész szervezet",
};

const phaseColor: Record<TimelineWeek["phase"], string> = {
  pilot: "var(--color-mint)",
  csapat: "var(--color-cream)",
  skálázás: "var(--color-lilac)",
};

export function Timeline({ content }: { content: PageContent }) {
  return (
    <section className="section" id="bevezetes">
      <div className="container-wide">
        <SectionHeading
          eyebrow="12 hetes fokozatos bevezetés"
          title="Apró"
          accent="lépésekben"
          tail=" — nem minden egyszerre"
          description="A 12-hetes terv 3 fázisra bontva: 1 fő pilot, 3-5 fős csapat, majd egész szervezet. Minden fázis végén döntési pont — folytatjuk vagy korrigálunk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {(["pilot", "csapat", "skálázás"] as const).map((phase) => (
            <RevealOnScroll key={phase}>
              <div className="card p-6 h-full">
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3"
                  style={{ color: phaseColor[phase] }}
                >
                  {phaseLabel[phase]}
                </div>
                <div className="font-display text-3xl text-[var(--color-ink)] mb-2">
                  Hét {phase === "pilot" ? "1–4" : phase === "csapat" ? "5–8" : "9–12"}
                </div>
                <div className="text-[var(--color-ink-mute)] text-sm leading-relaxed">
                  {phase === "pilot"
                    ? "Egy fő próbálja a #1 quick wint, alapadatot mér."
                    : phase === "csapat"
                      ? "Sikerre épülve 3-5 fő, közös tudásbázis épül."
                      : "Egész szervezet, AI-protokoll dokumentálva, költség-döntés."}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="card p-2">
          {content.timeline.map((row, i) => (
            <RevealOnScroll key={row.week} delay={i * 50}>
              <div
                className={`grid grid-cols-[100px_1fr] gap-6 px-6 py-5 ${i < content.timeline.length - 1 ? "border-b border-[var(--color-line)]" : ""}`}
              >
                <div>
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.2em] mb-2"
                    style={{ color: phaseColor[row.phase] }}
                  >
                    {row.week}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-dim)]">
                    {row.phase}
                  </div>
                </div>
                <div>
                  <div className="font-display text-lg text-[var(--color-ink)] mb-3 leading-tight">
                    {row.title}
                  </div>
                  <ul className="space-y-1.5">
                    {row.steps.map((s, j) => (
                      <li
                        key={j}
                        className="text-[var(--color-ink-soft)] text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--color-lilac)] shrink-0">→</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
