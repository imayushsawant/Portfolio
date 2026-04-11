import SectionReveal from '@/components/SectionReveal'
import { ExternalLink, BookOpen } from 'lucide-react'

// Fallback blog posts if API fetch fails
const FALLBACK_BLOGS = [
  {
    id: 1,
    title: 'Keeping Promises in JavaScript (Unlike Real Life)',
    excerpt: 'Master JavaScript Promise methods by navigating the relatable chaos of Goa trips, wedding buffets, and those questionable 2:00 AM texts.',
    date: 'Coming soon',
    readTime: '7 min read',
    url: 'https://blog.ayushsawant.dev/keeping-promises-in-javascript-unlike-real-life',
    tags: ['JavaScript', 'Promises', 'Beginners'],
  },
  {
    id: 2,
    title: 'How a Browser Works: A Beginner-Friendly Guide to Browser Internals',
    excerpt: 'Look under the hood to see how browsers act as the ultimate high-speed translators, turning raw code into the interactive web we actually see.',
    date: 'Coming soon',
    readTime: '5 min read',
    url: 'https://blog.ayushsawant.dev/how-a-browser-works-a-beginner-friendly-guide-to-browser-internals',
    tags: ['Browser Internals', 'Web Architecture'],
  },
  {
    id: 3,
    title: 'Understanding Network Devices',
    excerpt: 'Meet the hardware heroes from modems to load balancers who power and protect your internet connection.',
    date: 'Coming soon',
    readTime: '7 min read',
    url: 'https://blog.ayushsawant.dev/understanding-network-devices',
    tags: ['Infrastructure', 'System Design', 'Network Basics'],
  },
]

export default function Blogs() {
  const FEATURED_BLOGS = FALLBACK_BLOGS
  return (
    <section id="blogs" className="section-padding max-w-6xl mx-auto">
      <SectionReveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            05
          </span>
          <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
            Blogs
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text)' }}>
          Latest Articles
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {FEATURED_BLOGS.map((blog, index) => (
          <SectionReveal key={blog.id} delay={0.15 + index * 0.05}>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ background: 'var(--accent-dim)', border: '1px solid var(--accent)' }}
                >
                  <BookOpen size={20} style={{ color: 'var(--accent)' }} />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)' }}>
                {blog.title}
              </h3>

              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--text-dim)' }}>
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
                  {blog.readTime}
                </span>
                <ExternalLink size={16} style={{ color: 'var(--accent)' }} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal delay={0.3}>
        <div className="flex justify-center">
          <a
            href="https://blog.ayushsawant.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Articles
            <ExternalLink size={14} />
          </a>
        </div>
      </SectionReveal>
    </section>
  )
}
