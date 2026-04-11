'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import GitHub from '@/components/sections/GitHub'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

// Page-level fade-in on mount
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="noise-overlay"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Education />
      <Contact />
      <Footer />
    </motion.div>
  )
}
