// src/components/sections/Projects.jsx
// Shows project cards with a "+X more" reveal when count > DISPLAY_LIMIT.
// Add projects in src/data/projects.js

import { useState } from 'react'
import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
import projects from '../../data/projects'
import { DISPLAY_LIMIT } from '../../data/config'

function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col h-full">
      {/* Coloured accent bar */}
      <div className="h-1.5 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}80)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3 gap-2">
          <Tag text={project.company} color={project.accent} />
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${project.accent}18` }}
          >
            <svg style={{ color: project.accent }} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-slate-100 leading-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map(tag => (
            <Tag key={tag} text={tag} color={project.accent} />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? projects : projects.slice(0, DISPLAY_LIMIT)
  const extra     = projects.length - DISPLAY_LIMIT

  return (
    <section id="projects" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="What I Built" title="Featured Projects" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}

          {/* "+X more" card */}
          {!showAll && extra > 0 && (
            <FadeIn delay={displayed.length * 80}>
              <button
                onClick={() => setShowAll(true)}
                className="w-full min-h-[200px] rounded-2xl border-2 border-dashed
                           border-indigo-300 dark:border-indigo-700
                           bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-950/40
                           hover:border-indigo-500 dark:hover:border-indigo-500
                           flex flex-col items-center justify-center gap-2
                           transition-all duration-200 cursor-pointer group"
              >
                <span className="font-display font-black text-5xl text-indigo-500 dark:text-indigo-400 leading-none group-hover:scale-110 transition-transform">
                  {extra}+
                </span>
                <span className="text-xs font-bold font-mono uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                  more projects
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-600">
                  Add in projects.js
                </span>
              </button>
            </FadeIn>
          )}
        </div>

        {showAll && extra > 0 && (
          <div className="mt-8 text-center">
            <Button variant="ghost" onClick={() => setShowAll(false)}>
              Show less ↑
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}
