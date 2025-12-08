import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { FiMapPin, FiCode } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function ProfileSummary() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <Card>
          <CardBody className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-lg border-2 border-primary/20">
                  <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="url(#profileGrad)" opacity="0.2"/>
                    <path d="M25 40 L25 55 L30 55 L30 75 L70 75 L70 55 L75 55 L75 40 Z" fill="currentColor" className="text-primary" opacity="0.8"/>
                    <rect x="32" y="50" width="36" height="22" rx="2" fill="currentColor" className="text-secondary" opacity="0.6"/>
                    <circle cx="40" cy="30" r="8" fill="currentColor" className="text-warning" opacity="0.7"/>
                    <circle cx="60" cy="30" r="8" fill="currentColor" className="text-warning" opacity="0.7"/>
                    <defs>
                      <linearGradient id="profileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <Chip color="success" size="sm" className="absolute -bottom-2 -right-2">
                  Open to work
                </Chip>
              </div>

              {/* Info */}
              <div className="flex-1 text-left w-full">
                <h2 className="text-3xl font-bold mb-2">Cheekati Sanjay Goud</h2>
                <p className="text-primary font-semibold mb-2">Software Development Engineer</p>
                <div className="flex items-center gap-2 text-sm text-default-600 mb-4 flex-wrap">
                  <FiMapPin />
                  <span>Hyderabad, India</span>
                  <span>•</span>
                  <span>B.Tech CS</span>
                  <span>•</span>
                  <span>Graduating June 2026</span>
                </div>

                {/* Introduction */}
                <div className="text-default-700 text-sm mb-4 leading-relaxed space-y-2 max-w-3xl">
                  <p>
                    <span className="font-semibold">Hey! I'm Sanjay,</span> currently pursuing B.Tech in Computer Science at Mahatma Gandhi Institute of Technology (MGIT). Previously studied Diploma at T.R.R College of Technology.
                  </p>
                  <p>
                    I'm passionate about full-stack development and machine learning, and I love vibe coding! 💻
                  </p>
                  <p>
                    I want to apply my knowledge in real-world applications. As an enthusiastic learner, I'm open to internships and job opportunities.
                  </p>
                  <p>
                    Love participating in hackathons and tech events! 🚀
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 flex-wrap">
                  <Chip variant="flat" startContent={<FiCode />}>Python</Chip>
                  <Chip variant="flat" startContent={<FiCode />}>React</Chip>
                  <Chip variant="flat" startContent={<FiCode />}>Node.js</Chip>
                  <Chip variant="flat" startContent={<SiLeetcode />}>ML/AI</Chip>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
