export function SectionHeading({
  eyebrow,
  title,
  accent,
  tail,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  tail?: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-lilac)] mb-5">
        {eyebrow}
      </div>
      <h2 className="display text-[length:var(--text-h1)] mb-5">
        {title}
        {accent ? <em className="accent"> {accent}</em> : null}
        {tail ?? ""}
      </h2>
      {description ? (
        <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
