"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { experiences } from "@/lib/data"

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduce = useReducedMotion()

  // The accent timeline draws itself in as the list scrolls through view.
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.5"],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section id="experience" className="bg-[#0b0d10] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Career" title="Experience" dark />

        <div className="relative" ref={timelineRef}>
          {/* vertical timeline: faint track + accent line that draws on scroll */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[27px] top-2 w-px bg-white/10 sm:left-[31px]"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : lineScale }}
            className="absolute bottom-0 left-[27px] top-2 w-px origin-top bg-gradient-to-b from-[#7dd3fc]/70 via-[#7dd3fc]/40 to-transparent sm:left-[31px]"
          />

          <ul className="flex flex-col gap-4">
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i
              const panelId = `exp-panel-${i}`
              const buttonId = `exp-button-${i}`
              return (
                <Reveal as="li" key={exp.company} delay={i * 0.05}>
                  <div className="relative flex gap-4 sm:gap-5">
                    {/* node + logo */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white shadow-lg">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                    </div>

                    {/* accordion tile */}
                    <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#111418] transition-colors duration-300 hover:border-[#7dd3fc]/30">
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
                        >
                          <span className="min-w-0">
                            <span className="block text-base font-semibold text-[#f5f7fa]">
                              {exp.company}
                            </span>
                            <span className="mt-0.5 block text-sm text-[#aeb6c2]">{exp.role}</span>
                            <span className="mt-1 block font-mono text-xs text-[#aeb6c2]/70">
                              {exp.date}
                            </span>
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-1 flex-shrink-0 text-[#aeb6c2]"
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={reduce ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduce ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="flex flex-col gap-2.5 border-t border-white/10 px-5 py-4">
                              {exp.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-[#aeb6c2]">
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#7dd3fc]"
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
