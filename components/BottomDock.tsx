'use client'

import { motion } from 'framer-motion'
import { Home, FileText, Github, Linkedin, Download, BookOpen } from 'lucide-react'

type DockItem = {
  label: string
  href: string
  icon: React.ReactNode
  download?: boolean
  onClick?: () => void
}

// X (Twitter) icon - custom SVG since lucide doesn't have the new X logo
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const DOCK_ITEMS: DockItem[] = [
  {
    label: 'Home',
    href: '#',
    icon: <Home size={20} />,
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    icon: <FileText size={20} />,
  },
  {
    label: 'Blog',
    href: 'https://blog.ayushsawant.dev',
    icon: <BookOpen size={20} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/imayushsawant',
    icon: <Github size={20} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sawant-ayush/',
    icon: <Linkedin size={20} />,
  },
  {
    label: 'X',
    href: 'https://x.com/AyushSawant13',
    icon: <XIcon />,
  },
  {
    label: 'Download CV',
    href: '/resume.pdf',
    icon: <Download size={20} />,
    download: true,
  },
]

export default function BottomDock() {
  return (
    <motion.div
      className="bottom-dock"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="dock-inner">
        {DOCK_ITEMS.map((item) => {
          const isExternal = item.href.startsWith('http') || item.href.startsWith('mailto:')
          const props: Record<string, unknown> = {
            className: 'dock-icon',
            'aria-label': item.label,
          }

          if (item.onClick) {
            return (
              <button
                key={item.label}
                {...props}
                onClick={item.onClick}
              >
                <span className="dock-tooltip">{item.label}</span>
                {item.icon}
              </button>
            )
          }

          return (
            <a
              key={item.label}
              href={item.href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(item.download ? { download: true } : {})}
              {...props}
            >
              <span className="dock-tooltip">{item.label}</span>
              {item.icon}
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}
