interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded px-2 py-0.5 text-xs font-mono text-[var(--color-muted)] border border-[var(--color-border)] bg-[var(--color-surface)]">
      {children}
    </span>
  );
}
