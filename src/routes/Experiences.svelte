<script>
  import ExperienceItem from './ExperienceItem.svelte';
  import NewTabIcon from './NewTabIcon.svelte';

  const experiences = [
    {
      date: { start: 'Jul 2025', end: 'Present' },
      title: { role: 'Software Engineer III', company: 'Age of Learning' },
      url: 'https://www.ageoflearning.com/',
      description:
        'Architected a SvelteKit inbound gateway for iOS/Android alternate payment flows with Zod payload validation, platform resolution, persistent authentication, analytics, Sentry error reporting, and E2E coverage. Engineered a FlutterAppService that mints short-lived auth tokens and routes users to platform-specific deep links or Flutter web auth URLs. Debug production issues by triaging Datadog logs and querying Snowflake event data.',
      technologies: ['TypeScript', 'SvelteKit', 'Zod', 'Dart', 'Flutter', 'WebdriverIO', 'Datadog', 'Snowflake']
    },
    {
      date: { start: 'May 2023', end: 'Jul 2025' },
      title: { role: 'Software Engineer II', company: 'Age of Learning' },
      url: 'https://www.ageoflearning.com/',
      description:
        'Implemented Apple Pay end-to-end across a shared monorepo package and the browser layer, achieving 30% adoption on eligible devices. Designed a reference-counted LoadingService singleton with guaranteed cleanup, then retrofitted it app-wide. Built a Page lifecycle controller unifying SEO metadata, auth policies, A/B condition resolution, and analytics initialization across all marketing routes. Authored WebdriverIO + Mocha E2E suites covering 10 routes across 4 CI pipelines.',
      technologies: ['JavaScript', 'TypeScript', 'Svelte', 'SvelteKit', 'SQL', 'WebdriverIO']
    },
    {
      date: { start: 'Jan 2021', end: 'May 2023' },
      title: { role: 'Software Engineer', company: '100Devs' },
      url: 'https://100devs.org/',
      description:
        'Built React applications with component-level state management for contract client projects, collaborating with small teams to scope and deliver real software for paying clients. Developed fluency in HTML, CSS, and JavaScript through an intensive project-based program.',
      technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS']
    },
    {
      date: { start: 'Jun 2020', end: 'May 2023' },
      title: { role: 'Web Developer', company: 'Freelance Dev' },
      url: 'https://blakelarson.dev/',
      description:
        'Designed and deployed static websites and marketing-focused web experiences for small business clients, handling SEO fundamentals, deployment on Netlify and Vercel, and all aspects of client communication from discovery through delivery.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify', 'Vercel']
    }
  ];
</script>

<section
  id="experience"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="Work experience">
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
    <div class="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2">
      <a
        class="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href="/resume"
        aria-label="View Full Résumé"
        ><span>View Full Résumé</span></a>
      <a
        class="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        href="/documents/blake-larson-resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Download Résumé PDF (opens in a new tab)"
        ><span
          >Download PDF<!-- -->
          <span class="inline-block"><NewTabIcon /></span></span
        ></a>
    </div>
  </div>
</section>

<style>
</style>
