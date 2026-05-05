import { SectionHeading } from "./SectionHeading";
import { RevealOnScroll } from "./RevealOnScroll";
import type { PageContent } from "@/lib/types";
import { AlertCircle } from "lucide-react";

export function Situation({ content }: { content: PageContent }) {
  return (
    <section className="section" id="helyzet">
      <div className="container-wide">
        <SectionHeading
          eyebrow="A jelenlegi helyzet"
          title={content.situation.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            {content.situation.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed">{p}</p>
              </RevealOnScroll>
            ))}
          </div>
          <div className="lg:col-span-5 space-y-3">
            {content.situation.pains.map((pain, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="card p-5 flex gap-4">
                  <AlertCircle
                    size={18}
                    strokeWidth={1.5}
                    className="text-[var(--color-rose)] shrink-0 mt-1"
                  />
                  <div>
                    <div className="font-display text-lg text-[var(--color-ink)] mb-1.5 leading-tight">
                      {pain.title}
                    </div>
                    <div className="text-[var(--color-ink-mute)] text-sm leading-relaxed">
                      {pain.detail}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
