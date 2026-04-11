'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  const applyTheme = (t: Theme) => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(t)
    root.style.colorScheme = t
  }

  useEffect(() => {
    // Read saved preference on mount
    const saved = localStorage.getItem('theme') as Theme | null
    const preferred: Theme = saved === 'light' || saved === 'dark' ? saved : 'dark'
    setTheme(preferred)
    applyTheme(preferred)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
