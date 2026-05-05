import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const steps = [
  {
    title: "Claude Desktop letöltés",
    detail:
      "claude.ai/download — Mac vagy Windows, ingyenes. A bejelentkezés után az alkalmazás 'natív' felületet ad, ami fájlokhoz, Drive-hoz, Gmailhez kapcsolódik.",
  },
  {
    title: "Claude for Nonprofits jelentkezés",
    detail:
      "A csomagban van pre-filled jelentkezési levél. 2-4 hét átfutás, ezt követően az API + Claude Pro/Team ingyenes vagy kedvezményes a szervezetnek.",
  },
  {
    title: "Konfig másolás",
    detail:
      "A 03_claude_desktop_config.json-t Mac-en a ~/Library/Application Support/Claude/ mappába másolod. Filesystem + Drive + Gmail MCP egyben — copy-paste.",
  },
  {
    title: "Első prompt",
    detail:
      "A 02_starter_prompts.md-ből kiválasztasz egyet (pl. #1 pályázat-vázlat vagy #2 email-triage). Bemásolod, kitöltöd a {{...}} helyeket, csatolod a fájlokat.",
  },
  {
    title: "Mérj 1 hét után",
    detail:
      "A 05_pilot_metrics.md-ben le van írva mit mérj. Egy hét után döntesz: érdemes-e folytatni, kit von be, mit kell finomítani.",
  },
];

export function StartHere() {
  return (
    <section className="section" id="hogyan-kezdj">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Hogyan kezdj"
          title="5 lépés"
          accent="az első sikerig"
          description="Egy hét alatt mind az 5-öt elvégezhetitek. Nem kell IT-szakember, nem kell külső tanácsadó — csak egy AI sáfár a stábból."
        />

        <div className="space-y-3">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 70}>
              <div className="card p-7 grid grid-cols-[60px_1fr] gap-6 items-start">
                <div className="font-display text-4xl text-[var(--color-lilac)] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl text-[var(--color-ink)] mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] text-[15px] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
