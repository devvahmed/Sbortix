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
    'numberOfItems': 8,
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
        'name': 'Novara Chronométrie — Luxury Horology & E-Commerce Experience',
        'description': 'Bespoke digital flagship and luxury e-commerce experience for high-end horology with interactive timepiece vault catalog.'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Agentic Sales Assistant & Lead Qualifier',
        'description': 'Autonomous 24/7 AI sales agent qualifying target accounts and booking CRM meetings.'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Predictive Lead Scoring Engine',
        'description': 'Real-time XGBoost scoring pipeline integrated into Snowflake and BigQuery.'
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
