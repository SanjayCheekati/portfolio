import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCode } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function ProfileSummary() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Photo */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center text-4xl font-bold">
                    CSG
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900" />
              </motion.div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Cheekati Sanjay Goud</h2>
                <p className="text-primary font-semibold mb-1">Software Development Engineer</p>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 justify-center md:justify-start flex-wrap">
                  <FiMapPin className="text-primary" />
                  <span>Hyderabad, India</span>
                  <span className="mx-2">•</span>
                  <span>B.Tech CS Student</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-400">Graduating June 2026</span>
                </div>

                {/* Introduction */}
                <div className="text-slate-300 text-sm mb-4 leading-relaxed space-y-2">
                  <p>
                    <span className="text-primary font-semibold">Hey! I'm Sanjay,</span> currently pursuing <span className="font-semibold">B.Tech in Computer Science at MGIT</span>. Previously studied Diploma at TRR Polytechnic.
                  </p>
                  <p>
                    I'm passionate about <span className="text-cyan-400 font-semibold">full-stack development</span> and <span className="text-purple-400 font-semibold">machine learning</span>, and I love vibe coding! 💻
                  </p>
                  <p>
                    I want to <span className="font-semibold">apply my knowledge in real-world applications</span>. As an enthusiastic learner, I'm open to <span className="text-green-400 font-semibold">internships and job opportunities</span>.
                  </p>
                  <p>
                    Love participating in <span className="font-semibold">hackathons and tech events!</span> 🚀
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center md:justify-start">
                  {[
                    { icon: FiGithub, href: 'https://github.com/SanjayCheekati/', label: 'GitHub' },
                    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sanjaycheekati/', label: 'LinkedIn' },
                    { icon: SiLeetcode, href: 'https://leetcode.com/u/sanjaycheekati/', label: 'LeetCode' },
                    { icon: FiMail, href: 'mailto:sanjaycheekati83@gmail.com', label: 'Email' }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-700 transition-all"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Button */}
              <motion.a
                href="/CHEEKATI_SANJAY_GOUD.pdf"
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-black font-bold shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
