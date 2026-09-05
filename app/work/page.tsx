import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Proven Growth Metrics',
  description: 'Explore technical case studies and enterprise outcomes delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.',
  alternates: {
    canonical: 'https://www.sbortix.com/work',
  },
};

export default function WorkPage() {
  // ItemList schema representing Case Studies
  const workSchemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://www.sbortix.com/work/#itemList',
    'name': 'Sbortix Case Studies',
    'description': 'Software implementations and AI deployments delivered by Sbortix.',
    'url': 'https://www.sbortix.com/work',
    'numberOfItems': 7,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Pulsely — AI Platform Operations & Velocity Analytics',
        'description': 'AI-powered operations dashboard delivering real-time platform health monitoring, automated anomaly detection, and engineering velocity analytics for distributed teams.'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Agentic Sales Assistant & Lead Qualifier',
        'description': 'Autonomous 24/7 AI sales agent qualifying target accounts and booking CRM meetings.'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Predictive Lead Scoring Engine',
        'description': 'Real-time XGBoost scoring pipeline integrated into Snowflake and BigQuery.'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Full-Funnel Growth & Attribution Engine',
        'description': 'B2B logistics platform programmatic SEO architecture generating 1200+ landing pages.'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchemaJsonLd) }}
      />
      <WorkClient />
    </>
  );
}
