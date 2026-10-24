# Personal record intake and verification

Phase 5, 24 October 2026. **Three journey entries have been supplied and confirmed directly by Priyanshu Raj. Certificates, issuer verification URLs and certificate PDFs remain pending.** `src/content/journey.ts` contains those three records; `src/content/certificates.ts` remains empty. No reference-owner records or test fixtures are production content.

The timeline and archive render on the server. Confirmed records can be added through these typed arrays without changing components. Draft records with missing confirmation dates, invalid calendar dates or invalid destinations are excluded by `src/lib/personal-records.ts`; `npm run check:content` reports those issues so they can be resolved before publication.

## Journey intake

For each entry provide:

| Field | Meaning |
| --- | --- |
| `id` | Unique stable identifier; use a short lowercase hyphenated name. |
| `category` | `education`, `experience`, `achievement` or `leadership`. |
| `title` | Confirmed course, role or achievement title. |
| `organization` | Actual institution or organization. |
| `startDate` | `YYYY`, `YYYY-MM` or `YYYY-MM-DD`, preserving the supplied precision. |
| `endDate` | Same date formats, or `null` if not supplied. |
| `ongoing` | Set `true` only if explicitly confirmed as current; then `endDate` must be `null`. A missing end date alone does not imply Present. |
| `expectedEndDate` | Optional anticipated completion date for an ongoing record, explicitly labeled Expected completion. It is separate from `endDate` and never asserts graduation. |
| `description` | Approved factual description, or an empty string. Never infer scores, tenure, employment or proficiency. |
| `confirmedOn` | Full `YYYY-MM-DD` date on which Priyanshu Raj confirmed the details; `null` while awaiting confirmation. |

Timeline order is earliest start first, matching the inspected reference's chronological ledger. Records with equal start dates use their ID for stable ordering. Year/month precision is displayed as supplied; formatting uses UTC to avoid local date shifts. No particular day is displayed for a year-only or month-only record.

## Certificate intake

| Field | Meaning |
| --- | --- |
| `id` | Unique stable identifier. |
| `title`, `issuer` | Actual certificate title and issuing organization. |
| `issuedOn` | `YYYY`, `YYYY-MM` or `YYYY-MM-DD`, preserving supplied precision. |
| `tags` | Approved topic labels, or `[]`. These do not establish skill proficiency. |
| `confirmedOn` | Full confirmation date, or `null` for drafts. |
| `verificationUrl` | Actual public HTTPS issuer verification URL, or `null`. |
| `pdf` | Actual `/certificates/<filename>.pdf` path, or a direct HTTPS PDF URL, or `null`. Do not add a proposed filename without a real document. |
| `linksCheckedOn` | Full date on which every included destination was opened and checked; `null` until verified. |

A certificate needs at least one real checked destination and both confirmation/check dates before it appears. Available PDF and issuer links render independently; absent actions are omitted. Archives sort newest issue first. A named, focusable scroll region supports arrow/page scrolling, ordinary Tab navigation and leaving the archive. Print expands the full list.

For a local PDF, put the original file in `public/certificates/`; its public path omits `public`. Use simple path names without traversal segments. Confirm it belongs to Priyanshu Raj, opens as a PDF, and contains the intended certificate before adding the path. Do not use the reference owner's certificates. Add only assets the user supplies/authorizes.

## Verification and evidence

1. Obtain the owner's confirmation of titles, dates, organization/issuer and any description. Record the confirmation date; leave unavailable information unset.
2. Record source URLs where available in the evidence log below. An owner-supplied statement or original document may be the source when no public URL exists; label that explicitly without inventing a URL.
3. Open each actual verification URL in a browser and confirm that it names the right person, certificate and issuer. A login screen, unrelated issuer homepage, error response or expired destination is not a verified credential link. Use that URL's real destination; do not construct or guess a credential identifier.
4. Open every PDF and verify its owner/content. For a local asset, also request its actual public path from the portfolio preview. A `%PDF-` file signature alone is not proof of identity, completeness or authenticity.
5. Only then set `confirmedOn` / `linksCheckedOn`. A date stamp records a human check; it does not make a network request or guarantee future availability. Recheck destinations before Phase 8 publication.
6. Run `npm run check:content`, `npm run test:content`, lint, typecheck and build after content changes. The content checker checks duplicate IDs, fields, dates, confirmation stamps, URL shapes, and local PDF existence/signature. It does **not** probe external URLs or verify document authenticity.
7. Review timeline order, date precision, archive keyboard operation and native PDF/issuer destinations in the browser on desktop and mobile.

### Evidence log

Source for all three entries: Priyanshu Raj's direct reply to the journey/certificate intake question on 2026-10-24. No public source URLs were provided; owner confirmation is the evidence, not independent institutional verification.

| Record ID | Confirmed details | Confirmation date | Public source / destination check |
| --- | --- | --- | --- |
| `bennett-btech-cse` | B.Tech CSE, Bennett University, pursuing since 2024, expected completion 2028; supplied focus/description | 2026-10-24 | No public source URL supplied; no certificate destination |
| `independent-ai-ml-full-stack` | Independent Learning & Project Development, 2025–Present; supplied project/technology learning description | 2026-10-24 | No public source URL supplied; no certificate destination |
| `bennett-machine-learning-operations` | Machine Learning Operations learning at Bennett University, 2026–Present; supplied description | 2026-10-24 | No public source URL supplied; no certificate destination |

The supplied 2025 start is retained without guessing a month or an alternative year. Independent development and MLOps are education/learning records, not employment or awarded qualifications. The B.Tech is ongoing with an expected 2028 completion, not a completed degree. Project names and technologies in the journey are the owner's learning description; no new dossier, verified proficiency, project-feature claim or metric is introduced. StudySync AI has no verified dossier and no link is invented. Profile skills remain unchanged.

Certificate intake on 2026-10-24: 24 owner-supplied certificate PDFs and their content are now populated. See CERTIFICATE_EVIDENCE.md for page mapping, corrected issue/completion dates and the live issuer-link verification limitation. Do not store private correspondence or unnecessary personal details in source files.

## Checks and fixtures

`npm run test:content` uses Node's built-in test runner and synthetic fixtures confined to `tests/personal-records.test.mjs`. It covers date precision/leap years, chronological order, unconfirmed drafts, explicit ongoing status and permitted destination shapes. No test certificate, issuer URL or PDF is placed in `public` or the content arrays.

Phase 5 browser populated-state QA uses only temporary intercepted HTML generated from the real components. Its data is explicitly labeled TEST ONLY and never registered as an application route. Those checks validate layout/keyboard behavior, not genuine certificate availability. The initial production build was checked separately for empty states. After journey intake, production was rechecked with the three confirmed records; the certificate empty state and omission of unavailable actions remain.


Certificate intake update — 2026-10-24: 24 records from the supplied deduplicated PDF now populate the archive, with individual single-page PDFs, printed issue/completion dates, categories and available credential IDs/hours/CEUs/grades. See CERTIFICATE_EVIDENCE.md for source mapping and issuer URLs retained as documentary evidence pending live checks. This supersedes earlier certificate empty-state notes. Phase 6 remains unapproved.


Terminal/contact now read profile.ts, projects.ts and confirmed journey content. Add owner-approved biography, skills, email, location, LinkedIn and resume there when supplied; missing values stay null/empty. Phase 6 does not promote course topics or interests into skills. No contact messages are sent by the portfolio.
