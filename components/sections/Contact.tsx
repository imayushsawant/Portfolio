'use client'

import { useState } from 'react'
import SectionReveal from '@/components/SectionReveal'
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/imayushsawant' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sawant-ayush/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/AyushSawant13' },
  { icon: Mail, label: 'Email', href: 'mailto:ayushvsawant@gmail.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    // UI only — wire up a backend / EmailJS / Formspree later
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            06
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
            <div className="flex flex-col gap-4">
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

              <button onClick={handleSubmit} className="btn-primary self-start">
                <Send size={14} />
                {sent ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
