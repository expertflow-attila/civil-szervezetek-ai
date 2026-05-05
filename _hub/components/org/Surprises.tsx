import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent } from "@/lib/types";
import { Sparkles } from "lucide-react";

export function Surprises({ content }: { content: PageContent }) {
  return (
    <section className="section" id="amire-nem-gondoltak">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Amire nem gondoltak"
          title="5 rejtett"
          accent="use case"
          tail=" — kis befektetés, váratlan eredmény"
          description="Ezek a funkciók nem szerepelnek a tipikus 'AI civil szervezetnek' listában, mégis a stáb mindennapi terhét csökkentik. Egytől-egyig pilotozhatóak egy hét alatt."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.surprises.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 80}>
              <article className="card p-7 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-lilac-soft)] border border-[var(--color-lilac-line)] flex items-center justify-center">
                    <Sparkles size={16} strokeWidth={1.5} className="text-[var(--color-lilac)]" />
                  </div>
                  <h3 className="font-display text-xl text-[var(--color-ink)] leading-tight pt-1.5">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4 text-[15px]">
                  {s.description}
                </p>
                <div className="pt-4 border-t border-[var(--color-line)]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-2">
                    Miért nem gondolnak rá
                  </div>
                  <p className="text-[var(--color-ink-mute)] text-sm leading-relaxed">{s.why}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
