#!/usr/bin/env node

/**
 * Precompression Script
 * 
 * Generates Brotli (.br) and Gzip (.gz) compressed versions of assets.
 * This allows servers to serve pre-compressed files for better performance.
 * 
 * Usage:
 *   node scripts/precompress.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import zlib from 'zlib';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Promisify compression functions
const brotliCompress = promisify(zlib.brotliCompress);
const gzipCompress = promisify(zlib.gzip);

// Configuration
const CONFIG = {
  extensions: ['.html', '.css', '.js', '.json', '.xml', '.svg', '.txt', '.md'],
  minSize: 1024, // Only compress files larger than 1KB
  brotliOptions: {
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // Max compression
      [zlib.constants.BROTLI_PARAM_SIZE_HINT]: 0
    }
  },
  gzipOptions: {
    level: 9 // Max compression
  }
};

/**
 * Find all compressible files
 */
async function findCompressibleFiles() {
  const patterns = CONFIG.extensions.map(ext => `**/*${ext}`);
  const files = [];
  
  for (const pattern of patterns) {
    const matches = await glob(pattern, {
      cwd: DIST_DIR,
      absolute: true,
      nodir: true
    });
    files.push(...matches);
  }
  
  // Filter by minimum size
  return files.filter(file => {
    const stats = fs.statSync(file);
    return stats.size >= CONFIG.minSize;
  });
}

/**
 * Compress file with Brotli
 */
async function compressBrotli(filePath) {
  const content = fs.readFileSync(filePath);
  const compressed = await brotliCompress(content, CONFIG.brotliOptions);
  const outputPath = `${filePath}.br`;
  
  fs.writeFileSync(outputPath, compressed);
  
  return {
    originalSize: content.length,
    compressedSize: compressed.length,
    outputPath
  };
}

/**
 * Compress file with Gzip
 */
async function compressGzip(filePath) {
  const content = fs.readFileSync(filePath);
  const compressed = await gzipCompress(content, CONFIG.gzipOptions);
  const outputPath = `${filePath}.gz`;
  
  fs.writeFileSync(outputPath, compressed);
  
  return {
    originalSize: content.length,
    compressedSize: compressed.length,
    outputPath
  };
}

/**
 * Process single file
 */
async function processFile(filePath) {
  const relativePath = path.relative(DIST_DIR, filePath);
  console.log(`\n📦 Compressing: ${relativePath}`);
  
  const originalSize = fs.statSync(filePath).size;
  
  try {
    // Brotli compression
    const brotli = await compressBrotli(filePath);
    const brotliRatio = ((1 - brotli.compressedSize / originalSize) * 100).toFixed(1);
    console.log(`   ✓ Brotli: ${(brotli.compressedSize / 1024).toFixed(1)}KB (-${brotliRatio}%)`);
    
    // Gzip compression
    const gzip = await compressGzip(filePath);
    const gzipRatio = ((1 - gzip.compressedSize / originalSize) * 100).toFixed(1);
    console.log(`   ✓ Gzip: ${(gzip.compressedSize / 1024).toFixed(1)}KB (-${gzipRatio}%)`);
    
    return {
      success: true,
      originalSize,
      brotliSize: brotli.compressedSize,
      gzipSize: gzip.compressedSize
    };
  } catch (err) {
    console.error(`   ❌ Failed: ${err.message}`);
    return { success: false, error: err.message };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🗜️  Precompression Script\n');
  
  // Check if dist folder exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ folder not found. Run npm run build first.');
    process.exit(1);
  }
  
  // Find all compressible files
  console.log('🔍 Searching for compressible files...');
  const files = await findCompressibleFiles();
  
  if (files.length === 0) {
    console.log('❌ No files found to compress');
    return;
  }
  
  console.log(`✓ Found ${files.length} file(s) to compress\n`);
  
  // Process each file
  const results = [];
  let totalOriginal = 0;
  let totalBrotli = 0;
  let totalGzip = 0;
  
  for (const file of files) {
    const result = await processFile(file);
    results.push(result);
    
    if (result.success) {
      totalOriginal += result.originalSize;
      totalBrotli += result.brotliSize;
      totalGzip += result.gzipSize;
    }
  }
  
  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files processed: ${files.length}`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nTotal original size: ${(totalOriginal / 1024).toFixed(1)}KB`);
  console.log(`Total Brotli size: ${(totalBrotli / 1024).toFixed(1)}KB (-${((1 - totalBrotli / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`Total Gzip size: ${(totalGzip / 1024).toFixed(1)}KB (-${((1 - totalGzip / totalOriginal) * 100).toFixed(1)}%)`);
  
  console.log('\n' + '='.repeat(60));
  console.log('📖 SERVER CONFIGURATION');
  console.log('='.repeat(60));
  console.log('To use precompressed files, configure your server:');
  console.log('');
  console.log('Vercel:');
  console.log('  - Automatically serves .br and .gz files if present');
  console.log('  - No additional configuration needed');
  console.log('');
  console.log('Netlify:');
  console.log('  - Add to netlify.toml:');
  console.log('    [[plugins]]');
  console.log('    package = "@netlify/plugin-brotli"');
  console.log('');
  console.log('Nginx:');
  console.log('  - Enable gzip_static and brotli_static modules');
  console.log('  - Server will automatically use .br/.gz files');
  console.log('');
  console.log('Apache:');
  console.log('  - Use mod_rewrite to serve precompressed files');
  console.log('  - Or use mod_brotli with BrotliCompressionLevel 11');
  console.log('');
  
  console.log('✓ Precompression complete!');
}

// Run
main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
