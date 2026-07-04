"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const PROJECTS = [
  {
    number: "01",
    title: "Atten-Dance",
    description:
      "AttenDance is an intelligent attendance management platform designed to help students stay on top of their academics. It goes beyond simple attendance tracking by providing meaningful insights, safe skip calculations, recovery planning, and semester-wise organization to make informed decisions throughout the semester.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    github: "https://github.com/imayushsawant/atten-dance",
    demo: "https://atten-dance.ayushsawant.dev/",
    featured: true,
  },
  {
    number: "02",
    title: "Mintlify UI Clone",
    description:
      "A documentation-style UI clone inspired by Mintlify, built to practice structured layouts, navigation systems, and developer-friendly documentation design.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/imayushsawant/Mintlify-clone",
    demo: "https://imayushsawant.github.io/Mintlify-clone/",
    featured: true,
  },
  {
    number: "03",
    title: "Kanban Board App",
    description:
      "A task management interface with drag-and-drop style workflow, focused on UI state handling and component structuring.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github:
      "https://github.com/imayushsawant/learning-lab/tree/main/dom%20projects",
    demo: null,
    featured: false,
  },
  {
    number: "04",
    title: "Colour Palette Generator",
    description:
      "This is a minimalist HEX palette tool powered by pure Vanilla JavaScript.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github:
      "https://github.com/imayushsawant/learning-lab/tree/main/dom%20projects",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            03
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: "var(--border)" }}
          />
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--text-dim)" }}
          >
            Projects
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <h2
          className="font-display text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "var(--text)" }}
        >
          Things I&apos;ve Built
        </h2>
        <p className="text-sm mb-12" style={{ color: "var(--text-dim)" }}>
          A selection of projects I&apos;ve worked on
        </p>
      </SectionReveal>

      {/* Featured 2x grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {PROJECTS.filter((p) => p.featured).map((project, i) => (
          <SectionReveal key={project.title} delay={0.1 + i * 0.1}>
            <div className="project-card p-6 group h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {project.number}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors hover:opacity-70"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors hover:opacity-70"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="font-display text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-200"
                style={{ color: "var(--text)" }}
              >
                {project.title}
                <ArrowUpRight
                  size={14}
                  className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--accent)" }}
                />
              </h3>

              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "var(--text-dim)" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* Smaller 2x grid for others */}
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.filter((p) => !p.featured).map((project, i) => (
          <SectionReveal key={project.title} delay={0.2 + i * 0.1}>
            <div className="project-card p-5 group flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {project.number}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-60"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3 flex-1"
                style={{ color: "var(--text-dim)" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
