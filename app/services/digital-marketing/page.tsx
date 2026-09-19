import type { Metadata } from 'next';
import DigitalMarketingClient from './DigitalMarketingClient';

export const metadata: Metadata = {
  title: 'Digital Marketing & Programmatic SEO | Sbortix',
  description: 'Scale acquisition with programmatic SEO architectures, high-ROAS paid campaigns, server-side first-party tracking, and unified marketing attribution systems.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sbortix.com/services/digital-marketing/#service',
    'name': 'Digital Marketing & Performance SEO',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization'
    },
    'description': 'Enterprise-grade digital marketing including programmatic SEO, high-ROAS paid campaign automation, and multi-touch revenue attribution modeling.',
    'serviceType': 'Performance Marketing',
    'areaServed': 'Global'
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
