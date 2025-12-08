import React from 'react'
import { Card, CardBody, Chip } from '@nextui-org/react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'NextUI', 'Vite']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'SQL']
  },
  {
    category: 'ML/AI',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis']
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Vercel']
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
