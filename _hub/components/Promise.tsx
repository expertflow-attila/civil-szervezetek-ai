import { RevealOnScroll } from "./RevealOnScroll";
import { FileText, Code2, Globe } from "lucide-react";

const items = [
  {
    Icon: FileText,
    title: "6 dokumentum / szervezet",
    desc: "Vezetői összefoglaló (3-4 oldal mély), 14+ operatív prompt magyarul, Claude Desktop konfig, Claude for Nonprofits jelentkezés, 12-hetes mérőszám-roadmap, napi munka térkép.",
  },
  {
    Icon: Code2,
    title: "Claude Code / VS Code-ban nyitható",
    desc: "ZIP letöltés → unzip → claude . — és az AI átolvassa a teljes csomagot. Az első prompt 'javasolj 1 quick wint, amit holnap reggel elindíthatok' — működik.",
  },
  {
    Icon: Globe,
    title: "Premium webdesign",
    desc: "Mindegyik szervezetnek saját Vercel-deployolt prémium weboldal a saját számaikkal, fájdalompontjaikkal, AI-stratégiájukkal. Letölthető a csomag onnan közvetlenül.",
  },
];

export function PromiseSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 100}>
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-lilac-soft)] border border-[var(--color-lilac-line)] flex items-center justify-center mb-6">
                  <item.Icon size={20} strokeWidth={1.5} className="text-[var(--color-lilac)]" />
                </div>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
