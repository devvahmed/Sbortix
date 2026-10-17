import type { Metadata } from 'next';
import WebBrandingClient from './WebBrandingClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { buildFaqSchema } from '@/lib/services-faq';

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

  const faqJsonLd = buildFaqSchema('web-branding', '/services/web-branding');

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Web & Branding', path: '/services/web-branding' },
  ]);

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumbJsonLd]} />
      <WebBrandingClient />
    </>
  );
}
