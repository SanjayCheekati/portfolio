import React, { useState, useEffect, Suspense, lazy } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiMenu, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { Analytics } from '@vercel/analytics/react'
import LoadingSpinner from './components/LoadingSpinner'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import ProfileSummary from './components/ProfileSummary'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Timeline from './components/Timeline'

// Lazy load only non-critical components
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'))

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen overflow-x-hidden transition-colors duration-500 bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100">
        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Particles background */}
        <ParticlesBackground />

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Header */}
        <motion.header
          className="fixed top-4 left-0 right-0 z-40 container mx-auto px-6 flex justify-between items-center backdrop-blur-md rounded-full py-3 bg-slate-900/70 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          role="banner"
        >
          <motion.div
            className="text-xl font-semibold cursor-pointer"
            whileHover={{ scale: 1.05, color: '#8b5cf6' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="heading"
            aria-level="1"
          >
            SanjayCheekati<span className="text-primary">.dev</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="space-x-6 hidden md:block" role="navigation" aria-label="Main navigation">
            {['Profile', 'Skills', 'Projects', 'Achievements', 'Journey', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-primary"
                whileHover={{ y: -2 }}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <FiMenu className="text-2xl" aria-hidden="true" />
          </button>
        </motion.header>

      <main className="pt-24 relative z-10" role="main">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          role="region"
          aria-label="Introduction"
        >
          <Hero />
        </motion.div>

        {/* Profile Summary Section */}
        <motion.section
          id="profile"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="profile-heading"
        >
          <ProfileSummary />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="skills-heading"
        >
          <motion.h2
            id="skills-heading"
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <Skills />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="projects-heading"
        >
          <Projects />
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="achievements-heading"
        >
          <Achievements />
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          id="journey"
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Timeline />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t text-slate-400 border-slate-800 bg-slate-900/50" role="contentinfo">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sanjay Cheekati
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Software Development Engineer | MERN Stack & Machine Learning | Building scalable solutions with clean code | Available January 2026 | Job seeker for SDE roles
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiMapPin className="text-cyan-400" aria-hidden="true" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#profile" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="Navigate to About section">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> About Me
                </a>
                <a href="#skills" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="Navigate to Skills section">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> Skills & Technologies
                </a>
                <a href="#projects" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="View software development projects">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> Projects & Portfolio
                </a>
                <a href="#achievements" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="View achievements and certifications">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> Achievements
                </a>
                <a href="#journey" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="View education and experience timeline">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> Education & Journey
                </a>
                <a href="#contact" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition group" aria-label="Contact for job opportunities">
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span> Contact & Hire
                </a>
              </div>
            </nav>

            {/* Social & Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Connect With Me</h3>
              <div className="flex gap-3 mb-4">
                <motion.a
                  href="https://github.com/SanjayCheekati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="Visit Sanjay Cheekati's GitHub profile"
                >
                  <FiGithub className="text-lg" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sanjaycheekati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="Visit Sanjay Cheekati's LinkedIn profile for job opportunities"
                >
                  <FiLinkedin className="text-lg" aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="mailto:sanjaycheekati83@gmail.com"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label="Send email to Sanjay Cheekati"
                >
                  <FiMail className="text-lg" aria-hidden="true" />
                </motion.a>
              </div>
              <a 
                href="mailto:sanjaycheekati83@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition"
                aria-label="Email sanjaycheekati83@gmail.com"
              >
                <FiMail className="text-cyan-400" aria-hidden="true" />
                sanjaycheekati83@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Cheekati Sanjay Goud. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Built with <span className="text-red-500" role="img" aria-label="heart">❤️</span> patience <span className="text-yellow-400" role="img" aria-label="laughing">😂</span> using React, Node.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
    </Suspense>
  )
}
