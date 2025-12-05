import React from 'react'
import { motion } from 'framer-motion'
import { FiBook, FiCode, FiAward, FiUsers } from 'react-icons/fi'

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech - Computer Science & Engineering',
    organization: 'Mahatma Gandhi Institute of Technology',
    period: '2023 - 2026',
    description: 'Pursuing Bachelor of Technology with 8.03 CGPA. Specialized in Data Structures, Algorithms, DBMS, Operating Systems, and Machine Learning.',
    icon: FiBook,
    link: 'https://mgit.ac.in/'
  },
  {
    type: 'education',
    title: 'Diploma - Computer Engineering',
    organization: 'T.R.R College of Technology',
    period: '2020 - 2023',
    description: 'Completed Diploma with 9.04 CGPA. Built strong foundation in programming (C, C++, Java), database management, and web technologies.',
    icon: FiBook,
    link: 'https://www.trr.org.in/'
  }
]

const typeConfig = {
  education: { color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/20' },
  project: { color: 'from-primary to-teal-500', bgColor: 'bg-primary/20' },
  certification: { color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500/20' },
  activity: { color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/20' }
}

export default function Timeline() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Educational Journey</h2>
      <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        My academic background in Computer Science and Engineering.
      </p>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

        {timelineData.map((item, index) => {
          const Icon = item.icon
          const isLeft = index % 2 === 0
          const config = typeConfig[item.type]

          return (
            <motion.div
              key={index}
              className={`mb-12 flex items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-5/12 ${isLeft ? 'text-left pl-8' : 'text-right pr-8'}`}>
                <motion.div
                  className="bg-slate-800 p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(14, 165, 164, 0.2)' }}
                >
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? '' : 'justify-end'}`}>
                    <div className={`p-2 rounded-full ${config.bgColor}`}>
                      <Icon className={`text-lg bg-gradient-to-r ${config.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold mb-1 hover:underline inline-block"
                    >
                      {item.organization} ↗
                    </a>
                  ) : (
                    <h4 className="text-primary font-semibold mb-1">{item.organization}</h4>
                  )}
                  <p className="text-sm text-slate-400 mb-2">{item.period}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className={`w-4 h-4 rounded-full bg-gradient-to-br ${config.color} border-4 border-slate-900 z-10 shadow-lg`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>

              <div className="w-5/12" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
