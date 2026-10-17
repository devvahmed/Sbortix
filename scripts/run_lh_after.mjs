import { execSync } from 'child_process';

const pages = [
  { url: 'http://localhost:3009/', out: 'C:/Users/LENOVO/.gemini/antigravity-ide/brain/a4e57bae-a222-4723-9ba6-58f8ec450e76/scratch/lh-home-after.json' },
  { url: 'http://localhost:3009/services/ai-solutions', out: 'C:/Users/LENOVO/.gemini/antigravity-ide/brain/a4e57bae-a222-4723-9ba6-58f8ec450e76/scratch/lh-ai-after.json' },
  { url: 'http://localhost:3009/services/digital-marketing', out: 'C:/Users/LENOVO/.gemini/antigravity-ide/brain/a4e57bae-a222-4723-9ba6-58f8ec450e76/scratch/lh-dm-after.json' },
  { url: 'http://localhost:3009/services/web-branding', out: 'C:/Users/LENOVO/.gemini/antigravity-ide/brain/a4e57bae-a222-4723-9ba6-58f8ec450e76/scratch/lh-wb-after.json' }
];

for (const p of pages) {
  console.log(`Running Lighthouse on ${p.url}...`);
  execSync(`npx lighthouse ${p.url} --only-categories=performance --output=json --output-path="${p.out}" --chrome-flags="--headless --no-sandbox"`, { stdio: 'inherit' });
}
console.log('Done post-optimization benchmarks.');
