import { motion } from "framer-motion";
import { SERVICES } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary block mb-3">
            What we do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Engineering services for{" "}
            <span className="text-gradient">ambitious teams.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass glass-hover rounded-3xl p-8 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="size-10 rounded-full border border-border grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  →
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 border-t border-border pt-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span className="size-1 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
