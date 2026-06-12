import type { ComponentType, SVGProps } from "react"
import { Mail, FileText } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

/** Any icon component that accepts standard SVG props (lucide or custom brand icons). */
type IconType = ComponentType<SVGProps<SVGSVGElement>>

/* ------------------------------------------------------------------ */
/*  SOCIAL LINKS — replace these hrefs with your real profile URLs.    */
/* ------------------------------------------------------------------ */
export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/DeveshM7", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devesh-maheshwari", icon: LinkedinIcon },
  { label: "Email", href: "mailto:deveshm95764@gmail.com", icon: Mail },
  // TODO: replace with your real resume link (e.g. /resume.pdf)
  { label: "Resume", href: "/resume.pdf", icon: FileText },
]

/* Convenience direct references used in the contact section */
export const contactLinks = {
  email: "mailto:deveshm95764@gmail.com",
  linkedin: "https://www.linkedin.com/in/devesh-maheshwari",
  github: "https://github.com/DeveshM7",
  resume: "/resume.pdf", // TODO: replace
}

/* ------------------------------------------------------------------ */
/*  NAV                                                                */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
]

/* ------------------------------------------------------------------ */
/*  QUICK FACTS                                                        */
/* ------------------------------------------------------------------ */
export const quickFacts: { label: string; value: string }[] = [
  { label: "University", value: "Purdue University" },
  { label: "Major", value: "CS + EE Dual Major" },
  { label: "GPA", value: "3.98 / 4.00" },
  { label: "Graduation", value: "Dec 2026" },
  { label: "Based in", value: "West Lafayette / Santa Clara" },
]

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */
export type Experience = {
  company: string
  role: string
  date: string
  initials: string
  logo: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: "Palo Alto Networks",
    role: "Platform / Software Engineering Intern",
    date: "Jun 2026 – Aug 2026",
    initials: "PAN",
    logo: "/experiences/PAN_logo.jpeg",
    bullets: [
      "Building a usage tracker and visualizer for platform microservices and features.",
      "Designing a plug-and-play telemetry workflow so new services can be added to the tracking pipeline with minimal manual effort.",
      "Working on automation around service usage data, visualization, and internal developer workflows.",
    ],
  },
  {
    company: "StudioX-AI",
    role: "AI / ML Intern",
    date: "Jun 2025 – Aug 2025",
    initials: "SX",
    logo: "/experiences/StudioX.jpg",
    bullets: [
      "Automated DevOps and customer-support workflows with AI agents, improving internal efficiency and saving 5–8 hours weekly.",
      "Integrated GitLab, Docker APIs, and Claude via YAML-based CI/CD and user-management workflows.",
      "Built DevOps chatbot integrations supporting 10+ operations through a conversational interface.",
      "Streamlined customer email intake by semantically analyzing ~50 emails/month and generating tickets.",
    ],
  },
  {
    company: "Sopra Steria",
    role: "Applied AI Intern",
    date: "May 2024 – Jul 2024",
    initials: "SS",
    logo: "/experiences/Sopra_Steria.png",
    bullets: [
      "Delivered RAG search over employee PDFs, reducing lookup time and generating grounded answers in under 5 seconds.",
      "Built an ingestion pipeline for parsing, chunking, embedding, and indexing PDF content with OpenAI and FAISS.",
      "Connected FAISS retrieval with GPT-4 to synthesize answers from top passages, improving response quality and accuracy.",
    ],
  },
  {
    company: "BytEdge Inc.",
    role: "AI Developer",
    date: "May 2023 – Jul 2023",
    initials: "BE",
    logo: "/experiences/Bytedge-logo.png",
    bullets: [
      "Enabled natural language search on an internal company platform, reducing lookup time from minutes to under 10 seconds.",
      "Fine-tuned GPT-3 prompts for SQL generation tailored to company schema and complex menu-driven data.",
      "Built GPT-3 outputs into a summarization pipeline and presented results in natural language through a search interface.",
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */
export type Project = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  /* TODO: replace with your real project image paths */
  image: string
}

export const projects: Project[] = [
  {
    slug: "lunar-lander-game",
    title: "Lunar Lander Game",
    category: "FPGA / Verilog Project",
    description:
      "Engineered modular Verilog components for an FPGA lunar lander simulation, including ALU, memory, control, and display units.",
    tags: ["Verilog", "FPGA", "Digital Design", "BCD", "Hardware Testing"],
    image: "/projects/lunar-lander.png",
  },
  {
    slug: "advanced-custom-bash-shell",
    title: "Advanced Custom Bash Shell",
    category: "Systems Programming Project",
    description:
      "Built a custom Unix-like shell in C/C++ with Lex/Yacc, supporting subshells, wildcards, loops, pipes, I/O redirection, and command-line editing.",
    tags: ["C", "C++", "Lex/Yacc", "Linux", "Systems"],
    image: "/projects/bash-shell.png",
  },
  {
    slug: "simple-c-compiler",
    title: "Simple C Compiler",
    category: "Compiler Design Project",
    description:
      "Developed a compiler for a subset of C using Lex and Yacc, translating source code into x86-64 assembly with control flow and function handling.",
    tags: ["C", "x86-64", "Compilers", "Parsing", "Symbol Tables"],
    image: "/projects/c-compiler.png",
  },
  {
    slug: "autonomous-motorsports-purdue",
    title: "Autonomous Motorsports Purdue",
    category: "Computer Vision Project",
    description:
      "Used MobileSAM CNN models to detect track boundaries and segment images on-device, improving autonomous navigation and perception.",
    tags: ["Computer Vision", "MobileSAM", "ZED Camera", "Robotics", "Real-Time Systems"],
    image: "/projects/autonomous-motorsports.png",
  },
  {
    slug: "embedeval",
    title: "EmbedEval",
    category: "Embedded LLM Benchmarking Research",
    description:
      "Building an automated benchmark workflow with Zephyr RTOS and Renode to evaluate LLM-generated firmware on MCU-style embedded tasks.",
    tags: ["LLMs", "Embedded Systems", "Zephyr", "Renode", "Benchmarking"],
    image: "/projects/embedeval.png",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    category: "StudioX-AI Internship Project",
    description:
      "Created AI workflows for DevOps and customer support, integrating GitLab, Docker APIs, Claude, and YAML-based automation.",
    tags: ["AI Agents", "Claude", "GitLab", "Docker", "YAML"],
    image: "/projects/ai-workflow.png",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/* ------------------------------------------------------------------ */
/*  RESEARCH                                                           */
/* ------------------------------------------------------------------ */
export const research = {
  title: "Embedded LLM Benchmarking Researcher — Purdue University",
  date: "Jan 2026 – Present",
  bullets: [
    "Building an automated benchmark workflow with Zephyr RTOS and Renode to evaluate LLM-generated firmware on MCU-style tasks.",
    "Curating embedded software tasks from real PRs and bug-fix workflows.",
    "Designing validation harnesses with automated tests, pass/fail checks, and reproducible logs.",
    "Tracking correctness, latency, and memory usage to compare model performance on low-level embedded tasks.",
  ],
}
