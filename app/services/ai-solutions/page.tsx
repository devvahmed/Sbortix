import type { Metadata } from 'next';
import AISolutionsClient from './AISolutionsClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { buildFaqSchema } from '@/lib/services-faq';

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

  const faqJsonLd = buildFaqSchema('ai-solutions', '/services/ai-solutions');

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
  ]);

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumbJsonLd]} />
      <AISolutionsClient />
    </>
  );
}
