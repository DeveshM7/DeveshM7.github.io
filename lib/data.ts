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
  { label: "Resume", href: "/resume.pdf", icon: FileText },
]

/* Convenience direct references used in the contact section */
export const contactLinks = {
  email: "mailto:deveshm95764@gmail.com",
  linkedin: "https://www.linkedin.com/in/devesh-maheshwari",
  github: "https://github.com/DeveshM7",
  resume: "/resume.pdf",
}

/* ------------------------------------------------------------------ */
/*  NAV                                                                */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Upcoming", href: "#upcoming" },
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
    role: "Software Engineering Intern",
    date: "May 2026 – Aug 2026",
    initials: "PAN",
    logo: "/experiences/PAN_logo.jpeg",
    bullets: [
      "Building CDC pipelines (Debezium, Kafka, Flink SQL) to replicate Postgres microservices data into an analytics Aurora DB.",
      "Enabling zero-downtime schema migrations via Goose view-aliasing, with Postgres row-level security for tenant isolation.",
      "Deploying pipelines on Kubernetes (EKS) with Helm; a Go metrics service exports aggregates to S3 for Tableau dashboards.",
      "Developing a Claude agent that automates metric onboarding, collapsing a multi-day, 4-branch workflow into one invocation.",
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
  /* Dark system diagram shown full-width at the very top (no white card) */
  topDiagram?: { src: string; alt: string; caption?: string }
  /* Write-up rendered as titled sections on the detail page.
     A section may carry a system diagram image rendered below its text. */
  sections?: {
    heading: string
    body: string
    diagram?: { src: string; alt: string; caption?: string }
  }[]
  /* Photo gallery rendered below the write-up */
  gallery?: { src: string; caption: string }[]
  /* Gallery split into labeled groups (takes precedence over `gallery`) */
  galleryGroups?: { title: string; images: { src: string; caption: string }[] }[]
  /* Data tables rendered in the write-up */
  tables?: { title: string; columns: string[]; rows: string[][]; note?: string }[]
  /* Image carousels — flip through related plots in place */
  carousels?: { title: string; images: { src: string; caption: string }[] }[]
  /* Demo video shown on the detail page */
  video?: string
  /* YouTube video ID — embedded instead of a self-hosted video when set */
  youtube?: string
  /* Where the video appears: "top" (hero, above the write-up) or "bottom" (default) */
  videoPosition?: "top" | "bottom"
  /* Heading for a bottom-positioned video (default "Demo") */
  videoLabel?: string
  /* Place the schematic after this many write-up sections instead of at the top */
  schematicAfter?: number
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
    videoLabel: "Gameplay Demo",
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
    videoLabel: "Gameplay Demo",
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
    slug: "electric-piano",
    title: "555 Timer Electric Piano",
    category: "Analog Circuit Design Project",
    description:
      "An electric piano built around the 555 timer in astable mode, where each key switches a different resistance into the oscillator's timing network to play a distinct musical tone through a speaker.",
    tags: ["Analog Design", "555 Timer", "Oscillators", "Astable", "Audio", "LTspice"],
    image: "/projects/electronic_piano/preview.png",
    schematic: "/projects/electronic_piano/schematic.png",
    schematicAfter: 2,
    video: "/projects/electronic_piano/demo.mp4",
    videoPosition: "top",
    report: "/projects/electronic_piano/report.pdf",
    sections: [
      {
        heading: "Overview",
        body: "This project uses a 555 timer as a sound-generating oscillator to build a simple electric piano: each button press plays a distinct musical tone through a speaker. It started as a study of the 555 timer's monostable and astable modes and grew into a hands-on audio application that turns the chip's square-wave output into music. The demo above shows it being played key by key.",
      },
      {
        heading: "How It Works",
        body: "The 555 runs in astable mode, free-running as an oscillator whose frequency is set by two resistors and a capacitor: f = 1.44 / ((Ra + 2·Rb)·C), with Ra fixed at 1 kΩ and C at 0.1 µF. The 'keys' are six buttons that tap a series chain of resistors (six 1 kΩ plus a 4.7 kΩ) at different points, each selecting a different Rb. Pressing a key further down the chain adds more resistance, lowering the frequency and producing a lower-pitched tone — so the row of buttons behaves like a small keyboard, each one mapped to its own note. The resulting square wave drives a small speaker directly.",
      },
      {
        heading: "Exploring the 555 Timer",
        body: "Before the piano, the project characterized the 555's two fundamental modes. In monostable mode it acts as a one-shot pulse generator (pulse width T = 1.1·R·C); a circuit was designed for a 3-second output pulse. In astable mode it free-runs as an oscillator with a configurable period and duty cycle — versions with 60% and 75% duty cycles were built to see how Ra and Rb shape the waveform. Every circuit was first simulated in LTspice and then validated on the oscilloscope.",
      },
      {
        heading: "Results & Takeaways",
        body: "The monostable and astable timings tracked theory closely — within a few percent of the predicted pulse widths and duty cycles. The piano's absolute tone frequencies came in roughly 18–32% lower than calculated, due to resistor and capacitor tolerances, breadboard parasitics, and switch and speaker loading. Crucially, though, the relative spacing between notes was preserved, so the scale still sounded harmonically correct — confirming that the incremental-Rb design works as intended. Suggested refinements include a potentiometer for volume control and a digital potentiometer for more precise tuning to standard notes.",
      },
    ],
  },
  {
    slug: "finfet-tcad-simulation",
    title: "FinFET Device Simulation (TCAD)",
    category: "Semiconductor Device Simulation",
    description:
      "A Synopsys Sentaurus TCAD study of a 22 nm FinFET — simulating its Id–Vg characteristics, extracting device metrics, and analytically explaining how work function, fixed oxide charge, and interface traps shift threshold voltage, leakage, and subthreshold slope.",
    tags: ["TCAD", "Sentaurus", "FinFET", "Semiconductor Devices", "MOSFET Physics", "Device Modeling"],
    image: "/projects/finfet_sim/preview.jpeg",
    report: "/projects/finfet_sim/report.pdf",
    sections: [
      {
        heading: "Overview",
        body: "This was the final project for ECE 305 (Semiconductor Devices) at Purdue, carried out in Synopsys Sentaurus TCAD. The goal was to simulate a 22 nm FinFET through its full fabrication-aware process flow, sweep its transfer characteristics, and then connect the simulated results back to first-principles device physics. The study ran in two parts: Part 1 looked at fixed oxide charge and gate work function, and Part 2 introduced energy-distributed interface traps — in each case extracting the key device parameters and verifying them with analytical equations.",
      },
      {
        heading: "Simulation Setup",
        body: "Each device was built and run in the Sentaurus Workbench, then post-processed in Sentaurus Visual to view the structure, doping profile, and electrical characteristics. Every transfer curve was simulated in two bias regimes — the linear region (V_DS = 0.05 V) and the saturation region (V_DS = 1.0 V) — and from the resulting Id–Vg curves I extracted threshold voltage (V_T), drain-induced barrier lowering (DIBL), on-current (I_ON), off-current (I_OFF), and subthreshold slope (SS). The gate stack is a SiO₂/HfO₂ bilayer, and the actual channel doping was extracted from the simulated structure rather than taken from the nominal input.",
      },
      {
        heading: "Part 1 — Work Function & Fixed Charge",
        body: "Holding the oxide thickness and doping fixed, I raised the gate work function from 4.2 to 4.5 eV and made the fixed interface charge more negative (−1×10¹¹ → −1×10¹² cm⁻²). Both push the threshold voltage up: V_T rose by ~0.31 V in the linear region, matching a hand calculation of ΔV_T ≈ ΔΦ_MS − ΔQ_ox/C_ox ≈ 0.35 V. The higher V_T reduces the gate overdrive, so I_ON falls (more steeply in saturation, per its quadratic dependence), while I_OFF drops by orders of magnitude — the measured I_OFF ratio of ~4.5×10⁻⁴ closely tracks the exp(−ΔV_T / nV_th) prediction of ~5.2×10⁻⁴. SS and DIBL stayed nearly constant, as expected since C_ox, C_dep, and device geometry were unchanged.",
      },
      {
        heading: "Part 2 — Interface Traps",
        body: "Part 2 replaced the fixed charge with energy-distributed acceptor traps at the oxide/silicon interface (N_trap = 1.8×10¹³ cm⁻²eV⁻¹ over a spread E_s = 1.1 eV). These traps add a trap capacitance C_it that degrades the subthreshold slope and shifts V_T. Using the doping extracted from the structure (N_A = 4.05×10¹⁸ cm⁻³) and the measured gate-stack capacitance, the analytical SS = S₀(1 + (C_dep + C_it)/C_ox) gives ≈165.5 mV/dec versus 165.99 mV/dec in simulation, and the predicted V_T of ≈0.866 V matches the simulated 0.857 V — numerically reproducing the TCAD result from device equations.",
      },
      {
        heading: "Takeaways",
        body: "The project tied TCAD simulation back to analytical MOSFET theory: work function and fixed charge move V_T through the flat-band voltage, threshold shifts drive exponential changes in off-current, and interface traps degrade the subthreshold slope through C_it — each effect predicted by hand to within a few percent of simulation. The full set of extracted parameters, derivations, and Id–Vg plots are in the report and the carousels below.",
      },
    ],
    tables: [
      {
        title: "Simulation Conditions (Part 1)",
        columns: ["Parameter", "Baseline", "Final"],
        rows: [
          ["Dielectric thickness (t_ox)", "2 nm", "2 nm"],
          ["Doping concentration (N)", "1×10¹³", "1×10¹³"],
          ["Gate work function", "4.2 eV", "4.5 eV"],
          ["Interface charge (N_interface)", "−1×10¹¹", "−1×10¹²"],
        ],
      },
      {
        title: "Extracted Parameters — Baseline vs Final (Part 1)",
        columns: ["Parameter", "Region", "Baseline", "Final", "Δ (Final − Base)"],
        rows: [
          ["V_T", "Linear (0.05 V)", "0.2817 V", "0.5951 V", "+0.3134 V"],
          ["V_T", "Saturation (1.0 V)", "0.27195 V", "0.474299 V", "+0.2023 V"],
          ["I_ON", "Linear (0.05 V)", "8.414×10⁻³ mA", "5.393×10⁻³ mA", "−3.021×10⁻³ mA"],
          ["I_ON", "Saturation (1.0 V)", "3.419×10⁻² mA", "1.831×10⁻² mA", "−1.588×10⁻² mA"],
          ["I_OFF", "Linear (0.05 V)", "8.914×10⁻⁷ mA", "4.021×10⁻¹⁰ mA", "−8.91×10⁻⁷ mA"],
          ["I_OFF", "Saturation (1.0 V)", "2.608×10⁻⁵ mA", "2.897×10⁻⁸ mA", "−2.61×10⁻⁵ mA"],
          ["SS", "Linear (0.05 V)", "95.78 mV/dec", "88.94 mV/dec", "−6.84 mV/dec"],
          ["SS", "Saturation (1.0 V)", "136.64 mV/dec", "106.58 mV/dec", "−30.06 mV/dec"],
          ["DIBL", "—", "129.86 mV/V", "145.11 mV/V", "+15.25 mV/V"],
        ],
      },
      {
        title: "Interface Traps — Analytical vs Simulation (Part 2)",
        columns: ["Quantity", "Analytical", "Simulation"],
        rows: [
          ["V_T (linear, 0.05 V)", "≈ 0.866 V", "0.857 V"],
          ["SS (linear, 0.05 V)", "≈ 165.5 mV/dec", "165.99 mV/dec"],
        ],
        note: "Computed using extracted doping N_A = 4.05×10¹⁸ cm⁻³ and the measured SiO₂/HfO₂ gate-stack capacitance.",
      },
    ],
    carousels: [
      {
        title: "Part 1 — Id–Vg Characteristics (Work Function & Fixed Charge)",
        images: [
          { src: "/projects/finfet_sim/part1/base-lin-linear.png", caption: "Baseline · linear region (V_DS = 0.05 V) · linear current scale" },
          { src: "/projects/finfet_sim/part1/base-lin-log.png", caption: "Baseline · linear region (V_DS = 0.05 V) · log current scale" },
          { src: "/projects/finfet_sim/part1/base-sat-linear.png", caption: "Baseline · saturation region (V_DS = 1.0 V) · linear current scale" },
          { src: "/projects/finfet_sim/part1/base-sat-log.png", caption: "Baseline · saturation region (V_DS = 1.0 V) · log current scale" },
          { src: "/projects/finfet_sim/part1/final-lin-linear.png", caption: "Final · linear region (V_DS = 0.05 V) · linear current scale" },
          { src: "/projects/finfet_sim/part1/final-lin-log.png", caption: "Final · linear region (V_DS = 0.05 V) · log current scale" },
          { src: "/projects/finfet_sim/part1/final-sat-linear.png", caption: "Final · saturation region (V_DS = 1.0 V) · linear current scale" },
          { src: "/projects/finfet_sim/part1/final-sat-log.png", caption: "Final · saturation region (V_DS = 1.0 V) · log current scale" },
        ],
      },
      {
        title: "Part 2 — Id–Vg Characteristics (Interface Traps)",
        images: [
          { src: "/projects/finfet_sim/part2/lin-linear.png", caption: "Interface traps · linear region (V_DS = 0.05 V) · linear current scale" },
          { src: "/projects/finfet_sim/part2/lin-log.png", caption: "Interface traps · linear region (V_DS = 0.05 V) · log current scale" },
          { src: "/projects/finfet_sim/part2/sat-linear.png", caption: "Interface traps · saturation region (V_DS = 1.0 V) · linear current scale" },
          { src: "/projects/finfet_sim/part2/sat-log.png", caption: "Interface traps · saturation region (V_DS = 1.0 V) · log current scale" },
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
    image: "/projects/shell/preview.svg",
    github: "https://github.com/DeveshM7/custom-shell",
    youtube: "es-CDSJ1ATQ",
    sections: [
      {
        heading: "Overview",
        body: "This project is a fully functional Unix-like command shell built from scratch in C/C++. It reads command lines, parses them into a structured command representation, and executes them by managing real processes — forking children, wiring up pipes and file descriptors, and waiting on or backgrounding jobs. The result behaves like a real shell: it runs programs with arguments, chains them with pipes, redirects input and output, expands wildcards and variables, and supports shell-level control flow.",
        diagram: {
          src: "/projects/shell/diagram-architecture.svg",
          alt: "Architecture: the terminal sends a command line to the shell process, which lexes (Flex), parses (Yacc), builds a command tree, and executes it via kernel system calls that fork child processes.",
          caption: "How a command line flows through the shell and into the kernel that runs the child processes.",
        },
      },
      {
        heading: "Lexing & Parsing",
        body: "The command-line grammar is defined with Lex (tokenizer) and Yacc (parser). The lexer recognizes operators and special tokens — pipes, the redirection forms (>, >>, <, 2>, >&), background &, quotes, and control-flow keywords — while the Yacc grammar assembles them into a command tree. The root is a ListCommands holding a sequence of commands, where each command is a PipeCommand, IfCommand, WhileCommand, or ForCommand; pipe stages become SimpleCommands, and a control-flow node nests an entire ListCommands as its body. The executor simply walks this tree.",
        diagram: {
          src: "/projects/shell/diagram-command-tree.svg",
          alt: "Parse tree: a root ListCommands holds a PipeCommand (with SimpleCommand children and I/O) and a WhileCommand (with a condition SimpleCommand and a nested ListCommands body containing more SimpleCommands).",
          caption: "The parser builds a command tree; control-flow nodes nest a whole ListCommands as their body.",
        },
      },
      {
        heading: "Pipelines & I/O Redirection",
        body: "Each command stage is executed in its own forked process, with the parent connecting stages through pipes so the output of one feeds the input of the next. Redirection operators rewire a process's standard input, output, and error to files before exec — including append mode, separate or combined stderr, and reading from a file — and a trailing & runs the whole pipeline in the background instead of blocking the prompt.",
        diagram: {
          src: "/projects/shell/diagram-pipeline.svg",
          alt: "Process model for ls -al | grep .c | wc -l: the parent shell forks one child per stage and connects each child's stdout (fd 1) to the next child's stdin (fd 0) through kernel pipes using dup2; the last stage writes to the terminal.",
          caption: "Process & pipe model for ls -al | grep .c | wc -l — one forked child per stage, wired together by kernel pipes.",
        },
      },
      {
        heading: "Expansions",
        body: "Before a command runs, each argument is rewritten by three expansion passes applied in order. First, environment variables: ${VAR} is replaced from the environment, including special variables like ${?} (last exit status), ${$} (the shell's PID), ${!} (last background PID), and ${SHELL}. Next, command substitution: any backtick argument is run and replaced by its output. Finally, wildcards: arguments containing * or ? are matched against directory entries with a regex and expanded to the sorted list of matches. Tilde (~) is handled even earlier, by the lexer. Only after all of this is the final argv handed to exec().",
        diagram: {
          src: "/projects/shell/diagram-expansion.svg",
          alt: "Expansion pipeline applied in order: variable substitution (${VAR}, $?, $!, $$) using the environment table, then command substitution from a nested myshell, then wildcard globbing against directory entries, producing the final argv passed to exec().",
          caption: "The three expansion passes, in the order the code applies them: variables → subshell → wildcards.",
        },
      },
      {
        heading: "Subshells & Command Substitution",
        body: "Backtick command substitution is implemented by running the inner command in a brand-new instance of the shell itself. The parent forks a child that re-execs the shell binary via /proc/self/exe, sets up two pipes, writes the inner command into the child's stdin, and reads everything the child prints back. That captured output is split on whitespace and spliced into the parent command's argument list — so `date` or `ls *.c` inside a command is replaced by its result before the outer command ever runs.",
        diagram: {
          src: "/projects/shell/diagram-subshell.svg",
          alt: "Command substitution: the parent shell forks a child that re-execs the shell via /proc/self/exe; the parent pipes the inner command into the child's stdin and reads the child's stdout, then splits the output and splices it into the parent's argv.",
          caption: "A backtick spawns a fresh shell instance, pipes the inner command to it, and captures its output back into the argument list.",
        },
      },
      {
        heading: "Control Flow & Loops",
        body: "The shell supports if / then / fi, while / do / done, and for / in / do / done, each parsed into its own command node with a condition and a body. The condition is evaluated as a real command: the shell prepends test to it, forks, execs, and reads the exit status. if runs its body once when the status is zero; while re-evaluates the condition and repeats the body as long as it stays zero; for expands its value list (including wildcards), then runs the body once per value with the loop variable set via setenv. Because a body is itself a ListCommands, loops and conditionals nest arbitrarily.",
        diagram: {
          src: "/projects/shell/diagram-control-flow.svg",
          alt: "Control flow: the condition is run through test via fork/execvp; if the exit status is 0 the body (a ListCommands) runs; while and for loop back to re-evaluate, for iterating its value list with setenv on each pass.",
          caption: "Conditions are run as real commands; their exit status drives the branch, and while / for loop back to re-evaluate.",
        },
      },
      {
        heading: "Built-ins & Background Jobs",
        body: "Most commands fork a child and exec the external program, but a few must run inside the shell process itself so they can change its state — cd, setenv, unsetenv, and exit are handled in-process before any fork (printenv runs in the child). Job control is handled at the fork boundary too: a foreground command is waitpid()ed so its exit status can be recorded (and surfaced via ${?}), while a command ending in & is left to run in the background — the prompt returns immediately and a SIGCHLD handler reaps the finished child later. Startup commands are read from a .shellrc file, and source runs commands from any file.",
        diagram: {
          src: "/projects/shell/diagram-builtins.svg",
          alt: "Built-in commands (cd, setenv, unsetenv, exit) run in the shell process; other commands fork and execvp a child. Foreground jobs are waitpid()ed and record $?, while background jobs (&) return to the prompt and are reaped later by a SIGCHLD handler.",
          caption: "Built-ins run in the shell so they can change its state; external commands fork, and background jobs are reaped by a SIGCHLD handler.",
        },
      },
    ],
  },
  {
    slug: "simple-c-compiler",
    title: "Simple C Compiler",
    category: "Compiler Design Project",
    description:
      "A compiler for a subset of C, built with Lex and Yacc, that lexes and parses source code, tracks declarations in a symbol table, and emits working x86-64 assembly with control flow and function support.",
    tags: ["C", "x86-64", "Compilers", "Flex/Bison", "Code Generation", "Assembly"],
    image: "/projects/scc/diagram-compiler.svg",
    github: "https://github.com/DeveshM7/simple-c-compiler",
    youtube: "jnze3tChm-Q",
    videoLabel: "Demo",
    topDiagram: {
      src: "/projects/scc/diagram-compiler.svg",
      alt: "Compiler pipeline: source.c → Flex lexer (tokens) → Yacc parser that emits x86-64 assembly as it reduces → prog.s → gcc assembles and links → a.out. The code generator uses a register stack machine (rbx, r10, r13, r14, r15), symbol tables for globals/locals/strings, and the System V calling convention (rdi…r9, return in rax).",
      caption: "End-to-end pipeline. The parser emits assembly directly as it reduces — using a register stack machine, symbol tables, and the System V calling convention.",
    },
    sections: [
      {
        heading: "Overview",
        body: "scc is a single-pass compiler for a subset of C that translates source straight into x86-64 assembly (AT&T syntax, System V ABI). It's a classic syntax-directed translator: there is no separate AST or intermediate representation — the code generator emits assembly directly inside the Yacc grammar actions as each rule reduces. The emitted .s file is then assembled and linked with gcc into a native executable. The subset is rich enough to write real programs — the test suite includes bubble sort, quicksort, recursion, and an N-Queens solver.",
      },
      {
        heading: "Lexing & Parsing",
        body: "A Flex lexer turns the source into tokens — type keywords (long, long*, char*, char**, void), control-flow keywords, identifiers, integer and string literals, and the full operator set. A Yacc grammar then encodes C's precedence levels as a chain of rules (logical-or → logical-and → equality → relational → additive → multiplicative → primary), so expressions parse with correct associativity and precedence. Because translation is syntax-directed, each grammar rule carries an action that prints the corresponding assembly the moment it reduces.",
      },
      {
        heading: "Expression Code Generation",
        body: "Expressions are compiled onto a register stack machine. Five callee-saved registers — rbx, r10, r13, r14, r15 — act as an operand stack with a top pointer: a primary (a constant, variable, string, or call result) pushes its value into the next register, while a binary operator consumes the top two registers and writes its result back, popping one. Arithmetic maps to addq/subq/imulq and idivq (with rax/rdx for quotient and remainder), comparisons emit cmpq plus setcc, and logical operators use orq/andq. This keeps codegen simple and avoids touching memory for intermediate results.",
      },
      {
        heading: "Variables, Arrays & Symbol Tables",
        body: "Three symbol tables track storage. Globals are emitted as .comm in the .data section and referenced by name; locals (and function parameters) live in the stack frame at -8(%rbp) offsets recorded by declaration order; string literals are collected during parsing and emitted as a labeled .data block at the end. Array indexing computes the element address — scaling the index by 8 for long arrays versus byte access for char arrays, tracked by each symbol's type — and the address-of operator uses leaq on the frame slot.",
      },
      {
        heading: "Functions & Calling Convention",
        body: "Each function emits a .globl label, a prologue (save the frame pointer, reserve stack space, push the callee-saved registers with one extra push to keep the stack 16-byte aligned), and a matching epilogue on return. Incoming parameters are copied from the System V argument registers (rdi, rsi, rdx, rcx, r8, r9) into the frame; calls marshal arguments back into those registers, special-case printf's variadic ABI (zeroing eax), invoke call, and read the result from rax. return moves its value into rax and runs the epilogue.",
      },
      {
        heading: "Control Flow",
        body: "if/else, while, do-while, and for are lowered with uniquely-numbered labels and conditional jumps. A condition expression is evaluated into a register, compared against zero with cmpq, and a je/jne branches accordingly — for example a while loop emits while_start / while_end labels and jumps back to the top each iteration. break and continue jump to the current loop's break_/continue_ labels, tracked by a loop counter so they target the right (innermost) loop.",
      },
      {
        heading: "Backend & Testing",
        body: "The compiler writes a .s file; gcc -static then assembles and links it into a runnable binary. Correctness is checked with a differential test suite: every program is compiled with both scc and gcc, both binaries are run, and their outputs are diffed — grading the compiler against a reference compiler across 30+ programs. The demo below walks through compiling, inspecting the generated assembly, and running the suite.",
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/* ------------------------------------------------------------------ */
/*  UPCOMING PROJECTS — in progress, no dedicated page yet             */
/* ------------------------------------------------------------------ */
export type UpcomingProject = {
  title: string
  status: string
  description: string
  tags: string[]
  image: string
}

export const upcomingProjects: UpcomingProject[] = [
  {
    title: "Wireless Wrist-Worn Motion Controller",
    status: "Actively building",
    description:
      "Building a battery-powered, wrist-worn motion controller: an on-device 1D CNN classifies hand gestures from a 6-axis IMU, streamed over BLE to control media, volume, and scrolling on a laptop — no cloud, no companion app.",
    tags: ["Embedded ML", "RP2350B", "BLE", "TensorFlow Lite Micro", "IMU"],
    image: "/upcoming/wrist-motion-controller.svg",
  },
  {
    title: "Internship Application Agent",
    status: "Actively building",
    description:
      "An LLM-powered agent that tailors a truthful, one-page résumé to any job posting through a compile-time LaTeX measurement loop, tracks every application, and keeps status synced by reading recruiting email.",
    tags: ["Claude API", "Python", "FastAPI", "Next.js", "Postgres/pgvector"],
    image: "/upcoming/internship-agent.svg",
  },
]

/* ------------------------------------------------------------------ */
/*  RESEARCH                                                           */
/* ------------------------------------------------------------------ */
export const research = {
  slug: "embedeval",
  title: "EmbedEval: Benchmarking LLMs for Embedded Software Engineering",
  venue: "Undergraduate Research · Purdue University ECE",
  date: "2025–26",
  role: "Team Lead",
  authors: [
    "Rishi Mantri",
    "Devesh Maheshwari",
    "Ayush Bansal",
    "Aanya Mittal",
    "Alan Hsi",
  ],
  summary:
    "A benchmarking framework that evaluates large language models on real embedded software engineering tasks — bug fixes, feature additions, and driver changes drawn from actual pull requests in RTOS projects (Zephyr, NuttX, RIOT). LLM coding agents resolve each task and their patches are validated in hardware simulators, with no physical hardware required — establishing a reproducible baseline for embedded code generation.",
  stats: [
    { value: "17", label: "real-PR tasks" },
    { value: "5", label: "frontier models" },
    { value: "3", label: "RTOS repos" },
    { value: "70.6%", label: "top pass rate" },
  ],
  highlight: {
    src: "/research/embedeval/embedeval_vs_swebench.png",
    alt: "Bar chart comparing each model's EmbedEval pass rate against its SWE-bench Verified score; every model scores lower on EmbedEval, with open-weight models dropping the most.",
    caption:
      "The headline result: every model scores lower on EmbedEval than on SWE-bench Verified — and weaker models drop the most, exposing gaps that general benchmarks miss.",
  },
  pdf: "/research/embedeval/report.pdf",
  github: "https://github.com/rishimantri795/EmbedEval",
  href: "/research",
}
