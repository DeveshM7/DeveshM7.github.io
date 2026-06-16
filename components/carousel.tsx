"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

export type CarouselImage = { src: string; caption: string }

/**
 * Displays a set of images one at a time with prev/next controls, dot
 * indicators, a counter, and the active caption. Clicking the image (or the
 * expand button) opens a full-screen view. Built for flipping through related
 * plots in place rather than showing them as a long list.
 */
export function Carousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const count = images.length
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "Escape") setZoom(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  useEffect(() => {
    document.body.style.overflow = zoom ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [zoom])

  const active = images[index]

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111418]">
        {/* Image stage */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label="Enlarge image"
            className="group relative block aspect-[4/5] w-full cursor-zoom-in sm:aspect-[3/2]"
          >
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
            />
            <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-[#f5f7fa] opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#f5f7fa] transition-colors hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#f5f7fa] transition-colors hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption + counter */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
          <p className="text-sm leading-snug text-[#aeb6c2]">{active.caption}</p>
          <span className="shrink-0 font-mono text-xs text-[#aeb6c2]/60">
            {index + 1} / {count}
          </span>
        </div>
      </div>

      {/* Dots */}
      {count > 1 && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-[#7dd3fc]" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen zoom */}
      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f5f7fa] transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          {count > 1 && (
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
            className="flex max-h-full max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-[88vw] max-w-4xl">
              <Image src={active.src} alt={active.caption} fill sizes="90vw" className="object-contain" />
            </div>
            <figcaption className="text-center text-sm text-[#aeb6c2]">{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
