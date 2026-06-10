// src/context/ThemeContext.jsx
// Provides { dark, toggle } to the whole app.
// Consumed by ThemeToggle and any component that needs to read the theme.

import { createContext } from 'react'
import { useTheme } from '../hooks/useTheme'

export const ThemeContext = createContext({ dark: false, toggle: () => {} })

export function ThemeProvider({ children }) {
  const theme = useTheme()
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
