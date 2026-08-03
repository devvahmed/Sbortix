import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Megaphone, Layout, BarChart3, CheckCircle2, MessageSquare, Zap, Target, Sparkles, Code, Globe, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Sbortix - AI, Digital Marketing, Web & Branding',
  description: 'Explore our core services: AI Chatbots, Business Automation, Predictive Data Analytics, SEO, Paid Ads, Web Design, WordPress, and Brand Identity.',
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAFAFD] py-xl">
      {/* Hero Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-block px-md py-1 border border-primary/20 rounded-full mb-md bg-white shadow-xs">
          <span className="tech-label text-primary font-semibold flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Modern AI & Digital Growth Services
          </span>
        </div>
        <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-background mb-md max-w-4xl mx-auto leading-tight">
          Professional AI, Digital Marketing & Web Solutions
        </h1>
        <p className="text-secondary text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          We help ambitious businesses scale faster using intelligent AI chatbots, data analytics dashboards, high-converting digital marketing campaigns, and agency-grade web engineering.
        </p>
      </section>

      {/* 4 Core Services Grid Overview */}
      <section className="px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg mb-24">
        {/* Service Pillar 1: AI Chatbots & Business Automation */}
        <div className="brand-card-gradient border border-indigo-100/90 rounded-2xl p-lg flex flex-col justify-between card-glow-hover relative overflow-hidden group bg-white shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <span className="tech-label text-primary font-bold bg-indigo-50 px-3 py-1 rounded-full text-xs">PILLAR 01</span>
            </div>
            <h2 className="text-2xl font-bold mb-md text-on-background">AI Chatbots & Business Automation</h2>
            <p className="text-secondary text-body-md mb-lg leading-relaxed">
              Automate customer support and sales workflows with 24/7 intelligent AI chatbots, voice assistants, and seamless data entry automation.
            </p>
            
            <div className="space-y-sm mb-lg">
              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Custom AI Chatbots & Voice Assistants
                </h3>
                <p className="text-xs text-secondary">24/7 support agents that handle inquiries, book appointments, and convert leads autonomously.</p>
              </div>

              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Workflow & Data Entry Automation
                </h3>
                <p className="text-xs text-secondary">Eliminate repetitive manual work with automated business process orchestration and data extraction.</p>
              </div>
            </div>

            <ul className="space-y-xs text-xs font-semibold text-secondary mb-lg">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Customer Support AI Agents (Multi-Channel)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                AI Voice Assistants & Call Booking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Custom API Integration & CRM Sync
              </li>
            </ul>
          </div>

          <Link
            href="/services/ai-solutions"
            className="inline-flex items-center justify-between w-full px-md py-sm bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all group-hover:shadow-md"
          >
            <span>Explore AI & Automation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Pillar 2: AI Data & Analytics */}
        <div className="brand-card-gradient border border-indigo-100/90 rounded-2xl p-lg flex flex-col justify-between card-glow-hover relative overflow-hidden group bg-white shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="tech-label text-primary font-bold bg-indigo-50 px-3 py-1 rounded-full text-xs">PILLAR 02</span>
            </div>
            <h2 className="text-2xl font-bold mb-md text-on-background">AI Data Analytics & BI Dashboards</h2>
            <p className="text-secondary text-body-md mb-lg leading-relaxed">
              Transform raw business data into actionable growth insights with AI-driven reporting, predictive forecasting, and interactive dashboards.
            </p>

            <div className="space-y-sm mb-lg">
              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  Business Intelligence (BI) Dashboards
                </h3>
                <p className="text-xs text-secondary">Real-time custom reporting dashboards with automated visual metrics for leadership decision-making.</p>
              </div>

              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Predictive Analytics & Forecasting
                </h3>
                <p className="text-xs text-secondary">Machine learning models to forecast revenue trends, customer lifetime value, and market demand.</p>
              </div>
            </div>

            <ul className="space-y-xs text-xs font-semibold text-secondary mb-lg">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Data Mining & Pattern Recognition
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Automated Anomaly Detection Systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                AI-Driven Automated Reporting
              </li>
            </ul>
          </div>

          <Link
            href="/services/ai-solutions#analytics"
            className="inline-flex items-center justify-between w-full px-md py-sm bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all group-hover:shadow-md"
          >
            <span>Explore Analytics & BI</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Pillar 3: Search & Paid Digital Marketing */}
        <div className="brand-card-gradient border border-indigo-100/90 rounded-2xl p-lg flex flex-col justify-between card-glow-hover relative overflow-hidden group bg-white shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="tech-label text-primary font-bold bg-indigo-50 px-3 py-1 rounded-full text-xs">PILLAR 03</span>
            </div>
            <h2 className="text-2xl font-bold mb-md text-on-background">Search Engine & Digital Marketing (SEO/PPC)</h2>
            <p className="text-secondary text-body-md mb-lg leading-relaxed">
              Drive targeted traffic, capture high-intent buyers, and maximize return on ad spend through data-backed SEO, PPC, and social media campaigns.
            </p>

            <div className="space-y-sm mb-lg">
              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-xs text-secondary">In-depth keyword research, technical SEO, on-page optimization, and high-authority link building.</p>
              </div>

              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-primary" />
                  Paid Advertising (PPC) & Social Media
                </h3>
                <p className="text-xs text-secondary">High-converting Google Ads, Meta (Facebook/Instagram) Ads, LinkedIn campaigns, and Email automation.</p>
              </div>
            </div>

            <ul className="space-y-xs text-xs font-semibold text-secondary mb-lg">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Technical & On-Page SEO Audits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Google Ads, Meta Ads & Retargeting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Social Media Growth & Email Automation
              </li>
            </ul>
          </div>

          <Link
            href="/services/digital-marketing"
            className="inline-flex items-center justify-between w-full px-md py-sm bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all group-hover:shadow-md"
          >
            <span>Explore Growth & SEO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Pillar 4: Website Design & Branding */}
        <div className="brand-card-gradient border border-indigo-100/90 rounded-2xl p-lg flex flex-col justify-between card-glow-hover relative overflow-hidden group bg-white shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Layout className="w-6 h-6" />
              </div>
              <span className="tech-label text-primary font-bold bg-indigo-50 px-3 py-1 rounded-full text-xs">PILLAR 04</span>
            </div>
            <h2 className="text-2xl font-bold mb-md text-on-background">Website Design, WordPress & Branding</h2>
            <p className="text-secondary text-body-md mb-lg leading-relaxed">
              Command market authority with fast, visually stunning websites, landing pages, WordPress builds, and professional brand identity systems.
            </p>

            <div className="space-y-sm mb-lg">
              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Website Design & WordPress Development
                </h3>
                <p className="text-xs text-secondary">Modern custom websites, high-converting landing pages, and responsive WordPress development.</p>
              </div>

              <div className="p-sm bg-indigo-50/50 rounded-xl border border-indigo-100/60">
                <h3 className="font-bold text-sm text-on-background mb-xs flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Logo Design & Brand Identity
                </h3>
                <p className="text-xs text-secondary">Distinctive corporate logos, brand messaging, style guides, and complete visual design packages.</p>
              </div>
            </div>

            <ul className="space-y-xs text-xs font-semibold text-secondary mb-lg">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Custom Website & Landing Page Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                WordPress Theme & CMS Setup
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                Logo Design, Strategy & Brand Identity
              </li>
            </ul>
          </div>

          <Link
            href="/services/web-branding"
            className="inline-flex items-center justify-between w-full px-md py-sm bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all group-hover:shadow-md"
          >
            <span>Explore Web & Branding</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Work With Us / Value Proposition */}
      <section className="bg-white py-20 border-y border-indigo-100 mb-24">
        <div className="max-w-7xl mx-auto px-margin-desktop text-center">
          <span className="tech-label text-primary font-bold mb-xs block text-xs uppercase tracking-wider">[WHY CHOOSE SBORTIX]</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background mb-lg">
            Simple, Transparent & Professional Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg text-left">
            <div className="p-md rounded-xl bg-[#FAFAFD] border border-indigo-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold mb-sm">
                01
              </div>
              <h3 className="font-bold text-lg text-on-background mb-xs">Trending & Proven Technologies</h3>
              <p className="text-secondary text-sm leading-relaxed">
                We use industry-standard tools like OpenAI fine-tuning, Next.js, Google Ads API, and custom BI dashboards to ensure top performance.
              </p>
            </div>

            <div className="p-md rounded-xl bg-[#FAFAFD] border border-indigo-100">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold mb-sm">
                02
              </div>
              <h3 className="font-bold text-lg text-on-background mb-xs">Clean & Easily Understandable</h3>
              <p className="text-secondary text-sm leading-relaxed">
                No confusing buzzwords or hidden steps. Every campaign, chatbot, and design is delivered with clear reporting and measurable ROI.
              </p>
            </div>

            <div className="p-md rounded-xl bg-[#FAFAFD] border border-indigo-100">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold mb-sm">
                03
              </div>
              <h3 className="font-bold text-lg text-on-background mb-xs">End-to-End Enterprise Support</h3>
              <p className="text-secondary text-sm leading-relaxed">
                From discovery and strategy to design, deployment, and ongoing optimization, our dedicated team handles every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0C0830] via-[#1F108E] to-[#0C0830] text-white p-xl rounded-2xl border border-indigo-900/60 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="tech-label text-indigo-300 font-semibold mb-xs block text-xs uppercase">[READY TO SCALE?]</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-md">Ready to upgrade your AI, Marketing & Web strategy?</h2>
            <p className="text-indigo-200 font-body-lg text-body-lg mb-lg">
              Book a 30-minute consultation with our specialists to review your goals and receive a custom solution roadmap.
            </p>
            <Link
              href="/contact"
              className="brand-button-gradient text-white px-lg py-md rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:shadow-indigo-500/25 inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
