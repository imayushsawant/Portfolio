'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowDown, Download, type LucideIcon } from 'lucide-react'

const ROLES = [
  'Full Stack Developer',
  'MERN Engineer',
  'System Architect',
  'Problem Solver',
]

type SocialLink = {
  href: string
  label: string
  icon?: LucideIcon
  iconPath?: string
}

const SOCIAL: SocialLink[] = [
  { icon: Github, href: 'https://github.com/imayushsawant', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sawant-ayush/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/AyushSawant13', label: 'Twitter' },
  { iconPath: '/hashnode-icon.svg', href: 'https://blog.ayushsawant.dev/', label: 'Hashnode' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx]
    let i = displayed.length

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 70)
        return () => clearTimeout(t)
      } else {
        // Pause at full string, then erase
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((prev) => (prev + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 0.06 }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ background: '#58a6ff', opacity: 0.04 }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
          style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-3)',
            color: 'var(--text-dim)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Ayush
          <br />
          <span className="text-gradient">Sawant</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 mb-6 h-8"
        >
          <span
            className="text-lg md:text-xl font-mono"
            style={{ color: 'var(--text-dim)' }}
          >
            &gt;{' '}
            <span style={{ color: 'var(--accent)' }}>{displayed}</span>
            <span className="cursor-blink" style={{ color: 'var(--accent)' }}>
              _
            </span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-dim)' }}
        >
          A coder by day, problem-solver by night. Building high-performance,
          utility-driven web applications — one commit at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </button>
          <a href="/Ayush_Sawant_Resume.pdf" download className="btn-outline">
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-4"
        >
          {SOCIAL.map(({ icon: Icon, iconPath, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-dim)',
                background: 'var(--bg-3)',
              }}
            >
              {Icon ? (
                <Icon size={16} />
              ) : (
                <span
                  aria-hidden="true"
                  className="block"
                  style={{
                    width: 16,
                    height: 16,
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
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: 'var(--text-dim)' }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  )
}
