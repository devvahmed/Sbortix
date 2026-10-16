export const SITE_URL = 'https://www.sbortix.com';

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
