import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { getCaseStudyBySlug, getCaseStudiesWithDetail } from '@/lib/work-data';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const detailedStudies = getCaseStudiesWithDetail();
  return detailedStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study || !study.hasDetail) {
    return {
      title: 'Case Study Not Found | Sbortix',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    path: `/work/${study.slug}`,
    title: `${study.title} | Sbortix`,
    description: study.overview,
    image: study.imageUrl,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  // Strictly enforce: only generate pages for case studies with real detail content
  if (!study || !study.hasDetail) {
    notFound();
  }

  const studyUrl = absoluteUrl(`/work/${study.slug}`);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${studyUrl}#article`,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': studyUrl,
    },
    'headline': study.title,
    'description': study.overview,
    'author': {
      '@type': 'Organization',
      '@id': `${absoluteUrl('/')}#organization`,
      'name': 'Sbortix Engineering Team',
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
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: study.title, path: `/work/${study.slug}` },
  ]);

  const detail = study.detail;

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <article className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden min-h-screen">
        {/* Header / Hero */}
        <header
          className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 border-b border-[#2D2D82]/15"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
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
                  <Link href="/work" className="hover:text-[#2D2D82] transition-colors">
                    Work
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#2D2D82] font-semibold truncate max-w-[240px] sm:max-w-md">
                  {study.title}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs font-bold">
              <span className="text-[#2D2D82] px-3 py-1 rounded-full bg-[#2D2D82]/10 border border-[#2D2D82]/20">
                {study.eyebrow}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{study.client}</span>
              <span className="text-gray-400">•</span>
              <span className="text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
                {study.statusTag}
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6"
            >
              {study.title}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
              {study.overview}
            </p>

            {/* Top Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#2D2D82] hover:bg-[#151137] transition-all shadow-md"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-[#151137] bg-white border border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
              >
                <span>Request Case Study Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </header>

        {/* Visual Showcase Banner */}
        <section className="py-12 max-w-6xl mx-auto px-6 sm:px-10">
          <div
            className={`relative rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xl ${
              study.imageBg || 'bg-gray-900'
            } ${study.imageFit === 'contain' ? 'aspect-[16/10]' : 'min-h-[360px] sm:min-h-[460px]'}`}
          >
            <Image
              src={study.imageUrl}
              alt={study.imageAlt}
              fill
              quality={95}
              className={`${
                study.imageFit === 'contain'
                  ? 'object-contain p-4 sm:p-6'
                  : 'object-cover object-center'
              }`}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-20 space-y-16">
          {/* Key Metrics Band (Only if present) */}
          {detail?.metricsBreakdown && detail.metricsBreakdown.length > 0 && (
            <section className="p-8 sm:p-10 rounded-3xl bg-[#151137] text-white">
              <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-6">
                // Performance Benchmarks &amp; Verified Metrics
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {detail.metricsBreakdown.map((m, idx) => (
                  <div key={idx} className="space-y-1 border-l-2 border-indigo-500/40 pl-4">
                    <span className="text-xs text-indigo-200 uppercase tracking-wider block font-mono">
                      {m.label}
                    </span>
                    <span
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="text-3xl font-extrabold text-white block"
                    >
                      {m.value}
                    </span>
                    {m.context && <p className="text-xs text-indigo-300/80">{m.context}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Problem, Solution, Result Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-red-100 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider block">
                [01_CHALLENGE]
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold text-[#151137]"
              >
                The Operational Bottleneck
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{study.problem}</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-indigo-100 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider block">
                [02_ENGINEERING]
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold text-[#151137]"
              >
                Engineered Solution
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                [03_OUTCOME]
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold text-[#151137]"
              >
                Measurable Impact
              </h2>
              <p className="text-sm font-semibold text-[#151137] leading-relaxed">
                ⚡ {study.result}
              </p>
            </div>
          </section>

          {/* Challenge Deep Dive (Hidden if not provided) */}
          {detail?.challengeDeepDive && (
            <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#2D2D82]/15 shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider block">
                // Technical Challenge Deep-Dive
              </span>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-bold text-[#151137]"
              >
                Context &amp; Enterprise Requirements
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {detail.challengeDeepDive}
              </p>
            </section>
          )}

          {/* Architecture Highlights (Hidden if not provided) */}
          {detail?.architectureHighlights && detail.architectureHighlights.length > 0 && (
            <section className="bg-white p-8 sm:p-10 rounded-3xl border border-[#2D2D82]/15 shadow-sm space-y-6">
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider block">
                // System Architecture Highlights
              </span>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-bold text-[#151137]"
              >
                How We Architected the Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.architectureHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFD] border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Deliverables List (Hidden if not provided) */}
          {detail?.deliverables && detail.deliverables.length > 0 && (
            <section className="bg-[#ECEBF5]/70 p-8 sm:p-10 rounded-3xl border border-[#2D2D82]/15 space-y-4">
              <span className="text-xs font-mono font-bold text-[#2D2D82] uppercase tracking-wider block">
                // Delivered Assets &amp; Platforms
              </span>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold text-[#151137]"
              >
                Scope Delivered by Sbortix
              </h3>
              <ul className="space-y-2">
                {detail.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-[#2D2D82]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack Tags */}
          <section className="border-t border-[#2D2D82]/15 pt-8">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider block mb-4">
              Deployed Technologies &amp; Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Related Service Bridge */}
          <section className="p-8 rounded-3xl bg-[#ECEBF5] border border-[#2D2D82]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#2D2D82] uppercase tracking-wider block font-mono mb-1">
                // Related Service Practice
              </span>
              <h3
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-lg font-bold text-[#151137]"
              >
                {study.relatedService.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Learn more about our methodology and engineering capabilities in this domain.
              </p>
            </div>
            <Link
              href={study.relatedService.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#2D2D82] hover:bg-[#151137] transition-all flex-shrink-0 shadow-md"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>

          {/* Conversion Footer CTA */}
          <section className="text-center bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold mb-3"
            >
              Want Similar Technical Outcomes for Your Organization?
            </h2>
            <p className="text-indigo-200 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Schedule an architecture discovery session with our engineering team to audit your current systems and discuss implementation milestones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Work</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
