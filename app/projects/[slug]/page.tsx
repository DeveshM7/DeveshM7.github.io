import { Fragment } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FileText } from "lucide-react"
import { getProject, projects } from "@/lib/data"
import { GithubIcon } from "@/components/brand-icons"
import { BackToProjects } from "@/components/back-to-projects"
import { ProjectGallery, type GalleryGroup } from "@/components/project-gallery"
import { SchematicFigure } from "@/components/schematic-figure"
import { Reveal } from "@/components/reveal"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Devesh Maheshwari`,
    description: project.description,
  }
}

/* Fallback copy for projects that don't yet have a custom write-up. */
const placeholderSections = [
  {
    heading: "Overview",
    body: "Placeholder overview. Describe the problem this project solves, the motivation behind it, and the high-level approach. Replace this copy with your real write-up.",
  },
  {
    heading: "Technical Details",
    body: "Placeholder technical details. Outline the architecture, key components, algorithms, and engineering decisions. Replace this copy with your real write-up.",
  },
  {
    heading: "Impact",
    body: "Placeholder impact. Summarize results, metrics, and outcomes — what changed, what improved, and what you learned. Replace this copy with your real write-up.",
  },
]

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const sections = project.sections ?? placeholderSections
  const topImage = project.schematic ?? project.image
  const galleryGroups: GalleryGroup[] | null =
    project.galleryGroups ?? (project.gallery ? [{ images: project.gallery }] : null)

  // Layout flags
  const showTopSchematic = !!project.schematic && project.schematicAfter == null
  const showHero = !project.schematic && !project.sections
  const videoTop = !!project.video && project.videoPosition === "top"
  const videoBottom = !!project.video && project.videoPosition !== "top"
  const videoEl = project.video ? (
    <video controls playsInline preload="metadata" className="h-auto w-full">
      <source src={project.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : null

  return (
    <main className="min-h-svh bg-[#0b0d10]">
      {/* Top bar with back button */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d10]/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <BackToProjects />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
            {project.category}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-[#aeb6c2]">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#aeb6c2]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {(project.github || project.report) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
                >
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.report && (
                <a
                  href={project.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
                >
                  <FileText className="h-4 w-4" />
                  Read full report (PDF)
                </a>
              )}
            </div>
          )}
        </Reveal>

        {/* Top media — schematic, a generic hero, or a top-positioned demo video */}
        {showTopSchematic && (
          <Reveal delay={0.1}>
            <div className="mt-10">
              <SchematicFigure src={topImage} alt={`${project.title} schematic`} />
            </div>
          </Reveal>
        )}
        {showHero && (
          <Reveal delay={0.1}>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={topImage || "/placeholder.svg"}
                alt={`${project.title} hero`}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
        {videoTop && (
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black">
              {videoEl}
            </div>
          </Reveal>
        )}

        {/* Write-up sections (schematic optionally interleaved) */}
        <div className="mt-14 flex flex-col gap-12">
          {sections.map((section, i) => (
            <Fragment key={section.heading}>
              <Reveal delay={i * 0.05}>
                <section>
                  <h2 className="text-xl font-semibold text-[#f5f7fa]">{section.heading}</h2>
                  <p className="mt-3 leading-relaxed text-[#aeb6c2]">{section.body}</p>
                </section>
              </Reveal>
              {project.schematic &&
                project.schematicAfter != null &&
                i === project.schematicAfter - 1 && (
                  <Reveal delay={0.05}>
                    <SchematicFigure
                      src={project.schematic}
                      alt={`${project.title} schematic`}
                    />
                  </Reveal>
                )}
            </Fragment>
          ))}

          {/* Gallery — shown when there are images, or as a placeholder on template pages */}
          {(galleryGroups || !project.sections) && (
            <Reveal delay={0.1}>
              <section>
                <h2 className="text-xl font-semibold text-[#f5f7fa]">Gallery</h2>
                <div className="mt-6">
                  {galleryGroups ? (
                    <ProjectGallery groups={galleryGroups} />
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[0, 1].map((n) => (
                        <div
                          key={n}
                          className="grid-bg flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-[#111418]"
                        >
                          <span className="font-mono text-xs text-[#aeb6c2]/50">
                            Gallery image {n + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </Reveal>
          )}

          {/* Demo video (bottom-positioned) */}
          {videoBottom && (
            <Reveal delay={0.1}>
              <section>
                <h2 className="text-xl font-semibold text-[#f5f7fa]">
                  {project.videoLabel ?? "Demo"}
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black">
                  {videoEl}
                </div>
              </section>
            </Reveal>
          )}
        </div>
      </article>
    </main>
  )
}
