export const projects = [
  {
    id: 1,
    title: 'PureText - Advanced Text Processing Tool',
    desc: 'Modern web application for text manipulation with real-time processing, multiple transformation options, and clean UI.',
    fullDesc: 'Feature-rich text processing tool built with React and modern web technologies. Provides instant text transformations including case conversion, whitespace handling, character counting, text reversal, and more. Features include real-time preview, copy-to-clipboard functionality, responsive design, keyboard shortcuts, and clean, intuitive interface. Perfect for developers, writers, and content creators who need quick text manipulation without installing software. Built with performance in mind - all processing happens client-side for instant results and privacy.',
    tech: ['React', 'JavaScript', 'CSS', 'Web APIs', 'Local Storage'],
    github: 'https://github.com/SanjayCheekati/puretext',
    liveUrl: 'https://www.puretext.me',
    status: 'Live',
    year: '2025',
    metrics: 'Real-time processing | Client-side | Privacy-focused | Keyboard shortcuts'
  },
  {
    id: 2,
    title: 'Multi-Objective Genetic Algorithm to Enhance the clustering algorithms',
    desc: 'Advanced optimization system combining clustering with multi-objective genetic algorithms for healthcare resource allocation.',
    fullDesc: 'Production-ready optimization framework implementing K-means clustering integrated with NSGA-II (Non-dominated Sorting Genetic Algorithm II) for Home Health Care scheduling. Achieves 35% improvement in route efficiency and 40% reduction in scheduling conflicts. Handles complex constraints including time windows, caregiver skills, patient preferences, and multi-objective optimization (minimizing cost, travel time, and maximizing patient satisfaction). Technologies: Python, NumPy, Pandas, Scikit-learn, Custom GA implementation. Dataset: 500+ patients, 50+ caregivers across 12-month simulation.',
    tech: ['Python', 'Machine Learning', 'NSGA-II', 'K-means', 'Genetic Algorithms', 'NumPy', 'Pandas'],
    github: 'https://github.com/SanjayCheekati/K-means_NSGA-II_HHC',
    status: 'Ongoing',
    year: '2025-2026',
    metrics: '35% efficiency gain | 500+ patient dataset | Multi-objective optimization'
  },
  {
    id: 3,
    title: 'An Approach to sensitive content moderation using BERT algorithm',
    desc: 'Enterprise-grade NLP system using BERT transformer for real-time sensitive content detection with 94% accuracy.',
    fullDesc: 'Deep learning content moderation API built with BERT (Bidirectional Encoder Representations from Transformers) achieving 94% accuracy on multi-class classification (hate speech, violence, NSFW, spam). Fine-tuned on 50K+ labeled examples using transfer learning. Implements real-time inference with <100ms latency, REST API for easy integration, and confidence scoring for ambiguous cases. Deployed with Flask, containerized with Docker for scalability. Handles multi-language content (English, Hindi, Spanish) with preprocessing pipeline including tokenization, normalization, and entity masking.',
    tech: ['Python', 'BERT', 'Transformers', 'NLP', 'TensorFlow', 'Flask', 'Docker', 'REST API'],
    github: 'https://github.com/SanjayCheekati/Sensitive-Content-Moderation-using-BERT',
    status: 'Completed',
    year: '2025',
    metrics: '94% accuracy | <100ms latency | 50K+ training samples | Multi-language support'
  },
  {
    id: 4,
    title: 'Full-Stack Portfolio Platform',
    desc: 'Modern MERN stack web application with advanced animations, real-time contact system, and responsive UI.',
    fullDesc: 'Production-grade portfolio platform built with React 18, Node.js, Express, and MongoDB. Features: Server-side contact form with email integration, animated UI components using Framer Motion (60 FPS), Three.js particle effects, dark/light theme with CSS variables, SEO optimization with meta tags, lazy loading for performance (Lighthouse score: 95+), mobile-first responsive design, and accessibility compliance (WCAG 2.1 AA). Backend includes input validation, rate limiting, email service (Nodemailer), MongoDB for message storage, and RESTful API design. Deployed on Vercel (frontend) and Railway (backend) with CI/CD pipeline.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'REST API'],
    github: 'https://github.com/SanjayCheekati/portfolio',
    liveUrl: 'https://sanjaycheekati.dev',
    status: 'Live',
    year: '2025',
    metrics: 'Lighthouse 95+ | 60 FPS animations | RESTful API | CI/CD deployed'
  }
]
