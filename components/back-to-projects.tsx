"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

/**
 * Back link for project detail pages.
 * Uses browser back ONLY when we know the visitor navigated here from within
 * the site (a sessionStorage flag set by the home page) — so their scroll
 * position in the projects grid is restored. Visitors who landed directly on
 * a project page (e.g. from LinkedIn or a shared link) are routed to the
 * projects section instead of being bounced back off-site.
 */
export function BackToProjects() {
  const router = useRouter()

  const handleClick = () => {
    const cameFromSite =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("visited-home") === "1" &&
      window.history.length > 1

    if (cameFromSite) {
      router.back()
    } else {
      router.push("/#projects")
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#aeb6c2] transition-colors hover:text-[#f5f7fa]"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to projects
    </button>
  )
}
