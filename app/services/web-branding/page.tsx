'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Layout,
  Globe,
  Code,
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Monitor,
  ShieldCheck,
  Figma,
  Smartphone,
  Layers,
  FileCode,
} from 'lucide-react';

export default function WebBrandingPage() {
  const [activeTab, setActiveTab] = useState<'design' | 'cro' | 'wordpress' | 'brand'>('design');

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
              WEB ENGINEERING & BRAND IDENTITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold text-[#2D2D82] uppercase tracking-widest block mb-3">
                SYSTEM DESIGN & BRAND ARCHITECTURE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6">
                High-Converting Web Systems, Custom WordPress & Brand Identity
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                We engineer lightning-fast Next.js/React web platforms, high-converting landing pages, custom WordPress builds, and distinctive vector logo identities designed to command market authority.
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
                  Start Web & Brand Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#pillars"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#151137] bg-white border border-[#2D2D82]/25 shadow-xs hover:border-[#2D2D82]/60 transition-all"
                >
                  View Web Capabilities
                </a>
              </div>
            </div>

            {/* Performance Widget */}
            <div className="lg:col-span-5">
              <div className="bg-[#151137] text-white rounded-2xl p-6 border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2D2D82] flex items-center justify-center text-white">
                      <Monitor className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-white">WEB_SYSTEMS v4.0</h4>
                      <p className="text-[10px] text-indigo-200/70 font-mono">LIGHTHOUSE SCORE: 100/100</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-indigo-200">First Contentful Paint (FCP):</span>
                    <span className="text-emerald-400 font-bold">0.4s</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2D2D82]/40 border border-[#2D2D82]/60 flex justify-between items-center">
                    <span className="text-indigo-200">Mobile Responsiveness:</span>
                    <span className="text-emerald-400 font-bold">100% Fluid</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-indigo-200">Brand Vector Standards:</span>
                    <span className="text-indigo-100 font-bold">SVG Identity Lockup</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[10px] text-indigo-300">
                    <span>NEXT.JS + WORDPRESS</span>
                    <span>CRO OPTIMIZED</span>
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
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">100 / 100</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Lighthouse Speed Score</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">&lt;0.8s</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Page Load Latency</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Custom Vector Code</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">2.8x</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Conversion Lift via CRO</div>
          </div>
        </div>
      </section>

      {/* ── DETAILED WEB & BRANDING SERVICES (4 GROUPS) ── */}
      <section id="pillars" className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
        
        {/* ── GROUP 1: WEBSITE DESIGN & ARCHITECTURE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Website Design & Architecture
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We design modern, responsive web applications built with Next.js, React, and Tailwind CSS. Every layout uses deliberate whitespace, concentric double-bezel containers, and accessible typographic scale to create an expensive, agency-grade digital experience.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                DESIGN ARCHITECTURE SERVICES:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Website Design', desc: 'Custom high-converting web layouts designed specifically for your industry vertical.' },
                  { title: 'Enterprise Web Architecture', desc: 'Clean React/Next.js component trees engineered for sub-second page performance.' },
                  { title: 'UI/UX System Design', desc: 'Comprehensive Figma design systems with reusable design tokens, typography, and color schemes.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Layout className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{item.title}</h5>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Precision Layout Grid */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="30" y="30" width="340" height="240" rx="16" fill="#151137" />
                {/* Mock UI Frame */}
                <rect x="50" y="50" width="300" height="20" rx="4" fill="#2D2D82" />
                <circle cx="65" cy="60" r="4" fill="#EF4444" />
                <circle cx="77" cy="60" r="4" fill="#F59E0B" />
                <circle cx="89" cy="60" r="4" fill="#10B981" />

                {/* Wireframe Hero Grid */}
                <rect x="50" y="85" width="180" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
                <rect x="245" y="85" width="105" height="150" rx="8" fill="#2D2D82" opacity="0.8" />
                <rect x="50" y="165" width="180" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 1 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ECEBF5] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // DESIGN INTEGRITY PRINCIPLE
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              "A website is not a digital brochure — it is an automated trust machine engineered to convert raw visitor curiosity into closed commercial contracts."
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 2: LANDING PAGE DESIGN & CRO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Abstract SVG Illustration: Conversion Heatmap & Funnel */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="40" y="40" width="320" height="220" rx="16" fill="#151137" />
                {/* Heatmap zones */}
                <circle cx="120" cy="110" r="40" fill="#EF4444" opacity="0.4" />
                <circle cx="120" cy="110" r="20" fill="#F59E0B" opacity="0.6" />
                <circle cx="120" cy="110" r="8" fill="#10B981" />

                <rect x="200" y="80" width="130" height="40" rx="8" fill="#10B981" />
                <text x="265" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">CTA CONVERT 28%</text>

                <path d="M 60,200 L 340,200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                <text x="200" y="225" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold" fontFamily="monospace">A/B TEST OPTIMIZED</text>
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Landing Page Design & CRO
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Maximize your return on ad spend with high-converting landing page architectures. We apply behavioral psychological triggers, clear CTA hierarchies, and systematic A/B testing to convert paid traffic into customers.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                LANDING PAGE & CRO SERVICES:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Landing Page Design & CRO', desc: 'Custom campaign-specific landing pages engineered for high ad relevance and top conversion rates.' },
                  { title: 'Conversion Rate Optimization (CRO)', desc: 'UX heatmapping, scroll-depth analytics, and friction point elimination.' },
                  { title: 'A/B Testing Systems', desc: 'Rigorous headline, copy, and layout variant testing to systematically lift baseline conversion.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{item.title}</h5>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GROUP 3: WORDPRESS DEVELOPMENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              WordPress Development & Custom CMS
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Custom WordPress development without heavy bloated plugins. We craft bespoke PHP/Gutenberg themes, custom post types, and secure REST API integrations so your content marketing team can publish effortlessly.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                WORDPRESS & CMS SERVICES:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'WordPress Development', desc: 'Bespoke lightweight WordPress themes engineered for 100/100 speed performance.' },
                  { title: 'Custom CMS Architecture', desc: 'Tailored content management workflows, custom fields, and role-based permissions.' },
                  { title: 'API Gateway & Headless CMS Integration', desc: 'Connecting WordPress to Next.js frontends via GraphQL/REST endpoints.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <FileCode className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{item.title}</h5>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Modular CMS Block Architecture */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="50" rx="8" fill="#151137" />
                <text x="200" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">HEADLESS NEXT.JS FRONTEND</text>

                <rect x="50" y="125" width="140" height="120" rx="8" fill="#2D2D82" />
                <text x="120" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">WP REST API</text>

                <rect x="210" y="125" width="140" height="120" rx="8" fill="#10B981" />
                <text x="280" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">CUSTOM POSTS</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 2 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#E8E8F2] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // BRAND IDENTITY LAW
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              "Your visual brand identity is the shorthand for your company's technical capability. Exceptional brand design allows you to command enterprise pricing from day one."
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 4: LOGO DESIGN, BRAND IDENTITY & MESSAGING ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Abstract SVG Illustration: Vector Brand Grid & Identity */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                <rect x="40" y="40" width="320" height="220" rx="16" fill="#151137" />
                {/* Logo Mark Grid */}
                <circle cx="200" cy="150" r="50" fill="none" stroke="#2D2D82" strokeWidth="3" />
                <polygon points="200,100 240,180 160,180" fill="none" stroke="#10B981" strokeWidth="3" />
                <text x="200" y="225" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">VECTOR BRAND LOCKUP</text>
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Logo Design, Brand Identity & Messaging
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Craft a distinct corporate presence that builds immediate authority. We design memorable vector logos, full brand style guides, color token systems, and compelling brand positioning frameworks.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                BRANDING SERVICES BREAKDOWN:
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Logo Design', desc: 'Distinctive, scalable vector logo mark and wordmark lockups for digital and print.' },
                  { title: 'Brand Identity & Guidelines', desc: 'Comprehensive brand books defining typography scales, HSL color palettes, and UI rules.' },
                  { title: 'Brand Messaging & Positioning', desc: 'Value proposition framing, tone-of-voice frameworks, and executive pitch decks.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Palette className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#151137]">{item.title}</h5>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE WEB METHODOLOGY TAB ── */}
      <section className="py-16 bg-[#ECEBF5] border-y border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white rounded-3xl p-8 border border-[#2D2D82]/20 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-wider block mb-1">
                  // ENGINEERING WORKFLOW
                </span>
                <h3 className="text-2xl font-extrabold text-[#151137]">How We Build Enterprise Websites & Brands</h3>
              </div>
              <div className="flex flex-wrap gap-2 bg-[#ECEBF5] p-1.5 rounded-xl">
                {[
                  { id: 'design', label: 'UI Architecture' },
                  { id: 'cro', label: 'CRO & Funnels' },
                  { id: 'wordpress', label: 'Custom WordPress' },
                  { id: 'brand', label: 'Brand Identity' },
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
              {activeTab === 'design' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// UI/UX & Web Systems Workflow</p>
                  <p>1. Wireframing & interactive Figma prototype design.</p>
                  <p>2. Next.js component development with Tailwind CSS & micro-animations.</p>
                  <p>3. Cross-browser testing and Lighthouse 100/100 speed optimization.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Unmatched digital brand presentation & lightning-fast speed.</p>
                </div>
              )}
              {activeTab === 'cro' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Conversion Rate Optimization Workflow</p>
                  <p>1. Heatmap & user scroll session audit.</p>
                  <p>2. High-converting copy alignment and CTA redesign.</p>
                  <p>3. Split-testing deployment to measure conversion lift.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: 2.8x average conversion rate increase on paid landing pages.</p>
                </div>
              )}
              {activeTab === 'wordpress' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// WordPress & Custom CMS Development</p>
                  <p>1. Custom lightweight PHP theme development without heavy page builder plugins.</p>
                  <p>2. Custom Gutenberg blocks & ACF Pro fields for easy client editing.</p>
                  <p>3. Hardened security setup & SSL CDN caching deployment.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Clean content management system built to scale indefinitely.</p>
                </div>
              )}
              {activeTab === 'brand' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Vector Brand Identity Creation</p>
                  <p>1. Concept sketching and vector geometry alignment.</p>
                  <p>2. Color token palette definition and typography scale mapping.</p>
                  <p>3. Exporting full logo lockup packages (SVG, PNG, EPS) + Brand Guidelines PDF.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Distinctive corporate identity that inspires client confidence.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WEB & BRANDING CTA BANNER ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
          <h3
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Ready to Build Your Next Web Platform or Brand?
          </h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Contact our design and web engineering team to discuss your project requirements and receive a detailed proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            Start Your Web & Brand Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
