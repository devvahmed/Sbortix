import type { Metadata } from 'next';
import AISolutionsClient from './AISolutionsClient';

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions & Workflow Automation | Sbortix',
  description:
    'Engineer production-ready AI systems, 24/7 conversational support bots, and automated business workflows to scale your enterprise operations.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/ai-solutions',
  },
  openGraph: {
    title: 'Enterprise AI Solutions & Workflow Automation | Sbortix',
    description:
      'Engineer production-ready AI systems, 24/7 conversational support bots, and automated business workflows to scale your enterprise operations.',
    url: 'https://www.sbortix.com/services/ai-solutions',
    siteName: 'Sbortix',
    type: 'website',
    images: [
      {
        url: '/services/service_ai_chatbots.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise AI Solutions & Automation - Sbortix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Solutions & Workflow Automation | Sbortix',
    description:
      'Engineer production-ready AI systems, 24/7 conversational support bots, and automated business workflows to scale your enterprise operations.',
    images: ['/services/service_ai_chatbots.png'],
  },
};

export default function AISolutionsPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sbortix.com/services/ai-solutions/#service',
    'name': 'Enterprise AI Solutions & Workflow Automation',
    'url': 'https://www.sbortix.com/services/ai-solutions',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization',
    },
    'description':
      'Engineer production-ready AI systems, 24/7 conversational support bots, and automated business workflows to scale your enterprise operations.',
    'serviceType': 'Artificial Intelligence Engineering',
    'areaServed': 'Global',
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
