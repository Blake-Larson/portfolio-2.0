<script lang="ts">
  import projects from '$lib/projects-config.js';

  const project = projects.find((p: { slug: string }) => p.slug === 'ios-alternate-payment');
</script>

<svelte:head>
  <title>{project?.title} | Blake Larson</title>
  <meta name="description" content={project?.description} />
</svelte:head>

<div class="mb-12">
  <div
    class="relative mb-8 flex h-48 w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-slate-200/10 bg-slate-800/40 p-5 sm:h-56">
    <div class="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-300 sm:gap-3 sm:text-sm">
      <span class="rounded-md bg-slate-700/70 px-2.5 py-1.5">Native App</span>
      <span class="text-teal-400/80" aria-hidden="true">→</span>
      <span class="rounded-md border border-teal-400/30 bg-teal-400/10 px-2.5 py-1.5 text-teal-300"
        >Inbound Gateway</span>
      <span class="text-teal-400/80" aria-hidden="true">→</span>
      <span class="rounded-md bg-slate-700/70 px-2.5 py-1.5">Web Billing</span>
      <span class="text-teal-400/80" aria-hidden="true">→</span>
      <span class="rounded-md bg-slate-700/70 px-2.5 py-1.5">App Return</span>
    </div>
    <p class="mt-4 text-center text-xs text-slate-500">Deep-link gateway · Auth handoff · Product context</p>
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

<div class="space-y-16 md:space-y-24">
  <!-- Problem -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">The Problem</h3>
      <p class="text-base text-slate-400">
        App Store billing rules limited how Age of Learning could offer certain subscription paths
        inside the ABCmouse iOS (and Android) apps. The business needed a trusted web alternate-payment
        path — without dropping auth, attribution identifiers, or product context when users crossed
        the native → web boundary, and without stranding them after purchase when they needed to
        return to the app.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Constraints">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Cross-boundary Auth
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Attribution Continuity
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Product Context
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- System overview -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">System Overview</h3>
      <p class="text-base text-slate-400">
        I owned both sides of the handoff: a client-side SvelteKit inbound-gateway that receives
        deep links from the native apps, validates and processes them, then routes into web
        subscription/reactivation flows; and a FlutterAppService that mints short-lived backend
        auth tokens and sends users back to the app via platform-specific deep links or
        authenticated Flutter web URLs.
      </p>
    </div>
    <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300"><code
        >{`Native app (iOS / Android)
  │  deep link with encoded payload
  ▼
/inbound-gateway
  │  1. Zod-validate payload
  │  2. Resolve platform + referrer
  │  3. Hydrate / gate auth
  │  4. Translate product hashes (store → web)
  │  5. Strip sensitive query params from history
  ▼
Web billing / reactivation destination
  │  (pass-through state re-serialized on ?payload=)
  ▼
FlutterAppService
  │  mint short-lived token
  │  pick native deep link vs Flutter web auth URL
  ▼
Back in app (device tracking + post-login destination)`}</code
      ></pre>
  </div>

  <!-- Inbound gateway -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Inbound Gateway</h3>
      <p class="mb-4 text-base text-slate-400">
        The gateway is a client-only SvelteKit route (<code class="text-slate-300">ssr = false</code>).
        The load function owns pure data processing — parse query params, validate, resolve platform,
        assemble redirect data — while the page component owns side effects (client
        <code class="text-slate-300">goto()</code>). That split avoids hydration timing issues and
        keeps failure modes graceful: invalid or missing data surfaces a fallback UI instead of a
        hard crash.
      </p>
      <p class="text-base text-slate-400">
        Entry URLs carry an encoded JSON <code class="text-slate-300">payload</code>, a
        <code class="text-slate-300">product_uuid</code>, an optional
        <code class="text-slate-300">referrer</code> (which app version sent the link), and optional
        pass-through flags. After a successful process, <code class="text-slate-300">history.replaceState</code>
        strips tokens and payload from the browser history so they do not linger in the address bar.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Schema-first Validation
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Platform Resolution
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Auth Pipeline
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Product Hash Swap
          </div>
        </li>
      </ul>
    </div>

    <div class="flex-1 space-y-4">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300"><code
          >{`// Sanitized Zod schema (illustrative)
const InboundDataSchema = z.object({
  path: z.string().min(1).refine((p) => p.startsWith('/')),
  token: z.string().optional(),
  platform: z.string().optional(), // "ios" | "android" | ...
  countryCode: z.string().optional(),
  adid: z.string().optional(),
  idfa: z.string().optional(),
  udid: z.string().optional(),
  source: z.string().optional(),
  data: z.record(z.any()).optional() // pass-through blob
});

// Example deep-link payload
{
  "token": "mock-session-token",
  "path": "/subscription",
  "platform": "ios",
  "countryCode": "US",
  "adid": "mock-adid-uuid",
  "data": {
    "products": [
      { "type": "monthly", "hash": "hash_monthly_store" },
      { "type": "annual",  "hash": "hash_annual_store" }
    ]
  }
}`}</code
        ></pre>

      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300"><code
          >{`// Platform + referrer → resolved context
// payload.platform × referrer query param

ios      + app_v1  → ios_legacy
ios      + app_v2  → ios_current
android  + app_v1  → android_legacy
android  + app_v2  → android_current
android  + (none)  → android_generic
(other)            → web_default

// Product hash translation before redirect
const PRODUCT_HASH_SWAP_MAP = {
  hash_monthly_store: 'hash_monthly_web',
  hash_annual_store:  'hash_annual_web'
};

// Auth edge cases
// ✓ valid token     → redirect to destination with session
// ✗ missing token   → fallback UI (or destination without auth when allowed)
// ✗ expired campaign token → offer-resend / recovery path
// legacy in-app webview referrer → auth requirement skipped`}</code
        ></pre>
    </div>
  </div>

  <!-- FlutterAppService -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">FlutterAppService</h3>
      <p class="text-base text-slate-400">
        After web billing (or when the native shell needs a trusted return path), FlutterAppService
        mints a short-lived backend auth token and chooses how to send the user home: a
        platform-specific native deep link when the app can open it, or an authenticated Flutter web
        URL otherwise. Device identifiers travel with the handoff for tracking, and the post-login
        destination respects which registration path the user came from — so a reactivation user
        does not land in a first-time onboarding flow.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Short-lived Tokens
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Native Deep Links
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Flutter Web Auth
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Path-aware Destinations
          </div>
        </li>
      </ul>
    </div>
    <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300"><code
        >{`// Public-shaped API surface (illustrative)
type ReturnTarget =
  | { kind: 'native'; url: string }   // platform deep link
  | { kind: 'flutter_web'; url: string };

async function buildAppReturn(options: {
  platform: 'ios' | 'android';
  deviceId: string;
  registrationPath: 'new' | 'reactivation' | 'upgrade';
}): Promise<ReturnTarget> {
  const token = await mintShortLivedToken({
    deviceId: options.deviceId,
    ttlSeconds: 90
  });

  const destination = resolvePostLoginPath(options.registrationPath);

  if (canOpenNativeDeepLink(options.platform)) {
    return {
      kind: 'native',
      url: \`app://auth?token=\${token}&to=\${encodeURIComponent(destination)}\`
    };
  }

  return {
    kind: 'flutter_web',
    url: \`/flutter-auth?token=\${token}&to=\${encodeURIComponent(destination)}\`
  };
}`}</code
      ></pre>
  </div>

  <!-- Testing -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Testing</h3>
      <p class="text-base text-slate-400">
        I owned the gateway’s unit and E2E coverage. Vitest suites pin the Zod schema, platform
        branches, auth edge cases, and product-hash swap behavior with mocked stores and fixtures.
        WebdriverIO E2E scenarios exercise the full redirect chain under device emulation —
        including happy paths, malformed payloads, and auth failures that must stay on the gateway
        and expose the fallback Home / Log In UI.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Vitest + Faker Fixtures
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            WebdriverIO E2E
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Page Object Model
          </div>
        </li>
      </ul>
    </div>
    <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300"><code
        >{`// Unit: schema + hash swap (illustrative)
expect(validateInboundData({ path: 'subscription' })).toBeNull(); // must start with /
expect(swapProductHashes(data).products[0].hash).toBe('hash_monthly_web');

// E2E scenarios covered
// ✓ iOS payload, valid credentials  → subscription destination
// ✓ iOS payload, hash swap          → web hashes in final URL
// ✓ custom pass-through data        → preserved through redirect
// ✓ invalid / missing payload       → stays on gateway, fallback UI
// ✓ invalid token                   → stays on gateway`}</code
      ></pre>
  </div>

  <!-- Outcome -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Outcome</h3>
      <p class="text-base text-slate-400">
        The system shipped in Fall 2025 as ABCmouse’s production alternate-payment path for iOS and
        Android. Native users can leave the app store billing surface, land on a validated web flow
        with their session and product context intact, complete purchase or reactivation, and return
        to the app through a controlled auth handoff — with a test pyramid that covers the
        boundary cases that usually break deep-link gateways.
      </p>
    </div>
  </div>
</div>
