// src/components/ui/ThemeToggle.jsx
// Sun / moon button. Consumes the ThemeContext provided by App.jsx.

import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggle } = useContext(ThemeContext)

  return (
    <button
      onClick={toggle}
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="
        w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
        border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        text-indigo-600 dark:text-indigo-400
        hover:bg-indigo-50 dark:hover:bg-slate-700
        hover:border-indigo-300 dark:hover:border-indigo-500
        transition-all duration-200
        shadow-sm
      "
    >
      {dark ? (
        // Sun
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="4.5" strokeWidth="2" />
          <path strokeLinecap="round" strokeWidth="2"
            d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42
               M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        // Moon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  )
}
