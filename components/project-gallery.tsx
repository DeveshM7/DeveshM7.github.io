"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export type GalleryImage = { src: string; caption: string }
export type GalleryGroup = { title?: string; images: GalleryImage[] }

/**
 * Renders one or more labeled groups of project images as thumbnail grids.
 * Clicking any thumbnail opens a full-screen lightbox with caption and
 * prev/next navigation across all images.
 */
export function ProjectGallery({ groups }: { groups: GalleryGroup[] }) {
  // Flatten every image so the lightbox can page across the whole set.
  const flat = groups.flatMap((g) => g.images)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % flat.length)),
    [flat.length],
  )
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + flat.length) % flat.length)),
    [flat.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [openIndex, close, next, prev])

  const indexOf = (img: GalleryImage) => flat.indexOf(img)
  const active = openIndex === null ? null : flat[openIndex]

  return (
    <>
      <div className="flex flex-col gap-10">
        {groups.map((group, gi) => (
          <div key={group.title ?? gi}>
            {group.title && (
              <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.15em] text-[#7dd3fc]">
                {group.title}
              </h3>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.images.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#111418]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(indexOf(img))}
                    aria-label={`View ${img.caption}`}
                    className="group relative block aspect-[4/3] w-full cursor-zoom-in"
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </button>
                  <figcaption className="px-4 py-3 text-sm leading-snug text-[#aeb6c2]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5f7fa] transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          {flat.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5f7fa] transition-colors hover:bg-white/10 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5f7fa] transition-colors hover:bg-white/10 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[78vh] w-[88vw] max-w-5xl">
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="text-center text-sm text-[#aeb6c2]">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
