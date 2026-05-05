import { SectionHeading } from "./SectionHeading";
import { RevealOnScroll } from "./RevealOnScroll";
import type { PageContent } from "@/lib/types";
import { Download as DownloadIcon, FileText, Terminal, ArrowRight } from "lucide-react";

export function Download({ content }: { content: PageContent }) {
  return (
    <section className="section" id="letoltes">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Letöltés"
          title="Tölts le mindent"
          accent="egy ZIP-ben"
          description="A teljes csomag: 6 dokumentum + sample weboldal forrás. Megnyitod Claude Code-dal vagy VS Code-ban, és holnap reggel már használod."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="card p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-lilac-soft)] border border-[var(--color-lilac-line)] flex items-center justify-center">
                    <DownloadIcon size={22} strokeWidth={1.5} className="text-[var(--color-lilac)]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[var(--color-ink-mute)] uppercase tracking-[0.2em] mb-1.5">
                      ZIP csomag · ~250 KB
                    </div>
                    <div className="font-display text-2xl text-[var(--color-ink)] leading-tight">
                      {content.download.zipName}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {content.download.contents.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[var(--color-ink-soft)] text-[15px] leading-relaxed"
                    >
                      <FileText
                        size={16}
                        strokeWidth={1.5}
                        className="text-[var(--color-lilac)] shrink-0 mt-1"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/downloads/${content.download.zipName}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-lilac)] text-[var(--color-paper)] font-medium hover:bg-white transition-colors duration-300"
                >
                  <DownloadIcon size={18} strokeWidth={2} />
                  Tölts le most
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll delay={120}>
              <div className="card p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <Terminal size={18} strokeWidth={1.5} className="text-[var(--color-lilac)]" />
                  <span className="font-mono text-xs text-[var(--color-ink-mute)] uppercase tracking-[0.2em]">
                    Claude Code-dal megnyitva
                  </span>
                </div>
                <pre className="font-mono text-xs text-[var(--color-ink-soft)] leading-relaxed whitespace-pre-wrap mb-5">{`# Letöltés és kicsomagolás
unzip ${content.download.zipName}
cd ${content.download.zipName.replace(".zip", "")}

# Megnyitás Claude Code-dal
claude .

# vagy VS Code-ban
code .`}</pre>
                <p className="text-[var(--color-ink-mute)] text-sm leading-relaxed mb-4">
                  Ezt követően a Claude Code megnyitja a 6 dokumentumot. Kérdezhetsz: <em className="accent">"Olvasd el a teljes csomagot és javasolj 1 quick wint, amit holnap reggel elindíthatok."</em>
                </p>
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm font-mono"
                >
                  Claude Code letöltés <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
