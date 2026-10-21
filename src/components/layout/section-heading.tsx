interface SectionHeadingProps {
  number: string;
  label: string;
  title?: string;
  headingId?: string;
  detail?: string;
}

export function SectionHeading({ number, label, title, headingId, detail }: SectionHeadingProps) {
  return (
    <>
      <div className="depth-label">
        <span className="depth-number">DEPTH.{number}</span>
        <span className="depth-rule" aria-hidden="true" />
        <span>{label}</span>
        {detail && <span className="depth-detail">{detail}</span>}
      </div>
      {title && <h2 className="section-title" id={headingId}>{title}<span aria-hidden="true">.</span></h2>}
    </>
  );
}
