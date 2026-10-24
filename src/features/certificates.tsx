import { useState } from "react";
import { CertificateArchive } from "@/components/certificates/certificate-archive";
import { certificates } from "@/content/certificates";
import { searchCertificates } from "@/lib/certificate-search";
const categories = [...new Set(certificates.flatMap(entry => [...entry.tags]))].sort();
export function Certificates() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const entries = searchCertificates(certificates, query, category);
  return <>
    <div className="archive-controls"><div><label htmlFor="certificate-search">Search certificates</label><input id="certificate-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Title, issuer or topic" /></div><div><label htmlFor="certificate-category">Category</label><select id="certificate-category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">All categories</option>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select></div><button className="motion-control" onClick={() => { setQuery(""); setCategory("all"); }}>Reset filters</button></div>
    <p className="eyebrow" role="status" aria-live="polite">{entries.length} of {certificates.length} certificates · Newest first</p>
    {entries.length ? <CertificateArchive entries={entries} /> : <p className="empty-state">No certificates match your search. Try another term or reset the filters.</p>}
  </>;
}
