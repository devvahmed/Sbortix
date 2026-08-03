'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SplineScene from '@/components/SplineScene';

export default function HomePage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    module: 'AI Solutions [SRVC_01]',
    payload: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.identity,
          email: formData.email,
          service: formData.module,
          payload: formData.payload,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setStatusMsg(data.message);
        setFormData({ identity: '', email: '', module: 'AI Solutions [SRVC_01]', payload: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'TRANSMISSION_FAILED');
      }
    } catch {
      setStatus('error');
      setStatusMsg('NETWORK_ERROR: Connection failed.');
    }
  };

  return (
    <div className="w-full bg-[#FAFAFD]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-[#FAFAFD] py-xl lg:py-24 grid-pattern min-h-[700px] flex items-center">
        <div className="absolute inset-0 ambient-indigo-glow z-[1] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60 z-[2]"></div>
        
        <div className="relative z-10 px-margin-desktop max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="text-left">
              <div className="inline-block px-xs py-1 border border-primary/20 rounded-md mb-md bg-white/95 backdrop-blur-sm shadow-xs">
                <span className="tech-label text-primary font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  [SYSTEM_STATUS: ACTIVE]
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl mb-md leading-tight text-on-background drop-shadow-sm lg:text-left">
                Precision Marketing <br className="hidden md:block" /> Engineered by AI
              </h1>
              <p className="text-secondary font-body-lg text-body-lg max-w-2xl mb-lg">
                We bridge the gap between complex data science and high-performance marketing. Sbortix delivers enterprise-grade intelligence to modern growth teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-sm">
                <Link
                  href="/contact"
                  className="brand-button-gradient text-white px-lg py-md rounded-xl font-label-md text-label-md hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 text-center"
                >
                  Start Project
                </Link>
                <Link
                  href="/work"
                  className="border border-indigo-200 text-on-background px-lg py-md rounded-xl font-label-md text-label-md hover:bg-indigo-50/60 transition-all-200 bg-white/90 backdrop-blur-sm text-center shadow-xs"
                >
                  View Capabilities
                </Link>
              </div>
            </div>

            <div className="h-[400px] lg:h-[600px] w-full relative" style={{ background: 'radial-gradient(circle, rgba(55, 48, 163, 0.08) 0%, transparent 70%)' }}>
              <SplineScene sceneUrl="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white py-md border-y border-indigo-900/60 relative shadow-md">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center text-center gap-md relative z-10">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-indigo-300">database</span>
            <span className="font-mono text-label-sm text-indigo-100 uppercase tracking-tight font-semibold">Data Science Engineered</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-indigo-300">smart_toy</span>
            <span className="font-mono text-label-sm text-indigo-100 uppercase tracking-tight font-semibold">AI + Marketing Systems</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-indigo-300">public</span>
            <span className="font-mono text-label-sm text-indigo-100 uppercase tracking-tight font-semibold">Global Service Node: KHI-PAK</span>
          </div>
        </div>
      </section>

      {/* Company Overview & Value Proposition Section */}
      <section className="py-24 bg-white border-b border-indigo-100 reveal relative" id="about-overview">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10">
          <div className="max-w-3xl mb-16 text-left">
            <span className="tech-label text-primary font-semibold mb-xs block bg-indigo-50/80 px-3 py-1 rounded border border-indigo-100/60 inline-block">
              [SYSTEM_IDENTITY // WHO_WE_ARE]
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4 leading-tight">
              We Engineer Business Growth <br className="hidden sm:block" /> with AI & Advanced Data Systems
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              <strong className="text-on-background font-semibold">Sbortix</strong> is a hybrid Enterprise AI & Digital Marketing agency. We replace manual guesswork with autonomous AI agents, predictive lead scoring, high-converting web applications, and algorithmic marketing campaigns.
            </p>
          </div>

          {/* 3 Core Operational Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl brand-card-gradient border border-indigo-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-indigo-200/40 group-hover:text-primary/20 transition-colors">
                <span className="material-symbols-outlined text-6xl">smart_toy</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-primary font-mono font-bold mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-on-background mb-3">Autonomous AI Agents</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  We deploy custom AI sales assistants, customer support bots, and internal RAG databases that automate manual tasks and operate 24/7 with zero downtime.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-mono text-primary font-semibold">
                <span>AI PIPELINE AUTOMATION</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl brand-card-gradient border border-indigo-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-indigo-200/40 group-hover:text-primary/20 transition-colors">
                <span className="material-symbols-outlined text-6xl">query_stats</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-primary font-mono font-bold mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-on-background mb-3">Algorithmic Marketing</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  We run technical SEO, high-ROAS paid campaigns, and automated email outreach scaled by machine learning algorithms that target your ideal enterprise buyers.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-mono text-primary font-semibold">
                <span>PREDICTIVE LEAD SCORING</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-2xl brand-card-gradient border border-indigo-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-indigo-200/40 group-hover:text-primary/20 transition-colors">
                <span className="material-symbols-outlined text-6xl">web</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-primary font-mono font-bold mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-on-background mb-3">Web & Brand Engineering</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  We build lightning-fast React/Next.js web applications, client dashboards, and authoritative brand identities designed to turn visitors into loyal clients.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-mono text-primary font-semibold">
                <span>NEXT.JS & REACT SYSTEMS</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>
          </div>

          {/* Quick Business Impact Summary Bar */}
          <div className="bg-[#0C0830] text-white rounded-2xl p-8 border border-indigo-900/60 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-700/50 flex items-center justify-center flex-shrink-0 text-indigo-300">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <h4 className="font-mono text-lg font-bold text-white">70% Overhead Cut</h4>
                <p className="text-indigo-200/80 text-xs font-sans">Autonomous AI handles repetitive sales & data ops</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-700/50 flex items-center justify-center flex-shrink-0 text-indigo-300">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h4 className="font-mono text-lg font-bold text-white">3.4x Higher ROAS</h4>
                <p className="text-indigo-200/80 text-xs font-sans">Precision ad targeting driven by predictive ML</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-700/50 flex items-center justify-center flex-shrink-0 text-indigo-300">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <h4 className="font-mono text-lg font-bold text-white">100% Code Ownership</h4>
                <p className="text-indigo-200/80 text-xs font-sans">Private cloud hosting & full enterprise data security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#FAFAFD] py-24 reveal" id="services">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-md">
            <div>
              <span className="tech-label text-primary font-bold text-xs uppercase mb-xs block bg-indigo-50 px-3 py-1 rounded border border-indigo-100 inline-block">OUR CORE SERVICES</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-on-background">Trending Business Services</h2>
            </div>
            <Link className="flex items-center gap-xs text-primary font-bold hover:underline group bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 transition-all hover:bg-primary/10" href="/services">
              Discover all services
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: AI Chatbots & Automation */}
            <Link href="/services/ai-solutions" className="group brand-card-gradient border border-indigo-100 rounded-2xl overflow-hidden flex flex-col card-glow-hover bg-white">
              <div className="p-6 pb-4">
                <div className="tech-label text-primary font-bold mb-3 bg-indigo-50 px-2.5 py-1 rounded inline-block text-xs">PILLAR // 01</div>
                <h3 className="text-xl font-bold text-on-background mb-3 leading-tight">AI Chatbots & <br />Automation</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">24/7 AI Chatbots, Voice Assistants, and automated business workflow orchestration.</p>
                <div className="flex items-center gap-xs text-primary font-bold text-sm">
                  Learn More
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              <div className="flex-grow mt-auto relative h-40 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbukTQU6eETda6Jd2ysUG5tJFYq9nQm3yCNMJkBCWmCQHxTFE6xkOYdQcgHvwPlA0z8SOCEI868S1x-O1tqp_a9cO1udoaryJCTc1qYRmbaXl5Am6HqO5D1dGJocb5pDb5h2qgP17N4RTmd9C9HpetFWPqxcSPpzMPu7opDWbNdWNRV7A7x770OxIcGanMNvL6n2SfupwP3SHyP1t1E0pIsr-1sj7eyilcerd_j1QTjCRxRg68qkFihw"
                  alt="AI Chatbots Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FD] via-transparent to-transparent"></div>
              </div>
            </Link>

            {/* Card 2: AI Data & Analytics */}
            <Link href="/services/ai-solutions#analytics" className="group brand-card-gradient border border-indigo-100 rounded-2xl overflow-hidden flex flex-col card-glow-hover bg-white">
              <div className="p-6 pb-4">
                <div className="tech-label text-primary font-bold mb-3 bg-indigo-50 px-2.5 py-1 rounded inline-block text-xs">PILLAR // 02</div>
                <h3 className="text-xl font-bold text-on-background mb-3 leading-tight">AI Data & <br />Analytics</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">Interactive BI dashboards, predictive forecasting, and automated insights reporting.</p>
                <div className="flex items-center gap-xs text-primary font-bold text-sm">
                  Learn More
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              <div className="flex-grow mt-auto relative h-40 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5uZqHR25WX0MiqIh1ecZxGsGqooewURqLdOrPrlWgYMYCtCmOJGGhSPvFTKH92HrRvsPUkztTA1LXadCeOoeLIvH20MFCohsp-NgrouFNVTvZS7fgjJ9KGSKcB2uEp1jKUDxhxsoJFOhFYb1G2_Mjk8pnOFTco0vHg5Ce0odHePY9FzkO0stVJ6pWJ7IEx7vdEH1sPywVEN9Nwzc4m_vYJ2FqVQR7xzQNaeWjVr_ihaKMeqgvfbpAlQ"
                  alt="AI Data Analytics Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FD] via-transparent to-transparent"></div>
              </div>
            </Link>

            {/* Card 3: SEO & Paid Advertising */}
            <Link href="/services/digital-marketing" className="group brand-card-gradient border border-indigo-100 rounded-2xl overflow-hidden flex flex-col card-glow-hover bg-white">
              <div className="p-6 pb-4">
                <div className="tech-label text-primary font-bold mb-3 bg-indigo-50 px-2.5 py-1 rounded inline-block text-xs">PILLAR // 03</div>
                <h3 className="text-xl font-bold text-on-background mb-3 leading-tight">SEO & Paid <br />Advertising</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">High-ranking Search Engine Optimization, Google Ads, Meta Ads, and Email marketing.</p>
                <div className="flex items-center gap-xs text-primary font-bold text-sm">
                  Learn More
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              <div className="flex-grow mt-auto relative h-40 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXc_rjgB_rTCs0GIqAOSiaOf9kMlc5tLlOeIuaIy60dZM4BRkDBvt44KaL5v4b7_QJP4bdeq-FTovychXRF926keyWiFEDfXleN8XXQGrUD114BLsN7foXCgSEYDhp0-iZBHIPlaOIky0uhhOyenmdjtRflMBYgfx4O_6oDPC13IDhMj6KlqgVFj1NAIYnjyHkOL7URqo_ozsoFjk-dLgni-lcgUXrykptRjJYARQ1wAwAG43BFE-J-w"
                  alt="SEO and PPC Marketing Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FD] via-transparent to-transparent"></div>
              </div>
            </Link>

            {/* Card 4: Web Design & Branding */}
            <Link href="/services/web-branding" className="group brand-card-gradient border border-indigo-100 rounded-2xl overflow-hidden flex flex-col card-glow-hover bg-white">
              <div className="p-6 pb-4">
                <div className="tech-label text-primary font-bold mb-3 bg-indigo-50 px-2.5 py-1 rounded inline-block text-xs">PILLAR // 04</div>
                <h3 className="text-xl font-bold text-on-background mb-3 leading-tight">Web Design & <br />Branding</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">Custom modern websites, landing pages, WordPress builds, and custom logo design.</p>
                <div className="flex items-center gap-xs text-primary font-bold text-sm">
                  Learn More
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              <div className="flex-grow mt-auto relative h-40 overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbukTQU6eETda6Jd2ysUG5tJFYq9nQm3yCNMJkBCWmCQHxTFE6xkOYdQcgHvwPlA0z8SOCEI868S1x-O1tqp_a9cO1udoaryJCTc1qYRmbaXl5Am6HqO5D1dGJocb5pDb5h2qgP17N4RTmd9C9HpetFWPqxcSPpzMPu7opDWbNdWNRV7A7x770OxIcGanMNvL6n2SfupwP3SHyP1t1E0pIsr-1sj7eyilcerd_j1QTjCRxRg68qkFihw"
                  alt="Web Design and Branding Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F6F8FD] via-transparent to-transparent"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sbortix Framework */}
      <section className="py-xl bg-[#EEF1F8] border-y border-indigo-100 overflow-hidden relative reveal">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10">
          <div className="text-center mb-xl">
            <span className="text-primary font-bold text-xs uppercase bg-white/80 px-3.5 py-1 rounded-full border border-indigo-100 inline-block shadow-xs">OUR METHODOLOGY</span>
            <h2 className="font-headline-lg text-headline-lg mt-base">The Sbortix Framework</h2>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-lg">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-indigo-200 z-0 border-t border-b border-white"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-md subtle-shadow">
                <span className="font-mono font-bold text-primary text-lg">01</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-xs">Discover</h4>
              <p className="text-primary text-[11px] uppercase tracking-wider mb-xs font-bold">INITIATION & AUDIT</p>
              <p className="text-secondary text-label-md px-base">Deep audit of existing data infrastructure and marketing silos.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-md subtle-shadow">
                <span className="font-mono font-bold text-primary text-lg">02</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-xs">Build</h4>
              <p className="text-primary text-[11px] uppercase tracking-wider mb-xs font-bold">DEVELOPMENT & DESIGN</p>
              <p className="text-secondary text-label-md px-base">Engineering custom AI tools and strategic campaign assets.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-md subtle-shadow">
                <span className="font-mono font-bold text-primary text-lg">03</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-xs">Launch</h4>
              <p className="text-primary text-[11px] uppercase tracking-wider mb-xs font-bold">DEPLOYMENT & MONITORING</p>
              <p className="text-secondary text-label-md px-base">Controlled deployment with real-time performance monitoring.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-md subtle-shadow">
                <span className="font-mono font-bold text-primary text-lg">04</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-xs">Scale</h4>
              <p className="text-primary text-[11px] uppercase tracking-wider mb-xs font-bold">GROWTH & OPTIMIZATION</p>
              <p className="text-secondary text-label-md px-base">Aggressive expansion based on validated data outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Glassmorphic Technical Capabilities Stage */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAFD] via-indigo-50/20 to-[#FAFAFD] reveal border-b border-indigo-100 relative overflow-hidden" id="work">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-md">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-xs block bg-indigo-50/80 px-3 py-1 rounded-full border border-indigo-100 inline-block shadow-xs">
                TECHNICAL CAPABILITIES & INFRASTRUCTURE
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-on-background tracking-tight">
                Modern Growth Capabilities
              </h2>
            </div>
            <p className="text-secondary text-sm sm:text-base max-w-md">
              Explore our core engineering capabilities designed for high performance, natural user experiences, and measurable ROI.
            </p>
          </div>

          {/* Glassmorphic Interactive Split Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Glass Navigation Selector */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {[
                {
                  id: 0,
                  title: '24/7 AI Chatbots & Voice',
                  subtitle: 'Conversational Support & Booking',
                  badge: 'AI & CHATBOTS',
                  icon: 'smart_toy',
                },
                {
                  id: 1,
                  title: 'Predictive BI Analytics',
                  subtitle: 'Real-Time Dashboards & Forecasting',
                  badge: 'BI & ANALYTICS',
                  icon: 'bar_chart',
                },
                {
                  id: 2,
                  title: 'Algorithmic SEO & Paid Ads',
                  subtitle: 'Google Ads, Meta Ads & Search SEO',
                  badge: 'SEO & PPC',
                  icon: 'trending_up',
                },
                {
                  id: 3,
                  title: 'Custom Web & Branding',
                  subtitle: 'Next.js, WordPress & Logo Identity',
                  badge: 'WEB & BRANDING',
                  icon: 'palette',
                },
              ].map((tab) => {
                const isActive = activeCapability === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCapability(tab.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-white border-primary/40 shadow-xl shadow-indigo-500/10 ring-2 ring-primary/10 translate-x-1'
                        : 'bg-white/70 hover:bg-white border-indigo-100/80 shadow-xs hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-colors ${
                          isActive
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-indigo-50 text-primary border border-indigo-100'
                        }`}
                      >
                        <span className="material-symbols-outlined text-xl">{tab.icon}</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                          {tab.badge}
                        </span>
                        <h4 className="text-lg font-bold text-on-background leading-snug">{tab.title}</h4>
                        <p className="text-xs text-secondary">{tab.subtitle}</p>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-primary/10 text-primary' : 'text-secondary/40'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isActive ? 'arrow_forward' : 'chevron_right'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Glass Display Canvas */}
            <div className="lg:col-span-7">
              <div className="h-full bg-gradient-to-br from-white/90 via-indigo-50/40 to-white/95 backdrop-blur-xl border border-indigo-100/90 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
                {/* Ambient Subtle Accent Circle */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

                {[
                  {
                    id: 0,
                    badge: 'AI Chatbots & Automation',
                    title: '24/7 AI Chatbot & Assistant Systems',
                    description:
                      'Deploy intelligent 24/7 conversational AI chatbots and voice assistants that handle customer support, qualify leads in real time, and automatically schedule sales bookings directly into your CRM.',
                    highlights: [
                      'Multi-Channel Live Support',
                      '24/7 Lead Qualification',
                      'Automated CRM Calendar Sync',
                      'Natural Conversational Flow',
                    ],
                    stats: [
                      { label: 'Avg Response Time', value: '<0.5 Seconds' },
                      { label: 'Lead Reply Rate', value: '100% Coverage' },
                      { label: 'Support Savings', value: '70% Cost Cut' },
                    ],
                    link: '/services/ai-solutions',
                  },
                  {
                    id: 1,
                    badge: 'BI & Predictive Analytics',
                    title: 'Predictive Analytics & BI Dashboards',
                    description:
                      'Transform complex enterprise data into clean, visual dashboards with machine learning predictive models, sales forecasting, and automated anomaly detection for real-time leadership insights.',
                    highlights: [
                      'Real-Time Visual Dashboards',
                      'Revenue & Demand Forecasting',
                      'Automated Anomaly Detection',
                      'Multi-Source Data Sync',
                    ],
                    stats: [
                      { label: 'Data Speed', value: 'Real-Time' },
                      { label: 'Forecast Accuracy', value: '98.4%' },
                      { label: 'Executive Insights', value: 'Automated' },
                    ],
                    link: '/services/ai-solutions#analytics',
                  },
                  {
                    id: 2,
                    badge: 'SEO & Paid Growth',
                    title: 'Algorithmic SEO & Paid Campaign Engine',
                    description:
                      'Capture high-intent buyers with targeted keyword research, technical SEO optimization, and high-ROAS Google Ads, Meta Ads, and LinkedIn ad campaign management.',
                    highlights: [
                      'In-Depth Keyword Research',
                      'Technical & On-Page SEO',
                      'Google & Meta Paid Ads',
                      'Revenue Attribution Sync',
                    ],
                    stats: [
                      { label: 'Avg ROAS Gain', value: '4.2x Return' },
                      { label: 'Cost Per Lead', value: '-35% Lower' },
                      { label: 'Organic Traffic', value: '+214% Surge' },
                    ],
                    link: '/services/digital-marketing',
                  },
                  {
                    id: 3,
                    badge: 'Web Systems & Branding',
                    title: 'Custom Web Platforms & Brand Identity',
                    description:
                      'Command market authority with lightning-fast Next.js web applications, high-converting landing pages, custom WordPress builds, and distinctive logo & visual brand identity systems.',
                    highlights: [
                      'Custom Responsive Web Design',
                      'WordPress Theme & CMS Setup',
                      'High-Converting Landing Pages',
                      'Vector Logo & Brand Identity',
                    ],
                    stats: [
                      { label: 'Speed Score', value: '100 / 100' },
                      { label: 'Mobile Layout', value: '100% Fluid' },
                      { label: 'Brand Package', value: 'Full Lockup' },
                    ],
                    link: '/services/web-branding',
                  },
                ].map((content) => {
                  if (content.id !== activeCapability) return null;
                  return (
                    <div key={content.id} className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <span className="text-xs font-bold text-primary bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full inline-block mb-3">
                          {content.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-on-background leading-tight mb-3">
                          {content.title}
                        </h3>
                        <p className="text-secondary text-sm sm:text-base leading-relaxed">
                          {content.description}
                        </p>
                      </div>

                      {/* Glass Feature Chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {content.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-indigo-100/80 shadow-xs text-xs font-semibold text-on-background"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              ✓
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Performance Metrics Bar */}
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-indigo-950 text-white border border-indigo-900/60 shadow-inner">
                        {content.stats.map((st, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-base sm:text-lg font-extrabold text-emerald-400 font-mono">
                              {st.value}
                            </div>
                            <div className="text-[10px] text-indigo-200 font-medium uppercase tracking-tight">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="pt-2">
                        <Link
                          href={content.link}
                          className="brand-button-gradient text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-md hover:shadow-indigo-500/25 transition-all group"
                        >
                          <span>Explore This Capability</span>
                          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Core Team Expertise Section */}
      <section className="py-24 bg-white reveal" id="about">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center mb-16">
            <div className="lg:col-span-6">
              <span className="tech-label text-primary font-bold text-xs uppercase bg-primary/10 px-3 py-1 rounded-md mb-sm inline-block border border-primary/20">
                PROVEN TEAM CREDIBILITY
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-on-background leading-tight mb-4">
                Led by World-Class AI Engineers & Senior Growth Experts
              </h2>
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                Sbortix is powered by proven industry veterans. We combine international enterprise AI experience with over 7+ years of performance marketing expertise to guarantee real business results.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center">
                <div className="text-3xl font-extrabold text-primary font-mono mb-1">7+ Years</div>
                <div className="text-xs font-semibold text-secondary uppercase">Growth & Paid Ads Expertise</div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center">
                <div className="text-3xl font-extrabold text-primary font-mono mb-1">Japan Corp</div>
                <div className="text-xs font-semibold text-secondary uppercase">Ex-AI Systems Lead</div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center">
                <div className="text-3xl font-extrabold text-primary font-mono mb-1">Multi-Founder</div>
                <div className="text-xs font-semibold text-secondary uppercase">Tech & Data Science Lead</div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center">
                <div className="text-3xl font-extrabold text-primary font-mono mb-1">100%</div>
                <div className="text-xs font-semibold text-secondary uppercase">In-House Execution</div>
              </div>
            </div>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lead 1: Digital Marketing Lead */}
            <div className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  7+ YRS EXP
                </span>
              </div>
              <div>
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold mb-6 border border-indigo-100">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-1">Bilal</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Senior Digital Growth & Marketing Lead</p>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Over <strong>7+ years of hands-on experience</strong> leading high-performance SEO, Google & Meta paid ad campaigns, content growth strategy, and conversion optimization for global brands.
                </p>
              </div>
              <div className="pt-4 border-t border-indigo-100 text-xs font-semibold text-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                SEO, PPC & Performance Marketing
              </div>
            </div>

            {/* Lead 2: AI Systems Engineer */}
            <div className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-bold text-primary bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                  EX-JAPAN TECH
                </span>
              </div>
              <div>
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold mb-6 border border-indigo-100">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-1">Salman (Salman Tauheed)</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Lead AI Systems Engineer</p>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  <strong>Former Senior AI Engineer at a top Japanese technology corporation</strong>. Expert in fine-tuning enterprise LLMs, building custom 24/7 AI chatbots, and autonomous workflow engines.
                </p>
              </div>
              <div className="pt-4 border-t border-indigo-100 text-xs font-semibold text-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                AI Chatbots, LLMs & Automation
              </div>
            </div>

            {/* Lead 3: Chief Data Scientist & Founder */}
            <div className="p-8 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                  SERIAL FOUNDER
                </span>
              </div>
              <div>
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold mb-6 border border-indigo-100">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <h3 className="text-2xl font-bold text-on-background mb-1">Muhammad Ahmed</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Chief Data Scientist & Tech Architect</p>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  <strong>Founder of multiple tech ventures</strong> with extensive background in data science, predictive analytics dashboards, and modern Next.js/React web platforms.
                </p>
              </div>
              <div className="pt-4 border-t border-indigo-100 text-xs font-semibold text-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Data Science & Web Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Section */}
      <section className="py-xl bg-[#FAFAFD] blueprint-pattern reveal" id="contact">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-xs block bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 inline-block">GET IN TOUCH</span>
              <h2 className="font-headline-lg text-headline-lg mb-md mt-base">Let's build your growth engine.</h2>
              <p className="text-secondary font-body-md text-body-md mb-lg">Ready to transform your marketing, web presence, or AI workflows? Contact us to schedule a free technical audit and discovery session.</p>
              
              <div className="space-y-md">
                <div className="flex items-start gap-md group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">mail</span>
                  </div>
                  <div>
                    <h6 className="font-label-md text-label-md font-bold">Email Us</h6>
                    <p className="text-secondary text-sm">hello@sbortix.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-md group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">location_on</span>
                  </div>
                  <div>
                    <h6 className="font-label-md text-label-md font-bold">Office Location</h6>
                    <p className="text-secondary text-sm">DHA Phase 6, Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-indigo-100 p-md rounded-2xl shadow-xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-md relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div>
                    <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.identity}
                      onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Service of Interest</label>
                  <select
                    value={formData.module}
                    onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                    className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    <option>AI Chatbots & Automation</option>
                    <option>AI Data & Predictive Analytics</option>
                    <option>SEO & Paid Advertising (Google & Meta Ads)</option>
                    <option>Web Design, WordPress & Branding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-secondary mb-xs font-semibold text-xs uppercase tracking-wider">Project Details</label>
                  <textarea
                    rows={4}
                    value={formData.payload}
                    onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                    placeholder="Tell us about your business goals and requirements..."
                    className="w-full bg-[#FAFAFD] border border-indigo-100 rounded-xl px-md py-xs text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full text-white py-md rounded-xl font-label-md text-label-md transition-all-200 shadow-md ${
                    status === 'success' ? 'bg-emerald-600' : 'brand-button-gradient hover:opacity-95 hover:shadow-indigo-500/25'
                  }`}
                >
                  {status === 'loading' ? 'TRANSMITTING...' : status === 'success' ? 'SUCCESS: DATA_RECEIVED' : 'Execute Inquiry Submission'}
                </button>

                {statusMsg && (
                  <p className={`tech-label text-xs text-center ${status === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {statusMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
