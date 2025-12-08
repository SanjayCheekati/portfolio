import React, { useState } from 'react'
import { Card, CardBody, Input, Textarea, Button, Link } from '@nextui-org/react'
import axios from 'axios'
import { FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiSend, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('sending')
    try {
      await axios.post('/api/contact', form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      console.error('Contact form error:', err)
      const errorMsg = err.response?.data?.error || 'Unknown error occurred'
      alert(`ERROR: ${errorMsg}\n\nCheck browser console for details`)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
      
      <p className="text-default-600 text-center mb-12 text-lg max-w-2xl mx-auto">
        Open to full-time SDE roles and internship opportunities starting January 2026. Let's discuss how I can contribute to your team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          
          <Card isPressable as={Link} href="mailto:sanjaycheekati83@gmail.com" className="hover:scale-105 transition-transform">
            <CardBody className="flex-row items-center gap-4">
              <div className="p-3 bg-primary-50 rounded-lg">
                <FiMail className="text-xl text-primary" />
              </div>
              <div>
                <p className="text-sm text-default-500">Email Me</p>
                <p className="font-medium">sanjaycheekati83@gmail.com</p>
              </div>
            </CardBody>
          </Card>

          <Card isPressable as={Link} isExternal href="https://www.linkedin.com/in/sanjaycheekati/" className="hover:scale-105 transition-transform">
            <CardBody className="flex-row items-center gap-4">
              <div className="p-3 bg-primary-50 rounded-lg">
                <FiLinkedin className="text-xl text-primary" />
              </div>
              <div>
                <p className="text-sm text-default-500">Connect on LinkedIn</p>
                <p className="font-medium">linkedin.com/in/sanjaycheekati</p>
              </div>
            </CardBody>
          </Card>

          <Card isPressable as={Link} isExternal href="https://github.com/SanjayCheekati/" className="hover:scale-105 transition-transform">
            <CardBody className="flex-row items-center gap-4">
              <div className="p-3 bg-default-100 rounded-lg">
                <FiGithub className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-default-500">View GitHub</p>
                <p className="font-medium">github.com/SanjayCheekati</p>
              </div>
            </CardBody>
          </Card>

          <Card isPressable as={Link} href="tel:+919440543283" className="hover:scale-105 transition-transform">
            <CardBody className="flex-row items-center gap-4">
              <div className="p-3 bg-success-50 rounded-lg">
                <FiPhone className="text-xl text-success" />
              </div>
              <div>
                <p className="text-sm text-default-500">Call Me</p>
                <p className="font-medium">+91 9440543283</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardBody className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Your Name"
                placeholder="Enter your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                startContent={<FiUser className="text-default-400" />}
                isRequired
              />

              <Input
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                isInvalid={!!errors.email}
                errorMessage={errors.email}
                startContent={<FiMail className="text-default-400" />}
                isRequired
              />

              <Textarea
                label="Your Message"
                placeholder="Enter your message"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                isInvalid={!!errors.message}
                errorMessage={errors.message}
                minRows={4}
                startContent={<FiMessageSquare className="text-default-400 mt-3" />}
                isRequired
              />

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full"
                isLoading={status === 'sending'}
                startContent={status !== 'sending' && <FiSend />}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'sent' && (
                <Card className="bg-success-50 border-success">
                  <CardBody>
                    <p className="text-success text-center font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
                  </CardBody>
                </Card>
              )}

              {status === 'error' && (
                <Card className="bg-danger-50 border-danger">
                  <CardBody>
                    <p className="text-danger text-center font-medium">✗ Failed to send message. Please try again or email directly.</p>
                  </CardBody>
                </Card>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
