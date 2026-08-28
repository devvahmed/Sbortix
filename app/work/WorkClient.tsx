'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  eyebrow: string;
  title: string;
  category: 'AI' | 'MARKETING' | 'WEB';
  client: string;
  metrics: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  statusTag: string;
}

export default function WorkClient() {
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'MARKETING' | 'WEB'>('ALL');

  const projects: Project[] = [
    {
      id: '01',
      eyebrow: 'Machine Learning',
      title: 'Agentic Sales Assistant & Lead Qualifier',
      category: 'AI',
      client: 'Enterprise SaaS Provider',
      metrics: '3.4x Lead Conversion Boost',
      overview:
        'Built an autonomous 24/7 AI sales agent that engages inbound web visitors, qualifies target accounts through multi-turn domain dialogue, and schedules discovery calls directly into CRM calendars.',
      problem: 'Sales reps spent 18+ hours weekly manually qualifying raw leads, causing 60% of inquiries to drop off.',
      solution: 'Deployed a 24/7 RAG-powered AI sales assistant connected to HubSpot and Outlook Calendar.',
      result: '3.4x increase in qualified lead conversion with <0.4s response speed.',
      tags: ['OpenAI LLM', 'Next.js', 'Vector Database', 'HubSpot API'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Agentic Sales Assistant CRM Lead Dashboard Interface',
      statusTag: 'Live System • 0.38s Latency',
    },
    {
      id: '02',
      eyebrow: 'Predictive Data',
      title: 'Predictive Lead Scoring Engine',
      category: 'AI',
      client: 'Fintech Capital Firm',
      metrics: '42% Reduction in CAC',
      overview:
        'Machine learning predictive pipeline processing 500,000+ historical deal logs to assign live purchase probability scores to incoming inbound leads in real time.',
      problem: 'Ad spend was wasted on low-probability prospects due to manual lead prioritization.',
      solution: 'Engineered a real-time XGBoost scoring pipeline integrated into Snowflake and BigQuery.',
      result: '42% reduction in customer acquisition cost (CAC) and 99.4% scoring accuracy.',
      tags: ['Python', 'XGBoost', 'Snowflake', 'BigQuery'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Predictive Lead Scoring Analytics Software Interface',
      statusTag: 'Production • 99.4% Accuracy',
    },
    {
      id: '03',
      eyebrow: 'Growth Marketing',
      title: 'Full-Funnel Growth & Attribution Engine',
      category: 'MARKETING',
      client: 'B2B Logistics Platform',
      metrics: '+280% Organic Traffic Growth',
      overview:
        'Engineered a data-driven programmatic SEO architecture generating 1,200+ location-specific landing pages paired with unified multi-channel paid acquisition modeling.',
      problem: 'Fragmented ad campaigns with zero unified ROI attribution across paid and organic channels.',
      solution: 'Built 1,200+ programmatic SEO landing pages and a unified multi-touch revenue attribution model.',
      result: '+280% organic traffic surge and 4.2x average return on ad spend (ROAS).',
      tags: ['Next.js App Router', 'Google Ads API', 'Looker Studio', 'PostgreSQL'],
      imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Full-Funnel Growth Marketing Analytics Dashboard',
      statusTag: 'Deployed • 4.2x ROAS',
    },
    {
      id: '04',
      eyebrow: 'Document Intelligence',
      title: 'AI Document Intelligence Platform',
      category: 'AI',
      client: 'Global Logistics Operator',
      metrics: '85% Manual Cost Savings',
      overview:
        'Automated computer vision and LLM document extraction pipeline parsing vendor invoices, shipping bills, and customs manifests with instant ERP reconciliation.',
      problem: '12,000+ monthly shipping invoices processed manually, leading to data errors and delayed vendor payments.',
      solution: 'Implemented an automated OCR + LLM document extraction pipeline with instant ERP sync.',
      result: '85% reduction in manual data entry overhead and 99.8% extraction accuracy.',
      tags: ['Computer Vision', 'PyTorch', 'FastAPI', 'Enterprise ERP'],
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'AI Document Extraction and Invoice Scanning UI',
      statusTag: 'System Active • 99.8% Accuracy',
    },
    {
      id: '05',
      eyebrow: 'FinTech Web',
      title: 'Enterprise FinTech Core Platform',
      category: 'WEB',
      client: 'Enterprise Banking Core',
      metrics: '99.99% Operational Uptime',
      overview:
        'Complete enterprise web platform re-architecture with custom design system tokens, sub-second page rendering, and WCAG AAA accessibility compliance.',
      problem: 'Legacy banking dashboard suffered from high bounce rates and 4.2-second page load times.',
      solution: 'Re-architected on Next.js App Router with custom design system tokens and edge caching.',
      result: 'Sub-0.6s page load speed and 99.99% operational uptime.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js App Router'],
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Enterprise FinTech Banking Platform Dashboard',
      statusTag: 'Production • 0.6s Load Speed',
    },
    {
      id: '06',
      eyebrow: 'Performance PPC',
      title: 'Algorithmic Paid Acquisition Engine',
      category: 'MARKETING',
      client: 'Global E-Commerce Network',
      metrics: '-35% Lower Acquisition CAC',
      overview:
        'Automated paid campaign optimization suite adjusting multi-channel ad bidding in real-time based on live product inventory levels and margin thresholds.',
      problem: 'Ad campaigns ran on out-of-stock items, burning budget during inventory supply gaps.',
      solution: 'Connected ad bid management directly to live inventory database triggers.',
      result: '-35% lower cost per acquisition and 3.8x baseline ROAS lift.',
      tags: ['Google Ads API', 'Meta Graph API', 'Python', 'Redis'],
      imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Algorithmic Paid Ad Bidding Performance Software',
      statusTag: 'Live Feed • 3.8x ROAS',
    },
  ];

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

      {/* ── FILTER TABS ── */}
      <section className="py-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
            Filter by Category:
          </span>
          {(['ALL', 'AI', 'MARKETING', 'WEB'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-[#2D2D82] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-[#151137] hover:border-gray-300'
              }`}
            >
              {cat === 'ALL' ? 'All Case Studies' : `${cat} Solutions`}
            </button>
          ))}
        </div>
      </section>

      {/* ── SPLIT PROJECT SHOWCASE SECTIONS ── */}
      <div className="space-y-16 lg:space-y-24 pb-20">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={project.id}
              className={`py-12 sm:py-16 border-y border-[#2D2D82]/10 transition-colors ${
                isEven ? 'bg-white' : 'bg-[#ECEBF5]/60'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2">
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
                        {project.title}
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

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-bold text-xs text-[#2D2D82] hover:text-[#151137] transition-colors"
                      >
                        Request Case Study Audit &rarr;
                      </Link>
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
