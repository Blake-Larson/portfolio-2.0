<script lang="ts">
  import projects from '$lib/projects-config.js';

  const project = projects.find((p: { slug: string }) => p.slug === 'loading-service');

  // --- Shared helpers ---
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  function timestamp() {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  // --- Naive (broken) panel state ---
  let naiveIsLoading = false;
  let naiveRunning = 0;
  let naiveLog: string[] = [];

  function naiveLog_add(msg: string) {
    naiveLog = [...naiveLog, `${timestamp()}  ${msg}`];
  }

  async function naiveRunTask(label: string, ms: number) {
    naiveRunning += 1;
    naiveIsLoading = true;
    naiveLog_add(`→ ${label} started`);
    await sleep(ms);
    naiveLog_add(`✓ ${label} finished (${ms / 1000}s)`);
    naiveIsLoading = false;
    naiveRunning -= 1;
  }

  function naiveRunBoth() {
    naiveLog = [];
    naiveRunTask('Task A', 1000);
    naiveRunTask('Task B', 2500);
  }

  // --- LoadingService (fixed) panel state ---
  let count = 0;
  let serviceLog: string[] = [];

  $: serviceIsLoading = count > 0;

  function lsStart() {
    count = count + 1;
  }

  function lsStop() {
    if (count > 0) count = count - 1;
  }

  async function withLoading(fn: () => Promise<unknown>) {
    lsStart();
    try {
      return await fn();
    } finally {
      lsStop();
    }
  }

  function serviceLog_add(msg: string) {
    serviceLog = [...serviceLog, `${timestamp()}  ${msg}`];
  }

  async function serviceRunTask(label: string, ms: number) {
    await withLoading(async () => {
      serviceLog_add(`→ ${label} started`);
      await sleep(ms);
      serviceLog_add(`✓ ${label} finished (${ms / 1000}s)`);
    });
  }

  function serviceRunBoth() {
    serviceLog = [];
    serviceRunTask('Task A', 1000);
    serviceRunTask('Task B', 2500);
  }
</script>

<svelte:head>
  <title>{project?.title} | Blake Larson</title>
  <meta name="description" content={project?.description} />
</svelte:head>

<div class="mb-12">
  <div
    class="relative mb-8 flex h-48 w-full flex-col justify-between overflow-hidden rounded-lg border-2 border-slate-200/10 bg-slate-800/40 p-5 sm:h-56">
    <div class="h-3 w-1/2 rounded bg-slate-700/60"></div>
    <div class="space-y-3">
      <div class="h-3 w-3/4 rounded bg-slate-700/60"></div>
      <div class="h-3 w-full rounded bg-slate-700/60"></div>
      <div class="h-3 w-5/6 rounded bg-slate-700/60"></div>
      <div class="h-3 w-2/3 rounded bg-slate-700/60"></div>
    </div>
    <div
      class="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-900/80 backdrop-blur-sm">
      <svg
        class="h-6 w-6 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.568 3 7.197l3-2.906z"
        ></path>
      </svg>
      <span class="text-xs text-slate-300">Loading...</span>
    </div>
  </div>

  <h1 class="mb-4 text-3xl font-bold text-slate-200">{project?.title}</h1>
  <p class="text-base text-slate-400">{@html project?.description}</p>

  <ul class="mt-4 flex flex-wrap" aria-label="Technologies used">
    {#each project?.technologies ?? [] as technology}
      <li class="mr-1.5 mt-2">
        <div
          class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
          {technology}
        </div>
      </li>
    {/each}
  </ul>
</div>

<!-- Interactive demo -->
<div class="mt-8 space-y-10">

  <div>
    <h3 class="text-lg font-semibold text-slate-200">Interactive Demo</h3>
    <p class="mt-1 text-sm text-slate-400">
      Run both tasks concurrently and watch how each panel handles the loading overlay.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

    <!-- Broken Panel -->
    <div class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
      <div class="mb-4 flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-red-400"></span>
        <h4 class="text-sm font-semibold text-slate-200">Without LoadingService</h4>
        <span class="ml-auto rounded-full bg-red-400/10 px-2 py-0.5 text-xs text-red-400">Broken</span>
      </div>

      <div class="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-4" style="min-height: 120px;">
        <div class="space-y-3">
          <div class="h-3 w-3/4 rounded bg-slate-700/60"></div>
          <div class="h-3 w-full rounded bg-slate-700/60"></div>
          <div class="h-3 w-5/6 rounded bg-slate-700/60"></div>
          <div class="h-3 w-2/3 rounded bg-slate-700/60"></div>
        </div>
        {#if naiveIsLoading}
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-900/80 backdrop-blur-sm">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.568 3 7.197l3-2.906z"></path>
            </svg>
            <span class="text-xs text-slate-300">Loading...</span>
          </div>
        {/if}
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <button
          class="rounded-lg bg-slate-700/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={naiveRunning > 0}
          on:click={naiveRunBoth}>
          Run Both
        </button>
      </div>

      <div class="mt-3">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs text-slate-500">Event log</span>
          <button class="text-xs text-teal-400 hover:text-teal-300 transition-colors" on:click={() => (naiveLog = [])}>Clear</button>
        </div>
        <div class="h-24 overflow-y-auto rounded-lg bg-slate-900/60 p-2 font-mono text-xs text-slate-400 space-y-0.5">
          {#if naiveLog.length === 0}
            <span class="text-slate-600 italic">No events yet…</span>
          {/if}
          {#each naiveLog as entry}
            <div class:text-teal-400={entry.includes('✓')} class:text-slate-400={!entry.includes('✓')}>
              {entry}
            </div>
          {/each}
        </div>
      </div>

      <p class="mt-3 text-xs text-slate-500 leading-relaxed">
        Task A finishes at 1s and sets <code class="text-slate-400">isLoading = false</code> — the overlay disappears even though Task B is still running.
      </p>
    </div>

    <!-- Fixed Panel -->
    <div class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
      <div class="mb-4 flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-teal-400"></span>
        <h4 class="text-sm font-semibold text-slate-200">With LoadingService</h4>
        <span class="ml-auto rounded-full bg-teal-400/10 px-2 py-0.5 text-xs text-teal-300">Fixed</span>
      </div>

      <div class="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-4" style="min-height: 120px;">
        <div class="space-y-3">
          <div class="h-3 w-3/4 rounded bg-slate-700/60"></div>
          <div class="h-3 w-full rounded bg-slate-700/60"></div>
          <div class="h-3 w-5/6 rounded bg-slate-700/60"></div>
          <div class="h-3 w-2/3 rounded bg-slate-700/60"></div>
        </div>
        {#if serviceIsLoading}
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-slate-900/80 backdrop-blur-sm">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.568 3 7.197l3-2.906z"></path>
            </svg>
            <span class="text-xs text-slate-300">Loading...</span>
          </div>
        {/if}
      </div>

      <div class="mt-2 flex items-center gap-2">
        <span class="text-xs text-slate-500">Active tasks:</span>
        <span
          class={`rounded-full px-2 py-0.5 text-xs font-mono font-semibold transition-colors ${count > 0 ? 'bg-teal-400/10 text-teal-300' : 'bg-slate-700/40 text-slate-500'}`}>
          {count}
        </span>
      </div>

      <div class="mt-3 flex flex-wrap gap-2">
        <button
          class="rounded-lg bg-slate-700/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={count > 0}
          on:click={serviceRunBoth}>
          Run Both
        </button>
      </div>

      <div class="mt-3">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs text-slate-500">Event log</span>
          <button class="text-xs text-teal-400 hover:text-teal-300 transition-colors" on:click={() => (serviceLog = [])}>Clear</button>
        </div>
        <div class="h-24 overflow-y-auto rounded-lg bg-slate-900/60 p-2 font-mono text-xs text-slate-400 space-y-0.5">
          {#if serviceLog.length === 0}
            <span class="text-slate-600 italic">No events yet…</span>
          {/if}
          {#each serviceLog as entry}
            <div class:text-teal-400={entry.includes('✓')} class:text-slate-400={!entry.includes('✓')}>
              {entry}
            </div>
          {/each}
        </div>
      </div>

      <p class="mt-3 text-xs text-slate-500 leading-relaxed">
        The overlay stays visible until both tasks complete — the counter only reaches 0 when all callers have called <code class="text-slate-400">stop()</code>.
      </p>
    </div>

  </div>

  <!-- Service implementation -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-slate-200">The Service</h3>
    <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300 leading-relaxed"><code><span class="text-slate-500">let</span> <span class="text-teal-300">loadingCount</span> = <span class="text-amber-300">0</span>;

<span class="text-slate-500">function</span> <span class="text-teal-300">start</span>() &#123;
  <span class="text-teal-300">loadingCount</span> = loadingCount + <span class="text-amber-300">1</span>;
  <span class="text-slate-500">if</span> (loadingCount === <span class="text-amber-300">1</span>) <span class="text-teal-300">setGlobalLoading</span>(<span class="text-amber-300">true</span>);
&#125;

<span class="text-slate-500">function</span> <span class="text-teal-300">stop</span>(forceStop = <span class="text-amber-300">false</span>) &#123;
  <span class="text-slate-500">if</span> (forceStop) loadingCount = <span class="text-amber-300">0</span>;
  <span class="text-slate-500">if</span> (loadingCount &gt; <span class="text-amber-300">0</span>) loadingCount = loadingCount - <span class="text-amber-300">1</span>;
  <span class="text-slate-500">if</span> (loadingCount === <span class="text-amber-300">0</span>) <span class="text-teal-300">setGlobalLoading</span>(<span class="text-amber-300">false</span>);
&#125;

<span class="text-slate-500">async function</span> <span class="text-teal-300">withLoading</span>(fn) &#123;
  <span class="text-teal-300">start</span>();
  <span class="text-slate-500">try</span> &#123;
    <span class="text-slate-500">return await</span> <span class="text-teal-300">fn</span>();
  &#125; <span class="text-slate-500">finally</span> &#123;
    <span class="text-teal-300">stop</span>(); <span class="text-slate-600">// always runs — even if fn() throws</span>
  &#125;
&#125;

<span class="text-slate-500">export const</span> <span class="text-teal-300">loadingService</span> = &#123;
  stop, <span class="text-slate-600">// Note: We don't export start so that the service can't be started without a withLoading call.</span>
  withLoading,
  <span class="text-slate-500">get</span> <span class="text-teal-300">running</span>() &#123;
    <span class="text-slate-500">return</span> loadingCount &gt; <span class="text-amber-300">0</span>;
  &#125;,
&#125;;</code></pre>

    <p class="text-sm text-slate-400 leading-relaxed">
      The reference counter is the key insight: <code class="rounded bg-slate-800/60 px-1 text-slate-300">start()</code> increments and <code class="rounded bg-slate-800/60 px-1 text-slate-300">stop()</code> decrements, so the overlay only clears when every caller has finished — not just the first one that returns. Wrapping calls in <code class="rounded bg-slate-800/60 px-1 text-slate-300">withLoading()</code> makes cleanup automatic: the <code class="rounded bg-slate-800/60 px-1 text-slate-300">finally</code> block guarantees <code class="rounded bg-slate-800/60 px-1 text-slate-300">stop()</code> runs even if the wrapped function throws an exception, preventing the overlay from getting permanently stuck.
    </p>
  </div>

  <!-- Usage example -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-slate-200">Usage</h3>
    <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300 leading-relaxed"><code><span class="text-slate-600">// Before: each action manages its own loading flag</span>
<span class="text-slate-500">async function</span> <span class="text-teal-300">saveUser</span>(data) &#123;
  <span class="text-teal-300">isLoading</span> = <span class="text-amber-300">true</span>;          <span class="text-slate-600">// flickers off between calls</span>
  <span class="text-slate-500">await</span> api.<span class="text-teal-300">save</span>(data);
  <span class="text-teal-300">isLoading</span> = <span class="text-amber-300">false</span>;
&#125;

<span class="text-slate-600">// After: withLoading handles start/stop automatically</span>
<span class="text-slate-500">async function</span> <span class="text-teal-300">saveUser</span>(data) &#123;
  <span class="text-slate-500">await</span> loadingService.<span class="text-teal-300">withLoading</span>(<span class="text-slate-500">async</span> () =&gt; &#123;
    <span class="text-slate-500">await</span> api.<span class="text-teal-300">save</span>(data);
  &#125;);
&#125;</code></pre>
  </div>

</div>
