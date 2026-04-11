'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music2, Pause, Play, Volume2, VolumeX, X } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [muted, setMuted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Restore preferences
    const savedVol = localStorage.getItem('music-volume')
    const savedMuted = localStorage.getItem('music-muted')
    if (savedVol) setVolume(parseFloat(savedVol))
    if (savedMuted) setMuted(savedMuted === 'true')
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (audioRef.current) audioRef.current.volume = val
    localStorage.setItem('music-volume', String(val))
  }

  const toggleMute = () => {
    const next = !muted
    setMuted(next)
    if (audioRef.current) audioRef.current.muted = next
    localStorage.setItem('music-muted', String(next))
  }

  if (!visible) return null

  return (
    <>
      {/* Hidden audio element — add /public/somewhere-only-we-know.mp3 */}
      <audio
        ref={audioRef}
        src="/somewhere-only-we-know.mp3"
        loop
        preload="none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2"
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="glass rounded-xl p-3 flex flex-col gap-3 min-w-[200px]"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                    Somewhere Only We Know
                  </p>
                  <p className="text-[10px]" style={{ color: 'var(--text-dim)' }}>Keane</p>
                </div>
                <button
                  onClick={() => setVisible(false)}
                  style={{ color: 'var(--text-dim)' }}
                  className="hover:opacity-70 transition-opacity"
                >
                  <X size={13} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} style={{ color: 'var(--text-dim)' }}>
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="flex-1 h-1 accent-[var(--accent)] cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 rounded-full glass text-xs"
            style={{
              border: '1px solid var(--border)',
              color: isPlaying ? 'var(--accent)' : 'var(--text-dim)',
            }}
          >
            <motion.div
              animate={isPlaying ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Music2 size={12} />
            </motion.div>
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span className="hidden sm:inline">
              {isPlaying ? 'Playing' : 'Music'}
            </span>
          </motion.button>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] px-2 py-1 rounded glass"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-dim)',
            }}
          >
            {expanded ? '▾' : '▸'}
          </button>
        </div>
      </motion.div>
    </>
  )
}
