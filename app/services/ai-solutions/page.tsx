import type { Metadata } from 'next';
import AISolutionsClient from './AISolutionsClient';
import { absoluteUrl, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({ path: '/services/ai-solutions' });

export default function AISolutionsPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl('/services/ai-solutions')}#service`,
    'name': 'Enterprise AI Solutions & Workflow Automation',
    'url': absoluteUrl('/services/ai-solutions'),
    'provider': {
      '@id': `${absoluteUrl('/')}#organization`,
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
