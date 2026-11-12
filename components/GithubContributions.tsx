'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

const GITHUB_THEME = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
}

const USERNAME = 'imayushsawant'

export default function GithubContributions() {
  const [mounted, setMounted] = useState(false)
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark')
  const [contributions, setContributions] = useState<Activity[]>([])
  const [totalCount, setTotalCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Listen to theme switches from the top bar
  useEffect(() => {
    setMounted(true)

    const updateTheme = () => {
      const isLight = document.documentElement.classList.contains('light')
      setColorScheme(isLight ? 'light' : 'dark')
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  // Fetch cached contribution data from internal 24-hour ISR API with client fallback
  useEffect(() => {
    let isCancelled = false

    async function loadContributions() {
      try {
        setLoading(true)
        setHasError(false)

        // 1. Try our internal 24h cached API endpoint first
        let res = await fetch('/api/contributions')

        // 2. Fallback to direct external API if internal route fails
        if (!res.ok) {
          res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
          )
        }

        if (!res.ok) {
          throw new Error('Failed to load contributions')
        }

        const data = await res.json()

        if (!isCancelled && Array.isArray(data.contributions)) {
          setContributions(data.contributions)
          if (data.total?.lastYear !== undefined) {
            setTotalCount(data.total.lastYear)
          } else {
            const sum = data.contributions.reduce(
              (acc: number, curr: Activity) => acc + (curr.count || 0),
              0
            )
            setTotalCount(sum)
          }
        }
      } catch (err) {
        console.error('Error loading GitHub contribution calendar:', err)
        if (!isCancelled) {
          setHasError(true)
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    loadContributions()

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <section className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="section-heading font-doto"
      >
        Contributions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 sm:p-6 transition-colors duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2.5">
            <Github size={18} className="text-[var(--text)]" />
            <span className="font-mono text-sm font-medium text-[var(--text)]">
              @{USERNAME}
            </span>
            {totalCount !== null && (
              <span className="hidden sm:inline-block text-xs font-mono text-[var(--text-dim)]">
                · {totalCount.toLocaleString()} contributions in the last year
              </span>
            )}
          </div>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs font-mono text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight
              size={14}
              className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </div>

        {/* Contribution Calendar */}
        <div className="w-full flex justify-center overflow-hidden">
          {mounted && !loading && !hasError && contributions.length > 0 ? (
            <ActivityCalendar
              data={contributions}
              colorScheme={colorScheme}
              theme={GITHUB_THEME}
              blockSize={11}
              blockMargin={3}
              blockRadius={2}
              fontSize={12}
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
              showWeekdayLabels
            />
          ) : hasError ? (
            <div className="h-[140px] w-full flex items-center justify-center text-xs text-[var(--text-muted)] font-mono">
              Unable to load contributions. Please visit GitHub profile directly.
            </div>
          ) : (
            <div className="h-[140px] w-full flex items-center justify-center text-xs text-[var(--text-muted)] font-mono animate-pulse">
              Loading contribution activity...
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
