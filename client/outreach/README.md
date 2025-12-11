# Outreach & UTM Tracking Guide

This guide explains how to use the UTM-tagged links for tracking traffic from backlinks, blog posts, and directory submissions.

---

## 📊 What are UTM Parameters?

UTM (Urchin Tracking Module) parameters are tags added to URLs that help track where website traffic comes from. They appear after the `?` in a URL:

```
https://sanjaycheekati.dev?utm_source=github&utm_medium=repo_readme&utm_campaign=backlink_task5
                            ↑
                            UTM parameters start here
```

### UTM Parameter Breakdown

| Parameter | Purpose | Example Values |
|-----------|---------|----------------|
| `utm_source` | Where traffic originates | `github`, `reddit`, `hashnode` |
| `utm_medium` | Type of link | `blog_post`, `social`, `repo_readme` |
| `utm_campaign` | Specific campaign identifier | `backlink_task5`, `launch_2025` |

---

## 🔗 Using UTM Links from `utm-links.csv`

The `utm-links.csv` file contains pre-generated UTM-tagged URLs for each outreach channel.

### CSV Structure

```csv
channel,url,utm_source,utm_medium,utm_campaign,tagged_url
GitHub Profile,https://sanjaycheekati.dev,github,profile,backlink_task5,https://sanjaycheekati.dev?utm_source=github&utm_medium=profile&utm_campaign=backlink_task5
```

**Columns:**
- `channel` — Human-readable name of the source
- `url` — Base URL without parameters
- `utm_source` — Traffic source identifier
- `utm_medium` — Link type
- `utm_campaign` — Campaign identifier
- `tagged_url` — **Use this URL in your outreach**

---

## 📍 Where to Use UTM Links

### 1. GitHub Repository READMEs

When running the backlink script, it will automatically insert links. For manual edits:

**Use**: `https://sanjaycheekati.dev/#projects?utm_source=github&utm_medium=repo_readme&utm_campaign=backlink_task5`

**Example**:
```markdown
## 🌐 Full Case Study
[View detailed analysis →](https://sanjaycheekati.dev/#projects?utm_source=github&utm_medium=repo_readme&utm_campaign=backlink_task5)
```

### 2. Blog Posts (Hashnode/Dev.to)

Replace canonical and in-text links with UTM-tagged versions.

**Hashnode PureText Post**:
```markdown
**🔗 [Full Case Study →](https://sanjaycheekati.dev/#projects?utm_source=hashnode&utm_medium=blog_post&utm_campaign=backlink_task5)**
```

**Dev.to BERT Post**:
```markdown
**🔗 [Full Technical Analysis →](https://sanjaycheekati.dev/#projects?utm_source=devto&utm_medium=blog_post&utm_campaign=backlink_task5)**
```

### 3. Social Media Posts (Reddit, Hacker News)

**Reddit r/webdev**:
```
Live site: https://sanjaycheekati.dev?utm_source=reddit&utm_medium=social&utm_campaign=backlink_task5
```

**Hacker News**:
```
Case study: https://sanjaycheekati.dev?utm_source=hackernews&utm_medium=social&utm_campaign=backlink_task5
```

### 4. Directory Submissions

**freeCodeCamp Showcase**:
```
Live Demo: https://sanjaycheekati.dev?utm_source=freecodecamp&utm_medium=showcase&utm_campaign=backlink_task5
```

**Product Hunt**:
```
Website: https://sanjaycheekati.dev/#projects?utm_source=producthunt&utm_medium=listing&utm_campaign=backlink_task5
```

### 5. GitHub Profile and LinkedIn

**GitHub Profile Bio**:
```
🌐 Portfolio: https://sanjaycheekati.dev?utm_source=github&utm_medium=profile&utm_campaign=backlink_task5
```

**LinkedIn About Section**:
```
Portfolio: https://sanjaycheekati.dev?utm_source=linkedin&utm_medium=profile&utm_campaign=backlink_task5
```

---

## 📈 Tracking UTM Data

### Using Vercel Analytics (Current Setup)

If you have Vercel Analytics enabled:
1. Go to Vercel Dashboard → Your Project → Analytics
2. Click "Audience" → "Sources"
3. Filter by UTM parameters to see traffic breakdown

### Using Google Analytics (Recommended for Advanced Tracking)

**Setup Steps**:

1. **Add Google Analytics to your site**:
```html
<!-- Add to client/index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

2. **View UTM reports**:
   - Login to Google Analytics
   - Go to Reports → Acquisition → Traffic Acquisition
   - Click "Add comparison" → Select `utm_source`, `utm_medium`, or `utm_campaign`

3. **Custom dashboard** (recommended):
   - Create a custom dashboard with widgets for:
     - Sessions by `utm_source`
     - Conversions by `utm_campaign`
     - Bounce rate by `utm_medium`

---

## 🎯 Example Workflow

### Publishing a Hashnode Post

1. Open `utm-links.csv` and find:
   ```csv
   Hashnode PureText,https://sanjaycheekati.dev/#projects,hashnode,blog_post,backlink_task5,https://sanjaycheekati.dev/#projects?utm_source=hashnode&utm_medium=blog_post&utm_campaign=backlink_task5
   ```

2. Copy the `tagged_url` value:
   ```
   https://sanjaycheekati.dev/#projects?utm_source=hashnode&utm_medium=blog_post&utm_campaign=backlink_task5
   ```

3. Replace links in `outreach/hashnode-posts/puretext-hashnode.md`:
   ```markdown
   **🔗 [Full Case Study & Live Demo →](https://sanjaycheekati.dev/#projects?utm_source=hashnode&utm_medium=blog_post&utm_campaign=backlink_task5)**
   ```

4. Publish the post on Hashnode.

5. After 1 week, check analytics to see traffic from `utm_source=hashnode`.

---

## 📋 Quick Reference: UTM Combinations

| Platform | utm_source | utm_medium | utm_campaign |
|----------|-----------|-----------|--------------|
| GitHub README | `github` | `repo_readme` | `backlink_task5` |
| GitHub Profile | `github` | `profile` | `backlink_task5` |
| Hashnode | `hashnode` | `blog_post` | `backlink_task5` |
| Dev.to | `devto` | `blog_post` | `backlink_task5` |
| Reddit | `reddit` | `social` | `backlink_task5` |
| Hacker News | `hackernews` | `social` | `backlink_task5` |
| Product Hunt | `producthunt` | `listing` | `backlink_task5` |
| Awesome Lists | `github` | `awesome_list` | `backlink_task5` |

---

## ⚠️ Best Practices

### Do:
✅ Always use UTM links for external outreach  
✅ Keep campaign names consistent (`backlink_task5`)  
✅ Test links before posting (click and verify they work)  
✅ Document where each UTM link is used (in a spreadsheet)  

### Don't:
❌ Use UTM links for internal navigation (messes up analytics)  
❌ Change UTM parameters after links are published  
❌ Use spaces in UTM values (use underscores or hyphens)  
❌ Make UTM values too long (keep under 50 characters)  

---

## 🔍 Analyzing Results

After 2-4 weeks of outreach, analyze which channels drive the most traffic:

### High-Performing Channels
- Increase effort here
- Create more content for these platforms
- Engage with communities actively

### Low-Performing Channels
- Try different messaging
- Post at different times
- Re-evaluate if the audience is right for your portfolio

### Example Analysis (Hypothetical)

| Channel | Sessions | Bounce Rate | Avg. Session Duration |
|---------|----------|-------------|----------------------|
| GitHub README | 450 | 35% | 2:45 |
| Hashnode | 320 | 42% | 3:20 |
| Reddit | 180 | 68% | 0:45 |
| Hacker News | 890 | 28% | 4:10 |

**Insight**: Hacker News drives highest quality traffic (low bounce, high duration). Focus more content there.

---

## 📞 Questions?

If analytics show unexpected results:
1. Verify UTM links are correctly formatted
2. Check that analytics is properly installed
3. Allow 24-48 hours for data to populate
4. Use Google's Campaign URL Builder to validate: https://ga-dev-tools.google/campaign-url-builder/

---

## 🚀 Next Steps

1. Review `utm-links.csv` and familiarize yourself with tagged URLs
2. Update blog post drafts with appropriate UTM links
3. Set up Google Analytics (if not already configured)
4. Create a tracking spreadsheet to log where each link is used
5. Schedule weekly check-ins to review traffic data

**Remember**: UTM tracking is only useful if you consistently check the data and adjust your strategy based on insights!
