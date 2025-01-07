<script>
  import Socials from './Socials.svelte';
  import Nav from './Nav.svelte';
</script>

<header
  class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
  <div>
    <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Blake Larson</h1>
    <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
      Software Engineer
    </h2>
    <p class="mt-4 max-w-xs leading-normal">
      I build modern digital experiences backed by robust engineering systems.
    </p>
    <Nav />
  </div>
  <Socials />
</header>

<style>
</style>
