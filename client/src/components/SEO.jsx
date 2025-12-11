import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  canonical, 
  image = 'https://sanjaycheekati.dev/og-image.png',
  type = 'website',
  author = 'Sanjay Cheekati'
}) {
  const siteUrl = 'https://sanjaycheekati.dev'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  const fullTitle = title || 'Sanjay Cheekati — Full Stack Developer (MERN | AI/ML)'
  const fullDescription = description || 'Portfolio of Sanjay Cheekati — Full Stack Developer building modern web apps, AI projects, and scalable systems.'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={`${fullTitle} - Preview`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@sanjaycheekati" />
    </Helmet>
  )
}
