<script>
  import About from './About.svelte';
  import Experiences from './Experiences.svelte';
  import Header from './Header.svelte';
</script>

<body
  class="mx-auto min-h-screen max-w-screen-xl bg-slate-900 px-6 py-12 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 md:px-12 md:py-20 lg:px-24 lg:py-0">
  <a
    href="#content"
    class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
    >Skip to Content</a>
  <div class="lg:flex lg:justify-between lg:gap-4">
    <Header />
    <main class="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experiences />
    </main>
  </div>
</body>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.900);
  }
</style>
