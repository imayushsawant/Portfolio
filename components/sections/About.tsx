'use client'

import SectionReveal from '@/components/SectionReveal'
import { Dumbbell, MapPin, Code2, Zap } from 'lucide-react'

const STATS = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Technologies', value: '15+' },
  { label: 'CGPA', value: '8.89' },
  { label: 'System Design', value: 'Learning' }
]

const TRAITS = [
  { icon: Code2, label: 'Clean Code Advocate' },
  { icon: Zap, label: 'Performance Focused' },
  { icon: Dumbbell, label: 'Powerlifter' },
  { icon: MapPin, label: 'Based in Pune, India' },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding max-w-6xl mx-auto"
    >
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            01
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            About
          </span>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <div>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
              Building things that{' '}
              <em className="text-gradient not-italic">actually matter</em>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-dim)' }}>
              Full-Stack MERN Developer building high-performance, utility-driven web
              applications. I care deeply about developer experience, clean architecture,
              and shipping things that work reliably at scale.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
              When I&apos;m not at my keyboard, I&apos;m powerlifting or travelling.
              Currently focused on mastering scalable system architecture and
              engineering production-ready systems.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {TRAITS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg-3)',
                    color: 'var(--text-dim)',
                  }}
                >
                  <Icon size={11} style={{ color: 'var(--accent)' }} />
                  {label}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Right — stats grid */}
        <SectionReveal delay={0.15} direction="right">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ label, value }) => (
              <div
                key={label}
                className="project-card p-6 flex flex-col gap-1"
              >
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {value}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Terminal snippet */}
          <div
            className="mt-4 rounded-xl p-4 font-mono text-xs leading-6"
            style={{ background: 'var(--bg-3)', border: '1px solid var(--border)' }}
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
            </div>
            <div style={{ color: 'var(--text-dim)' }}>
              <span style={{ color: 'var(--volt)' }}>✓</span> npm run build
            </div>
            <div style={{ color: 'var(--text-dim)' }}>
              <span style={{ color: 'var(--sky)' }}>info</span> build complete in 1.2s
            </div>
            <div>
              <span style={{ color: 'var(--accent)' }}>→</span>{' '}
              <span style={{ color: 'var(--text)' }}>Deploying to production...</span>
            </div>
            <div style={{ color: '#39d353' }}>✔ Live!</div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
