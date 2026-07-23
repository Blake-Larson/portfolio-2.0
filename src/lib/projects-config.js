export default [
  {
    date: 'Spring 2026',
    title: 'Parent Center',
    slug: 'parent-center',
    url: '',
    description:
      'Co-led the technical build of ABCmouse Parent Center — a SvelteKit parent hub for child progress, profiles, and account settings that runs on the web and inside the native app webview. Owned progress reporting, settings navigation, design-system components, store architecture, and automated test coverage.',
    technologies: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Playwright'],
    img: { src: '', alt: 'Parent Center', type: 'placeholder' }
  },
  {
    date: 'Oct 2025',
    title: 'iOS Alternate Payment Flow',
    slug: 'ios-alternate-payment',
    url: '',
    description:
      "Built both the web and native sides of ABCmouse's iOS/Android alternate payment system — a SvelteKit inbound-gateway that validates deep-linked payloads from native apps (Zod schema, platform/referrer resolution, auth, product-hash translation) and a FlutterAppService that mints short-lived tokens and routes users back via platform-specific deep links or authenticated Flutter web URLs.",
    technologies: ['SvelteKit', 'Zod', 'TypeScript', 'Flutter', 'Vitest', 'WebdriverIO'],
    img: { src: '', alt: 'iOS Alternate Payment Flow', type: 'placeholder' }
  },
  {
    date: 'Apr 1, 2025',
    title: 'Loading Service',
    slug: 'loading-service',
    url: '',
    description:
      'Diagnosed and resolved a production bug where infinite loading screens and simultaneous overlay conflicts were degrading the user experience. Designed a reference-counted singleton with a <code>withLoading(fn)</code> wrapper that guarantees start/stop pairing via <code>finally</code>, then retrofitted it across async actions app-wide.',
    technologies: ['JavaScript', 'Svelte', 'SvelteKit', 'Singleton Pattern'],
    img: { src: '', alt: 'Loading Service', type: 'placeholder' }
  },
  {
    date: 'June 20, 2025',
    title: 'Home Page Redesign',
    slug: 'home-page-redesign',
    url: '',
    description:
      "Led the technical implementation of ABCmouse.com's home page redesign, developing an optimized image service that reduced load times by 40%. Built a touch-enabled carousel with accessibility features, and architected a JSON configuration system using JSDoc Types. The project showcases effective AI collaboration through strategic prompt engineering and systematic development practices.",
    technologies: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'JSDoc Types'],
    img: { src: '/assets/home-page-demo.mp4', alt: 'ABCmouse', type: 'video' }
  }
];
