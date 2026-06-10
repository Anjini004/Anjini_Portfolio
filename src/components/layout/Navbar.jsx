// src/components/layout/Navbar.jsx
// Fixed top navigation bar with mobile hamburger menu and theme toggle.
// Edit NAV_LINKS in src/data/config.js to change navigation items.

import { useEffect, useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'
import { NAV_LINKS } from '../../data/config'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-400
        ${scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-accent">
            <span className="text-white font-display font-black text-lg leading-none">A</span>
          </div>
          <span className="font-display font-black text-xl text-slate-900 dark:text-slate-100 tracking-tight">
            Anjini<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400
                         hover:text-indigo-600 dark:hover:text-indigo-400
                         hover:bg-indigo-50 dark:hover:bg-indigo-950/50
                         transition-all duration-200 no-underline"
            >
              {label}
            </a>
          ))}
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 py-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-semibold text-slate-700 dark:text-slate-300
                         border-b border-slate-100 dark:border-slate-800 last:border-0
                         hover:text-indigo-600 dark:hover:text-indigo-400 no-underline transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
