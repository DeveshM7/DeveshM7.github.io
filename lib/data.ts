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
  /* Gallery split into labeled groups (takes precedence over `gallery`) */
  galleryGroups?: { title: string; images: { src: string; caption: string }[] }[]
  /* Demo video shown at the bottom of the detail page */
  video?: string
  /* Link to a full write-up / report PDF */
  report?: string
}

export const projects: Project[] = [
  {
    slug: "gesture-controlled-game",
    title: "Gesture-Controlled Game",
    category: "Embedded Systems Project",
    description:
      "A Frogger-style arcade game on a Raspberry Pi RP2350, played entirely with hand swipes over an APDS-9960 gesture sensor — dual-core firmware, SPI LCD rendering, PWM audio, and an SD-card leaderboard.",
    tags: ["RP2350", "C", "Embedded C", "I2C", "SPI", "Dual-Core", "FatFS"],
    image: "/projects/gesture_game/preview.jpg",
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
    category: "FPGA / SystemVerilog Project",
    description:
      "A lunar-lander game built entirely in synthesizable SystemVerilog — no CPU, no software, just digital logic on an FPGA. Burn fuel to control a descent and touch down softly before you run out of altitude.",
    tags: ["SystemVerilog", "FPGA", "Digital Design", "BCD Arithmetic", "FSM", "RTL"],
    image: "/projects/fpga/altitude.png",
    github: "https://github.com/DeveshM7/Lunar-Lander-FPGA",
    sections: [
      {
        heading: "Overview",
        body: "Lunar Lander is a classic descent game implemented purely in hardware. There's no processor and no firmware — the entire game is synthesizable SystemVerilog running as digital logic on an FPGA lab board. The player burns fuel to slow a falling lander, entering thrust values on the board's keypad and watching altitude, velocity, fuel, and thrust on the seven-segment displays. Touch down slowly enough and a green LED signals a safe landing; hit the surface too fast and a red LED signals a crash. Every quantity is tracked in binary-coded decimal so state values map directly onto the displays.",
      },
      {
        heading: "Architecture",
        body: "The design follows a clean datapath–control–I/O hierarchy: a top-level wrapper maps board pins into a lunarlander module that wires together state memory, an arithmetic unit, control logic, and a display driver. State and game logic advance on a slow game-tick clock derived from the board's 100 Hz reference by a programmable clock prescaler, keeping the simulation at a playable rate while the rest of the logic runs combinationally.",
      },
      {
        heading: "Physics Engine",
        body: "An arithmetic unit computes the next state each tick: altitude integrates velocity (alt' = alt + vel), velocity accumulates gravity and thrust (vel' = vel − gravity + thrust, with thrust applied only while fuel remains), and fuel depletes by the thrust burned. The datapath clamps altitude and velocity to zero at the ground and fuel to zero when the tank empties, so the simulation behaves correctly at its boundaries.",
      },
      {
        heading: "Game Logic",
        body: "A control block watches for ground contact by testing altitude against the incoming velocity, then decides the outcome: a crash if the descent velocity exceeds the safe threshold, otherwise a successful landing. Once the lander has landed or crashed, the control logic freezes state updates and latches the result, driving the red (crash) and green (land) status LEDs.",
      },
      {
        heading: "BCD Datapath",
        body: "Because the displays are decimal, all math is done in BCD. The arithmetic is built bottom-up from gate-level full adders into a 4-bit adder, then a single-digit BCD adder with the classic +6 overflow correction, a four-digit ripple adder, and finally a BCD add/subtract unit that handles subtraction via nine's-complement and a carry-in for ten's-complement arithmetic. This stack powers every calculation in the game.",
      },
      {
        heading: "Input & Display",
        body: "A keypad synchronizer debounces the 20 pushbuttons, encodes the pressed key, and generates a clean key-press strobe — numeric keys set thrust, while mode keys switch the displayed value between altitude, velocity, fuel, and thrust. The display driver selects the active value, renders a text label on the left digits, blanks leading zeros, and shows signed velocity using the BCD subtract unit and a minus-sign segment pattern.",
      },
    ],
    gallery: [
      { src: "/projects/fpga/altitude.png", caption: "Altitude mode — current height above the surface" },
      { src: "/projects/fpga/velocity.png", caption: "Velocity mode — descent rate, shown signed when falling" },
      { src: "/projects/fpga/gas.png", caption: "Fuel mode — remaining fuel, depleted by thrust" },
      { src: "/projects/fpga/thrust.png", caption: "Thrust mode — thrust value entered on the keypad" },
    ],
    video: "/projects/fpga/gameplay.mp4",
  },
  {
    slug: "heart-rate-sensor",
    title: "Optical Heart-Rate Sensor",
    category: "Analog Circuit Design Project",
    description:
      "A complete analog front-end that turns tiny optical fluctuations from an IR LED–phototransistor pair into a clean digital heartbeat pulse — using photoplethysmography (PPG), cascaded active filters, and a comparator with hysteresis.",
    tags: ["Analog Design", "PPG", "Active Filters", "Op-Amps", "LM339", "Biomedical"],
    image: "/projects/hr_sensor/preview.png",
    schematic: "/projects/hr_sensor/schematic.png",
    report: "/projects/hr_sensor/report.pdf",
    sections: [
      {
        heading: "Overview",
        body: "This project is a complete analog signal chain for real-time optical heart-rate detection based on photoplethysmography (PPG). As the heart pumps, changing blood volume modulates how much infrared light passes through a fingertip; an IR LED–phototransistor pair captures this as a tiny electrical signal — roughly 70 mVpp of AC riding on a 2.0–2.2 V DC level. The challenge is pulling that small, drifting signal out of a large variable offset and turning it into a reliable digital pulse, one transition per heartbeat. The design does this entirely in analog hardware, divided into four subsystems: an optical sensor front-end, cascaded active filters, a comparator with hysteresis, and an LED indicator.",
      },
      {
        heading: "Optical Sensor Front-End",
        body: "An IR204 infrared LED illuminates the finger and a PT204-6B phototransistor converts the transmitted light back into current. A series resistor (two 82 Ω resistors in parallel, ≈41 Ω, to stay within the 0.25 W power limit) sets the LED drive current to about 88 mA, and a 10 kΩ emitter resistor was chosen experimentally to keep the phototransistor out of saturation while producing a visible AC ripple. This stage delivers a 2.0–2.2 V DC level with the small heartbeat AC component superimposed on top.",
      },
      {
        heading: "Cascaded Active Filters",
        body: "Two non-inverting op-amp stages (LM358) isolate the physiological heart-rate band of 40–200 BPM (0.67–3.33 Hz) while amplifying the signal. A high-pass stage strips the large DC offset with a measured cutoff of 0.60 Hz and a gain of ×16, and a low-pass stage suppresses high-frequency noise with a measured cutoff of 3.76 Hz and a gain of ×14. Cascaded, they target a midband gain near 48 dB (×251); the measured ≈44.7 dB (×172) came in lower because, at a 10 mV input, the high combined gain drives the op-amps near their rails and compresses the waveform — a clear illustration of output-swing limiting in high-gain biomedical front-ends.",
      },
      {
        heading: "Comparator with Hysteresis",
        body: "The filtered ±3 V heartbeat waveform feeds an LM339 comparator wired in an inverting configuration with a positive-feedback resistor divider, creating a hysteresis window so noise near the threshold can't cause false retriggering. The measured hysteresis was 1.93 V against a calculated 1.99 V (about 3% error), and the comparator cleanly digitized the waveform — pulsing low on each heartbeat peak and high between beats — producing a noise-free pulse train aligned to the actual heartbeats.",
      },
      {
        heading: "LED Indicator",
        body: "The comparator output drives the gate of an NMOS transistor that switches an indicator LED through a 150 Ω series resistor, setting the LED current to about 20 mA — within the safe rating and clearly visible. Because the comparator is inverting, the LED turns off at each heartbeat peak and on between beats, blinking in real time with the detected pulse.",
      },
      {
        heading: "Results & Validation",
        body: "All subsystems were characterized with an Analog Discovery 2 (function generator, oscilloscope, and supply). Filter cutoffs landed within ~1% (high-pass) and ~11% (low-pass) of design targets, individual stage gains matched theory closely (16.14 vs 16, 14.13 vs 15.7), and the comparator hysteresis was within ~3%. The end-to-end chain reliably extracted, amplified, filtered, and digitized the PPG signal into a stable heartbeat pulse train. The full design calculations, measured frequency responses, and error analysis are in the report below.",
      },
    ],
    gallery: [
      { src: "/projects/hr_sensor/HR_raw.png", caption: "Raw optical sensor output — ~70 mVpp ripple on a 2.0–2.2 V DC level" },
      { src: "/projects/hr_sensor/HR_post_HPF.png", caption: "High-pass filter response — measured cutoff 0.60 Hz, gain ×16" },
      { src: "/projects/hr_sensor/HR_post_LPF.png", caption: "Low-pass filter response — measured cutoff 3.76 Hz, gain ×14" },
      { src: "/projects/hr_sensor/HR_cascaded_filter.png", caption: "Cascaded filter output — a clean ±3 V heartbeat waveform" },
      { src: "/projects/hr_sensor/HR_comparator_binary_output.png", caption: "Comparator output — digital pulse train aligned to each heartbeat" },
    ],
  },
  {
    slug: "audio-equalizer",
    title: "Three-Band Audio Equalizer",
    category: "Analog Circuit Design Project",
    description:
      "A fully analog three-band audio equalizer that splits a signal into bass, mid, and treble paths with independent gain control, recombines them through a summing amplifier, and drives an 8 Ω speaker via an LM386 power stage at 545 mW.",
    tags: ["Analog Design", "Active Filters", "Op-Amps", "LM386", "Audio", "Summing Amplifier"],
    image: "/projects/audio_eq/schematic.png",
    schematic: "/projects/audio_eq/schematic.png",
    report: "/projects/audio_eq/report.pdf",
    sections: [
      {
        heading: "Overview",
        body: "This is a fully analog three-band audio equalizer that gives hands-on tonal control over any audio source. The input signal is split into bass, midrange, and treble paths, each with an independent user-adjustable gain, then recombined into a single output and amplified to drive an 8 Ω speaker. The whole chain — filtering, per-band gain, recombination, and power amplification — is built from discrete op-amps, passives, and an LM386, running on ±5 V rails. It was a partnered final project for an analog electronics course.",
      },
      {
        heading: "Three-Band Filtering",
        body: "The signal is divided into three frequency bands using RC and LC filters targeting –3 dB cutoffs around 320 Hz and 3200 Hz. A low-pass filter (47 Ω, 10 µF) isolates the bass with a ~339 Hz cutoff, a high-pass filter (56 Ω, 1 µF) isolates the treble at ~2841 Hz, and an LC band-pass filter (1 mH, 22 µF, 22 Ω) handles the midrange centered near 1075 Hz. Each band's response was verified with frequency-response analysis on the oscilloscope.",
      },
      {
        heading: "Per-Band Gain Control",
        body: "Each band passes through an inverting op-amp stage with a fixed 6.7 kΩ input resistor and a 10 Ω–10 kΩ potentiometer as the feedback element, giving a gain range from roughly 0 (full mute) up to about 1.5×. This lets the user boost or cut each band independently without the stages loading one another. Applying gain here proved essential to offset voltage losses incurred later in recombination and power amplification.",
      },
      {
        heading: "Recombination & Power Stage",
        body: "The three adjusted bands are merged by an inverting summing amplifier (matched 47 kΩ input resistors with a shared feedback potentiometer), preserving their relative amplitudes and phases in one combined signal. That output feeds an LM386 Class-AB power amplifier, which supplies the current needed to drive an 8 Ω speaker directly — delivering 545 mW, comfortably above the 400 mW target.",
      },
      {
        heading: "Results",
        body: "The build met every design target. Low-pass and high-pass cutoffs landed within ~1% of their goals (316 Hz and 3162 Hz), and the mid-band edges (355 Hz / 3.55 kHz) sat within the 10% tolerance. At minimum settings the output was essentially muted (well under the 15 mVrms limit); at maximum it held 93–106 mVrms across 100 Hz / 1 kHz / 10 kHz (spec: 100 mVrms ±10%). Output ripple was 13.6 mVrms (under 15 mVrms), and the amplifier delivered 545 mW into 8 Ω. Remaining deviations trace to component tolerances, finite op-amp bandwidth, and measurement uncertainty. Full plots, calculations, and error analysis are in the report below.",
      },
    ],
    galleryGroups: [
      {
        title: "Filter Frequency Responses",
        images: [
          { src: "/projects/audio_eq/lpf_fra.png", caption: "Low-pass filter — measured –3 dB cutoff at 316 Hz" },
          { src: "/projects/audio_eq/mpf_fra.png", caption: "Mid-pass filter — band edges at 355 Hz and 3.55 kHz" },
          { src: "/projects/audio_eq/hpf_fra.png", caption: "High-pass filter — measured –3 dB cutoff at 3.16 kHz" },
        ],
      },
      {
        title: "Output at Minimum Setting",
        images: [
          { src: "/projects/audio_eq/min-100.png", caption: "100 Hz — output muted (≈0 mVrms)" },
          { src: "/projects/audio_eq/min-1000.png", caption: "1 kHz — output muted (≈0 mVrms)" },
          { src: "/projects/audio_eq/min-10000.png", caption: "10 kHz — output muted (≈0 mVrms)" },
        ],
      },
      {
        title: "Output at Maximum Setting",
        images: [
          { src: "/projects/audio_eq/max-100.png", caption: "100 Hz — output ≈ 98.6 mVrms" },
          { src: "/projects/audio_eq/max-1000.png", caption: "1 kHz — output ≈ 93.3 mVrms" },
          { src: "/projects/audio_eq/max-10000.png", caption: "10 kHz — output ≈ 105.6 mVrms" },
        ],
      },
      {
        title: "Power Output",
        images: [
          { src: "/projects/audio_eq/dev-pow1.png", caption: "Power stage — 2.089 Vrms into 8 Ω ≈ 545 mW" },
        ],
      },
    ],
  },
  {
    slug: "advanced-custom-bash-shell",
    title: "Advanced Custom Bash Shell",
    category: "Systems Programming Project",
    description:
      "A custom Unix-like shell written in C/C++ with Lex and Yacc, supporting pipelines, I/O redirection, wildcard and environment expansion, subshells, and shell control flow (if / while / for).",
    tags: ["C", "C++", "Lex/Yacc", "Linux", "Systems", "Processes"],
    image: "/projects/bash-shell.png",
    sections: [
      {
        heading: "Overview",
        body: "This project is a fully functional Unix-like command shell built from scratch in C/C++. It reads command lines, parses them into a structured command representation, and executes them by managing real processes — forking children, wiring up pipes and file descriptors, and waiting on or backgrounding jobs. The result behaves like a real shell: it runs programs with arguments, chains them with pipes, redirects input and output, expands wildcards and variables, and supports shell-level control flow.",
      },
      {
        heading: "Lexing & Parsing",
        body: "The command-line grammar is defined with Lex (tokenizer) and Yacc (parser). The lexer recognizes operators and special tokens — pipes, the redirection forms (>, >>, <, 2>, >&), background &, quotes, and control-flow keywords — while the Yacc grammar assembles them into a pipeline of commands with their arguments and I/O modifiers. This clean separation of tokenizing and grammar made it straightforward to extend the shell with new syntax.",
      },
      {
        heading: "Pipelines & I/O Redirection",
        body: "Each command stage is executed in its own forked process, with the parent connecting stages through pipes so the output of one feeds the input of the next. Redirection operators rewire a process's standard input, output, and error to files before exec — including append mode, separate or combined stderr, and reading from a file — and a trailing & runs the whole pipeline in the background instead of blocking the prompt.",
      },
      {
        heading: "Expansions",
        body: "Before execution, arguments pass through several expansion passes that mirror real shell behavior: wildcard globbing (* and ?) against the filesystem, environment-variable substitution with ${VAR}, tilde (~) expansion to the home directory, and subshell / command substitution using backticks, where the output of an inner command is captured and spliced back into the outer command line.",
      },
      {
        heading: "Built-ins & Control Flow",
        body: "Commands that must change the shell's own state are implemented as built-ins rather than external programs — cd, setenv, unsetenv, printenv, source (run commands from a file), and exit. On top of the basic command grammar, the shell also supports structured control flow — if / then / fi, while / do / done, and for / in / do / done — where conditions are evaluated as real commands and their exit status drives the branch, enabling small shell scripts to run directly.",
      },
    ],
  },
  {
    slug: "simple-c-compiler",
    title: "Simple C Compiler",
    category: "Compiler Design Project",
    description:
      "A compiler for a subset of C, built with Lex and Yacc, that lexes and parses source code, tracks declarations in a symbol table, and emits working x86-64 assembly with control flow and function support.",
    tags: ["C", "x86-64", "Compilers", "Parsing", "Symbol Tables", "Code Generation"],
    image: "/projects/c-compiler.png",
    sections: [
      {
        heading: "Overview",
        body: "This project is a compiler for a subset of the C language that takes source code all the way down to executable x86-64 assembly. It implements the core stages of a real compiler pipeline — lexical analysis, parsing, semantic tracking through a symbol table, and code generation — turning a high-level program into low-level instructions that run on the machine. The focus was on understanding how language constructs map onto registers, the stack, and control-flow at the assembly level.",
      },
      {
        heading: "Lexing & Parsing",
        body: "The front end uses Lex to tokenize the source into keywords, identifiers, literals, and operators, and a Yacc grammar to parse those tokens into the language's syntactic structure. The grammar encodes operator precedence and the rules for declarations, expressions, statements, and function definitions, rejecting malformed programs while building up the structure the later stages compile.",
      },
      {
        heading: "Symbol Tables & Semantics",
        body: "As declarations are parsed, the compiler records them in a symbol table that tracks identifiers along with the information needed for code generation — such as type and storage location. This lets the compiler resolve variable references, assign stack offsets, and distinguish scopes so that generated code reads and writes the correct locations.",
      },
      {
        heading: "x86-64 Code Generation",
        body: "The back end walks the parsed program and emits x86-64 assembly. Expressions are lowered into register and stack operations, control-flow constructs (conditionals and loops) are translated using labels and conditional jumps, and functions are implemented with proper prologues, epilogues, and calling-convention handling for arguments and return values — producing assembly that can be assembled and run.",
      },
    ],
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
