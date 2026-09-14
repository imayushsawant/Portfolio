'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function TopBar() {
  const [time, setTime] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || document.documentElement.classList.contains('light')) {
      setTheme('light')
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const hours = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      })
      setTime(hours)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }

  return (
    <header className="top-bar-wrapper">
      <div className="top-bar">
        <div className="location-time">
          <span>IN</span>
          <span>{time}</span>
        </div>
        <button
          onClick={toggleTheme}
          className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors p-1.5 rounded-lg hover:bg-[var(--bg-hover)] cursor-pointer"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {mounted ? (
            theme === 'dark' ? (
              <Sun size={18} className="transition-transform hover:rotate-45" />
            ) : (
              <Moon size={18} className="transition-transform hover:-rotate-12" />
            )
          ) : (
            <div className="w-[18px] h-[18px]" />
          )}
        </button>
      </div>
    </header>
  )
}
