# Ayush Sawant — Portfolio

A modern, high-performance personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, providers
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Design tokens (CSS vars), global styles
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode with localStorage
│   ├── Navbar.tsx          # Sticky nav, mobile menu, theme toggle
│   ├── ScrollProgress.tsx  # Accent-colored scroll progress bar
│   ├── MusicPlayer.tsx     # Music widget (play/pause, volume)
│   ├── SectionReveal.tsx   # Scroll-triggered reveal animations
│   ├── Footer.tsx          # Footer with social links
│   └── sections/
│       ├── Hero.tsx        # Typewriter, CTAs, social links
│       ├── About.tsx       # Bio, stats, terminal snippet
│       ├── Skills.tsx      # Tech stack grouped by category
│       ├── Projects.tsx    # Project cards with links
│       ├── GitHub.tsx      # GitHub stats & pinned repos
│       ├── Education.tsx   # Education card
│       └── Contact.tsx     # Contact form + social links
├── public/
│   ├── resume.pdf          # ← Add your resume here
│   └── somewhere-only-we-know.mp3  # ← Add music file here
```

---

## 🎨 Design System

All colors are CSS custom properties defined in `globals.css`:

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#080b10` | `#f8f9fa` |
| `--text` | `#f0f6fc` | `#111827` |
| `--accent` | `#ff6b35` | `#e85d24` |
| `--border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` |

Fonts:
- **Display**: Playfair Display (headings)
- **Body**: DM Sans (prose)
- **Mono**: JetBrains Mono (code, labels)

---

## 🎵 Background Music

1. Download "Somewhere Only We Know" by Keane as an `.mp3`
2. Place it at `public/somewhere-only-we-know.mp3`
3. The player will appear in the bottom-left corner — it **never autoplays**

Volume and mute preferences are saved to `localStorage`.

---

## 📄 Resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" button in the navbar and hero will trigger a direct download.

---

## 🔧 Customization

- **Update links**: Edit `components/Navbar.tsx` and section files
- **Add projects**: Edit the `PROJECTS` array in `components/sections/Projects.tsx`
- **Update GitHub username**: Change `imayushsawant` in `components/sections/GitHub.tsx`
- **Change accent color**: Update `--accent` in `app/globals.css`

---

## 🚢 Deploy

Easiest deployment is [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deploys on every push.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Playfair Display, DM Sans, JetBrains Mono) |
