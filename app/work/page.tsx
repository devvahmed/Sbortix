import type { Metadata } from 'next';
import WorkClient from './WorkClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/work' });

export default function WorkPage() {
  // ItemList schema representing all 8 Case Studies visible on the page
  const workSchemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/work')}#itemList`,
    'name': 'Sbortix Case Studies & Systems',
    'description':
      'Explore technical case studies and outcomes delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.',
    'url': absoluteUrl('/work'),
    'numberOfItems': 8,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Pulsely — AI Platform Operations & Velocity Analytics',
        'description':
          'AI-powered operations dashboard delivering real-time platform health monitoring, automated anomaly detection, and engineering velocity analytics for distributed teams.',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Novara Chronométrie — Luxury Horology & E-Commerce Experience',
        'description':
          'Bespoke digital flagship and luxury e-commerce experience for high-end horology, featuring dark editorial aesthetics, interactive timepiece vault catalog, and sub-second transition architecture.',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Agentic Sales Assistant & Lead Qualifier',
        'description':
          'Built an autonomous 24/7 AI sales agent that engages inbound web visitors, qualifies target accounts through multi-turn domain dialogue, and schedules discovery calls directly into CRM calendars.',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Predictive Lead Scoring Engine',
        'description':
          'Machine learning predictive pipeline processing 500,000+ historical deal logs to assign live purchase probability scores to incoming inbound leads in real time.',
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Full-Funnel Growth & Attribution Engine',
        'description':
          'Engineered a data-driven programmatic SEO architecture generating 1,200+ location-specific landing pages paired with unified multi-channel paid acquisition modeling.',
      },
      {
        '@type': 'ListItem',
        'position': 6,
        'name': 'AI Document Intelligence Platform',
        'description':
          'Automated computer vision and LLM document extraction pipeline parsing vendor invoices, shipping bills, and customs manifests with instant ERP reconciliation.',
      },
      {
        '@type': 'ListItem',
        'position': 7,
        'name': 'Enterprise FinTech Core Platform',
        'description':
          'Complete enterprise web platform re-architecture with custom design system tokens, sub-second page rendering, and WCAG AAA accessibility compliance.',
      },
      {
        '@type': 'ListItem',
        'position': 8,
        'name': 'Algorithmic Paid Acquisition Engine',
        'description':
          'Automated paid campaign optimization suite adjusting multi-channel ad bidding in real-time based on live product inventory levels and margin thresholds.',
      },
    ],
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
  ]);

  return (
    <>
      <JsonLd data={[workSchemaJsonLd, breadcrumbJsonLd]} />
      <WorkClient />
    </>
  );
}
