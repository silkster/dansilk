import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Silkster',
    description:
      'A two-product company building tools for entrepreneurs and small organizations. Silkster Ideas is an AI-powered platform for discovering and validating startup ideas. Silkster Sites designs and manages custom websites for small businesses and nonprofits.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express'],
    url: 'https://silkster.com',
  },
  {
    name: 'Silkster CMS',
    description:
      'Multi-tenant admin platform powering the Silkster Sites client network. Manages content, officers/teams, events, members, pages and more across multiple organization websites via a shared REST API.',
    stack: ['React', 'Vite', 'TypeScript', 'Express'],
    url: 'https://admin.silkster.com',
  },
  {
    name: 'Chief of Staff',
    description:
      'Personal AI agent for managing day-to-day work — surfacing priorities, drafting communications, and reducing context-switching overhead.',
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
    name: 'Thomas KofC',
    description:
      'Website for a Knights of Columbus council, built on the Silkster CMS platform.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://thomaskofc2010.org',
  },
];
