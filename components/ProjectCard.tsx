'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, X } from 'lucide-react'

type Project = {
  title: string
  date: string
  logo: string
  description: string[]
  tech: string[]
  github?: string
  demo?: string
  npm?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="project-item">
      <div
        className="project-header"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {/* Project Logo */}
        <div
          className={`project-logo ${
            project.title === 'Axon' ? 'p-0 overflow-hidden bg-black border-neutral-800' : ''
          }`}
        >
          {project.logo.startsWith('/') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo}
              alt={project.title}
              className={
                project.title === 'Axon'
                  ? 'w-full h-full object-cover rounded-[inherit]'
                  : 'w-8 h-8 object-contain'
              }
            />
          ) : (
            <span>{project.logo}</span>
          )}
        </div>

        {/* Project Info */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-date">{project.date}</p>
        </div>

        {/* Action Icons */}
        <div className="project-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn"
              aria-label={`${project.title} GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          )}
          {project.npm && (
            <a
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn hover:text-[#CB3837]"
              aria-label={`${project.title} on npm`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
              </svg>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn"
              aria-label={`${project.title} Live Demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          )}
          <button
            className="project-action-btn"
            aria-label={expanded ? 'Collapse' : 'Expand'}
            onClick={(e) => {
              e.stopPropagation()
              setExpanded(!expanded)
            }}
          >
            {expanded ? <X size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expandable Body */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="project-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="project-body-inner">
              <ul>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
