import type { Metadata } from 'next';
import WebBrandingClient from './WebBrandingClient';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/services/web-branding' });

export default function WebBrandingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl('/services/web-branding')}#service`,
    'name': 'Web Design & Brand Engineering Services',
    'url': absoluteUrl('/services/web-branding'),
    'provider': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
    'description':
      'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
    'serviceType': 'Web Engineering & Branding',
    'areaServed': 'Global',
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
