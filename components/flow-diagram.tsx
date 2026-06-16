import { ChevronRight, ChevronDown } from "lucide-react"

export type FlowStep = {
  label: string
  /** Small mono sub-label under the main label. */
  sub?: string
  /** Optional label shown on the arrow leading into this step. */
  arrow?: string
}

/**
 * A responsive "boxes connected by arrows" diagram for showing how components
 * flow into one another. Horizontal on desktop, vertical on mobile.
 */
export function FlowDiagram({ steps, caption }: { steps: FlowStep[]; caption?: string }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-[#0d1014] p-5 sm:p-6">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-col items-stretch sm:flex-row sm:items-center"
          >
            {i > 0 && (
              <div className="flex items-center justify-center gap-1 py-1 text-[#7dd3fc] sm:flex-col sm:px-1.5 sm:py-0">
                <ChevronDown className="h-4 w-4 sm:hidden" />
                <ChevronRight className="hidden h-4 w-4 sm:block" />
                {step.arrow && (
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#7dd3fc]/80">
                    {step.arrow}
                  </span>
                )}
              </div>
            )}
            <div className="flex min-w-[8rem] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#111418] px-4 py-3 text-center">
              <span className="text-sm font-medium text-[#f5f7fa]">{step.label}</span>
              {step.sub && (
                <span className="mt-1 font-mono text-[11px] leading-tight text-[#aeb6c2]">
                  {step.sub}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-xs leading-snug text-[#aeb6c2]/70">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
