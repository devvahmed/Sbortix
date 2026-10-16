import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us | Enterprise Project Discovery',
  description: 'Initiate project inquiry and architecture discovery with the Sbortix team. Contact us for custom AI agent builds, data science audits, or growth marketing execution.',
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${absoluteUrl('/contact')}#webpage`,
    'url': absoluteUrl('/contact'),
    'name': 'Contact Us | Enterprise Project Discovery',
    'description': 'Initiate project inquiry and architecture discovery with the Sbortix team.',
    'isPartOf': {
      '@id': `${absoluteUrl('/')}#website`,
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
