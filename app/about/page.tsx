import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Target, Eye, Lock, Sparkles, CheckCircle2, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Enterprise AI & Data Systems',
  description: 'Sbortix is an enterprise AI engineering and digital growth firm. We partner with forward-thinking organizations to replace manual bottlenecks with custom AI agents and predictive analytics.',
  alternates: {
    canonical: 'https://www.sbortix.com/about',
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.sbortix.com/about/#webpage',
    'url': 'https://www.sbortix.com/about',
    'name': 'About Sbortix | Enterprise AI & Data Systems',
    'description': 'Sbortix is an enterprise AI engineering and digital growth firm. We partner with forward-thinking organizations to replace manual bottlenecks.',
    'isPartOf': {
      '@id': 'https://www.sbortix.com/#website'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="w-full bg-[#FAFAFD] text-[#12131A] overflow-x-hidden">
      
      {/* ── HERO HEADER SECTION ── */}
      <section
        className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 border-b border-[#2D2D82]/15"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #ECEBF5 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
            About Sbortix
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151137] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Engineering Enterprise Growth Through AI & Data Systems
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Sbortix is an enterprise AI engineering and digital growth firm. We partner with forward-thinking organizations to replace manual operational bottlenecks with custom AI agents, predictive data analytics, and high-converting digital platforms.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION (SIDE-BY-SIDE SIDEBAR) ── */}
      <section className="py-20 bg-white border-b border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#ECEBF5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2D2D82] flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#2D2D82] uppercase tracking-wider block">
                Our Mission
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold text-[#151137]"
              >
                Empowering Business Potential with Intelligent Automation
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                To build reliable, secure, and scalable AI infrastructure that helps businesses automate complex workflows, optimize customer acquisition costs, and make data-backed decisions with complete confidence.
              </p>
            </div>

            {/* Vision Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#151137] text-white space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2D2D82] flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                Our Vision
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold text-white"
              >
                The Standard for Autonomous Enterprise Operations
              </h2>
              <p className="text-indigo-200 text-base leading-relaxed">
                We envision a future where enterprise organizations run seamlessly on always-on intelligent systems — where human creativity is unlocked while routine operations run autonomously with 99.9% precision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VALUES & PILLARS ── */}
      <section className="py-20 bg-[#ECEBF5]/50 border-b border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              Built on Trust, Precision, and Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Data Integrity',
                desc: 'Every model and strategy is validated against rigorous empirical metrics — zero guesswork or unsubstantiated claims.',
              },
              {
                title: 'Enterprise Security',
                desc: 'We enforce strict SOC2-aligned data handling, private cloud isolation, and zero third-party data leakage.',
              },
              {
                title: 'Senior Expertise',
                desc: 'Every engagement is architected directly by senior engineering leads with years of enterprise domain experience.',
              },
              {
                title: 'Measurable ROI',
                desc: 'We tie every technical implementation directly to verifiable revenue lift, cost reduction, or conversion gain.',
              },
            ].map((value, idx) => (
              <div key={value.title} className="space-y-3 pt-4 border-t border-[#2D2D82]/15">
                <span className="text-xs font-bold text-[#2D2D82] block">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-lg text-[#151137]">{value.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE TRUST & COMPLIANCE ── */}
      <section className="py-20 bg-white border-b border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
                Enterprise Standards
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
                Why Global Companies Trust Sbortix
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We understand the complexities of deploying modern software and AI into existing enterprise ecosystems. Our systems are built from the ground up for stability, scalability, and seamless compliance.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  'Private Cloud & On-Premises LLM Deployment Options',
                  'Strict Data Privacy & Encryption at Rest and in Transit',
                  'Dedicated SLA Guarantees & 24/7 Monitoring Pipelines',
                  'Transparent Architecture Audits & Clear Code Ownership',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-[#151137]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Stats Showcase */}
            <div className="lg:col-span-6">
              <div className="bg-[#151137] text-white p-8 sm:p-12 rounded-3xl space-y-8 border border-[#2D2D82]/40 shadow-2xl">
                <div className="grid grid-cols-2 gap-8 text-center border-b border-white/10 pb-8">
                  <div>
                    <div className="text-4xl font-extrabold text-white mb-1">50+</div>
                    <div className="text-indigo-200 text-xs font-semibold uppercase">Systems Deployed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-white mb-1">99.9%</div>
                    <div className="text-indigo-200 text-xs font-semibold uppercase">Target Uptime</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-extrabold text-white mb-1">70%</div>
                    <div className="text-indigo-200 text-xs font-semibold uppercase">Avg OPEX Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-white mb-1">3.8x</div>
                    <div className="text-indigo-200 text-xs font-semibold uppercase">Avg Growth ROAS</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4-STAGE DELIVERY PROCESS ── */}
      <section className="py-20 bg-[#ECEBF5] border-b border-[#2D2D82]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest block mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151137] tracking-tight leading-tight mb-4">
              A Disciplined Engineering Lifecyle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Audit',
                desc: 'We conduct a thorough audit of your existing data pipelines, ad accounts, and operational workflows.',
              },
              {
                step: '02',
                title: 'Architecture & Design',
                desc: 'We design custom AI models, web systems, and campaign attribution frameworks tailored to your stack.',
              },
              {
                step: '03',
                title: 'Deployment & Testing',
                desc: 'We deploy production-grade code into your environment with full integration testing.',
              },
              {
                step: '04',
                title: 'Optimization & Scaling',
                desc: 'We continuously monitor performance, conversion rates, and revenue metrics for long-term growth.',
              },
            ].map((st) => (
              <div key={st.step} className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#151137] text-white font-bold text-sm flex items-center justify-center border border-white/20 shadow-sm">
                  {st.step}
                </div>
                <h3 className="font-bold text-lg text-[#151137]">{st.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="bg-gradient-to-r from-[#151137] via-[#2D2D82] to-[#151137] text-white p-12 sm:p-16 rounded-3xl border border-[#2D2D82]/40 shadow-2xl relative overflow-hidden">
          <h3
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
          >
            Ready to Build Your Next Intelligent System?
          </h3>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Schedule a consultation with our senior team to discuss your project requirements and explore tailored solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#151137] bg-white hover:bg-gray-100 transition-all shadow-lg"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      </div>
    </>
  );
}
