import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiEye } from 'react-icons/fi'

export default function VisitorCounter() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        // Check if this visitor has been counted in this session
        const hasVisited = sessionStorage.getItem('hasVisited')
        
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
        
        if (!hasVisited) {
          // Increment the counter
          const response = await fetch(`${API_URL}/api/visitors/increment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const data = await response.json()
          setCount(data.count)
          sessionStorage.setItem('hasVisited', 'true')
        } else {
          // Just fetch the current count
          const response = await fetch(`${API_URL}/api/visitors`)
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error)
        // Fallback to local storage counter if API fails
        const localCount = parseInt(localStorage.getItem('visitorCount') || '0')
        setCount(localCount)
      } finally {
        setLoading(false)
      }
    }

    incrementVisitor()
  }, [])

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-slate-500">
        <FiEye className="text-lg animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    )
  }

  return (
    <motion.div
      className="flex items-center gap-2 text-slate-400"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FiEye className="text-lg text-cyan-400" />
      <span className="text-sm">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold text-cyan-400"
        >
          {formatNumber(count)}
        </motion.span>
        <span className="ml-1">visitors</span>
      </span>
    </motion.div>
  )
}
