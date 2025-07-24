<script lang="ts">
  import { page } from '$app/stores';
  import projects from '$lib/projects-config.js';
  import HomePageRedesignDemo from './HomePageRedesignDemo.svelte';

  $: project = projects.find((p) => p.slug === $page.params.slug);

  $: currentIndex = projects.findIndex((p) => p.slug === $page.params.slug);
  $: nextProject = projects[(currentIndex + 1) % projects.length];
</script>

<svelte:head>
  <title>{project?.title} | Blake Larson</title>
  <meta name="description" content={project?.description} />
</svelte:head>

<div class="md:py-4">
  <a href="/" class="text-sm text-slate-200 transition-colors hover:text-teal-300"> ← Home </a>
  <h1 class="mb-8 text-center text-3xl font-bold text-slate-200">Projects</h1>
  {#if project}
    <div class="mb-12">
      {#if project.img.type === 'video'}
        <div class="relative mb-8 w-full overflow-hidden rounded-lg border-4 border-slate-200/10">
          <video class="h-full w-full" autoplay loop muted playsinline controls>
            <source src={project.img.src} type="video/quicktime" />
            <source src={project.img.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      {:else}
        <img
          alt={project.img.alt}
          loading="lazy"
          width="500"
          height="200"
          decoding="async"
          data-nimg="1"
          class="mb-8 w-full rounded-lg border-2 border-slate-200/10"
          src={project.img.src}
          style="color: transparent;" />
      {/if}

      <h1 class="mb-4 text-3xl font-bold text-slate-200">{project.title}</h1>
      <p class="text-base text-slate-400">{@html project.description}</p>

      <ul class="mt-4 flex flex-wrap" aria-label="Technologies used">
        {#each project.technologies as technology}
          <li class="mr-1.5 mt-2">
            <div
              class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              {technology}
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <!-- TODO: rework this to be driven by the project config -->
    {#if project.slug === 'home-page-redesign'}
      <HomePageRedesignDemo />
    {/if}

    <div class="mt-12 flex items-center justify-between border-t border-slate-200/10 pt-6">
      <a href="/#projects" class="text-sm text-slate-200 transition-colors hover:text-teal-300">
        ← Back to Projects
      </a>
      {#if project.url}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          class="inline-flex items-center rounded-lg bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-400/20">
          Visit Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 h-4 w-4">
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd" />
          </svg>
        </a>
      {/if}
      <a
        href="/projects/{nextProject.slug}"
        class="text-sm text-slate-200 transition-colors hover:text-teal-300">
        Next Project →
      </a>
    </div>
  {/if}
</div>
