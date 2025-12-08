import React from 'react'
import { Card, CardBody, Divider, Chip } from '@nextui-org/react'

const timeline = [
  {
    year: '2026',
    title: 'Seeking SDE Role',
    institution: 'Available from January 2026',
    desc: 'Open to full-time opportunities in software development',
    highlights: [
      'Full Stack Development expertise',
      'Machine Learning and AI experience',
      'Strong problem-solving skills',
      'Ready to contribute to innovative projects'
    ]
  },
  {
    year: '2023-2026',
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Mahatma Gandhi Institute of Technology (MGIT), Hyderabad',
    desc: 'Pursuing Bachelor of Technology with focus on Full Stack Development and Machine Learning',
    highlights: [
      'CGPA: 8.03',
      'Expected Graduation: June 2026',
      'Specialized in MERN Stack Development',
      'Machine Learning and AI coursework',
      'Built multiple full-stack production applications',
      'Active in coding competitions and hackathons',
      'Strong foundation in Data Structures and Algorithms'
    ]
  },
  {
    year: '2020-2023',
    title: 'Diploma in Computer Science and Engineering',
    institution: 'T.R.R College of Technology, Hyderabad',
    desc: 'Completed Diploma with strong foundation in programming and software development',
    highlights: [
      'CGPA: 9.04',
      'Graduated: 2023',
      'Core Programming: C, C++, Java, Python',
      'Database Management: SQL',
      'Web Development fundamentals',
      'Software Engineering principles',
      'Strong academic performance'
    ]
  }
]

export default function Timeline() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Education & Journey</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {timeline.map((item, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardBody className="p-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center">
                    <span className="font-bold text-primary text-sm text-center px-2">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary font-semibold mb-3">{item.institution}</p>
                  <p className="text-default-600 mb-4">{item.desc}</p>
                  {item.highlights && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-default-700">Key Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Chip key={i} size="sm" variant="flat" color="primary">
                            {highlight}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
