'use client'

import { motion } from 'framer-motion'
import { Home, FileText, Github, Linkedin, Download, BookOpen, ArrowUpRight } from 'lucide-react'

// X (Twitter) icon - custom SVG since lucide doesn't have the new X logo
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const FOOTER_LINKS = [
  { label: 'Home', href: '#', icon: <Home size={20} />, onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { label: 'Resume', href: '/resume.pdf', icon: <FileText size={20} /> },
  { label: 'Blog', href: 'https://blog.ayushsawant.dev', icon: <BookOpen size={20} /> },
  { label: 'GitHub', href: 'https://github.com/imayushsawant', icon: <Github size={20} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sawant-ayush/', icon: <Linkedin size={20} /> },
  { label: 'X (Twitter)', href: 'https://x.com/AyushSawant13', icon: <XIcon /> },
  { label: 'Download CV', href: '/resume.pdf', icon: <Download size={20} />, download: true },
]

export default function FooterLinks() {
  return (
    <motion.section 
      className="pt-8 pb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-heading font-doto">Explore</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {FOOTER_LINKS.map((link, i) => {
          const isExternal = link.href.startsWith('http')
          
          const CardContent = () => (
            <>
              <div className="flex justify-between items-start mb-4 text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors">
                {link.icon}
                {isExternal && <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
              </div>
              <span className="font-mono text-sm font-medium text-[var(--text)]">{link.label}</span>
            </>
          )

          const wrapperClass = "group block p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hover)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"

          if (link.onClick) {
            return (
              <button
                key={link.label}
                className={wrapperClass + " text-left w-full h-full cursor-pointer"}
                onClick={link.onClick}
              >
                <CardContent />
              </button>
            )
          }

          return (
            <a
              key={link.label}
              href={link.href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.download ? { download: true } : {})}
              className={wrapperClass}
            >
              <CardContent />
            </a>
          )
        })}
      </div>
    </motion.section>
  )
}
