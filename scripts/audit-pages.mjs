const pages = [
  '/',
  '/services',
  '/services/ai-solutions',
  '/services/digital-marketing',
  '/services/web-branding',
  '/work',
  '/about',
  '/blog',
  '/contact',
  '/work/pulsely',
  '/work/novara-chronometrie',
];

async function inspectAll() {
  const table = [];

  for (const p of pages) {
    const res = await fetch('http://localhost:3009' + p);
    const html = await res.text();

    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : '';

    const descMatch =
      html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
    const desc = descMatch ? descMatch[1] : '';

    const canonMatch =
      html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
      html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
    const canonical = canonMatch ? canonMatch[1] : '';

    const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
    const jsonLdCount = (html.match(/<script\s+type=["']application\/ld\+json["']/gi) || []).length;

    const hasOg = html.includes('og:title') && html.includes('og:description');
    const hasTwitter = html.includes('twitter:card') && html.includes('twitter:title');
    const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const robots = robotsMatch ? robotsMatch[1] : 'index, follow (default)';

    table.push({
      page: p,
      status: res.status,
      titleLen: title.length,
      descLen: desc.length,
      h1Count,
      jsonLdCount,
      canonical,
      ogTwitter: hasOg && hasTwitter ? 'Present' : 'Missing',
      robots,
    });
  }

  console.table(table);
}

inspectAll();
