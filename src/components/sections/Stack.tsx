import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { stackGroups } from '@/data/stack';

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>Stack</SectionHeading>

      <div className="space-y-6">
        {stackGroups.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="text-xs text-[var(--color-muted)] font-mono w-36 shrink-0 pt-0.5">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
