---
title: "Building PureText: A Privacy-First ChatGPT Alternative (40% Faster)"
published: false
tags: ai, chatgpt, chrome, react
canonical_url: https://sanjaycheekati.dev/#projects
cover_image: ./images/puretext-cover.png
---

Ever wanted ChatGPT-like AI without data collection or sign-up barriers? I built **PureText**, a Chrome extension that's 40% faster than the official interface with zero tracking.

## The Problem
- ChatGPT requires accounts + logs all conversations
- Heavy web interfaces slow down simple queries
- Privacy concerns around data collection

## Solution: Local-First Architecture

**Tech**: React, Node.js, OpenAI API, Chrome Storage API

**Key Features**:
- ✅ Zero data collection (all storage local)
- ✅ 1.2s first response (vs 2.1s for ChatGPT)
- ✅ 45 MB memory (vs 180 MB ChatGPT web)
- ✅ Encrypted conversation storage

## Technical Highlights

**Challenge 1: CORS Issues**  
Built lightweight proxy server with rate limiting (10 req/min)

**Challenge 2: Session Persistence**  
Used Chrome Storage API with context restoration:
```javascript
const restoreContext = async () => {
  const { conversations } = await chrome.storage.local.get('conversations');
  return conversations.map(conv => ({
    role: conv.role,
    content: conv.content,
    timestamp: conv.timestamp
  }));
};
```

**Challenge 3: API Key Security**  
Encrypted keys using Web Crypto API — never logged or transmitted

## Performance Benchmarks

| Metric | PureText | ChatGPT Web |
|--------|----------|-------------|
| First Response | **1.2s** | 2.1s |
| Page Load | **0.3s** | 4.7s |
| Memory | **45 MB** | 180 MB |

## Impact
- Zero privacy violations
- Featured in privacy-focused dev communities
- Open-source for security audits

**🔗 [Full Case Study →](https://sanjaycheekati.dev/#projects)**

---

**Sanjay Cheekati** • Full Stack Developer  
🔗 [sanjaycheekati.dev](https://sanjaycheekati.dev) • [GitHub](https://github.com/sanjaycheekati)
