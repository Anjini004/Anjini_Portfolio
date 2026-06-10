// src/components/sections/About.jsx

import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import profile from '../../data/profile'

const DETAILS = [
  { label: 'University', value: profile.university, icon: '🎓' },
  { label: 'Degree',     value: profile.degree,     icon: '📘' },
  { label: 'GPA',        value: profile.gpa,        icon: '⭐' },
  { label: 'Location',   value: profile.location,   icon: '📍' },
]

export default function About() {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="Who I Am" title="About Me" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bio — spans 2 columns */}
          <FadeIn delay={80} className="md:col-span-2">
            <Card className="p-8 h-full" hover={false}>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {profile.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Java', 'Responsive Design', 'Git'].map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold font-mono
                               bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300
                               border border-indigo-200 dark:border-indigo-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* Detail cards — stack in right column */}
          <div className="flex flex-col gap-4">
            {DETAILS.map(({ label, value, icon }, i) => (
              <FadeIn key={label} delay={160 + i * 60} direction="right">
                <Card className="px-5 py-4 flex items-center gap-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                      {value}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
