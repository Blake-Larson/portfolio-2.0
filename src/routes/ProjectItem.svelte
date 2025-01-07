<script>
  import NewTabIcon from './NewTabIcon.svelte';
  export let title = '';
  export let url = '';
  export let description = '';
  export let technologies = [''];
  export let img = { src: '', alt: '' };
  export let date = '';
</script>

<li class="mb-12">
  <div
    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
    </div>
    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3>
        <a
          class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="{title} (opens in a new tab)"
          ><span
            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
          ></span
          ><span
            >{title}
            <span class="inline-block"><NewTabIcon /></span></span
          ></a>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        {@html description}
      </p>
      <p class="mt-2 text-sm leading-normal">
        Deployed: {date}
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
    <img
      alt={img.alt}
      loading="lazy"
      width="200"
      height="48"
      decoding="async"
      data-nimg="1"
      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      src={img.src}
      style="color: transparent;" />
  </div>
</li>
