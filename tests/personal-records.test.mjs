import test from "node:test";
import assert from "node:assert/strict";
import { isContentDate, formatContentDate, journeyIssues, certificateIssues, publishedJourney, publishedCertificates } from "../src/lib/personal-records.ts";

// Synthetic fixtures exercise rendering eligibility; none are portfolio content.
const journey = { id: "test-only", title: "Fixture role", organization: "Fixture organization", description: "", category: "experience", startDate: "2024-02", endDate: null, ongoing: false, confirmedOn: "2026-10-24" };
const certificate = { id: "test-only", title: "Fixture certificate", issuer: "Fixture issuer", issuedOn: "2024-02", confirmedOn: "2026-10-24", linksCheckedOn: "2026-10-24", tags: [], pdf: null, verificationUrl: "https://issuer.example/credential/test-only" };

test("partial dates preserve precision and reject impossible calendar dates", () => {
  for (const date of ["2024", "2024-02", "2024-02-29", "2000-02-29"]) assert.equal(isContentDate(date), true, date);
  for (const date of ["2023-02-29", "1900-02-29", "2024-04-31", "2024-13", "2024-1", "2024-00-01", "2024-02-00", "invalid"]) assert.equal(isContentDate(date), false, date);
  assert.equal(formatContentDate("2024"), "2024");
  assert.equal(formatContentDate("2024-02"), "Feb 2024");
  assert.equal(formatContentDate("2024-02-29"), "29 Feb 2024");
  assert.equal(formatContentDate("invalid"), "");
});

test("journey sorts earliest first without mutating editable source", () => {
  const input = [{ ...journey, id: "later", startDate: "2025" }, { ...journey, id: "earlier", startDate: "2022" }];
  assert.deepEqual(publishedJourney(input).map(e => e.id), ["earlier", "later"]);
  assert.equal(input[0].id, "later");
});

test("unconfirmed, reversed and contradictory ongoing journey drafts stay unpublished", () => {
  assert.equal(journeyIssues(journey).length, 0);
  for (const patch of [{ confirmedOn: null }, { startDate: "2024-02-30" }, { endDate: "2023" }, { ongoing: true, endDate: "2025" }, { title: " " }]) assert.equal(publishedJourney([{ ...journey, ...patch }]).length, 0);
  assert.equal(publishedJourney([{ ...journey, ongoing: true }]).length, 1);
});

test("archive sorts newest first and excludes unconfirmed or unchecked records", () => {
  assert.equal(certificateIssues(certificate).length, 0);
  assert.deepEqual(publishedCertificates([{ ...certificate, id: "old", issuedOn: "2020" }, { ...certificate, id: "new", issuedOn: "2025-01" }]).map(e => e.id), ["new", "old"]);
  for (const patch of [{ confirmedOn: null }, { linksCheckedOn: null }, { verificationUrl: null }, { issuedOn: "2024-02-30" }, { issuer: " " }]) assert.equal(publishedCertificates([{ ...certificate, ...patch }]).length, 0);
});

test("certificate destinations reject unsafe schemes and traversal while preserving real link shapes", () => {
  for (const verificationUrl of ["javascript:alert(1)", "data:text/html,test", "//issuer.example/test", "http://issuer.example/test", "https://user:secret@issuer.example/test"]) assert.ok(certificateIssues({ ...certificate, verificationUrl }).length);
  for (const pdf of ["/certificates/../private.pdf", "/other/test.pdf", "//issuer.example/test.pdf", "javascript:alert(1)"]) assert.ok(certificateIssues({ ...certificate, pdf }).length);
  for (const pdf of ["/certificates/test-only.pdf", "/certificates/issuer/test-only.pdf", "https://issuer.example/test.pdf?download=1"]) assert.equal(certificateIssues({ ...certificate, pdf, verificationUrl: null }).length, 0);
});
