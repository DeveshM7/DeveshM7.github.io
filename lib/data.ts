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
  { label: "Graduation", value: "May 2027" },
  { label: "Based in", value: "Santa Clara, CA" },
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
  /* Optional rich detail-page content */
  github?: string
  /* Wide image shown at the top of the detail page (e.g. a schematic) */
  schematic?: string
  /* Write-up rendered as titled sections on the detail page */
  sections?: { heading: string; body: string }[]
  /* Photo gallery rendered below the write-up */
  gallery?: { src: string; caption: string }[]
  /* Demo video shown at the bottom of the detail page */
  video?: string
}

export const projects: Project[] = [
  {
    slug: "gesture-controlled-game",
    title: "Gesture-Controlled Game",
    category: "Embedded Systems Project",
    description:
      "A Frogger-style arcade game on a Raspberry Pi RP2350, played entirely with hand swipes over an APDS-9960 gesture sensor — dual-core firmware, SPI LCD rendering, PWM audio, and an SD-card leaderboard.",
    tags: ["RP2350", "C", "Embedded C", "I2C", "SPI", "Dual-Core", "FatFS"],
    image: "/projects/gesture_game/In_game.jpeg",
    github: "https://github.com/DeveshM7/ECE362_Gesture_Control_Project",
    schematic: "/projects/gesture_game/Schematic.jpeg",
    sections: [
      {
        heading: "Overview",
        body: "Gesture-Controlled Game is the final project for ECE 362 (Microprocessor Systems & Interfacing) at Purdue. It's a Frogger-style arcade game that runs bare-metal on a Raspberry Pi RP2350 and is controlled with nothing but hand motion: players swipe up, down, left, or right over an APDS-9960 optical sensor to steer a character across a scrolling field of obstacles on a TFT LCD. The goal was to turn a pile of peripherals — an I2C gesture sensor, an SPI display, a PWM speaker, push buttons, and an SD card — into a single responsive, self-contained game console.",
      },
      {
        heading: "Hardware",
        body: "The system is built around the RP2350 (Proton board, Pico SDK). An APDS-9960 sensor connects over I2C (GPIO 4/5) for gesture input, a 240×320 SPI TFT LCD (GPIO 16–22) handles rendering, and a PWM-driven speaker on GPIO 36 produces sound. Two push buttons provide hardware play/pause, and a micro-SD card stores the persistent leaderboard. Everything runs from a shared 3.3 V rail.",
      },
      {
        heading: "Gesture Detection",
        body: "The APDS-9960 detects motion with an IR LED and four directional photodiodes (up, down, left, right). The driver configures the sensor over I2C at 400 kHz — LED pulse counts, gain, proximity entry/exit thresholds, and a 300% LED boost — then drains the on-chip gesture FIFO while a swipe is in progress, accumulating per-direction photodiode counts. When the gesture ends, it compares the dominant axis (up–down vs. left–right) against a tuned threshold to classify the swipe into one of four directions, rejecting noise below the threshold.",
      },
      {
        heading: "Dual-Core Architecture",
        body: "To keep input latency low without stalling rendering, the firmware splits work across both RP2350 cores. Core 1 runs a tight gesture-detection loop and pushes decoded directions through the inter-core FIFO; Core 0 runs the game itself — a state machine over MAIN_MENU, PLAYING, PAUSED, and GAME_OVER. Decoupling sensing from the game loop means swipes are read continuously while the display and game logic update independently.",
      },
      {
        heading: "Game Engine",
        body: "The game world is a grid of scrolling obstacle rows rendered through a custom SPI LCD driver. Partial redraws (erasing only the player's previous cell) eliminate flicker, and the scroll step, spawn rate, and scroll rate are exposed as tunable difficulty parameters. Axis-aligned bounding-box collision detection checks the player against every active obstacle each frame; a hit drops the machine into GAME_OVER. A PWM speaker adds start and death sounds using fixed-point wavetable synthesis.",
      },
      {
        heading: "Leaderboard & Persistence",
        body: "Players enter a username over a UART serial console at startup. Scores are persisted to a CSV file on the SD card through the FatFS filesystem, with load, sort, and save routines maintaining a ranked top-10 leaderboard that survives power cycles. The current high score is surfaced on the main menu and updated live as you play.",
      },
    ],
    gallery: [
      { src: "/projects/gesture_game/In_game.jpeg", caption: "Gameplay — steering the player across scrolling obstacle rows" },
      { src: "/projects/gesture_game/Leaderboard.jpeg", caption: "SD-card leaderboard showing the persistent top-10 scores" },
      { src: "/projects/gesture_game/Pause.jpeg", caption: "Pause screen, toggled with the hardware buttons" },
      { src: "/projects/gesture_game/Over.jpeg", caption: "Game-over screen after a collision" },
    ],
    video: "/projects/gesture_game/Gameplay.mp4",
  },
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
