import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Articles } from "@/components/sections/articles";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Life } from "@/components/sections/life";
import { Projects } from "@/components/sections/projects";
import { Tools } from "@/components/sections/tools";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Tools />
        <Articles />
        <Life />
      </main>
      <Footer />
    </div>
  );
}
