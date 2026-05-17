import { motion } from "framer-motion";
import { STATS, TESTIMONIALS } from "@/data/portfolio";

export function Stats() {
  return (
    <section className="py-32 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2"
            >
              <span className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-gradient-primary">
                {s.value}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <div className="text-primary text-3xl font-display leading-none mb-4">"</div>
              <blockquote className="text-lg leading-relaxed text-foreground/90 mb-6">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-bold text-sm text-primary-foreground">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
