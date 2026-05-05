import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import { orgs, categoryGroups, orgsByGroup } from "@/lib/orgs";
import { RevealOnScroll } from "./RevealOnScroll";

export function OrgGrid() {
  return (
    <section className="section" id="szervezetek">
      <div className="container-wide">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-lilac)] mb-5">
            12 szervezet · 6 kategória
          </div>
          <h2 className="display text-[length:var(--text-h1)] mb-5 leading-tight">
            Válaszd ki a
            <em className="accent"> sajátot</em>
          </h2>
          <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed">
            Mindegyik szervezetnek saját mély-elemzés és prémium weboldal. Kattints rá — saját URL-en megnyílik, letöltheted onnan a csomagot.
          </p>
        </div>

        <div className="space-y-20">
          {categoryGroups.map((group) => {
            const items = orgsByGroup(group.id);
            if (items.length === 0) return null;
            return (
              <div key={group.id}>
                <div className="flex items-baseline justify-between mb-7 pb-3 border-b border-[var(--color-line)]">
                  <div>
                    <h3 className="font-display text-2xl text-[var(--color-ink)] mb-1">
                      {group.label}
                    </h3>
                    <div className="text-[var(--color-ink-mute)] text-sm">{group.desc}</div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
                    {items.length} szervezet
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((org, i) => (
                    <RevealOnScroll key={org.slug} delay={i * 60}>
                      <Link
                        href={org.vercelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="card group block p-6 h-full"
                      >
                        <div className="flex items-start justify-between mb-5">
                          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-lilac)]">
                            {org.number} · {org.category}
                          </div>
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.5}
                            className="text-[var(--color-ink-dim)] group-hover:text-[var(--color-lilac)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-[var(--ease-soft)] shrink-0"
                          />
                        </div>

                        <h4 className="font-display text-xl text-[var(--color-ink)] mb-4 leading-tight">
                          {org.name}
                        </h4>

                        <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed mb-6">
                          {org.lead}
                        </p>

                        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-line)] text-xs font-mono">
                          {org.ready ? (
                            <span className="inline-flex items-center gap-1.5 text-[var(--color-mint)]">
                              <CheckCircle2 size={11} strokeWidth={2} />
                              Csomag kész
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-[var(--color-cream)]">
                              <Clock3 size={11} strokeWidth={2} />
                              Hamarosan
                            </span>
                          )}
                          <span className="text-[var(--color-line-soft)]">·</span>
                          <span className="text-[var(--color-ink-mute)]">{org.size}</span>
                        </div>
                      </Link>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
