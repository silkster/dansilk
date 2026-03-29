import { SectionHeading } from '@/components/ui/SectionHeading';
import { workHistory } from '@/data/work';

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>Work</SectionHeading>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-border)]" />

        <div className="space-y-10 pl-8">
          {workHistory.map((entry, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                  entry.current
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                    : 'border-[var(--color-border)] bg-[var(--color-bg)]'
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                <div>
                  <span className="font-semibold text-[var(--color-text)] text-sm">
                    {entry.title}
                  </span>
                  <span className="text-[var(--color-muted)] text-sm"> · {entry.company}</span>
                </div>
                <span className="font-mono text-xs text-[var(--color-muted)] shrink-0">
                  {entry.period}
                </span>
              </div>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
