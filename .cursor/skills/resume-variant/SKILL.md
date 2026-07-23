---
name: resume-variant
description: >-
  Tailors a job-specific resume variant from a job description using the
  portfolio resume system. Parses JD requirements, maps them to existing
  experience, asks about gaps instead of inventing content, writes
  src/lib/resumes/{slug}/resume-data.js, and generates a PDF. Use when the user
  pastes a job description, asks for a tailored resume, resume variant,
  or application-specific resume for a company.
disable-model-invocation: true
---

# Resume Variant

Create a job-tailored resume variant from a pasted job description. Variant **data** lives in `src/lib/resumes/{slug}/` (gitignored, loaded by Vite); generated **PDFs** land in `resumes/{slug}/` (also gitignored). Do not modify the default resume unless the user explicitly asks.

## System overview

```
Job description → analyze vs base resume → ask about gaps → write variant → review → PDF
```

| File | Role |
|------|------|
| `src/lib/resume-data.js` | **Canonical baseline** — always start here |
| `src/lib/resumes/{slug}/resume-data.js` | Variant data (required for `?variant=` and PDF script) |
| `resumes/{slug}/blake-larson-resume-{slug}.pdf` | Generated PDF output only |
| `src/lib/load-resume-data.js` | Loads variant via `import.meta.glob('./resumes/*/resume-data.js')` |
| `scripts/build-resume-pdf.mjs` | PDF builder with `--variant` flag |
| `src/routes/resume/+page.svelte` | Fixed layout — only data changes |

For field constraints and export shape, see [schema.md](schema.md).
For tailoring examples, see [examples.md](examples.md).

---

## Phase 1 — Intake

1. Read the pasted job description in full.
2. Derive a **variant slug** from the company name: lowercase, hyphenated (e.g. `scrivy`, `stripe`). Confirm with the user if ambiguous.
3. Read `src/lib/resume-data.js` as the **only** baseline.
   - Do **not** use other files in `src/lib/resumes/` as source material — they may contain job-specific additions from prior runs.

---

## Phase 2 — JD analysis

Before editing anything, present an analysis to the user.

**Extract from the JD:**

- Role title and seniority signals
- Required vs preferred skills and technologies
- Key responsibilities and domain keywords (payments, observability, full-stack, etc.)
- Soft signals (ownership, independence, startup pace, etc.)

**Build a match matrix:**

| JD requirement | Evidence in base resume | Action |
|----------------|-------------------------|--------|
| React | 100Devs bullets, skills.libraries | Reframe bullets, reorder skills |
| Kubernetes | None found | **Ask user** |
| ... | ... | ... |

Action values:

- **Reframe** — requirement is covered; adjust wording or ordering
- **Ask user** — no clear evidence in base resume
- **Omit** — user confirmed no experience; do not include in variant

Wait for user acknowledgment of the matrix before proceeding to Phase 3 if there are **Ask user** rows.

---

## Phase 3 — Gap protocol

> **Never make up information to cover gaps in the resume but ask questions on if I have experience with that item instead.**

### Never do

- Add technologies, tools, metrics, job titles, responsibilities, or project names not in the base resume or confirmed by the user
- Invent metrics (only reuse numbers already in base resume, e.g. `~30% adoption`)
- Substitute a related skill as if it satisfies an unmatched requirement (e.g. do not imply Kubernetes experience because of Docker familiarity unless the user confirms)
- Copy content from other variant files in `src/lib/resumes/`

### Allowed without asking

- Reword existing bullets for JD keyword alignment
- Reorder bullets and skills arrays
- Trim or drop lower-relevance bullets to fit one page (~3–4 bullets for recent roles)
- Reframe `contact.summary` and `selectedProject.description` emphasis

### Requires asking

For every JD requirement marked **Ask user**, ask before writing the variant:

1. "The JD mentions **{X}**. Do you have experience with **{X}**?"
2. If yes: "Where and what did you do? (company, project, outcome)"
3. If yes but not on resume: draft a bullet from the user's answer; **user must approve** before adding
4. If no: mark **Omit** — do not mention in the variant

**Batch questions:** if multiple gaps exist, present all questions in one message before writing `resume-data.js`.

---

## Phase 4 — Write the variant

1. Create `src/lib/resumes/{slug}/resume-data.js` by copying the structure from `src/lib/resume-data.js`.
2. Tailor in this priority order:

| Section | Guidance |
|---------|----------|
| `contact.summary` | 1–2 sentences; mirror JD role language using only confirmed experience |
| `experiences[].bullets` | Reframe for JD keywords; lead with most relevant; drop or shorten least relevant |
| `selectedProject` | Emphasize decisions/outcomes relevant to the role (title usually stays the same) |
| `skills` | Reorder arrays to put JD-matched items first; do not add unconfirmed skills |
| `education`, `interests` | Usually unchanged; minor reorder of interests only if JD signals culture fit |

3. **Preserve immutable facts:** dates, company names, role titles, contact info (see [schema.md](schema.md)).
4. Export exactly: `contact`, `selectedProject`, `experiences`, `skills`, `education`, `interests`.

---

## Phase 5 — Review with user

Before generating the PDF, present:

1. Final match matrix with actions taken
2. Gaps asked about and user's answers
3. Summary of key changes (summary line, bullet reorder/reword, skills order)
4. Request approval or edits

Do not run PDF generation until the user approves (or explicitly skips review).

---

## Phase 6 — Generate and verify

```bash
npm run resume:pdf -- --variant {slug}
```

- **Output:** `resumes/{slug}/blake-larson-resume-{slug}.pdf`
- **Dev preview:** `npm run dev` → `/resume?variant={slug}`
- Confirm the PDF file exists after the command completes
- Remind the user that `src/lib/resumes/` and `resumes/` are gitignored by design — variants stay local

Do **not** update `static/documents/blake-larson-resume.pdf` unless the user explicitly asks.

---

## Checklist

Copy and track progress:

```
- [ ] Read base resume-data.js
- [ ] Parse JD and build match matrix
- [ ] Ask about all gaps (no fabrication)
- [ ] Get user approval on new bullets/content
- [ ] Write src/lib/resumes/{slug}/resume-data.js
- [ ] Present change summary to user
- [ ] Run npm run resume:pdf -- --variant {slug}
- [ ] Confirm PDF output path
```

---

## Additional resources

- [schema.md](schema.md) — field reference and editable vs fixed constraints
- [examples.md](examples.md) — good tailoring, gap handling, and anti-fabrication examples
