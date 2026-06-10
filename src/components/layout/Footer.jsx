// src/components/layout/Footer.jsx

import profile from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-display font-black text-sm leading-none">A</span>
          </div>
          <span className="font-display font-black text-base text-slate-100 tracking-tight">
            Anjini Nandina
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs font-mono">
          © {year} Anjini Nandina · Built with React + Tailwind
        </p>

        {/* Links */}
        <div className="flex gap-5">
          {[
            { label: 'GitHub',   href: `https://${profile.github}` },
            { label: 'LinkedIn', href: `https://${profile.linkedin}` },
            { label: 'Email',    href: `mailto:${profile.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-400 text-xs font-mono transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
