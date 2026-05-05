import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent, UseCase } from "@/lib/types";
import { Zap, TrendingUp, Wrench } from "lucide-react";

const effortColor: Record<UseCase["effort"], string> = {
  "kicsi": "var(--color-mint)",
  "közepes": "var(--color-cream)",
  "nagy": "var(--color-rose)",
};

const impactColor: Record<UseCase["impact"], string> = {
  "közepes": "var(--color-cream)",
  "nagy": "var(--color-mint)",
  "óriási": "var(--color-lilac)",
};

export function UseCases({ content }: { content: PageContent }) {
  return (
    <section className="section" id="hogyan-segit">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Hogyan segít az AI a napi munkában"
          title="A 4 legnagyobb azonnali"
          accent="nyereség"
          description="Minden use case mérőszámmal, bevezetési költséggel, és konkrét eszközökkel — nem általánosság, hanem a stáb holnap reggeli munkájához."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.useCases.map((uc, i) => (
            <RevealOnScroll key={uc.title} delay={i * 100}>
              <article className="card p-7 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="pill">Quick win {String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-[var(--color-lilac)] bg-[var(--color-lilac-soft)] px-2.5 py-1 rounded">
                    {uc.saving}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-4 leading-tight">
                  {uc.title}
                </h3>
                <div className="space-y-3 mb-6 grow">
                  <Row label="Most" text={uc.problem} />
                  <Row label="AI-asszisztált" text={uc.solution} accent />
                </div>
                <div className="flex flex-wrap gap-4 pt-5 border-t border-[var(--color-line)]">
                  <Meter
                    icon={<Wrench size={13} strokeWidth={1.5} />}
                    label="Bevezetés"
                    value={uc.effort}
                    color={effortColor[uc.effort]}
                  />
                  <Meter
                    icon={<TrendingUp size={13} strokeWidth={1.5} />}
                    label="Hatás"
                    value={uc.impact}
                    color={impactColor[uc.impact]}
                  />
                  {uc.tools && uc.tools.length > 0 ? (
                    <Meter
                      icon={<Zap size={13} strokeWidth={1.5} />}
                      label="Eszköz"
                      value={uc.tools.join(" · ")}
                    />
                  ) : null}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] pt-1.5 text-[var(--color-ink-dim)]">
        {label}
      </div>
      <div
        className={accent ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"}
        style={{ fontSize: "15px", lineHeight: 1.55 }}
      >
        {text}
      </div>
    </div>
  );
}

function Meter({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <span className="text-[var(--color-ink-dim)]">{icon}</span>
      <span className="text-[var(--color-ink-mute)] uppercase tracking-[0.15em]">{label}</span>
      <span style={{ color: color ?? "var(--color-ink)" }}>{value}</span>
    </div>
  );
}
