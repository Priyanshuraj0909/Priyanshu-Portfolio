import type { Certificate } from "./types.ts";
import { publishedCertificates } from "./personal-records.ts";
const normalize = (text: string) => text.normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
export function searchCertificates(entries: readonly Certificate[], query: string, category: string): Certificate[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return publishedCertificates(entries).filter(entry => {
    if (category !== "all" && !entry.tags.includes(category)) return false;
    const haystack = normalize([entry.title, entry.issuer, entry.issuedOn, entry.credentialId ?? "", ...entry.tags].join(" "));
    return terms.every(term => haystack.includes(term));
  });
}
