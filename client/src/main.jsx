import React from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { initAnalytics } from './utils/analytics'

// Initialize Google Analytics 4
initAnalytics(import.meta.env.VITE_GA_ID)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </HelmetProvider>
  </React.StrictMode>
)
