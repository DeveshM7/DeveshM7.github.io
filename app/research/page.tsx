import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { research } from "@/lib/data"
import { GithubIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"

export const metadata = {
  title: "EmbedEval — Devesh Maheshwari",
  description:
    "EmbedEval: a benchmark for evaluating large language models on real embedded software engineering tasks from RTOS pull requests, validated in hardware simulators.",
}

type Figure = { src: string; w: number; h: number; caption: string }

function FigureBlock({ figure }: { figure: Figure }) {
  return (
    <figure className="mt-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
        <Image
          src={figure.src}
          alt={figure.caption}
          width={figure.w}
          height={figure.h}
          sizes="(max-width: 896px) 100vw, 896px"
          className="h-auto w-full rounded-lg"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs leading-snug text-[#aeb6c2]/70">
        {figure.caption}
      </figcaption>
    </figure>
  )
}

const sections: { heading: string; body: string; figure?: Figure }[] = [
  {
    heading: "The Problem",
    body: "Embedded software runs under tight hardware constraints — limited memory, real-time scheduling, and direct interaction with peripherals through drivers and hardware abstraction layers — so defects can have direct physical consequences and debugging is gated by slow, expensive hardware-in-the-loop cycles. LLMs are strong at general code generation, but the benchmarks that measure them (HumanEval, MBPP, even repository-level SWE-bench) are almost entirely high-level Python and never exercise hardware-specific reasoning. EmbedEval closes that gap by bringing SWE-bench's real-repository, test-driven methodology to embedded RTOS code.",
  },
  {
    heading: "Evaluation Pipeline",
    body: "Each benchmark instance is a real pull request: a repository snapshot at a specific commit, a natural-language task drawn from the original issue, and the tests that validate the fix. An LLM coding agent is given the context and must produce a patch; the patch is applied and the project's own tests are run in a simulator to produce a deterministic pass/fail. Instances are packaged as reproducible multi-stage Docker images with the RTOS toolchain pre-installed, and the agent harness is built on mini-swe-agent with a 50-step limit and a $3 cost ceiling per task.",
    figure: {
      src: "/research/embedeval/figure1_pipeline_overview.png",
      w: 1800,
      h: 377,
      caption: "End-to-end evaluation pipeline: real PR → agent-generated patch → simulator-run tests → pass/fail.",
    },
  },
  {
    heading: "Simulation Architecture",
    body: "Reproducible evaluation without physical hardware comes from a layered simulation stack, each layer trading speed for fidelity. Host-native execution compiles the firmware against POSIX stubs and runs it as a native Linux binary (fast, for application/RTOS logic). ISA-level emulation with QEMU and Renode runs the exact target binary with modeled CPU, memory map, and peripherals — the universal baseline. Cycle-accurate simulation (timing-dependent bugs) is deferred to future work. Tasks are routed to whichever layer provides enough fidelity for the specific test.",
    figure: {
      src: "/research/embedeval/simulation_architecture.png",
      w: 1800,
      h: 1110,
      caption: "Layered simulation architecture, mapping each execution layer to the categories of embedded tasks it can validate.",
    },
  },
  {
    heading: "Problem Sourcing",
    body: "Benchmark problems are mined from merged PRs in actively-maintained RTOS repositories — Zephyr, NuttX, and RIOT. A filtering pipeline keeps PRs that link an issue and modify tests, that touch logic- and driver-level code the simulators can run, and that aren't documentation- or CI-only. Every surviving candidate is validated with a fail-then-pass check: its tests must fail on the parent commit and pass on the merged code, guaranteeing a concrete correctness signal. The final set is 17 instances — 8 Zephyr, 6 NuttX, 3 RIOT — spanning bug fixes, features, and refactors from 7-line tweaks to 1031-line kernel additions.",
    figure: {
      src: "/research/embedeval/figure3_filtering_pipeline.png",
      w: 1800,
      h: 1004,
      caption: "Problem-sourcing pipeline: raw merged PRs are filtered and then validated with a fail-then-pass check.",
    },
  },
]

const modelTable = {
  columns: ["Model", "Pass", "Fail", "Pass Rate"],
  rows: [
    ["GPT-5.4", "12", "5", "70.6%"],
    ["Claude Opus 4.6", "11", "6", "64.7%"],
    ["Gemini 2.5 Pro", "8", "9", "47.1%"],
    ["Qwen3-Coder-480B", "6", "11", "35.3%"],
    ["DeepSeek-V3", "6", "11", "35.3%"],
  ],
}

export default function ResearchPage() {
  return (
    <main className="min-h-svh bg-[#0b0d10]">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d10]/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#aeb6c2] transition-colors hover:text-[#f5f7fa]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7dd3fc]">
            {research.venue}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-5xl">
            {research.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#aeb6c2]/80">
            {research.authors.map((name, i) => (
              <span key={name}>
                <span
                  className={
                    name === "Devesh Maheshwari" ? "font-semibold text-[#f5f7fa]" : undefined
                  }
                >
                  {name}
                </span>
                {i < research.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-[#aeb6c2]">
            {research.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={research.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7dd3fc]/40 bg-[#7dd3fc]/10 px-5 py-2.5 text-sm font-semibold text-[#7dd3fc] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/70 hover:bg-[#7dd3fc]/20 hover:shadow-[0_0_22px_rgba(125,211,252,0.18)]"
            >
              <FileText className="h-4 w-4" />
              Read the full paper (PDF)
            </a>
            <a
              href={research.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#f5f7fa] transition-all hover:-translate-y-0.5 hover:border-[#7dd3fc]/50"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.05}>
              <section>
                <h2 className="text-xl font-semibold text-[#f5f7fa]">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-[#aeb6c2]">{section.body}</p>
                {section.figure && <FigureBlock figure={section.figure} />}
              </section>
            </Reveal>
          ))}

          {/* Results */}
          <Reveal delay={0.05}>
            <section>
              <h2 className="text-xl font-semibold text-[#f5f7fa]">Results</h2>
              <p className="mt-3 leading-relaxed text-[#aeb6c2]">
                All five models were run on every one of the 17 instances under the same 50-step
                limit, counting a task solved only when the resubmitted patch made the failing tests
                pass in a fresh container. GPT-5.4 led at 70.6%, with Claude Opus 4.6 close behind;
                the open-weight models solved fewer than half. Even the best model left roughly a
                third of real embedded tasks unsolved.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-white/[0.04]">
                      {modelTable.columns.map((col) => (
                        <th
                          key={col}
                          className="whitespace-nowrap px-4 py-3 text-left font-semibold text-[#f5f7fa]"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {modelTable.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-white/10">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`whitespace-nowrap px-4 py-3 ${
                              ci === 0 ? "font-medium text-[#f5f7fa]" : "text-[#aeb6c2]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <FigureBlock
                figure={{
                  src: research.highlight.src,
                  w: 2568,
                  h: 1239,
                  caption: research.highlight.caption,
                }}
              />
              <FigureBlock
                figure={{
                  src: "/research/embedeval/step_efficiency_ratio.png",
                  w: 2081,
                  h: 1181,
                  caption:
                    "Step efficiency (lower is better): GPT-5.4 was the most step-efficient model on every task it solved; others needed 3–4× more agent steps.",
                }}
              />
            </section>
          </Reveal>

          {/* Role */}
          <Reveal delay={0.05}>
            <section>
              <h2 className="text-xl font-semibold text-[#f5f7fa]">My Role</h2>
              <p className="mt-3 leading-relaxed text-[#aeb6c2]">
                I co-led the team — planning milestones, delegating work, and keeping us on schedule.
                Technically, I ran the literature review that identified the gap, built the initial
                Zephyr PR-sourcing and fail-then-pass validation pipeline, then designed the NuttX
                evaluation framework (adapting the agent loop and writing the harnesses and run_tests
                scripts for six NuttX PRs) and ran all five models across them. For the final paper I
                consolidated results across all 17 instances, built the tables and figures, produced
                the SWE-bench comparison and the normalized step-efficiency analysis, and wrote the
                Related Works and Results sections — presenting the work in a research talk.
              </p>
            </section>
          </Reveal>
        </div>
      </article>
    </main>
  )
}
