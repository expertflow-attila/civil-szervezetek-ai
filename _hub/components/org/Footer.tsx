import Link from "next/link";
import type { PageContent } from "@/lib/types";
import { ArrowLeft, Github, Mail } from "lucide-react";

export function Footer({ content }: { content: PageContent }) {
  return (
    <footer className="border-t border-[var(--color-line)] mt-32 pb-16 pt-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="brand-bar mb-5">
              <span className="dot"></span>
              {content.org.category}
            </div>
            <h3 className="font-display text-3xl text-[var(--color-ink)] mb-3 leading-tight">
              {content.org.name}
            </h3>
            <p className="text-[var(--color-ink-soft)] max-w-md leading-relaxed">{content.org.lead}</p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-4">
              Linkek
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="link-underline inline-flex items-center gap-2 text-sm"
                >
                  <ArrowLeft size={13} strokeWidth={1.5} />
                  Vissza a hub-ra
                </Link>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/news/claude-for-nonprofits"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-sm"
                >
                  Claude for Nonprofits
                </a>
              </li>
              <li>
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-sm"
                >
                  Claude Code
                </a>
              </li>
              {content.org.website ? (
                <li>
                  <a
                    href={content.org.website}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-sm"
                  >
                    {content.org.name} hivatalos oldal
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] mb-4">
              Tanácsadás
            </div>
            <a
              href="mailto:hello@expertflow.hu"
              className="link-underline inline-flex items-center gap-2 text-sm mb-2"
            >
              <Mail size={13} strokeWidth={1.5} />
              hello@expertflow.hu
            </a>
            <div className="text-[var(--color-ink-mute)] text-xs leading-relaxed mt-2">
              Nagy Attila · Expert Flow tanácsadói anyag
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--color-line)] flex flex-wrap gap-6 justify-between items-center">
          <div className="font-mono text-[10px] text-[var(--color-ink-dim)] uppercase tracking-[0.2em]">
            Civil Szervezetek AI · 2026
          </div>
          <a
            href="https://github.com/expertflow-attila/civil-szervezetek-ai"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-2 text-xs font-mono"
          >
            <Github size={13} strokeWidth={1.5} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
