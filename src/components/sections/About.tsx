import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>About</SectionHeading>

      <div className="flex flex-col sm:flex-row gap-10">
        {/* Headshot placeholder */}
        <div className="shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
            <span className="font-mono text-xl text-[var(--color-muted)]">DS</span>
          </div>
        </div>

        <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p>
            I've been writing software for 30 years, which means I've watched every trend arrive,
            peak, and get replaced. What I've kept from that time: a preference for systems that are
            easy to understand, code that doesn't require archaeology to maintain, and tools that
            actually reduce friction rather than just adding ceremony.
          </p>
          <p>
            By day I'm a Staff Engineer at Warner Bros. Discovery, leading a team that builds
            editorial tools for Max, Discovery+, and MotorTrend. Outside of that, I run{' '}
            <a
              href="https://silkster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Silkster
            </a>{' '}
            — a platform for finding and validating startup ideas.
          </p>
          <p>
            I'm based in Washington, DC. I'm interested in AI tooling, automation, investing, and
            the occasional absurdly ambitious project.
          </p>
        </div>
      </div>
    </section>
  );
}
