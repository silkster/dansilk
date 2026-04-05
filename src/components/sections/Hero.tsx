import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-3xl px-6 pt-24 pb-20"
    >
      <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-6">
        Staff Engineer · Founder · Builder
      </p>

      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)] leading-tight mb-6">
        30 years of software.
        <br />
        Still curious.
      </h1>

      <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-10 max-w-xl">
        Dan Silk — Staff Engineer at Warner Bros. Discovery. Founder of{' '}
        <a
          href="https://silkster.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:underline"
        >
          Silkster
        </a>
        . Based in Washington, DC.
      </p>

      <div className="flex items-center gap-5">
        <a
          href="https://silkster.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] hover:bg-[var(--color-accent-dim)] transition-colors"
        >
          Visit Silkster →
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/silkster"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/silkster"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/silksterweb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
