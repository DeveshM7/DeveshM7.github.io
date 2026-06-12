import { Reveal } from "@/components/reveal"
import { contactLinks } from "@/lib/data"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function Contact() {
  return (
    <footer id="contact" className="bg-[#0b0d10] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
            Get in touch
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-[#aeb6c2]">
            Interested in AI, embedded systems, full-stack tools, or research collaboration?
            I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* TODO: replace contact links in lib/data.ts */}
            <a
              href={contactLinks.email}
              className="inline-flex items-center gap-2 rounded-full bg-[#7dd3fc] px-5 py-2.5 text-sm font-medium text-[#0b0d10] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(125,211,252,0.35)]"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="font-mono text-xs text-[#aeb6c2]/60">
            Built with Next.js, Tailwind, and curiosity.
          </p>
        </div>
      </div>
    </footer>
  )
}
