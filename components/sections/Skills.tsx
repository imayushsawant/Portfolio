'use client'

import SectionReveal from '@/components/SectionReveal'

const SKILL_GROUPS = [
  {
    category: 'Frontend & UI',
    emoji: '🎨',
    skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Recharts', 'Leaflet', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & Systems',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'Socket.IO', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Prisma ORM', 'Drizzle ORM'],
  },
  {
    category: 'Tools, Auth & Cloud',
    emoji: '🛠',
    skills: ['Git', 'Docker', 'Better Auth', 'Cloudflare R2', 'Postman', 'npm'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding max-w-6xl mx-auto"
    >
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            02
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            Skills
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          My Tech Stack
        </h2>
        <p className="text-sm mb-12" style={{ color: 'var(--text-dim)' }}>
          Tools I use to bring ideas to life
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_GROUPS.map(({ category, emoji, skills }, groupIdx) => (
          <SectionReveal key={category} delay={0.1 + groupIdx * 0.1}>
            <div
              className="rounded-xl p-6 h-full"
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{emoji}</span>
                <h3 className="font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
