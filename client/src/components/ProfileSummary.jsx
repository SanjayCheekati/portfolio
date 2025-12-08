import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { FiMapPin, FiCode } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function ProfileSummary() {
  return (
    <section className="py-16 bg-default-50">
      <div className="max-w-5xl mx-auto px-6">
        <Card>
          <CardBody className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center shadow-lg">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <Chip color="success" size="sm" className="absolute -bottom-2 -right-2">
                  Open to work
                </Chip>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Cheekati Sanjay Goud</h2>
                <p className="text-primary font-semibold mb-2">Software Development Engineer</p>
                <div className="flex items-center gap-2 text-sm text-default-600 mb-4 justify-center md:justify-start flex-wrap">
                  <FiMapPin />
                  <span>Hyderabad, India</span>
                  <span>•</span>
                  <span>B.Tech CS</span>
                  <span>•</span>
                  <span>Graduating June 2026</span>
                </div>

                {/* Introduction */}
                <div className="text-default-700 text-sm mb-4 leading-relaxed space-y-2">
                  <p>
                    <span className="font-semibold">Hey! I'm Sanjay,</span> currently pursuing B.Tech in Computer Science at MGIT.
                  </p>
                  <p>
                    Passionate about full-stack development and machine learning. Open to internships and job opportunities starting January 2026.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center md:justify-start flex-wrap">
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
