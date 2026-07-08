# Resume Variant Examples

Reference examples for tailoring, gap handling, and anti-fabrication. The `scrivy` variant illustrates legitimate tailoring from the base resume.

---

## 1. Good tailoring — scrivy variant

The scrivy JD emphasized full-stack TypeScript/React, payment integrations, API design, and production observability. The variant reframed existing experience without changing employers, dates, or inventing new work.

### Summary reframe

**Base (`src/lib/resume-data.js`):**

> Software engineer specializing in frontend systems and API integration — connecting complex backend services, payment processors, and native apps to polished, production-grade user experiences.

**Variant (`resumes/scrivy/resume-data.js`):**

> Full-stack software engineer with 5+ years shipping TypeScript and React products end to end — payment integrations, API design, data querying, and production observability. Ships independently from scoped problem to tested, live feature.

**Why this works:** Same underlying experience; language pivots toward JD keywords (full-stack, TypeScript, React, payment, observability). "5+ years" is defensible from Jun 2020–Present employment history.

### Skills reorder

**Base languages:** `JavaScript, TypeScript, HTML, CSS, SQL`

**Variant languages:** `TypeScript, JavaScript, SQL, HTML, CSS`

**Base libraries:** `Svelte, SvelteKit, React, Next.js, Node.js, Tailwind CSS`

**Variant libraries:** `React, Next.js, Node.js, SvelteKit, Svelte, Tailwind CSS`

**Why this works:** No new skills added — only reordering to surface JD-relevant items first.

### Bullet reframe (same facts)

**Base:**

> Architected a SvelteKit inbound-gateway for iOS/Android alternate payment flows: Zod payload validation, ...

**Variant:**

> Owned a SvelteKit payment gateway end to end for iOS/Android alternate billing flows: Zod payload validation, ...

**Why this works:** "Architected" → "Owned … end to end" and "payment flows" → "alternate billing flows" align with JD ownership language. Technical details unchanged.

### Selected project emphasis

**Base** leads with what was built. **Variant** leads with ownership and highlights a specific design decision (deferring navigation to preserve billing context). Same project, same facts, different emphasis for the role.

---

## 2. Good gap handling — GraphQL

**JD requirement:** "Experience with GraphQL APIs"

**Match matrix:**

| JD requirement | Evidence in base resume | Action |
|----------------|-------------------------|--------|
| GraphQL | None found | **Ask user** |

**Agent asks:**

> The JD mentions GraphQL. Do you have experience with GraphQL?

**User:** No.

**Correct action:** Mark **Omit**. Do not add GraphQL to skills. Do not write a bullet implying GraphQL usage. Do not claim "REST and GraphQL" when only REST/API integration exists in the resume.

---

## 3. Bad fabrication — Python experience

**JD requirement:** "5+ years of Python development"

**Match matrix:**

| JD requirement | Evidence in base resume | Action |
|----------------|-------------------------|--------|
| Python (5+ years) | None found | **Ask user** |

### Wrong approach

- Adding `Python` to `skills.languages`
- Writing: "Built Python microservices for payment processing at Age of Learning"
- Inflating unrelated scripting into "5+ years Python development"

### Correct approach

**Agent asks:**

> The JD mentions 5+ years of Python. Do you have professional Python experience?

**User:** "I've used Python for personal scripts but not professionally."

**Correct action:** Do not add Python to the variant. Optionally note in the change summary that Python was omitted per user confirmation. Do not stretch personal scripts into professional experience.

---

## 4. Adding a new bullet — requires confirmation

The scrivy variant includes an LLM-assisted development bullet. That content exists in the **base resume** today. If it did not, the agent would need to ask first:

**Agent asks:**

> The JD emphasizes AI-assisted development workflows. Do you have experience with LLM-assisted or AI-assisted development in your work?

**User:** "Yes — I used structured prompt workflows on the ABCmouse home page redesign and shipped a 40% faster image service."

**Agent drafts:**

> Applied structured LLM-assisted development on the ABCmouse home page redesign — plan-then-execute prompt workflows, role-based context, and convention-following examples — to ship a 40% faster image service and accessible carousel while maintaining strict JSDoc type safety.

**Agent then asks:** "Does this bullet accurately reflect your work? Any corrections before I add it?"

Only add after user approval. The `40% faster` metric must come from the user, not be invented.

---

## 5. Match matrix — full example snippet

For a hypothetical full-stack React + payments role:

| JD requirement | Evidence in base resume | Action |
|----------------|-------------------------|--------|
| TypeScript | skills.languages, all recent roles | Reframe |
| React | 100Devs bullets, skills.libraries | Reframe, reorder |
| Payment integrations | Apple Pay bullet, payment gateway bullet | Reframe, lead with these |
| Node.js | skills.libraries | Reorder |
| Sentry / Datadog | SE III bullets, skills.tools | Reframe |
| Snowflake | SE III bullet, skills.tools | Reframe |
| GraphQL | None | **Ask user** → Omit if no |
| Kubernetes | None | **Ask user** → Omit if no |
| AWS | None | **Ask user** → Omit if no |
