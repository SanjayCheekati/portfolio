#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * Generates optimized WebP and AVIF versions of images with multiple sizes.
 * Supports dry-run mode to preview changes without writing files.
 * 
 * Usage:
 *   node scripts/optimize-images.js [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

// Configuration
const CONFIG = {
  inputDirs: [
    path.join(ROOT_DIR, 'public'),
    path.join(ROOT_DIR, 'src', 'assets')
  ],
  outputDir: path.join(ROOT_DIR, 'dist', 'assets', 'optimized'),
  sizes: {
    small: 640,    // Mobile
    medium: 1024,  // Tablet
    large: 1920    // Desktop
  },
  formats: ['webp', 'avif'],
  quality: {
    webp: 85,
    avif: 80,
    jpeg: 85
  },
  extensions: ['.jpg', '.jpeg', '.png']
};

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');

/**
 * Find all images in input directories
 */
async function findImages() {
  const patterns = CONFIG.extensions.map(ext => 
    `**/*${ext}`
  );
  
  const images = [];
  for (const dir of CONFIG.inputDirs) {
    if (!fs.existsSync(dir)) continue;
    
    for (const pattern of patterns) {
      const files = await glob(pattern, {
        cwd: dir,
        absolute: false,
        nodir: true
      });
      
      images.push(...files.map(file => ({
        inputPath: path.join(dir, file),
        relativePath: file,
        name: path.basename(file, path.extname(file)),
        ext: path.extname(file)
      })));
    }
  }
  
  return images;
}

/**
 * Get image metadata
 */
async function getImageInfo(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      size: fs.statSync(imagePath).size
    };
  } catch (err) {
    console.error(`Failed to read ${imagePath}: ${err.message}`);
    return null;
  }
}

/**
 * Optimize single image to multiple formats and sizes
 */
async function optimizeImage(image, dryRun = false) {
  const info = await getImageInfo(image.inputPath);
  if (!info) return { success: false, outputs: [] };
  
  const outputs = [];
  const originalSize = info.size;
  let totalSaved = 0;
  
  console.log(`\n📸 Processing: ${image.relativePath}`);
  console.log(`   Original: ${info.width}x${info.height} (${(originalSize / 1024).toFixed(1)}KB)`);
  
  // Generate outputs for each size and format
  for (const [sizeName, maxWidth] of Object.entries(CONFIG.sizes)) {
    // Skip if image is smaller than target size
    if (info.width <= maxWidth && sizeName !== 'large') continue;
    
    const width = Math.min(info.width, maxWidth);
    const height = Math.round((width / info.width) * info.height);
    
    for (const format of CONFIG.formats) {
      const outputName = `${image.name}-${sizeName}.${format}`;
      const outputPath = path.join(CONFIG.outputDir, outputName);
      
      if (!dryRun) {
        // Ensure output directory exists
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
        
        // Optimize and convert
        await sharp(image.inputPath)
          .resize(width, height, {
            fit: 'inside',
            withoutEnlargement: true
          })
          [format]({ quality: CONFIG.quality[format] })
          .toFile(outputPath);
        
        const outputSize = fs.statSync(outputPath).size;
        const saved = originalSize - outputSize;
        totalSaved += saved;
        
        outputs.push({
          path: outputPath,
          name: outputName,
          size: outputSize,
          width,
          height,
          format,
          saved
        });
        
        console.log(`   ✓ ${sizeName}/${format}: ${width}x${height} (${(outputSize / 1024).toFixed(1)}KB, saved ${(saved / 1024).toFixed(1)}KB)`);
      } else {
        console.log(`   [DRY] Would create: ${sizeName}/${format} ${width}x${height}`);
        outputs.push({ path: outputPath, name: outputName, format, width, height });
      }
    }
  }
  
  if (!dryRun && outputs.length > 0) {
    console.log(`   💾 Total saved: ${(totalSaved / 1024).toFixed(1)}KB (${((totalSaved / originalSize) * 100).toFixed(1)}%)`);
  }
  
  return { success: true, outputs, originalSize, totalSaved };
}

/**
 * Generate picture element markup example
 */
function generatePictureMarkup(image, outputs) {
  const sizes = {};
  outputs.forEach(output => {
    const sizeKey = output.name.match(/-(small|medium|large)\./)?.[1] || 'large';
    if (!sizes[sizeKey]) sizes[sizeKey] = {};
    sizes[sizeKey][output.format] = output.name;
  });
  
  let markup = `<picture>\n`;
  
  // Add AVIF sources (best compression)
  if (sizes.large?.avif) {
    markup += `  <source\n`;
    markup += `    type="image/avif"\n`;
    markup += `    srcset="\n`;
    if (sizes.small?.avif) markup += `      /assets/optimized/${sizes.small.avif} 640w,\n`;
    if (sizes.medium?.avif) markup += `      /assets/optimized/${sizes.medium.avif} 1024w,\n`;
    markup += `      /assets/optimized/${sizes.large.avif} 1920w\n`;
    markup += `    "\n`;
    markup += `    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"\n`;
    markup += `  />\n`;
  }
  
  // Add WebP sources (good compression, wide support)
  if (sizes.large?.webp) {
    markup += `  <source\n`;
    markup += `    type="image/webp"\n`;
    markup += `    srcset="\n`;
    if (sizes.small?.webp) markup += `      /assets/optimized/${sizes.small.webp} 640w,\n`;
    if (sizes.medium?.webp) markup += `      /assets/optimized/${sizes.medium.webp} 1024w,\n`;
    markup += `      /assets/optimized/${sizes.large.webp} 1920w\n`;
    markup += `    "\n`;
    markup += `    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"\n`;
    markup += `  />\n`;
  }
  
  // Fallback img (original)
  markup += `  <img\n`;
  markup += `    src="/assets/${image.relativePath}"\n`;
  markup += `    alt="Description here"\n`;
  markup += `    loading="lazy"\n`;
  markup += `    decoding="async"\n`;
  markup += `    width="${outputs[0]?.width || 1920}"\n`;
  markup += `    height="${outputs[0]?.height || 1080}"\n`;
  markup += `  />\n`;
  markup += `</picture>`;
  
  return markup;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Image Optimization Script\n');
  
  if (DRY_RUN) {
    console.log('⚠️  DRY RUN MODE - No files will be written\n');
  }
  
  // Find all images
  console.log('🔍 Searching for images...');
  const images = await findImages();
  
  if (images.length === 0) {
    console.log('❌ No images found');
    return;
  }
  
  console.log(`✓ Found ${images.length} image(s)\n`);
  
  // Process each image
  const results = [];
  let totalOriginalSize = 0;
  let totalSaved = 0;
  
  for (const image of images) {
    const result = await optimizeImage(image, DRY_RUN);
    if (result.success) {
      results.push({ image, ...result });
      totalOriginalSize += result.originalSize || 0;
      totalSaved += result.totalSaved || 0;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Images processed: ${results.length}`);
  console.log(`Files created: ${results.reduce((sum, r) => sum + r.outputs.length, 0)}`);
  
  if (!DRY_RUN && totalOriginalSize > 0) {
    console.log(`Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
    console.log(`Total saved: ${(totalSaved / 1024).toFixed(1)}KB (${((totalSaved / totalOriginalSize) * 100).toFixed(1)}%)`);
  }
  
  // Generate example markup
  if (results.length > 0 && results[0].outputs.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('📝 EXAMPLE PICTURE MARKUP');
    console.log('='.repeat(60));
    console.log(generatePictureMarkup(results[0].image, results[0].outputs));
  }
  
  // Instructions
  console.log('\n' + '='.repeat(60));
  console.log('📖 NEXT STEPS');
  console.log('='.repeat(60));
  console.log('1. Review optimized images in dist/assets/optimized/');
  console.log('2. Update components to use <picture> elements for responsive images');
  console.log('3. Update og:image meta tags to use optimized WebP versions');
  console.log('4. Add to build process: npm run optimize-images (after build)');
  console.log('');
  
  if (DRY_RUN) {
    console.log('💡 Run without --dry-run to actually create optimized images');
  }
}

// Run
main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
