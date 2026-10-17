import type { Metadata } from 'next';
import WorkClient from './WorkClient';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { CASE_STUDIES } from '@/lib/work-data';

export const metadata: Metadata = buildMetadata({ path: '/work' });

export default function WorkPage() {
  // ItemList schema representing all 8 Case Studies visible on the page
  const workSchemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/work')}#itemList`,
    'name': 'Sbortix Case Studies & Systems',
    'description':
      'Explore technical case studies and outcomes delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.',
    'url': absoluteUrl('/work'),
    'numberOfItems': CASE_STUDIES.length,
    'itemListElement': CASE_STUDIES.map((study, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': study.title,
      'description': study.overview,
      ...(study.hasDetail ? { 'url': absoluteUrl(`/work/${study.slug}`) } : {}),
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
  ]);

  return (
    <>
      <JsonLd data={[workSchemaJsonLd, breadcrumbJsonLd]} />
      <WorkClient />
    </>
  );
}
