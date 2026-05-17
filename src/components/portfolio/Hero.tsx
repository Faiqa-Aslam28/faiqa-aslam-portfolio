import { motion } from "framer-motion";
import heroMesh from "@/assets/hero-mesh.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <img
        src={heroMesh}
        alt=""
        width={1600}
        height={1024}
        className="absolute inset-x-0 bottom-0 -z-10 w-full h-[60%] object-cover object-bottom opacity-40 mask-fade-bottom"
        style={{ maskImage: "linear-gradient(to top, black 30%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 30%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Available for Q3 projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92] text-balance max-w-5xl"
        >
          Architecting{" "}
          <span className="text-gradient-primary">digital products</span>{" "}
          with precision.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col md:flex-row gap-10 items-start max-w-5xl"
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            A software studio building bespoke web, mobile and AI products for ambitious
            teams. Engineered for speed, designed for delight.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform shadow-[var(--shadow-glow)]"
            >
              View Portfolio →
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full glass glass-hover font-semibold text-sm"
            >
              Start a project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
