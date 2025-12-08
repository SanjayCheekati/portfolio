import React from 'react'
import { Button, Chip } from '@nextui-org/react'
import { FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-default-50 to-white">
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
              <div className="w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center border-2 border-default-200">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">Software Engineer</p>
                    <p className="text-default-500">MERN Stack | AI/ML</p>
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
