import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Enterprise Project Discovery',
  description: 'Initiate project inquiry and architecture discovery with the Sbortix team. Contact us for custom AI agent builds, data science audits, or growth marketing execution.',
  alternates: {
    canonical: 'https://www.sbortix.com/contact',
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://www.sbortix.com/contact/#webpage',
    'url': 'https://www.sbortix.com/contact',
    'name': 'Contact Us | Enterprise Project Discovery',
    'description': 'Initiate project inquiry and architecture discovery with the Sbortix team.',
    'isPartOf': {
      '@id': 'https://www.sbortix.com/#website'
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
