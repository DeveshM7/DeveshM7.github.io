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
                I build intelligent systems that span the full stack — from LLM-powered workflows
                and full-stack applications down to compilers, FPGA designs, and embedded firmware.
                I&apos;m drawn to problems where rigorous engineering meets real-world impact.
              </p>
              <p className="mt-4 leading-relaxed text-[#6b7280]">
                Currently a senior at Purdue, I split my time between research on embedded LLM
                benchmarking and hands-on internships at companies building platforms, AI tooling,
                and developer infrastructure.
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
