import React from 'react'
import { Card, CardBody, Chip, Divider, Link } from '@nextui-org/react'
import { FiAward, FiStar, FiExternalLink } from 'react-icons/fi'

const achievements = [
  {
    title: 'Coding Excellence',
    desc: 'Solved 200+ problems across multiple coding platforms',
    icon: <FiStar />
  },
  {
    title: 'Hackathon Winner',
    desc: 'Won Consolidation Prize in HACKSAVY(MGIT) - National Level Hackathon 2025',
    icon: <FiAward />
  },
  {
    title: 'Tech Events',
    desc: 'Actively participating in tech events, workshops and hackathons',
    icon: <FiAward />
  },
  {
    title: 'AI/ML Certification',
    desc: 'Secured AI/ML Level-5 Certification from NSDC',
    icon: <FiStar />
  }
]

const certifications = [
  {
    title: 'AI/ML Level 5 Certification',
    organization: 'National Skill Development Corporation (NSDC) - Skill India',
    date: '2025',
    credentialUrl: '#'
  },
  {
    title: 'Python Essentials',
    organization: 'Cisco Networking Academy',
    date: '2024',
    credentialUrl: '#'
  },
  {
    title: 'HTML, CSS, JavaScript Certifications',
    organization: 'Infosys Springboard',
    date: '2024',
    credentialUrl: '#'
  },
  {
    title: 'SQL',
    organization: 'Dev Gym',
    date: '2024',
    credentialUrl: '#'
  },
  {
    title: 'Introduction to Data Science',
    organization: 'Cisco Networking Academy',
    date: '2024',
    credentialUrl: '#'
  },
  {
    title: 'Salesforce Developer Virtual Internship',
    organization: 'Salesforce',
    date: '2024',
    credentialUrl: '#'
  }
]

export default function Achievements() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Achievements Section */}
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow border-2 border-default-200">
              <CardBody className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-default-600">{achievement.desc}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <Divider className="my-12" />
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow border-2 border-default-200">
              <CardBody className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-default-600 mb-1">{cert.organization}</p>
                    <p className="text-xs text-default-500">{cert.date}</p>
                  </div>
                  <Link href={cert.credentialUrl} isExternal>
                    <FiExternalLink className="text-primary text-xl" />
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
