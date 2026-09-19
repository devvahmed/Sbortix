import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Sbortix — Engineered Intelligence for Growth',
  description: 'Enterprise AI engineering, predictive data analytics, and digital growth systems for modern companies. Partner with Sbortix to automate operational bottlenecks.',
  alternates: {
    canonical: 'https://www.sbortix.com',
  },
};

export default function HomePage() {
  // WebSite schema for search rich snippets
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sbortix.com/#website',
    'name': 'Sbortix',
    'url': 'https://www.sbortix.com',
    'description': 'Enterprise AI engineering, data science, and digital marketing firm.',
    'publisher': {
      '@id': 'https://www.sbortix.com/#organization'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
