import { motion } from "framer-motion";
import { STACK } from "@/data/portfolio";

export function Stack() {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary block mb-3">
            Tech stack
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            The tools we <span className="text-gradient">live in.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="px-5 py-2.5 rounded-full glass text-sm font-medium cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
