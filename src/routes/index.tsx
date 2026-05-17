import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Bento } from "@/components/portfolio/Bento";
import { Services } from "@/components/portfolio/Services";
import { Stack } from "@/components/portfolio/Stack";
import { Stats } from "@/components/portfolio/Stats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faiqa Aslam — Software Studio" },
      {
        name: "description",
        content:
          "Faiqa Aslam is a software studio building bespoke web, mobile and AI products for ambitious teams.",
      },
      { property: "og:title", content: "Faiqa Aslam — Software Studio" },
      {
        property: "og:description",
        content:
          "Bespoke web, mobile and AI products engineered for speed and designed for delight.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <Nav />
      <Hero />
      <Bento />
      <Services />
      <Stack />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
