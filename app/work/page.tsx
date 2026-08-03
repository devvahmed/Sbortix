'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'MARKETING' | 'WEB'>('ALL');

  const projects = [
    {
      id: 'PRJ_01',
      title: 'Autonomous Inbound Sales Qualifier',
      category: 'AI',
      client: 'Enterprise SaaS Provider',
      metrics: '3.4x Lead Conversion Boost',
      description: 'Built an autonomous AI sales agent that engages web visitors, qualifies target accounts, and schedules discovery calls automatically in CRM.',
      tags: ['OpenAI API', 'Next.js', 'Vector Database', 'HubSpot Integration'],
    },
    {
      id: 'PRJ_02',
      title: 'Predictive Lead Scoring Pipeline',
      category: 'AI',
      client: 'Fintech Capital Firm',
      metrics: '42% Reduction in CAC',
      description: 'Machine learning model analyzing 500,000+ historical deal logs to assign live purchase probability scores to incoming inbound leads.',
      tags: ['Python', 'XGBoost', 'Snowflake', 'BigQuery'],
    },
    {
      id: 'PRJ_03',
      title: 'Programmatic SEO Growth Engine',
      category: 'MARKETING',
      client: 'B2B Logistics Platform',
      metrics: '+280% Organic Traffic Growth',
      description: 'Engineered a data-driven programmatic SEO architecture generating 1,200+ location-specific landing pages with sub-second core web vitals.',
      tags: ['Next.js App Router', 'Dynamic Schema', 'Keyword Graphing'],
    },
    {
      id: 'PRJ_04',
      title: 'Multi-Touch Revenue Attribution Suite',
      category: 'MARKETING',
      client: 'Global E-Commerce Network',
      metrics: '100% Attribution Accuracy',
      description: 'Custom reporting dashboard tracking multi-channel ad spend against closed revenue across Google Ads, LinkedIn, and Meta.',
      tags: ['Data Pipelines', 'Looker Studio', 'PostgreSQL'],
    },
    {
      id: 'PRJ_05',
      title: 'Enterprise FinTech Platform Redesign',
      category: 'WEB',
      client: 'Enterprise Banking Core',
      metrics: '99.99% Operational Uptime',
      description: 'Complete web application redesign with custom design tokens, dark/light theme standard, and strict WCAG AAA accessibility compliance.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: 'PRJ_06',
      title: 'AI Document Extraction System',
      category: 'AI',
      client: 'Global Logistics Operator',
      metrics: '85% Manual Cost Savings',
      description: 'Automated OCR & NLP pipeline parsing vendor bills and shipping bills with automated ERP reconciliation.',
      tags: ['Computer Vision', 'PyTorch', 'FastAPI'],
    },
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full bg-white py-xl">
      {/* Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="inline-block px-xs py-1 border hairline-border rounded mb-md bg-white">
          <span className="tech-label text-primary">[SYSTEM_CAPABILITIES_CATALOG]</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-md max-w-4xl">
          Engineered Work & Proven Enterprise Outcomes
        </h1>
        <p className="text-secondary font-body-lg text-body-lg max-w-3xl">
          Explore case studies and technical implementations delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center gap-xs border-b border-outline-variant pb-md">
          <span className="tech-label text-outline mr-md">[FILTER_BY]:</span>
          {(['ALL', 'AI', 'MARKETING', 'WEB'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-md py-xs rounded-lg font-mono text-xs transition-all ${
                filter === cat
                  ? 'bg-primary-container text-white font-bold'
                  : 'bg-surface border border-outline-variant text-secondary hover:text-primary'
              }`}
            >
              {cat === 'ALL' ? 'ALL_PROJECTS' : `${cat}_SYSTEMS`}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg mb-24">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-center mb-md">
                <span className="tech-label text-primary font-bold">{project.id} // {project.category}</span>
                <span className="px-xs py-0.5 rounded bg-surface-container text-secondary tech-label text-[9px]">{project.client}</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold mb-xs text-on-background group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="inline-block px-xs py-1 rounded bg-green-50 text-green-700 font-mono text-xs font-bold mb-md border border-green-200">
                ⚡ {project.metrics}
              </div>
              <p className="text-secondary text-body-md mb-lg leading-relaxed">{project.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-xs mb-lg">
                {project.tags.map((t) => (
                  <span key={t} className="tech-label text-[9px] px-xs py-0.5 bg-surface text-outline border border-outline-variant rounded">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-xs text-primary font-bold hover:underline text-sm"
              >
                Request Architecture Deep-Dive
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <section className="px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-primary-container text-white p-xl rounded-xl text-center">
          <h3 className="font-headline-lg text-headline-lg mb-md">Want similar results for your business?</h3>
          <Link href="/contact" className="inline-block bg-white text-primary px-lg py-md rounded-lg font-label-md font-bold hover:bg-surface-container-low transition-colors">
            Initiate Project Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
