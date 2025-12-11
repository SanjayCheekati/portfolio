import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const BASE_URL = 'https://sanjaycheekati.dev';
const DRY_RUN = process.argv.includes('--dry-run');

// Project slug mapping
const projectSlugs = {
  'puretext': 'puretext',
  'portfolio': 'portfolio',
  'Sensitive-Content-Moderation-using-BERT': 'bert-content-moderation',
  'K-means_NSGA-II_HHC': 'genetic-algorithm-healthcare'
};

// Backlink snippet template
const getBacklinkSnippet = (projectName, projectSlug) => {
  return `
## 🌐 Full Case Study

**[View detailed project analysis and live demo on sanjaycheekati.dev →](${BASE_URL}/#projects)**

This project is part of my portfolio showcasing production-grade applications. Visit the link above to see:
- 📊 Performance metrics and achievements
- 🎯 Technical architecture deep-dive
- 🚀 Live demo and deployment details
- 💻 Development process and challenges

---
`;
};

// Check if backlink already exists
function hasBacklink(content) {
  return content.includes('sanjaycheekati.dev') || 
         content.includes('Full Case Study') ||
         content.includes('View detailed project analysis');
}

// Find insertion point (after title, before first major section)
function findInsertionPoint(content) {
  const lines = content.split('\n');
  let insertIndex = 0;
  
  // Skip title and badges
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ') || lines[i].startsWith('## ')) {
      insertIndex = i + 1;
      // Skip empty lines after title
      while (insertIndex < lines.length && lines[insertIndex].trim() === '') {
        insertIndex++;
      }
      break;
    }
  }
  
  return insertIndex;
}

// Insert backlink into README
function insertBacklink(content, projectName, projectSlug) {
  const snippet = getBacklinkSnippet(projectName, projectSlug);
  const lines = content.split('\n');
  const insertIndex = findInsertionPoint(content);
  
  lines.splice(insertIndex, 0, snippet);
  return lines.join('\n');
}

// Process a single repository
function processRepo(repoPath, repoName) {
  const readmePath = join(repoPath, 'README.md');
  
  if (!existsSync(readmePath)) {
    console.log(`⚠️  ${repoName}: README.md not found`);
    return { updated: false, reason: 'README not found' };
  }
  
  try {
    const content = readFileSync(readmePath, 'utf-8');
    
    // Check if backlink already exists
    if (hasBacklink(content)) {
      console.log(`✓  ${repoName}: Backlink already exists`);
      return { updated: false, reason: 'Backlink exists' };
    }
    
    // Determine project slug
    const projectSlug = projectSlugs[repoName] || repoName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Insert backlink
    const updatedContent = insertBacklink(content, repoName, projectSlug);
    
    if (DRY_RUN) {
      console.log(`🔍 ${repoName}: Would add backlink (DRY RUN)`);
      console.log(`   Slug: ${projectSlug}`);
      console.log(`   URL: ${BASE_URL}/#projects`);
      return { updated: true, dryRun: true };
    } else {
      writeFileSync(readmePath, updatedContent, 'utf-8');
      console.log(`✅ ${repoName}: Backlink added successfully`);
      return { updated: true, dryRun: false };
    }
  } catch (error) {
    console.error(`❌ ${repoName}: Error - ${error.message}`);
    return { updated: false, reason: error.message };
  }
}

// Main execution
async function main() {
  console.log('🔗 Backlink Injection Script\n');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  console.log(`Base URL: ${BASE_URL}\n`);
  
  // Check if repos config exists
  const reposConfigPath = join(__dirname, '../outreach/repos-to-update.json');
  let repos = [];
  
  if (existsSync(reposConfigPath)) {
    console.log('📋 Loading repos from config file...\n');
    const config = JSON.parse(readFileSync(reposConfigPath, 'utf-8'));
    repos = config.repos || [];
  } else {
    console.log('⚠️  No repos config found. Using example repos...\n');
    // Example repos for demonstration
    repos = [
      { name: 'puretext', path: '../../puretext' },
      { name: 'portfolio', path: '../' },
      { name: 'Sensitive-Content-Moderation-using-BERT', path: '../../Sensitive-Content-Moderation-using-BERT' },
      { name: 'K-means_NSGA-II_HHC', path: '../../K-means_NSGA-II_HHC' }
    ];
  }
  
  // Process each repository
  const results = {
    total: repos.length,
    updated: 0,
    skipped: 0,
    errors: 0
  };
  
  for (const repo of repos) {
    const repoPath = join(__dirname, repo.path);
    const result = processRepo(repoPath, repo.name);
    
    if (result.updated) {
      results.updated++;
    } else if (result.reason === 'Backlink exists') {
      results.skipped++;
    } else {
      results.errors++;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary:');
  console.log('='.repeat(50));
  console.log(`Total repositories: ${results.total}`);
  console.log(`Updated: ${results.updated}`);
  console.log(`Skipped (already has backlink): ${results.skipped}`);
  console.log(`Errors: ${results.errors}`);
  
  if (DRY_RUN) {
    console.log('\n💡 This was a DRY RUN. Run without --dry-run to apply changes.');
  } else {
    console.log('\n✅ Backlinks have been added. Commit and push changes to publish.');
  }
}

main().catch(console.error);
