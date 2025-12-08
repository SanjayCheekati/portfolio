import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { FiMapPin, FiCode, FiUser } from 'react-icons/fi'
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
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Programmer illustration */}
                    <defs>
                      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFDBB5" />
                        <stop offset="100%" stopColor="#FFB88C" />
                      </linearGradient>
                    </defs>
                    
                    {/* Head */}
                    <circle cx="200" cy="120" r="45" fill="url(#skinGrad)" />
                    
                    {/* Hair */}
                    <path d="M 160 95 Q 160 70 200 70 Q 240 70 240 95 Q 245 80 240 100 L 160 100 Q 155 80 160 95" fill="#2D3436" />
                    
                    {/* Eyes */}
                    <circle cx="185" cy="115" r="3" fill="#2D3436" />
                    <circle cx="215" cy="115" r="3" fill="#2D3436" />
                    
                    {/* Smile */}
                    <path d="M 185 130 Q 200 138 215 130" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Neck */}
                    <rect x="185" y="160" width="30" height="15" fill="url(#skinGrad)" />
                    
                    {/* Body - Shirt */}
                    <path d="M 150 175 L 185 175 L 185 165 L 215 165 L 215 175 L 250 175 L 250 320 L 150 320 Z" fill="#0070F0" />
                    
                    {/* Collar */}
                    <path d="M 185 175 L 175 185 L 185 195" fill="#005BBB" />
                    <path d="M 215 175 L 225 185 L 215 195" fill="#005BBB" />
                    
                    {/* Arms */}
                    <rect x="120" y="185" width="30" height="100" rx="15" fill="#0070F0" />
                    <rect x="250" y="185" width="30" height="100" rx="15" fill="#0070F0" />
                    
                    {/* Laptop */}
                    <rect x="140" y="240" width="120" height="80" rx="4" fill="#34495E" />
                    <rect x="145" y="245" width="110" height="60" fill="#2ECC71" />
                    
                    {/* Code on screen */}
                    <line x1="150" y1="255" x2="180" y2="255" stroke="#FFF" strokeWidth="2" />
                    <line x1="155" y1="265" x2="190" y2="265" stroke="#FFF" strokeWidth="2" />
                    <line x1="150" y1="275" x2="175" y2="275" stroke="#FFF" strokeWidth="2" />
                    <line x1="155" y1="285" x2="195" y2="285" stroke="#FFF" strokeWidth="2" />
                    
                    {/* Hands on keyboard */}
                    <ellipse cx="135" cy="280" rx="12" ry="8" fill="url(#skinGrad)" />
                    <ellipse cx="265" cy="280" rx="12" ry="8" fill="url(#skinGrad)" />
                  </svg>
                </div>
                <Chip color="success" size="sm" className="absolute -bottom-2 -right-2">
                  Open to work
                </Chip>
              </div>

              {/* Info */}
              <div className="flex-1 text-left w-full">
                <h2 className="text-3xl font-bold mb-2 text-primary">Cheekati Sanjay Goud</h2>
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
