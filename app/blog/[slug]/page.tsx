import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { getBlogPostBySlug, getPublishedBlogPosts } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const publishedPosts = getPublishedBlogPosts();
  return publishedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || post.status !== 'published' || !post.body.trim()) {
    return {
      title: 'Article Not Found | Sbortix',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Sbortix`,
    description: post.description,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  // Strictly enforce: only published posts with a non-empty body can be viewed
  if (!post || post.status !== 'published' || !post.body.trim()) {
    notFound();
  }

  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    'headline': post.title,
    'description': post.description,
    'datePublished': post.date,
    'dateModified': post.updated || post.date,
    'author': {
      '@type': 'Organization',
      'name': post.author,
      '@id': `${absoluteUrl('/')}#organization`,
    },
    'publisher': {
      '@type': 'Organization',
      '@id': `${absoluteUrl('/')}#organization`,
      'name': 'Sbortix',
      'logo': {
        '@type': 'ImageObject',
        'url': absoluteUrl('/sbortix-logo.png'),
      },
    },
    'articleSection': post.category,
    'inLanguage': 'en-US',
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[blogPostingJsonLd, breadcrumbJsonLd]} />
      <article className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden min-h-screen">
        {/* Article Hero */}
        <header
          className="relative pt-36 pb-14 lg:pt-48 lg:pb-16 border-b border-[#2D2D82]/15"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-500">
                <li>
                  <Link href="/" className="hover:text-[#2D2D82] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-[#2D2D82] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#2D2D82] font-semibold truncate max-w-[240px] sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs font-bold">
              <span className="text-[#2D2D82] px-3 py-1 rounded-full bg-[#2D2D82]/10 border border-[#2D2D82]/20">
                {post.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6"
            >
              {post.title}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-body">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2D2D82]/15 pt-4 text-xs font-mono text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#2D2D82]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#2D2D82]" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16">
          <div className="prose prose-lg max-w-none text-[#12131A] leading-relaxed font-body whitespace-pre-line space-y-6">
            {post.body}
          </div>

          {/* Related Service Bridge */}
          <div className="mt-14 p-8 rounded-2xl bg-[#ECEBF5] border border-[#2D2D82]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#2D2D82] uppercase tracking-wider block font-mono mb-1">
                // Related Service &amp; Implementation
              </span>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-lg font-bold text-[#151137]"
              >
                {post.relatedService.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Explore production architectures and enterprise deployments engineered by Sbortix.
              </p>
            </div>
            <Link
              href={post.relatedService.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#2D2D82] hover:bg-[#151137] transition-all flex-shrink-0 shadow-md"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bottom CTA Block */}
          <section className="mt-16 text-center bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold mb-3"
            >
              Ready to Implement High-Fidelity Enterprise Solutions?
            </h2>
            <p className="text-indigo-200 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Connect directly with our engineering leadership to review your technical architecture or schedule a project discovery session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <span>Initiate Technical Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Papers</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
