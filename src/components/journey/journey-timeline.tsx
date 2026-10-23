import { Route } from "lucide-react";
import type { JourneyEntry } from "@/lib/types";
import { formatContentDate, publishedJourney } from "@/lib/personal-records";

const categoryLabels: Record<JourneyEntry["category"], string> = {
  education: "Education", experience: "Experience", achievement: "Achievement", leadership: "Leadership",
};

export function JourneyTimeline({ entries }: { entries: readonly JourneyEntry[] }) {
  const records = publishedJourney(entries);
  if (!records.length) return <div className="record-empty" aria-labelledby="journey-empty-title">
    <Route size={24} strokeWidth={1.25} aria-hidden="true" />
    <div><p className="eyebrow">Personal ledger</p><h3 id="journey-empty-title">The story is taking shape.</h3><p className="body-copy">Education, experience and leadership details will appear here once confirmed.</p></div>
  </div>;
  return <ol className="journey-timeline" aria-label="Journey, earliest first">{records.map((entry, index) => <li key={entry.id} className="journey-row">
    <div className="journey-date"><p><time dateTime={entry.startDate}>{formatContentDate(entry.startDate)}</time>{entry.ongoing ? " – Present" : entry.endDate ? <> – <time dateTime={entry.endDate}>{formatContentDate(entry.endDate)}</time></> : null}</p><span className="eyebrow">{categoryLabels[entry.category]}</span></div>
    <article className="journey-record"><span className="record-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{entry.title}</h3><p className="journey-organization">{entry.organization}</p>{entry.description && <p className="body-copy">{entry.description}</p>}</article>
  </li>)}</ol>;
}
