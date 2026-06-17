import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { research } from "@/lib/data"
import { FileText, ArrowRight } from "lucide-react"

export function Research() {
  return (
    <section id="research" className="bg-[#e6eaf0] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#0b0d10]/50">
            Research
          </p>
          <h2 className="mb-10 text-balance text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
            Published research
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-[#0b0d10] shadow-md">
            {/* subtle grid + accent glow */}
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-50" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 85% 0%, rgba(125,211,252,0.10), transparent 70%)",
              }}
            />

            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
              {/* Left — paper framing */}
              <div className="flex flex-col">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#7dd3fc]">
                    {research.venue}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#7dd3fc]/40 bg-[#7dd3fc]/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#7dd3fc]">
                    {research.role}
                  </span>
                </div>

                <h3 className="text-balance text-2xl font-semibold leading-snug text-[#f5f7fa] sm:text-3xl">
                  {research.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#aeb6c2]/80">
                  {research.authors.map((name, i) => (
                    <span key={name}>
                      <span
                        className={
                          name === "Devesh Maheshwari"
                            ? "font-semibold text-[#f5f7fa]"
                            : undefined
                        }
                      >
                        {name}
                      </span>
                      {i < research.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                <p className="mt-5 text-pretty leading-relaxed text-[#aeb6c2]">
                  {research.summary}
                </p>

                {/* stat chips */}
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {research.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                    >
                      <div className="text-xl font-semibold text-[#7dd3fc]">{stat.value}</div>
                      <div className="mt-1 text-[11px] leading-tight text-[#aeb6c2]/80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={research.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/40 bg-[#7dd3fc]/10 px-5 py-2.5 text-sm font-semibold text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/70 hover:bg-[#7dd3fc]/20 hover:shadow-[0_0_22px_rgba(125,211,252,0.18)]"
                  >
                    Read the full write-up
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={research.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
                  >
                    <FileText className="h-4 w-4" />
                    Paper (PDF)
                  </a>
                </div>
              </div>

              {/* Right — highlight chart */}
              <figure className="flex flex-col justify-center">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
                  <Image
                    src={research.highlight.src}
                    alt={research.highlight.alt}
                    width={2568}
                    height={1239}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="h-auto w-full rounded-lg"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-snug text-[#aeb6c2]/70">
                  {research.highlight.caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
