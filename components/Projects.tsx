'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'Atten-Dance',
    date: '07.2026 — ∞',
    logo: '/atten-dance-logo.svg',
    description: [
      'Built and deployed a production attendance analytics platform with 15+ active users and 900+ attendance records in its first two months',
      'Designed normalized relational data models with PostgreSQL and Drizzle ORM',
      'Implemented Google OAuth via Better Auth for secure authentication',
      'Built attendance analytics, skip-limit calculations, recovery planning, and scenario-based attendance prediction',
      'Clean, responsive UI with real-time data updates',
    ],
    tech: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Better Auth'],
    github: 'https://github.com/imayushsawant/atten-dance',
    demo: 'https://atten-dance.ayushsawant.dev/',
  },
  {
    title: 'Polloye',
    date: '08.2026 — ∞',
    logo: '/polloye-logo-white.svg',
    description: [
      'Built and deployed a full-stack real-time quiz app supporting multi-user live sessions with timed questions and analytics',
      'Real-time WebSocket communication via Socket.IO with authenticated connections',
      'Deployed on Azure via Docker, PM2, and Caddy reverse proxy',
      'Live session management with timed questions, scoring, and post-quiz analytics',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Docker', 'Azure'],
    github: 'https://github.com/imayushsawant/polloye',
    demo: 'https://polloye.ayushsawant.dev/',
  },
  {
    title: 'Axon',
    date: '09.2026 — ∞',
    logo: '/Axon-logo-initial.svg',
    description: [
      'TypeScript SDK/npm package for intelligent LLM request routing across OpenAI, Anthropic, and Google Gemini',
      'Two-stage classification pipeline: heuristic gating plus LLM-based prompt scoring',
      'Fallback handling for graceful degradation across providers',
      'Automated eval harness for measuring and optimizing routing accuracy',
      'Published to npm as axon-llmrouter',
    ],
    tech: ['TypeScript', 'Node.js', 'OpenAI', 'Anthropic', 'Google Gemini', 'npm'],
    github: 'https://github.com/imayushsawant/axon',
    npm: 'https://www.npmjs.com/package/axon-llmrouter',
  },
]

export default function Projects() {
  return (
    <section className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="section-heading font-doto"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
