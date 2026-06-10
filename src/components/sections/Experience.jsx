// src/components/sections/Experience.jsx
// Accordion-style experience cards. One is open by default (index 0).
// Add/edit internships in src/data/experience.js

import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import experience from '../../data/experience'

function ExperienceItem({ exp, isOpen, onToggle }) {
  return (
    <div
      className={`border-2 rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen
          ? 'border-opacity-60 shadow-lg'
          : 'border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600'
        }`}
      style={isOpen ? { borderColor: `${exp.color}70`, boxShadow: `0 4px 24px ${exp.color}18` } : {}}
    >
      {/* Header button */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-4 p-5 text-left transition-colors duration-200
          ${isOpen
            ? 'dark:bg-opacity-10'
            : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750'
          }`}
        style={isOpen ? { backgroundColor: `${exp.color}08` } : {}}
      >
        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border"
          style={{ background: `${exp.color}18`, borderColor: `${exp.color}35` }}
        >
          💼
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-display font-extrabold text-base text-slate-900 dark:text-slate-100 leading-tight">
            {exp.company}
          </p>
          <p className="text-sm font-semibold font-mono mt-0.5" style={{ color: exp.color }}>
            {exp.role}
          </p>
        </div>

        {/* Period + chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Tag text={exp.period} color={exp.color} />
          <svg
            className="w-4 h-4 text-slate-400 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable body */}
      {isOpen && (
        <div
          className="px-6 pb-6 pt-1"
          style={{ backgroundColor: `${exp.color}05` }}
        >
          <div className="h-px bg-slate-200 dark:bg-slate-700 mb-4" />
          <ul className="space-y-3">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: exp.color }}
                />
                <p className="text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="py-24 section-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="Where I Worked" title="Internship Experience" />
        </FadeIn>

        <div className="flex flex-col gap-4">
          {experience.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 80}>
              <ExperienceItem
                exp={exp}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
