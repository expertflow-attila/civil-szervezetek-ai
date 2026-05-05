import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent } from "@/lib/types";
import { Check } from "lucide-react";

export function Stack({ content }: { content: PageContent }) {
  return (
    <section className="section" id="eszkozok">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Eszköz-stack"
          title="Mit kell"
          accent="telepíteni"
          description="Mind ingyenes vagy közel-ingyenes pilot-fázisban. Egy AI munkagép a központi irodában, vagy a koordinátor saját laptopja elég kezdetnek."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.toolStack.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 60}>
              <div className="card p-6 flex gap-5 h-full">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-lilac-soft)] border border-[var(--color-lilac-line)] flex items-center justify-center">
                  <Check size={14} strokeWidth={2} className="text-[var(--color-lilac)]" />
                </div>
                <div className="grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-display text-lg text-[var(--color-ink)] leading-tight">
                      {t.name}
                    </span>
                    {t.required ? (
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-rose)]">
                        Kötelező
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
                        Opcionális
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed mb-3">{t.purpose}</p>
                  <div className="font-mono text-xs text-[var(--color-lilac)]">{t.cost}</div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
