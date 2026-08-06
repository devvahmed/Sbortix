import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Sbortix | Engineered Intelligence for Growth',
  description: 'Explore our core services: AI Solutions, Digital Marketing, Web & Branding, and Data Science. Systems engineered for modern growth teams.',
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAFAFD] overflow-hidden">
      
      {/* ── HERO HEADER SECTION ── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center border-b border-indigo-100/60 bg-gradient-to-b from-indigo-50/40 via-white to-[#FAFAFD]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-200/80 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-[#2D2D82] uppercase tracking-wider">
            Enterprise Services
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F0E1A] tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Services Engineered for Business Scale
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          We combine AI engineering, predictive data science, and performance marketing into one connected growth system — designed to adapt and scale with your organization.
        </p>
      </section>

      {/* ── SECTION 1: AI SOLUTIONS (White Base + Subtle Tonal Tint) ── */}
      <section className="relative py-20 lg:py-24 bg-white border-b border-indigo-100/80 grid-pattern">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold text-[#2D2D82] uppercase tracking-wider block mb-3">
              Section 01
            </span>
            <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-md text-xs font-bold text-indigo-800 uppercase tracking-wider mb-3">
              AI SOLUTIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E1A] tracking-tight mb-4">
              Systems that don&apos;t sleep.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We design and deploy AI systems that handle real business work — not demos. From customer conversations to internal operations, our AI runs continuously, learns from data, and gets more useful the longer it runs.
            </p>
          </div>

          {/* 4 Sub-groups Grid with Perfectly Fitted 3D Image Boxes & Interactive Dual UI Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_chatbot.png"
                    alt="AI Chatbots & Conversational AI — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Glassmorphism Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE AGENT ENGINE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    LATENCY: 0.18s
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    1. AI Chatbots & Conversational AI
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Custom chatbots, AI customer support agents, and voice assistants that understand context and handle real conversations — not scripted replies.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="font-mono text-xs text-[#2D2D82]">24/7 Autonomous Agents</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_analytics.png"
                    alt="AI-Powered Data & Analytics — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Glassmorphism Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    REALTIME BI PIPELINE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ACCURACY: 99.4%
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    2. AI-Powered Data & Analytics
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Predictive forecasting, live BI dashboards, pattern recognition, anomaly detection, and automated reporting that turn raw data into daily decisions.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="font-mono text-xs text-[#2D2D82]">Predictive Decision Engine</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_workflow.png"
                    alt="AI Automation & Workflow — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Glassmorphism Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    ORCHESTRATED ENGINE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    SAVED: 40+ HR/WK
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    3. AI Automation & Workflow
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Business process automation, workflow orchestration, and intelligent document processing that remove repetitive manual work from your team&apos;s day.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[ORCHESTRATED_WORKFLOWS]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_custom_ml.png"
                    alt="Custom AI Development — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Glassmorphism Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    PROPRIETARY ML CORE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    CUSTOM WEIGHTS
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    4. Custom AI Development
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Custom machine learning models, computer vision systems, and AI API integrations built around your specific data and use case.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[FINE_TUNED_PROPRIETARY_ML]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: DIGITAL MARKETING (Pale Indigo Tint Background) ── */}
      <section className="relative py-20 lg:py-24 bg-[#F8F9FE] border-b border-indigo-100/80 section-brand-tint">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="tech-label text-indigo-700 font-bold block mb-3 text-xs tracking-widest uppercase">
              // SECTION 02
            </span>
            <div className="inline-block px-3 py-1 bg-indigo-100/70 border border-indigo-200 rounded-md text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3">
              DIGITAL MARKETING
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E1A] tracking-tight mb-4">
              Growth you can measure.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We run marketing like an engineering discipline — test, measure, and scale what works across every channel, with full visibility into what&apos;s actually driving results.
            </p>
          </div>

          {/* 4 Sub-groups Grid with Fitted Images & Tech Overlay Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_seo.png"
                    alt="Search Engine Optimization — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ORGANIC RANKING ENGINE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    SEARCH TRUST: HIGH
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    1. Search Engine Optimization (SEO)
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Keyword research, on-page and off-page SEO, and technical audits that build the trust signals search engines reward.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[ORGANIC_AUTHORITY_BUILDING]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_social_media.png"
                    alt="Social Media Marketing — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    DISTRIBUTION PIPELINE
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ORGANIC REACH: +340%
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    2. Social Media Marketing
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Strategy, content creation, scheduling, and community management focused on real organic growth, not vanity metrics.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[ENGAGED_COMMUNITY_DISTRIBUTION]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ppc_ads.png"
                    alt="Paid Advertising (PPC) — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    CONVERSION TARGETING
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ROAS OPTIMIZED
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    3. Paid Advertising (PPC)
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Google, Meta, YouTube, LinkedIn, and TikTok ad campaigns optimized continuously, with retargeting systems that recover lost conversions.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[HIGH_INTENT_RETARGETING]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-2xl p-6 sm:p-8 subtle-shadow card-glow-hover flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-6 border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_email_marketing.png"
                    alt="Email Marketing & Automation — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Dual Floating Tech Overlay Badges */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    AUTOMATED WORKFLOW LOOPS
                  </div>
                  <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    OPEN RATE: 42%
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F0E1A] mb-3">
                    4. Email Marketing & Automation
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Automated campaigns, newsletter design, and customer segmentation that turn subscribers into repeat customers.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                <span className="tech-label">[SEGMENTED_LTV_AUTOMATION]</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: WEB & BRANDING (White Base + Blueprint Tint) ── */}
      <section className="relative py-20 lg:py-24 bg-white border-b border-indigo-100/80 blueprint-pattern">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="tech-label text-indigo-700 font-bold block mb-3 text-xs tracking-widest uppercase">
                // SECTION 03
              </span>
              <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-md text-xs font-bold text-indigo-800 uppercase tracking-wider mb-3">
                WEB & BRANDING
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F0E1A] tracking-tight mb-4">
                Your first impression, engineered.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                A website is your hardest-working salesperson. We design and build sites, landing pages, and brand identities engineered to convert visitors into customers.
              </p>
            </div>

            {/* Rich Image Asset Box with Dual Overlay Badges */}
            <div className="relative w-full lg:w-[420px] h-60 rounded-2xl overflow-hidden border border-indigo-200/80 shadow-md shrink-0">
              <Image
                src="/services/service_web_branding.png"
                alt="Web & Branding Engineering — Sbortix"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                ENTERPRISE UI SYSTEM
              </div>
              <div className="absolute top-3 right-3 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                LIGHTHOUSE: 99/100
              </div>
            </div>
          </div>

          {/* 6 Sub-services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              {
                title: 'Website Design & Development',
                desc: 'Custom performant Next.js and web applications engineered for speed, mobile responsiveness, and high conversion.',
              },
              {
                title: 'Landing Page Design & CRO',
                desc: 'Conversion-rate-optimized landing pages designed to capture leads and turn ad clicks into high-margin sales.',
              },
              {
                title: 'WordPress Development',
                desc: 'Clean, responsive custom WordPress builds with easy CMS content management for your marketing team.',
              },
              {
                title: 'Logo Design',
                desc: 'Distinctive, memorable corporate logos and visual brand marks designed to command market authority.',
              },
              {
                title: 'Brand Identity & Guidelines',
                desc: 'Complete typography systems, curated color palettes, visual assets, and enterprise brand style boards.',
              },
              {
                title: 'Brand Messaging & Positioning',
                desc: 'Strategic copy frameworks, value propositions, and brand voice guidelines that resonate with buyers.',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-gradient-to-b from-indigo-50/50 via-white to-white border border-indigo-100/90 rounded-xl p-6 subtle-shadow card-glow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="tech-label text-indigo-600 text-[10px] font-bold">
                      [CAPABILITY_0{idx + 1}]
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F0E1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ── SECTION 4: DATA SCIENCE (Coming Soon - Visually De-Emphasized) ── */}
      <section className="relative py-20 lg:py-24 bg-[#0F0E1A] text-white overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 30%, rgba(79, 70, 229, 0.4) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-900/60 border border-indigo-500/40 rounded-full text-xs font-bold text-indigo-300 uppercase tracking-widest mb-4">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              [IN DEVELOPMENT // COMING SOON]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Data Science & Advanced ML Intelligence
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Our engineering team is building next-generation machine learning algorithms and predictive data pipelines to be released for enterprise partners.
            </p>
          </div>

          {/* 8 Items Outlined Grid (Lower Opacity De-emphasized Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 opacity-85">
            {[
              { name: 'Customer Churn Prediction', tag: 'ML_PIPELINE' },
              { name: 'Recommendation Engines', tag: 'ALGORITHMIC' },
              { name: 'Fraud Detection', tag: 'ANOMALY_SCAN' },
              { name: 'Dynamic Pricing Optimization', tag: 'REALTIME_BI' },
              { name: 'Agentic AI Systems', tag: 'AUTONOMOUS' },
              { name: 'Generative AI & Synthetic Data', tag: 'LLM_FINE_TUNE' },
              { name: 'Data Engineering & ETL', tag: 'INFRASTRUCTURE' },
              { name: 'MLOps & Model Monitoring', tag: 'ENTERPRISE_DEPLOY' },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-indigo-500/30 bg-indigo-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-indigo-400/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="tech-label text-indigo-400 text-[9px]">
                    {item.tag}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 opacity-60" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-gray-200">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA BOTTOM BANNER ── */}
      <section className="py-16 bg-white border-t border-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F0E1A] mb-4">
            Ready to Engineer Your Business Growth?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Schedule a strategic discovery session with our engineering team to review your goals and receive a custom solution roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white transition-all shadow-md group"
              style={{
                background: 'linear-gradient(135deg, #1F108E 0%, #3730A3 100%)',
              }}
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm text-[#0F0E1A] bg-white border border-indigo-200 hover:bg-indigo-50/50 transition-colors shadow-xs"
            >
              View Client Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
