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
        className="absolute inset-0 pointer-events-none"
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
          className="relative lg:absolute lg:top-32 lg:left-14 z-10 w-full lg:max-w-[55%] text-left order-1 lg:order-none"
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
              color: '#0E0E1A',
              fontSize: 'clamp(28px, 5vw, 68px)',
              textTransform: 'uppercase',
            }}
          >
            Growth,<br />
            Engineered<br />
            by{' '}
            <span className="relative inline-block" style={{ color: '#2D2D82' }}>
              Intelligence
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
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(15px, 1.6vw, 22px)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: '#151137',
              }}
            >
              Revolutionizing Growth with Intelligence
            </h2>
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
          className="relative lg:absolute lg:top-[18%] lg:left-[54%] lg:-translate-x-1/2 z-15 w-[260px] sm:w-[320px] lg:w-[clamp(260px,35vw,440px)] mx-auto lg:mx-0 my-4 lg:my-0 order-2 lg:order-none"
        >
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
