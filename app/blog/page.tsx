import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { getAllBlogPosts, getPublishedBlogPosts } from '@/lib/blog-data';

export const metadata: Metadata = buildMetadata({ path: '/blog' });

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const publishedPosts = getPublishedBlogPosts();
  const draftPosts = allPosts.filter((p) => p.status === 'draft' || !p.body.trim());

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl('/blog')}#blog`,
    'url': absoluteUrl('/blog'),
    'name': 'Sbortix Technical Insights & Whitepapers',
    'description':
      'Insights, architectural whitepapers, and technical guides on enterprise AI deployment, marketing attribution, and data engineering.',
    'publisher': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
    'blogPost': publishedPosts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(`/blog/${post.slug}`)}#article`,
      'url': absoluteUrl(`/blog/${post.slug}`),
      'headline': post.title,
      'description': post.description,
      'datePublished': post.date,
      'author': {
        '@type': 'Organization',
        'name': post.author,
      },
      'publisher': {
        '@id': `${absoluteUrl('/')}#organization`,
      },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]);

  return (
    <>
      <JsonLd data={[blogJsonLd, breadcrumbJsonLd]} />
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
              Technical Insights &amp; Engineering Papers
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Deep dives into artificial intelligence, data pipelines, search engine algorithms, and modern full-stack web architecture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-mono">
              <span className="text-gray-500 py-1.5">EXPLORE BY PRACTICE:</span>
              <Link
                href="/services/ai-solutions"
                className="px-3 py-1.5 rounded-full bg-white border border-[#2D2D82]/20 text-[#2D2D82] font-bold hover:bg-[#2D2D82] hover:text-white transition-colors"
              >
                AI Solutions &amp; Automation
              </Link>
              <Link
                href="/services/digital-marketing"
                className="px-3 py-1.5 rounded-full bg-white border border-[#2D2D82]/20 text-[#2D2D82] font-bold hover:bg-[#2D2D82] hover:text-white transition-colors"
              >
                SEO &amp; Performance Marketing
              </Link>
              <Link
                href="/services/web-branding"
                className="px-3 py-1.5 rounded-full bg-white border border-[#2D2D82]/20 text-[#2D2D82] font-bold hover:bg-[#2D2D82] hover:text-white transition-colors"
              >
                Web Design &amp; Brand Systems
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: PUBLISHED ARTICLES (If any published) ── */}
        {publishedPosts.length > 0 && (
          <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="mb-8 border-b border-[#2D2D82]/15 pb-4">
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider">
                // Published Whitepapers ({publishedPosts.length})
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publishedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl p-8 border border-[#2D2D82]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 font-mono text-xs font-bold">
                      <span className="text-[#2D2D82] px-3 py-1 rounded-full bg-[#2D2D82]/10 border border-[#2D2D82]/20">
                        {post.category}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="text-2xl font-bold mb-3 text-[#151137] hover:text-[#2D2D82] transition-colors"
                    >
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="border-t border-[#2D2D82]/15 pt-4 flex items-center justify-between font-mono text-xs">
                    <span className="text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#2D2D82] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── SECTION 2: RESEARCH IN PROGRESS & UPCOMING WHITEPAPERS ── */}
        <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-8 border-b border-[#2D2D82]/15 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider block">
                // Engineering Research &amp; Whitepapers in Preparation
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Upcoming technical briefs currently undergoing peer review and benchmark replication.
              </p>
            </div>
            <span className="text-xs font-mono text-gray-500 bg-[#ECEBF5] px-3 py-1 rounded-full w-fit">
              {draftPosts.length} Papers Scheduled
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {draftPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#ECEBF5]/70 rounded-3xl p-8 border border-[#2D2D82]/15 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs">
                    <span className="font-bold text-[#2D2D82]">{post.category}</span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-300">
                      Draft • In Preparation
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="text-xl font-bold mb-3 text-[#151137]"
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="border-t border-[#2D2D82]/15 pt-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-gray-500">
                    <span>Target: {post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="pt-1">
                    <Link
                      href={post.relatedService.href}
                      className="text-xs font-bold text-[#2D2D82] hover:underline inline-flex items-center gap-1"
                    >
                      Related Service: {post.relatedService.title} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER & CONTACT CTA ── */}
        <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-xl relative overflow-hidden">
            <BookOpen className="w-10 h-10 text-indigo-300 mx-auto mb-4" />
            <h3
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold mb-3"
            >
              Request Custom Enterprise Architecture Whitepapers
            </h3>
            <p className="text-indigo-200 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Have specific data pipeline, conversational AI, or headless web engineering challenges? Contact our architects for a private consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-md"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
