<script>
  import ProjectItem from './ProjectItem.svelte';
  import projects from '$lib/projects-config';
</script>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
  aria-label="Selected Projects">
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
  </div>
  <div>
    <ol class="group/list">
      {#each projects as project}
        <ProjectItem
          title={project.title}
          slug={project.slug}
          description={project.description}
          technologies={project.technologies}
          img={project.img}
          date={project.date} />
      {/each}
    </ol>
  </div>
</section>
