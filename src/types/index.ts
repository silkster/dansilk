export interface Project {
  name: string;
  description: string;
  stack: string[];
  url?: string;
  githubUrl?: string;
}

export interface WorkEntry {
  company: string;
  title: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface StackGroup {
  label: string;
  items: string[];
}
