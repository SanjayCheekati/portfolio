import React from 'react'
import { Card, CardBody, Chip, Divider, Link } from '@nextui-org/react'
import { FiAward, FiStar, FiExternalLink } from 'react-icons/fi'

const achievements = [
  {
    title: 'Hackerrank Problem Solving',
    desc: '5-star rating in Problem Solving',
    icon: <FiStar />
  },
  {
    title: 'LeetCode Active',
    desc: '200+ problems solved across multiple topics',
    icon: <FiAward />
  },
  {
    title: 'Full Stack Projects',
    desc: 'Built and deployed multiple production-ready applications',
    icon: <FiAward />
  },
  {
    title: 'Open Source Contributor',
    desc: 'Active GitHub profile with multiple repositories',
    icon: <FiStar />
  }
]

const certifications = [
  {
    title: 'Full Stack Web Development',
    organization: 'Coursera',
    date: '2024',
    credentialUrl: '#'
  },
  {
    title: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI',
    date: '2023',
    credentialUrl: '#'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    organization: 'freeCodeCamp',
    date: '2023',
    credentialUrl: '#'
  },
  {
    title: 'Python for Data Science',
    organization: 'IBM',
    date: '2023',
    credentialUrl: '#'
  }
]

export default function Achievements() {
  return (
    <section className="py-16 bg-default-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Achievements Section */}
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
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
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
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
