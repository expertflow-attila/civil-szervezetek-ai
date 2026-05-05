import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent } from "@/lib/types";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";

const levelMap = {
  alap: { Icon: ShieldCheck, color: "var(--color-mint)", label: "Alap GDPR keret" },
  magas: { Icon: Shield, color: "var(--color-cream)", label: "Magas GDPR érzékenység" },
  kritikus: { Icon: ShieldAlert, color: "var(--color-rose)", label: "Kritikus GDPR keret" },
};

export function Gdpr({ content }: { content: PageContent }) {
  const meta = levelMap[content.gdpr.level];
  const Icon = meta.Icon;
  return (
    <section className="section" id="gdpr">
      <div className="container-wide">
        <SectionHeading eyebrow="GDPR + etikai keret" title="Mit nem szabad" accent="elcsesszünk" />

        <div className="card p-8">
          <div className="flex items-start gap-5 mb-7">
            <div
              className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "var(--color-lilac-soft)",
                border: "1px solid var(--color-lilac-line)",
              }}
            >
              <Icon size={22} strokeWidth={1.5} style={{ color: meta.color }} />
            </div>
            <div>
              <div
                className="font-mono text-[10px] uppercase tracking-[0.2em] mb-1.5"
                style={{ color: meta.color }}
              >
                {meta.label}
              </div>
              <div className="font-display text-2xl text-[var(--color-ink)] leading-tight">
                {content.gdpr.level === "kritikus"
                  ? "Érzékeny adat — soha nem kerül felhőbe"
                  : content.gdpr.level === "magas"
                    ? "Egészségügyi / szociális adat — anonimizálás kötelező"
                    : "Standard nonprofit GDPR keret"}
              </div>
            </div>
          </div>

          <ul className="space-y-3">
            {content.gdpr.notes.map((n, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <li className="flex gap-3 text-[var(--color-ink-soft)] text-[15px] leading-relaxed">
                  <span className="text-[var(--color-rose)] shrink-0 font-mono">{`${i + 1}.`}</span>
                  <span>{n}</span>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
