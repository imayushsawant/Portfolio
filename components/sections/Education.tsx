'use client'

import SectionReveal from '@/components/SectionReveal'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            04
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            Education
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text)' }}>
          Academic Background
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="project-card p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div
            className="p-4 rounded-xl shrink-0"
            style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent)' }}
          >
            <GraduationCap size={28} style={{ color: 'var(--accent)' }} />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>
              B.E in Artificial Intelligence and Data Science
            </h3>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
              Dr. D.Y. Patil Institute of Technology, Pune
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--text-dim)' }}>
              <span>📅 2024 – 2028</span>
              <span>
                🎯 CGPA:{' '}
                <strong style={{ color: 'var(--text)' }}>8.77</strong>
              </span>
            </div>
          </div>
          <div
            className="hidden md:flex flex-col items-end gap-1"
          >
            <span
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
            >
              Ongoing
            </span>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
