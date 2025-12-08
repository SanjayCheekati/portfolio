import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'NextUI']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API']
  },
  {
    category: 'ML/AI',
    skills: ['Python', 'TensorFlow', 'NLP', 'Machine Learning']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman']
  }
]

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillCategories.map((category) => (
        <Card key={category.category}>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Chip key={skill} size="sm" variant="flat">
                  {skill}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
