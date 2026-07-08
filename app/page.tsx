import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProjectShowcase } from "@/components/project-showcase"
import { projects } from "@/lib/projects"
import { Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-16 flex flex-col gap-3 md:mb-24">
          <span className="font-mono text-sm text-primary">// proyectos</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Cosas que he construido
          </h2>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Cada proyecto tiene su propio color. Reproduce los videos o haz clic en las imágenes
            para verlos de cerca.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <About />

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            ¿Tienes una idea? Hagámosla realidad.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mork.morquecho@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Escríbeme
            </a>
            <a
              href="https://github.com/morkmorquecho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Matias Morquecho
          </p>
        </div>
      </footer>
    </main>
  )
}
