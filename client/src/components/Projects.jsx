import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Button, Chip, Link, Divider } from '@nextui-org/react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'ML', 'Web', 'Live']

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true
    if (filter === 'ML') return project.tech.some(t => ['Machine Learning', 'BERT', 'Transformers', 'NLP', 'NSGA-II', 'Python'].includes(t))
    if (filter === 'Web') return project.tech.some(t => ['React', 'Node.js', 'Express', 'JavaScript'].includes(t))
    if (filter === 'Live') return project.status === 'Live'
    return true
  })

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
        <p className="text-default-600 text-lg max-w-2xl mx-auto">
          Innovative solutions combining modern technology with practical applications
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            color={filter === cat ? 'primary' : 'default'}
            variant={filter === cat ? 'solid' : 'bordered'}
            size="sm"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex-col items-start gap-2 pb-0">
              <div className="flex justify-between w-full">
                <Chip 
                  color={project.status === 'Live' ? 'success' : project.status === 'Completed' ? 'primary' : 'warning'}
                  size="sm"
                  variant="flat"
                >
                  {project.status}
                </Chip>
                <span className="text-sm text-default-500">{project.year}</span>
              </div>
              <h3 className="text-lg font-bold mt-2">{project.title}</h3>
            </CardHeader>
            
            <CardBody className="py-4">
              <p className="text-default-600 text-sm mb-4">{project.desc}</p>
              
              <Divider className="my-3" />
              
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 4).map((tech) => (
                  <Chip key={tech} size="sm" variant="flat" className="text-xs">
                    {tech}
                  </Chip>
                ))}
                {project.tech.length > 4 && (
                  <Chip size="sm" variant="flat" className="text-xs">
                    +{project.tech.length - 4}
                  </Chip>
                )}
              </div>
            </CardBody>
            
            <CardFooter className="gap-2 pt-0">
              {project.github && (
                <Button
                  as={Link}
                  href={project.github}
                  isExternal
                  size="sm"
                  variant="bordered"
                  startContent={<FiGithub />}
                  className="flex-1"
                >
                  Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  as={Link}
                  href={project.liveUrl}
                  isExternal
                  size="sm"
                  color="primary"
                  startContent={<FiExternalLink />}
                  className="flex-1"
                >
                  Live Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center mt-12">
        <Button
          as={Link}
          href="https://github.com/SanjayCheekati"
          isExternal
          variant="bordered"
          size="lg"
          startContent={<FiGithub />}
        >
          Explore More on GitHub
        </Button>
      </div>
    </div>
  )
}
