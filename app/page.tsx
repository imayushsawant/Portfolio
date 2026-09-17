'use client'

import { motion } from 'framer-motion'
import TopBar from '@/components/TopBar'
import ProfileCard from '@/components/ProfileCard'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import ContactForm from '@/components/ContactForm'
import FooterLinks from '@/components/FooterLinks'
import BottomDock from '@/components/BottomDock'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <TopBar />
      <div className="page-container">
        <ProfileCard />
        <TechStack />
        <Projects />
        <ContactForm />
        <FooterLinks />
      </div>
      <BottomDock />
    </motion.div>
  )
}
