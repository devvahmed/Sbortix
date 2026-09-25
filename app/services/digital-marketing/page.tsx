import type { Metadata } from 'next';
import DigitalMarketingClient from './DigitalMarketingClient';

export const metadata: Metadata = {
  title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
  description:
    'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/digital-marketing',
  },
  openGraph: {
    title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
    description:
      'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing with Sbortix.',
    url: 'https://www.sbortix.com/services/digital-marketing',
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
    '@id': 'https://www.sbortix.com/services/digital-marketing/#service',
    'name': 'Technical SEO & High-ROAS Paid Ads Agency',
    'url': 'https://www.sbortix.com/services/digital-marketing',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization',
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
