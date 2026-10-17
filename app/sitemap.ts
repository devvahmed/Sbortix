import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

/**
 * Static lastModified dates derived from actual content revision and publication milestones.
 * Prevents dynamic timestamp churn on every build so search engine crawlers can detect true delta updates.
 */
const PAGE_LAST_MODIFIED: Record<string, string> = {
  '/': '2024-10-17',
  '/services': '2024-10-16',
  '/services/ai-solutions': '2024-10-17',
  '/services/digital-marketing': '2024-10-17',
  '/services/web-branding': '2024-10-17',
  '/work': '2024-10-16',
  '/about': '2024-10-15',
  '/blog': '2024-07-15',
  '/contact': '2024-10-15',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/ai-solutions', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/digital-marketing', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/web-branding', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: new Date(PAGE_LAST_MODIFIED[r.path]),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
