"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { ChevronDown } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { HeroBackground } from "@/components/hero-background"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#0b0d10] px-4 pt-16"
    >
      {/* Animated constellation background */}
      <HeroBackground />
      {/* Soft radial vignette for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(125,211,252,0.05), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile image — TODO: replace /profile.png with your photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="absolute -inset-2 rounded-full bg-[#7dd3fc]/10 blur-xl" aria-hidden="true" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/15 shadow-2xl sm:h-36 sm:w-36">
            <Image
              src="/profile.png"
              alt="Portrait of Devesh Maheshwari"
              fill
              priority
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-semibold tracking-tight text-[#f5f7fa] sm:text-6xl"
        >
          Devesh Maheshwari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-[#f5f7fa]/90 sm:text-xl"
        >
          Computer Science &amp; Electrical Engineering @ Purdue
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-2 font-mono text-sm tracking-wide text-[#aeb6c2]"
        >
          AI/ML • Embedded Systems • Full-Stack Engineering • Research
        </motion.p>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-7 flex items-center gap-3"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            const external = social.href.startsWith("http")
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#aeb6c2] transition-all duration-300 hover:-translate-y-1 hover:border-[#7dd3fc]/50 hover:text-[#7dd3fc] hover:shadow-[0_0_20px_rgba(125,211,252,0.25)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="mt-8 max-w-2xl text-pretty leading-relaxed text-[#aeb6c2]"
        >
          I&apos;m a Purdue senior pursuing Computer Science and Electrical Engineering, interested
          in building intelligent systems across software, AI, and embedded platforms. My work spans
          LLM workflows, full-stack tools, compiler systems, FPGA projects, computer vision, and
          embedded AI research.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#aeb6c2]/70 transition-colors hover:text-[#7dd3fc]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.span
          className="block"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  )
}
