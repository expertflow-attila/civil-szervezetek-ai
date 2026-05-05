import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import type { PageContent, ReadyPackage } from "@/lib/types";
import { Package, Clock, ArrowRight, Cpu, FolderTree, Calendar, Globe } from "lucide-react";

const cloudIcon: Record<ReadyPackage["cloudProduct"], typeof Package> = {
  "Claude Project": FolderTree,
  "Claude Desktop + MCP": Cpu,
  "Claude Code": Package,
  "Scheduled Routine": Calendar,
  "Claude.ai web": Globe,
};

export function ReadyPackages({ content }: { content: PageContent }) {
  if (!content.readyPackages || content.readyPackages.length === 0) return null;

  return (
    <section className="section" id="kesz-csomagok">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Kész operatív csomagok"
          title={`${content.readyPackages.length} működő`}
          accent="munkacsomag"
          tail=" — copy-paste, indítható"
          description="Nem stratégia, hanem konkrét setup. Másold a system promptot, töltsd fel a sample-fájlokat, futtasd az első promptot — perceken belül látod az értéket."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.readyPackages.map((pkg, i) => {
            const Icon = cloudIcon[pkg.cloudProduct];
            return (
              <RevealOnScroll key={pkg.number} delay={i * 80}>
                <article className="card p-7 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--color-lilac-soft)] border border-[var(--color-lilac-line)] flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.5} className="text-[var(--color-lilac)]" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-lilac)] mb-1">
                        Csomag {pkg.number} · {pkg.cloudProduct}
                      </div>
                      <h3 className="font-display text-xl text-[var(--color-ink)] leading-tight">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[var(--color-ink-soft)] text-[15px] leading-relaxed mb-5 grow">
                    {pkg.problem}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-[var(--color-line)]">
                    <Stat icon={<Clock size={11} strokeWidth={1.5} />} label="Setup" value={pkg.setupTime} />
                    <Stat icon={<Clock size={11} strokeWidth={1.5} />} label="Első érték" value={pkg.firstValueTime} />
                    <Stat icon={null} label="Megtakarítás" value={pkg.saving} accent />
                  </div>

                  <div className="font-mono text-[10px] text-[var(--color-ink-mute)] mb-3">
                    Mit kapsz: {pkg.files.join(" · ")}
                  </div>

                  <a
                    href={`https://github.com/expertflow-attila/civil-szervezetek-ai/tree/main/${content.org.slug}/csomagok/${pkg.folderName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-lilac)] hover:text-[var(--color-ink)] text-sm font-mono transition-colors"
                  >
                    Csomag megnyitása GitHub-on
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </a>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <div className="mt-10 card p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)] mb-1">
                Klónozás Claude Code-dal
              </div>
              <div className="font-mono text-sm text-[var(--color-ink-soft)]">
                <code>git clone https://github.com/expertflow-attila/civil-szervezetek-ai.git && cd civil-szervezetek-ai/{content.org.slug}/csomagok && claude .</code>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        {icon ? <span className="text-[var(--color-ink-dim)]">{icon}</span> : null}
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-ink-dim)]">
          {label}
        </span>
      </div>
      <div
        className={`text-sm leading-tight ${accent ? "text-[var(--color-lilac)] font-mono" : "text-[var(--color-ink)]"}`}
      >
        {value}
      </div>
    </div>
  );
}
