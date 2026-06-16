import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Silkster',
    description:
      'A founder-focused advisory and build studio. Silkster helps founders and small businesses ship a real web presence fast. Pages, offers, and MVPs, not endless planning. The goal is to remove the technical barriers so owners can focus on the work they care about.',
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
