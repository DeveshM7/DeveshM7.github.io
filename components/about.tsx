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
                Engineering across circuits, embedded systems, and AI.
              </h2>
              <p className="mt-5 leading-relaxed text-[#6b7280]">
                I&apos;m an Electrical Engineering and Computer Science student at Purdue with a
                hardware-leaning focus — most at home where circuits, embedded systems, and
                intelligent software meet. My work spans analog and digital circuit design, FPGA and
                embedded development, and AI: optical sensor front-ends and active filters, an FPGA
                game in SystemVerilog, gesture-controlled firmware on a microcontroller, semiconductor
                device simulation, and research benchmarking LLMs for embedded software.
              </p>
              <p className="mt-4 leading-relaxed text-[#6b7280]">
                I&apos;m comfortable taking a system from schematic to bench — designing and
                simulating circuits, bringing up microcontrollers and peripherals, and validating real
                hardware against theory with oscilloscopes and lab instruments. Right now I&apos;m
                focused on embedded systems and applying AI to real engineering problems, drawn to
                rigorous work where solid electrical fundamentals meet capable software.
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
