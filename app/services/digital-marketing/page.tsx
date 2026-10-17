import type { Metadata } from 'next';
import DigitalMarketingClient from './DigitalMarketingClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { buildFaqSchema } from '@/lib/services-faq';

export const metadata: Metadata = buildMetadata({ path: '/services/digital-marketing' });

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

  const faqJsonLd = buildFaqSchema('digital-marketing', '/services/digital-marketing');

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ]);

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumbJsonLd]} />
      <DigitalMarketingClient />
    </>
  );
}
