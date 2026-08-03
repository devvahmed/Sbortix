'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Megaphone, Share2, Mail, ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function DigitalMarketingPage() {
  const [selectedCategory, setSelectedCategory] = useState<'seo' | 'ppc' | 'social'>('seo');

  return (
    <div className="w-full bg-[#FAFAFD] py-xl">
      {/* Hero Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-xs mb-sm text-xs">
          <Link href="/services" className="tech-label text-secondary hover:text-primary transition-colors">
            SERVICES
          </Link>
          <span className="text-outline">/</span>
          <span className="tech-label text-primary font-bold">SEO & DIGITAL MARKETING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-xs py-1 border border-primary/20 rounded-md mb-md bg-white shadow-xs">
              <span className="tech-label text-primary font-semibold flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SEO, Paid Ads & Growth Marketing
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-on-background mb-md leading-tight">
              Search Engine Optimization (SEO) & Paid Growth
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mb-lg leading-relaxed">
              Generate consistent qualified leads with high-ranking Search Engine Optimization (SEO), targeted Google & Meta paid ads, social media management, and automated email marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <Link
                href="/contact"
                className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 text-center flex items-center justify-center gap-2"
              >
                Start Marketing Campaign
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#pillars"
                className="border border-indigo-200 text-on-background px-lg py-md rounded-xl font-bold text-base hover:bg-indigo-50/60 transition-all bg-white text-center shadow-xs"
              >
                View Marketing Services
              </a>
            </div>
          </div>

          {/* Performance Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C0830] text-white rounded-2xl p-md border border-indigo-900/60 shadow-2xl relative overflow-hidden text-xs">
              <div className="flex items-center justify-between border-b border-indigo-900/50 pb-xs mb-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-indigo-200 text-xs font-semibold">Growth Tracking Engine</span>
                </div>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">LIVE CAMPAIGN</span>
              </div>

              <div className="space-y-sm my-xs">
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Organic Traffic (SEO):</span>
                  <span className="text-emerald-400 font-bold text-sm">+214% YoY</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Google & Meta Ads ROAS:</span>
                  <span className="text-emerald-400 font-bold text-sm">4.2x Average</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-950/80 p-xs rounded border border-indigo-800/40">
                  <span className="text-indigo-300">Email Lead Conversion:</span>
                  <span className="text-indigo-100 font-bold text-sm">18.6% Open-to-Click</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-xs text-[10px] text-indigo-400 border-t border-indigo-900/40 font-mono">
                <span>SEO + PPC + EMAIL</span>
                <span>DATA-DRIVEN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Key Performance Stats */}
      <section className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white py-lg border-y border-indigo-900/60 mb-20 shadow-md">
        <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">#1 Page</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">SEO Keyword Rankings</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">4.2x</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Average Paid Ads ROAS</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">-35%</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Lower Cost Per Lead</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">100%</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Transparent Attribution</div>
          </div>
        </div>
      </section>

      {/* Core Marketing Pillars Grid */}
      <section id="pillars" className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[GROWTH SERVICES]</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background">Digital Marketing Pillars</h2>
          <p className="text-secondary text-base mt-sm">Comprehensive search engine optimization, paid ad campaigns, and social media strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Card 1: Search Engine Optimization (SEO) */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Search Engine Optimization (SEO)</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Rank higher on Google and dominate your niche with strategic keyword research, technical audits, and on-page optimization.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> In-Depth Keyword Research</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> On-Page & Technical SEO</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Off-Page SEO & Authority Building</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5uZqHR25WX0MiqIh1ecZxGsGqooewURqLdOrPrlWgYMYCtCmOJGGhSPvFTKH92HrRvsPUkztTA1LXadCeOoeLIvH20MFCohsp-NgrouFNVTvZS7fgjJ9KGSKcB2uEp1jKUDxhxsoJFOhFYb1G2_Mjk8pnOFTco0vHg5Ce0odHePY9FzkO0stVJ6pWJ7IEx7vdEH1sPywVEN9Nwzc4m_vYJ2FqVQR7xzQNaeWjVr_ihaKMeqgvfbpAlQ"
                alt="Search Engine Optimization SEO"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Paid Advertising (PPC) */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Paid Advertising (PPC)</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Reach ready-to-buy customers using targeted Google Ads, Meta (Facebook & Instagram) Ads, LinkedIn Ads, and retargeting campaigns.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Google Search & Display Ads</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Meta (Facebook/Instagram) & YouTube Ads</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Campaign Optimization & Retargeting</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbukTQU6eETda6Jd2ysUG5tJFYq9nQm3yCNMJkBCWmCQHxTFE6xkOYdQcgHvwPlA0z8SOCEI868S1x-O1tqp_a9cO1udoaryJCTc1qYRmbaXl5Am6HqO5D1dGJocb5pDb5h2qgP17N4RTmd9C9HpetFWPqxcSPpzMPu7opDWbNdWNRV7A7x770OxIcGanMNvL6n2SfupwP3SHyP1t1E0pIsr-1sj7eyilcerd_j1QTjCRxRg68qkFihw"
                alt="Paid Advertising PPC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: Social Media & Email Marketing */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-md">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Social Media & Email Marketing</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Engage your community and turn subscribers into loyal customers through automated email marketing and social media management.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Social Media Strategy & Content</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Community Management & Organic Growth</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Email Setup, Newsletters & Automation</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXc_rjgB_rTCs0GIqAOSiaOf9kMlc5tLlOeIuaIy60dZM4BRkDBvt44KaL5v4b7_QJP4bdeq-FTovychXRF926keyWiFEDfXleN8XXQGrUD114BLsN7foXCgSEYDhp0-iZBHIPlaOIky0uhhOyenmdjtRflMBYgfx4O_6oDPC13IDhMj6KlqgVFj1NAIYnjyHkOL7URqo_ozsoFjk-dLgni-lcgUXrykptRjJYARQ1wAwAG43BFE-J-w"
                alt="Social Media and Email Marketing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Growth Strategy Selector */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="bg-white border border-indigo-100 rounded-2xl p-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
            <div>
              <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[STRATEGY PREVIEW]</span>
              <h3 className="text-2xl font-bold">Marketing Channel Overview</h3>
            </div>
            <div className="flex gap-xs bg-indigo-50/80 p-1 rounded-xl border border-indigo-100">
              <button
                onClick={() => setSelectedCategory('seo')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === 'seo' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Search Engine (SEO)
              </button>
              <button
                onClick={() => setSelectedCategory('ppc')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === 'ppc' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Google & Meta Ads
              </button>
              <button
                onClick={() => setSelectedCategory('social')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === 'social' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Email & Social
              </button>
            </div>
          </div>

          <div className="bg-[#0C0830] text-indigo-100 p-md rounded-xl font-sans text-sm leading-relaxed">
            {selectedCategory === 'seo' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Search Engine Optimization (SEO) Strategy</p>
                <p>1. Targeted keyword research focusing on high-intent commercial buyers.</p>
                <p>2. Complete site speed and technical SEO audit to resolve core errors.</p>
                <p>3. High-quality content publishing and high-authority link acquisition.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Sustainable, long-term organic revenue growth on Google.</p>
              </div>
            )}
            {selectedCategory === 'ppc' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Paid Advertising (PPC) Strategy</p>
                <p>1. Hyper-targeted Google Ads search campaigns matching user purchase intent.</p>
                <p>2. Engaging Meta (Facebook/Instagram) visual ads for retargeting past visitors.</p>
                <p>3. Daily bid optimization and A/B testing to ensure maximum ROAS.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Immediate inquiries and predictable customer acquisition.</p>
              </div>
            )}
            {selectedCategory === 'social' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Social Media & Email Automation</p>
                <p>1. Strategic content calendar design for LinkedIn, Instagram, and Facebook.</p>
                <p>2. Automated welcome email flows and customer segmentation.</p>
                <p>3. Consistent brand messaging and monthly performance reports.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: High customer retention and strong brand awareness.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-margin-desktop max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white p-xl rounded-2xl border border-indigo-900/60 shadow-2xl">
          <h3 className="text-3xl font-bold mb-md">Ready to scale your leads with SEO & Paid Ads?</h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-lg text-base">Schedule a free marketing strategy call with our digital growth team.</p>
          <Link
            href="/contact"
            className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 inline-block"
          >
            Get Free Strategy Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
