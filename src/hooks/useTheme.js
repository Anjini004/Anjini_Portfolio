import { useEffect, useState } from 'react'

/**
 * Manages dark / light theme.
 * Priority: localStorage override → OS preference → light (default)
 *
 * Applies / removes the `dark` class on <html> so Tailwind's darkMode:'class'
 * strategy works everywhere in the app.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Keep in sync with OS changes (only when no manual override)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!localStorage.getItem('portfolio-theme')) setDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Apply class to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return { dark, toggle }
}
