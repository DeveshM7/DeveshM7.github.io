"use client"

import type { ReactNode } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

/**
 * Subtle 3D tilt that follows the cursor. Transform-only (GPU-composited),
 * driven by motion values — no React re-renders on mousemove. Inert on touch
 * devices and under prefers-reduced-motion.
 */
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [3.5, -3.5]), {
    stiffness: 220,
    damping: 24,
  })
  const rotateY = useSpring(useTransform(px, [0, 1], [-3.5, 3.5]), {
    stiffness: 220,
    damping: 24,
  })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        px.set((e.clientX - rect.left) / rect.width)
        py.set((e.clientY - rect.top) / rect.height)
      }}
      onMouseLeave={() => {
        px.set(0.5)
        py.set(0.5)
      }}
    >
      {children}
    </motion.div>
  )
}
