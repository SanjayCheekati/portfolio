import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiStar, FiGitBranch } from 'react-icons/fi'
import { projects } from '../data/projects'
import Tilt from 'react-parallax-tilt'
import gsap from 'gsap'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%'
        }
      })
    }
  }, [])

  const categories = ['All', 'ML', 'Web', 'Live']

  return (
    <div className="relative py-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-full text-sm text-cyan-300 font-bold mb-5"
            whileHover={{ scale: 1.05 }}
            role="status"
            aria-label="Projects section"
          >
            <FiCode className="inline mr-2" aria-hidden="true" />
            MY PROJECTS
          </motion.div>
          
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          
          <p className="text-slate-300 text-base max-w-2xl mx-auto px-4">
            Innovative solutions combining modern technology with practical applications. Software development projects showcasing MERN stack, machine learning, and full-stack expertise.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          role="tablist"
          aria-label="Project category filters"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-accent text-black shadow-lg shadow-primary/50'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={filter === cat}
              aria-label={`Filter projects by ${cat}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => {
              if (filter === 'All') return true
              if (filter === 'ML') return project.tech.some(t => ['Machine Learning', 'BERT', 'Transformers', 'NLP', 'NSGA-II'].includes(t))
              if (filter === 'Web') return project.tech.some(t => ['React', 'Node.js', 'Express', 'MongoDB'].includes(t))
              if (filter === 'Live') return project.status === 'Live'
              return true
            })
            .map((project, index) => (
            <motion.div
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#06b6d4"
                glarePosition="all"
                glareBorderRadius="20px"
                scale={1.02}
                className="h-full"
              >
                <motion.div
                  className="group relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-lg flex flex-col"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)' }}
                  role="article"
                  aria-label={`${project.title} project card`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                        project.status === 'Ongoing' 
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                          : project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Icon/Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <motion.div
                      className="text-7xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      role="img"
                      aria-label={`${project.title} project illustration - ${project.status === 'Live' ? 'Live and deployed' : project.status === 'Ongoing' ? 'Under active development' : 'Completed project'}`}
                    >
                      {project.status === 'Live' ? '🚀' : project.status === 'Ongoing' ? '⚡' : '✨'}
                    </motion.div>
                    
                    {/* Animated Lines */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                          style={{ top: `${20 + i * 20}%`, left: 0, right: 0 }}
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 flex-1 pr-2 line-clamp-2">
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className="text-xs text-slate-400 font-semibold bg-slate-800/50 px-2 py-1 rounded whitespace-nowrap">
                          {project.year}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-shrink-0">
                      {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 text-xs rounded-lg bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50 mt-auto">
                      <motion.button
                        className="text-cyan-400 font-bold text-sm flex items-center gap-2 group/btn"
                        whileHover={{ x: 3 }}
                      >
                        View Details
                        <FiExternalLink className="text-sm group-hover/btn:rotate-45 transition-transform" />
                      </motion.button>

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View source code on GitHub"
                          title="View source code on GitHub"
                        >
                          <FiGithub className="text-base" aria-hidden="true" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-12 scale-150" />
                  </motion.div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/SanjayCheekati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 text-slate-300 font-semibold group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGitBranch className="text-xl group-hover:rotate-180 transition-transform duration-500" />
            Explore More on GitHub
            <FiExternalLink className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
