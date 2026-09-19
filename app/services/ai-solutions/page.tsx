import type { Metadata } from 'next';
import AISolutionsClient from './AISolutionsClient';

export const metadata: Metadata = {
  title: 'AI Solutions & Automation | Enterprise Intelligence',
  description: 'Deploy production-grade conversational AI chatbots, RAG search pipelines, predictive lead scoring engines, and custom analytics models with Sbortix.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/ai-solutions',
  },
};

export default function AISolutionsPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sbortix.com/services/ai-solutions/#service',
    'name': 'AI Solutions & Enterprise Automation',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization'
    },
    'description': 'Deploy production-grade conversational AI agents, predictive machine learning pipelines, and automated enterprise workflow solutions.',
    'serviceType': 'Artificial Intelligence Engineering',
    'areaServed': 'Global'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <AISolutionsClient />
    </>
  );
}
