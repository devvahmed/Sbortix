'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bot,
  Zap,
  BarChart3,
  Cpu,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
  MessageSquare,
  Workflow,
  CheckCircle2,
  Lock,
  Layers,
  Database,
} from 'lucide-react';
import ServiceFaqSection from '@/components/ServiceFaqSection';
import RelatedServicesBlock from '@/components/RelatedServicesBlock';
import { SERVICES_FAQS } from '@/lib/services-faq';

export default function AISolutionsClient() {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'automation' | 'analytics' | 'custom'>('chatbot');

  return (
    <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">
      
      {/* ── HERO HEADER SECTION ── */}
      <section
        className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-[#2D2D82]/15"
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
              AI SOLUTIONS & AUTOMATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold text-[#2D2D82] uppercase tracking-widest block mb-3">
                ENTERPRISE AI ARCHITECTURE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6">
                Enterprise AI Solutions &amp; Workflow Automation
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                We engineer production-ready AI systems: 24/7 conversational support bots, predictive machine learning pipelines, and automated business workflows that reduce operational overhead by up to 70% while keeping your data secured in private infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  data-cta="service-ai-solutions-primary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-md group"
                  style={{
                    backgroundColor: '#2D2D82',
                    background: 'linear-gradient(135deg, #2D2D82 0%, #2C2A78 100%)',
                    boxShadow: '0 4px 18px rgba(45, 45, 130, 0.32)',
                  }}
                >
                  Request Technical AI Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#151137] bg-white border border-[#2D2D82]/25 shadow-xs hover:border-[#2D2D82]/60 transition-all"
                >
                  Explore 4 AI Pillars
                </a>
              </div>
            </div>

            {/* Live Interactive Node Preview Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#151137] text-white rounded-2xl p-6 border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2D2D82] flex items-center justify-center text-white">
                      <Brain className="w-4 h-4 text-indigo-200" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-white">SBX_AI_ENGINE v4.2</p>
                      <p className="text-[10px] text-indigo-200/70 font-mono">NODE: RAG_ORCHESTRATOR</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-[10px] text-indigo-300 uppercase mb-1">// Inbound Data Stream</p>
                    <p className="text-white font-sans text-xs">&ldquo;Parse Q3 enterprise leads &amp; run predictive churn probability.&rdquo;</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2D2D82]/40 border border-[#2D2D82]/60 ml-4">
                    <p className="text-[10px] text-emerald-400 uppercase mb-1">// AI Processing Output</p>
                    <p className="text-white font-sans text-xs">
                      &ldquo;Processed 4,280 accounts. High propensity leads scored: 842. Automated calendar bookings dispatched.&rdquo;
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[10px] text-indigo-200 text-center">
                    <div>
                      <span className="block font-bold text-emerald-400 font-mono">0.38s</span>
                      <span className="text-[9px] opacity-70">LATENCY</span>
                    </div>
                    <div>
                      <span className="block font-bold text-emerald-400 font-mono">99.4%</span>
                      <span className="text-[9px] opacity-70">ACCURACY</span>
                    </div>
                    <div>
                      <span className="block font-bold text-emerald-400 font-mono">24/7</span>
                      <span className="text-[9px] opacity-70">UPTIME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY METRICS STRIP ── */}
      <section className="bg-[#151137] text-white py-8 border-y border-[#2D2D82]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">70%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">OPEX Cost Reduction</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">&lt;0.5s</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">AI Latency Speed</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">99.4%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Model Accuracy</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-indigo-200 text-xs font-mono font-semibold uppercase tracking-wider">Enterprise Data Security</div>
          </div>
        </div>
      </section>

      {/* ── DETAILED AI CAPABILITIES (4 GROUPS) ── */}
      <section id="capabilities" className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
        
        {/* ── GROUP 1: AI CHATBOTS & CONVERSATIONAL AI ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Production-Ready AI Agents &amp; Conversational Bots
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We engineer intelligent 24/7 conversational agents powered by custom RAG (Retrieval-Augmented Generation) architectures. Your AI assistants understand complex domain questions, qualify leads instantly, and integrate directly with your CRM and calendar nodes without hallucinating answers.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-4">
              <p className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                CORE SUB-SERVICES &amp; CAPABILITIES:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs">
                  <Bot className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[#151137]">Custom Chatbot Development</h3>
                    <p className="text-xs text-gray-600">Tailored website &amp; enterprise portal chat widgets trained on your private knowledge base.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs">
                  <MessageSquare className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[#151137]">Customer Support AI Agents</h3>
                    <p className="text-xs text-gray-600">Autonomous ticket resolution, FAQ handling, and multi-turn lead qualification with zero human delay.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[#151137]">AI Voice Assistants</h3>
                    <p className="text-xs text-gray-600">Natural voice synthesis for automated phone bookings, customer follow-ups, and inbound call routing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Conversational AI Graph */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-md" aria-label="Abstract diagram showing retrieval augmented generation RAG core network" role="img">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2D2D82" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#151137" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
                <path d="M 60,150 Q 150,50 240,150 T 340,150" fill="none" stroke="#2D2D82" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 60,150 Q 150,250 240,150 T 340,150" fill="none" stroke="#2C2A78" strokeWidth="2" />
                
                <circle cx="200" cy="150" r="45" fill="url(#grad1)" />
                <circle cx="200" cy="150" r="55" fill="none" stroke="#2D2D82" strokeWidth="1.5" strokeOpacity="0.4" />
                <text x="200" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">RAG CORE</text>
                <text x="200" y="162" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="monospace">SYNC ACTIVE</text>
                
                <circle cx="80" cy="90" r="22" fill="#FFFFFF" stroke="#2D2D82" strokeWidth="2" />
                <text x="80" y="94" textAnchor="middle" fill="#151137" fontSize="9" fontWeight="bold">CRM</text>
                
                <circle cx="320" cy="90" r="22" fill="#FFFFFF" stroke="#2D2D82" strokeWidth="2" />
                <text x="320" y="94" textAnchor="middle" fill="#151137" fontSize="9" fontWeight="bold">CHAT</text>

                <circle cx="80" cy="210" r="22" fill="#FFFFFF" stroke="#2D2D82" strokeWidth="2" />
                <text x="80" y="214" textAnchor="middle" fill="#151137" fontSize="9" fontWeight="bold">VOICE</text>

                <circle cx="320" cy="210" r="22" fill="#FFFFFF" stroke="#2D2D82" strokeWidth="2" />
                <text x="320" y="214" textAnchor="middle" fill="#151137" fontSize="9" fontWeight="bold">DATA</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 1 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#ECEBF5] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // ENTERPRISE IMPACT PRINCIPLE
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              &ldquo;Replacing static web forms with live conversational AI agents increases inbound lead qualification rates by up to 340% while cutting human reply latency to zero.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 2: AI-POWERED DATA & ANALYTICS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Abstract diagram of predictive analytics machine learning forecasting" role="img">
                <rect x="30" y="30" width="340" height="240" rx="16" fill="#151137" />
                <path d="M 50,220 Q 120,120 180,180 T 350,70" fill="none" stroke="#10B981" strokeWidth="3" />
                <path d="M 50,220 Q 120,170 180,210 T 350,130" fill="none" stroke="#2D2D82" strokeWidth="2" strokeDasharray="3 3" />
                
                <circle cx="180" cy="180" r="5" fill="#10B981" />
                <circle cx="350" cy="70" r="6" fill="#10B981" />
                <text x="320" y="60" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">FORECAST +214%</text>
                
                <line x1="50" y1="230" x2="350" y2="230" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="50" y1="170" x2="350" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="50" y1="110" x2="350" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Automated Business Systems &amp; Predictive Analytics
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Transform raw database logs into actionable executive foresight. Our predictive machine learning models detect subtle operational anomalies, forecast pipeline demand with high precision, and generate automated intelligence summaries delivered directly to your leadership team.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <p className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                FULL SUB-SERVICE BREAKDOWN:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  'Predictive Analytics & Forecasting',
                  'AI-Powered BI Dashboards',
                  'Data Mining & Pattern Recognition',
                  'Anomaly Detection Systems',
                  'AI-Driven Reporting & Insights',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#2D2D82]/15 font-semibold text-[#151137]">
                    <BarChart3 className="w-4 h-4 text-[#2D2D82] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GROUP 3: AI AUTOMATION & WORKFLOW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              AI Automation &amp; Workflow Orchestration
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Eliminate costly manual bottlenecking across sales operations, document parsing, and database synchronization. We build resilient end-to-end automation pipelines that execute work 24 hours a day with deterministic verification and zero human latency.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <p className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                AUTOMATION SUB-SERVICES:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'Business Process Automation',
                    desc: 'End-to-end operational task execution across ERP, CRM, and cloud storage systems.',
                  },
                  {
                    title: 'AI-Powered Workflow Orchestration',
                    desc: 'Multi-step agent pipelines that handle document validation, client emails, and status updates.',
                  },
                  {
                    title: 'Automated Data Entry & Extraction',
                    desc: 'Instant OCR & LLM extraction of invoices, PDF contracts, and unformatted customer input.',
                  },
                ].map((st, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm text-[#151137]">{st.title}</h3>
                      <p className="text-xs text-gray-600">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract SVG Illustration: Workflow Pipeline */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-[#ECEBF5] to-white border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Abstract diagram of multi-step AI workflow orchestration pipeline" role="img">
                <rect x="40" y="60" width="90" height="60" rx="8" fill="#FFFFFF" stroke="#2D2D82" strokeWidth="2" />
                <text x="85" y="95" textAnchor="middle" fill="#151137" fontSize="10" fontWeight="bold">PDF INGEST</text>

                <rect x="155" y="120" width="90" height="60" rx="8" fill="#2D2D82" />
                <text x="200" y="155" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">LLM PARSER</text>

                <rect x="270" y="180" width="90" height="60" rx="8" fill="#151137" />
                <text x="315" y="215" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">CRM SYNC</text>

                <path d="M 130,90 H 155 V 120" fill="none" stroke="#2D2D82" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 245,150 H 270 V 180" fill="none" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── BOLD PULL-QUOTE PANEL 2 ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#E8E8F2] border border-[#2D2D82]/20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block">
              // ARCHITECTURAL GUARANTEE
            </span>
            <blockquote
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-2xl sm:text-3xl font-extrabold text-[#151137] leading-snug"
            >
              &ldquo;Every AI solution we deploy is hosted securely within your private cloud environment — complete code ownership, zero data leakage, and enterprise SLA reliability.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* ── GROUP 4: CUSTOM AI DEVELOPMENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-gradient-to-br from-white to-[#ECEBF5] border border-[#2D2D82]/20 shadow-xl relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Abstract diagram of custom deep neural network layers" role="img">
                <circle cx="80" cy="80" r="16" fill="#2D2D82" />
                <circle cx="80" cy="150" r="16" fill="#2D2D82" />
                <circle cx="80" cy="220" r="16" fill="#2D2D82" />

                <circle cx="200" cy="60" r="16" fill="#151137" />
                <circle cx="200" cy="120" r="16" fill="#151137" />
                <circle cx="200" cy="180" r="16" fill="#151137" />
                <circle cx="200" cy="240" r="16" fill="#151137" />

                <circle cx="320" cy="110" r="18" fill="#10B981" />
                <circle cx="320" cy="190" r="18" fill="#10B981" />

                <line x1="96" y1="80" x2="184" y2="60" stroke="#2D2D82" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="96" y1="150" x2="184" y2="120" stroke="#2D2D82" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="96" y1="220" x2="184" y2="180" stroke="#2D2D82" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="216" y1="120" x2="302" y2="110" stroke="#10B981" strokeWidth="2" />
                <line x1="216" y1="180" x2="302" y2="190" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Custom AI Development &amp; Machine Learning Engineering
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              When off-the-shelf APIs fall short, we build custom machine learning models, computer vision systems, and proprietary AI microservices fine-tuned specifically on your operational datasets to establish a long-term competitive moat.
            </p>

            <div className="pt-4 border-t border-[#2D2D82]/15 space-y-3">
              <p className="font-mono text-xs font-bold text-[#151137] uppercase tracking-wider">
                CUSTOM ENGINEERING CAPABILITIES:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'Custom Machine Learning Models',
                    desc: 'Supervised & unsupervised ML architectures engineered for niche business classification and prediction.',
                  },
                  {
                    title: 'Computer Vision & Image Recognition',
                    desc: 'Real-time visual inspection, object classification, and document intelligence models.',
                  },
                  {
                    title: 'AI API Development & Integration',
                    desc: 'High-throughput, secure REST & gRPC endpoints connecting AI infrastructure to your legacy stack.',
                  },
                ].map((st, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#2D2D82]/15 shadow-xs flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[#2D2D82] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm text-[#151137]">{st.title}</h3>
                      <p className="text-xs text-gray-600">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE WORKFLOW DEMO TAB ── */}
      <section className="py-16 bg-[#ECEBF5] border-y border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-white rounded-3xl p-8 border border-[#2D2D82]/20 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-wider block mb-1">
                  // INTERACTIVE ARCHITECTURE DEMO
                </span>
                <h2 className="text-2xl font-extrabold text-[#151137]">How Our Enterprise AI Systems Execute</h2>
              </div>
              <div className="flex flex-wrap gap-2 bg-[#ECEBF5] p-1.5 rounded-xl">
                {[
                  { id: 'chatbot', label: 'AI Chatbot Support' },
                  { id: 'analytics', label: 'Predictive BI Analytics' },
                  { id: 'automation', label: 'Workflow Orchestration' },
                  { id: 'custom', label: 'Custom ML Models' },
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
              {activeTab === 'chatbot' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// 24/7 Conversational AI &amp; Lead Sync Flow</p>
                  <p>1. Inbound user message arrives via web widget, WhatsApp, or voice endpoint.</p>
                  <p>2. RAG Orchestrator fetches vector embeddings from your enterprise knowledge base.</p>
                  <p>3. AI agent responds in &lt;0.4s and qualifies lead details automatically.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: 100% response coverage without manual support rep overhead.</p>
                </div>
              )}
              {activeTab === 'analytics' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Predictive Data &amp; Anomaly Stream</p>
                  <p>1. Real-time data connectors ingestion from SQL, BigQuery, and sales databases.</p>
                  <p>2. Time-series forecasting algorithms detect revenue trends &amp; churn risks.</p>
                  <p>3. Executive summary alerts dispatched directly to Slack / Teams / Email.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Real-time decision speed with 99.4% model accuracy.</p>
                </div>
              )}
              {activeTab === 'automation' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Autonomous Business Process Pipeline</p>
                  <p>1. Invoices &amp; contract PDFs automatically parsed via Vision OCR.</p>
                  <p>2. Multi-step LLM pipeline extracts line items, validates totals, and updates CRM/ERP.</p>
                  <p>3. Dispatches automated confirmation receipt to customer.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: 90% reduction in manual data processing time.</p>
                </div>
              )}
              {activeTab === 'custom' && (
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">// Custom Machine Learning &amp; Vision API</p>
                  <p>1. Fine-tuned PyTorch / TensorFlow weights deployed in private Docker container.</p>
                  <p>2. High-throughput gRPC endpoint handles enterprise image / data classification.</p>
                  <p>3. Continuous automated model retraining loop on new incoming data nodes.</p>
                  <p className="text-indigo-300 font-semibold pt-2">&gt; RESULT: Tailored competitive moat built on your proprietary data.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STEP AI IMPLEMENTATION PROCESS ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block mb-2">
            // ENGINEERING WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight">
            Our 5-Step AI Implementation Methodology
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            From technical data discovery to production deployment, we engineer AI systems that solve real business bottlenecks with verified uptime and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              step: '01',
              title: 'Feasibility & Data Discovery',
              description:
                'We evaluate your proprietary databases, documentation quality, and security requirements to define an actionable AI implementation scope.',
            },
            {
              step: '02',
              title: 'System & Security Architecture',
              description:
                'We design private VPC boundaries, data isolation protocols, vector store infrastructure, and deterministic fallback controls.',
            },
            {
              step: '03',
              title: 'Model Fine-Tuning & Pipeline Build',
              description:
                'We configure custom RAG chunking algorithms, train task-specific models, and build robust API connectors for existing databases.',
            },
            {
              step: '04',
              title: 'Grounding & Guardrail Testing',
              description:
                'We run adversarial testing, accuracy benchmarking, and schema validation to eliminate hallucinations and secure edge cases.',
            },
            {
              step: '05',
              title: 'Private Deployment & Monitoring',
              description:
                'We deploy the AI containers into your cloud environment, connect real-time observability telemetry, and provide team operational training.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#2D2D82]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-[#2D2D82] block mb-3">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#151137] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO THIS SERVICE IS FOR ── */}
      <section className="py-20 bg-[#ECEBF5]/50 border-y border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block mb-2">
              // AUDIENCE FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight">
              Who Our Enterprise AI Solutions Are Built For
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              We partner with organizations ready to leverage AI as core operational infrastructure rather than experimental novelties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Operations & Support Teams',
                desc: 'Organizations handling high-volume repetitive customer inquiries, multi-tier ticketing queues, or manual invoice parsing that seek automated 24/7 resolution.',
              },
              {
                title: 'High-Growth Software & Fintech Companies',
                desc: 'Technology teams seeking to build embedded generative AI features, predictive lead propensity models, or autonomous workflow triggers into their customer portals.',
              },
              {
                title: 'Data-Sensitive & Regulated Organizations',
                desc: 'Companies requiring strict on-premise or private VPC deployments that prohibit sharing sensitive IP, customer records, or financial data with public model providers.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#2D2D82]/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ECEBF5] text-[#2D2D82] flex items-center justify-center font-mono font-bold text-sm mb-4">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-[#151137] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SBORTIX ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-[#2D2D82] uppercase tracking-widest block mb-2">
            // ENGINEERING ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151137] tracking-tight">
            Why Enterprise Teams Choose Sbortix for AI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            We deliver production-hardened machine intelligence engineered by senior software developers, not experimental script wrappers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Private Cloud Isolation',
              desc: 'Your models and data run exclusively inside your dedicated AWS, GCP, or Azure VPC with zero public model training retention.',
              icon: Lock,
            },
            {
              title: 'Deterministic Grounding',
              desc: 'We combine vector retrieval with deterministic business validation rules to ensure 99.4% accuracy with zero hallucinated data.',
              icon: ShieldCheck,
            },
            {
              title: 'Complete Code Ownership',
              desc: 'You receive 100% of the source code, training scripts, Docker images, and model weights upon project completion.',
              icon: Database,
            },
            {
              title: 'Sub-Second Response Latency',
              desc: 'We engineer streaming endpoints and optimized embedding caches to guarantee sub-0.5s response latency under heavy enterprise load.',
              icon: Zap,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#2D2D82]/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ECEBF5] text-[#2D2D82] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#151137] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <ServiceFaqSection
        faqs={SERVICES_FAQS['ai-solutions']}
        title="Frequently Asked Questions: Enterprise AI"
        subtitle="// ARCHITECTURE & SECURITY"
      />

      {/* ── RELATED SERVICES ── */}
      <RelatedServicesBlock currentSlug="ai-solutions" />

      {/* ── TECHNICAL CTA BANNER ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Ready to Deploy Enterprise AI Solutions?
          </h2>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Schedule a free technical discovery session with our senior AI engineers to evaluate your dataset and receive a tailored implementation architecture.
          </p>
          <Link
            href="/contact"
            data-cta="service-ai-solutions-primary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            Book Free Technical AI Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
