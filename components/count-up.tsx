"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "motion/react"

/**
 * Animates a numeric stat from 0 to its value the first time it scrolls into
 * view. Handles suffixes ("%", "+") and decimals ("70.6%"). Non-numeric
 * values render as-is. Runs once, via rAF — no re-render storm (one state
 * update per frame for ~1s, only while on screen).
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState<string | null>(null)

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)

  useEffect(() => {
    if (!match || !inView || reduce) return
    const target = Number.parseFloat(match[1])
    const decimals = (match[1].split(".")[1] ?? "").length
    const suffix = match[2]
    const duration = 1100
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
      setDisplay((target * eased).toFixed(decimals) + suffix)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce])

  if (!match || reduce) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{display ?? `0${match[2]}`}</span>
}
