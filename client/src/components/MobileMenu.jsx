import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function MobileMenu({ isOpen, onClose }) {
  const menuItems = ['Profile', 'Skills', 'Projects', 'Achievements', 'Journey', 'Contact']

  const handleClick = (item) => {
    onClose()
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(item.toLowerCase())
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-[101] bg-slate-900 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-800 transition"
                aria-label="Close menu"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-6 py-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleClick(item)}
                  className="block w-full text-left py-4 px-4 rounded-lg mb-2 text-lg font-medium transition hover:bg-slate-800 hover:text-primary"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
              <p className="text-sm text-slate-400 text-center">
                © 2025 Cheekati Sanjay Goud
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
