import Link from 'next/link';

export const metadata = {
  title: 'Blog & Technical Resources | Sbortix',
  description: 'Insights, architectural whitepapers, and guides on enterprise AI deployment, marketing attribution, and data engineering.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 'LOG_001',
      title: 'Why Most Enterprise AI Projects Fail at the Data Pipeline Layer',
      date: '2026-07-15',
      author: 'Muhammad Ahmed',
      category: 'DATA ENGINEERING',
      readTime: '6 MIN READ',
      excerpt: 'Fine-tuning LLMs is only 10% of the battle. Learn why robust ETL pipelines and vector indexing determine real-world AI accuracy.',
    },
    {
      id: 'LOG_002',
      title: 'Building Autonomous Sales Agents Without Hallucination Risk',
      date: '2026-07-02',
      author: 'Salman (Salman Tauheed)',
      category: 'AI ARCHITECTURE',
      readTime: '9 MIN READ',
      excerpt: 'A technical breakdown of deterministic fallback loops, structured JSON function calling, and RAG validation strategies for sales agents.',
    },
    {
      id: 'LOG_003',
      title: 'Algorithmic Marketing Attribution in a Cookieless Ecosystem',
      date: '2026-06-20',
      author: 'Bilal',
      category: 'DIGITAL GROWTH',
      readTime: '7 MIN READ',
      excerpt: 'How multi-touch attribution models combined with first-party server-side tracking solve CAC inflation for B2B growth teams.',
    },
    {
      id: 'LOG_004',
      title: 'Next.js App Router Performance Benchmarks for Enterprise Web Apps',
      date: '2026-06-05',
      author: 'Muhammad Ahmed',
      category: 'WEB ENGINEERING',
      readTime: '5 MIN READ',
      excerpt: 'Optimizing React Server Components, dynamic imports, and streaming SSR to achieve sub-200ms Core Web Vitals at scale.',
    },
  ];

  return (
    <div className="w-full bg-white py-xl">
      {/* Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="inline-block px-xs py-1 border hairline-border rounded mb-md bg-white">
          <span className="tech-label text-primary">[SYSTEM_TECHNICAL_LOGS]</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-md max-w-4xl">
          Technical Insights & Engineering Papers
        </h1>
        <p className="text-secondary font-body-lg text-body-lg max-w-3xl">
          Deep dives into artificial intelligence, data pipelines, search engine algorithms, and modern full-stack web architecture.
        </p>
      </section>

      {/* Featured Article */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-20">
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg md:p-xl relative overflow-hidden group">
          <div className="flex items-center gap-md mb-md">
            <span className="tech-label text-primary font-bold">FEATURED // {posts[0].id}</span>
            <span className="tech-label text-outline">{posts[0].category}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold mb-md text-on-background group-hover:text-primary transition-colors">
            {posts[0].title}
          </h2>
          <p className="text-secondary font-body-lg text-body-lg mb-lg max-w-3xl leading-relaxed">
            {posts[0].excerpt}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-md border-t border-outline-variant pt-md text-xs font-mono text-secondary">
            <div>BY {posts[0].author.toUpperCase()} • {posts[0].date}</div>
            <Link href="/blog" className="text-primary font-bold hover:underline flex items-center gap-xs">
              Read Full Paper
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-lg mb-24">
        {posts.slice(1).map((post) => (
          <article key={post.id} className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-sm">
                <span className="tech-label text-primary font-bold">{post.category}</span>
                <span className="tech-label text-outline">{post.readTime}</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold mb-xs text-on-background hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-secondary text-body-md mb-lg leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="border-t border-outline-variant pt-xs text-xs font-mono text-secondary flex items-center justify-between">
              <span>{post.author}</span>
              <span className="text-outline">{post.date}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
