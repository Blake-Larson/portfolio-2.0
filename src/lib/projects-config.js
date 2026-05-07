export default [
  {
    date: 'Apr 1, 2024',
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
