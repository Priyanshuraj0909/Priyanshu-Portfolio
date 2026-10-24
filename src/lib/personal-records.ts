import type { Certificate, JourneyEntry } from "@/lib/types";

/** Preserve supplied precision: a year or month never implies a particular day. */
export function isContentDate(value: string): boolean {
  const match = /^([1-9]\d{3})(?:-(0[1-9]|1[0-2])(?:-(0[1-9]|[12]\d|3[01]))?)?$/.exec(value);
  if (!match) return false;
  if (!match[3]) return true;
  const days = new Date(Date.UTC(Number(match[1]), Number(match[2]), 0)).getUTCDate();
  return Number(match[3]) <= days;
}

function isConfirmationDate(value: string | null): boolean {
  return value !== null && value.length === 10 && isContentDate(value);
}

function dateKey(value: string): string {
  return value.length === 4 ? `${value}-01-01` : value.length === 7 ? `${value}-01` : value;
}

export function formatContentDate(value: string): string {
  if (!isContentDate(value)) return "";
  if (value.length === 4) return value;
  const [year, month, day = 1] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    month: "short", year: "numeric", ...(value.length === 10 ? { day: "numeric" } : {}), timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function isHttpsLink(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch { return false; }
}

export function isCertificatePdf(value: string): boolean {
  if (/^\/certificates\/[a-zA-Z0-9][a-zA-Z0-9/_-]*\.pdf$/.test(value)) return true;
  return isHttpsLink(value) && new URL(value).pathname.toLowerCase().endsWith(".pdf");
}

export function journeyIssues(entry: JourneyEntry): string[] {
  const issues: string[] = [];
  if (!entry.id.trim() || !entry.title.trim() || !entry.organization.trim()) issues.push("id, title and organization are required");
  if (!isContentDate(entry.startDate)) issues.push("startDate must be a calendar date at the supplied precision");
  if (entry.endDate !== null && !isContentDate(entry.endDate)) issues.push("endDate must be a calendar date or null");
  if (entry.endDate !== null && dateKey(entry.endDate) < dateKey(entry.startDate)) issues.push("endDate cannot precede startDate");
  if (entry.ongoing && entry.endDate !== null) issues.push("ongoing records cannot have an endDate");
  if (entry.expectedEndDate != null) {
    if (!isContentDate(entry.expectedEndDate)) issues.push("expectedEndDate must be a calendar date");
    if (dateKey(entry.expectedEndDate) < dateKey(entry.startDate)) issues.push("expectedEndDate cannot precede startDate");
    if (!entry.ongoing) issues.push("expected completion applies only to ongoing records");
  }
  if (!isConfirmationDate(entry.confirmedOn)) issues.push("confirmedOn must record owner confirmation as YYYY-MM-DD");
  return issues;
}

export function certificateIssues(entry: Certificate): string[] {
  const issues: string[] = [];
  if (!entry.id.trim() || !entry.title.trim() || !entry.issuer.trim()) issues.push("id, title and issuer are required");
  if (!isContentDate(entry.issuedOn)) issues.push("issuedOn must be a calendar date at the supplied precision");
  if (entry.completedOn && (!isContentDate(entry.completedOn) || dateKey(entry.completedOn) > dateKey(entry.issuedOn))) issues.push("completedOn must be a calendar date no later than issue date");
  if (!isConfirmationDate(entry.confirmedOn)) issues.push("confirmedOn must record owner confirmation as YYYY-MM-DD");
  if (!isConfirmationDate(entry.linksCheckedOn)) issues.push("linksCheckedOn must record destination checks as YYYY-MM-DD");
  if (!entry.pdf && !entry.verificationUrl) issues.push("at least one checked certificate destination is required");
  if (entry.pdf !== null && !isCertificatePdf(entry.pdf)) issues.push("pdf must be a /certificates/*.pdf path or an HTTPS PDF URL");
  if (entry.verificationUrl !== null && !isHttpsLink(entry.verificationUrl)) issues.push("verificationUrl must be an HTTPS URL without embedded credentials");
  return issues;
}

export function publishedJourney(entries: readonly JourneyEntry[]): JourneyEntry[] {
  return entries.filter(entry => journeyIssues(entry).length === 0)
    .sort((a, b) => dateKey(a.startDate).localeCompare(dateKey(b.startDate)) || a.id.localeCompare(b.id));
}

export function publishedCertificates(entries: readonly Certificate[]): Certificate[] {
  return entries.filter(entry => certificateIssues(entry).length === 0)
    .sort((a, b) => dateKey(b.issuedOn).localeCompare(dateKey(a.issuedOn)) || a.id.localeCompare(b.id));
}
