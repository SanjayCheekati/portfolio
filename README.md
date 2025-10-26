# 🚀 Portfolio Website - Sanjay Cheekati

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12-FF0055?style=for-the-badge&logo=framer)

**Modern portfolio showcasing full-stack development projects with interactive animations and responsive design**

[📧 sanjaycheekati83@gmail.com](mailto:sanjaycheekati83@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/sanjaycheekati) • [💻 GitHub](https://github.com/SanjayCheekati)

</div>

---

## 📋 About This Project

A modern, interactive portfolio website built with React and cutting-edge web technologies. Features smooth animations, 3D effects, and a responsive design that works seamlessly across all devices.

### � Key Features

**Design & UX**
- Glassmorphism UI with backdrop blur effects
- Smooth 60 FPS animations using Framer Motion
- 3D particle effects and interactive tilt cards
- Mobile-first responsive design
- Dark theme with cyan/rose accent colors

**Technical Implementation**
- Lightning-fast Vite build system with Hot Module Replacement
- Component-based React architecture
- Tailwind CSS for utility-first styling
- Advanced animations with GSAP and Framer Motion
- Three.js integration for 3D graphics
- SEO optimized with meta tags and Open Graph support

**Content Sections**
- 🏠 **Hero** - Animated introduction with gradient text effects
- 👤 **Profile** - Detailed bio with social links (GitHub, LinkedIn, LeetCode, Email, Instagram)
- 💻 **Skills** - Horizontal chip layout showcasing 5 technology categories
- 📊 **Professional Skills** - Animated soft skills display
- 🚀 **Projects** - Portfolio with filtering (All, ML, Web, Live projects)
- 📞 **Contact** - Direct contact links and information
- � **Timeline** - Education and experience journey

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| ⚛️ React | 18.2.0 | UI Framework |
| ⚡ Vite | 5.2.0 | Build Tool & Dev Server |
| 🎨 Tailwind CSS | 3.3.2 | Utility-First Styling |
| 🎭 Framer Motion | 10.12.16 | Animation Library |
| 🎯 React Icons | 5.2.1 | Icon Components |

### Advanced Features
| Technology | Version | Purpose |
|-----------|---------|---------|
| 🌊 GSAP | 3.13.0 | Timeline Animations |
| 🎲 Three.js | 0.161.0 | 3D Graphics Engine |
| 🔄 React Three Fiber | 8.0.27 | React 3D Renderer |
| 🎪 React Parallax Tilt | 1.7.310 | 3D Tilt Effects |
| ✨ tsParticles | 3.0.0 | Particle Background |

### Development Tools
- 📦 npm - Package Manager
- 💅 PostCSS - CSS Processing
- 🔄 Git - Version Control

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed
- Git installed
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

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

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
client/
├── public/               # Static assets
│   ├── _redirects       # SPA routing config
│   ├── favicon.svg      # Site favicon
│   └── CHEEKATI_SANJAY_GOUD.pdf  # Resume
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx            # Landing section
│   │   ├── ProfileSummary.jsx  # About section
│   │   ├── Skills.jsx          # Tech skills display
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── ProjectModal.jsx    # Project detail modal
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Timeline.jsx        # Education timeline
│   │   ├── Achievements.jsx    # Achievements section
│   │   ├── ParticlesBackground.jsx  # 3D particles
│   │   ├── Scene3D.jsx         # 3D scene elements
│   │   ├── MobileMenu.jsx      # Mobile navigation
│   │   └── LoadingSpinner.jsx  # Loading state
│   ├── data/           # Static content data
│   │   ├── projects.js # Project information
│   │   └── skills.js   # Skills & tech stack
│   ├── hooks/          # Custom React hooks
│   │   └── useTheme.js # Theme management
│   ├── styles/         # Global styles
│   │   └── index.css   # Tailwind & custom CSS
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── tailwind.config.cjs # Tailwind configuration
├── vite.config.js      # Vite configuration
├── vercel.json         # Deployment config
└── postcss.config.cjs  # PostCSS configuration
```

### Key Components

**Hero.jsx**
- Animated landing section with gradient text
- Introduction and availability status
- Scroll indicator

**ProfileSummary.jsx**
- Detailed bio with education highlights
- Social media links (GitHub, LinkedIn, LeetCode, Email, Instagram)
- Profile image with hover effects

**Skills.jsx**
- Horizontal chip/badge layout
- 5 technology categories with icons
- Professional skills with animations
- Interactive hover effects

**Projects.jsx**
- Project cards with filtering system
- Tech stack display
- GitHub links and live demos
- Modal integration for details

**Contact.jsx**
- Direct contact information
- Social media cards
- Email and location display

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

---

## 🎨 Customization Guide

Want to use this portfolio as a template? Here's how to customize it:

### 1. Update Personal Information

**Profile Section** (`src/components/ProfileSummary.jsx`)
- Update name, education details, and CGPA
- Change bio text and interests
- Update social media links

**Hero Section** (`src/components/Hero.jsx`)
- Modify introduction text
- Update availability status and date

**Contact Section** (`src/components/Contact.jsx`)
- Update email address
- Modify location information

### 2. Add Your Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    desc: 'Brief one-line description',
    fullDesc: 'Detailed description of the project...',
    tech: ['React', 'Node.js', 'MongoDB'], // Tech stack
    github: 'https://github.com/username/repo',
    liveUrl: 'https://your-demo.com', // Optional
    status: 'Live', // or 'Completed', 'Ongoing'
    year: '2025',
    category: 'web', // 'ml', 'web', or other
    metrics: 'Key achievements or metrics'
  }
]
```

### 3. Update Skills

Edit `src/data/skills.js`:

```javascript
import { FaPython, FaReact } from 'react-icons/fa'

export const skillCategories = [
  {
    category: 'Your Category',
    icon: '💻',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Skill Name', Icon: FaPython, color: '#3776AB' }
    ]
  }
]
```

### 4. Customize Colors

Edit `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#06b6d4',  // Main cyan color
      accent: '#f43f5e',   // Rose accent color
      // Add your custom colors
    }
  }
}
```

### 5. Update Meta Tags

Edit `index.html`:
- Change `<title>` tag
- Update meta description
- Modify keywords for SEO
- Update Open Graph tags for social media

### 6. Replace Resume

Add your resume PDF to `public/` folder and update the link in `ProfileSummary.jsx`

---

## ⚡ Performance Features

### Optimizations Included
- ✅ **Vite Build System** - Lightning-fast builds with HMR
- ✅ **Code Splitting** - Automatic chunk splitting for faster loads
- ✅ **Lazy Loading** - Components load on demand
- ✅ **Tree Shaking** - Removes unused code
- ✅ **CSS Purging** - Tailwind removes unused styles
- ✅ **Asset Optimization** - Minified JS, CSS, and images
- ✅ **GPU Acceleration** - Smooth 60 FPS animations

### Performance Metrics
- 🎯 **Lighthouse Score**: 95+
- ⚡ **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: Optimized and compressed
- 🔄 **Load Time**: < 3s on 3G networks

---

## 🐛 Troubleshooting

### Common Issues & Solutions

**Port 5173 already in use**
```bash
# Use a different port
npm run dev -- --port 3000
```

**Build fails with memory error**
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

**Module not found errors**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Animations not smooth**
- Enable GPU acceleration in browser settings
- Reduce particle count in `ParticlesBackground.jsx`
- Check browser performance settings

**Hot reload not working**
- Restart the dev server
- Clear browser cache
- Check file permissions

---

## 📊 Browser Compatibility

| Browser | Supported Version |
|---------|------------------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |
| Opera | 76+ ✅ |

**Mobile Browsers**: iOS Safari 12+, Chrome Android 90+

**Note**: Requires JavaScript enabled and supports modern ES6+ features

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/Improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/Improvement`)
5. Open a Pull Request

**Suggestions welcome for:**
- 🐛 Bug fixes
- 💡 New features
- 🎨 Design improvements
- ⚡ Performance optimizations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this code for your own portfolio, but please provide attribution!

---

## 👤 About

**Cheekati Sanjay Goud**

� B.Tech in Computer Science and Engineering  
📍 Mahatma Gandhi Institute of Technology, Hyderabad  
🏆 CGPA: 8.03/10.0  
📅 Expected Graduation: 2026  
💼 Available from: January 2026

### Connect With Me

- 📧 Email: [sanjaycheekati83@gmail.com](mailto:sanjaycheekati83@gmail.com)
- 💼 LinkedIn: [@sanjaycheekati](https://linkedin.com/in/sanjaycheekati)
- 🐙 GitHub: [@SanjayCheekati](https://github.com/SanjayCheekati)
- 💻 LeetCode: [@sanjaycheekati](https://leetcode.com/u/sanjaycheekati)
- � Instagram: [@sanjay_cheekati](https://instagram.com/sanjay_cheekati)

### Interests

Full-stack development • Machine Learning • Genetic Algorithms • Problem Solving • Hackathons

---

## 🎯 Project Features

### What Makes This Portfolio Stand Out

**🎨 Modern Design**
- Glassmorphism UI with backdrop blur effects
- Dark theme with cyan and rose gradients
- Smooth 60 FPS animations throughout
- 3D particle effects and interactive tilt cards

**⚡ Performance**
- Lightning-fast Vite build system
- Optimized bundle with code splitting
- Lazy loading for non-critical components
- 95+ Lighthouse performance score

**📱 Responsive**
- Mobile-first design approach
- Works seamlessly on all devices
- Touch-friendly interactions
- Adaptive layouts for different screens

**♿ Accessible**
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels and roles
- High contrast text

**🔍 SEO Optimized**
- Comprehensive meta tags
- Open Graph for social media
- Twitter Card support
- Structured data

---

## 🚀 Key Technologies

This portfolio showcases proficiency in:

**Frontend Development**
- React 18 with modern hooks and patterns
- Component-based architecture
- State management with React hooks
- Responsive design with Tailwind CSS

**Animation & Graphics**
- Framer Motion for smooth transitions
- GSAP for timeline animations
- Three.js for 3D graphics
- React Three Fiber for 3D rendering

**Build & Development**
- Vite for fast development and builds
- Hot Module Replacement (HMR)
- Optimized production builds
- Modern ES6+ JavaScript

**Design System**
- Tailwind CSS utility classes
- Custom color schemes
- Consistent spacing and typography
- Reusable component patterns

---

## 📝 Featured Projects

This portfolio showcases three major projects:

1. **Multi-Objective Genetic Algorithm** (2025-2026)
   - Healthcare dataset clustering using K-means + NSGA-II
   - 35% improvement in convergence efficiency
   - Technologies: Python, ML, Genetic Algorithms

2. **AI-Powered Content Moderation** (2025)
   - BERT-based NLP system for real-time content filtering
   - 94% accuracy in detecting inappropriate content
   - Technologies: Python, TensorFlow, BERT, Flask

3. **Portfolio Website** (2025)
   - Full-stack MERN platform with real-time features
   - Modern UI with advanced animations
   - Technologies: React, Node.js, Express, MongoDB

---

## 💡 Development Insights

### Architecture Decisions

**Component Structure**
- Modular components for reusability
- Separation of concerns (UI, data, logic)
- Custom hooks for shared functionality

**Performance Optimizations**
- Code splitting by route
- Lazy loading of heavy components
- Memoization for expensive computations
- Optimized re-renders with React.memo

**Animation Strategy**
- GPU-accelerated transforms
- RequestAnimationFrame for smooth updates
- Optimized particle systems
- Conditional animations based on viewport

### Design Philosophy

**User Experience**
- Clear visual hierarchy
- Intuitive navigation
- Fast load times
- Smooth interactions

**Code Quality**
- Clean, readable code
- Consistent naming conventions
- Comprehensive comments
- Modular and maintainable structure

---

## 📄 License

This project is licensed under the MIT License - feel free to use it as a template for your own portfolio!

**Attribution appreciated but not required** 🙏

---

## 🌟 Acknowledgments

Built with passion using amazing open-source libraries:
- React Team for the incredible framework
- Framer Motion for beautiful animations
- Tailwind Labs for the CSS framework
- Three.js community for 3D capabilities
- All the contributors to the packages used

---

<div align="center">

### ⭐ If you found this portfolio helpful, consider giving it a star!

**Made with ❤️ and patience 😂**

</div>


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
