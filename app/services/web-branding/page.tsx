import type { Metadata } from 'next';
import WebBrandingClient from './WebBrandingClient';

export const metadata: Metadata = {
  title: 'Web Design & Brand Engineering Services | Sbortix',
  description:
    'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
  alternates: {
    canonical: 'https://www.sbortix.com/services/web-branding',
  },
  openGraph: {
    title: 'Web Design & Brand Engineering Services | Sbortix',
    description:
      'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
    url: 'https://www.sbortix.com/services/web-branding',
    siteName: 'Sbortix',
    type: 'website',
    images: [
      {
        url: '/services/service_web_branding.png',
        width: 1200,
        height: 630,
        alt: 'Web Design & Brand Engineering - Sbortix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Brand Engineering Services | Sbortix',
    description:
      'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
    images: ['/services/service_web_branding.png'],
  },
};

export default function WebBrandingPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sbortix.com/services/web-branding/#service',
    'name': 'Web Design & Brand Engineering Services',
    'url': 'https://www.sbortix.com/services/web-branding',
    'provider': {
      '@id': 'https://www.sbortix.com/#organization',
    },
    'description':
      'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
    'serviceType': 'Web Engineering & Branding',
    'areaServed': 'Global',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <WebBrandingClient />
    </>
  );
}
