/* eslint-disable @next/next/no-img-element -- Original PDF previews are optimized static WebP assets. */
import { FileCheck2 } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import type { Certificate } from "@/lib/types";
import { formatContentDate, publishedCertificates } from "@/lib/personal-records";

export function CertificateArchive({ entries }: { entries: readonly Certificate[] }) {
  const records = publishedCertificates(entries);
  if (!records.length) return <div className="record-empty" aria-labelledby="certificates-empty-title">
    <FileCheck2 size={24} strokeWidth={1.25} aria-hidden="true" />
    <div><p className="eyebrow">Certificate archive</p><h3 id="certificates-empty-title">A record of learning.</h3><p className="body-copy">Confirmed certificates will appear with their original PDFs or issuer verification links.</p></div>
  </div>;
  return <>
    <p className="archive-instructions eyebrow" id="archive-instructions">Newest first · Scroll to browse · Tab to reach certificate links</p>
    <div className="certificate-window" role="region" aria-label="Certificate archive" aria-describedby="archive-instructions" tabIndex={0}>
      <ul className="certificate-list">{records.map(entry => <li key={entry.id} className="certificate-row">
        <article aria-labelledby={`certificate-${entry.id}`}>{entry.preview && <a className="certificate-preview" href={entry.pdf ?? undefined} aria-label={`Open ${entry.title} original PDF`}><img src={entry.preview} alt="" width={600} height={430} loading="lazy" decoding="async" /></a>}<p className="certificate-meta">Issued <time dateTime={entry.issuedOn}>{formatContentDate(entry.issuedOn)}</time><span aria-hidden="true"> · </span>{entry.issuer}</p>{entry.tags.length > 0 && <ul className="certificate-tags" aria-label="Topics">{entry.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}<h3 id={`certificate-${entry.id}`}>{entry.title}</h3><dl className="certificate-details">{entry.completedOn && <div><dt>Completed</dt><dd>{formatContentDate(entry.completedOn)}</dd></div>}{entry.credentialId && <div><dt>Credential ID</dt><dd>{entry.credentialId}</dd></div>}{entry.courseHours && <div><dt>Course hours</dt><dd>{entry.courseHours}</dd></div>}{entry.continuingEducationUnits && <div><dt>Continuing education units</dt><dd>{entry.continuingEducationUnits}</dd></div>}{entry.grade && <div><dt>Grade</dt><dd>{entry.grade}</dd></div>}</dl><div className="certificate-actions">{entry.pdf && <LinkButton href={entry.pdf} variant="text" aria-label={`View PDF: ${entry.title}`}>View PDF</LinkButton>}{entry.verificationUrl && <LinkButton href={entry.verificationUrl} variant="text" aria-label={`Verify with issuer: ${entry.title} — ${entry.issuer}`}>Verify with issuer</LinkButton>}</div></article>
      </li>)}</ul>
    </div>
  </>;
}
