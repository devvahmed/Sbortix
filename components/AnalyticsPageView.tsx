'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent, trackPageView } from '@/lib/analytics';

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPathRef = useRef<string | null>(null);

  useEffect(() => {
    const searchString = searchParams?.toString();
    const fullPath = pathname + (searchString ? `?${searchString}` : '');

    // If page is flagged as 404 (e.g., from NotFoundTracker), suppress page_view
    if (typeof window !== 'undefined' && window.__SBORTIX_IS_404) {
      window.__SBORTIX_IS_404 = false;
      lastTrackedPathRef.current = fullPath;
      return;
    }

    // Send page_view with page_path and page_title on initial load and route changes
    trackPageView(fullPath, typeof document !== 'undefined' ? document.title : '');
    lastTrackedPathRef.current = fullPath;
  }, [pathname, searchParams]);

  // Delegated click listener for cta_click, email_click, and calendar_click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const currentPath = window.location.pathname;

      // 1. CTA Click tracking: [data-cta]
      const ctaElement = target.closest('[data-cta]') as HTMLElement | null;
      if (ctaElement) {
        const cta_id = ctaElement.getAttribute('data-cta') || 'unspecified_cta';
        const cta_text = (ctaElement.innerText || ctaElement.getAttribute('aria-label') || '').trim();
        trackEvent('cta_click', {
          cta_id,
          cta_text,
          page_path: currentPath,
        });
      }

      // 2. Email Click tracking: a[href^="mailto:"]
      const emailAnchor = target.closest('a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (emailAnchor) {
        const link_url = emailAnchor.getAttribute('href') || 'mailto:contact@sbortix.com';
        trackEvent('email_click', {
          link_url,
          page_path: currentPath,
        });
      }

      // 3. Calendar Click tracking: a[href*="cal.com"]
      const calendarAnchor = target.closest('a[href*="cal.com"]') as HTMLAnchorElement | null;
      if (calendarAnchor) {
        const link_url = calendarAnchor.getAttribute('href') || 'https://cal.com';
        trackEvent('calendar_click', {
          link_url,
          page_path: currentPath,
        });
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
