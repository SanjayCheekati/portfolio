import React from 'react'
import { Button, Chip } from '@nextui-org/react'
import { FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <Chip 
              color="success" 
              variant="dot" 
              className="mb-6"
            >
              Available from January 2026
            </Chip>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Sanjay Cheekati
            </h1>

            <p className="text-xl md:text-2xl text-default-600 mb-6">
              Full Stack Developer specializing in MERN & AI/ML
            </p>
            
            <p className="text-lg text-default-500 mb-8 max-w-2xl leading-relaxed">
              Building scalable web applications with clean code and modern technologies. 
              Passionate about creating exceptional user experiences and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="/CHEEKATI_SANJAY_GOUD.pdf"
                download
                color="primary"
                size="lg"
                startContent={<FiDownload />}
              >
                Download Resume
              </Button>
              
              <Button
                as="a"
                href="https://www.linkedin.com/in/sanjaycheekati/"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                size="lg"
                startContent={<FiLinkedin />}
              >
                LinkedIn
              </Button>

              <Button
                as="a"
                href="https://github.com/SanjayCheekati/"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                size="lg"
                startContent={<FiGithub />}
              >
                GitHub
              </Button>
            </div>
          </div>

          {/* Right Content - Developer Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="mb-6">
                    <svg className="w-64 h-64 mx-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Desk */}
                      <rect x="80" y="280" width="240" height="15" rx="4" fill="currentColor" className="text-default-400" opacity="0.3"/>
                      {/* Monitor */}
                      <rect x="140" y="120" width="120" height="90" rx="8" fill="currentColor" className="text-primary" opacity="0.2"/>
                      <rect x="145" y="125" width="110" height="80" rx="4" fill="currentColor" className="text-secondary" opacity="0.1"/>
                      {/* Monitor Stand */}
                      <rect x="185" y="210" width="30" height="40" rx="2" fill="currentColor" className="text-default-400" opacity="0.3"/>
                      <rect x="170" y="250" width="60" height="30" rx="4" fill="currentColor" className="text-default-400" opacity="0.3"/>
                      {/* Code Lines */}
                      <line x1="155" y1="140" x2="190" y2="140" stroke="currentColor" className="text-success" strokeWidth="3" opacity="0.6"/>
                      <line x1="155" y1="155" x2="210" y2="155" stroke="currentColor" className="text-primary" strokeWidth="3" opacity="0.6"/>
                      <line x1="165" y1="170" x2="200" y2="170" stroke="currentColor" className="text-warning" strokeWidth="3" opacity="0.6"/>
                      <line x1="155" y1="185" x2="220" y2="185" stroke="currentColor" className="text-secondary" strokeWidth="3" opacity="0.6"/>
                      {/* Keyboard */}
                      <rect x="120" y="260" width="160" height="8" rx="2" fill="currentColor" className="text-default-500" opacity="0.4"/>
                      {/* Coffee Cup */}
                      <ellipse cx="310" cy="265" rx="18" ry="20" fill="currentColor" className="text-warning" opacity="0.3"/>
                      <rect x="292" y="260" width="36" height="25" rx="4" fill="currentColor" className="text-warning" opacity="0.4"/>
                      <path d="M320 270 Q330 270 330 275 Q330 280 320 280" stroke="currentColor" className="text-warning" strokeWidth="2" fill="none" opacity="0.5"/>
                      {/* Plant */}
                      <ellipse cx="90" cy="280" rx="15" ry="8" fill="currentColor" className="text-success" opacity="0.3"/>
                      <path d="M85 265 Q85 255 90 250 Q95 255 95 265" fill="currentColor" className="text-success" opacity="0.5"/>
                      <path d="M80 270 Q75 265 75 260 Q80 262 85 268" fill="currentColor" className="text-success" opacity="0.4"/>
                      {/* Glow Effect */}
                      <circle cx="200" cy="165" r="80" fill="url(#heroGlow)" opacity="0.15"/>
                      <defs>
                        <linearGradient id="heroGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Software Engineer</p>
                    <p className="text-default-500 font-medium">MERN Stack | AI/ML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
