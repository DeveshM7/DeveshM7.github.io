import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-[#0b0d10] px-4 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#7dd3fc]">Error 404</p>
      <h1 className="mt-4 text-6xl font-semibold tracking-tight text-[#f5f7fa] sm:text-8xl">
        Lost in space.
      </h1>
      <p className="mt-6 max-w-md text-pretty leading-relaxed text-[#aeb6c2]">
        This page doesn&apos;t exist — it may have been moved, renamed, or never launched.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/40 bg-[#7dd3fc]/10 px-6 py-3 text-sm font-semibold text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/70 hover:bg-[#7dd3fc]/20 hover:shadow-[0_0_22px_rgba(125,211,252,0.18)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </main>
  )
}
