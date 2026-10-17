export interface ServiceFaq {
  question: string;
  answer: string;
}

export type ServiceSlug = 'digital-marketing' | 'ai-solutions' | 'web-branding';

export const SERVICES_FAQS: Record<ServiceSlug, ServiceFaq[]> = {
  'digital-marketing': [
    {
      question: 'How does Sbortix approach technical search engine optimization (SEO)?',
      answer:
        'We audit and optimize core web architecture, server-side rendering performance, crawl paths, Schema.org structured data, and internal link equity. Rather than chasing superficial tricks, we ensure search engines can index high-intent landing pages cleanly and rank topical authority signals effectively.',
    },
    {
      question: 'Which paid advertising channels do you configure and manage?',
      answer:
        'We manage high-intent Google Search (PPC), LinkedIn Ads for B2B enterprise lead generation, and Meta (Facebook and Instagram) for brand remarketing and audience capture. Every campaign is monitored with conversion tracking tied directly to your sales pipeline.',
    },
    {
      question: 'How do you measure marketing attribution and pipeline ROI?',
      answer:
        'We establish server-side conversion tracking, clear UTM naming rules, and CRM integration (such as HubSpot or Salesforce). Every advertising dollar and organic visitor is connected to pipeline stages and revenue rather than vanity impressions.',
    },
    {
      question: 'What is the pricing model for digital marketing engagements?',
      answer:
        'Pricing depends on scope. Contact us for a clear quote. We structure transparent retainers or milestone-based scopes based on technical audit depth, monthly media spend management, and the specific acquisition channels required.',
    },
    {
      question: 'How quickly can our team expect measurable campaign results?',
      answer:
        'Paid search and social campaigns begin capturing attribution and conversion data within the first 14 days of launch. Technical SEO and structural search gains build over three to six months as search engine crawlers index architectural improvements.',
    },
  ],

  'ai-solutions': [
    {
      question: 'What types of artificial intelligence systems does Sbortix build?',
      answer:
        'We engineer conversational customer support agents, retrieval-augmented generation (RAG) knowledge retrieval systems, automated document parsing pipelines, and custom predictive machine learning models tailored to your internal operational data.',
    },
    {
      question: 'Where is our proprietary company data hosted and secured?',
      answer:
        'Every solution is deployed directly into your own private cloud infrastructure or dedicated virtual private cloud (AWS, Google Cloud, or Azure). Your internal company documentation, customer records, and queries remain isolated with strict zero-retention enterprise SLAs.',
    },
    {
      question: 'Can your AI systems integrate with our existing CRM, ERP, and databases?',
      answer:
        'Yes. We build bi-directional connectors and secure REST or gRPC API endpoints to sync AI agents with PostgreSQL, Snowflake, BigQuery, Salesforce, HubSpot, Slack, and legacy ERP databases.',
    },
    {
      question: 'What is the pricing structure for enterprise AI engineering?',
      answer:
        'Pricing depends on scope. Contact us for a clear quote. Engagements range from focused feasibility proof-of-concepts to complete multi-agent production deployments with ongoing maintenance and monitoring.',
    },
    {
      question: 'How do you prevent model hallucinations and verify response accuracy?',
      answer:
        'We use retrieval-augmented generation (RAG) grounded exclusively in your verified documentation, strict vector similarity thresholds, deterministic fallback rules, and automated schema validation before any output or action executes.',
    },
  ],

  'web-branding': [
    {
      question: 'What technology stack do you use for web development?',
      answer:
        'We specialize in Next.js (App Router), TypeScript, React, and Tailwind CSS for modern, high-performance web applications. When an editorial team requires self-serve content publishing, we build custom, lightweight WordPress themes with zero plugin bloat.',
    },
    {
      question: 'Do you modernize existing websites or only build new platforms from scratch?',
      answer:
        'We handle both. We can audit, restructure, and optimize an existing web platform to elevate Core Web Vitals, mobile responsiveness, and design consistency, or engineer a new web application alongside a full brand identity system.',
    },
    {
      question: 'What assets and deliverables are included in a brand identity project?',
      answer:
        'Our brand identity package includes responsive vector logo lockups (primary mark, horizontal wordmark, monochrome icons), typography hierarchy rules, tailored color token palettes, brand usage guidelines, and reusable component libraries in Figma.',
    },
    {
      question: 'How is web design and brand identity development priced?',
      answer:
        'Pricing depends on scope. Contact us for a clear quote. Costs reflect the number of page templates, technical functionality, third-party API integrations, and brand design specifications.',
    },
    {
      question: 'How do you guarantee fast load times and mobile responsiveness?',
      answer:
        'We build with semantic HTML5, fluid responsive grid layouts, automated image optimization, zero layout shift (CLS), and clean component trees to maintain sub-second First Contentful Paint times and top Google Lighthouse performance scores.',
    },
  ],
};
