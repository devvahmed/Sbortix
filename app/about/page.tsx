import Link from 'next/link';

export const metadata = {
  title: 'About | Sbortix Enterprise AI & Data Science Agency',
  description: 'Learn about Sbortix: our mission, methodology, team architecture, leadership, and global operational nodes.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Bilal',
      role: 'SENIOR DIGITAL GROWTH & MARKETING LEAD',
      bio: '7+ years of hands-on experience scaling performance marketing, SEO keyword rankings, Google & Meta paid ads, and revenue attribution.',
      icon: 'trending_up',
      tag: '7+ YEARS GROWTH EXP',
    },
    {
      name: 'Salman (Salman Tauheed)',
      role: 'LEAD AI SYSTEMS ENGINEER',
      bio: 'Former Senior AI Engineer at a top Japanese technology corporation. Architect of custom AI chatbots, fine-tuned LLMs, and autonomous workflow engines.',
      icon: 'psychology',
      tag: 'EX-JAPAN TECH AI LEAD',
    },
    {
      name: 'Muhammad Ahmed',
      role: 'CHIEF DATA SCIENTIST & TECH ARCHITECT',
      bio: 'Founder of multiple tech ventures specializing in enterprise data science, predictive BI analytics dashboards, and modern Next.js/React platforms.',
      icon: 'code',
      tag: 'SERIAL TECH FOUNDER',
    },
  ];

  return (
    <div className="w-full bg-white py-xl">
      {/* Header */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-20">
        <div className="inline-block px-xs py-1 border hairline-border rounded mb-md bg-white">
          <span className="tech-label text-primary">[SYSTEM_ORIGIN_PROTOCOL]</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-md max-w-4xl">
          Engineering Trust and Intelligence for Modern Enterprises
        </h1>
        <p className="text-secondary font-body-lg text-body-lg max-w-3xl">
          Sbortix was founded to eliminate the obscurity of legacy marketing agencies. We operate as a pure engineering firm where data science, AI automation, and full-stack software development power every growth objective.
        </p>
      </section>

      {/* Core Principles */}
      <section className="px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-lg mb-24">
        <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
          <span className="tech-label text-primary block mb-xs">PRINCIPLE_01</span>
          <h3 className="font-headline-md text-headline-md mb-xs">Zero Guesswork</h3>
          <p className="text-secondary text-body-md">
            Every hypothesis is tested against empirical benchmarks and statistical significance metrics.
          </p>
        </div>

        <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
          <span className="tech-label text-primary block mb-xs">PRINCIPLE_02</span>
          <h3 className="font-headline-md text-headline-md mb-xs">Full In-House Execution</h3>
          <p className="text-secondary text-body-md">
            We never outsource core engineering or strategy. Your project is built directly by senior engineers.
          </p>
        </div>

        <div className="p-lg bg-surface-container-low border border-outline-variant rounded-xl">
          <span className="tech-label text-primary block mb-xs">PRINCIPLE_03</span>
          <h3 className="font-headline-md text-headline-md mb-xs">Direct Founder Access</h3>
          <p className="text-secondary text-body-md">
            We keep our client roster small to ensure every engagement receives direct founder oversight.
          </p>
        </div>
      </section>

      {/* Team Architecture */}
      <section className="px-margin-desktop max-w-7xl mx-auto mb-24">
        <div className="flex items-end justify-between mb-xl">
          <div>
            <span className="tech-label text-primary mb-xs block">[HUMAN_CAPITAL_NODES]</span>
            <h2 className="font-headline-lg text-headline-lg">Leadership & Team Architecture</h2>
          </div>
          <div className="hidden md:block tech-label text-outline">LOCATION: DHA PHASE 6, KHI</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-md">
                  <span className="tech-label text-outline text-[9px]">{member.tag}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{member.icon}</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-background mb-xs">{member.name}</h3>
                <p className="tech-label text-primary text-[10px] mb-md">{member.role}</p>
                <p className="text-secondary text-body-md leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Node Strip */}
      <section className="bg-primary-container text-white py-xl">
        <div className="max-w-7xl mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-lg">
          <div>
            <span className="tech-label opacity-70 block mb-xs">[GLOBAL_FOOTPRINT]</span>
            <h3 className="font-headline-lg text-headline-lg">Ready to transform your technical growth operations?</h3>
          </div>
          <Link href="/contact" className="bg-white text-primary px-lg py-md rounded-lg font-label-md font-bold hover:bg-surface-container-low transition-colors whitespace-nowrap">
            Schedule Founder Call
          </Link>
        </div>
      </section>
    </div>
  );
}
