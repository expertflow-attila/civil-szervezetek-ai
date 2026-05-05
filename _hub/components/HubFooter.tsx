import { Mail, Github, ExternalLink } from "lucide-react";

export function HubFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] mt-24 pt-20 pb-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="brand-bar mb-6">
              <span className="dot"></span>
              Civil Szervezetek AI
            </div>
            <h3 className="font-display text-3xl text-[var(--color-ink)] mb-4 leading-tight">
              12 magyar szervezet,<br />
              <em className="accent">egy oldalon</em>
            </h3>
            <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-md">
              Ez a hub mindegyik szervezet saját, mélyebb elemzéséhez és letölthető csomagjához vezet. Tölts le Claude Code-dal, és kezdd el holnap reggel.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-5">
              Erőforrások
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.anthropic.com/news/claude-for-nonprofits"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm"
                >
                  Claude for Nonprofits <ExternalLink size={11} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm"
                >
                  Claude Code <ExternalLink size={11} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href="https://claude.ai/download"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm"
                >
                  Claude Desktop letöltés <ExternalLink size={11} strokeWidth={1.5} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/expertflow/civil-szervezetek-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-2 text-sm"
                >
                  GitHub repo <Github size={11} strokeWidth={1.5} />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-5">
              Tanácsadás
            </div>
            <a
              href="mailto:hello@expertflow.hu"
              className="link-underline inline-flex items-center gap-2 text-base mb-2 text-[var(--color-ink)]"
            >
              <Mail size={14} strokeWidth={1.5} />
              hello@expertflow.hu
            </a>
            <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed mt-4">
              Civil szervezetnek vagy, és a saját szervezeted csomagját szeretnéd?
              Vagy a 12 szervezet bármelyikéhez stáb-tréninget?
              <br />
              Írj — válaszolok 24 órán belül.
            </p>
            <div className="mt-6 text-[var(--color-ink-mute)] text-xs leading-relaxed">
              Készítette: Nagy Attila · Expert Flow tanácsadói anyag · 2026
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-wrap gap-4 justify-between items-center">
          <div className="font-mono text-[10px] text-[var(--color-ink-dim)] uppercase tracking-[0.2em]">
            Civil Szervezetek AI · v1 · 2026-05
          </div>
          <div className="font-mono text-[10px] text-[var(--color-ink-dim)] uppercase tracking-[0.2em]">
            Készült Next.js 16 + Tailwind v4 + Motion · Vercel deploy
          </div>
        </div>
      </div>
    </footer>
  );
}
