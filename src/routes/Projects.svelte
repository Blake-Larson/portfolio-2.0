<script>
  import ProjectItem from './ProjectItem.svelte';

  const projects = [
    {
      date: 'Jan 11, 2024',
      title: 'Sewing Calculator',
      url: 'https://sewing-calculator.netlify.app/',
      description:
        'A tool to help you calculate the amount of fabric you need for your sewing projects. Originally created to help my wife with her sewing projects. I plan to add additional features and implement a backend to store your projects and calculations.',
      technologies: ['JavaScript', 'Svelte', 'SvelteKit'],
      img: { src: '/assets/sewing-calculator.webp', alt: 'Sewing Calculator' }
    },
    {
      date: 'Jan 16, 2023',
      title: 'Marshall Middle School',
      url: 'https://marshallvocalmusic.netlify.app/',
      description:
        'A website for the Marshall Middle School Vocal Music program. Web design by <a href="https://www.nicoletodesign.com/" target="_blank" rel="noreferrer noopener" aria-label="Nicole To (opens in a new tab)">Nicole Tob</a>. I was the lead developer for this project and was responsible for the development, and deployment of the website.',
      technologies: ['JavaScript', 'Svelte', 'SvelteKit'],
      img: { src: '/assets/marshall-middle-school.png', alt: 'Marshall Middle School' }
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
          technologies={project.technologies}
          img={project.img}
          date={project.date} />
      {/each}
    </ol>
  </div>
</section>
