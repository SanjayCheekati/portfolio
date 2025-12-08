import React from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
