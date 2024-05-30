<script>
  // Experience Item
  // Date {start: 2024, end: Present}
  // Title	{role: "Senior Frontend Engineer, Accessibility", company: "Klaviyo"}
  // URL {href: "https://www.klaviyo.com"}
  // Description {"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."}
  // Technologies {JavaScript, TypeScript, React, Storybook}

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
      aria-label={`${date.start} to ${date.end}`}>
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
            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
            ><span
              class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
            ></span
            ><span
              >{title.role} ·<!-- -->
              <span class="inline-block"
                >{title.company}<svg
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
