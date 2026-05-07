<script lang="ts">
  import { page } from '$app/stores';
  import projects from '$lib/projects-config.js';

  $: slug = $page.url.pathname.split('/').pop();
  $: currentIndex = projects.findIndex((p: { slug: string }) => p.slug === slug);
  $: project = projects[currentIndex];
  $: prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  $: nextProject = projects[(currentIndex + 1) % projects.length];
</script>

<div class="md:py-4">
  <div class="mb-8 flex items-center justify-between">
    <a href="/" class="text-sm text-slate-200 transition-colors hover:text-teal-300"> Home </a>
    <div class="flex gap-4">
      {#if prevProject}
        <a
          href="/projects/{prevProject.slug}"
          class="text-sm text-slate-200 transition-colors hover:text-teal-300">
          ← Prev Project
        </a>
      {/if}
      {#if nextProject}
        <a
          href="/projects/{nextProject.slug}"
          class="text-sm text-slate-200 transition-colors hover:text-teal-300">
          Next Project →
        </a>
      {/if}
    </div>
  </div>
  <h1 class="mb-8 text-center text-3xl font-bold text-slate-200">Projects</h1>

  <slot />

  {#if project?.url}
    <div class="mt-12 flex items-center justify-center border-t border-slate-200/10 pt-6">
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
    </div>
  {/if}
</div>
