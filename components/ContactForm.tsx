'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xeepylyz'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setFeedback('Please fill out all fields before submitting.')
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const payload = new FormData()
      payload.append('name', form.name)
      payload.append('email', form.email)
      payload.append('message', form.message)

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      })

      if (!res.ok) {
        const data = await res
          .json()
          .catch(() => ({} as { error?: string; errors?: Array<{ message?: string }> }))
        const providerMessage = data?.errors?.[0]?.message
        throw new Error(providerMessage || data?.error || `Failed to send (${res.status})`)
      }

      setStatus('sent')
      setFeedback('Message sent successfully! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
        setFeedback('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please email me directly at ayushvsawant@gmail.com'
      )
    }
  }

  return (
    <section className="section-padding pt-6" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="section-heading font-doto"
      >
        Inquiries
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="mt-4 rounded-2xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border)] relative overflow-hidden"
      >
        <p className="text-[var(--text-dim)] font-mono text-xs sm:text-sm mb-6 leading-relaxed">
          Have an idea, project inquiry, or just want to connect? Drop a message below or email me directly at{' '}
          <a
            href="mailto:ayushvsawant@gmail.com"
            className="text-[var(--accent)] hover:underline"
          >
            ayushvsawant@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-[var(--text-dim)] mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ayush Sawant"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-muted)] font-mono text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-[var(--text-dim)] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="ayush@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-muted)] font-mono text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-[var(--text-dim)] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, or just say hi..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--text-muted)] font-mono text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--text)] text-[var(--bg)] font-mono text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : status === 'sent' ? (
                <>
                  <Check size={16} className="text-green-500" />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {feedback && (
              <div
                className={`flex items-center gap-2 text-xs font-mono ${
                  status === 'error' ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {status === 'error' ? (
                  <AlertCircle size={14} className="shrink-0" />
                ) : (
                  <Check size={14} className="shrink-0" />
                )}
                <span>{feedback}</span>
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  )
}
