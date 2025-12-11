#!/usr/bin/env node

/**
 * Performance Check Script
 * 
 * Validates Lighthouse performance scores against thresholds.
 * Used in CI to prevent performance regressions.
 * 
 * Usage:
 *   LH_SCORE_PERF=90 LH_SCORE_ACCESS=90 node performance/check-performance.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORT_PATH = path.join(__dirname, 'lighthouse-report.json');

// Default thresholds (can be overridden by environment variables)
const THRESHOLDS = {
  performance: parseInt(process.env.LH_SCORE_PERF || '85', 10),
  accessibility: parseInt(process.env.LH_SCORE_ACCESS || '90', 10),
  bestPractices: parseInt(process.env.LH_SCORE_PRACTICES || '85', 10),
  seo: parseInt(process.env.LH_SCORE_SEO || '90', 10)
};

/**
 * Load Lighthouse report
 */
function loadReport() {
  if (!fs.existsSync(REPORT_PATH)) {
    console.error('❌ Lighthouse report not found at:', REPORT_PATH);
    console.error('   Run "npm run perf:measure" first.');
    process.exit(1);
  }
  
  try {
    const content = fs.readFileSync(REPORT_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('❌ Failed to parse Lighthouse report:', err.message);
    process.exit(1);
  }
}

/**
 * Extract scores from report
 */
function extractScores(report) {
  const categories = report.categories || {};
  
  return {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100)
  };
}

/**
 * Get score emoji
 */
function getScoreEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 50) return '🟡';
  return '🔴';
}

/**
 * Check if score meets threshold
 */
function checkScore(category, score, threshold) {
  const emoji = getScoreEmoji(score);
  const status = score >= threshold ? '✓' : '✗';
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  
  console.log(`${status} ${emoji} ${label}: ${score}/100 (threshold: ${threshold})`);
  
  return score >= threshold;
}

/**
 * Get failing audits
 */
function getFailingAudits(report) {
  const audits = report.audits || {};
  const failing = [];
  
  for (const [key, audit] of Object.entries(audits)) {
    if (audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode !== 'informative') {
      failing.push({
        id: key,
        title: audit.title,
        score: Math.round((audit.score || 0) * 100),
        displayValue: audit.displayValue,
        description: audit.description
      });
    }
  }
  
  // Sort by score (worst first)
  failing.sort((a, b) => a.score - b.score);
  
  return failing.slice(0, 10); // Top 10 failing audits
}

/**
 * Get key metrics
 */
function getMetrics(report) {
  const audits = report.audits || {};
  
  return {
    fcp: audits['first-contentful-paint']?.displayValue,
    lcp: audits['largest-contentful-paint']?.displayValue,
    tbt: audits['total-blocking-time']?.displayValue,
    cls: audits['cumulative-layout-shift']?.displayValue,
    si: audits['speed-index']?.displayValue
  };
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Performance Check\n');
  
  // Load report
  console.log('📊 Loading Lighthouse report...');
  const report = loadReport();
  const scores = extractScores(report);
  const metrics = getMetrics(report);
  
  console.log('✓ Report loaded\n');
  
  // Display scores
  console.log('='.repeat(60));
  console.log('LIGHTHOUSE SCORES');
  console.log('='.repeat(60));
  
  const results = [
    checkScore('performance', scores.performance, THRESHOLDS.performance),
    checkScore('accessibility', scores.accessibility, THRESHOLDS.accessibility),
    checkScore('best practices', scores.bestPractices, THRESHOLDS.bestPractices),
    checkScore('seo', scores.seo, THRESHOLDS.seo)
  ];
  
  // Display metrics
  console.log('\n' + '='.repeat(60));
  console.log('CORE WEB VITALS');
  console.log('='.repeat(60));
  console.log(`First Contentful Paint (FCP): ${metrics.fcp || 'N/A'}`);
  console.log(`Largest Contentful Paint (LCP): ${metrics.lcp || 'N/A'}`);
  console.log(`Total Blocking Time (TBT): ${metrics.tbt || 'N/A'}`);
  console.log(`Cumulative Layout Shift (CLS): ${metrics.cls || 'N/A'}`);
  console.log(`Speed Index (SI): ${metrics.si || 'N/A'}`);
  
  // Show failing audits if any category failed
  const allPassed = results.every(r => r);
  
  if (!allPassed) {
    const failing = getFailingAudits(report);
    
    if (failing.length > 0) {
      console.log('\n' + '='.repeat(60));
      console.log('TOP FAILING AUDITS');
      console.log('='.repeat(60));
      
      failing.forEach((audit, i) => {
        console.log(`\n${i + 1}. ${audit.title}`);
        console.log(`   Score: ${audit.score}/100`);
        if (audit.displayValue) {
          console.log(`   Value: ${audit.displayValue}`);
        }
      });
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('💡 RECOMMENDATIONS');
    console.log('='.repeat(60));
    console.log('• Review failing audits in lighthouse-report.html');
    console.log('• Run npm run optimize-images for image optimization');
    console.log('• Run npm run precompress for better compression');
    console.log('• Check for unused CSS and JavaScript');
    console.log('• Ensure critical resources are preloaded');
    console.log('');
  }
  
  // Summary
  console.log('='.repeat(60));
  if (allPassed) {
    console.log('✅ All performance checks passed!');
  } else {
    console.log('❌ Some performance checks failed.');
    console.log('   Fix the issues above and run again.');
  }
  console.log('='.repeat(60));
  
  // Exit with appropriate code
  process.exit(allPassed ? 0 : 1);
}

// Run
main();
