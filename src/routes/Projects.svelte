<script>
  import ProjectItem from './ProjectItem.svelte';

  const projects = [
    {
      date: { start: 'May 2023', end: 'Present' },
      title: 'Software Engineer II',
      url: 'https://www.ageoflearning.com/',
      description:
        "Build and maintain critical components used to construct Age of Learning's frontend, across the ABCmouse and Adventure Academy products. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.",
      technologies: ['JavaScript', 'TypeScript', 'Svelte', 'SvelteKit', 'PHP', 'SQL']
    },
    {
      date: { start: '2021', end: '2023' },
      title: 'Software Engineer II',
      url: 'https://100devs.org/',
      description:
        "Collaborated with a team of developers to build modern and responsive web applications for 100 Devs' clients. ",
      technologies: ['JavaScript', 'React', 'Next.js', 'Node.js', 'SQL']
    },
    {
      date: { start: '2020', end: '2023' },
      title: 'Software Engineer II',
      url: 'https://blakelarson.dev/',
      description:
        'Created full-stack web applications and static websites for clients across small and medium-sized businesses to solve their unique problems. Worked closely with clients to understand their needs and deliver solutions that exceeded their expectations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js']
    }
  ];
</script>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="Selected Projects">
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
  </div>
  <div>
    <ol class="group/list">
      {#each projects as project}
        <ProjectItem
          title={project.title}
          url={project.url}
          description={project.description}
          technologies={project.technologies} />
      {/each}
    </ol>
  </div>
</section>

<style>
</style>
