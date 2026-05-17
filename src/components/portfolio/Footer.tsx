import { BRAND } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-md bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-bold text-xs text-primary-foreground">
            FA
          </div>
          <span className="font-semibold">{BRAND.name}</span>
          <span className="text-muted-foreground text-xs">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <a href={BRAND.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
