'use client';

import { useEffect } from 'react';
import { trackNotFound } from '@/lib/analytics';

export default function NotFoundTracker() {
  // Synchronously flag during render to prevent race conditions with layout effects
  if (typeof window !== 'undefined') {
    window.__SBORTIX_IS_404 = true;
  }

  useEffect(() => {
    trackNotFound();
  }, []);

  return null;
}
