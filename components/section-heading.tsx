import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-mono text-xs uppercase tracking-[0.2em]",
            dark ? "text-[#7dd3fc]" : "text-[#0b0d10]/50",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-[#f5f7fa]" : "text-[#111827]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty leading-relaxed",
            dark ? "text-[#aeb6c2]" : "text-[#6b7280]",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
