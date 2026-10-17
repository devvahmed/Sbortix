import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/contact' });

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${absoluteUrl('/contact')}#webpage`,
    'url': absoluteUrl('/contact'),
    'name': 'Contact Us: Enterprise Project Discovery | Sbortix',
    'description':
      'Initiate project inquiry with the Sbortix team. Connect with us for custom AI agent builds, data science audits, or growth marketing execution.',
    'isPartOf': {
      '@id': `${absoluteUrl('/')}#website`,
    },
    'mainEntity': {
      '@id': `${absoluteUrl('/')}#organization`,
    },
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
      <ContactClient />
    </>
  );
}
