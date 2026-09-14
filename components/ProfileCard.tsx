'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ProfileCard() {
  return (
    <section className="pt-8 pb-4">
      {/* Avatar + Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="profile-header"
      >
        <div className="avatar-wrapper">
          <Image
            src="/avatar.png"
            alt="Ayush Sawant"
            width={88}
            height={88}
            priority
          />
          <div className="status-dot" />
        </div>
        <div>
          <h1 className="profile-name">Ayush Sawant</h1>
          <p className="profile-username">@imayushsawant</p>
          <p className="profile-location">
            <MapPin size={14} />
            India
          </p>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bio-text space-y-4"
      >
        <p>
          I&apos;m <strong>Ayush Sawant</strong>, a developer who builds full-stack products
          end-to-end from database design to realtime systems to the UI on top.
        </p>
        <p>
          A coder by day, problem-solver by night. Building high-performance,
          utility-driven web applications one commit at a time.
        </p>
        <p>
          When I&apos;m not at my keyboard, I&apos;m at gym or travelling.
          Currently focused on mastering scalable system architecture and
          engineering production-ready systems.
        </p>
        <p>Let&apos;s connect and collaborate!</p>
      </motion.div>
    </section>
  )
}
