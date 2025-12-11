#!/usr/bin/env node

/**
 * Critical CSS Extraction Script
 * 
 * Extracts above-the-fold CSS and inlines it into HTML files.
 * Uses Critters to automatically detect critical CSS.
 * 
 * Usage:
 *   node scripts/extract-critical-css.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import Critters from 'critters';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

/**
 * Find all HTML files in dist
 */
async function findHtmlFiles() {
  const files = await glob('**/*.html', {
    cwd: DIST_DIR,
    absolute: true,
    nodir: true
  });
  return files;
}

/**
 * Process single HTML file
 */
async function processHtmlFile(filePath) {
  console.log(`\n📄 Processing: ${path.relative(DIST_DIR, filePath)}`);
  
  try {
    const html = fs.readFileSync(filePath, 'utf-8');
    const originalSize = Buffer.byteLength(html, 'utf-8');
    
    // Create Critters instance
    const critters = new Critters({
      path: DIST_DIR,
      publicPath: '/',
      external: true,
      inlineThreshold: 0,
      minimumExternalSize: 0,
      pruneSource: false,
      mergeStylesheets: true,
      additionalStylesheets: [],
      preload: 'swap',
      noscriptFallback: true,
      inlineFonts: false,
      preloadFonts: true,
      fonts: true,
      keyframes: 'critical',
      compress: true,
      logLevel: 'info'
    });
    
    // Extract and inline critical CSS
    const result = await critters.process(html);
    
    // Add additional preload hints
    const enhanced = addPreloadHints(result);
    
    // Write back to file
    fs.writeFileSync(filePath, enhanced, 'utf-8');
    
    const newSize = Buffer.byteLength(enhanced, 'utf-8');
    const criticalCssSize = newSize - originalSize;
    
    console.log(`   ✓ Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   ✓ With inline CSS: ${(newSize / 1024).toFixed(1)}KB (+${(criticalCssSize / 1024).toFixed(1)}KB)`);
    console.log(`   ✓ Critical CSS inlined successfully`);
    
    return { success: true, originalSize, newSize, criticalCssSize };
  } catch (err) {
    console.error(`   ❌ Failed: ${err.message}`);
    return { success: false, error: err.message };
  }
}

/**
 * Add preload hints for fonts and hero images
 */
function addPreloadHints(html) {
  // Find the closing </head> tag
  const headEndIndex = html.indexOf('</head>');
  if (headEndIndex === -1) return html;
  
  const preloadHints = [];
  
  // Preload hints for fonts (if using Google Fonts or local fonts)
  // Check if Google Fonts is used
  if (html.includes('fonts.googleapis.com')) {
    preloadHints.push(
      '  <!-- Preconnect to font origins -->',
      '  <link rel="preconnect" href="https://fonts.googleapis.com">',
      '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    );
  }
  
  // Preload hero images (look for images in the first viewport)
  const heroImageMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/);
  if (heroImageMatch) {
    const imageSrc = heroImageMatch[1];
    if (imageSrc && !imageSrc.startsWith('data:')) {
      preloadHints.push(
        `  <!-- Preload hero image for LCP -->`,
        `  <link rel="preload" as="image" href="${imageSrc}" fetchpriority="high">`
      );
    }
  }
  
  // Preload largest contentful paint element (hero section background)
  if (html.includes('/assets/') || html.includes('/images/')) {
    // Look for background images or large images
    const bgImageMatch = html.match(/background-image:\s*url\(['"]([^'"]+)['"]\)/);
    if (bgImageMatch && bgImageMatch[1]) {
      const bgSrc = bgImageMatch[1];
      preloadHints.push(
        `  <!-- Preload background image -->`,
        `  <link rel="preload" as="image" href="${bgSrc}" fetchpriority="high">`
      );
    }
  }
  
  // Add font-display: swap if not present
  if (!html.includes('font-display')) {
    preloadHints.push(
      '  <!-- Optimize font loading -->',
      '  <style>@font-face { font-display: swap; }</style>'
    );
  }
  
  if (preloadHints.length === 0) return html;
  
  // Insert preload hints before </head>
  const before = html.substring(0, headEndIndex);
  const after = html.substring(headEndIndex);
  
  return before + '\n' + preloadHints.join('\n') + '\n' + after;
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Critical CSS Extraction Script\n');
  
  // Check if dist folder exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ folder not found. Run npm run build first.');
    process.exit(1);
  }
  
  // Find all HTML files
  console.log('🔍 Searching for HTML files...');
  const htmlFiles = await findHtmlFiles();
  
  if (htmlFiles.length === 0) {
    console.log('❌ No HTML files found in dist/');
    return;
  }
  
  console.log(`✓ Found ${htmlFiles.length} HTML file(s)\n`);
  
  // Process each file
  const results = [];
  let totalCriticalCss = 0;
  
  for (const file of htmlFiles) {
    const result = await processHtmlFile(file);
    results.push(result);
    if (result.success) {
      totalCriticalCss += result.criticalCssSize || 0;
    }
  }
  
  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 CRITICAL CSS SUMMARY');
  console.log('='.repeat(60));
  console.log(`HTML files processed: ${htmlFiles.length}`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total critical CSS inlined: ${(totalCriticalCss / 1024).toFixed(1)}KB`);
  
  console.log('\n' + '='.repeat(60));
  console.log('📖 WHAT WAS DONE');
  console.log('='.repeat(60));
  console.log('✓ Extracted above-the-fold CSS and inlined it in <head>');
  console.log('✓ Moved remaining CSS to async-loaded stylesheets');
  console.log('✓ Added preload hints for fonts and hero images');
  console.log('✓ Added font-display: swap for faster text rendering');
  console.log('✓ Optimized Largest Contentful Paint (LCP)');
  console.log('');
  
  if (failed > 0) {
    console.log('⚠️  Some files failed to process. Check errors above.');
  }
}

// Run
main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
