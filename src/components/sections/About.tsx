import { useEffect, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  useEffect(() => {
    if (!isPhotoOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPhotoOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isPhotoOpen]);

  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>About</SectionHeading>

      <div className="flex flex-col sm:flex-row gap-10">
        {/* Headshot */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => setIsPhotoOpen(true)}
            aria-label="View full-size photo"
            className="block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <img
              src="/img/headshot.png"
              alt="Dan Silk"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-[var(--color-border)] cursor-pointer transition-opacity hover:opacity-90"
            />
          </button>
        </div>

        <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p>
            I've been building software for more than 25 years. I've watched plenty of
            technologies, frameworks, and "next big things" come and go. Through all of it, I've
            developed a strong preference for systems that are easy to understand, code that's
            straightforward to maintain, and tools that make people more productive instead of
            adding process for its own sake.
          </p>
          <p>
            By day, I'm a Staff Engineer at Warner Bros. Discovery. I help build the editorial
            and content management tools behind HBO Max, Discovery+, and more.
          </p>
          <p>
            Outside of work, I run{' '}
            <a
              href="https://silkster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Silkster
            </a>, a founder-focused advisory and build studio. I help
            entrepreneurs, small businesses, and community organizations get a real web presence
            fast. My main focus is{' '}
            <a
              href="https://sites.silkster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Silkster Sites
            </a>: custom design, hosting, and ongoing management,
            built on a CMS I developed in React and Vite. Behind the scenes it runs on my own
            automation toolkit and a client Hub app. Work that used to take agencies weeks, I turn
            around in days. I build for small businesses, non-profits, creators, professional  
            services and trades. I also run{' '}
            <a
              href="https://ideas.silkster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Silkster Ideas
            </a>, which helps founders discover and 
            validate startup ideas before they build.
          </p>
          <p>
            I'm based in the Washington, DC area. I spend a lot of my time on AI-assisted development, 
            automation, investing, and the occasional project that's more ambitious than it needs to be.
          </p>
        </div>
      </div>

      {isPhotoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-size photo of Dan Silk"
          onClick={() => setIsPhotoOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setIsPhotoOpen(false)}
            aria-label="Close full-size photo"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            &times;
          </button>
          <img
            src="/img/wb-studio-tour.png"
            alt="Dan Silk"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
