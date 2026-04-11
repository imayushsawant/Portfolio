'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import SectionReveal from '@/components/SectionReveal'
import { useTheme } from '@/components/ThemeProvider'

const RECENT_REPOS = [
  { name: 'cursor-ui-clone', desc: 'Cursor AI editor UI clone', lang: 'TypeScript', stars: 0 },
  { name: 'mintlify-clone', desc: 'Mintlify docs UI clone', lang: 'TypeScript', stars: 0 },
  { name: 'kanban-board', desc: 'Drag-and-drop task board', lang: 'TypeScript', stars: 0 },
  { name: 'todo-app', desc: 'Clean React todo app', lang: 'JavaScript', stars: 0 },
]

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  CSS: '#563d7c',
  HTML: '#e34c26',
}

export default function GitHub() {
  const { theme } = useTheme()
  const statsTheme = theme === 'dark' ? 'dark' : 'default'

  return (
    <section id="github" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            04
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            GitHub
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--text)' }}>
              Open Source Activity
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
              Pushing commits since I learned what a terminal was
            </p>
          </div>
          <a
            href="https://github.com/imayushsawant"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden md:flex"
          >
            <Github size={14} />
            View Profile
          </a>
        </div>
      </SectionReveal>

      {/* GitHub Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <SectionReveal delay={0.15}>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=imayushsawant&show_icons=true&theme=${statsTheme}&hide_border=true&bg_color=${theme === 'dark' ? '0d1117' : 'ffffff'}&title_color=ff6b35&icon_color=ff6b35&text_color=${theme === 'dark' ? 'c9d1d9' : '111827'}&count_private=true`}
              alt="GitHub Stats"
              className="w-full"
              width={495}
              height={195}
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=imayushsawant&layout=compact&theme=${statsTheme}&hide_border=true&bg_color=${theme === 'dark' ? '0d1117' : 'ffffff'}&title_color=ff6b35&text_color=${theme === 'dark' ? 'c9d1d9' : '111827'}`}
              alt="Top Languages"
              className="w-full"
              width={495}
              height={195}
            />
          </div>
        </SectionReveal>
      </div>

      {/* Contribution streak */}
      <SectionReveal delay={0.25}>
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: '1px solid var(--border)' }}>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=imayushsawant&theme=${statsTheme}&hide_border=true&background=${theme === 'dark' ? '0d1117' : 'ffffff'}&ring=ff6b35&fire=ff6b35&currStreakLabel=ff6b35`}
            alt="GitHub Streak"
            className="w-full"
            width={900}
            height={195}
          />
        </div>
      </SectionReveal>

      {/* Pinned repos */}
      <SectionReveal delay={0.3}>
        <h3 className="text-sm font-semibold mb-4 tracking-wide" style={{ color: 'var(--text-dim)' }}>
          Recent Repositories
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {RECENT_REPOS.map((repo, i) => (
            <a
              key={repo.name}
              href={`https://github.com/imayushsawant/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card p-4 group flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github size={13} style={{ color: 'var(--text-dim)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {repo.name}
                  </span>
                </div>
                <ExternalLink
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                />
              </div>
              <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
                {repo.desc}
              </p>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: LANG_COLORS[repo.lang] || '#888' }}
                />
                <span className="text-xs font-mono" style={{ color: 'var(--text-dim)' }}>
                  {repo.lang}
                </span>
              </div>
            </a>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
