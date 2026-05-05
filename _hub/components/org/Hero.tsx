import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import type { PageContent } from "@/lib/types";

export function Hero({ content }: { content: PageContent }) {
  return (
    <section className="relative min-h-[88vh] flex items-center pb-16 pt-32">
      <div className="container-wide">
        <div className="brand-bar mb-10">
          <span className="dot"></span>
          {content.org.category} · Civil szervezetek AI
        </div>

        <h1 className="display text-[length:var(--text-display)] mb-8 max-w-5xl leading-[1.02]">
          {content.hero.promiseIntro}{" "}
          <em className="accent">{content.hero.promiseAccent}</em>
          {content.hero.promiseTail}
        </h1>

        <p className="text-[var(--color-ink-soft)] text-xl leading-relaxed max-w-3xl mb-10">
          {content.org.longLead}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#letoltes"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-lilac)] text-[var(--color-paper)] font-medium hover:bg-white transition-colors duration-300 ease-[var(--ease-soft)]"
          >
            <Download size={18} strokeWidth={2} />
            Tölts le Claude Code-dal
          </a>
          <a
            href="#hogyan-segit"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-lilac-line)] hover:text-[var(--color-ink)] transition-all duration-300 ease-[var(--ease-soft)]"
          >
            Mit szállít az AI?
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          <Stat label="Quick wins" value={String(content.useCases.length)} />
          <Stat label="Hetes rollout" value="12" />
          <Stat label="GDPR keret" value={content.gdpr.level} />
          <Stat label="Pilot költség" value={content.cost.pilot} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-[var(--color-ink)] mb-1">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
        {label}
      </div>
    </div>
  );
}
