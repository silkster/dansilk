import { ExternalLink } from 'lucide-react';
import { Tag } from './Tag';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/40">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-[var(--color-text)]">
          {project.name}
        </h3>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label={`Visit ${project.name}`}
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}
