interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
        {children}
      </h2>
      <div className="mt-3 h-px w-12 bg-[var(--color-accent)]" />
    </div>
  );
}
