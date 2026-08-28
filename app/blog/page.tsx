import Link from 'next/link';

export const metadata = {
  title: 'Blog & Technical Resources | Sbortix',
  description: 'Insights, architectural whitepapers, and guides on enterprise AI deployment, marketing attribution, and data engineering.',
  alternates: {
    canonical: 'https://www.sbortix.com/blog',
  },
};

export default function BlogPage() {
  const posts = [
    {
      id: 'LOG_001',
      title: 'Why Most Enterprise AI Projects Fail at the Data Pipeline Layer',
      date: '2026-07-15',
      author: 'Sbortix Data Architecture Team',
      category: 'DATA ENGINEERING',
      readTime: '6 MIN READ',
      excerpt: 'Fine-tuning LLMs is only 10% of the battle. Learn why robust ETL pipelines and vector indexing determine real-world AI accuracy.',
    },
    {
      id: 'LOG_002',
      title: 'Building Autonomous Sales Agents Without Hallucination Risk',
      date: '2026-07-02',
      author: 'Sbortix AI Engineering Lead',
      category: 'AI ARCHITECTURE',
      readTime: '9 MIN READ',
      excerpt: 'A technical breakdown of deterministic fallback loops, structured JSON function calling, and RAG validation strategies for sales agents.',
    },
    {
      id: 'LOG_003',
      title: 'Algorithmic Marketing Attribution in a Cookieless Ecosystem',
      date: '2026-06-20',
      author: 'Sbortix Digital Growth Lead',
      category: 'DIGITAL GROWTH',
      readTime: '7 MIN READ',
      excerpt: 'How multi-touch attribution models combined with first-party server-side tracking solve CAC inflation for B2B growth teams.',
    },
    {
      id: 'LOG_004',
      title: 'Next.js App Router Performance Benchmarks for Enterprise Web Apps',
      date: '2026-06-05',
      author: 'Sbortix Web Systems Architect',
      category: 'WEB ENGINEERING',
      readTime: '5 MIN READ',
      excerpt: 'Optimizing React Server Components, dynamic imports, and streaming SSR to achieve sub-200ms Core Web Vitals at scale.',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">
      {/* Header */}
      <section
        className="relative pt-40 pb-16 lg:pt-52 lg:pb-20 border-b border-[#2D2D82]/15"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
            Technical Insights &amp; Whitepapers
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Technical Insights & Engineering Papers
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Deep dives into artificial intelligence, data pipelines, search engine algorithms, and modern full-stack web architecture.
          </p>
        </div>
      </section>

      {/* Featured Article (Editorial Tint Panel, No Box Border) */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#ECEBF5] rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs font-bold">
            <span className="text-[#2D2D82]">FEATURED // {posts[0].id}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{posts[0].category}</span>
          </div>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-[#151137] group-hover:text-[#2D2D82] transition-colors"
          >
            {posts[0].title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl leading-relaxed">
            {posts[0].excerpt}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2D2D82]/15 pt-4 font-mono text-xs text-gray-600">
            <div>BY {posts[0].author.toUpperCase()} • {posts[0].date}</div>
            <Link href="/blog" className="text-[#2D2D82] font-bold hover:underline flex items-center gap-1">
              Read Full Paper &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid (Editorial Flow, Divided by Delicate Lines) */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-[#2D2D82]/15 pb-24">
        {posts.slice(1).map((post, idx) => (
          <article key={post.id} className={`pt-6 md:pt-0 ${idx === 0 ? '' : 'md:pl-8'} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs font-bold">
                <span className="text-[#2D2D82]">{post.category}</span>
                <span className="text-gray-400">{post.readTime}</span>
              </div>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold mb-3 text-[#151137] hover:text-[#2D2D82] transition-colors cursor-pointer"
              >
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="border-t border-[#2D2D82]/15 pt-3 font-mono text-xs text-gray-500 flex items-center justify-between">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
