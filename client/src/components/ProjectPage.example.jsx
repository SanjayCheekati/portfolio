/**
 * Example: How to implement SEO for individual project pages
 * 
 * When you add routing (e.g., React Router) and create individual project pages,
 * use this pattern:
 */

import React from 'react'
import { useParams } from 'react-router-dom' // Add react-router-dom when implementing
import SEO from '../components/SEO'
import { projects } from '../data/projects'
import { getProjectSEO } from '../utils/seo'

export default function ProjectPage() {
  const { slug } = useParams()
  
  // Find project by slug
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === slug
  )

  if (!project) {
    return <div>Project not found</div>
  }

  const seo = getProjectSEO(project)

  return (
    <>
      {/* Apply SEO specific to this project */}
      <SEO {...seo} />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-default-600 mb-8">{project.fullDesc}</p>
        
        {/* Project details... */}
      </div>
    </>
  )
}

/**
 * Example routes to add to your router:
 * 
 * /projects/puretext
 * /projects/bert-toxicity-detection
 * /projects/genetic-algorithm-clustering
 * /projects/portfolio-platform
 * 
 * Each will have unique title, description, and canonical URL
 */
