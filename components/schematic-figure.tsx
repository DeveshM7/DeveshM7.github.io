/**
 * Renders a project schematic on a white card at its natural aspect ratio.
 * Uses a plain <img> so schematics of any shape (square, wide strips, etc.)
 * display without letterboxing or a forced aspect-ratio box.
 */
export function SchematicFigure({
  src,
  alt,
  caption = "Circuit schematic",
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure>
      <div className="mx-auto flex max-w-2xl items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-auto w-full rounded-lg object-contain" />
      </div>
      <figcaption className="mt-3 text-center font-mono text-xs text-[#aeb6c2]/70">
        {caption}
      </figcaption>
    </figure>
  )
}
