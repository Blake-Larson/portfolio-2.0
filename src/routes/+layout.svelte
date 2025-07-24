<script>
  import '../app.css';
</script>

<body
  class="w-full bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
  <div
    class="mx-auto min-h-screen w-full max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <a
      href="#content"
      class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >Skip to Content</a>
    <slot></slot>
  </div>
</body>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.900);
    scroll-behavior: smooth;
  }
</style>
