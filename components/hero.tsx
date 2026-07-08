import Image from "next/image"
import { Mail, ArrowDown } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      {/* decorative accent dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,var(--foreground)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:gap-12 md:py-28">
        <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <span className="flex size-2.5 items-center justify-center">
            <span className="absolute size-2.5 animate-ping rounded-full bg-primary opacity-75" />
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-sm text-muted-foreground">disponible para proyectos</span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
          Hola, soy Matias Morquecho. <br />
          <span className="text-primary">Desarrollador Full Stack especializado en APIs y aplicaciones web.</span> 
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Diseño y desarrollo soluciones escalables, desde la arquitectura backend hasta interfaces modernas y funcionales. Aquí encontrarás una selección de los proyectos en los que he trabajado.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver proyectos
            <ArrowDown className="size-4" />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/morkmorquecho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="GitHub"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/matias-morquecho-52679633b/"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="size-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mork.morquecho@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Enviar correo por Gmail"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
        </div>

        {/* foto de perfil */}
        <div className="relative shrink-0">
          <div className="pointer-events-none absolute -inset-2 rounded-full bg-primary opacity-20 blur-xl" />
          <div className="relative size-28 overflow-hidden rounded-full border-2 border-border bg-secondary md:size-36">
            <Image
              src="/profile.jpeg"
              alt="Foto de Matias, desarrollador web"
              fill
              priority
              sizes="144px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
