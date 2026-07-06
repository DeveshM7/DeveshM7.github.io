"use client"

import { useEffect, useRef } from "react"

/**
 * Subtle math/CS constellation background.
 * - Slow drifting particles connected by faint lines when near each other.
 * - Occasional low-opacity math/CS glyphs floating up.
 * - Disabled / static when prefers-reduced-motion is set.
 */

const GLYPHS = ["λ", "Σ", "∫", "{}", "01", "f(x)", "</>", "π", "∂", "∞", "Π", "≈"]

type Particle = { x: number; y: number; vx: number; vy: number }
type Glyph = { x: number; y: number; vy: number; char: string; alpha: number; size: number }

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let glyphs: Glyph[] = []
    let raf = 0
    let visible = true

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(90, Math.floor((width * height) / 16000))
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))

      const glyphCount = Math.min(14, Math.floor(width / 90))
      glyphs = Array.from({ length: glyphCount }, () => makeGlyph())
    }

    const makeGlyph = (): Glyph => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(0.08 + Math.random() * 0.14),
      char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      alpha: 0.04 + Math.random() * 0.05,
      size: 14 + Math.random() * 26,
    })

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(174,182,194,0.35)"
        ctx.fill()
      }
    }

    const render = () => {
      if (!visible) return
      ctx.clearRect(0, 0, width, height)

      // glyphs (behind the network)
      for (const g of glyphs) {
        g.y += g.vy
        if (g.y < -40) {
          Object.assign(g, makeGlyph(), { y: height + 20 })
        }
        ctx.font = `${g.size}px var(--font-geist-mono, monospace)`
        ctx.fillStyle = `rgba(174,182,194,${g.alpha})`
        ctx.fillText(g.char, g.x, g.y)
      }

      // particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(174,182,194,0.65)"
        ctx.fill()
      }

      // connecting lines
      const maxDist = 130
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.3
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(125,211,252,${opacity})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(render)
    }

    const startLoop = () => {
      cancelAnimationFrame(raf)
      if (prefersReduced) {
        drawStatic()
      } else if (visible) {
        raf = requestAnimationFrame(render)
      }
    }

    init()
    startLoop()

    const handleResize = () => {
      cancelAnimationFrame(raf)
      init()
      startLoop()
    }

    // Pause the animation loop whenever the hero is scrolled out of view —
    // otherwise it burns CPU/battery for the entire visit.
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) {
          startLoop()
        } else {
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
