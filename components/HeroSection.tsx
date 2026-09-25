'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white pb-4 sm:pb-6"
      aria-label="Hero — Sbortix Growth Engine"
      style={{
        minHeight: '560px',
        background: 'linear-gradient(160deg, #f0f2f8 0%, #eceef6 40%, #e8eaf4 100%)',
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none animate-grid"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(45, 45, 130, 0.15) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          zIndex: 0,
        }}
      />

      {/* ── MAIN LAYOUT: Responsive container ── */}
      <div className="relative w-full lg:h-[560px] lg:min-h-[560px] flex flex-col lg:block pt-24 sm:pt-28 lg:pt-0 px-margin-mobile md:px-margin-desktop lg:px-0 gap-8 lg:gap-0 pb-12 lg:pb-0">

        {/* ── TOP-LEFT: MASSIVE HEADLINE ── */}
        <div
          className="relative lg:absolute lg:top-32 lg:left-14 z-10 w-full lg:max-w-[55%] text-left order-2 lg:order-none"
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#0E0E1A',
              fontSize: 'clamp(26px, 4.4vw, 58px)',
              textTransform: 'uppercase',
            }}
          >
            Enterprise AI Agency<br />
            &amp; Digital Growth<br />
            <span className="relative inline-block" style={{ color: '#2D2D82' }}>
              Systems
              <span
                className="absolute left-0 w-full pointer-events-none"
                style={{
                  bottom: '-4px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #2D2D82 0%, #2C2A78 70%, rgba(45,45,130,0.25) 100%)',
                }}
              />
            </span>
          </h1>
        </div>

        {/* ── TOP-RIGHT: Compact info block ── */}
        <div
          className="relative lg:absolute lg:top-32 lg:right-14 z-20 w-full max-w-md lg:max-w-none lg:w-[clamp(200px,28vw,320px)] order-3 lg:order-none"
        >
          <div
            className="border-l-2 pl-4 space-y-2"
            style={{ borderColor: '#2D2D82' }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(15px, 1.6vw, 22px)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: '#151137',
              }}
            >
              Revolutionizing Growth with Intelligence
            </p>
            <p
              style={{
                fontSize: 'clamp(11px, 1vw, 14px)',
                color: '#555',
                lineHeight: 1.6,
                fontFamily: "'Inter', sans-serif",
                marginBottom: '12px',
              }}
            >
              Welcome to the age of intelligent enterprise. Meet our next-gen AI platform — designed to think, learn, and adapt like never before.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-white rounded-full transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                fontSize: 'clamp(11px, 1vw, 14px)',
                padding: '9px 22px',
                background: '#151137',
                boxShadow: '0 4px 16px rgba(45,45,130,0.30)',
                width: 'fit-content',
              }}
            >
              Get Started ↗
            </Link>
          </div>
        </div>

        {/* ── CENTER: Robot Image ── */}
        <div
          className="group relative lg:absolute lg:top-[18%] lg:left-[54%] lg:-translate-x-1/2 z-15 w-[260px] sm:w-[320px] lg:w-[clamp(260px,35vw,440px)] mx-auto lg:mx-0 my-4 lg:my-0 order-1 lg:order-none"
        >
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes moveGrid {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 22px 22px;
              }
            }
            .animate-grid {
              animation: moveGrid 32s linear infinite;
            }
            @keyframes popIn {
              0% {
                opacity: 0;
                transform: scale(0.7) translateY(20px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
            @keyframes floatLeft {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            @keyframes floatRight {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
            @keyframes floatLeftBottom {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            @keyframes floatRightBottom {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-7px); }
            }
            @keyframes pulseHeight {
              0%, 100% { height: 25%; }
              50% { height: 90%; }
            }
            @media (max-width: 1023px) {
              .pop-in-left {
                animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
              }
              .pop-in-right {
                animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
              }
              .pop-in-left-bottom {
                animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both;
              }
              .pop-in-right-bottom {
                animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both;
              }
            }
            .float-anim-left {
              animation: floatLeft 5s ease-in-out infinite;
            }
            .float-anim-right {
              animation: floatRight 5.5s ease-in-out infinite;
            }
            .float-anim-left-bottom {
              animation: floatLeftBottom 4.8s ease-in-out infinite;
            }
            .float-anim-right-bottom {
              animation: floatRightBottom 5.2s ease-in-out infinite;
            }
          `}} />

          {/* Background Orbit Lines (HUD Rings) */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-visible scale-[1.25] opacity-90">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              {/* Concentric rings */}
              <circle cx="200" cy="200" r="95" stroke="#2D2D82" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.35" className="animate-[spin_45s_linear_infinite]" />
              <circle cx="200" cy="200" r="135" stroke="#2D2D82" strokeWidth="0.75" strokeDasharray="12 18" opacity="0.3" className="animate-[spin_70s_linear_infinite_reverse]" />
              <circle cx="200" cy="200" r="170" stroke="#2D2D82" strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
              
              {/* Linear connection lines with dots */}
              <g stroke="#2D2D82" strokeWidth="0.5" opacity="0.3">
                <line x1="120" y1="120" x2="80" y2="150" />
                <circle cx="80" cy="150" r="1.5" fill="#2D2D82" />
                <line x1="280" y1="120" x2="310" y2="100" />
                <circle cx="310" cy="100" r="1.5" fill="#2D2D82" />
                <line x1="100" y1="260" x2="60" y2="280" />
                <circle cx="60" cy="280" r="1.5" fill="#2D2D82" />
                <line x1="300" y1="280" x2="330" y2="300" />
                <circle cx="330" cy="300" r="1.5" fill="#2D2D82" />
              </g>
            </svg>
          </div>

          {/* Left Element: AI Optimization Active */}
          <div className="pop-in-left absolute left-[-45px] sm:left-[-60px] md:left-[-72px] lg:left-[-64px] top-[10%] lg:top-[16%] w-[115px] sm:w-[130px] lg:w-[150px] z-20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:opacity-0 lg:scale-75 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto">
            <div className="float-anim-left select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(45,45,130,0.18)] hover:border-indigo-300/40 p-2 sm:p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-indigo-100/60 shadow-[0_8px_24px_rgba(45,45,130,0.08)] flex flex-col items-center text-center cursor-pointer">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-1 sm:mb-1.5">
                <svg className="absolute w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" stroke="#2D2D82" strokeWidth="2" strokeDasharray="12 18" fill="none" opacity="0.6"/>
                </svg>
                <svg className="absolute w-[80%] h-[80%] animate-[spin_12s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" stroke="#2D2D82" strokeWidth="1.5" strokeDasharray="6 8" fill="none" opacity="0.4"/>
                </svg>
                <span className="font-heading font-black text-[9px] sm:text-xs text-[#2D2D82] tracking-wider animate-pulse">AI</span>
              </div>
              
              <span className="text-[8px] sm:text-[9px] font-bold text-[#151137]/80 tracking-wide uppercase leading-tight font-heading">
                AI Optimization
              </span>
              <span className="text-[7px] sm:text-[8px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active
              </span>
            </div>
          </div>

          {/* Right Element: Neural Processing */}
          <div className="pop-in-right absolute right-[-45px] sm:right-[-65px] md:right-[-78px] lg:right-[-84px] top-[18%] lg:top-[28%] w-[130px] sm:w-[155px] lg:w-[185px] z-20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:opacity-0 lg:scale-75 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto">
            <div className="float-anim-right select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(45,45,130,0.18)] hover:border-indigo-300/40 p-2 sm:p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-indigo-100/60 shadow-[0_8px_24px_rgba(45,45,130,0.08)] cursor-pointer">
              <div className="flex justify-between items-center mb-1 sm:mb-1.5 pb-0.5 border-b border-indigo-50/50">
                <span className="text-[7px] sm:text-[8px] font-bold text-[#666] tracking-wider uppercase font-mono">Neural Proc</span>
                <span className="text-[6px] sm:text-[7px] px-1 bg-indigo-50 text-[#2D2D82] rounded font-bold font-mono">V2</span>
              </div>
              
              <div className="relative w-full h-8 sm:h-10 flex items-center justify-center mb-1 sm:mb-1.5 bg-[#fcfdff]/50 rounded-lg overflow-hidden border border-indigo-50/20">
                <svg className="w-[90%] h-[90%]" viewBox="0 0 120 60">
                  <g stroke="#2D2D82" strokeWidth="0.5" opacity="0.25">
                    <line x1="20" y1="30" x2="45" y2="15" />
                    <line x1="20" y1="30" x2="45" y2="45" />
                    <line x1="45" y1="15" x2="75" y2="15" />
                    <line x1="45" y1="45" x2="75" y2="45" />
                    <line x1="75" y1="15" x2="100" y2="30" />
                    <line x1="75" y1="45" x2="100" y2="30" />
                    <line x1="45" y1="15" x2="45" y2="45" />
                    <line x1="75" y1="15" x2="75" y2="45" />
                  </g>
                  <circle cx="20" cy="30" r="2" fill="#2D2D82" className="animate-pulse" />
                  <circle cx="45" cy="15" r="2" fill="#2D2D82" />
                  <circle cx="45" cy="45" r="2" fill="#2D2D82" />
                  <circle cx="75" cy="15" r="2" fill="#2D2D82" />
                  <circle cx="75" cy="45" r="2" fill="#2D2D82" />
                  <circle cx="100" cy="30" r="2" fill="#2D2D82" className="animate-pulse" />
                  
                  <circle cx="45" cy="15" r="1.2" fill="#818CF8">
                    <animate attributeName="cx" values="20;45;75;100" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="30;15;15;30" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="45" cy="45" r="1.2" fill="#34D399">
                    <animate attributeName="cx" values="20;45;75;100" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="30;45;45;30" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#151137] leading-none font-heading">
                    76%
                  </div>
                  <span className="text-[7px] sm:text-[8px] text-[#888] font-mono leading-none">
                    Active Load
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[6px] sm:text-[7px] text-emerald-600 font-bold uppercase tracking-wider font-mono">
                    ▲ 12.4%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left Element: Real-time Metrics */}
          <div className="pop-in-left-bottom absolute left-[-50px] sm:left-[-68px] md:left-[-80px] lg:left-[-72px] bottom-[8%] lg:bottom-[15%] w-[110px] sm:w-[125px] lg:w-[140px] z-20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:opacity-0 lg:scale-75 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto">
            <div className="float-anim-left-bottom select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(45,45,130,0.18)] hover:border-indigo-300/40 p-2 sm:p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-indigo-100/60 shadow-[0_8px_24px_rgba(45,45,130,0.08)] cursor-pointer">
              <div className="flex justify-between items-center mb-1 sm:mb-1.5 pb-0.5 border-b border-indigo-50/50">
                <span className="text-[7px] sm:text-[8px] font-bold text-[#666] tracking-wider uppercase font-mono">System Load</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <div className="flex items-end justify-between gap-1 w-full h-8 bg-indigo-50/40 p-1 rounded-lg border border-indigo-100/30 mb-1">
                <div className="w-1 bg-[#2D2D82] rounded-full animate-[pulseHeight_1.8s_ease-in-out_infinite]" style={{ height: '40%' }}></div>
                <div className="w-1 bg-[#2D2D82] rounded-full animate-[pulseHeight_2.2s_ease-in-out_infinite]" style={{ height: '75%' }}></div>
                <div className="w-1 bg-[#2D2D82] rounded-full animate-[pulseHeight_1.5s_ease-in-out_infinite_0.3s]" style={{ height: '55%' }}></div>
                <div className="w-1 bg-[#818CF8] rounded-full animate-[pulseHeight_2.5s_ease-in-out_infinite_0.6s]" style={{ height: '90%' }}></div>
                <div className="w-1 bg-[#34D399] rounded-full animate-[pulseHeight_1.9s_ease-in-out_infinite_0.2s]" style={{ height: '30%' }}></div>
              </div>
              <div className="flex justify-between items-center text-[7px] sm:text-[8px] text-[#888] font-mono leading-none">
                <span>Data Feed</span>
                <span className="text-[#2D2D82] font-bold">98.4%</span>
              </div>
            </div>
          </div>

          {/* Bottom-Right Element: Automated Insights */}
          <div className="pop-in-right-bottom absolute right-[-40px] sm:right-[-60px] md:right-[-72px] lg:right-[-64px] bottom-[10%] lg:bottom-[24%] w-[115px] sm:w-[130px] lg:w-[145px] z-20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:opacity-0 lg:scale-75 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto">
            <div className="float-anim-right-bottom select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(45,45,130,0.18)] hover:border-indigo-300/40 p-2 sm:p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-indigo-100/60 shadow-[0_8px_24px_rgba(45,45,130,0.08)] cursor-pointer">
              <div className="flex items-center gap-1 mb-1 sm:mb-1.5 pb-0.5 border-b border-indigo-50/50">
                <svg className="w-2.5 h-2.5 text-indigo-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[7px] sm:text-[8px] font-bold text-[#666] tracking-wider uppercase font-mono">Insights</span>
              </div>
              <div className="text-[8px] sm:text-[9px] font-bold text-[#151137]/90 leading-tight mb-1">
                SEO Opportunity Detected
              </div>
              <div className="text-[7px] sm:text-[8px] px-1 py-0.5 bg-indigo-50/60 text-[#2D2D82] rounded font-bold font-mono text-center">
                Auto Sync: OK
              </div>
            </div>
          </div>

          <Image
            src="/ai-robot-hero.png"
            alt="Sbortix AI Robot Interface"
            width={420}
            height={520}
            priority
            className="object-contain object-bottom w-full"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(45,45,130,0.18))',
              display: 'block',
            }}
            sizes="(max-width: 768px) 55vw, 35vw"
          />
        </div>

        {/* ── BOTTOM-LEFT: Built with purpose block + social proof ── */}
        <div
          className="relative lg:absolute lg:bottom-4 lg:left-14 z-20 w-full max-w-md lg:max-w-[clamp(220px,32vw,360px)] order-4 lg:order-none"
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(15px, 1.8vw, 22px)',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: '#0E0E1A',
              lineHeight: 1.25,
              marginBottom: '8px',
            }}
          >
            Built with Precision.<br />Engineered for Results.
          </h3>
          <p
            style={{
              fontSize: 'clamp(12px, 1.1vw, 15px)',
              color: '#555',
              lineHeight: 1.5,
              fontFamily: "'Inter', sans-serif",
              marginBottom: '16px',
            }}
          >
            Our AI platform combines machine learning with predictive robotics & data, creating an enterprise companion that evolves with your business.
          </p>

          {/* Social proof row */}
          <div className="flex items-center gap-3">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[
                'https://api.dicebear.com/8.x/avataaars/svg?seed=alex',
                'https://api.dicebear.com/8.x/avataaars/svg?seed=sam',
                'https://api.dicebear.com/8.x/avataaars/svg?seed=jordan',
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 overflow-hidden"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  color: '#151137',
                  letterSpacing: '-0.02em',
                }}
              >
                500+
              </span>
              <p
                style={{
                  fontSize: 'clamp(10px, 0.9vw, 13px)',
                  color: '#666',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                Enterprises trust us
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM-RIGHT: Preview/Stats Card ── */}
        <div
          className="relative lg:absolute lg:bottom-4 lg:right-14 z-20 w-full max-w-[260px] lg:w-[clamp(160px,22vw,260px)] mx-auto lg:mx-0 order-5 lg:order-none"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.80)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(45,45,130,0.12)',
              boxShadow: '0 8px 32px rgba(45,45,130,0.12)',
            }}
          >
            {/* Card image area */}
            <div
              className="relative w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50"
              style={{ aspectRatio: '16/10' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                style={{
                  background: 'rgba(45,45,130,0.88)',
                  boxShadow: '0 0 0 6px rgba(45,45,130,0.18)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span
                className="absolute bottom-2 left-3"
                style={{
                  fontSize: '9px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#2D2D82',
                  textTransform: 'uppercase',
                }}
              >
                Watch Platform Demo
              </span>
            </div>

            {/* Card stats */}
            <div className="p-3 flex justify-between items-center">
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: '16px',
                    color: '#151137',
                    lineHeight: 1,
                  }}
                >
                  91%
                </div>
                <div style={{ fontSize: '9px', color: '#888', fontFamily: "'Inter', sans-serif" }}>Accuracy</div>
              </div>
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: '16px',
                    color: '#151137',
                    lineHeight: 1,
                  }}
                >
                  3.2×
                </div>
                <div style={{ fontSize: '9px', color: '#888', fontFamily: "'Inter', sans-serif" }}>ROI Avg.</div>
              </div>
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: '16px',
                    color: '#151137',
                    lineHeight: 1,
                  }}
                >
                  24/7
                </div>
                <div style={{ fontSize: '9px', color: '#888', fontFamily: "'Inter', sans-serif" }}>Live AI</div>
              </div>
            </div>
          </div>
        </div>



      </div>

      {/* Bottom brand hairline */}
      <div
        className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(45, 45, 130, 0.25), transparent)',
          zIndex: 10,
        }}
      />
    </section>
  );
}
