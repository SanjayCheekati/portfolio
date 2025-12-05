import React from 'react'
import { motion } from 'framer-motion'
import SkillsRadar from './SkillsRadar'

export default function About() {
  return (
    <div>
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-300 mb-6">
            I am a fresher who enjoys building end-to-end applications. I focus on clean UI, 
            accessible interactions, and maintainable code. This template is filled with dummy 
            content you can replace.
          </p>

          <p className="text-base text-slate-400 mb-6">
            I regularly publish open-source MERN and AI/ML projects on{' '}
            <a 
              href="https://github.com/SanjayCheekati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/50 hover:decoration-cyan-300 transition-colors"
            >
              GitHub
            </a>.
          </p>

          <motion.div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Tech & Tools</h3>
            <ul className="grid grid-cols-2 gap-3 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> React / Vite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Node / Express
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Framer Motion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span> Three.js (R3F)
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillsRadar />
        </motion.div>
      </div>
    </div>
  )
}
