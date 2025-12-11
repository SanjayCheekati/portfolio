#!/usr/bin/env node

/**
 * Service Worker Build Script
 * 
 * Uses workbox-build to generate service worker with precache manifest.
 * Run as part of postbuild to inject asset list into sw.js
 * 
 * Usage:
 *   node scripts/generate-sw.js
 */

import { generateSW } from 'workbox-build';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

async function main() {
  console.log('🔧 Generating Service Worker...\n');
  
  try {
    const { count, size, warnings } = await generateSW({
      globDirectory: DIST_DIR,
      globPatterns: [
        '**/*.{html,css,js,json,woff,woff2,ttf,otf,svg,ico,webmanifest}'
      ],
      globIgnores: [
        '**/sw.js',
        '**/workbox-*.js',
        '**/*.map'
      ],
      swDest: path.join(DIST_DIR, 'sw.js'),
      clientsClaim: true,
      skipWaiting: true,
      sourcemap: false,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets'
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365,
              maxEntries: 30
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60
            }
          }
        },
        {
          urlPattern: /^https:\/\/www\.google-analytics\.com/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'google-analytics'
          }
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-responses',
            networkTimeoutSeconds: 10,
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 5 * 60
            }
          }
        }
      ],
      navigateFallback: '/index.html',
      navigateFallbackDenylist: [/^\/api\//]
    });
    
    console.log('✓ Service Worker generated successfully');
    console.log(`  - Precached ${count} files`);
    console.log(`  - Total size: ${(size / 1024).toFixed(1)}KB`);
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    console.log('\n📖 To enable Service Worker:');
    console.log('  1. Add registration script to index.html');
    console.log('  2. Test offline functionality');
    console.log('  3. Ensure HTTPS in production');
    console.log('');
    
  } catch (err) {
    console.error('❌ Failed to generate service worker:', err);
    process.exit(1);
  }
}

main();
