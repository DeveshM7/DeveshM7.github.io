"use client"

import { motion, useReducedMotion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { skillCategories } from "@/lib/data"

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="bg-[#e6eaf0] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technical Skills"
          description="A cross-disciplinary stack spanning languages, AI/ML, backend engineering, infrastructure, and hardware."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-[#e5e7eb] bg-[#f1f4f8] p-6 transition-colors duration-300 hover:border-[#7dd3fc]/50 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-[#f1f4f8] text-[#0b0d10] transition-all duration-300 group-hover:border-[#7dd3fc]/40 group-hover:text-[#0b0d10] group-hover:shadow-[0_0_16px_rgba(125,211,252,0.2)]">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <h3 className="text-base font-semibold text-[#111827]">{category.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-[#e5e7eb] bg-[#f1f4f8] px-3 py-1 text-xs font-medium text-[#374151] transition-colors group-hover:border-[#e5e7eb]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
