# Resume Data Schema

Variant files must match the export shape of `src/lib/resume-data.js`. The resume page reads these exports server-side via `src/lib/load-resume-data.js`.

## Exports

```javascript
export const contact = { ... };
export const selectedProject = { ... };
export const experiences = [ ... ];
export const skills = { ... };
export const education = { ... };
export const interests = '...';
```

## Types

```javascript
/** @typedef {{ role: string, company: string, url?: string, showCompany?: boolean, start: string, end: string, bullets: string[] }} ResumeExperience */
```

## Field reference

### `contact`

| Field | Editable | Notes |
|-------|----------|-------|
| `name` | No | |
| `email` | No | |
| `phone` | No | |
| `website` | No | |
| `websiteLabel` | No | |
| `github` | No | |
| `githubLabel` | No | |
| `summary` | **Yes** | 1–2 sentences; primary tailoring target |

### `selectedProject`

| Field | Editable | Notes |
|-------|----------|-------|
| `title` | Rarely | Change only if a different project is clearly more relevant |
| `description` | **Yes** | Reframe emphasis; keep facts accurate |

### `experiences[]`

| Field | Editable | Notes |
|-------|----------|-------|
| `role` | No | |
| `company` | No | |
| `url` | No | |
| `showCompany` | No | Used to hide repeated company name on consecutive entries |
| `start` | No | |
| `end` | No | |
| `bullets` | **Yes** | Text, count, and order — max ~3–4 for recent roles |

### `skills`

| Field | Editable | Notes |
|-------|----------|-------|
| `languages` | Reorder only | Do not add languages without user confirmation |
| `familiar` | Reorder only | |
| `libraries` | Reorder only | |
| `tools` | Reorder only | |

### `education`

| Field | Editable | Notes |
|-------|----------|-------|
| `school` | No | |
| `degree` | No | |

### `interests`

| Field | Editable | Notes |
|-------|----------|-------|
| string value | Reorder only | Comma-separated list; usually unchanged |

## Constraints

1. **One page** — the PDF layout is fixed at letter size. Trim bullets before adding new ones.
2. **No new employers or roles** — only reword existing experience entries.
3. **No invented metrics** — reuse numbers from base resume only (e.g. `~30% adoption`).
4. **New bullets** — only after user confirms experience and approves the drafted text.
5. **File location** — `src/lib/resumes/{slug}/resume-data.js` where `{slug}` matches the `--variant` flag and `?variant=` query param. PDFs are written to `resumes/{slug}/`.

## Loading and rendering

- Server load: `src/routes/resume/+page.server.js` reads `?variant=` and calls `loadResumeData(variant)`.
- Missing variant → 404.
- Null/missing `?variant=` → falls back to `src/lib/resume-data.js`.

## PDF generation

```bash
npm run resume:pdf -- --variant {slug}
```

Writes to `resumes/{slug}/blake-larson-resume-{slug}.pdf`.

Without `--variant`, builds the default PDF to `static/documents/blake-larson-resume.pdf`.
