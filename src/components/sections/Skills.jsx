// src/components/sections/Skills.jsx
// Shows technical skills as animated bars + soft skills as chips.
// Add skills in src/data/skills.js — counts auto-adjust.

import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import { technicalSkills, softSkills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="What I Know" title="Skills & Expertise" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Technical skills as pills */}
          <FadeIn delay={80}>
            <Card className="p-8 h-full" hover={false}>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 mb-7">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-full text-sm font-semibold
                               bg-blue-50 dark:bg-blue-950/60
                               text-blue-700 dark:text-blue-300
                               border border-blue-200 dark:border-blue-800
                               hover:bg-blue-100 dark:hover:bg-blue-950 hover:border-blue-300
                               transition-all duration-200 flex items-center gap-2"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* Soft skills */}
          <FadeIn delay={160} direction="right">
            <Card className="p-8 h-full flex flex-col" hover={false}>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 mb-7">
                Soft Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {softSkills.map(skill => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold
                               bg-indigo-50 dark:bg-indigo-950/60
                               text-indigo-700 dark:text-indigo-300
                               border border-indigo-100 dark:border-indigo-900
                               hover:bg-indigo-100 dark:hover:bg-indigo-950 hover:border-indigo-300
                               transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
