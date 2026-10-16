import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Sbortix | Enterprise AI Agency & Digital Growth Systems',
  description:
    'Sbortix is a leading hybrid Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: 'Sbortix | Enterprise AI Agency & Digital Growth Systems',
    description:
      'Sbortix is a leading hybrid Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
    url: absoluteUrl('/'),
    siteName: 'Sbortix',
    type: 'website',
    images: [
      {
        url: '/sbortix-logo.png',
        width: 512,
        height: 512,
        alt: 'Sbortix Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sbortix | Enterprise AI Agency & Digital Growth Systems',
    description:
      'Sbortix is a leading hybrid Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
    images: ['/sbortix-logo.png'],
  },
};

export default function HomePage() {
  // WebSite schema for search rich snippets
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    'name': 'Sbortix',
    'url': absoluteUrl('/'),
    'description':
      'Sbortix is a leading hybrid Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
    'publisher': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
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
