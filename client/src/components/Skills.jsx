import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories, softSkills } from '../data/skills'
import Tilt from 'react-parallax-tilt'

export default function Skills() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-sm text-cyan-300 font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          💡 TECH STACK
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        
        <p className="text-slate-300 text-base max-w-2xl mx-auto">
          Building powerful solutions with modern tech
        </p>
      </motion.div>

      {/* Technical Skills - Compact Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(6, 182, 212, 0.1)' }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className={"w-12 h-12 rounded-xl bg-gradient-to-br " + category.color + " flex items-center justify-center text-2xl shadow-lg"}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills - Horizontal Flow */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => {
                  const SkillIcon = skill.Icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="group relative flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/60 rounded-lg px-3 py-2 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: catIndex * 0.05 + index * 0.03 }}
                      viewport={{ once: true }}
                      title={skill.name}
                    >
                      <SkillIcon 
                        className="text-2xl transition-all duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Professional Skills - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-center mb-6 text-slate-200">
          Professional Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              whileHover={{ y: -5, scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-slate-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
