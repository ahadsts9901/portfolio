'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let frame = 0
    let width = 0
    let height = 0
    const pointer = { x: -1000, y: -1000 }
    const particles = Array.from({ length: 48 }, (_, index) => ({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: index % 5 === 0 ? 1.5 : 0.8,
    }))

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const move = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const render = () => {
      context.clearRect(0, 0, width, height)
      for (const particle of particles) {
        const dx = particle.x - pointer.x
        const dy = particle.y - pointer.y
        const distance = Math.hypot(dx, dy)
        if (distance < 120 && distance > 0) {
          particle.x += (dx / distance) * 0.45
          particle.y += (dy / distance) * 0.45
        }
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < -10 || particle.x > width + 10) particle.vx *= -1
        if (particle.y < -10 || particle.y > height + 10) particle.vy *= -1
        context.fillStyle = 'rgba(255,255,255,0.42)'
        context.fillRect(particle.x, particle.y, particle.size, particle.size)
      }
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i]
          const b = particles[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)
          if (distance < 105) {
            context.strokeStyle = `rgba(255,255,255,${0.11 * (1 - distance / 105)})`
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }
      frame = requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="ambient-canvas" />
}

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    const move = (event: PointerEvent) => {
      cursor.animate(
        { transform: `translate3d(${event.clientX - 10}px, ${event.clientY - 10}px, 0)` },
        { duration: 350, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.2,1)' },
      )
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={cursorRef} aria-hidden="true" className="cursor-follower" />
}

export function ExperienceLayer() {
  return <><AmbientCanvas /><CursorFollower /></>
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export function Magnetic({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`magnetic ${className}`}>{children}</div>
}

export function InteractiveBody() {
  useEffect(() => {
    const body = document.body
    const onOver = (event: Event) => {
      if ((event.target as HTMLElement).closest('a, button, [data-hover]')) body.classList.add('cursor-active')
    }
    const onOut = (event: Event) => {
      if ((event.target as HTMLElement).closest('a, button, [data-hover]')) body.classList.remove('cursor-active')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])
  return null
}

export function InteractionScripts() {
  return <><ExperienceLayer /><InteractiveBody /></>
}

export default Reveal

