'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES, type CaseStudy } from '@/lib/work-data';

export default function WorkClient() {
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'MARKETING' | 'WEB'>('ALL');
  const projects: CaseStudy[] = CASE_STUDIES;
  const filteredProjects = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">

      {/* ── HEADER ── */}
      <section
        className="relative pt-40 pb-16 lg:pt-52 lg:pb-20 border-b border-[#2D2D82]/15"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
            Case Studies & Client Impact
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Engineered Work & Proven Enterprise Outcomes
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore technical case studies and software implementations delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.
          </p>
        </div>
      </section>

      {/* ── STATS BAND: BY THE NUMBERS ── */}
      <section className="bg-[#151137] text-white py-10 border-b border-[#2D2D82]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">50+</div>
            <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Enterprise Deployments</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">70%</div>
            <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Avg OPEX Cost Cut</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">3.4x - 4.2x</div>
            <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Average Paid Ad ROAS</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">99.4%</div>
            <div className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">AI Model Accuracy</div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS & SERVICE DIRECT LINKS ── */}
      <section className="py-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
              Filter by Category:
            </span>
            {(['ALL', 'AI', 'MARKETING', 'WEB'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === cat
                    ? 'bg-[#2D2D82] text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-[#151137] hover:border-gray-300'
                  }`}
              >
                {cat === 'ALL' ? 'All Case Studies' : `${cat} Solutions`}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#2D2D82]">
            <span className="text-gray-400">SERVICES:</span>
            <Link href="/services/ai-solutions" className="font-bold hover:underline">
              AI Solutions
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/services/digital-marketing" className="font-bold hover:underline">
              SEO &amp; PPC
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/services/web-branding" className="font-bold hover:underline">
              Web &amp; Branding
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPLIT PROJECT SHOWCASE SECTIONS ── */}
      <div className="space-y-16 lg:space-y-24 pb-20">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={project.id}
              className={`py-12 sm:py-16 border-y border-[#2D2D82]/10 transition-colors ${isEven ? 'bg-white' : 'bg-[#ECEBF5]/60'
                }`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full relative rounded-2xl overflow-hidden border border-gray-200/90 shadow-xl ${project.imageBg || 'bg-gray-900'
                          } group ${project.imageFit === 'contain'
                            ? 'aspect-[16/10] flex flex-col justify-between'
                            : 'min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center'
                          } cursor-pointer`}
                        title={`Open live platform: ${project.title}`}
                      >
                        {/* Browser Chrome Topbar when in contain/software preview mode */}
                        {project.imageFit === 'contain' && (
                          <div className="w-full px-4 py-2.5 bg-[#151828]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                            </div>
                            <div className="px-3 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-indigo-200 border border-white/10 truncate max-w-[200px]">
                              {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>LIVE</span>
                            </div>
                          </div>
                        )}

                        {/* Image Canvas */}
                        <div className={`relative w-full ${project.imageFit === 'contain' ? 'flex-1 p-2 sm:p-3 flex items-center justify-center' : 'h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]'}`}>
                          <Image
                            src={project.imageUrl}
                            alt={project.imageAlt}
                            fill
                            quality={95}
                            className={`${project.imageFit === 'contain'
                                ? 'object-contain p-1 sm:p-2 group-hover:scale-[1.02]'
                                : 'object-cover object-center group-hover:scale-105'
                              } transition-transform duration-500`}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>

                        {/* Dark gradient overlay only for full-bleed cover photos */}
                        {project.imageFit !== 'contain' && (
                          <div className="absolute inset-0 bg-gradient-to-t from-[#151137]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        )}

                        {/* Status tag (if not contain mode, keep top left) */}
                        {project.imageFit !== 'contain' && (
                          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#151137]/90 backdrop-blur-md border border-[#2D2D82]/60 shadow-md">
                            <span className="text-[11px] font-semibold text-white tracking-wider">
                              {project.statusTag}
                            </span>
                          </div>
                        )}

                        {/* Top-Right Live Demo Floating Pill for non-contain */}
                        {project.imageFit !== 'contain' && (
                          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-[#2D2D82] text-white shadow-lg text-[11px] font-bold flex items-center gap-1.5 group-hover:bg-[#151137] transition-colors">
                            <span>Live Platform</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        )}

                        {/* Brand Accent Bottom Hairline */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D2D82] via-[#2C2A78] to-transparent" />
                      </a>
                    ) : (
                      <div className="w-full relative rounded-2xl overflow-hidden border border-gray-200/90 shadow-xl bg-gray-900 group min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center">
                        <Image
                          src={project.imageUrl}
                          alt={project.imageAlt}
                          fill
                          quality={90}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#151137]/60 via-transparent to-transparent opacity-60" />

                        {/* Brand Indigo Corner Tag */}
                        <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#151137]/90 backdrop-blur-md border border-[#2D2D82]/60 shadow-md">
                          <span className="text-[11px] font-semibold text-white tracking-wider">
                            {project.statusTag}
                          </span>
                        </div>

                        {/* Brand Accent Bottom Hairline */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D2D82] via-[#2C2A78] to-transparent" />
                      </div>
                    )}
                  </div>

                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[#2D2D82] uppercase bg-[#2D2D82]/10 px-3 py-1 rounded-md border border-[#2D2D82]/20 inline-block">
                          {project.eyebrow}
                        </span>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                          {project.client}
                        </span>
                      </div>

                      <h2
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-tight mb-3"
                      >
                        {project.hasDetail ? (
                          <Link href={`/work/${project.slug}`} className="hover:text-[#2D2D82] transition-colors">
                            {project.title}
                          </Link>
                        ) : (
                          project.title
                        )}
                      </h2>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {/* Problem / Solution / Result Mini-Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#ECEBF5]/70">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-red-600 uppercase block tracking-wider">
                          Problem
                        </span>
                        <p className="text-xs text-gray-700 leading-snug">{project.problem}</p>
                      </div>
                      <div className="space-y-1 sm:border-l sm:border-[#2D2D82]/15 sm:pl-3">
                        <span className="text-[10px] font-bold text-[#2D2D82] uppercase block tracking-wider">
                          Solution
                        </span>
                        <p className="text-xs text-gray-700 leading-snug">{project.solution}</p>
                      </div>
                      <div className="space-y-1 sm:border-l sm:border-[#2D2D82]/15 sm:pl-3">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase block tracking-wider">
                          Result
                        </span>
                        <p className="text-xs font-semibold text-[#151137] leading-snug">⚡ {project.result}</p>
                      </div>
                    </div>

                    {/* Tech Stack Tags + Architecture Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2D2D82]/15">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold px-2.5 py-1 bg-white text-gray-700 rounded-md border border-gray-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.hasDetail && (
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-xs text-[#151137] bg-white border border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                          >
                            <span>Case Study Deep-Dive</span>
                            <span aria-hidden="true">&rarr;</span>
                          </Link>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-xs text-white bg-[#2D2D82] hover:bg-[#151137] transition-all shadow-sm"
                          >
                            <span>Live Demo</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}

                        <Link
                          href={
                            project.category === 'AI'
                              ? '/services/ai-solutions'
                              : project.category === 'MARKETING'
                              ? '/services/digital-marketing'
                              : '/services/web-branding'
                          }
                          className="inline-flex items-center gap-1 font-bold text-xs text-[#2D2D82] hover:text-[#151137] transition-colors"
                        >
                          {project.category === 'AI'
                            ? 'Related Service: AI Solutions & Automation \u2192'
                            : project.category === 'MARKETING'
                            ? 'Related Service: SEO & Digital Marketing \u2192'
                            : 'Related Service: Web Design & Branding \u2192'}
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 font-semibold text-xs text-gray-500 hover:text-[#2D2D82] transition-colors"
                        >
                          Request Case Study Audit &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── METHODOLOGY: HOW WE BUILD ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 border-t border-[#2D2D82]/15">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
            Our Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
            How We Build & Deploy Enterprise Systems
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Every client engagement follows a disciplined four-stage engineering framework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#2D2D82]/15">
          {[
            { step: '01', title: 'Technical Audit', desc: 'Deep-dive evaluation of existing data pipelines, marketing channels, and workflow bottlenecks.' },
            { step: '02', title: 'System Architecture', desc: 'Custom AI model selection, design token system creation, and database schema mapping.' },
            { step: '03', title: 'Production Deployment', desc: 'CI/CD deployment to your private cloud environment with full integration testing.' },
            { step: '04', title: 'Continuous Scaling', desc: 'Automated monitoring, model retraining, and conversion optimization loops.' },
          ].map((item, idx) => (
            <div key={item.step} className={`pt-6 sm:pt-0 ${idx === 0 ? '' : 'sm:pl-6'} flex flex-col justify-between`}>
              <div>
                <span className="font-mono text-2xl font-extrabold text-[#2D2D82] block mb-3">{item.step}</span>
                <h3 className="font-bold text-lg text-[#151137] mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BOX ── */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
          <h3
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Want Similar Systems & Measurable Outcomes?
          </h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Contact our engineering team to schedule a discovery session and receive a tailored implementation proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            Initiate Project Inquiry &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
