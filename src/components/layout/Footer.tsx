export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8 mt-24">
      <div className="mx-auto max-w-3xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-[var(--color-muted)]">
          dansilk.com
        </span>
        <span className="text-xs text-[var(--color-muted)]">
          © {year} Dan Silk
        </span>
      </div>
    </footer>
  );
}
