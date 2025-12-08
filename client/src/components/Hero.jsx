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

          {/* Right Content - Simple Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="mb-6">
                    <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="95" fill="url(#grad1)" opacity="0.2"/>
                      <circle cx="100" cy="100" r="80" fill="currentColor" className="text-primary" opacity="0.1"/>
                      <path d="M60 90 L60 110 L70 110 L70 140 L130 140 L130 110 L140 110 L140 90 Z" fill="currentColor" className="text-primary" opacity="0.8"/>
                      <rect x="75" y="100" width="50" height="35" rx="2" fill="currentColor" className="text-secondary" opacity="0.6"/>
                      <circle cx="85" cy="70" r="15" fill="currentColor" className="text-warning" opacity="0.7"/>
                      <circle cx="115" cy="70" r="15" fill="currentColor" className="text-warning" opacity="0.7"/>
                      <path d="M90 115 L95 115 M105 115 L110 115" stroke="currentColor" className="text-default-700" strokeWidth="2" opacity="0.5"/>
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
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
