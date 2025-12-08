import React from 'react'
import { Card, CardBody, Chip, Divider } from '@nextui-org/react'
import { FiAward, FiStar } from 'react-icons/fi'

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

export default function Achievements() {
  return (
    <section className="py-16 bg-default-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}
