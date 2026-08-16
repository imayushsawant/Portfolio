import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react'

type SocialLink = {
  href: string
  label: string
  icon?: LucideIcon
  iconPath?: string
}

const LINKS: SocialLink[] = [
  { icon: Github, href: 'https://github.com/imayushsawant', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sawant-ayush/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AyushSawant13', label: 'Twitter' },
  { iconPath: '/hashnode-icon.svg', href: 'https://blog.ayushsawant.dev/', label: 'Hashnode' },
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
          {LINKS.map(({ icon: Icon, iconPath, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 transition-all duration-200 hover:opacity-60"
              style={{ color: 'var(--text-dim)' }}
            >
              {Icon ? (
                <Icon size={15} />
              ) : (
                <span
                  aria-hidden="true"
                  className="block"
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'var(--text-dim)',
                    maskImage: `url(${iconPath})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: 'contain',
                    WebkitMaskImage: `url(${iconPath})`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    WebkitMaskSize: 'contain',
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
