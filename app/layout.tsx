import type { Metadata } from 'next'
import { JetBrains_Mono, Inter, Caveat } from 'next/font/google'
import './globals.css'

// Primary monospace font
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

// Body text font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// Script/handwriting font for section headings
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ayush Sawant',
  description:
    'Full-Stack Developer building high-performance, utility-driven web applications. Focused on React, Next.js, TypeScript, and scalable system architecture.',
  keywords: ['Ayush Sawant', 'Full Stack Developer', 'MERN', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Ayush Sawant' }],
  openGraph: {
    title: 'Ayush Sawant',
    description: 'Building high-performance web applications, one commit at a time.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${inter.variable} ${caveat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'light') {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-mono antialiased overflow-x-hidden">
        <main>{children}</main>
      </body>
    </html>
  )
}
