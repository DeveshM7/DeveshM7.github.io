"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { upcomingProjects } from "@/lib/data"

export function UpcomingProjects() {
  const reduce = useReducedMotion()

  return (
    <section id="upcoming" className="bg-[#e6eaf0] px-4 pt-16 pb-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="In Progress"
          title="Upcoming"
          description="Projects I'm actively building — full write-ups are coming soon."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {upcomingProjects.map((project, i) => (
            <Reveal as="article" key={project.title} delay={i * 0.08}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="h-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f1f4f8] shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0d10]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className={`object-cover ${project.imagePosition ?? "object-center"}`}
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#7dd3fc]/40 bg-[#0b0d10]/80 px-3 py-1 font-mono text-[11px] font-medium text-[#7dd3fc] backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#111827]">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-medium text-[#374151]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
