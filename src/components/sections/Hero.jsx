// src/components/sections/Hero.jsx
// Hero / landing section. Photo placeholder is in the right column.
// Replace the placeholder div with an <img> tag when you have a photo.

import { useEffect, useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import profile from '../../data/profile'

const STATS = [
  { value: '4+', label: 'Internships' },
  { value: '5+', label: 'Projects' },
  { value: '6+', label: 'Certifications' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t) }, [])

  const slide = (delay) => ({
    opacity:   mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden
                 bg-gradient-to-br from-indigo-50 via-white to-emerald-50
                 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-[-15%] right-[-8%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/60 dark:bg-indigo-950/30 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-emerald-100/50 dark:bg-emerald-950/20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full
                      grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: text ── */}
        <div>
          <div style={slide(0)}>
            <Badge color="#10b981">Open to Opportunities</Badge>
          </div>

          <div style={slide(120)} className="mt-6">
            <h1 className="font-display font-black leading-[0.95] tracking-tight">
              <span className="block text-slate-900 dark:text-slate-100"
                    style={{ fontSize: 'clamp(2.8rem,8vw,5rem)' }}>
                Anjini
              </span>
              <span
                className="block gradient-text"
                style={{ fontSize: 'clamp(2.8rem,8vw,5rem)' }}
              >
                Nandina
              </span>
            </h1>
            <p className="mt-3 text-base font-semibold tracking-wide text-slate-500 dark:text-slate-400 font-mono">
              {profile.tagline}
            </p>
          </div>

          <p style={slide(240)} className="mt-4 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            {profile.about}
          </p>

          <div style={slide(360)} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">View My Work →</Button>
            <Button href={`mailto:${profile.email}`} variant="outline">Hire Me</Button>
          </div>

          {/* Stats */}
          <div style={slide(480)} className="mt-10 flex gap-8 flex-wrap">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-black text-3xl md:text-4xl text-indigo-600 dark:text-indigo-400">
                  {value}
                </div>
                <div className="text-xs font-bold font-mono uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: photo placeholder ── */}
        <div style={slide(190)} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/30 rounded-full blur-3xl animate-glow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full rounded-t-full overflow-hidden border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/50 card-hover">
                  <img
                    src="/public/aj.jpg"
                    alt="Anjini Nandina"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            {/* Floating chips */}
            {/* <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold font-mono px-3 py-1.5 rounded-full shadow-accent">
              HTML & CSS
            </div>
            <div className="absolute bottom-4 -left-6 bg-emerald-500 text-white text-xs font-bold font-mono px-3 py-1.5 rounded-full shadow-lg">
              JavaScript
            </div> */}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-indigo-400" />
        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
