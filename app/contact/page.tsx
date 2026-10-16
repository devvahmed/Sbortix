import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/contact' });

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
