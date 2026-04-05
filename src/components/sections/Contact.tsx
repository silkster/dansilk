import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SectionHeading } from '@/components/ui/SectionHeading';

const contactLinks = [
  {
    icon: Mail,
    label: 'dan@silkster.com',
    href: 'mailto:dan@silkster.com',
  },
  {
    icon: FaGithub,
    label: 'github.com/silkster',
    href: 'https://github.com/silkster',
  },
  {
    icon: FaXTwitter,
    label: '@silksterweb',
    href: 'https://x.com/silksterweb',
  },
  {
    icon: FaLinkedin,
    label: 'linkedin.com/in/silkster',
    href: 'https://linkedin.com/in/silkster',
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading>Contact</SectionHeading>

      <div className="space-y-4">
        {contactLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors group"
          >
            <Icon size={15} className="shrink-0" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
