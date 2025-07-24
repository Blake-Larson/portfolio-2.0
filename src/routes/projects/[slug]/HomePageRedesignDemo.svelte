<div class="space-y-16 md:space-y-24">
  <!-- Image System Section -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Optimized Image Service</h3>
      <p class="text-base text-slate-400">
        Implemented a sophisticated image handling system that automatically converts and serves
        WebP formats when supported, with fallbacks. The system includes responsive image loading,
        lazy loading, and automatic format detection, resulting in a 40% reduction in image load
        times.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            WebP Conversion
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Lazy Loading
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Responsive Sources
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code
          >{`// Here are a few selections from the codebase that demonstrate the image optimization service:

// Example of the WebP conversion function	
/**
	 * Creates WebP variants of image sources
	 * @param {ImageSource[]} sources
	 * @returns {ImageSource[]}
	 */
	static createWebPSources(sources) {
		return sources.flatMap((source) => {
			if (this.isSvgImage(source.srcset)) return [source];

			return [
				{
					...source,
					srcset: source.srcset.replace(this.FORMAT_REGEX, '.webp'),
					type: 'image/webp'
				},
				source
			];
		});
	}

// Basic usage with responsive sources
  <ComponentImage
    sources={content.image.sources}
    imgConfig={{
      alt: content.image.alt,
      class:
        'mb-2 w-full',
      loading: 'lazy'
    }}
  />

// In the component
<picture {...pictureConfig}>
	{#each sources as source}
		<source {...source} />
	{/each}
	<img {...imgConfig} src={sources[sources.length - 1].srcset} />
</picture>

// In the config
  image: {
    sources: [{ srcset: '/example.png' }],
    alt: 'Example'
  }
`}</code></pre>
    </div>
  </div>

  <!-- Interactive Carousel Section -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Smooth Interactive Carousel</h3>
      <p class="text-base text-slate-400">
        Built a touch-enabled, accessible carousel with smooth transitions and automatic content
        scaling. Features include swipe gestures, keyboard navigation, and responsive design that
        adapts to any screen size.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Touch Events
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            A11y Support
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Responsive Design
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Tailwind CSS Animations
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <div class="relative mb-8 w-full overflow-hidden rounded-lg border-4 border-slate-200/10">
        <video class="h-full w-full" autoplay loop muted playsinline controls>
          <source src="/assets/home-page-carousel-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <!-- Config-Driven Architecture Section -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">JSON Config-Driven Architecture</h3>
      <p class="text-base text-slate-400">
        Engineered a robust configuration system using JSDoc Types that drives the entire page
        layout and content. This approach enables rapid A/B testing, easy content updates, and
        maintains strict type safety across all components.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            JSDoc Types
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            A/B Testing Ready
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Component Config
          </div>
        </li>
      </ul>
    </div>
    <pre class="flex-1 overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
            <code
        >{`
// Example of the JSON config
const config = {
	header: {
		logoImg: {
			sources: [{ srcset: '/logo.png' }],
			alt: 'ABCmouse logo'
		},
	}
};`}</code></pre>
    <pre class="flex-1 overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
                <code
        >{`
// Type definition for the configuration object
/**
 * @typedef {object} HomePageConfiguration
 * @property {object} header - The header section of the page.
 * @property {ComponentImage} header.logoImg - The logo image for the header.
 *
 * @typedef {Object} ComponentImage
 * @property {Array<{srcset: string}>} sources - Array of image sources with srcset
 * @property {string} alt - Alt text for the image
 */
 `}</code></pre>
  </div>

  <!-- AI-Assisted Development Section -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Productive AI Collaboration</h3>
      <p class="mb-4 text-base text-slate-400">
        Demonstrated expertise in crafting precise, context-rich prompts that leveraged AI
        capabilities effectively. Here are some tips I've learned from other developers and my own
        experience:
      </p>
      <div class="flex flex-col gap-4">
        <div>
          <h3 class="text-md ml-2 font-semibold text-slate-200">Plan + Execute:</h3>
          <p>
            Instead of asking AI to implement your feature immediately, break it into a planning and
            execution step.
          </p>
        </div>
        <div>
          <h3 class="text-md ml-2 font-semibold text-slate-200">Give it a role:</h3>
          <p>
            Give the AI a persona like “system architect” or “principal engineer,” particularly at
            the planning stage, to pack in the right context with minimal effort.
          </p>
        </div>
        <div>
          <h3 class="text-md ml-2 font-semibold text-slate-200">Questions:</h3>
          <p>
            When working on ambiguous problems, have it ask you questions to uncover all your hidden
            requirements and have it implement the feature specific to your needs.
          </p>
        </div>
        <div>
          <h3 class="text-md ml-2 font-semibold text-slate-200">Multiple approaches:</h3>
          <p>
            When faced with a bug or feature with an ambiguous solution, ask for multiple
            approaches. This ensures it doesn’t go down an invalid rabbit hole and lets you be the
            decision maker of which route to explore more.
          </p>
        </div>
        <div>
          <h3 class="text-md ml-2 font-semibold text-slate-200">Examples:</h3>
          <p>
            Rather than listing out all your requirements, give it an example it can follow. It
            saves you time from writing prompts and forces the AI to follow existing conventions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
