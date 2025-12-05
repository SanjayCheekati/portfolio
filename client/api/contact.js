// Vercel Serverless Function for Contact Form
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters' })
    }

    // Here you can integrate with email services:
    // - Resend API: https://resend.com
    // - SendGrid API
    // - Nodemailer with Gmail
    // For now, we'll just log and return success

    console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() })

    // Send email notification using Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return res.status(200).json({ 
        success: true, 
        message: 'Message received but email notification failed. API key not configured.' 
      })
    }

    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['sanjaycheekati@gmail.com', 'sanjaycheekati83@gmail.com'],
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><small>Sent from sanjaycheekati.dev contact form</small></p>
        `
      })

      if (error) {
        console.error('Resend API error:', error)
        return res.status(500).json({ 
          success: false, 
          error: 'Email failed: ' + (error.message || JSON.stringify(error))
        })
      }

      console.log('Email sent successfully:', data)
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully! I will get back to you soon.' 
      })

    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      return res.status(500).json({ 
        success: false, 
        error: 'Email error: ' + emailError.message
      })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      error: 'Failed to send message. Please try emailing directly at sanjaycheekati83@gmail.com' 
    })
  }
}
