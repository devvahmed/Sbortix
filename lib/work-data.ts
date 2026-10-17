export interface CaseStudyDetail {
  challengeDeepDive?: string;
  architectureHighlights?: string[];
  deliverables?: string[];
  metricsBreakdown?: Array<{
    label: string;
    value: string;
    context?: string;
  }>;
}

export interface CaseStudy {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  category: 'AI' | 'MARKETING' | 'WEB';
  client: string;
  metrics: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  statusTag: string;
  liveUrl?: string;
  imageFit?: 'contain' | 'cover' | 'top';
  imageBg?: string;
  relatedService: {
    title: string;
    href: string;
  };
  hasDetail: boolean;
  detail?: CaseStudyDetail;
}

/**
 * Sbortix 8 Enterprise Case Studies & Systems.
 * Preserves all original numbers, claims, and client specifications.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '01',
    slug: 'pulsely',
    eyebrow: 'AI Operations & Analytics',
    title: 'Pulsely — AI Platform Operations & Velocity Analytics',
    category: 'AI',
    client: 'Platform Engineering • Built by Sbortix',
    metrics: '58% Faster Incident Detection',
    overview:
      'AI-powered operations dashboard delivering real-time platform health monitoring, automated anomaly detection, and engineering velocity analytics for distributed teams.',
    problem:
      'Engineering teams lacked real-time visibility into platform health and deployment velocity, relying on manual log reviews and delayed incident escalation.',
    solution:
      'Built an AI-powered monitoring pipeline with automated anomaly detection, real-time alerting, and a velocity analytics engine surfacing engineering metrics in a live dashboard.',
    result:
      '58% faster incident detection and 99.95% monitoring uptime across connected platform environments.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Platform Monitoring & Analytics'],
    imageUrl: '/pulsely.webp',
    imageAlt: 'Pulsely AI Platform Operations & Velocity Analytics Dashboard',
    statusTag: 'Live Production • 99.95% Uptime',
    liveUrl: 'https://pulselyy.netlify.app',
    imageFit: 'contain',
    imageBg: 'bg-[#0B0D1B]',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    hasDetail: true,
    detail: {
      challengeDeepDive:
        'Modern microservice platform environments generate massive volumes of continuous operational telemetry. Without real-time aggregation and algorithmic anomaly filtering, on-call engineers suffer from notification fatigue and delayed time-to-mitigation during critical production incidents.',
      architectureHighlights: [
        'Real-time WebSocket telemetry ingestion pipeline built on FastAPI.',
        'Deterministic outlier detection running continuous sliding-window statistical analysis over response latencies.',
        'Sub-second responsive dashboard built with Next.js and Tailwind CSS featuring dark HUD operational themes.',
        'Role-based access control and live uptime SLA tracking.',
      ],
      deliverables: [
        'Full-stack Next.js analytics application deployed on high-availability edge nodes.',
        'Automated alerting connectors integrating with incident escalation platforms.',
        'Production monitoring infrastructure maintaining 99.95% historical platform uptime.',
      ],
      metricsBreakdown: [
        { label: 'Incident Detection Speed', value: '58% Faster', context: 'Reduction in mean time to detect anomalies' },
        { label: 'Platform Availability', value: '99.95%', context: 'Continuous uptime across production telemetry nodes' },
        { label: 'Dashboard Latency', value: '<200ms', context: 'Edge-cached telemetry render speed' },
      ],
    },
  },
  {
    id: '02',
    slug: 'novara-chronometrie',
    eyebrow: 'Luxury Web & E-Commerce',
    title: 'Novara Chronométrie — Luxury Horology & E-Commerce Experience',
    category: 'WEB',
    client: 'Novara Chronométrie • Built by Sbortix',
    metrics: '0.45s Speed • +62% Conversion',
    overview:
      'Bespoke digital flagship and luxury e-commerce experience for high-end horology, featuring dark editorial aesthetics, interactive timepiece vault catalog, and sub-second transition architecture.',
    problem:
      'Traditional luxury timepiece retailers struggle to convey tactile heritage and exclusive craftsmanship on generic, slow e-commerce templates.',
    solution:
      'Engineered an editorial luxury digital flagship with bespoke typography, immersive visual transitions, instant cart vault architecture, and localized real-time horology telemetry.',
    result:
      'Sub-0.5s page transitions, 62% lift in checkout conversion, and 99.9% uptime.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Luxury E-Commerce'],
    imageUrl: '/novara.webp',
    imageAlt: 'Novara Chronometrie Luxury Watch E-Commerce Web Experience',
    statusTag: 'Live Production • Luxury E-Commerce',
    liveUrl: 'https://novara-watches.netlify.app/',
    imageFit: 'contain',
    imageBg: 'bg-[#06070B]',
    relatedService: {
      title: 'Web Design & Brand Engineering Services',
      href: '/services/web-branding',
    },
    hasDetail: true,
    detail: {
      challengeDeepDive:
        'Luxury horology buyers demand sensory digital experiences that mirror the prestige of a physical private salon. Sluggish page transitions, standard e-commerce UI patterns, and generic product grids detract from multi-thousand-dollar collector timepieces.',
      architectureHighlights: [
        'Custom editorial typography and high-contrast dark luxury color palette.',
        'Optimized Next.js image loading pipeline delivering sub-0.5s page transitions.',
        'Interactive timepiece vault catalog with micro-interactions and smooth scroll orchestration.',
        'Frictionless checkout pathway designed for private acquisition inquiries.',
      ],
      deliverables: [
        'Complete digital flagship e-commerce platform and brand identity engineering.',
        'Optimized responsive layout across mobile, tablet, and high-DPI desktop viewports.',
        'Full technical SEO foundation and schema markup.',
      ],
      metricsBreakdown: [
        { label: 'Page Transition Speed', value: '0.45s', context: 'Sub-second interaction velocity' },
        { label: 'Checkout Conversion Lift', value: '+62%', context: 'Increase in completed vault reservation inquiries' },
        { label: 'Platform Availability', value: '99.9%', context: 'Uptime reliability' },
      ],
    },
  },
  {
    id: '03',
    slug: 'agentic-sales-assistant',
    eyebrow: 'Machine Learning',
    title: 'Agentic Sales Assistant & Lead Qualifier',
    category: 'AI',
    client: 'Enterprise SaaS Provider',
    metrics: '3.4x Lead Conversion Boost',
    overview:
      'Built an autonomous 24/7 AI sales agent that engages inbound web visitors, qualifies target accounts through multi-turn domain dialogue, and schedules discovery calls directly into CRM calendars.',
    problem:
      'Sales reps spent 18+ hours weekly manually qualifying raw leads, causing 60% of inquiries to drop off.',
    solution:
      'Deployed a 24/7 RAG-powered AI sales assistant connected to HubSpot and Outlook Calendar.',
    result:
      '3.4x increase in qualified lead conversion with <0.4s response speed.',
    tags: ['OpenAI LLM', 'Next.js', 'Vector Database', 'HubSpot API'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Agentic Sales Assistant CRM Lead Dashboard Interface',
    statusTag: 'Live System • 0.38s Latency',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    hasDetail: false, // Card-level showcase only; deeper client technical whitepaper in preparation
  },
  {
    id: '04',
    slug: 'predictive-lead-scoring',
    eyebrow: 'Predictive Data',
    title: 'Predictive Lead Scoring Engine',
    category: 'AI',
    client: 'Fintech Capital Firm',
    metrics: '42% Reduction in CAC',
    overview:
      'Machine learning predictive pipeline processing 500,000+ historical deal logs to assign live purchase probability scores to incoming inbound leads in real time.',
    problem:
      'Ad spend was wasted on low-probability prospects due to manual lead prioritization.',
    solution:
      'Engineered a real-time XGBoost scoring pipeline integrated into Snowflake and BigQuery.',
    result:
      '42% reduction in customer acquisition cost (CAC) and 99.4% scoring accuracy.',
    tags: ['Python', 'XGBoost', 'Snowflake', 'BigQuery'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Predictive Lead Scoring Analytics Software Interface',
    statusTag: 'Production • 99.4% Accuracy',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    hasDetail: false,
  },
  {
    id: '05',
    slug: 'full-funnel-growth-engine',
    eyebrow: 'Growth Marketing',
    title: 'Full-Funnel Growth & Attribution Engine',
    category: 'MARKETING',
    client: 'B2B Logistics Platform',
    metrics: '+280% Organic Traffic Growth',
    overview:
      'Engineered a data-driven programmatic SEO architecture generating 1,200+ location-specific landing pages paired with unified multi-channel paid acquisition modeling.',
    problem:
      'Fragmented ad campaigns with zero unified ROI attribution across paid and organic channels.',
    solution:
      'Built 1,200+ programmatic SEO landing pages and a unified multi-touch revenue attribution model.',
    result:
      '+280% organic traffic surge and 4.2x average return on ad spend (ROAS).',
    tags: ['Next.js App Router', 'Google Ads API', 'Looker Studio', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Full-Funnel Growth Marketing Analytics Dashboard',
    statusTag: 'Deployed • 4.2x ROAS',
    relatedService: {
      title: 'Technical SEO & High-ROAS Paid Ads Agency',
      href: '/services/digital-marketing',
    },
    hasDetail: false,
  },
  {
    id: '06',
    slug: 'ai-document-intelligence',
    eyebrow: 'Document Intelligence',
    title: 'AI Document Intelligence Platform',
    category: 'AI',
    client: 'Global Logistics Operator',
    metrics: '85% Manual Cost Savings',
    overview:
      'Automated computer vision and LLM document extraction pipeline parsing vendor invoices, shipping bills, and customs manifests with instant ERP reconciliation.',
    problem:
      '12,000+ monthly shipping invoices processed manually, leading to data errors and delayed vendor payments.',
    solution:
      'Implemented an automated OCR + LLM document extraction pipeline with instant ERP sync.',
    result:
      '85% reduction in manual data entry overhead and 99.8% extraction accuracy.',
    tags: ['Computer Vision', 'PyTorch', 'FastAPI', 'Enterprise ERP'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'AI Document Extraction and Invoice Scanning UI',
    statusTag: 'System Active • 99.8% Accuracy',
    relatedService: {
      title: 'Enterprise AI Solutions & Workflow Automation',
      href: '/services/ai-solutions',
    },
    hasDetail: false,
  },
  {
    id: '07',
    slug: 'enterprise-fintech-core-platform',
    eyebrow: 'FinTech Web',
    title: 'Enterprise FinTech Core Platform',
    category: 'WEB',
    client: 'Enterprise Banking Core',
    metrics: '99.99% Operational Uptime',
    overview:
      'Complete enterprise web platform re-architecture with custom design system tokens, sub-second page rendering, and WCAG AAA accessibility compliance.',
    problem:
      'Legacy banking dashboard suffered from high bounce rates and 4.2-second page load times.',
    solution:
      'Re-architected on Next.js App Router with custom design system tokens and edge caching.',
    result:
      'Sub-0.6s page load speed and 99.99% operational uptime.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js App Router'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Enterprise FinTech Banking Platform Dashboard',
    statusTag: 'Production • 0.6s Load Speed',
    relatedService: {
      title: 'Web Design & Brand Engineering Services',
      href: '/services/web-branding',
    },
    hasDetail: false,
  },
  {
    id: '08',
    slug: 'algorithmic-paid-acquisition-engine',
    eyebrow: 'Performance PPC',
    title: 'Algorithmic Paid Acquisition Engine',
    category: 'MARKETING',
    client: 'Global E-Commerce Network',
    metrics: '-35% Lower Acquisition CAC',
    overview:
      'Automated paid campaign optimization suite adjusting multi-channel ad bidding in real-time based on live product inventory levels and margin thresholds.',
    problem:
      'Ad campaigns ran on out-of-stock items, burning budget during inventory supply gaps.',
    solution:
      'Connected ad bid management directly to live inventory database triggers.',
    result:
      '-35% lower cost per acquisition and 3.8x baseline ROAS lift.',
    tags: ['Google Ads API', 'Meta Graph API', 'Python', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Algorithmic Paid Ad Bidding Performance Software',
    statusTag: 'Live Feed • 3.8x ROAS',
    relatedService: {
      title: 'Technical SEO & High-ROAS Paid Ads Agency',
      href: '/services/digital-marketing',
    },
    hasDetail: false,
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudiesWithDetail(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.hasDetail);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
