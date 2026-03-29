import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Silkster',
    description:
      'AI-powered platform for discovering and validating startup ideas — curated from real user pain points, with validation workflows, recommended stacks, and founder roadmaps.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express'],
    url: 'https://silkster.com',
  },
  {
    name: 'Silkster CMS',
    description:
      'Headless CMS with a public REST API powering multiple client websites. Built to make launching and managing small-org sites fast and maintainable.',
    stack: ['React', 'Vite', 'TypeScript', 'Express'],
    url: 'https://api.silkster.com',
  },
  {
    name: 'Chief of Staff',
    description:
      'Personal AI agent for managing Warner Bros. Discovery day-to-day work — surfacing priorities, drafting communications, and reducing context-switching overhead.',
    stack: ['Claude Agent SDK', 'TypeScript', 'Node.js'],
  },
  {
    name: 'Blackwater DAR',
    description:
      'Website for a Daughters of the American Revolution chapter, built on the Silkster CMS platform.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://blackwaterdar.org',
  },
  {
    name: 'Paula Raney Newman',
    description:
      'Artist portfolio and e-commerce site, built on the Silkster CMS platform.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://paularaneynewman.com',
  },
  {
    name: 'Thomas KOFC',
    description:
      'Website for a Knights of Columbus council, built on the Silkster CMS platform.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://thomaskofc2010.org',
  },
];
