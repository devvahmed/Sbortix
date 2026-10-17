import fs from 'fs';

let content = fs.readFileSync('app/services/page.tsx', 'utf8');

// Replace .png with .webp for service images
content = content.replace(/\/services\/service_([a-z_]+)\.png/g, '/services/service_$1.webp');

// Add sizes to Image tags with fill in services page
content = content.replace(/fill(\s+className="object-cover)/g, 'fill\n                    sizes="(max-width: 1024px) 100vw, 50vw"$1');

fs.writeFileSync('app/services/page.tsx', content, 'utf8');
console.log('Successfully updated app/services/page.tsx with .webp and sizes');
