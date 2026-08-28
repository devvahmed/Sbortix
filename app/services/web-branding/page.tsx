import type { Metadata } from 'next';
import WebBrandingClient from './WebBrandingClient';

export const metadata: Metadata = {
  title: 'Web Design & Brand Engineering | Sbortix',
  description: 'Command market authority with sub-second page rendering, custom design token systems, WordPress themes, conversion rate optimization (CRO), and logo identity systems.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/web-branding',
  },
};

export default function WebBrandingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sbortix.com/services/web-branding/#service',
    'name': 'Web Design & Brand Engineering',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization'
    },
    'description': 'High-performance custom web development using Next.js App Router, responsive design token systems, WordPress setups, and visual vector brand identities.',
    'serviceType': 'Web Engineering & Branding',
    'areaServed': 'Global'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <WebBrandingClient />
    </>
  );
}
