import { Reveal } from "@/components/reveal"
import { quickFacts } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="bg-[#e6eaf0] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Intro card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-[#e5e7eb] bg-[#f1f4f8] p-8 shadow-sm">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#0b0d10]/50">
                About
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl">
                Engineering across software, AI, and silicon.
              </h2>
              <p className="mt-5 leading-relaxed text-[#6b7280]">
                I&apos;m a Computer Science and Electrical Engineering student at Purdue, drawn to
                systems that sit at the intersection of software, AI, and hardware. My work spans
                backend and systems engineering, AI-driven tools, and embedded development — from
                custom compilers and shells to AI agents, telemetry and benchmarking pipelines, FPGA
                designs, and analog hardware.
              </p>
              <p className="mt-4 leading-relaxed text-[#6b7280]">
                Right now I&apos;m focused on applying AI to real-world engineering workflows —
                embedded software, developer tooling, automation, and robotics-adjacent systems.
                I&apos;m most drawn to work where strong software engineering meets hardware
                awareness, and where AI makes complex technical systems more usable and scalable.
              </p>
            </div>
          </Reveal>

          {/* Quick facts */}
          <div className="grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-[#e5e7eb] bg-[#f1f4f8] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7dd3fc]/50 hover:shadow-md">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#0b0d10]/40">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-[#111827]">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
