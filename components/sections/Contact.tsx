'use client'

import { useState } from 'react'
import SectionReveal from '@/components/SectionReveal'
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/imayushsawant' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sawant-ayush/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/AyushSawant13' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) return

    if (!endpoint) {
      setStatus('error')
      setFeedback('Form endpoint not configured. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local.')
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
        throw new Error(providerMessage || data?.error || `Failed to send message (${res.status})`)
      }

      setStatus('sent')
      setFeedback('Message sent successfully. I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => {
        setStatus('idle')
        setFeedback('')
      }, 4500)
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please email me directly instead.'
      )
    }
  }

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            05
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            Contact
          </span>
        </div>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--text)' }}>
              Let&apos;s work{' '}
              <em className="text-gradient not-italic">together</em>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
              Open to full-time roles, freelance projects, and interesting collaborations.
              Drop me a message and I&apos;ll get back within 24 hours.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-2)' }}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: 'var(--accent-dim)' }}
                  >
                    <Icon size={14} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-sm group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-dim)' }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Right — form */}
        <SectionReveal delay={0.15} direction="right">
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--bg-2)', border: '1px solid var(--border)' }}
          >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs mb-1.5 block font-medium" style={{ color: 'var(--text-dim)' }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs mb-1.5 block font-medium" style={{ color: 'var(--text-dim)' }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs mb-1.5 block font-medium" style={{ color: 'var(--text-dim)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="Hey Ayush, I'd love to work with you on..."
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary self-start disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={14} />
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                    ? 'Message Sent!'
                    : 'Send Message'}
              </button>

              {feedback && (
                <p
                  className="text-xs"
                  style={{ color: status === 'error' ? '#ef4444' : 'var(--text-dim)' }}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
