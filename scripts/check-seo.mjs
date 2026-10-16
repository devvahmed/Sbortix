// Build-time SEO verification script
const { ROUTE_METADATA } = await import('../lib/seo.ts');

const errors = [];
const titles = new Map();
const descriptions = new Map();

console.log('=== RUNNING SEO METADATA BUILD AUDIT ===\n');

for (const [route, config] of Object.entries(ROUTE_METADATA)) {
  const { title, description } = config;
  console.log(`Checking route: ${route}`);
  console.log(`  Title (${title.length} chars): "${title}"`);
  console.log(`  Description (${description.length} chars): "${description}"`);

  // 1. Title <= 60 characters
  if (title.length > 60) {
    errors.push(`[${route}] Title exceeds 60 characters (${title.length} chars): "${title}"`);
  }

  // 2. Title branding requirement
  const hasBranding = route === '/' ? title.startsWith('Sbortix') : title.endsWith('| Sbortix');
  if (!hasBranding) {
    errors.push(`[${route}] Title must end with '| Sbortix' (or start with Sbortix for root): "${title}"`);
  }

  // 3. Description between 120 and 155 characters
  if (description.length < 120 || description.length > 155) {
    errors.push(`[${route}] Description length (${description.length}) outside 120-155 characters`);
  }

  // 4. Duplicate title check
  if (titles.has(title)) {
    errors.push(`[${route}] Duplicate title with ${titles.get(title)}: "${title}"`);
  } else {
    titles.set(title, route);
  }

  // 5. Duplicate description check
  if (descriptions.has(description)) {
    errors.push(`[${route}] Duplicate description with ${descriptions.get(description)}`);
  } else {
    descriptions.set(description, route);
  }
}

console.log('\n----------------------------------------');
if (errors.length > 0) {
  console.error(`[SEO CHECK FAILED] ${errors.length} error(s) detected:`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log(`[SEO CHECK PASSED] All ${Object.keys(ROUTE_METADATA).length} routes meet strict SEO constraints!`);
  process.exit(0);
}
