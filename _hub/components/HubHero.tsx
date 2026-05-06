import { ArrowDown, Github } from "lucide-react";
import { orgs } from "@/lib/orgs";

export function HubHero() {
  const readyCount = orgs.filter((o) => o.ready).length;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20">
      <div className="container-wide">
        <div className="brand-bar mb-12">
          <span className="dot"></span>
          Civil Szervezetek AI · Expert Flow
        </div>

        <h1 className="display text-[length:var(--text-display)] mb-10 max-w-6xl leading-[1.0]">
          Magyar civil szervezetek
          <br />
          <em className="accent">AI-támogatása</em>
        </h1>

        <p className="text-[var(--color-ink-soft)] text-xl leading-relaxed max-w-3xl mb-12">
          12 szervezet kulcsrakész AI-bevezetési csomagja. Vezetői összefoglaló, 14+ operatív prompt magyarul, Claude Desktop konfig, 12-hetes mérőszám-roadmap, és prémium weboldal — mindegyik letölthető Claude Code-dal vagy VS Code-ban.
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#szervezetek"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--color-lilac)] text-[var(--color-paper)] font-medium hover:bg-white transition-colors duration-300"
          >
            Nézd meg a 12 szervezetet
            <ArrowDown size={17} strokeWidth={2} />
          </a>
          <a
            href="https://github.com/expertflow/civil-szervezetek-ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-lilac-line)] hover:text-[var(--color-ink)] transition-all duration-300"
          >
            <Github size={16} strokeWidth={1.5} />
            GitHub repo
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl border-t border-[var(--color-line)] pt-10">
          <Stat label="Magyar szervezet" value="12" />
          <Stat label="Premium weboldal" value="13" sub="(12 + hub)" />
          <Stat label="Prompt sablon" value="14+" />
          <Stat label="Hetes rollout-tervek" value="12" />
        </div>

        <div className="mt-12 flex items-center gap-3 text-[var(--color-ink-mute)] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[var(--color-mint)]"></span>
          Aktuális állapot: <span className="text-[var(--color-ink)]">{readyCount}/{orgs.length} szervezet teljes csomaggal</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <div className="font-display text-5xl text-[var(--color-ink)] mb-2 leading-none">
        {value}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
        {label}
        {sub ? <span className="ml-1 text-[var(--color-ink-dim)]">{sub}</span> : null}
      </div>
    </div>
  );
}
