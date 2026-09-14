/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        script: ['var(--font-script)', 'Caveat', 'cursive'],
      },
      colors: {
        'surface': '#000000',
        'surface-2': '#050505',
        'surface-3': '#0a0a0a',
        'surface-4': '#111111',
        'dim': '#666666',
        'muted': '#444444',
        'subtle': '#e0e0e0',
        'sky-accent': '#7dd3fc',
      },
    },
  },
  plugins: [],
}
