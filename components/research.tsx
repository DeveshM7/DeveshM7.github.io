import { Reveal } from "@/components/reveal"
import { research } from "@/lib/data"
import { FlaskConical } from "lucide-react"

export function Research() {
  return (
    <section id="research" className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#0b0d10]/50">
            Academia
          </p>
          <h2 className="mb-10 text-balance text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
            Research
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#0b0d10] p-8 shadow-sm sm:p-10">
            {/* subtle grid background */}
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(125,211,252,0.08), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="mb-5 flex items-start gap-4">
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#7dd3fc]">
                  <FlaskConical className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-balance text-lg font-semibold text-[#f5f7fa] sm:text-xl">
                    {research.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#aeb6c2]/80">{research.date}</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {research.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#aeb6c2]">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#7dd3fc]"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
