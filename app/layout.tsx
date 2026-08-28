import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Configure Google Fonts through Next.js optimized font loader
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sbortix.com'),
  title: {
    default: 'Sbortix — Engineered Intelligence for Growth',
    template: '%s | Sbortix',
  },
  description: 'Sbortix bridges the gap between complex data science and high-performance marketing. Enterprise intelligence engineered for modern growth teams.',
  keywords: [
    'AI Chatbots',
    'Conversational AI',
    'Enterprise AI Solutions',
    'Digital Growth Marketing',
    'Predictive Lead Scoring',
    'Programmatic SEO',
    'Web Architecture',
    'Brand Engineering',
    'ETL Pipelines',
    'Data Science Agency',
  ],
  authors: [{ name: 'Sbortix Team', url: 'https://www.sbortix.com' }],
  creator: 'Sbortix',
  publisher: 'Sbortix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sbortix.com',
    siteName: 'Sbortix',
    title: 'Sbortix — Engineered Intelligence for Growth',
    description: 'Enterprise intelligence engineered for modern growth teams. We build custom AI agents, predictive scoring, and high-performance web systems.',
    images: [
      {
        url: '/sbortix-logo.png',
        width: 512,
        height: 512,
        alt: 'Sbortix Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sbortix — Engineered Intelligence for Growth',
    description: 'Enterprise intelligence engineered for modern growth teams. We build custom AI agents, predictive scoring, and high-performance web systems.',
    images: ['/sbortix-logo.png'],
  },
  verification: {
    google: 'jtIJi8jc4K9UhS-lTwQx04gXrtCb8G6x7zpEh4gMZFE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global organization schema for Google Rich Search Snippets
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.sbortix.com/#organization',
    'name': 'Sbortix',
    'url': 'https://www.sbortix.com',
    'logo': 'https://www.sbortix.com/sbortix-logo.png',
    'image': 'https://www.sbortix.com/sbortix-logo.png',
    'description': 'Enterprise AI engineering, data science, and digital marketing firm.',
    'sameAs': [
      'https://www.linkedin.com/company/sbortix',
      'https://x.com/sbortix',
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Karachi',
      'addressCountry': 'PK',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'contact@sbortix.com',
      'contactType': 'customer support',
      'availableLanguage': ['en', 'ur'],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} light scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="jtIJi8jc4K9UhS-lTwQx04gXrtCb8G6x7zpEh4gMZFE" />
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FBDLTHZYJQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FBDLTHZYJQ');
          `}
        </Script>
        <link rel="icon" href="/sbortix-logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
