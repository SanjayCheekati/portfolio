import React from 'react'
import { Card, CardBody, Divider } from '@nextui-org/react'

const timeline = [
  {
    year: '2026',
    title: 'Seeking SDE Role',
    institution: 'Available from January 2026',
    desc: 'Open to full-time opportunities in software development'
  },
  {
    year: '2024-2026',
    title: 'B.Tech in Computer Science',
    institution: 'Mahatma Gandhi Institute of Technology',
    desc: 'Specialized in Full Stack Development and Machine Learning'
  },
  {
    year: '2021-2024',
    title: 'Diploma in Computer Science',
    institution: 'TRR Polytechnic',
    desc: 'Foundation in programming and software development'
  }
]

export default function Timeline() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Education & Journey</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {timeline.map((item, idx) => (
          <Card key={idx}>
            <CardBody className="p-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                    <span className="font-bold text-primary">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-semibold mb-2">{item.institution}</p>
                  <p className="text-default-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
