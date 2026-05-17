import { motion } from "framer-motion";
import { BRAND } from "@/data/portfolio";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-bold text-sm text-primary-foreground">
            FA
          </div>
          <span className="font-display font-bold tracking-tight">
            {BRAND.name}<span className="text-primary">.</span>
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-full border border-border text-xs font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all"
        >
          Hire Agency
        </a>
      </div>
    </motion.nav>
  );
}
