---
title: "Building a Modern Developer Portfolio: React, SEO, and AI-First Design in 2025"
slug: modern-developer-portfolio-react-seo-ai
tags: webdev, react, seo, portfolio, vite
series: AI Application Development
canonical_url: https://sanjaycheekati.dev
cover_image: ./images/portfolio-cover.png
published: false
---

## TL;DR

Built a **fully SEO-optimized React portfolio** that ranks on Google AND appears in ChatGPT/Perplexity search results. Achieved **98/100 Lighthouse Performance**, implemented AI-first structured data, and automated backlink generation — all while maintaining a beautiful, animated UI with Framer Motion.

**🔗 [Live Site →](https://sanjaycheekati.dev)**

---

## The Problem with Modern Portfolios

Most developer portfolios fail at:
1. **SEO** — SPAs (Single Page Apps) aren't crawler-friendly
2. **Performance** — Heavy frameworks kill load times
3. **Discoverability** — AI search engines can't index them
4. **Maintenance** — Manual content updates are tedious

I wanted a portfolio that:
- ✅ Loads in <1 second
- ✅ Ranks on Google for relevant keywords
- ✅ Appears in ChatGPT/Perplexity responses
- ✅ Updates automatically via GitHub Actions

---

## Tech Stack

### Core Framework
- **React 18** with Vite 5 for instant HMR
- **Framer Motion 12** for smooth animations
- **NextUI 2** for beautiful, accessible components
- **Tailwind CSS 3** for rapid styling

### SEO Infrastructure
- **react-helmet-async** for dynamic meta tags
- **JSON-LD Schema.org** structured data
- **Static site generation** for crawler-friendly pages
- **AI-index.json** for LLM ingestion

### Deployment
- **Vercel** with edge caching
- **GitHub Actions** for automated builds
- **Vercel Analytics** for privacy-respecting tracking

---

## Architecture Decisions

### 1. Hybrid Rendering Strategy

**Challenge**: SPAs don't work well with crawlers.

**Solution**: Hybrid approach
- React SPA for interactive user experience
- Static HTML pages generated at build time for crawlers
- Dynamic meta tags via React Helmet for section-specific SEO

```javascript
// Build script generates static pages
// client/scripts/generate-static-pages.js
const pages = [
  { route: '/projects', title: 'Projects — AI, MERN, Web Apps' },
  { route: '/contact', title: 'Contact Sanjay Cheekati' }
];

pages.forEach(page => {
  const staticHTML = baseHTML
    .replace(/<title>.*<\/title>/, `<title>${page.title}</title>`)
    .replace(/content=".*"/, `content="${page.description}"`);
  
  fs.writeFileSync(`dist${page.route}/index.html`, staticHTML);
});
```

### 2. AI-First SEO

**ChatGPT, Perplexity, and Gemini** don't read HTML — they need machine-readable JSON.

**Solution**: Created `ai-index.json` with comprehensive structured data:

```json
{
  "name": "Sanjay Cheekati",
  "role": "Full Stack Developer",
  "skills": ["React", "Node.js", "AI/ML", "MongoDB", ...],
  "projects": [
    {
      "name": "PureText",
      "description": "Privacy-first ChatGPT Chrome extension",
      "technologies": ["React", "Node.js", "OpenAI API"],
      "highlights": ["40% faster than ChatGPT", "Zero data collection"],
      "url": "https://sanjaycheekati.dev/#projects"
    }
  ],
  "achievements": [...],
  "contact": {...}
}
```

**Result**: Now when users ask ChatGPT "Who is Sanjay Cheekati?", it can cite my portfolio directly.

### 3. Dynamic Meta Tags Per Section

**Problem**: SPA has one set of meta tags for all routes.

**Solution**: React Helmet + Intersection Observer

```jsx
// Projects.jsx
import { Helmet } from 'react-helmet-async';

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.title = 'Projects — Sanjay Cheekati';
      }
    });
    observer.observe(sectionRef.current);
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects — AI, MERN, Web Apps by Sanjay Cheekati</title>
        <meta name="description" content="Featured projects..." />
        <meta property="og:title" content="Projects by Sanjay Cheekati" />
        <meta property="og:url" content="https://sanjaycheekati.dev/#projects" />
      </Helmet>
      {/* Component content */}
    </>
  );
}
```

**Result**: Each section has unique meta tags when shared on social media.

---

## Performance Optimization

### Lighthouse Scores

| Metric | Score | Details |
|--------|-------|---------|
| Performance | **98/100** | FCP: 0.8s, LCP: 1.2s |
| Accessibility | **100/100** | Full ARIA support |
| Best Practices | **100/100** | HTTPS, no console errors |
| SEO | **100/100** | Meta tags, structured data |

### Techniques Used

**1. Code Splitting**
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation': ['framer-motion'],
          'ui': ['@nextui-org/react']
        }
      }
    }
  }
}
```

**2. Image Optimization**
- WebP format with fallbacks
- Lazy loading with `loading="lazy"`
- Responsive images with `srcset`

**3. Font Loading**
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- font-display: swap to prevent FOIT -->
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('/fonts/inter.woff2') format('woff2');
}
```

**4. Critical CSS Inlining**
- Extracted above-the-fold styles
- Inlined in `<head>` to prevent render-blocking

---

## SEO Implementation

### 1. Schema.org JSON-LD

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sanjay Cheekati",
  "jobTitle": "Full Stack Developer",
  "url": "https://sanjaycheekati.dev",
  "sameAs": [
    "https://github.com/sanjaycheekati",
    "https://linkedin.com/in/sanjaycheekati"
  ],
  "knowsAbout": ["React", "Node.js", "AI/ML", "MongoDB", ...],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "GITAM University"
  }
}
</script>
```

### 2. Sitemap Generation

```javascript
// Automated sitemap.xml generation
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/projects', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>https://sanjaycheekati.dev${route.path}</loc>
      <priority>${route.priority}</priority>
      <changefreq>${route.changefreq}</changefreq>
    </url>
  `).join('')}
</urlset>`;
```

### 3. Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://sanjaycheekati.dev/sitemap.xml

# AI Crawlers
User-agent: GPTBot
Allow: /ai-index.json

User-agent: ChatGPT-User
Allow: /ai-index.json
```

---

## Backlink Automation

**Problem**: Manually adding portfolio links to every GitHub repo is tedious.

**Solution**: Automated backlink injection script

```javascript
// scripts/add-backlinks-to-readmes.js
const repos = ['puretext', 'bert-moderation', 'genetic-algorithm'];

repos.forEach(repo => {
  const readme = fs.readFileSync(`../${repo}/README.md`, 'utf-8');
  
  if (!readme.includes('sanjaycheekati.dev')) {
    const backlink = `
## 🌐 Full Case Study
[View detailed analysis on sanjaycheekati.dev →](https://sanjaycheekati.dev/#projects)
    `;
    
    const updated = readme.replace(/^(# .+\n)/, `$1\n${backlink}\n`);
    fs.writeFileSync(`../${repo}/README.md`, updated);
  }
});
```

**Result**: All project repos automatically link back to portfolio.

---

## Results & Impact

✅ **Google ranking**: Page 1 for "Sanjay Cheekati"  
✅ **Lighthouse**: 98/100 performance score  
✅ **Load time**: 0.8s First Contentful Paint  
✅ **AI visibility**: Indexed by ChatGPT and Perplexity  
✅ **Accessibility**: 100/100 score with ARIA compliance  

### Traffic Growth

- **Month 1**: 120 visitors
- **Month 2**: 450 visitors (+275%)
- **Month 3**: 890 visitors (+97%)

**Top Sources**: Google Search (42%), GitHub profile (28%), LinkedIn (18%)

---

## Lessons Learned

1. **SPAs need SEO workarounds** — Static generation + dynamic meta tags is the sweet spot
2. **AI search is the future** — JSON-LD and ai-index.json are now essential
3. **Performance = SEO ranking** — Google rewards fast sites
4. **Automate everything** — Scripts for sitemaps, backlinks, and builds save hours

---

## Open Source & Next Steps

This portfolio is **100% open source**. Feel free to fork and adapt:

**🔗 [GitHub Repository →](https://github.com/sanjaycheekati/portfolio)**

### Planned Improvements
- [ ] MDX blog integration with automated cross-posting
- [ ] GitHub Actions for automated content updates
- [ ] Dark mode with system preference detection
- [ ] Multi-language support (i18n)

---

## Want to Build Your Own?

**🔗 [View Full Source Code & Documentation →](https://sanjaycheekati.dev/#projects)**

Check out the complete implementation, including:
- Build scripts and configuration
- SEO utilities and helpers
- Component architecture
- Deployment guides

---

## About the Author

**Sanjay Cheekati** is a Full Stack Developer specializing in MERN stack and AI/ML applications. Passionate about building fast, accessible, SEO-optimized web applications. Currently pursuing B.Tech at GITAM University (CGPA: 9.08/10).

🔗 [Portfolio](https://sanjaycheekati.dev) • [GitHub](https://github.com/sanjaycheekati) • [LinkedIn](https://linkedin.com/in/sanjaycheekati)
