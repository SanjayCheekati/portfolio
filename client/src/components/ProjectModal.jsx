import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (project) {
      window.addEventListener('keydown', handleEsc)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [project, onClose])
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative mt-16"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 hover:bg-slate-700 rounded-full transition z-50 touch-manipulation"
            aria-label="Close modal"
          >
            <FiX className="text-2xl" />
          </button>

          <div className="mb-4">
            <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex flex-col items-center justify-center relative">
              <span className="text-6xl mb-2">🚀</span>
              {project.status && (
                <span className={`absolute top-4 right-4 text-sm px-3 py-1.5 rounded-full font-medium ${
                  project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              )}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          {project.year && <p className="text-sm text-slate-400 mb-3">{project.year}</p>}
          <p className="text-slate-300 mb-4">{project.fullDesc || project.desc}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-slate-700 text-sm">{t}</span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Responsive design with modern UI/UX</li>
              <li>Optimized performance and accessibility</li>
              <li>Clean, maintainable code architecture</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-primary text-black rounded-lg font-medium hover:scale-105 transition"
              >
                <FiGithub /> View on GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
