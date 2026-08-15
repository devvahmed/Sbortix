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
      <section className="relative pt-36 pb-16 sm:pt-44 lg:pt-48 lg:pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center border-b border-indigo-100/60 bg-gradient-to-b from-indigo-50/40 via-white to-[#FAFAFD]">
        <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
          Enterprise Services
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-background tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
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
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
              Section 01 — AI Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-background tracking-tight leading-tight mb-4">
              Systems that don&apos;t sleep.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We design and deploy AI systems that handle real business work — not demos. From customer conversations to internal operations, our AI runs continuously, learns from data, and gets more useful the longer it runs.
            </p>
          </div>

          {/* 4 Alternating Split Rows Layout with Read More Buttons */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Row 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_chatbot.png"
                    alt="AI Chatbots & Conversational AI — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE AGENT ENGINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    LATENCY: 0.18s
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  24/7 Autonomous Agents
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  1. AI Chatbots &amp; Conversational AI
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Engineered with multi-turn memory, real-time RAG context retrieval, and direct API function calling. Our AI chatbots integrate directly into your CRM, database, and support ticketing platforms to resolve 70%+ of customer inquiries autonomously 24/7 without scripted fallbacks.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/ai-solutions"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Predictive Decision Engine
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  2. AI-Powered Data &amp; Analytics
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Transform disparate raw data streams into self-updating executive BI dashboards. We deploy custom predictive forecasting algorithms, automated anomaly detection alerts, and natural language query interfaces that empower your team to ask questions and get instant statistical answers.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/ai-solutions#analytics"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_analytics.png"
                    alt="AI-Powered Data & Analytics — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    REALTIME BI PIPELINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ACCURACY: 99.4%
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_workflow.png"
                    alt="AI Automation & Workflow — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    ORCHESTRATED ENGINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    SAVED: 40+ HR/WK
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Orchestrated Workflows
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  3. AI Automation &amp; Workflow
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Eliminate hundreds of manual operational hours every month. We orchestrate end-to-end multi-app workflow pipelines, intelligent OCR document extraction, automated invoice processing, and multi-step data transformations that run in the background without human supervision.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/ai-solutions#automation"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 4: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/60 via-white to-white border border-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Fine-Tuned Proprietary ML
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  4. Custom AI Development
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Bespoke machine learning architectures fine-tuned on your proprietary corporate data. From custom domain LLM fine-tuning and computer vision models to secure, self-hosted API microservices, we build scalable AI solutions tailored to your unique operational edge.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/ai-solutions#custom"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ai_custom_ml.png"
                    alt="Custom AI Development — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    PROPRIETARY ML CORE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    CUSTOM WEIGHTS
                  </div>
                </div>
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
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
              Section 02 — Digital Marketing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-background tracking-tight leading-tight mb-4">
              Growth you can measure.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We run marketing like an engineering discipline — test, measure, and scale what works across every channel, with full visibility into what&apos;s actually driving results.
            </p>
          </div>

          {/* 4 Alternating Split Rows Layout with Read More Buttons */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Row 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_seo.png"
                    alt="Search Engine Optimization — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ORGANIC RANKING ENGINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    SEARCH TRUST: HIGH
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Organic Authority Building
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  1. Search Engine Optimization (SEO)
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Comprehensive data-driven search architecture that commands organic market dominance. We execute granular technical audits, Core Web Vitals performance tuning, semantic content clusters, and high-authority link acquisition strategies designed to convert organic searchers into qualified buyers.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/digital-marketing"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Engaged Community Distribution
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  2. Social Media Marketing
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Turn social media channels into predictable customer acquisition pipelines. We combine audience research, high-production visual content creation, conversion-focused messaging, and active community management across LinkedIn, X, Meta, and YouTube to build real brand equity.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/digital-marketing#social"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_social_media.png"
                    alt="Social Media Marketing — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    DISTRIBUTION PIPELINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ORGANIC REACH: +340%
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_ppc_ads.png"
                    alt="Paid Advertising (PPC) — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    CONVERSION TARGETING
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ROAS OPTIMIZED
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  High-Intent Retargeting
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  3. Paid Advertising (PPC)
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Full-funnel performance marketing engineered for maximum ROAS. We build, test, and continuously optimize ad campaigns across Google Search, Meta, LinkedIn, and YouTube — backed by custom pixel tracking, multi-touch attribution, and retargeting flows that reclaim lost buyers.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/digital-marketing#ppc"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 4: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/70 via-white to-white border border-indigo-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Segmented LTV Automation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  4. Email Marketing &amp; Automation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Behavioral email lifecycle automation that maximizes customer lifetime value (LTV). We build segmented lead nurture sequences, automated abandoned cart/quote recovery flows, dynamic product recommendations, and conversion-optimized broadcast templates that run automatically.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/digital-marketing#email"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_email_marketing.png"
                    alt="Email Marketing & Automation — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    AUTOMATED WORKFLOW LOOPS
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    OPEN RATE: 42%
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: WEB & BRANDING (White Base + Blueprint Tint) ── */}
      <section className="relative py-20 lg:py-24 bg-white border-b border-indigo-100/80 blueprint-pattern">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* 4 Alternating Split Rows Layout with Read More Buttons */}
          <div className="space-y-12 sm:space-y-16">
            
            {/* Row 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/50 via-white to-white border border-indigo-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_web_branding.png"
                    alt="Website Design & Architecture — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ENTERPRISE UI SYSTEM
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    LIGHTHOUSE: 99/100
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Next.js &amp; React Systems
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  1. Website Design &amp; Development
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Enterprise-grade Next.js 15 and React web applications engineered for sub-second page loads and maximum conversion rates. Built with clean TypeScript, tailored modern UI design systems, flawless mobile responsiveness, and strict accessibility standards.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/web-branding"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/50 via-white to-white border border-indigo-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Conversion Rate Optimization
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  2. Landing Page Design &amp; CRO
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  High-stakes landing pages designed with persuasive layout hierarchy, psychological conversion triggers, and frictionless UX. Paired with heatmaps, A/B split-testing frameworks, and fast load times to turn cold ad traffic into direct sales and booked calls.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/web-branding#cro"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_web_branding.png"
                    alt="Landing Page Design & CRO — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    CONVERSION FUNNEL ENGINE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    CONVERSION LIFT: +28%
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/50 via-white to-white border border-indigo-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_web_branding.png"
                    alt="WordPress Development — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    CUSTOM CMS ARCHITECTURE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    ZERO PLUGIN BLOAT
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Tailored CMS Workflows
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  3. WordPress Development &amp; Custom CMS
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Custom-coded WordPress themes and Gutenberg block architectures built completely free of heavy page-builder bloat. We deliver secure, lightning-fast CMS solutions that allow non-technical marketing teams to manage content, publish blogs, and create pages effortlessly.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/web-branding#wordpress"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 4: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-gradient-to-b from-indigo-50/50 via-white to-white border border-indigo-100/90 rounded-3xl p-6 sm:p-8 lg:p-10 subtle-shadow">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block">
                  Vector Identity &amp; Guidelines
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0E1A] leading-tight">
                  4. Logo Design &amp; Brand Identity
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Complete visual authority systems that position your enterprise at the top of your market. We deliver vector logo design packages, curated color tokens, modern typography hierarchies, brand voice guidelines, and comprehensive digital style books.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/web-branding#branding"
                    className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95 transition-all group"
                  >
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden border border-indigo-100/90 shadow-sm">
                  <Image
                    src="/services/service_web_branding.png"
                    alt="Logo Design & Brand Identity — Sbortix"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-indigo-100/90 px-3 py-1 rounded-full text-[10px] font-bold text-indigo-900 shadow-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    BRAND POSITIONING CORE
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#0F0E1A]/85 backdrop-blur-md border border-indigo-400/40 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold text-indigo-200 shadow-xs uppercase tracking-wider">
                    FULL BRAND LOCKUP
                  </div>
                </div>
              </div>
            </div>

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
            <span className="text-xs sm:text-sm font-bold text-indigo-300 uppercase tracking-widest block mb-3">
              In Development — Coming Soon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
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
