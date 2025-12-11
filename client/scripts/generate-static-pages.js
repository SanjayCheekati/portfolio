import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://sanjaycheekati.dev';

// Page-specific metadata
const pages = {
  projects: {
    title: 'Projects — AI, MERN, and Web Apps by Sanjay Cheekati',
    description: 'Explore full-stack and AI-driven projects built by Sanjay Cheekati, including PureText, NLP models, and web applications.',
    canonical: `${BASE_URL}/projects`,
    fallbackContent: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 1200px; margin: 50px auto; padding: 20px;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">Projects by Sanjay Cheekati</h1>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 2rem;">AI, MERN & Web Applications</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 10px;">PureText</h3>
            <p style="color: #666;">Advanced text processing tool with real-time transformations</p>
          </div>
          <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 10px;">BERT Content Moderation</h3>
            <p style="color: #666;">NLP system for sensitive content detection with 94% accuracy</p>
          </div>
          <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 10px;">Genetic Algorithm Clustering</h3>
            <p style="color: #666;">Multi-objective optimization for healthcare resource allocation</p>
          </div>
        </div>
      </div>
    `
  },
  contact: {
    title: 'Contact — Hire or Collaborate with Sanjay Cheekati',
    description: 'Reach out for hiring, collaboration, or project opportunities with Full Stack Developer Sanjay Cheekati.',
    canonical: `${BASE_URL}/contact`,
    fallbackContent: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; text-align: center;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">Contact Sanjay Cheekati</h1>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 2rem;">Full Stack Developer — Available for Opportunities</p>
        <div style="background: #f5f5f5; padding: 30px; border-radius: 10px; margin-top: 30px;">
          <p style="font-size: 1.1rem; margin-bottom: 15px;"><strong>Email:</strong> sanjaycheekati83@gmail.com</p>
          <p style="font-size: 1.1rem; margin-bottom: 15px;"><strong>Location:</strong> Hyderabad, Telangana, India</p>
          <p style="font-size: 1.1rem; margin-bottom: 15px;"><strong>GitHub:</strong> <a href="https://github.com/SanjayCheekati" style="color: #0066cc;">@SanjayCheekati</a></p>
          <p style="font-size: 1.1rem;"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sanjaycheekati" style="color: #0066cc;">linkedin.com/in/sanjaycheekati</a></p>
        </div>
      </div>
    `
  }
};

function replaceMetaTags(html, page, pageData) {
  let updatedHtml = html;

  // Replace title
  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${pageData.title}</title>`
  );

  // Replace meta title
  updatedHtml = updatedHtml.replace(
    /<meta name="title" content=".*?" \/>/,
    `<meta name="title" content="${pageData.title}" />`
  );

  // Replace meta description
  updatedHtml = updatedHtml.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${pageData.description}" />`
  );

  // Replace canonical URL
  updatedHtml = updatedHtml.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${pageData.canonical}" />`
  );

  // Replace OG title
  updatedHtml = updatedHtml.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${pageData.title}" />`
  );

  // Replace OG description
  updatedHtml = updatedHtml.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${pageData.description}" />`
  );

  // Replace OG URL
  updatedHtml = updatedHtml.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${pageData.canonical}" />`
  );

  // Replace Twitter title
  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${pageData.title}" />`
  );

  // Replace Twitter description
  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${pageData.description}" />`
  );

  // Add fallback content for crawlers
  updatedHtml = updatedHtml.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${pageData.fallbackContent}</div>`
  );

  return updatedHtml;
}

function generateStaticPages() {
  try {
    // Read the main index.html
    const indexPath = join(__dirname, '../dist/index.html');
    const indexHtml = readFileSync(indexPath, 'utf-8');

    console.log('📄 Generating static HTML pages for SEO...\n');

    // Generate each page
    Object.entries(pages).forEach(([page, pageData]) => {
      const pageDir = join(__dirname, `../dist/${page}`);
      const pagePath = join(pageDir, 'index.html');

      // Create directory if it doesn't exist
      mkdirSync(pageDir, { recursive: true });

      // Generate HTML with replaced meta tags
      const pageHtml = replaceMetaTags(indexHtml, page, pageData);

      // Write the file
      writeFileSync(pagePath, pageHtml, 'utf-8');

      console.log(`✅ Generated: /dist/${page}/index.html`);
      console.log(`   Title: ${pageData.title}`);
      console.log(`   Canonical: ${pageData.canonical}\n`);
    });

    console.log('🎉 All static pages generated successfully!');
    console.log('\nGenerated pages:');
    console.log('  - /dist/index.html (home)');
    console.log('  - /dist/projects/index.html');
    console.log('  - /dist/contact/index.html');
    console.log('\n✅ Google and other search engines can now index individual pages!\n');

  } catch (error) {
    console.error('❌ Error generating static pages:', error);
    process.exit(1);
  }
}

generateStaticPages();
