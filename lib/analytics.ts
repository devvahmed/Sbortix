/**
 * Sbortix Analytics Module (GA4 via gtag)
 * Measurement ID fallback: G-FBDLTHZYJQ
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-FBDLTHZYJQ';

export type EventParams = {
  form_submit: {
    form_name: 'contact_page' | 'home_inquiry';
    page_path: string;
  };
  email_click: {
    link_url: string;
    page_path: string;
  };
  calendar_click: {
    link_url: string;
    page_path: string;
  };
  cta_click: {
    cta_id: string;
    cta_text: string;
    page_path: string;
  };
  page_view: {
    page_path: string;
    page_title: string;
  };
  page_not_found: {
    page_path: string;
  };
};

export type EventName = keyof EventParams;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    __SBORTIX_IS_404?: boolean;
  }
}

/**
 * SSR-safe, ad-blocker-safe gtag event dispatcher.
 * Never throws runtime errors if gtag is blocked or unavailable.
 */
export function trackEvent<E extends EventName>(name: E, params: EventParams[E]): void;
export function trackEvent(name: string, params?: Record<string, any>): void;
export function trackEvent(name: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  } catch {
    // Fail silently without blocking UI if an ad blocker or network proxy intercepts gtag
  }
}

/**
 * Helper to record page views on route changes
 */
export function trackPageView(page_path: string, page_title?: string): void {
  trackEvent('page_view', {
    page_path,
    page_title: page_title || (typeof document !== 'undefined' ? document.title : ''),
  });
}

/**
 * Flag and track a 404 page_not_found event, suppressing standard page_view
 */
export function trackNotFound(page_path?: string): void {
  if (typeof window !== 'undefined') {
    window.__SBORTIX_IS_404 = true;
    const path = page_path || (window.location.pathname + window.location.search);
    trackEvent('page_not_found', { page_path: path });
  }
}
