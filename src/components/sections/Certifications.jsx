// src/components/sections/Certifications.jsx
// Certification cards. Add/edit in src/data/certifications.js

import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import certifications from '../../data/certifications'

function CertCard({ cert }) {
  return (
    <Card className="p-5 flex items-center gap-4">
      {/* Icon circle */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border"
        style={{ background: `${cert.color}18`, borderColor: `${cert.color}35` }}
      >
        <svg
          style={{ color: cert.color }}
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
          {cert.name}
        </p>
        <p
          className="text-xs font-bold font-mono mt-1"
          style={{ color: cert.color }}
        >
          {cert.org}
        </p>
      </div>
    </Card>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="Credentials" title="Certifications" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 70}>
              <CertCard cert={cert} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
