import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Projects } from '@/components/sections/Projects';
import { Stack } from '@/components/sections/Stack';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main>
        <Hero />
        <div className="border-t border-[var(--color-border)]">
          <About />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Work />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Projects />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Stack />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
