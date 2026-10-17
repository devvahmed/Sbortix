import fs from 'fs';
import path from 'path';

const APP_DIR = path.join('.next', 'server', 'app');

const ROUTES = [
  { path: '/', file: path.join(APP_DIR, 'index.html') },
  { path: '/services', file: path.join(APP_DIR, 'services.html') },
  { path: '/services/ai-solutions', file: path.join(APP_DIR, 'services', 'ai-solutions.html') },
  { path: '/services/digital-marketing', file: path.join(APP_DIR, 'services', 'digital-marketing.html') },
  { path: '/services/web-branding', file: path.join(APP_DIR, 'services', 'web-branding.html') },
  { path: '/work', file: path.join(APP_DIR, 'work.html') },
  { path: '/about', file: path.join(APP_DIR, 'about.html') },
  { path: '/blog', file: path.join(APP_DIR, 'blog.html') },
  { path: '/contact', file: path.join(APP_DIR, 'contact.html') },
];

console.log('=== RUNNING JSON-LD SCHEMA AUDIT ON BUILT HTML ===\n');

let totalErrors = 0;

for (const route of ROUTES) {
  if (!fs.existsSync(route.file)) {
    console.error(`[ERROR] Missing pre-rendered HTML file for ${route.path}: ${route.file}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(route.file, 'utf8');
  const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const matches = [...html.matchAll(scriptRegex)];

  if (matches.length === 0) {
    console.error(`[ERROR] No JSON-LD schema found on route: ${route.path}`);
    totalErrors++;
    continue;
  }

  const pageIds = new Set();
  const schemaTypes = [];

  for (let i = 0; i < matches.length; i++) {
    const rawJson = matches[i][1];
    let parsed;
    try {
      parsed = JSON.parse(rawJson);
    } catch (err) {
      console.error(`[ERROR] Invalid JSON in schema block #${i + 1} on ${route.path}:`, err.message);
      totalErrors++;
      continue;
    }

    const items = Array.isArray(parsed) ? parsed : [parsed];

    for (const item of items) {
      if (!item['@context']) {
        console.error(`[ERROR] Missing @context in schema block on ${route.path}`);
        totalErrors++;
      }
      if (!item['@type']) {
        console.error(`[ERROR] Missing @type in schema block on ${route.path}`);
        totalErrors++;
      } else {
        schemaTypes.push(item['@type']);
      }

      if (item['@id']) {
        if (pageIds.has(item['@id'])) {
          console.error(`[ERROR] Duplicate @id "${item['@id']}" declared on ${route.path}`);
          totalErrors++;
        } else {
          pageIds.add(item['@id']);
        }
      }
    }
  }

  console.log(`Route: ${route.path}`);
  console.log(`  Schemas found: [${schemaTypes.join(', ')}]`);
  console.log(`  Declared @ids: [${Array.from(pageIds).join(', ')}]`);
}

console.log('\n----------------------------------------');
if (totalErrors > 0) {
  console.error(`[SCHEMA CHECK FAILED] Found ${totalErrors} error(s).`);
  process.exit(1);
} else {
  console.log('[SCHEMA CHECK PASSED] All 9 routes render valid JSON-LD with unique @ids and proper @type/@context!');
  process.exit(0);
}
