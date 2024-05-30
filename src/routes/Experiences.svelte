<script>
  import ExperienceItem from './ExperienceItem.svelte';

  const experiences = [
    {
      date: { start: 'May 2023', end: 'Present' },
      title: { role: 'Software Engineer II', company: 'Age of Learning' },
      url: 'https://www.ageoflearning.com/',
      description:
        "Build and maintain critical components used to construct Age of Learning's frontend, across the ABCmouse and Adventure Academy products. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.",
      technologies: ['JavaScript', 'TypeScript', 'Svelte', 'SvelteKit', 'PHP', 'SQL']
    },
    {
      date: { start: '2021', end: '2023' },
      title: { role: 'Software Engineer', company: '100 Devs' },
      url: 'https://100devs.org/',
      description:
        "Collaborated with a team of developers to build modern and responsive web applications for 100 Devs' clients. ",
      technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'SQL']
    },
    {
      date: { start: '2020', end: '2023' },
      title: { role: 'Software Engineer', company: 'Blakelarson.dev' },
      url: 'https://blakelarson.dev/',
      description:
        'Created full-stack web applications and static websites for clients across small and medium-sized businesses to solve their unique problems. Worked closely with clients to understand their needs and deliver solutions that exceeded their expectations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js']
    }
  ];
</script>

<section
  id="experience"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="Work experience">
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      Experience
    </h2>
  </div>
  <div>
    <ol class="group/list">
      {#each experiences as experience}
        <ExperienceItem
          date={experience.date}
          title={experience.title}
          url={experience.url}
          description={experience.description}
          technologies={experience.technologies} />
      {/each}
    </ol>
    <div class="mt-12">
      <a
        class="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href="/documents/blake-larson-resume-04-03-23.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View Full Résumé (opens in a new tab)"
        ><span
          >View Full<!-- -->
          <span class="inline-block"
            >Résumé<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"></path
              ></svg
            ></span
          ></span
        ></a>
    </div>
  </div>
</section>

<style>
</style>
