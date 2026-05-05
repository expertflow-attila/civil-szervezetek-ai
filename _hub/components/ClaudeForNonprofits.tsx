import { ExternalLink, Sparkles } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function ClaudeForNonprofits() {
  return (
    <section className="section" id="claude-for-nonprofits">
      <div className="container-wide">
        <RevealOnScroll>
          <div
            className="rounded-3xl overflow-hidden border border-[var(--color-lilac-line)] p-12 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(185, 167, 224, 0.08), rgba(185, 167, 224, 0.02))",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="brand-bar mb-7">
                  <span className="dot"></span>
                  Anthropic Claude for Nonprofits
                </div>
                <h2 className="display text-[length:var(--text-h1)] mb-6 leading-tight">
                  <em className="accent">Ingyenes</em> az Anthropic-tól<br />
                  a magyar nonprofit-oknak
                </h2>
                <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed mb-7 max-w-2xl">
                  Az Anthropic Claude for Nonprofits programja közhasznú szervezeteknek <strong className="text-[var(--color-ink)]">ingyenes API kreditet</strong> és <strong className="text-[var(--color-ink)]">Pro / Team licenc kedvezményt</strong> ad. A 12 szervezet csomagjában mindegyikhez van pre-filled jelentkezési levél magyar specifikumokkal.
                </p>
                <ul className="space-y-2 mb-9">
                  {[
                    "Ingyenes API credit havonta",
                    "Pro / Team licenc akár 75% kedvezménnyel",
                    "Microsoft 365, Asana, Candid integráció",
                    "Prioritást élvező support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--color-ink-soft)] text-[15px]"
                    >
                      <Sparkles
                        size={14}
                        strokeWidth={1.5}
                        className="text-[var(--color-lilac)] shrink-0 mt-1.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.anthropic.com/news/claude-for-nonprofits"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-lilac)] text-[var(--color-paper)] font-medium hover:bg-white transition-colors duration-300"
                >
                  Jelentkezés
                  <ExternalLink size={15} strokeWidth={2} />
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="card p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-lilac)] mb-3">
                    Hogyan használd
                  </div>
                  <ol className="space-y-3 text-[var(--color-ink-soft)] text-sm leading-relaxed">
                    <li>
                      <span className="text-[var(--color-ink)]">1.</span> Letöltöd a szervezeted csomagját a saját oldaláról.
                    </li>
                    <li>
                      <span className="text-[var(--color-ink)]">2.</span> Megnyitod a <code className="font-mono text-[var(--color-lilac)]">04_claude_nonprofits_jelentkezes.md</code>-t.
                    </li>
                    <li>
                      <span className="text-[var(--color-ink)]">3.</span> Pre-filled angol szöveget bemásolod az online űrlapba.
                    </li>
                    <li>
                      <span className="text-[var(--color-ink)]">4.</span> 2-4 hét átfutás → ingyenes / kedvezményes Claude.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
