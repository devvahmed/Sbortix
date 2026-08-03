'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Globe, Code, Palette, Sparkles, ArrowRight, CheckCircle2, Monitor, ShieldCheck } from 'lucide-react';

export default function WebBrandingPage() {
  const [activeTab, setActiveTab] = useState<'website' | 'wordpress' | 'branding'>('website');

  return (
    <div className="w-full bg-[#FAFAFD] py-xl">
      {/* Hero Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-xs mb-sm text-xs">
          <Link href="/services" className="tech-label text-secondary hover:text-primary transition-colors">
            SERVICES
          </Link>
          <span className="text-outline">/</span>
          <span className="tech-label text-primary font-bold">WEB DESIGN & BRANDING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-xs py-1 border border-primary/20 rounded-md mb-md bg-white shadow-xs">
              <span className="tech-label text-primary font-semibold flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Web Design, WordPress & Branding
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-on-background mb-md leading-tight">
              Website Design, WordPress & Brand Identity
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mb-lg leading-relaxed">
              We design custom high-converting websites, landing pages, custom WordPress builds, and distinctive brand logos that build immediate trust with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <Link
                href="/contact"
                className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 text-center flex items-center justify-center gap-2"
              >
                Start Website Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#pillars"
                className="border border-indigo-200 text-on-background px-lg py-md rounded-xl font-bold text-base hover:bg-indigo-50/60 transition-all bg-white text-center shadow-xs"
              >
                Explore Web Services
              </a>
            </div>
          </div>

          {/* Performance Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C0830] text-white rounded-2xl p-md border border-indigo-900/60 shadow-2xl relative overflow-hidden text-xs">
              <div className="flex items-center justify-between border-b border-indigo-900/50 pb-xs mb-sm">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                  <span className="text-indigo-200 text-xs font-semibold">Web Performance & Design</span>
                </div>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">100/100 SPEED</span>
              </div>

              <div className="space-y-sm my-xs">
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Page Load Time:</span>
                  <span className="text-emerald-400 font-bold text-sm">Under 0.8s</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Mobile Responsiveness:</span>
                  <span className="text-emerald-400 font-bold text-sm">100% Fluid Layout</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Brand Identity Assets:</span>
                  <span className="text-indigo-100 font-bold text-sm">SVG Vector Lockups</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-xs text-[10px] text-indigo-400 border-t border-indigo-900/40 font-mono">
                <span>WORDPRESS + REACT</span>
                <span>SEO READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Benchmarks Banner */}
      <section className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white py-lg border-y border-indigo-900/60 mb-20 shadow-md">
        <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">100%</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Mobile Responsive</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">&lt;1 Sec</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Fast Load Speed</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">Custom</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Logo & Brand Identity</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">WordPress</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Easy CMS Management</div>
          </div>
        </div>
      </section>

      {/* Feature Grid Bento Cards */}
      <section id="pillars" className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[WEB & BRAND SERVICES]</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background">Website & Branding Capabilities</h2>
          <p className="text-secondary text-base mt-sm">Clean, professional web design and distinct brand systems designed to convert visitors into customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Card 1: Custom Website & Landing Page Design */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Website & Landing Page Design</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Modern, responsive custom website design and high-converting landing pages tailored to your brand identity.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Custom Website Design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> High-Converting Landing Page Design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> UX/UI Optimization & Lead Forms</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXc_rjgB_rTCs0GIqAOSiaOf9kMlc5tLlOeIuaIy60dZM4BRkDBvt44KaL5v4b7_QJP4bdeq-FTovychXRF926keyWiFEDfXleN8XXQGrUD114BLsN7foXCgSEYDhp0-iZBHIPlaOIky0uhhOyenmdjtRflMBYgfx4O_6oDPC13IDhMj6KlqgVFj1NAIYnjyHkOL7URqo_ozsoFjk-dLgni-lcgUXrykptRjJYARQ1wAwAG43BFE-J-w"
                alt="Website and Landing Page Design"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: WordPress Development */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">WordPress Development</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Flexible, easy-to-manage enterprise WordPress websites with custom themes, plugins, and lightning-fast speed.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Custom WordPress Theme Development</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Easy Content Management (CMS)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Security & Performance Optimization</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbukTQU6eETda6Jd2ysUG5tJFYq9nQm3yCNMJkBCWmCQHxTFE6xkOYdQcgHvwPlA0z8SOCEI868S1x-O1tqp_a9cO1udoaryJCTc1qYRmbaXl5Am6HqO5D1dGJocb5pDb5h2qgP17N4RTmd9C9HpetFWPqxcSPpzMPu7opDWbNdWNRV7A7x770OxIcGanMNvL6n2SfupwP3SHyP1t1E0pIsr-1sj7eyilcerd_j1QTjCRxRg68qkFihw"
                alt="WordPress Development"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: Logo Design & Branding */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Branding & Logo Design</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Build a memorable brand presence with custom logo design, complete visual identity guidelines, and strategic brand messaging.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Custom Logo Design & Monograms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Brand Identity & Color Systems</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Brand Messaging & Style Guides</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5uZqHR25WX0MiqIh1ecZxGsGqooewURqLdOrPrlWgYMYCtCmOJGGhSPvFTKH92HrRvsPUkztTA1LXadCeOoeLIvH20MFCohsp-NgrouFNVTvZS7fgjJ9KGSKcB2uEp1jKUDxhxsoJFOhFYb1G2_Mjk8pnOFTco0vHg5Ce0odHePY9FzkO0stVJ6pWJ7IEx7vdEH1sPywVEN9Nwzc4m_vYJ2FqVQR7xzQNaeWjVr_ihaKMeqgvfbpAlQ"
                alt="Logo Design and Branding"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive System Inspector */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="bg-white border border-indigo-100 rounded-2xl p-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
            <div>
              <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[DEVELOPMENT PROCESS]</span>
              <h3 className="text-2xl font-bold">Our Design & Build Standards</h3>
            </div>
            <div className="flex gap-xs bg-indigo-50/80 p-1 rounded-xl border border-indigo-100">
              <button
                onClick={() => setActiveTab('website')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'website' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Website Design
              </button>
              <button
                onClick={() => setActiveTab('wordpress')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'wordpress' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                WordPress CMS
              </button>
              <button
                onClick={() => setActiveTab('branding')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'branding' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Brand Guidelines
              </button>
            </div>
          </div>

          <div className="bg-[#0C0830] text-indigo-100 p-md rounded-xl font-sans text-sm leading-relaxed">
            {activeTab === 'website' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Custom Web & Landing Page Process</p>
                <p>1. User experience (UX) wireframing & high-conversion UI layout design.</p>
                <p>2. Fast, clean code build optimized for mobile devices and search engine crawlers.</p>
                <p>3. Integration with lead forms, CRM, and analytics tracking.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: High-converting digital storefront for your business.</p>
              </div>
            )}
            {activeTab === 'wordpress' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// WordPress Development Standards</p>
                <p>1. Custom lightweight theme build without slow third-party page bloat.</p>
                <p>2. Easy admin dashboard so your team can easily update content and blogs.</p>
                <p>3. Built-in SEO plugin setup and automated daily security backups.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Seamless content management with ultra-fast page speeds.</p>
              </div>
            )}
            {activeTab === 'branding' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Corporate Branding & Logo Identity</p>
                <p>1. Logo Concepting: Vector SVG logo lockups, monograms, and social icons.</p>
                <p>2. Brand Style Guide: Curated color palette, typography pairing, and usage rules.</p>
                <p>3. Brand Messaging: Clear value proposition and tone of voice definition.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Premium, authoritative brand identity across all customer touchpoints.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-margin-desktop max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white p-xl rounded-2xl border border-indigo-900/60 shadow-2xl">
          <h3 className="text-3xl font-bold mb-md">Ready for a new Website or Brand Redesign?</h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-lg text-base">Let's build a website and brand identity that sets your business apart.</p>
          <Link
            href="/contact"
            className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 inline-block"
          >
            Start Your Web Project
          </Link>
        </div>
      </section>
    </div>
  );
}
