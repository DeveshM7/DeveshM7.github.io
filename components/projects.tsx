"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { projects } from "@/lib/data"

// Display order of the project tiles (left→right, top→bottom).
const tileOrder = [
  "gesture-controlled-game",
  "advanced-custom-bash-shell",
  "heart-rate-sensor",
  "audio-equalizer",
  "lunar-lander-game",
  "electric-piano",
  "simple-c-compiler",
  "finfet-tcad-simulation",
]

const orderedProjects = [
  ...tileOrder
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p)),
  // Append any projects not listed above so none are ever dropped.
  ...projects.filter((p) => !tileOrder.includes(p.slug)),
]

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="projects" className="bg-[#e6eaf0] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A range of systems work — from FPGA hardware and compilers to computer vision and embedded LLM research."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project, i) => (
            <Reveal as="article" key={project.slug} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group h-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f1f4f8] shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  {/* Project image — TODO: replace images in /public/projects */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0d10]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                        project.image.endsWith(".svg") ? "object-contain" : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[#7dd3fc] transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  <div className="p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#7dd3fc]/90 [text-shadow:0_0_1px_rgba(0,0,0,0.1)]">
                      <span className="text-[#0b0d10]/45">{project.category}</span>
                    </p>
                    <h3 className="mt-2 flex items-center justify-between gap-2 text-lg font-semibold text-[#111827]">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-[#0b0d10]/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#7dd3fc]" />
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6b7280]">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[#e5e7eb] bg-[#f7f8fa] px-2.5 py-0.5 text-[11px] font-medium text-[#374151]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
