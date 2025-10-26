import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiZap, FiTrendingUp, FiAward } from 'react-icons/fi'

export default function ValueProposition() {
  const values = [
    {
      icon: FiCode,
      title: 'Full-Stack Expertise',
      description: 'Proficient in MERN stack with 6+ deployed projects. Building end-to-end solutions from database design to responsive UIs.',
      metrics: '6+ Live Projects'
    },
    {
      icon: FiZap,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and scalability. Achieved <100ms API latency and 95+ Lighthouse scores.',
      metrics: '<100ms Latency'
    },
    {
      icon: FiTrendingUp,
      title: 'ML & Algorithms',
      description: 'Implementing machine learning solutions and optimization algorithms. 35% efficiency improvement in recent project.',
      metrics: '35% Efficiency Gain'
    },
    {
      icon: FiAward,
      title: 'Quality & Best Practices',
      description: 'Writing clean, maintainable code following industry standards. Version control, testing, and documentation focused.',
      metrics: 'Industry Standards'
    }
  ]

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              What I Bring to Your Team
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combining technical proficiency with problem-solving mindset to deliver impactful solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{value.description}</p>
                
                <div className="pt-4 border-t border-slate-700/50">
                  <span className="text-xs font-semibold text-primary">{value.metrics}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Technologies', value: '15+' },
            { label: 'Completed Projects', value: '6+' },
            { label: 'Certifications', value: '5+' },
            { label: 'CGPA', value: '9.04' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
