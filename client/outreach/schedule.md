# 30-Day Outreach Scheduling Plan

This document provides a repeating 30-day cycle for SEO outreach, content publishing, and analytics monitoring. Follow this schedule to maintain consistent visibility and growth.

---

## 📅 Week 1: Content Publishing & High-Priority Submissions

### Day 1-2: Monday-Tuesday
- [ ] **Publish Hashnode Post A** (PureText case study)
  - Copy content from `hashnode-posts/puretext-hashnode.md`
  - Replace all links with UTM-tagged versions from `utm-links.csv`
  - Upload cover image
  - Set tags: `ai`, `chatgpt`, `privacy`, `chrome-extension`, `react`
  - Set canonical URL to portfolio
  - Publish and share on Twitter/LinkedIn

- [ ] **Update GitHub Profile**
  - Add portfolio link to bio with UTM tag: `?utm_source=github&utm_medium=profile&utm_campaign=backlink_task5`
  - Update pinned repositories to highlight featured projects
  - Ensure all repos have updated READMEs with backlink snippets

### Day 3-4: Wednesday-Thursday
- [ ] **Submit PureText to Chrome Web Store** (if applicable)
  - Prepare store listing with screenshots
  - Use UTM-tagged portfolio link in description
  - Submit for review

- [ ] **Submit Portfolio to freeCodeCamp Showcase**
  - Use copy from `directories.md` → freeCodeCamp section
  - Add UTM link: `?utm_source=freecodecamp&utm_medium=showcase&utm_campaign=backlink_task5`
  - Complete submission form

- [ ] **Submit to Made with React**
  - Portfolio URL: https://madewithreact.com/submit
  - Use UTM-tagged link
  - Highlight React 18 + Vite features

### Day 5-7: Friday-Sunday
- [ ] **Check Google Search Console**
  - Review crawl statistics
  - Check for indexing issues
  - Identify pages with errors

- [ ] **Submit Projects Page for Reindexing**
  - Go to Search Console → URL Inspection
  - Enter: `https://sanjaycheekati.dev/#projects`
  - Click "Request Indexing"

- [ ] **Monitor Initial Traffic**
  - Check Google Analytics for Week 1 traffic
  - Review UTM sources (Hashnode, GitHub profile)
  - Document top-performing channels

---

## 📅 Week 2: Blog Publishing & Social Media Outreach

### Day 8-9: Monday-Tuesday
- [ ] **Publish Dev.to Post B** (BERT case study)
  - Copy content from `devto-posts/bert-devto.md`
  - Add UTM-tagged links
  - Use tags: `nlp`, `machinelearning`, `bert`, `python`
  - Cross-post link on LinkedIn and Twitter

- [ ] **Post to Reddit r/webdev**
  - Use submission copy from `directories.md` → Reddit r/webdev
  - Add UTM link: `?utm_source=reddit&utm_medium=social&utm_campaign=backlink_task5`
  - Post between 8-10 AM EST for maximum visibility
  - Engage genuinely in comments

### Day 10-11: Wednesday-Thursday
- [ ] **Prep Next Case Study** (if creating new content)
  - Choose next project to highlight
  - Draft blog post outline
  - Gather performance metrics and screenshots
  - Write code examples and technical details

- [ ] **Update LinkedIn Profile**
  - Add portfolio link to About section with UTM tag
  - Create LinkedIn post showcasing recent project
  - Tag relevant hashtags: #FullStackDev #MERN #AI

### Day 12-14: Friday-Sunday
- [ ] **Check Google Analytics Stats**
  - Review Week 2 traffic sources
  - Compare Hashnode vs Dev.to performance
  - Analyze bounce rate and session duration
  - Identify high-performing content

- [ ] **Respond to Blog Comments**
  - Reply to all Hashnode comments within 24 hours
  - Engage with Dev.to community feedback
  - Thank readers for sharing/liking posts

- [ ] **Monitor GitHub Stars/Forks**
  - Check if repos gained new stars
  - Review fork activity
  - Respond to issues/PRs if any

---

## 📅 Week 3: Directory Submissions & Awesome List PRs

### Day 15-16: Monday-Tuesday
- [ ] **Submit to Awesome React List**
  - Fork repository: https://github.com/enaqx/awesome-react
  - Create branch: `git checkout -b add-sanjaycheekati-portfolio`
  - Add portfolio to appropriate section
  - Use PR template from `directories.md` → Awesome React
  - Submit PR with detailed description

- [ ] **Submit to Awesome Chrome Extensions** (if PureText is ready)
  - Fork: https://github.com/viatsko/awesome-vscode
  - Add PureText with description
  - Submit PR

### Day 17-18: Wednesday-Thursday
- [ ] **Run Backlink Injection Script on Updated Repos**
  - Navigate to `client/` folder
  - Run: `node scripts/add-backlinks-to-readmes.js --dry-run`
  - Review output
  - Run live: `node scripts/add-backlinks-to-readmes.js`
  - Commit and push changes to all repos

- [ ] **Post to Hacker News (Show HN)**
  - Use submission copy from `directories.md` → Hacker News
  - Submit URL: https://news.ycombinator.com/submit
  - Use UTM-tagged link
  - Best time: Sunday evening or Monday morning

### Day 19-21: Friday-Sunday
- [ ] **Publish Hashnode Post C** (Portfolio SEO case study)
  - Copy content from `hashnode-posts/portfolio-seo-hashnode.md`
  - Add UTM links
  - Highlight hybrid rendering and AI-SEO
  - Share on developer communities

- [ ] **Submit to Awesome Portfolios**
  - Fork: https://github.com/iRaul/awesome-portfolios
  - Add portfolio with description
  - Highlight SEO optimization features
  - Submit PR

---

## 📅 Week 4: Analytics Review & Planning

### Day 22-23: Monday-Tuesday
- [ ] **Review Comprehensive Analytics**
  - Google Analytics: Traffic sources, bounce rate, session duration
  - Search Console: Impressions, clicks, CTR, average position
  - Vercel Analytics: Page views, unique visitors
  - UTM Tracking: Which channels drove most traffic

- [ ] **Check Indexing Issues**
  - Search Console → Coverage Report
  - Identify any pages with errors
  - Fix crawl issues if found
  - Resubmit updated sitemap if needed

### Day 24-25: Wednesday-Thursday
- [ ] **Plan Next Content Cluster**
  - Identify underperforming projects that need case studies
  - Research trending topics in MERN/AI/ML space
  - Draft outlines for next 3 blog posts
  - Schedule publishing dates

- [ ] **Update ai-index.json** (if new projects added)
  - Add new project entries
  - Update skills/achievements
  - Redeploy to production
  - Request reindexing in Search Console

### Day 26-28: Friday-Sunday
- [ ] **Product Hunt Launch** (if launching PureText or new project)
  - Use submission copy from `directories.md` → Product Hunt
  - Upload screenshots and demo video
  - Add UTM-tagged links
  - Launch on Tuesday-Thursday for best engagement
  - Engage with comments and questions

- [ ] **Review Awesome List PRs**
  - Check status of submitted PRs
  - Respond to maintainer feedback
  - Make requested changes promptly
  - Thank maintainers for consideration

### Day 29-30: Rest & Retrospective
- [ ] **Week 4 Retrospective**
  - Document what worked well
  - Identify underperforming channels
  - Note lessons learned
  - Adjust strategy for next cycle

- [ ] **Prepare for Next Cycle**
  - Update dashboard with latest stats
  - Create new blog post drafts
  - Research new directories/communities
  - Plan content calendar for next 30 days

---

## 🔄 Repeating Tasks (Throughout the Month)

### Daily
- [ ] Check Google Analytics dashboard (5 minutes)
- [ ] Respond to blog comments/messages
- [ ] Monitor GitHub notifications

### Weekly
- [ ] Review UTM tracking CSV for new traffic patterns
- [ ] Check Search Console for indexing issues
- [ ] Engage with developer communities (Reddit, HN, Twitter)

### Bi-Weekly
- [ ] Update dashboard with latest metrics
- [ ] Review and adjust outreach strategy
- [ ] Test all portfolio links (ensure no 404s)

### Monthly
- [ ] Generate comprehensive analytics report
- [ ] Compare traffic month-over-month
- [ ] Identify top 3 performing channels
- [ ] Plan content for next month

---

## 📊 Success Metrics to Track

### Traffic Metrics
- **Goal**: 550-1,300 visitors/month by Month 3
- **Current Baseline**: Track Week 1 as baseline
- **Growth Target**: 20% month-over-month increase

### Backlink Metrics
- **Goal**: 18-22 high-quality backlinks
- **Current Progress**: 1 (Portfolio README)
- **Target by Month 1**: 10 backlinks

### Content Metrics
- **Blog Posts Published**: 6 total (3 Hashnode + 3 Dev.to)
- **Average Engagement**: Comments, likes, shares
- **Top Performing Post**: Track views and referral traffic

### SEO Metrics
- **Google Ranking**: Track position for "Sanjay Cheekati"
- **Search Impressions**: Monitor weekly growth
- **CTR**: Target 3-5% in Search Console
- **Domain Authority**: Check monthly (Moz, Ahrefs)

---

## ⚠️ Important Reminders

### Ethical Posting
- ✅ Always provide genuine value in submissions
- ✅ Follow platform-specific rules and guidelines
- ✅ Engage authentically with community feedback
- ❌ Never spam or mass-post identical content
- ❌ Don't manipulate voting systems

### UTM Tracking
- Always use UTM-tagged links from `utm-links.csv`
- Test links before posting (click and verify)
- Keep campaign names consistent
- Document where each link is used

### Response Time
- Reply to blog comments within 24 hours
- Respond to PR feedback within 48 hours
- Engage with social media mentions within 12 hours

### Backup Plan
If a submission is rejected or post underperforms:
- Analyze why (content, timing, platform fit)
- Adjust approach for next attempt
- Don't take it personally — iterate and improve
- Focus on channels that are working

---

## 🎯 Monthly Milestones

### Month 1
- [ ] All 6 blog posts published
- [ ] 10+ backlinks created
- [ ] Google Search Console verified
- [ ] Baseline analytics established

### Month 2
- [ ] 15+ backlinks total
- [ ] 500+ monthly visitors
- [ ] 3+ Awesome List acceptances
- [ ] Product Hunt launch (if applicable)

### Month 3
- [ ] 20+ backlinks total
- [ ] 1,000+ monthly visitors
- [ ] Page 1 Google ranking for name
- [ ] 5+ directory listings live

---

## 📞 Questions or Adjustments?

This schedule is a guideline — adjust based on:
- Your availability and time constraints
- Performance data (double down on what works)
- New opportunities (emerging platforms, events)
- Platform-specific timing (Reddit best times, HN patterns)

**Next Steps**:
1. Copy this schedule to a task management tool (Notion, Trello, etc.)
2. Set calendar reminders for daily/weekly tasks
3. Track completion in the dashboard
4. Review and adjust monthly

---

**Remember**: Consistency > Intensity. Small daily actions compound over time. Focus on quality over quantity, and always prioritize genuine community engagement over purely promotional tactics.

**Good luck with your outreach! 🚀**
