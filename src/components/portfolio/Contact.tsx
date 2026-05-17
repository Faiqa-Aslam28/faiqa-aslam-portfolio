import { motion } from "framer-motion";
import { useState } from "react";
import { BRAND } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary block mb-3">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
            Let's build something{" "}
            <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
            Tell us about your project. We typically reply within 24 hours.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center justify-between p-5 rounded-2xl glass glass-hover group"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                <div className="font-semibold">{BRAND.email}</div>
              </div>
              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-between p-5 rounded-2xl glass glass-hover group"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                <div className="font-semibold">{BRAND.phone}</div>
              </div>
              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex gap-3 pt-2">
              <a href={BRAND.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full glass glass-hover text-sm font-medium">GitHub</a>
              <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full glass glass-hover text-sm font-medium">LinkedIn</a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="glass rounded-3xl p-8 space-y-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Project type</label>
            <input
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm"
              placeholder="Web app, AI integration, ..."
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Tell us more</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm resize-none"
              placeholder="A few sentences about scope, timeline, and budget."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform shadow-[var(--shadow-glow)]"
          >
            {sent ? "✓ Message sent" : "Send inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
