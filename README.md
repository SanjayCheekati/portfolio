# 🚀 Modern Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12-FF0055?style=for-the-badge&logo=framer)

**A stunning, production-ready portfolio showcasing full-stack development skills with modern animations and responsive design**

[🌐 Live Demo](https://sanjaycheekati.dev) • [📧 Contact](mailto:sanjaycheekati83@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/sanjaycheekati)

</div>

---

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** with backdrop blur effects
- **Smooth Animations** using Framer Motion (60 FPS)
- **3D Particle Effects** with React Three Fiber
- **Responsive Design** - Mobile-first approach
- **Dark Theme** with cyan accent colors
- **Interactive Tilt Cards** with 3D effects

### 🛠️ **Technical Highlights**
- ⚡ **Lightning Fast** - Vite build system with HMR
- 🎭 **Advanced Animations** - Framer Motion transitions
- 🎯 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🚀 **Production Ready** - Optimized builds with lazy loading

### 📦 **Key Sections**
- 🏠 Hero section with animated introduction
- 👤 Profile summary with social links (GitHub, LinkedIn, LeetCode, Email, Instagram)
- 💻 Skills showcase with horizontal chip layout (5 categories)
- 📊 Professional skills with animated icons
- 🚀 Project portfolio with filtering (ML, Web, Live)
- 📞 Contact information with direct links
- 🎓 Education timeline
- 🏆 Achievements & certifications

---

## 🎥 Preview

<div align="center">

### Desktop View
![Desktop Preview](./preview-desktop.png)

### Mobile View
<img src="./preview-mobile.png" width="300" alt="Mobile Preview">

</div>

---

## 🏗️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| ⚛️ React | 18.2.0 | UI Framework |
| ⚡ Vite | 5.2.0 | Build Tool & Dev Server |
| 🎨 Tailwind CSS | 3.3.2 | Styling |
| 🎭 Framer Motion | 10.12.16 | Animations |
| 🎯 React Icons | 5.2.1 | Icon Library |
| 🌊 GSAP | 3.13.0 | Advanced Animations |
| 🎲 Three.js | 0.161.0 | 3D Graphics |
| 🔄 React Three Fiber | 8.0.27 | React 3D Renderer |
| 🎪 React Parallax Tilt | 1.7.310 | 3D Tilt Effects |
| ✨ tsParticles | 3.0.0 | Particle Effects |

### Development Tools
- 📦 npm - Package Manager
- 🔧 ESLint - Code Linting
- 💅 PostCSS - CSS Processing
- 🔄 Git - Version Control

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed
- Git installed
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanjayCheekati/portfolio.git
   cd portfolio/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist` folder, ready for deployment!

---

## 📁 Project Structure

```
client/
├── public/               # Static assets
│   ├── _redirects       # Netlify routing config
│   └── RESUME_INSTRUCTIONS.md
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── ProfileSummary.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── Scene3D.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillsRadar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Timeline.jsx
│   ├── data/           # Static data
│   │   ├── projects.js # Project information
│   │   └── skills.js   # Skills & tech stack
│   ├── hooks/          # Custom React hooks
│   │   └── useTheme.js
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template with meta tags
├── package.json        # Dependencies & scripts
├── tailwind.config.cjs # Tailwind configuration
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
└── postcss.config.cjs  # PostCSS configuration
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **Deploy** 🎉
   - Vercel will auto-deploy on every push to main branch

### Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure:
     - **Base directory**: `client`
     - **Build command**: `npm run build`
     - **Publish directory**: `client/dist`

3. **Deploy** 🎉
   - Netlify handles the `_redirects` file for SPA routing

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch

---

## 🎨 Customization Guide

### Update Personal Information

1. **Profile Data** (`src/components/ProfileSummary.jsx`)
   - Name, education, bio
   - Social media links

2. **Projects** (`src/data/projects.js`)
   ```javascript
   export const projects = [
     {
       id: 1,
       title: 'Your Project Title',
       desc: 'Short description',
       fullDesc: 'Detailed description',
       tech: ['React', 'Node.js'],
       github: 'https://github.com/username/repo',
       liveUrl: 'https://your-demo.com',
       status: 'Live', // or 'Completed', 'Ongoing'
       year: '2025',
       metrics: 'Key achievements'
     }
   ]
   ```

3. **Skills** (`src/data/skills.js`)
   - Update skill categories and items
   - Change icons and colors

4. **Colors** (`tailwind.config.cjs`)
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: '#06b6d4', // Main accent color
         accent: '#f43f5e',  // Secondary accent
       }
     }
   }
   ```

5. **Meta Tags** (`index.html`)
   - Update title, description, keywords
   - Change Open Graph image

---

## ⚡ Performance Optimization

### Current Metrics
- ⚡ **Lighthouse Score**: 95+
- 🎯 **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: Optimized with code splitting
- 🔄 **Lazy Loading**: Non-critical components
- 🖼️ **Image Optimization**: WebP format with fallbacks

### Optimization Features
- ✅ Tree shaking with Vite
- ✅ Code splitting and lazy loading
- ✅ Minification and compression
- ✅ CSS purging with Tailwind
- ✅ Asset optimization
- ✅ Modern ES6+ syntax
- ✅ Efficient animations (GPU-accelerated)

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Port 5173 already in use
```bash
# Solution: Kill the process or use different port
npm run dev -- --port 3000
```

**Issue**: Build fails with memory error
```bash
# Solution: Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

**Issue**: Animations not smooth
- Check GPU acceleration in browser
- Reduce particle count in ParticlesBackground.jsx
- Disable framer-motion animations if needed

**Issue**: Module not found errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |
| Opera | 76+ ✅ |

**Mobile Support**: iOS 12+, Android 8+

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Cheekati Sanjay Goud**

- 🌐 Portfolio: [sanjaycheekati.dev](https://sanjaycheekati.dev)
- 💼 LinkedIn: [@sanjaycheekati](https://linkedin.com/in/sanjaycheekati)
- 🐙 GitHub: [@SanjayCheekati](https://github.com/SanjayCheekati)
- 💻 LeetCode: [@sanjaycheekati](https://leetcode.com/u/sanjaycheekati)
- 📧 Email: sanjaycheekati83@gmail.com
- 📍 Location: Hyderabad, India
- 🎓 B.Tech CS @ MGIT (8.03 CGPA)
- 📅 Available: January 2026

---

## 🎯 Project Highlights

### Key Achievements
- ✅ **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- ✅ **Advanced Animations**: Framer Motion, GSAP, Three.js
- ✅ **Production Ready**: Optimized builds, SEO, accessibility
- ✅ **Fully Responsive**: Mobile-first design
- ✅ **Fast Performance**: 95+ Lighthouse score
- ✅ **Clean Code**: ESLint, organized structure

### What Makes This Portfolio Special
1. **Unique Design**: Glassmorphism UI with 3D effects
2. **Smooth Animations**: 60 FPS animations throughout
3. **Interactive Elements**: Hover effects, tilt cards, particles
4. **Professional Layout**: Clean sections with clear hierarchy
5. **Easy Customization**: Well-documented code
6. **Production Ready**: Deploy in minutes

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- 3D effects with [Three.js](https://threejs.org/)
- Built with ❤️ and patience 😂

---

## 📞 Get in Touch

**Open to opportunities!** 🚀

I'm actively looking for:
- Full-time SDE roles (Available January 2026)
- Internship opportunities
- Freelance projects
- Collaboration on interesting projects

**Tech Stack**: React, Node.js, Python, Machine Learning, MongoDB, Express, TensorFlow

**Interests**: Full-stack development, ML/AI, optimization algorithms, clean code

Feel free to reach out for job opportunities, collaborations, or just to say hi! 👋

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ patience 😂 using React, Node.js & Tailwind

**© 2025 Cheekati Sanjay Goud. All rights reserved.**

[⬆ Back to Top](#-modern-portfolio-website)

</div>
