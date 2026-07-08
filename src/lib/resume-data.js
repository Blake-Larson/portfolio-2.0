/** @typedef {{ role: string, company: string, url?: string, showCompany?: boolean, start: string, end: string, bullets: string[] }} ResumeExperience */

export const contact = {
  name: 'Blake Larson',
  email: 'Blarson224@gmail.com',
  phone: '707-321-4090',
  website: 'https://blakelarson.dev',
  websiteLabel: 'blakelarson.dev',
  github: 'https://github.com/Blake-Larson',
  githubLabel: 'github.com/Blake-Larson',
  summary:
    'Software engineer specializing in frontend systems and API integration — connecting complex backend services, payment processors, and native apps to polished, production-grade user experiences.'
};

export const selectedProject = {
  title: 'iOS Alternate Payment Flow',
  description:
    "Built both the web and native sides of ABCmouse's iOS alternate payment system — a SvelteKit gateway that receives deep-linked users from native iOS and Android apps, validates a signed JSON payload (Zod schema: path, token, adid, country, platform), resolves platform context and product experience, and safely defers navigation to subscription or reactivation flows with serialized pass-through state. Paired with a FlutterAppService that mints short-lived backend auth tokens and routes users back to the app via platform-specific deep links or authenticated Flutter web URLs with device tracking."
};

/** @type {ResumeExperience[]} */
export const experiences = [
  {
    role: 'Software Engineer III',
    company: 'Age of Learning',
    url: 'https://www.ageoflearning.com/',
    start: 'Jul 2025',
    end: 'Present',
    bullets: [
      'Architected a SvelteKit inbound-gateway for iOS/Android alternate payment flows: Zod payload validation, platform/referrer resolution, persistent authentication, analytics tracking, Sentry error reporting, and E2E test coverage.',
      'Drove plan-first LLM-assisted development: scoped work from ticket + codebase context, iterated on implementation plans to resolve ambiguity before coding, delegated execution through structured prompts/subagents, and validated output through manual testing, automated tests, and personal code review.',
      'Engineered a FlutterAppService that mints short-lived auth tokens and routes users to platform-specific native deep links or Flutter web auth URLs with device tracking and registration-path-aware post-login destinations.',
      'Debugged production issues by triaging Datadog logs, querying user event data in Snowflake by UUID, and using findings to isolate root causes in the web client or providing context for backend engineers.'
    ]
  },
  {
    role: 'Software Engineer II',
    company: 'Age of Learning',
    url: 'https://www.ageoflearning.com/',
    showCompany: false,
    start: 'May 2023',
    end: 'Jul 2025',
    bullets: [
      'Implemented Apple Pay end-to-end (~30% adoption on eligible devices) across a shared monorepo package and the browser layer: ApplePayPaymentStrategy class, ApplePaySession v14 session management, merchant validation via a backend preprocess endpoint, and applePayCapabilities gating across environments.',
      'Resolved infinite loading screens and overlay conflicts by designing a reference-counted LoadingService singleton with a withLoading(fn) wrapper that guarantees cleanup via finally, then retrofitted it across async actions app-wide.',
      'Built a Page lifecycle controller used across all marketing routes, unifying SEO metadata, JSON-LD schema, auth policies, A/B condition resolution, and analytics initialization into a single, testable class.',
      'Authored WebdriverIO + Mocha E2E suites covering 10 routes across 4 CI pipelines, validating pageVariant segmentation across device emulation, deep links, account states, and A/B overrides; built reusable page-object and test account-factory patterns.'
    ]
  },
  {
    role: 'Software Engineer',
    company: '100Devs',
    url: 'https://100devs.org/',
    start: 'Jan 2021',
    end: 'May 2023',
    bullets: [
      'Built React applications with component-level state management for contract client projects, collaborating with small development teams to scope and deliver real software for paying clients.',
      'Developed fluency in HTML, CSS, and JavaScript through an intensive project-based program until core UI implementation was reliable and second nature.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Freelance Dev',
    start: 'Jun 2020',
    end: 'May 2023',
    bullets: [
      'Designed and deployed static websites and marketing-focused web experiences for small business clients — handling SEO fundamentals, deployment on Netlify and Vercel, and all aspects of client communication from discovery through delivery.'
    ]
  }
];

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  familiar: ['Dart/Flutter', 'PHP'],
  libraries: ['Svelte', 'SvelteKit', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'Netlify',
    'Vercel',
    'Figma',
    'WebdriverIO',
    'Vitest',
    'Zod',
    'Datadog',
    'Snowflake',
    'Cursor',
    'LLM-assisted development'
  ]
};

export const education = {
  school: 'CSU, Long Beach',
  degree: 'Bachelor of Arts in Vocal Performance & Choral Music Education'
};

export const interests =
  'The great outdoors, disc golf, woodworking, quartet singing, science fiction & fantasy novels, gardening with my wife';
