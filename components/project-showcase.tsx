"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Play, X } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { Project } from "@/lib/projects"
import { TechList } from "@/components/tech-badge"

function getYouTubeId(url: string) {
  const match = url.match(/embed\/([^?]+)/)
  return match ? match[1] : null
}

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const [playing, setPlaying] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const ytId = project.video ? getYouTubeId(project.video) : null
  const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : null
  const reversed = index % 2 === 1

  return (
    <>
      <article
        className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        {/* MEDIA — protagonista */}
        <div className={`lg:col-span-8 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative">
            {/* glow del color de acento */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: "var(--accent)" }}
            />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl ring-1 ring-white/5">
              {project.video ? (
                playing && ytId ? (
                  <iframe
                    className="absolute inset-0 size-full"
                    src={`${project.video}?autoplay=1&rel=0`}
                    title={project.title}
                    allow="accelerated-features; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 size-full cursor-pointer"
                    aria-label={`Reproducir video de ${project.title}`}
                  >
                    {thumb && (
                      <Image
                        src={thumb || "/placeholder.svg"}
                        alt={`Vista previa de ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        crossOrigin="anonymous"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span
                      className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--accent)" }}
                    >
                      <Play className="size-8 translate-x-1 fill-background text-background" />
                    </span>
                  </button>
                )
              ) : project.image ? (
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="absolute inset-0 size-full cursor-zoom-in"
                  aria-label={`Ampliar imagen de ${project.title}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Captura del proyecto ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* INFO — columna lateral compacta */}
        <div className={`lg:col-span-4 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex items-center gap-4">
            <span
              className="font-heading text-5xl font-bold leading-none tracking-tighter sm:text-6xl"
              style={{ color: "var(--accent)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1" style={{ background: "var(--accent)", opacity: 0.4 }} />
          </div>

          <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-balance text-foreground sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>

          <div className="mt-6">
            <TechList tech={project.tech} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                style={{ background: "var(--accent)" }}
              >
                <ExternalLink className="size-4" />
                Ver sitio
              </a>
            )}
            {project.git && (
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <FaGithub className="size-4" />
                Código
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {lightbox && project.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada de ${project.title}`}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            aria-label="Cerrar"
          >
            <X className="size-5" />
          </button>
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`Captura ampliada del proyecto ${project.title}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  )
}
