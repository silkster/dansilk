import type { StackGroup } from '@/types';

export const stackGroups: StackGroup[] = [
  {
    label: 'Primary',
    items: ['React', 'TypeScript', 'Node.js'],
  },
  {
    label: 'Testing & Quality',
    items: ['Jest', 'Cypress', 'Storybook', 'Mock Service Worker'],
  },
  {
    label: 'Architecture',
    items: ['Modular frontend', 'Service-based APIs', 'Typed fixtures', 'Headless CMS'],
  },
  {
    label: 'Currently Exploring',
    items: ['Claude Agent SDK', 'AI automation', 'LLM-integrated tooling'],
  },
];
