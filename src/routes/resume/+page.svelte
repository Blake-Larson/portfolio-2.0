<script>
  /** @type {import('./$types').PageData} */
  export let data;

  const { contact, selectedProject, experiences, skills, education, interests } = data;
</script>

<svelte:head>
  <title>{contact.name} — Software Engineer</title>
</svelte:head>

<article
  class="resume mx-auto w-[8.5in] bg-white p-[0.5in] text-[10pt] leading-[1.3] text-neutral-800 shadow-lg print:w-full print:p-0 print:text-[9.5pt] print:leading-[1.25] print:shadow-none">
  <header class="mb-3 grid grid-cols-[3fr_1fr] gap-x-8">
    <div>
      <h1 class="text-[22pt] font-bold leading-none text-blue-400 print:text-[20pt]">
        {contact.name}
      </h1>
      <p class="mt-2 text-[10pt] leading-snug text-neutral-800 print:text-[9.5pt]">
        {contact.summary}
      </p>
    </div>
    <address
      class="space-y-0.5 text-right text-[10pt] not-italic leading-snug text-neutral-800 print:text-[9.5pt]">
      <a href="mailto:{contact.email}" class="block hover:underline">{contact.email}</a>
      <span class="block">{contact.phone}</span>
      <a href={contact.website} class="block hover:underline">{contact.websiteLabel}</a>
      <a href={contact.github} class="block hover:underline">{contact.githubLabel}</a>
    </address>
  </header>

  <div class="grid grid-cols-[3fr_1fr] gap-x-8">
    <div class="space-y-3">
      <section>
        <h2 class="resume-heading mb-1.5">Experience</h2>
        <div class="space-y-2">
          {#each experiences as job}
            <div>
              <h3 class="text-[10pt] font-bold leading-snug text-neutral-900 print:text-[9.5pt]">
                {job.role}{#if job.showCompany !== false && job.company}
                  · {#if job.url}<a href={job.url} class="hover:underline">{job.company}</a
                    >{:else}{job.company}{/if}
                {/if}{' '}
                <span class="font-normal text-neutral-700">
                  {job.start} — {job.end}
                </span>
              </h3>
              <ul class="resume-list mt-0.5 text-[10pt] text-neutral-800 print:text-[9.5pt]">
                {#each job.bullets as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </section>

      <section>
        <h2 class="resume-heading mb-1">
          Selected Project —
          <span class=" decoration-neutral-800">{selectedProject.title}</span>
        </h2>
        <p class="text-[10pt] leading-snug text-neutral-800 print:text-[9.5pt]">
          {selectedProject.description}
        </p>
      </section>
    </div>

    <aside class="space-y-3">
      <section>
        <h2 class="resume-heading mb-1.5">Skills</h2>
        <div class="space-y-2 text-[10pt] text-neutral-800 print:text-[9.5pt]">
          <div>
            <h3 class="font-bold text-neutral-900">Programming Languages</h3>
            <p>{skills.languages.join(', ')}</p>
            <p class="mt-0.5">Familiar with: {skills.familiar.join(', ')}</p>
          </div>
          <div>
            <h3 class="font-bold text-neutral-900">Libraries & Frameworks</h3>
            <p>{skills.libraries.join(', ')}</p>
          </div>
          <div>
            <h3 class="font-bold text-neutral-900">Tools & Platforms</h3>
            <p>{skills.tools.join(', ')}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="resume-heading mb-1">Education</h2>
        <div class="text-[10pt] text-neutral-800 print:text-[9.5pt]">
          <p class="font-bold text-neutral-900">{education.school}</p>
          <p>{education.degree}</p>
        </div>
      </section>

      <section>
        <h2 class="resume-heading mb-1">Interests</h2>
        <p class="text-[10pt] leading-snug text-neutral-800 print:text-[9.5pt]">{interests}</p>
      </section>
    </aside>
  </div>
</article>

<style lang="postcss">
  :global(.resume-heading) {
    @apply text-[11pt] font-bold text-blue-400 print:text-[10pt];
  }

  :global(.resume-list) {
    list-style-type: disc;
    padding-left: 1.1rem;
  }

  :global(.resume-list li) {
    margin-bottom: 0.15rem;
  }

  :global(.resume-list li::marker) {
    font-size: 0.65em;
  }
</style>
