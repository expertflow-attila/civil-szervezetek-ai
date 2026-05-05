import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent } from "@/lib/types";

export function Metrics({ content }: { content: PageContent }) {
  return (
    <section className="section" id="meres">
      <div className="container-wide">
        <SectionHeading
          eyebrow="6 hetes mérőszámok"
          title="Mit"
          accent="mérünk"
          tail=", hogy lássuk működik-e?"
          description="Anélkül, hogy mérnénk, csak érzés van. Ez a 4-6 mutató jól mutatja, hogy az AI tényleg időt-pénzt-energiát spórol-e — vagy csak forma-újdonság."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.metrics.map((m, i) => (
            <RevealOnScroll key={m.label} delay={i * 80}>
              <div className="card p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-3">
                  Mérőszám {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl text-[var(--color-ink)] mb-5 leading-tight">
                  {m.label}
                </h3>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-line)]">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-1.5">
                      Most
                    </div>
                    <div className="text-[var(--color-ink-soft)] text-sm leading-tight">
                      {m.baseline}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-lilac)] mb-1.5">
                      Cél (6 hét)
                    </div>
                    <div className="text-[var(--color-ink)] text-sm leading-tight">{m.target}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
