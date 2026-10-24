import { readFile } from "node:fs/promises";
import { journey } from "../src/content/journey.ts";
import { certificates } from "../src/content/certificates.ts";
import { journeyIssues, certificateIssues, isCertificatePdf } from "../src/lib/personal-records.ts";

let failures = 0;
for (const [name, entries, validate] of [["journey", journey, journeyIssues], ["certificates", certificates, certificateIssues]]) {
  const ids = new Set();
  for (const entry of entries) {
    const issues = validate(entry);
    if (ids.has(entry.id)) issues.push("duplicate id");
    ids.add(entry.id);
    if (entry.pdf?.startsWith("/certificates/") && isCertificatePdf(entry.pdf)) {
      try {
        const bytes = await readFile(new URL(`../public${entry.pdf}`, import.meta.url));
        if (bytes.subarray(0, 5).toString() !== "%PDF-") issues.push("local PDF has no PDF signature");
      } catch { issues.push("local PDF does not exist or cannot be read"); }
    }
    if (entry.preview) {
      try {
        if (!/^\/certificates\/previews\/[a-zA-Z0-9][a-zA-Z0-9_-]*\.webp$/.test(entry.preview)) throw new Error("invalid path");
        const bytes = await readFile(new URL(`../public${entry.preview}`, import.meta.url));
        if (bytes.subarray(0, 4).toString() !== "RIFF" || bytes.subarray(8, 12).toString() !== "WEBP") issues.push("preview must be a real WebP image");
      } catch { issues.push("preview is missing or invalid"); }
    }
    if (issues.length) { failures++; console.error(`${name}/${entry.id || "(missing id)"}: ${issues.join("; ")}`); }
  }
  console.log(`${name}: ${entries.length} supplied records checked`);
}
if (failures) process.exitCode = 1;
else console.log("PASS: content fields, calendar dates, confirmation stamps, destination syntax, unique IDs and any supplied local PDF files. External destination availability requires manual verification; no network request was made.");
