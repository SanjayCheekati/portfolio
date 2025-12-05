import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'
import gsap from 'gsap'

export default function Hero() {
  const floatingRef = useRef([])

  useEffect(() => {
    floatingRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -30,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2
        })
      }
    })
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
      
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-full text-sm mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium">Available from January 2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <motion.span className="block bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                Sanjay Cheekati
              </motion.span>
            </h1>
            
            {/* Typing Animation */}
            <div className="text-2xl md:text-4xl font-bold text-slate-200 mb-8 h-16" role="doc-subtitle">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer 💻',
                  2000,
                  'MERN Specialist 🚀',
                  2000,
                  'AI/ML Engineer 🤖',
                  2000,
                  'Open Source Contributor ⚡',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="/CHEEKATI_SANJAY_GOUD.pdf"
                download
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-black font-bold shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download Sanjay Cheekati's Resume PDF"
              >
                <span className="flex items-center gap-2">
                  <FiDownload className="text-xl" aria-hidden="true" /> Download Resume
                </span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/sanjaycheekati/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-primary/50 bg-primary/5 backdrop-blur-sm text-primary font-bold"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit Sanjay Cheekati's LinkedIn Profile"
              >
                <span className="flex items-center gap-2">
                  <FiLinkedin className="text-xl" aria-hidden="true" /> LinkedIn
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - 3D Floating Element */}
          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Center Avatar */}
              <motion.div
                className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-lg border border-primary/30 flex items-center justify-center shadow-2xl"
                animate={{ rotateY: [0, 10, 0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="text-9xl">👨‍💻</div>
              </motion.div>

              {/* Orbiting Icons - Fixed positioning to avoid overlap */}
              {[
                { icon: '⚛️', color: 'from-cyan-400 to-blue-500', angle: 0 },
                { icon: '🚀', color: 'from-rose-400 to-pink-500', angle: 90 },
                { icon: '💻', color: 'from-green-400 to-teal-500', angle: 180 },
                { icon: '⚡', color: 'from-yellow-400 to-orange-500', angle: 270 },
              ].map((item, index) => {
                const radius = 220; // Distance from center
                const angleRad = (item.angle * Math.PI) / 180;
                const x = 50 + (radius / 6) * Math.cos(angleRad); // Percentage based positioning
                const y = 50 + (radius / 6) * Math.sin(angleRad);
                
                return (
                  <motion.div
                    key={index}
                    ref={el => floatingRef.current[index] = el}
                    className={`absolute w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-lg flex items-center justify-center text-3xl shadow-2xl border border-white/20`}
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                    whileHover={{ scale: 1.2, zIndex: 20 }}
                  >
                    {item.icon}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
