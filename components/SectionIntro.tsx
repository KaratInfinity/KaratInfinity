type SectionIntroProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ number, eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <div className="flex items-center gap-4 pt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
        <span>{number}</span>
        <span className="h-px w-8 theme-rule" />
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  );
}
