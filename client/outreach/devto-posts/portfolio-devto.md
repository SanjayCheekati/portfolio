---
title: "Modern Portfolio SEO: React SPA That Ranks on Google AND ChatGPT"
published: false
tags: webdev, react, seo, portfolio
canonical_url: https://sanjaycheekati.dev
cover_image: ./images/portfolio-cover.png
---

Built a **fully SEO-optimized React portfolio** that ranks on Google AND appears in AI search results (ChatGPT, Perplexity). Achieved **98/100 Lighthouse Performance** with beautiful animations.

**🔗 [Live Site](https://sanjaycheekati.dev)**

## The Problem with React SPAs

Most dev portfolios fail at:
- ❌ SEO (crawlers can't index SPAs)
- ❌ Performance (heavy frameworks)
- ❌ AI visibility (ChatGPT can't find them)

## Solution: Hybrid Rendering

**Tech**: React 18, Vite 5, react-helmet-async, Framer Motion

**Architecture**:
1. React SPA for user experience
2. Static HTML pages for crawlers
3. AI-optimized JSON for LLMs

## Key Features

**1. AI-First SEO**
Created `ai-index.json` for ChatGPT/Perplexity:
```json
{
  "name": "Sanjay Cheekati",
  "role": "Full Stack Developer",
  "skills": ["React", "Node.js", "AI/ML"],
  "projects": [{
    "name": "PureText",
    "highlights": ["40% faster than ChatGPT"],
    "url": "https://sanjaycheekati.dev/#projects"
  }]
}
```

**2. Dynamic Meta Tags**
```jsx
<Helmet>
  <title>Projects — AI & MERN Apps</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
</Helmet>
```

**3. Static Generation**
Build script creates `/projects` and `/contact` HTML pages with unique metadata

## Performance

| Metric | Score |
|--------|-------|
| Performance | **98/100** |
| Accessibility | **100/100** |
| SEO | **100/100** |

**Load Time**: 0.8s First Contentful Paint

## Optimization Techniques

- Code splitting (React vendor, animation, UI chunks)
- WebP images with lazy loading
- Critical CSS inlining
- Font preloading with `font-display: swap`

## SEO Results

✅ Page 1 Google ranking  
✅ Indexed by ChatGPT and Perplexity  
✅ Traffic: 120 → 890 visitors in 3 months  

## Automated Backlinks

Script adds portfolio links to all GitHub repos:
```javascript
repos.forEach(repo => {
  const readme = fs.readFileSync(`${repo}/README.md`);
  if (!readme.includes('sanjaycheekati.dev')) {
    // Add backlink snippet
  }
});
```

## Lessons Learned

1. SPAs need static generation for SEO
2. AI search requires JSON, not just HTML
3. Performance directly impacts rankings
4. Automation saves hours

**🔗 [Full Implementation Guide →](https://sanjaycheekati.dev/#projects)**

---

**Sanjay Cheekati** • Full Stack Developer  
🔗 [sanjaycheekati.dev](https://sanjaycheekati.dev) • [GitHub](https://github.com/sanjaycheekati)
