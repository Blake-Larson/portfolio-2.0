<script>
  import NewTabIcon from './NewTabIcon.svelte';

  export let date = { start: '', end: '' };
  export let title = { role: '', company: '' };
  export let url = '';
  export let description = '';
  export let technologies = [''];
</script>

<li class="mb-12">
  <div
    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
    </div>
    <header
      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="{date.start} to {date.end}">
      {date.start} — {date.end}
    </header>
    <div class="z-10 sm:col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">
        <div>
          <a
            class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="{title.role} at {title.company} (opens in a new tab)"
            ><span
              class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
            ></span
            ><span
              >{title.role} ·<!-- -->
              <span class="inline-block">{title.company}<NewTabIcon /></span></span
            ></a>
        </div>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        {description}
      </p>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        {#each technologies as technology}
          <li class="mr-1.5 mt-2">
            <div
              class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              {technology}
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</li>

<style>
</style>
