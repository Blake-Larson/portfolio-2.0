<script lang="ts">
  import projects from '$lib/projects-config.js';

  const project = projects.find((p: { slug: string }) => p.slug === 'parent-center');
</script>

<svelte:head>
  <title>{project?.title} | Blake Larson</title>
  <meta name="description" content={project?.description} />
</svelte:head>

<div class="mb-12">
  <div
    class="relative mb-8 flex h-48 w-full flex-col gap-4 overflow-hidden rounded-lg border-2 border-slate-200/10 bg-slate-800/40 p-5 sm:h-56">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 shrink-0 rounded-full bg-slate-700/60"></div>
      <div class="space-y-2">
        <div class="h-3 w-28 rounded bg-slate-700/60"></div>
        <div class="h-2 w-40 rounded bg-slate-700/40"></div>
      </div>
    </div>
    <div class="grid flex-1 grid-cols-3 gap-3">
      <div class="rounded-md bg-slate-700/40"></div>
      <div class="rounded-md bg-slate-700/40"></div>
      <div class="rounded-md bg-slate-700/40"></div>
    </div>
    <div class="space-y-2">
      <div class="h-2 w-full rounded bg-slate-700/50"></div>
      <div class="h-2 w-5/6 rounded bg-slate-700/40"></div>
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

<div class="space-y-16 md:space-y-24">
  <!-- Progress Report -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Child Progress Report</h3>
      <p class="text-base text-slate-400">
        Built the per-child progress experience parents use to understand learning activity —
        lifetime and last-7-day stats, a recent-activity feed, and a reading/math learning path with
        unit and lesson progress. Designed dedicated skeleton, empty, and error states so the page
        stays clear while data loads or when a child has no activity yet.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Activity Stats
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Learning Path
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Empty / Error States
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`// Portfolio-safe mock shapes (not production types)

type ProgressReport = {
  childId: string;
  childName: string;
  lifetime: {
    activitiesCompleted: number;
    pathActivitiesCompleted: number;
  };
  last7Days: {
    startDate: string;
    endDate: string;
    totals: {
      activitiesCompleted: number;
      pathActivitiesCompleted: number;
      minutesPlayed: number;
    };
  };
  recentActivities: Array<{
    id: string;
    title: string;
    category: string;
    completedAt: string;
  }>;
};

type LearningPath = {
  subject: 'reading' | 'math';
  gradeLabel: string;
  progressPercent: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  currentUnit: {
    unitNumber: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      status: 'not_started' | 'in_progress' | 'completed';
    }>;
  };
};

const example: ProgressReport = {
  childId: 'child_01',
  childName: 'Alex',
  lifetime: { activitiesCompleted: 142, pathActivitiesCompleted: 98 },
  last7Days: {
    startDate: '2026-03-10',
    endDate: '2026-03-16',
    totals: {
      activitiesCompleted: 12,
      pathActivitiesCompleted: 8,
      minutesPlayed: 95
    }
  },
  recentActivities: [
    {
      id: 'act_1',
      title: 'Letter Sounds',
      category: 'Reading',
      completedAt: '2026-03-16T18:20:00Z'
    }
  ]
};`}</code></pre>
    </div>
  </div>

  <!-- Settings Shell -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Settings Shell &amp; View Routing</h3>
      <p class="text-base text-slate-400">
        Architected a responsive settings shell — stacked navigation on mobile, sidebar rail plus
        content panel on desktop — and used a single route with <code class="text-teal-300">?view=</code>
        sub-views for deeplinkable account and profile flows. Shared back-navigation config keeps
        multi-step flows (edit profile, membership details) consistent without nesting a deep route
        tree.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Responsive Shell
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Query View Slugs
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Deeplinkable Flows
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`// Generic recreation of the view-map pattern

const settingsViews = {
  account: ['overview', 'update-email', 'membership'],
  'child-profiles': ['list', 'add-child', 'edit-child'],
  'app-settings': ['overview', 'language']
} as const;

type Section = keyof typeof settingsViews;
type ViewFor<S extends Section> = (typeof settingsViews)[S][number];

function settingsHref(section: Section, view: ViewFor<Section>) {
  return \`/settings/\${section}?view=\${view}\`;
}

// Example: /settings/child-profiles?view=edit-child
settingsHref('child-profiles', 'edit-child');`}</code></pre>
    </div>
  </div>

  <!-- Child Profiles -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Child Profiles</h3>
      <p class="text-base text-slate-400">
        Implemented add and edit child-profile flows with display name, birth date, and
        reading/math level pickers presented as bottom sheets, plus confirmation dialogs when a
        level change would affect the learning path. Kept profile forms driven by typed view models
        so validation and UI stay aligned.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Add / Edit Flows
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Level Pickers
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Confirmation Dialogs
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`type ChildProfile = {
  id: string;
  displayName: string;
  birthMonth: number | null;
  birthYear: number | null;
  readingLevelKey: string | null;
  mathLevelKey: string | null;
};

type GradeOption = { key: string; label: string };

const gradeOptions: GradeOption[] = [
  { key: 'prek', label: 'Pre-K' },
  { key: 'k', label: 'Kindergarten' },
  { key: 'grade-1', label: '1st Grade' }
];

const draft: ChildProfile = {
  id: 'child_01',
  displayName: 'Alex',
  birthMonth: 4,
  birthYear: 2019,
  readingLevelKey: 'k',
  mathLevelKey: 'prek'
};`}</code></pre>
    </div>
  </div>

  <!-- Design System -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Design System &amp; Shared Components</h3>
      <p class="text-base text-slate-400">
        Helped establish a Figma-sourced token pipeline into Tailwind so spacing, color, and type
        stayed consistent across Parent Center. Built and reused shared primitives — buttons,
        inputs, dialogs, sheets, and layout shells — so feature routes composed UI instead of
        reinventing patterns.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Design Tokens
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Shared Primitives
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Tailwind Theme
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`/* Genericized token → utility mapping */
:root {
  --color-surface: #0f172a;
  --color-accent: #2dd4bf;
  --space-panel: 1.5rem;
  --radius-card: 0.75rem;
}

/* Feature pages compose shared primitives */
<SettingsPanel title="Child profiles">
  <TextField label="Display name" bind:value={name} />
  <BottomSheet open={levelSheetOpen}>
    <GradePicker options={gradeOptions} onSelect={setLevel} />
  </BottomSheet>
</SettingsPanel>`}</code></pre>
    </div>
  </div>

  <!-- Store Architecture -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Store Architecture</h3>
      <p class="text-base text-slate-400">
        Structured client state around a base store and action pattern so UI components called typed
        actions instead of wiring fetch logic inline. Cross-cutting concerns — loading flags, retry,
        and debounce — lived on the action layer, which kept progress, profile, and settings views
        thinner and easier to test.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Base Store
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Typed Actions
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Loading / Retry
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`// Generic recreation — invented names, not production source

class BaseStore<T> {
  constructor(private state: T) {}
  get() { return this.state; }
  patch(partial: Partial<T>) {
    this.state = { ...this.state, ...partial };
  }
}

type ReportState = {
  report: ProgressReport | null;
  isLoading: boolean;
  error: string | null;
};

class LoadChildReport {
  constructor(private store: BaseStore<ReportState>) {}

  async run(childId: string) {
    this.store.patch({ isLoading: true, error: null });
    try {
      const report = await fetchReport(childId); // mocked in portfolio
      this.store.patch({ report, isLoading: false });
    } catch {
      this.store.patch({
        isLoading: false,
        error: 'Unable to load progress'
      });
    }
  }
}`}</code></pre>
    </div>
  </div>

  <!-- Native Webview Bridge -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Native Webview Bridge</h3>
      <p class="text-base text-slate-400">
        Supported dual deployment: the same Parent Center UI runs as a standalone web app and as an
        embedded webview inside the native app. A thin bridge layer handled close-to-app navigation,
        device settings (microphone, notifications, language), and in-app vs browser presentation
        differences without leaking platform details into feature pages.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Dual Runtime
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Bridge Events
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Device Settings
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`// Generic bridge sketch

type BridgeEvent =
  | { type: 'CLOSE_PARENT_CENTER' }
  | { type: 'SET_LOCALE'; locale: string }
  | { type: 'SET_MIC_ENABLED'; enabled: boolean };

function postToNative(event: BridgeEvent) {
  window.parent?.postMessage({ source: 'parent-center', event }, '*');
}

function isInApp(): boolean {
  return document.documentElement.dataset.runtime === 'webview';
}

// Feature UI branches on runtime, not platform APIs
if (isInApp()) {
  postToNative({ type: 'CLOSE_PARENT_CENTER' });
} else {
  history.back();
}`}</code></pre>
    </div>
  </div>

  <!-- Testing -->
  <div class="flex flex-col gap-8 md:gap-12">
    <div class="flex-1">
      <h3 class="mb-4 text-xl font-semibold text-slate-200">Testing</h3>
      <p class="text-base text-slate-400">
        Covered critical parent flows with Vitest unit and component tests for mappers, stores, and
        UI states, plus Playwright end-to-end coverage for settings navigation and profile editing.
        Used page-object helpers and fixtures so suite setup stayed readable as the surface area
        grew.
      </p>
      <ul class="mt-4 flex flex-wrap" aria-label="Features">
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Vitest
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Playwright
          </div>
        </li>
        <li class="mr-1.5 mt-2">
          <div
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            Page Objects
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <pre class="overflow-x-auto rounded-lg bg-slate-800/50 p-4 text-sm text-slate-300">
<code>{`// Illustrative E2E structure (fictional selectors)

class ChildProfilesPage {
  constructor(private page: Page) {}

  async openEdit(childName: string) {
    await this.page.getByRole('button', { name: childName }).click();
    await this.page.getByRole('link', { name: 'Edit profile' }).click();
  }

  async setDisplayName(name: string) {
    await this.page.getByLabel('Display name').fill(name);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

test('parent can rename a child profile', async ({ page }) => {
  const profiles = new ChildProfilesPage(page);
  await page.goto('/settings/child-profiles?view=list');
  await profiles.openEdit('Alex');
  await profiles.setDisplayName('Alex R.');
  await expect(page.getByText('Alex R.')).toBeVisible();
});`}</code></pre>
    </div>
  </div>
</div>
