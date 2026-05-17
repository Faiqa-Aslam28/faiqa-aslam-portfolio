import projectAether from "@/assets/project-aether.jpg";
import projectNeural from "@/assets/project-neural.jpg";

export const BRAND = {
  name: "Faiqa Aslam",
  tagline: "Software Studio",
  email: "msaadaslam36402@gmail.com",
  phone: "03039606217",
  github: "https://github.com/Faiqa-Aslam28",
  linkedin: "https://www.linkedin.com/in/faiqa-aslam-8969b9407/",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  image?: string;
  size: "lg" | "md" | "sm" | "wide";
  highlight?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Aether Dashboard",
    description:
      "Cloud-native analytics surface with real-time streaming and a modular widget engine.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/Faiqa-Aslam28",
    image: projectAether,
    size: "lg",
    highlight: "Featured",
  },
  {
    title: "NeuralSync",
    description: "LLM-powered workflow automation for product teams.",
    tech: ["Python", "FastAPI", "OpenAI"],
    href: "https://github.com/Faiqa-Aslam28",
    image: projectNeural,
    size: "wide",
  },
  {
    title: "Aura UI",
    description: "Headless component system tuned for dense data UIs.",
    tech: ["React", "Radix", "TS"],
    href: "https://github.com/Faiqa-Aslam28",
    size: "sm",
  },
  {
    title: "Vertex Deploy",
    description: "Multi-cloud CI/CD orchestration with zero-config rollouts.",
    tech: ["Go", "Docker", "K8s"],
    href: "https://github.com/Faiqa-Aslam28",
    size: "sm",
  },
  {
    title: "Quant-Trade",
    description: "High-frequency trading sandbox with backtesting engine.",
    tech: ["Rust", "WASM"],
    href: "https://github.com/Faiqa-Aslam28",
    size: "md",
  },
  {
    title: "1.2k★ on GitHub",
    description: "Community-trusted open source across UI, AI and infra.",
    tech: [],
    href: "https://github.com/Faiqa-Aslam28",
    size: "sm",
    highlight: "OSS",
  },
];

export const SERVICES = [
  {
    title: "Web Engineering",
    desc: "Performant frontends and robust backends built for scale, from MVP to enterprise.",
    points: ["Next.js & React", "Node / Python APIs", "Database design"],
  },
  {
    title: "Mobile & Cross-Platform",
    desc: "Native-feeling apps with a single codebase. Ship to iOS, Android and the web at once.",
    points: ["React Native", "Expo", "Offline-first"],
  },
  {
    title: "AI & Intelligent Systems",
    desc: "LLM integrations, RAG pipelines and ML workflows that turn data into product leverage.",
    points: ["LLM orchestration", "RAG & vector search", "Custom agents"],
  },
  {
    title: "Product Design",
    desc: "Interface and motion design that translates complex flows into intuitive experiences.",
    points: ["UX strategy", "Design systems", "Prototyping"],
  },
];

export const STACK = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "Tailwind", "Framer Motion", "Three.js",
  "Docker", "AWS", "Supabase", "OpenAI", "Figma",
];

export const STATS = [
  { value: "48+", label: "Projects shipped" },
  { value: "99.9%", label: "Uptime delivered" },
  { value: "12ms", label: "Avg. response" },
  { value: "1.2k", label: "GitHub stars" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Faiqa rebuilt our dashboard in six weeks and lifted weekly active sessions by 40%. Rare combination of taste and engineering.",
    author: "Sara Khan",
    role: "Head of Product, Finlytics",
  },
  {
    quote:
      "The codebase we received was the cleanest in our portfolio. Documentation, types, and tests — all there from day one.",
    author: "Marcus Reid",
    role: "CTO, Northwind Labs",
  },
];
