const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const app = express()

// Visitor counter file path
const VISITOR_COUNT_FILE = path.join(__dirname, 'visitor-count.json')

// Initialize visitor count file if it doesn't exist
if (!fs.existsSync(VISITOR_COUNT_FILE)) {
  fs.writeFileSync(VISITOR_COUNT_FILE, JSON.stringify({ count: 0, lastUpdated: new Date().toISOString() }))
}

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5174',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

const PORT = process.env.PORT || 5000

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Visitor count endpoints
app.get('/api/visitors', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(VISITOR_COUNT_FILE, 'utf8'))
    res.json({ count: data.count })
  } catch (error) {
    console.error('Error reading visitor count:', error)
    res.json({ count: 0 })
  }
})

app.post('/api/visitors/increment', (req, res) => {
  try {
    let data = JSON.parse(fs.readFileSync(VISITOR_COUNT_FILE, 'utf8'))
    data.count += 1
    data.lastUpdated = new Date().toISOString()
    fs.writeFileSync(VISITOR_COUNT_FILE, JSON.stringify(data, null, 2))
    res.json({ count: data.count })
  } catch (error) {
    console.error('Error incrementing visitor count:', error)
    res.status(500).json({ error: 'Failed to increment count' })
  }
})

// Projects endpoint (returns static projects)
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'K-means & NSGA-II for HHC',
      desc: 'Ongoing research project combining clustering and multi-objective optimization.',
      tech: ['Python', 'Machine Learning', 'NSGA-II'],
      github: 'https://github.com/SanjayCheekati/K-means_NSGA-II_HHC',
      status: 'Ongoing'
    },
    {
      id: 2,
      title: 'Sensitive Content Moderation',
      desc: 'AI-powered content moderation using BERT.',
      tech: ['Python', 'BERT', 'NLP'],
      github: 'https://github.com/SanjayCheekati/Sensitive-Content-Moderation-using-BERT',
      status: 'Completed'
    }
  ])
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      ok: false, 
      error: 'All fields are required' 
    })
  }
  
  // Email validation
  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Invalid email format' 
    })
  }
  
  // Log to console (in production, you'd save to database or send email)
  console.log('📧 Contact form submission received:')
  console.log('  Name:', name)
  console.log('  Email:', email)
  console.log('  Message:', message)
  console.log('  Timestamp:', new Date().toISOString())
  console.log('---')
  
  // TODO: In production, integrate with email service (SendGrid, Nodemailer, etc.)
  // or save to database
  
  return res.json({ 
    ok: true, 
    message: 'Message received successfully' 
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Optional: MongoDB connection
if (process.env.MONGODB_URI) {
  const mongoose = require('mongoose')
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.warn('⚠️  MongoDB connection failed:', err.message))
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`)
})
