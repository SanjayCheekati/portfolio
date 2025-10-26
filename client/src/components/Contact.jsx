import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiSend, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('sending')
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      await axios.post(`${apiUrl}/api/contact`, form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      
      <motion.p
        className="text-slate-300 text-center mb-12 text-base md:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Open to full-time SDE roles starting January 2026. Let's discuss how I can contribute to your team with my skills in full-stack development and machine learning.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          
          {/* Contact Cards */}
          <motion.a
            href="mailto:sanjaycheekati83@gmail.com"
            className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-750 transition group"
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary group-hover:text-black transition">
              <FiMail className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Email Me</p>
              <p className="font-medium">sanjaycheekati83@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sanjaycheekati/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-750 transition group"
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition">
              <FiLinkedin className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Connect on LinkedIn</p>
              <p className="font-medium">linkedin.com/in/sanjaycheekati</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/SanjayCheekati/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-750 transition group"
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition">
              <FiGithub className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-slate-400">View GitHub</p>
              <p className="font-medium">github.com/SanjayCheekati</p>
            </div>
          </motion.a>

          <motion.a
            href="https://instagram.com/sanju.1xv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-750 transition group"
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500 group-hover:text-white transition">
              <FiInstagram className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Follow on Instagram</p>
              <p className="font-medium">@sanju.1xv</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
              <input
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your name *"
                className={`w-full pl-11 pr-4 py-3 md:py-4 rounded-lg bg-slate-900 border ${
                  errors.name ? 'border-red-500' : 'border-slate-700'
                } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-base relative z-0`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" />
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Email address *"
                className={`w-full pl-11 pr-4 py-3 md:py-4 rounded-lg bg-slate-900 border ${
                  errors.email ? 'border-red-500' : 'border-slate-700'
                } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition text-base relative z-0`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-slate-400 pointer-events-none z-10" />
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Your message *"
                rows="4"
                className={`w-full pl-11 pr-4 py-3 md:py-4 rounded-lg bg-slate-900 border ${
                  errors.message ? 'border-red-500' : 'border-slate-700'
                } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none text-base relative z-0`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={true}
              className="w-full py-3 md:py-4 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 text-slate-400 font-semibold shadow-lg opacity-50 cursor-not-allowed flex items-center justify-center gap-2"
              title="Contact form is currently disabled"
            >
              {status === 'sending' ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {status === 'sent' && (
              <motion.div
                className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-green-400 font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-400 font-medium">✗ Failed to send message. Please try again or email directly.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
