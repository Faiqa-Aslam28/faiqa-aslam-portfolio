import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/data/portfolio";

const sizeClass: Record<Project["size"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  md: "md:col-span-1 md:row-span-1",
  sm: "md:col-span-1",
};

export function Bento() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary block mb-3">
              Selected works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Built in the <span className="text-gradient">open.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Faiqa-Aslam28"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            View all repos →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl glass glass-hover p-6 flex flex-col justify-between ${sizeClass[p.size]}`}
            >
              <div className="z-10 relative">
                <div className="flex items-start justify-between mb-3">
                  {p.highlight && (
                    <span className="px-2 py-0.5 rounded-md bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {p.highlight}
                    </span>
                  )}
                  <span className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity text-primary text-sm">
                    ↗
                  </span>
                </div>
                <h3 className="font-display font-bold tracking-tight text-xl md:text-2xl mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {p.tech.length > 0 && (
                <div className="z-10 relative flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-1 rounded-md border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {p.image && (
                <div
                  className="absolute inset-0 -z-0 opacity-25 group-hover:opacity-45 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              <div className="absolute inset-0 -z-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
