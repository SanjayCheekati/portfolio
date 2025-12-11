import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Spinner, Button } from '@nextui-org/react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiMoon, FiSun } from 'react-icons/fi'
import { Analytics } from '@vercel/analytics/react'
import SEO from './components/SEO'
import Hero from './components/Hero'

// Lazy load sections
const ProfileSummary = lazy(() => import('./components/ProfileSummary'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Contact = lazy(() => import('./components/Contact'))
const Timeline = lazy(() => import('./components/Timeline'))

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Initialize dark mode immediately to prevent flicker
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = savedTheme ? savedTheme === 'dark' : true
      // Set the class immediately during initialization
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return prefersDark
    }
    return true
  })

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const menuItems = [
    { name: 'Profile', href: '#profile' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Default SEO for Home Page */}
      <SEO 
        title="Sanjay Cheekati — Full Stack Developer (MERN | AI/ML)"
        description="Portfolio of Sanjay Cheekati — Full Stack Developer building modern web apps, AI projects, and scalable systems."
        canonical="/"
      />
      
      {/* Navigation */}
      <Navbar 
        isBordered
        isMenuOpen={isMobileMenuOpen}
        onMenuOpenChange={setIsMobileMenuOpen}
        classNames={{
          wrapper: "max-w-7xl",
          item: "data-[active=true]:font-semibold"
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="#" color="foreground" className="font-semibold text-xl">
              SanjayCheekati<span className="text-primary">.dev</span>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link color="foreground" href={item.href} className="text-sm font-medium">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onPress={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={item.href}
                size="lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Profile Summary Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="profile">
            <ProfileSummary />
          </section>
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Skills & Expertise</h2>
            <Skills />
          </section>
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
            <Projects />
          </section>
        </Suspense>

        {/* Achievements Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="achievements">
            <Achievements />
          </section>
        </Suspense>

        {/* Timeline Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="journey" className="max-w-7xl mx-auto px-6 py-20">
            <Timeline />
          </section>
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<div className="flex justify-center py-20"><Spinner size="lg" /></div>}>
          <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
            <Contact />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-default-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-xl mb-3">Sanjay Cheekati</h3>
              <p className="text-default-600 text-sm leading-relaxed mb-4">
                Software Development Engineer | MERN Stack & Machine Learning | Building scalable solutions with clean code | Available January 2026
              </p>
              <div className="flex items-center gap-2 text-sm text-default-600">
                <FiMapPin />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                {menuItems.map((item) => (
                  <Link key={item.name} href={item.href} color="foreground" className="block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-3 mb-4">
                <Link
                  isExternal
                  href="https://github.com/SanjayCheekati/"
                  className="w-10 h-10 flex items-center justify-center border border-default-200 rounded-lg hover:border-primary"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-lg" />
                </Link>
                <Link
                  isExternal
                  href="https://www.linkedin.com/in/sanjaycheekati/"
                  className="w-10 h-10 flex items-center justify-center border border-default-200 rounded-lg hover:border-primary"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-lg" />
                </Link>
                <Link
                  href="mailto:sanjaycheekati83@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-default-200 rounded-lg hover:border-primary"
                  aria-label="Email"
                >
                  <FiMail className="text-lg" />
                </Link>
              </div>
              <Link 
                href="mailto:sanjaycheekati83@gmail.com"
                color="foreground"
                className="flex items-center gap-2 text-sm"
              >
                <FiMail />
                sanjaycheekati83@gmail.com
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-default-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-default-600">
              <p>© {new Date().getFullYear()} Cheekati Sanjay Goud. All rights reserved.</p>
              <p>Built with React & NextUI</p>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}
