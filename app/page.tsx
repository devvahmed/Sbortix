import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/' });

export default function HomePage() {
  // WebSite schema for search rich snippets
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    'name': 'Sbortix',
    'url': absoluteUrl('/'),
    'description':
      'Sbortix is an Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
    'publisher': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HomeClient />
    </>
  );
}
