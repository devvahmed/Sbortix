import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) results = results.concat(walk(full));
    else if (/\.(png|jpg|jpeg|webp|svg)$/i.test(file)) {
      results.push({ file: path.relative('public', full), size: stat.size });
    }
  });
  return results;
}

const currentImages = walk('public');
const totalCurrentBytes = currentImages.reduce((sum, img) => sum + img.size, 0);

console.log('Total Current Public Images:', currentImages.length);
console.log('Total Current Weight:', (totalCurrentBytes / (1024 * 1024)).toFixed(2), 'MB');
