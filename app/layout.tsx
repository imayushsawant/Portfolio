import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import MusicPlayer from '@/components/MusicPlayer'

// Display font — editorial, premium feel
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Body font — clean, modern
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Mono font — for code snippets
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ayush Sawant — Full Stack Developer',
  description:
    'Full-Stack MERN Developer building high-performance, utility-driven web applications. Currently focused on mastering scalable system architecture.',
  keywords: ['Ayush Sawant', 'Full Stack Developer', 'MERN', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Ayush Sawant' }],
  openGraph: {
    title: 'Ayush Sawant — Full Stack Developer',
    description: 'A coder by day, problem-solver by night',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-night text-ice antialiased overflow-x-hidden">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  )
}
