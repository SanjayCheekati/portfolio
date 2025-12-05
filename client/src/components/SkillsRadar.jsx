import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function SkillsRadar() {
  const canvasRef = useRef(null)
  
  const skills = [
    { name: 'JavaScript', value: 90 },
    { name: 'React', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'MongoDB', value: 75 },
    { name: 'CSS/Tailwind', value: 88 },
    { name: 'Git', value: 82 }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = 120
    const numSkills = skills.length

    let animationProgress = 0
    let animationFrameId

    const drawRadarChart = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background circles
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (maxRadius / 5) * i, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw axes
      skills.forEach((_, index) => {
        const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2
        const x = centerX + Math.cos(angle) * maxRadius
        const y = centerY + Math.sin(angle) * maxRadius
        
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw skill polygon
      ctx.beginPath()
      skills.forEach((skill, index) => {
        const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2
        const radius = (skill.value / 100) * maxRadius * progress
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.closePath()
      
      // Fill
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius)
      gradient.addColorStop(0, 'rgba(14, 165, 164, 0.4)')
      gradient.addColorStop(1, 'rgba(124, 58, 237, 0.2)')
      ctx.fillStyle = gradient
      ctx.fill()
      
      // Stroke
      ctx.strokeStyle = '#06b6d4'
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw points
      skills.forEach((skill, index) => {
        const angle = (Math.PI * 2 * index) / numSkills - Math.PI / 2
        const radius = (skill.value / 100) * maxRadius * progress
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = '#06b6d4'
        ctx.fill()
      })
    }

    const animate = () => {
      if (animationProgress < 1) {
        animationProgress += 0.02
        drawRadarChart(animationProgress)
        animationFrameId = requestAnimationFrame(animate)
      } else {
        drawRadarChart(1)
      }
    }

    animate()

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <motion.canvas
        ref={canvasRef}
        width={300}
        height={300}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>{skill.name}</span>
            <span className="text-slate-400">({skill.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}
