import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const LINKS = [
  { icon: Github, href: 'https://github.com/imayushsawant', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sawant-ayush/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AyushSawant13', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="font-display text-lg font-bold" style={{ color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)' }}>A</span>yush
          <span style={{ color: 'var(--accent)' }}>.</span>
        </p>

        <p className="text-xs font-mono" style={{ color: 'var(--text-dim)' }}>
          Designed & Built by{' '}
          <span style={{ color: 'var(--accent)' }}>Ayush Sawant</span>{' '}
          &copy; {new Date().getFullYear()}
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 transition-all duration-200 hover:opacity-60"
              style={{ color: 'var(--text-dim)' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
