import { useEffect, useState } from 'react'

/**
 * Hook to detect which section is currently visible in viewport
 * Updates SEO meta tags based on the active section
 */
export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setActiveSection(hash)
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial state

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return activeSection
}
