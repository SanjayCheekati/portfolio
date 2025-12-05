import React from 'react'
import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

export default function Achievements() {
  const certifications = [
    {
      title: 'Network Essentials',
      org: 'Cisco Networking Academy',
      description: 'TCP/IP protocols, network architecture, routing & switching fundamentals',
      color: 'from-blue-500 to-cyan-500',
      year: '2024',
      skills: ['Networking', 'TCP/IP', 'Routing']
    },
    {
      title: 'Python Essentials 1',
      org: 'Cisco Networking Academy',
      description: 'Python programming fundamentals, data structures, and control flow',
      color: 'from-green-500 to-emerald-500',
      year: '2024',
      skills: ['Python', 'Programming', 'Data Structures']
    },
    {
      title: 'Python Essentials 2',
      org: 'Cisco Networking Academy',
      description: 'Advanced Python, OOP concepts, file handling, and exceptions',
      color: 'from-green-500 to-emerald-500',
      year: '2024',
      skills: ['Python', 'OOP', 'Advanced Programming']
    },
    {
      title: 'Introduction to Data Science',
      org: 'Cisco Networking Academy',
      description: 'Data analysis, visualization, statistical methods, ML basics with Python',
      color: 'from-purple-500 to-pink-500',
      year: '2024',
      skills: ['Data Science', 'ML', 'Statistics']
    },
    {
      title: 'HTML, CSS & JavaScript',
      org: 'Infosys Springboard',
      description: 'Frontend development, responsive design, DOM manipulation, modern JS',
      color: 'from-orange-500 to-red-500',
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'SQL & Database Programming',
      org: 'Oracle Dev Gym',
      description: 'Advanced SQL queries, joins, subqueries, database design',
      color: 'from-yellow-500 to-orange-500',
      year: '2024',
      skills: ['SQL', 'Database', 'Queries']
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🏆 Certifications & Achievements
        </motion.h2>
        
        <motion.p
          className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Industry-recognized certifications and hands-on learning demonstrating technical proficiency and dedication to continuous growth.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(14, 165, 164, 0.3)' }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}>
                <FiAward className="text-3xl text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{cert.title}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{cert.org}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{cert.description}</p>
              
              {cert.year && (
                <p className="text-xs text-slate-500 mb-2">Completed: {cert.year}</p>
              )}
              
              {cert.skills && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
