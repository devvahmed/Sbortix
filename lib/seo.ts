import type { Metadata } from 'next';

export const SITE_URL = 'https://www.sbortix.com';
export const DEFAULT_OG_IMAGE = '/sbortix-logo.png';

/**
 * Returns the canonical absolute URL for any route path.
 *
 * Rules:
 * - Root path ('/' or empty) returns 'https://www.sbortix.com/'
 * - All other paths have NO trailing slash: 'https://www.sbortix.com/services'
 * - Handles leading slashes, accidental trailing slashes, and query parameters cleanly.
 */
export function absoluteUrl(path: string = '/'): string {
  if (!path || path === '/' || path.trim() === '') {
    return `${SITE_URL}/`;
  }

  // Ensure leading slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`;

  // Preserve query string or hash if present
  const [pathname, ...rest] = formattedPath.split('?');
  const normalizedPath = pathname.replace(/\/+$/, '');
  const queryStr = rest.length > 0 ? `?${rest.join('?')}` : '';

  // If path was just "/" or series of slashes, return root with trailing slash
  if (!normalizedPath || normalizedPath === '') {
    return `${SITE_URL}/${queryStr}`;
  }

  return `${SITE_URL}${normalizedPath}${queryStr}`;
}

export interface RouteSeoConfig {
  title: string;
  description: string;
  image?: string;
}

/**
 * Centralized SEO Route Registry for all 9 primary public pages.
 * Strict rules applied:
 * - Every title ends with "| Sbortix" (homepage starts with Sbortix)
 * - Every title <= 60 characters
 * - Every description between 120 and 155 characters
 * - No two routes share title or description
 */
export const ROUTE_METADATA: Record<string, RouteSeoConfig> = {
  '/': {
    title: 'Sbortix | Enterprise AI Agency & Digital Growth Systems',
    description:
      'Sbortix is an Enterprise AI and digital marketing agency. We engineer autonomous AI agents, predictive lead scoring, and high-converting growth systems.',
    image: '/sbortix-logo.png',
  },
  '/services': {
    title: 'Engineered Intelligence & Growth Services | Sbortix',
    description:
      'Explore our core services: AI Solutions, Digital Marketing, Web & Branding, and Data Science. Systems engineered for modern growth teams.',
    image: '/services/service_ai_chatbots.png',
  },
  '/services/ai-solutions': {
    title: 'Enterprise AI Solutions & Workflow Automation | Sbortix',
    description:
      'Engineer production-ready AI systems, 24/7 conversational support bots, and automated business workflows to scale your enterprise operations.',
    image: '/services/service_ai_chatbots.png',
  },
  '/services/digital-marketing': {
    title: 'Technical SEO & High-ROAS Paid Ads Agency | Sbortix',
    description:
      'Combine deep technical search optimization, high-ROAS multi-channel paid ads (Google, Meta, LinkedIn), and automated lifecycle email marketing.',
    image: '/services/service_seo.png',
  },
  '/services/web-branding': {
    title: 'Web Design & Brand Engineering Services | Sbortix',
    description:
      'Build modern, high-converting, responsive web applications and full brand design systems tailored for modern enterprise growth with Sbortix.',
    image: '/services/service_web_branding.png',
  },
  '/work': {
    title: 'Case Studies & Proven Growth Metrics | Sbortix',
    description:
      'Explore technical case studies and outcomes delivered by Sbortix across artificial intelligence, digital growth marketing, and web software engineering.',
    image: '/pulsely.png',
  },
  '/about': {
    title: 'About Us: Enterprise AI & Data Systems | Sbortix',
    description:
      'Sbortix is an enterprise AI engineering firm partnering with forward-thinking teams to replace manual bottlenecks with custom AI agents and analytics.',
    image: '/sbortix-logo.png',
  },
  '/blog': {
    title: 'Blog & Technical Resources | Sbortix',
    description:
      'Insights, architectural whitepapers, and technical guides on enterprise AI deployment, marketing attribution, and data engineering.',
    image: '/sbortix-logo.png',
  },
  '/contact': {
    title: 'Contact Us: Enterprise Project Discovery | Sbortix',
    description:
      'Initiate project inquiry with the Sbortix team. Connect with us for custom AI agent builds, data science audits, or growth marketing execution.',
    image: '/sbortix-logo.png',
  },
};

export interface BuildMetadataOptions {
  path: string;
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Builds a complete Next.js Metadata object with Title, Description,
 * Alternates Canonical, OpenGraph, Twitter, and Robots directives.
 */
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const defaults = ROUTE_METADATA[options.path];
  const title = options.title || defaults?.title || 'Sbortix | Enterprise AI Agency & Digital Growth Systems';
  const description =
    options.description ||
    defaults?.description ||
    'Sbortix is an Enterprise AI and digital marketing agency.';
  const image = options.image || defaults?.image || DEFAULT_OG_IMAGE;
  const canonical = absoluteUrl(options.path);

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Sbortix',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: options.noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
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
  };

  return metadata;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Builds Schema.org BreadcrumbList JSON-LD object with stable @id.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  const currentItem = items[items.length - 1];
  const canonicalUrl = absoluteUrl(currentItem?.path || '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': absoluteUrl(item.path),
    })),
  };
}
