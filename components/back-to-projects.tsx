"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

/**
 * Back link for project detail pages.
 * If the user navigated here from within the site, go back so the browser
 * restores their exact previous scroll position (e.g. where they were in the
 * projects grid). Otherwise (direct visit / shared link) fall back to the
 * projects section.
 */
export function BackToProjects() {
  const router = useRouter()

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
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
