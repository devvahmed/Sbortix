'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Megaphone,
  Share2,
  Mail,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Users,
  Repeat,
  Send,
} from 'lucide-react';

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState<'seo' | 'social' | 'paid' | 'email'>('seo');

  return (
    <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">
      
      {/* ── HERO HEADER SECTION ── */}
      <section
        className="relative py-16 lg:py-24 border-b border-[#2D2D82]/15"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
        }}
      >
        {/* Ambient Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(45, 45, 130, 0.18) 1.2px, transparent 1.2px),
              linear-gradient(to right, rgba(45, 45, 130, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(45, 45, 130, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px, 72px 72px, 72px 72px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 mb-6 text-xs">
            <Link href="/services" className="font-mono text-[#6B7280] hover:text-[#2D2D82] transition-colors font-semibold uppercase tracking-wider">
              SERVICES
            </Link>
            <span className="text-[#2D2D82]/30">/</span>
            <span className="font-mono text-[#2D2D82] font-bold uppercase tracking-wider">
              DIGITAL MARKETING & PERFORMANCE GROWTH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2D2D82]/25 bg-white shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-wider">
                  ALGORITHMIC GROWTH MARKETING
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.03em',
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] leading-[1.08] mb-6"
              >
                Precision Technical SEO, High-ROAS Ads & Lifecycle Automation
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                We combine deep technical search optimization, multi-channel paid acquisition algorithms (Google, Meta, LinkedIn, TikTok), and lifecycle email automation to capture high-intent enterprise buyers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-md group"
                  style={{
                    backgroundColor: '#2D2D82',
                    background: 'linear-gradient(135deg, #2D2D82 0%, #2C2A78 100%)',
                    boxShadow: '0 4px 18px rgba(45, 45, 130, 0.32)',
                  }}
                >
                  Schedule Growth Strategy Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#pillars"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#151137] bg-white border border-[#2D2D82]/25 shadow-xs hover:border-[#2D2D82]/60 transition-all"
                >
                  View Marketing Pillars
                </a>
              </div>
            </div>

            {/* Performance Live Widget */}
            <div className="lg:col-span-5">
              <div className="bg-[#151137] text-white rounded-2xl p-6 border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2D2D82] flex items-center justify-center text-white">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-white">GROWTH_ENGINE v3.8</h4>
                      <p className="text-[10px] text-indigo-200/70 font-mono">ATTRIBUTION: OMNI_CHANNEL</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    SCALING
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-indigo-200">Organic SEO Growth:</span>
                    <span className="text-emerald-400 font-bold">+214% YoY</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2D2D82]/40 border border-[#2D2D82]/60 flex justify-between items-center">
                    <span className="text-indigo-200">Paid Ad Return (ROAS):</span>
                    <span className="text-emerald-400 font-bold">3.4x - 4.2x</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-indigo-200">Email CTR Rate:</span>
                    <span className="text-indigo-100 font-bold">18.6% Conversion</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[10px] text-indigo-300">
                    <span>ATTRIBUTION: REAL-TIME</span>
                    <span>CAC REDUCTION: -38%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="bg-[#151137] text-white py-8 border-y border-[#2D2D82]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">#1 Page</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">SEO Organic Rankings</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">3.4x - 4.2x</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Average Campaign ROAS</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">-38%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Cost Per Acquisition (CAC)</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Transparent Revenue Sync</div>
          </div>
        </div>
      </section>

      {/* ── DETAILED MARKETING PILLARS (4 GROUPS) ── */}
      <section id="pillars" className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
        
        {/* ── GROUP 1: SEARCH ENGINE OPTIMIZATION (SEO) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D2D82]/10 border border-[#2D2D82]/20 text-[#2D2D82] text-xs font-mono font-bold uppercase">
              [PILLAR // 01]
            </div>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-[#151137]"
            >
              Search Engine Optimization (SEO)
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Dominate high-intent organic search queries with a rigorous technical foundation. We optimize site architecture, Core Web Vitals, schema markup, and authoritative backlink profiles to earn sustainable #1 rankings.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                COMPLETE SEO BREAKDOWN:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Keyword Research', desc: 'Commercial intent mapping & high-value keyword opportunity discovery.' },
                  { title: 'On-Page SEO', desc: 'Heading structure, semantic content optimization, internal linking, and meta tags.' },
                  { title: 'Off-Page SEO', desc: 'High-authority digital PR, link building, and brand authority signals.' },
                  { title: 'Technical SEO', desc: 'Crawl budget optimization, schema markup, rendering performance, & XML sitemaps.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs space-y-1">
                    <div className="flex items-center gap-2 text-[#151137] font-bold text-sm">
                      <Search className="w-4 h-4 text-[#2D2D82]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Search Index Crawl Graph */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="30" y="40" width="340" height="220" rx="16" fill="#151137" />
                {/* Search Bar Graphic */}
                <rect x="60" y="70" width="280" height="36" rx="8" fill="#2D2D82" stroke="rgba(255,255,255,0.2)" />
                <text x="80" y="92" fill="#FFFFFF" fontSize="11" fontFamily="monospace">sbortix.com/enterprise-ai</text>
                <circle cx="315" cy="88" r="8" fill="#10B981" />
                
                {/* Ranking Position Bars */}
                <rect x="60" y="130" width="280" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect x="60" y="130" width="240" height="24" rx="4" fill="#10B981" opacity="0.8" />
                <text x="70" y="146" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">#1 RANKING: HIGH-INTENT KEYWORD</text>

                <rect x="60" y="166" width="280" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect x="60" y="166" width="210" height="24" rx="4" fill="#2D2D82" opacity="0.9" />
                <text x="70" y="182" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">#2 RANKING: ENTERPRISE SEARCH</text>

                <rect x="60" y="202" width="280" height="24" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect x="60" y="202" width="180" height="24" rx="4" fill="#2D2D82" opacity="0.7" />
                <text x="70" y="218" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">#3 RANKING: B2B AUDIT TERMS</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 1 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ECEBF5] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // ORGANIC GROWTH PHILOSOPHY
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              "Technical SEO is not about tricks; it is about building clean web infrastructure that search algorithms trust and high-value decision makers love to read."
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 2: SOCIAL MEDIA MARKETING ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Abstract SVG Illustration: Social Engagement Orbit */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <circle cx="200" cy="150" r="100" fill="none" stroke="#2D2D82" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="200" cy="150" r="60" fill="none" stroke="#151137" strokeWidth="2" />
                <circle cx="200" cy="150" r="30" fill="#2D2D82" />
                <text x="200" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">BRAND</text>

                {/* Orbit Nodes */}
                <circle cx="200" cy="50" r="16" fill="#151137" />
                <text x="200" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">STRATEGY</text>

                <circle cx="300" cy="150" r="16" fill="#10B981" />
                <text x="300" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">CONTENT</text>

                <circle cx="200" cy="250" r="16" fill="#151137" />
                <text x="200" y="254" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">GROWTH</text>

                <circle cx="100" cy="150" r="16" fill="#2D2D82" />
                <text x="100" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">REPORTS</text>
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D2D82]/10 border border-[#2D2D82]/20 text-[#2D2D82] text-xs font-mono font-bold uppercase">
              [PILLAR // 02]
            </div>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-[#151137]"
            >
              Social Media Marketing
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Build a commanding brand voice across professional social platforms. We handle end-to-end social operations — strategic positioning, high-converting visual design, automated scheduling, and active audience engagement.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                ALL 7 SOCIAL MEDIA SERVICES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#151137]">
                {[
                  '1. Strategy & Positioning',
                  '2. Account Setup & Optimization',
                  '3. High-Quality Content Creation',
                  '4. Automated Scheduling',
                  '5. Active Community Management',
                  '6. Algorithmic Organic Growth',
                  '7. Monthly Performance Reporting',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#2D2D82]/15">
                    <Share2 className="w-3.5 h-3.5 text-[#2D2D82] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GROUP 3: PAID ADVERTISING ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D2D82]/10 border border-[#2D2D82]/20 text-[#2D2D82] text-xs font-mono font-bold uppercase">
              [PILLAR // 03]
            </div>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-[#151137]"
            >
              Paid Advertising & Performance Marketing
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Scale revenue with high-ROAS paid campaigns across Google Search, Meta, LinkedIn B2B, YouTube, and TikTok. We continuously optimize ad copy, bidding strategies, and retargeting funnels for maximum return on ad spend.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                PAID AD CHANNELS & OPTIMIZATION:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Google Ads & Search PPC', desc: 'Capture active buying intent with precision keyword bidding and responsive search ads.' },
                  { title: 'Meta Ads (Facebook & Instagram)', desc: 'High-converting visual image & video campaigns with custom lookalike audiences.' },
                  { title: 'LinkedIn Ads (B2B Lead Gen)', desc: 'Target key enterprise C-level executives by industry, company size, and job title.' },
                  { title: 'YouTube & TikTok Video Ads', desc: 'Engaging short-form and in-stream video ads built to capture audience attention.' },
                  { title: 'Campaign Optimization & Retargeting', desc: 'Algorithmic bid adjustments, dynamic product retargeting, and landing page alignment.' },
                ].map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{st.title}</h5>
                      <p className="text-xs text-gray-600">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Multi-Channel Bidding Funnel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Funnel Layers */}
                <polygon points="50,40 350,40 300,110 100,110" fill="#151137" />
                <text x="200" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">GOOGLE + META + LINKEDIN ADS</text>

                <polygon points="105,115 295,115 255,185 145,185" fill="#2D2D82" />
                <text x="200" y="155" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">RETARGETING & OPTIMIZATION</text>

                <polygon points="150,190 250,190 220,260 180,260" fill="#10B981" />
                <text x="200" y="230" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">3.4x ROAS CONVERSION</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 2 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#E8E8F2] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // REVENUE ATTRIBUTION GUARANTEE
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              "We track every ad dollar directly to CRM pipeline revenue — zero vanity metrics, zero hidden fees, and complete attribution transparency."
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 4: EMAIL MARKETING & AUTOMATION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Abstract SVG Illustration: Automated Email Lifecycle Sequence */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="40" y="50" width="100" height="60" rx="8" fill="#151137" />
                <text x="90" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">WELCOME FLOW</text>

                <rect x="150" y="120" width="100" height="60" rx="8" fill="#2D2D82" />
                <text x="200" y="155" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">SEGMENTATION</text>

                <rect x="260" y="190" width="100" height="60" rx="8" fill="#10B981" />
                <text x="310" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">NURTURE & SALE</text>

                <path d="M 140,80 H 150 V 120" fill="none" stroke="#2D2D82" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 250,150 H 260 V 190" fill="none" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2D2D82]/10 border border-[#2D2D82]/20 text-[#2D2D82] text-xs font-mono font-bold uppercase">
              [PILLAR // 04]
            </div>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-[#151137]"
            >
              Email Marketing & Lifecycle Automation
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Turn subscriber lists into predictable repeat revenue. We design high-converting email newsletters, build automated customer onboarding sequences, and implement behavioral segmentation.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                EMAIL AUTOMATION SERVICES:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Campaign Setup & Automation', desc: 'Automated welcome series, abandoned cart recovery, and re-engagement workflows.' },
                  { title: 'Newsletter Design', desc: 'Custom responsive HTML email templates aligned with your corporate brand guidelines.' },
                  { title: 'Marketing Automation', desc: 'Behavioral triggers based on user website actions, purchase history, and engagement.' },
                  { title: 'Customer Segmentation', desc: 'Dynamic lead scoring & audience tagging for hyper-personalized messaging.' },
                ].map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{st.title}</h5>
                      <p className="text-xs text-gray-600">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MARKETING CHANNEL TAB ── */}
      <section className="py-16 bg-[#ECEBF5] border-y border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white rounded-3xl p-8 border border-[#2D2D82]/20 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-wider block mb-1">
                  // GROWTH STRATEGY MATRIX
                </span>
                <h3 className="text-2xl font-extrabold text-[#151137]">How We Scale Your Growth Funnel</h3>
              </div>
              <div className="flex flex-wrap gap-2 bg-[#ECEBF5] p-1.5 rounded-xl">
                {[
                  { id: 'seo', label: 'Technical SEO' },
                  { id: 'paid', label: 'Paid Ad Bidding' },
                  { id: 'social', label: 'Social Content' },
                  { id: 'email', label: 'Email Automation' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#2D2D82] text-white shadow-sm'
                        : 'text-gray-600 hover:text-[#151137]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#151137] text-white p-6 rounded-2xl font-mono text-xs leading-relaxed border border-[#2D2D82]/40">
              {activeTab === 'seo' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Organic Search Engineering Execution</p>
                  <p>1. In-depth technical crawl audit & site speed optimization.</p>
                  <p>2. High-value commercial keyword targeting & topic cluster mapping.</p>
                  <p>3. Schema markup injection & backlink authority building.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Long-term compounding organic search revenue without ongoing ad spend.</p>
                </div>
              )}
              {activeTab === 'paid' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Multi-Channel Paid Campaign Execution</p>
                  <p>1. High-intent Google Search campaigns paired with targeted Meta/LinkedIn visual ads.</p>
                  <p>2. Dynamic retargeting pixels capture drop-off visitors across the web.</p>
                  <p>3. Algorithmic bid adjustments maximize ROAS efficiency.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Immediate 3.4x+ ROAS on ad investment.</p>
                </div>
              )}
              {activeTab === 'social' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Brand Voice & Organic Social Execution</p>
                  <p>1. Editorial content calendar strategy aligned with company milestones.</p>
                  <p>2. Custom visual graphics & short-form video production.</p>
                  <p>3. Active community monitoring and response handling.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Elevated corporate authority & engaged community following.</p>
                </div>
              )}
              {activeTab === 'email' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Behavioral Lifecycle Email Execution</p>
                  <p>1. Automated welcome & onboarding sequences for new leads.</p>
                  <p>2. Dynamic customer segmentation based on purchase behavior.</p>
                  <p>3. High-converting newsletter campaigns designed for maximum CTR.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: 18.6% average open-to-click conversion rate.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL MARKETING CTA BANNER ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
          <h3
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Ready to Engineer High-ROAS Growth?
          </h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Contact our performance marketing team for a full SEO audit, ad account review, and customized growth forecast.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            Request Free Growth Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
