import type { Metadata } from 'next';
import DigitalMarketingClient from './DigitalMarketingClient';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
  description:
    'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
  alternates: {
    canonical: absoluteUrl('/services/digital-marketing'),
  },
  openGraph: {
    title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
    description:
      'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
    url: absoluteUrl('/services/digital-marketing'),
    siteName: 'Sbortix',
    type: 'website',
    images: [
      {
        url: '/services/service_seo.png',
        width: 1200,
        height: 630,
        alt: 'Technical SEO & High-ROAS Paid Ads - Sbortix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
    description:
      'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
    images: ['/services/service_seo.png'],
  },
};

export default function DigitalMarketingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl('/services/digital-marketing')}#service`,
    'name': 'Technical SEO & High-ROAS Paid Ads Agency',
    'url': absoluteUrl('/services/digital-marketing'),
    'provider': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
    'description':
      'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
    'serviceType': 'Performance Marketing',
    'areaServed': 'Global',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <DigitalMarketingClient />
    </>
  );
}
