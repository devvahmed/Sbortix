import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToOptimize = [
  { file: 'novara.png', maxW: 1600, webp: true, keepPng: false },
  { file: 'pulsely.png', maxW: 1600, webp: true, keepPng: false },
  { file: 'ai-robot-hero.png', maxW: 1024, webp: true, keepPng: true },
  { file: 'services/service_social_media.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_seo.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ppc_ads.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_email_marketing.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_dm_social.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_web_branding.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ai_chatbot.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_dm_seo.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ai_workflow.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ai_custom_ml.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_dm_email.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ai_chatbots.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_ai_analytics.png', maxW: 1024, webp: true, keepPng: false },
  { file: 'services/service_dm_ppc.png', maxW: 1024, webp: true, keepPng: false }
];

async function run() {
  const report = [];

  for (const item of filesToOptimize) {
    const fullPath = path.join(process.cwd(), 'public', item.file);
    if (!fs.existsSync(fullPath)) continue;

    const beforeStat = fs.statSync(fullPath);
    const beforeSize = beforeStat.size;

    const img = sharp(fullPath);
    const meta = await img.metadata();

    let resizeW = meta.width;
    let resizeH = meta.height;
    if (meta.width > item.maxW) {
      resizeW = item.maxW;
      resizeH = Math.round((meta.height * item.maxW) / meta.width);
    }

    const webpPath = fullPath.replace(/\.png$/, '.webp');
    await sharp(fullPath)
      .resize(resizeW, resizeH)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath + '.tmp');

    fs.renameSync(webpPath + '.tmp', webpPath);
    const webpStat = fs.statSync(webpPath);

    let pngSize = null;
    if (item.keepPng) {
      // also heavily optimize the PNG with pngquant/palette or maximum compression
      const optPngPath = fullPath + '.tmp';
      await sharp(fullPath)
        .resize(resizeW, resizeH)
        .png({ quality: 80, compressionLevel: 9, effort: 8 })
        .toFile(optPngPath);
      fs.renameSync(optPngPath, fullPath);
      pngSize = fs.statSync(fullPath).size;
    }

    report.push({
      file: item.file,
      beforeSize: `${(beforeSize / 1024).toFixed(1)} KB`,
      webpSize: `${(webpStat.size / 1024).toFixed(1)} KB`,
      pngSize: pngSize ? `${(pngSize / 1024).toFixed(1)} KB` : 'N/A',
      savedPercent: `${(((beforeSize - webpStat.size) / beforeSize) * 100).toFixed(1)}%`
    });
  }

  console.table(report);
}

run();
