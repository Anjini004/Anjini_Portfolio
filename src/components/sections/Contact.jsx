// src/components/sections/Contact.jsx
// Contact section: social links on the left, quick-message form on the right.
// The form mailto-links so no backend is needed.

import { useState } from 'react'
import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import profile from '../../data/profile'

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: profile.email,
    href:  `mailto:${profile.email}`,
    icon:  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#6366f1',
  },
  {
    label: 'LinkedIn',
    value: profile.linkedin,
    href:  `https://${profile.linkedin}`,
    icon:  'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
    color: '#0ea5e9',
  },
  {
    label: 'GitHub',
    value: profile.github,
    href:  `https://${profile.github}`,
    icon:  'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
    color: '#10b981',
  },
]

function SocialLink({ link }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 no-underline group"
    >
      {/* Icon box */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-200"
        style={{
          background:   hovered ? `${link.color}20` : 'transparent',
          borderColor:  hovered ? link.color : undefined,
        }}
      >
        <svg
          className="w-5 h-5 transition-colors duration-200"
          style={{ color: hovered ? link.color : undefined }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={link.icon} />
        </svg>
      </div>

      {/* Labels */}
      <div>
        <p className="text-[10px] font-bold font-mono uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {link.label}
        </p>
        <p
          className="text-sm font-semibold mt-0.5 transition-colors duration-200"
          style={{ color: hovered ? link.color : undefined }}
        >
          {link.value}
        </p>
      </div>
    </a>
  )
}

function InputField({ type = 'text', placeholder, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl text-sm font-body
                 bg-indigo-50 dark:bg-slate-900
                 border border-slate-200 dark:border-slate-700
                 text-slate-900 dark:text-slate-100
                 placeholder:text-slate-400 dark:placeholder:text-slate-600
                 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500
                 focus:ring-2 focus:ring-indigo-400/20
                 transition-all duration-200"
    />
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 section-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <SectionHeading label="Let's Talk" title="Get In Touch" center />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ── Left: info ── */}
          <FadeIn delay={80} direction="left">
            <Card className="p-8 h-full flex flex-col" hover={false}>
              <div className="mb-4">
                <Badge color="#10b981">Available for Roles</Badge>
              </div>
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-slate-100 mt-4 mb-3">
                Open to internship &amp; entry-level Developer roles
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Fast responder and eager collaborator. Whether it's a quick question or
                a full job discussion — I'm happy to connect!
              </p>

              <div className="flex flex-col gap-5 mt-auto">
                {SOCIAL_LINKS.map(link => (
                  <SocialLink key={link.label} link={link} />
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── Right: form ── */}
          <FadeIn delay={160} direction="right">
            <Card className="p-8 h-full flex flex-col" hover={false}>
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-slate-100 mb-6">
                Send a Message
              </h3>

              {/* The form opens the user's mail client with pre-filled subject */}
              <form
                className="flex flex-col gap-4 flex-1"
                onSubmit={(e) => {
                  e.preventDefault()
                  const data    = new FormData(e.target)
                  const name    = data.get('name')    || ''
                  const email   = data.get('email')   || ''
                  const message = data.get('message') || ''
                  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
                  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
                  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
                }}
              >
                <InputField name="name"    placeholder="Your Name" />
                <InputField name="email"   placeholder="Your Email" type="email" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl text-sm font-body resize-none
                             bg-indigo-50 dark:bg-slate-900
                             border border-slate-200 dark:border-slate-700
                             text-slate-900 dark:text-slate-100
                             placeholder:text-slate-400 dark:placeholder:text-slate-600
                             focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500
                             focus:ring-2 focus:ring-indigo-400/20
                             transition-all duration-200"
                />

                <button
                  type="submit"
                  className="mt-auto w-full py-3.5 rounded-xl font-bold text-sm text-white
                             transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #4f46e5, #10b981)',
                    boxShadow:  '0 4px 20px rgba(79,70,229,0.3)',
                  }}
                >
                  Send via Email ✉️
                </button>
              </form>
            </Card>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
