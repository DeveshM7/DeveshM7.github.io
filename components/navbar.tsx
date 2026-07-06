"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { navLinks, contactLinks } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: highlight the nav link of whichever section is crossing the
  // middle band of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0b0d10]/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#f5f7fa] sm:text-base"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/purdue-logo.jpg"
              alt="Purdue University"
              className="h-full w-full object-contain"
            />
          </span>
          Devesh Maheshwari
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-[#7dd3fc] after:transition-transform after:duration-300 hover:text-[#f5f7fa] hover:after:scale-x-100",
                active === link.href ? "text-[#f5f7fa] after:scale-x-100" : "text-[#aeb6c2]",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={contactLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#f5f7fa] transition-all hover:border-[#7dd3fc]/50 hover:bg-[#7dd3fc]/10"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#f5f7fa] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0b0d10]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-[#aeb6c2] transition-colors hover:bg-white/5 hover:text-[#f5f7fa]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={contactLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-[#f5f7fa]"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
