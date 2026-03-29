import { FaGithub } from 'react-icons/fa6';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>Projects</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <a
        href="https://github.com/silkster"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        <FaGithub size={14} />
        More on GitHub
      </a>
    </section>
  );
}
