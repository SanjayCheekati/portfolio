/**
 * Generate SEO metadata for individual projects
 * This is useful when you create individual project pages in the future
 */

export function getProjectSEO(project) {
  if (!project) return null

  const title = `${project.title} — Project by Sanjay Cheekati`
  const description = project.desc || project.fullDesc?.slice(0, 160)
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const canonical = `/projects/${slug}`
  const image = `https://sanjaycheekati.dev/og-image.png` // Could be project-specific in future

  return {
    title,
    description,
    canonical,
    image,
    type: 'article',
    article: {
      publishedTime: `${project.year}-01-01`,
      author: 'Sanjay Cheekati',
      tags: project.tech
    }
  }
}

/**
 * SEO data for main sections
 */
export const sectionSEO = {
  home: {
    title: 'Sanjay Cheekati — Full Stack Developer (MERN | AI/ML)',
    description: 'Portfolio of Sanjay Cheekati — Full Stack Developer building modern web apps, AI projects, and scalable systems.',
    canonical: '/'
  },
  projects: {
    title: 'Projects — AI, MERN, Web Apps by Sanjay Cheekati',
    description: 'Explore full-stack projects by Sanjay Cheekati including BERT toxicity detection, MERN applications, genetic algorithms, and modern web tools.',
    canonical: '/projects'
  },
  contact: {
    title: 'Contact — Hire or Collaborate with Sanjay Cheekati',
    description: 'Get in touch with Sanjay Cheekati for full-stack development opportunities, collaborations, or freelance projects. Available from January 2026.',
    canonical: '/contact'
  },
  skills: {
    title: 'Skills & Expertise — Sanjay Cheekati',
    description: 'Technical skills and expertise of Sanjay Cheekati in MERN stack, AI/ML, Python, React, Node.js, and modern web development.',
    canonical: '/skills'
  }
}
