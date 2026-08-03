'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bot, MessageSquare, Mic, Zap, Database, BarChart3, ArrowRight, CheckCircle2, ShieldCheck, Activity, Cpu } from 'lucide-react';

export default function AISolutionsPage() {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'automation' | 'analytics'>('chatbot');

  return (
    <div className="w-full bg-[#FAFAFD] py-xl">
      {/* Hero Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-xs mb-sm text-xs">
          <Link href="/services" className="tech-label text-secondary hover:text-primary transition-colors">
            SERVICES
          </Link>
          <span className="text-outline">/</span>
          <span className="tech-label text-primary font-bold">AI CHATBOTS & AUTOMATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-xs py-1 border border-primary/20 rounded-md mb-md bg-white shadow-xs">
              <span className="tech-label text-primary font-semibold flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Chatbots, Automation & Analytics
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-on-background mb-md leading-tight">
              AI Chatbots, Smart Automation & Data Analytics
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mb-lg leading-relaxed">
              We develop 24/7 intelligent AI chatbots, automated business workflows, and real-time data analytics dashboards designed to reduce operational costs and convert more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <Link
                href="/contact"
                className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 text-center flex items-center justify-center gap-2"
              >
                Build Custom AI Assistant
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#features"
                className="border border-indigo-200 text-on-background px-lg py-md rounded-xl font-bold text-base hover:bg-indigo-50/60 transition-all bg-white text-center shadow-xs"
              >
                View Service Pillars
              </a>
            </div>
          </div>

          {/* Interactive AI Showcase Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C0830] text-white rounded-2xl p-md border border-indigo-900/60 shadow-2xl relative overflow-hidden text-xs">
              <div className="flex items-center justify-between border-b border-indigo-900/50 pb-xs mb-sm">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-400" />
                  <span className="text-indigo-200 text-xs font-semibold">AI Support Assistant</span>
                </div>
                <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">24/7 ONLINE</span>
              </div>

              <div className="space-y-sm my-xs text-indigo-100 leading-relaxed">
                <div className="bg-indigo-950/80 p-xs rounded-lg border border-indigo-800/40">
                  <p className="text-indigo-400 text-[10px] uppercase font-mono mb-1">Customer Query:</p>
                  <p className="text-white text-xs font-sans">"Can you show me pricing options and schedule a demo for our team?"</p>
                </div>
                <div className="bg-primary/20 p-xs rounded-lg border border-primary/30 ml-4">
                  <p className="text-emerald-400 text-[10px] uppercase font-mono mb-1">AI Assistant Response:</p>
                  <p className="text-white text-xs font-sans">
                    "Certainly! I've qualified your request for Enterprise Plan. Available demo slots: Today at 3:00 PM or Tomorrow at 11:00 AM."
                  </p>
                </div>
                <div className="flex justify-between items-center pt-xs text-[10px] text-indigo-400 border-t border-indigo-900/40 font-mono">
                  <span>RESPONSE TIME: 0.4s</span>
                  <span>ACCURACY: 99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Counter Strip */}
      <section className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white py-lg border-y border-indigo-900/60 mb-20 shadow-md">
        <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">24/7</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Automated Support</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">70%</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Support Cost Reduction</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">&lt;1 Sec</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Instant Lead Reply</div>
          </div>
          <div>
            <div className="font-mono text-3xl md:text-4xl font-extrabold text-white mb-xs">100%</div>
            <div className="text-indigo-200 text-xs uppercase tracking-wider font-semibold">Data Privacy & Security</div>
          </div>
        </div>
      </section>

      {/* Core AI Capabilities Grid */}
      <section id="features" className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[SERVICES BREAKDOWN]</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background">Trending AI & Automation Solutions</h2>
          <p className="text-secondary text-base mt-sm">Simple, high-impact AI services that deliver immediate business value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Card 1: AI Chatbots & Support */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="tech-label text-primary font-bold bg-indigo-50 px-2.5 py-1 rounded text-xs">FEATURED</span>
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">AI Chatbots & Voice Assistants</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Smart conversational AI agents for website live chat, customer support, lead qualification, and automated call handling.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Custom Chatbot Development</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Customer Support AI Agents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Interactive AI Voice Assistants</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbukTQU6eETda6Jd2ysUG5tJFYq9nQm3yCNMJkBCWmCQHxTFE6xkOYdQcgHvwPlA0z8SOCEI868S1x-O1tqp_a9cO1udoaryJCTc1qYRmbaXl5Am6HqO5D1dGJocb5pDb5h2qgP17N4RTmd9C9HpetFWPqxcSPpzMPu7opDWbNdWNRV7A7x770OxIcGanMNvL6n2SfupwP3SHyP1t1E0pIsr-1sj7eyilcerd_j1QTjCRxRg68qkFihw"
                alt="AI Chatbot Assistant"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Business Process & Workflow Automation */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="tech-label text-primary font-bold bg-indigo-50 px-2.5 py-1 rounded text-xs">AUTOMATION</span>
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">Workflow & Process Automation</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Streamline operations with automated data extraction, invoice processing, CRM updates, and multi-system workflow orchestration.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Business Process Automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Automated Data Entry & Extraction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Custom AI API Integrations</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXc_rjgB_rTCs0GIqAOSiaOf9kMlc5tLlOeIuaIy60dZM4BRkDBvt44KaL5v4b7_QJP4bdeq-FTovychXRF926keyWiFEDfXleN8XXQGrUD114BLsN7foXCgSEYDhp0-iZBHIPlaOIky0uhhOyenmdjtRflMBYgfx4O_6oDPC13IDhMj6KlqgVFj1NAIYnjyHkOL7URqo_ozsoFjk-dLgni-lcgUXrykptRjJYARQ1wAwAG43BFE-J-w"
                alt="Workflow Automation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: AI Data & Predictive Analytics */}
          <div className="brand-card-gradient border border-indigo-100 p-lg rounded-2xl card-glow-hover flex flex-col justify-between bg-white shadow-sm" id="analytics">
            <div>
              <div className="flex items-center justify-between mb-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="tech-label text-primary font-bold bg-indigo-50 px-2.5 py-1 rounded text-xs">ANALYTICS</span>
              </div>
              <h3 className="text-xl font-bold mb-xs text-on-background">AI Data & Analytics Dashboards</h3>
              <p className="text-secondary text-sm mb-md leading-relaxed">
                Custom visual dashboards, predictive sales forecasting, and automated anomaly detection to spot opportunities in real time.
              </p>
              <ul className="space-y-xs text-xs text-secondary font-medium mb-md">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> BI Dashboards with AI Insights</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Predictive Analytics & Forecasting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Data Mining & Pattern Recognition</li>
              </ul>
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden mt-md border border-indigo-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5uZqHR25WX0MiqIh1ecZxGsGqooewURqLdOrPrlWgYMYCtCmOJGGhSPvFTKH92HrRvsPUkztTA1LXadCeOoeLIvH20MFCohsp-NgrouFNVTvZS7fgjJ9KGSKcB2uEp1jKUDxhxsoJFOhFYb1G2_Mjk8pnOFTco0vHg5Ce0odHePY9FzkO0stVJ6pWJ7IEx7vdEH1sPywVEN9Nwzc4m_vYJ2FqVQR7xzQNaeWjVr_ihaKMeqgvfbpAlQ"
                alt="AI Analytics Dashboard"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive System Feature Tab */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="bg-white border border-indigo-100 rounded-2xl p-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
            <div>
              <span className="tech-label text-primary font-bold text-xs uppercase block mb-xs">[SOLUTION DEMO]</span>
              <h3 className="text-2xl font-bold">How Our AI Systems Work</h3>
            </div>
            <div className="flex gap-xs bg-indigo-50/80 p-1 rounded-xl border border-indigo-100">
              <button
                onClick={() => setActiveTab('chatbot')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'chatbot' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                AI Chatbot Support
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'automation' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                Workflow Automation
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-md py-xs rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'analytics' ? 'bg-primary text-white shadow-xs' : 'text-secondary hover:text-primary'
                }`}
              >
                BI & Analytics
              </button>
            </div>
          </div>

          <div className="bg-[#0C0830] text-indigo-100 p-md rounded-xl font-sans text-sm leading-relaxed">
            {activeTab === 'chatbot' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// 24/7 AI Chatbot & Voice Workflow</p>
                <p>1. Inbound visitor launches chat or initiates call.</p>
                <p>2. AI Agent understands user intent and answers questions instantly.</p>
                <p>3. Leads are automatically qualified and booked directly into your Google/Outlook calendar.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Instant 100% response coverage without manual hiring costs.</p>
              </div>
            )}
            {activeTab === 'automation' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Automated Data & Document Flow</p>
                <p>1. Invoices, PDFs, and customer submissions are parsed automatically.</p>
                <p>2. AI extracts key fields and syncs them with your CRM (Salesforce, HubSpot, or Custom DB).</p>
                <p>3. Automatic email confirmation sent to the client.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: 90% reduction in manual data entry errors.</p>
              </div>
            )}
            {activeTab === 'analytics' && (
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold font-mono text-xs">// Predictive BI Analytics & Reporting</p>
                <p>1. Live connection to your sales, marketing, and revenue databases.</p>
                <p>2. Machine learning models analyze daily patterns and highlight conversion trends.</p>
                <p>3. Automated daily/weekly summary reports generated for executive review.</p>
                <p className="text-indigo-300 font-medium">&gt; Result: Complete visibility over key growth metrics.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-margin-desktop max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white p-xl rounded-2xl border border-indigo-900/60 shadow-2xl">
          <h3 className="text-3xl font-bold mb-md">Ready to deploy an AI Chatbot or Analytics Dashboard?</h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-lg text-base">Contact our team to get a tailored demo and pricing estimate built for your business.</p>
          <Link
            href="/contact"
            className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 inline-block"
          >
            Get a Custom Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
